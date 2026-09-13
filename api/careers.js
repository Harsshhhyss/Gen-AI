import { Resend } from 'resend';

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, role, experience, portfolioUrl, coverNote } = req.body || {};

    if (!name || !email || !role) {
      return res.status(400).json({
        success: false,
        error: 'Full Name, Email address, and Target Role are required to submit an application.'
      });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY environment variable is missing.');
      return res.status(500).json({
        success: false,
        error: 'Email service configuration error: RESEND_API_KEY is missing in Vercel environment variables.'
      });
    }

    const resend = new Resend(apiKey);

    const candidatePhone = phone || 'Not provided';
    const candidateExp = experience || 'Not specified';
    const candidateLinks = portfolioUrl || 'Not provided';
    const candidatePitch = coverNote || 'No pitch provided.';

    // 1. Dispatch candidate dossier to NextGen AI team
    const { data, error } = await resend.emails.send({
      from: 'NextGen AI Careers <connect@getnextgen.in>',
      to: ['connect@getnextgen.in'],
      replyTo: email,
      subject: `🎯 New Job Application: ${name} — ${role}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0c0c0c; color: #e0e0e0; margin: 0; padding: 24px; }
              .container { max-width: 620px; margin: 0 auto; background-color: #161616; border: 1px solid #2a2a2a; border-radius: 12px; overflow: hidden; }
              .header { background: linear-gradient(135deg, #18011F 0%, #2a0b3d 100%); padding: 24px; border-bottom: 1px solid #333; }
              .header h2 { margin: 0; color: #ffffff; font-size: 20px; font-weight: 700; letter-spacing: -0.5px; }
              .header p { margin: 6px 0 0 0; color: #00d8ff; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 600; }
              .body { padding: 24px; }
              .field { margin-bottom: 16px; }
              .label { font-size: 11px; text-transform: uppercase; color: #888888; letter-spacing: 1px; margin-bottom: 4px; }
              .value { font-size: 15px; color: #ffffff; font-weight: 500; }
              .value a { color: #00d8ff; text-decoration: none; }
              .message-box { background-color: #0c0c0c; border: 1px solid #2a2a2a; border-left: 3px solid #7621B0; border-radius: 8px; padding: 16px; margin-top: 16px; }
              .message-text { color: #d0d0d0; font-size: 14px; line-height: 1.6; white-space: pre-wrap; margin: 0; }
              .footer { padding: 16px 24px; background-color: #111111; border-top: 1px solid #222; text-align: center; font-size: 11px; color: #666; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>Candidate Application Dossier</h2>
                <p>NextGen AI Talent Portal · Pune & Remote</p>
              </div>
              <div class="body">
                <div class="field">
                  <div class="label">Candidate Name</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Role Applied For</div>
                  <div class="value" style="color: #00d8ff; font-weight: bold;">${role}</div>
                </div>
                <div class="field">
                  <div class="label">Email Address</div>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
                <div class="field">
                  <div class="label">Phone / WhatsApp</div>
                  <div class="value"><a href="tel:${candidatePhone}">${candidatePhone}</a></div>
                </div>
                <div class="field">
                  <div class="label">Experience Level</div>
                  <div class="value">${candidateExp}</div>
                </div>
                <div class="field">
                  <div class="label">Portfolio / GitHub / Resume URL</div>
                  <div class="value"><a href="${candidateLinks.startsWith('http') ? candidateLinks : `https://${candidateLinks}`}" target="_blank">${candidateLinks}</a></div>
                </div>
                <div class="field">
                  <div class="label">Candidate Pitch / Background</div>
                  <div class="message-box">
                    <p class="message-text">${candidatePitch}</p>
                  </div>
                </div>
              </div>
              <div class="footer">
                Received via https://www.getnextgen.in/careers · Reply directly to this email to interview candidate.
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend application dispatch error:', error);
      const errDetail = error.message || (typeof error === 'string' ? error : JSON.stringify(error));
      return res.status(400).json({
        success: false,
        error: `Resend error: ${errDetail}`
      });
    }

    // 2. Dispatch automated candidate receipt acknowledging their application
    let candidateReceiptSent = false;
    if (email && email.includes('@')) {
      try {
        const candidateRes = await resend.emails.send({
          from: 'NextGen AI Careers <connect@getnextgen.in>',
          to: [email],
          subject: `Application Received: ${role} — NextGen AI`,
          html: `
            <!DOCTYPE html>
            <html>
              <body style="font-family: Arial, sans-serif; background-color: #0c0c0c; color: #e0e0e0; margin: 0; padding: 24px;">
                <div style="max-width: 600px; margin: 0 auto; background: #141414; border: 1px solid #2a2a2a; border-radius: 12px; padding: 28px;">
                  <h2 style="color: #ffffff; margin-top: 0; font-size: 22px;">Thank you for applying, ${name}.</h2>
                  <p style="color: #00d8ff; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; font-weight: bold; margin-bottom: 20px;">
                    Application Acknowledged · ${role}
                  </p>
                  <p style="color: #cccccc; font-size: 14px; line-height: 1.6;">
                    We have successfully received your candidacy for the <strong>${role}</strong> position at NextGen AI.
                  </p>
                  <p style="color: #cccccc; font-size: 14px; line-height: 1.6;">
                    Founder Harsh Kumar Singh and our technical hiring team review all portfolio submissions and proof-of-work repositories. If your skillset aligns with our current architecture roadmap, we will contact you within <strong>48 to 72 business hours</strong> to schedule a technical chat.
                  </p>
                  
                  <div style="margin: 24px 0; padding: 18px; background: #0c0c0c; border-radius: 8px; border-left: 3px solid #7621B0;">
                    <p style="margin: 0 0 6px 0; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 1px;">Have quick questions or proof of work to share?</p>
                    <p style="margin: 0; color: #ffffff; font-size: 14px;">
                      Reach out directly to our hiring team on WhatsApp: 
                      <a href="https://wa.me/917385750187" style="color: #25D366; text-decoration: none; font-weight: bold; margin-left: 4px;">+91 7385750187</a>
                    </p>
                  </div>

                  <p style="color: #666666; font-size: 12px; margin-top: 30px; border-top: 1px solid #222; padding-top: 16px; line-height: 1.5;">
                    NextGen AI · Engineering & AI Research<br />
                    Pune, Maharashtra, India · <a href="https://www.getnextgen.in" style="color: #00d8ff; text-decoration: none;">www.getnextgen.in</a>
                  </p>
                </div>
              </body>
            </html>
          `,
        });

        if (candidateRes?.data?.id) {
          candidateReceiptSent = true;
        }
      } catch (receiptErr) {
        console.warn('Could not dispatch candidate receipt:', receiptErr);
      }
    }

    return res.status(200).json({
      success: true,
      applicationId: data?.id,
      recipient: 'connect@getnextgen.in',
      candidateReceiptSent
    });
  } catch (error) {
    console.error('Unexpected error in careers API:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Internal Server Error'
    });
  }
}
