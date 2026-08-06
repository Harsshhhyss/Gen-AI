import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, phone, projectDetails } = req.body;

    if (!name || !phone) {
      return res.status(400).json({ error: 'Name and Phone are required' });
    }

    const { data, error } = await resend.emails.send({
      from: 'NextGen AI Contact Form <onboarding@resend.dev>', // Update this to your verified domain later if needed
      to: ['aigetnextgen@gmail.com'],
      subject: `New Project Inquiry from ${name}`,
      html: `
        <h2>New Inquiry from NextGen AI Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Project Details:</strong></p>
        <p>${projectDetails || 'No details provided.'}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(400).json({ error });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Unexpected error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
