import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const LeadSchema = z.object({
  fullName: z.string().trim().min(1).max(120),
  phone: z.string().trim().min(7).max(30),
  email: z.string().trim().email().max(200),
  projectType: z.string().max(60).default(""),
  zip: z.string().trim().max(10).default(""),
  address: z.string().max(300).default(""),
  service: z.string().max(120).default(""),
  sqft: z.string().max(30).default(""),
  contactMethod: z.string().max(20).default(""),
  startDate: z.string().max(20).default(""),
  description: z.string().trim().min(1).max(5000),
  botcheck: z.string().max(10).default(""),
});

const OWNER_EMAIL = "sauloaguiarcamp@outlook.com";
const GATEWAY_URL = "https://connector-gateway.lovable.dev/microsoft_outlook";

export const sendLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => LeadSchema.parse(data))
  .handler(async ({ data }) => {
    if (data.botcheck) return { ok: true };
    const lovableKey = process.env["LOVABLE_API_KEY"];
    const outlookKey = process.env["MICROSOFT_OUTLOOK_API_KEY"];
    if (!lovableKey || !outlookKey) throw new Error("Email is not configured.");

    const lines: [string, string][] = [
      ["Name", data.fullName],
      ["Phone", data.phone],
      ["Email", data.email],
      ["Project type", data.projectType],
      ["Service", data.service],
      ["ZIP", data.zip],
      ["Address", data.address],
      ["Square footage", data.sqft],
      ["Preferred contact", data.contactMethod],
      ["Preferred start", data.startDate],
      ["Description", data.description],
    ];
    const content = lines.map(([k, v]) => `${k}: ${v || "—"}`).join("\n");

    const res = await fetch(`${GATEWAY_URL}/me/sendMail`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": outlookKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: {
          subject: `New website lead — ${data.service || "Project inquiry"} — ${data.fullName}`,
          body: { contentType: "Text", content },
          toRecipients: [{ emailAddress: { address: OWNER_EMAIL } }],
          replyTo: [{ emailAddress: { address: data.email, name: data.fullName } }],
        },
        saveToSentItems: false,
      }),
    });
    if (!res.ok) {
      console.error(`Outlook send failed [${res.status}]: ${await res.text()}`);
      throw new Error("Could not send request.");
    }
    return { ok: true };
  });
