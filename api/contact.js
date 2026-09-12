import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, service, budget, message, projectDetails } = req.body || {};

    if (!name || (!phone && !email)) {
      return res.status(400).json({ error: 'Name and either Email or Phone are required' });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY environment variable is missing.');
      return res.status(500).json({ error: 'Email service not configured. Missing RESEND_API_KEY.' });
    }

    const clientEmail = email || 'Not provided';
    const clientPhone = phone || 'Not provided';
    const clientService = service || 'General Technical Inquiry';
    const clientBudget = budget || 'Not specified';
    const details = message || projectDetails || 'No details provided.';

    const { data, error } = await resend.emails.send({
      from: 'NextGen AI Lead Bot <onboarding@resend.dev>',
      to: ['aigetnextgen@gmail.com'],
      replyTo: email ? email : undefined,
      subject: `⚡ New Project Inquiry: ${name} (${clientService})`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0c0c0c; color: #e0e0e0; margin: 0; padding: 24px; }
              .container { max-width: 600px; margin: 0 auto; background-color: #161616; border: 1px solid #2a2a2a; border-radius: 12px; overflow: hidden; }
              .header { background: linear-gradient(135deg, #18011F 0%, #2a0b3d 100%); padding: 24px; border-bottom: 1px solid #333; }
              .header h2 { margin: 0; color: #ffffff; font-size: 20px; font-weight: 700; letter-spacing: -0.5px; }
              .header p { margin: 6px 0 0 0; color: #00d8ff; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; }
              .body { padding: 24px; }
              .field { margin-bottom: 16px; }
              .label { font-size: 11px; text-transform: uppercase; color: #888888; letter-spacing: 1px; margin-bottom: 4px; }
              .value { font-size: 15px; color: #ffffff; font-weight: 500; }
              .value a { color: #00d8ff; text-decoration: none; }
              .message-box { background-color: #0c0c0c; border: 1px solid #2a2a2a; border-left: 3px solid #00d8ff; border-radius: 8px; padding: 16px; margin-top: 16px; }
              .message-text { color: #d0d0d0; font-size: 14px; line-height: 1.6; white-space: pre-wrap; margin: 0; }
              .footer { padding: 16px 24px; background-color: #111111; border-top: 1px solid #222; text-align: center; font-size: 11px; color: #666; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>New Proposal Request</h2>
                <p>NextGen AI Website Lead</p>
              </div>
              <div class="body">
                <div class="field">
                  <div class="label">Client Name</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Work Email</div>
                  <div class="value"><a href="mailto:${clientEmail}">${clientEmail}</a></div>
                </div>
                <div class="field">
                  <div class="label">Phone / WhatsApp</div>
                  <div class="value"><a href="tel:${clientPhone}">${clientPhone}</a></div>
                </div>
                <div class="field">
                  <div class="label">Requested Service</div>
                  <div class="value" style="color: #00d8ff;">${clientService}</div>
                </div>
                <div class="field">
                  <div class="label">Estimated Budget</div>
                  <div class="value">${clientBudget}</div>
                </div>
                <div class="field">
                  <div class="label">Project Scope & Details</div>
                  <div class="message-box">
                    <p class="message-text">${details}</p>
                  </div>
                </div>
              </div>
              <div class="footer">
                Received via https://www.getnextgen.in/contact · Reply directly to this email to contact the lead.
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend dispatch error:', error);
      return res.status(400).json({ error });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Unexpected error in contact API:', error);
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}
