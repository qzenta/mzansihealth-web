import { siteConfig } from "./site-config";

interface ContactSubmission {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";

export async function sendContactEmail(submission: ContactSubmission) {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    throw new Error("BREVO_API_KEY is not configured");
  }

  const notifyRes = await fetch(BREVO_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify({
      sender: { name: `${siteConfig.name} Website`, email: siteConfig.emails.info },
      to: [{ email: siteConfig.emails.info }],
      subject: `New enquiry (${submission.service}) — ${submission.name}`,
      htmlContent: `
        <p><strong>Name:</strong> ${submission.name}</p>
        <p><strong>Phone:</strong> ${submission.phone}</p>
        <p><strong>Email:</strong> ${submission.email}</p>
        <p><strong>Service Required:</strong> ${submission.service}</p>
        <p><strong>Message:</strong> ${submission.message}</p>
      `,
    }),
  });

  if (!notifyRes.ok) {
    throw new Error(`Brevo notification email failed: ${notifyRes.status}`);
  }

  const confirmRes = await fetch(BREVO_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify({
      sender: { name: siteConfig.name, email: siteConfig.emails.info },
      to: [{ email: submission.email, name: submission.name }],
      subject: `We've received your enquiry — ${siteConfig.name}`,
      htmlContent: `<p>Hi ${submission.name},</p><p>Thanks for reaching out to ${siteConfig.name}. We've received your enquiry and will be in touch shortly.</p>`,
    }),
  });

  if (!confirmRes.ok) {
    throw new Error(`Brevo confirmation email failed: ${confirmRes.status}`);
  }
}
