import { createServerFn } from "@tanstack/react-start";

type ContactData = {
  name: string;
  email: string;
  website: string;
  message: string;
};

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data: unknown): ContactData => {
    if (!data || typeof data !== "object") {
      throw new Error("Invalid form data");
    }
    const d = data as Record<string, unknown>;
    if (!d.name || !d.email || !d.message) {
      throw new Error("Name, email and message are required");
    }
    return d as unknown as ContactData;
  })
  .handler(async ({ data }) => {
    const { name, email, website, message } = data;

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL || "evanmatraiajr@gmail.com";

    if (!apiKey) {
      console.warn(
        "RESEND_API_KEY not set — contact form message logged instead of emailed.",
      );
      console.log({ name, email, website, message });
      return { success: true };
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Contact Form <onboarding@resend.dev>",
        to: [toEmail],
        subject: `New message from ${name}`,
        html: [
          "<table style='width:100%;max-width:560px;font-family:sans-serif'>",
          "<tr><td style='padding:8px 0;color:#666'>Name</td></tr>",
          `<tr><td style='padding:0 0 16px;font-weight:600'>${name}</td></tr>`,
          "<tr><td style='padding:8px 0;color:#666'>Email</td></tr>",
          `<tr><td style='padding:0 0 16px'>${email}</td></tr>`,
          website
            ? "<tr><td style='padding:8px 0;color:#666'>Website</td></tr>" +
              `<tr><td style='padding:0 0 16px'>${website}</td></tr>`
            : "",
          "<tr><td style='padding:8px 0;color:#666'>Message</td></tr>",
          `<tr><td style='padding:0 0 16px'>${message}</td></tr>`,
          "</table>",
        ].join(""),
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error("Resend error:", res.status, body);
      throw new Error("Failed to send email");
    }

    return { success: true };
  });
