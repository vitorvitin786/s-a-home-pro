import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const LeadSchema = z
  .object({
    fullName: z.string().trim().min(1).max(120),
    phone: z.string().trim().max(30).default(""),
    email: z.union([z.string().trim().email().max(200), z.literal("")]).default(""),
    projectType: z.string().max(60).default(""),
    zip: z.string().trim().max(10).default(""),
    address: z.string().max(300).default(""),
    service: z.string().max(120).default(""),
    sqft: z.string().max(30).default(""),
    contactMethod: z.string().max(20).default(""),
    startDate: z.string().max(20).default(""),
    description: z.string().trim().min(1).max(5000),
    botcheck: z.string().max(10).default(""),
  })
  .refine((data) => data.phone.replace(/\D/g, "").length >= 7 || !!data.email, {
    message: "A valid phone number or email is required",
  });

const OWNER_EMAIL = "sauloaguiarcamp@outlook.com";
const GATEWAY_URL = "https://connector-gateway.lovable.dev/microsoft_outlook";

export const sendLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => LeadSchema.parse(data))
  .handler(async ({ data }) => {
    if (data.botcheck) return { ok: true };
    let dbError: unknown = null;
    try {
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
      const result = await supabaseAdmin.from("estimate_requests").insert({
        full_name: data.fullName,
        phone: data.phone,
        email: data.email,
        project_type: data.projectType,
        zip: data.zip,
        address: data.address,
        service: data.service,
        sqft: data.sqft,
        contact_method: data.contactMethod,
        start_date: data.startDate,
        description: data.description,
      });
      dbError = result.error;
    } catch (error) {
      dbError = error;
    }
    if (dbError) console.error("Lead save failed:", dbError);
    const lovableKey = process.env["LOVABLE_API_KEY"];
    const outlookKey = process.env["MICROSOFT_OUTLOOK_API_KEY"];
    if (!lovableKey || !outlookKey) {
      if (dbError) throw new Error("Email is not configured.");
      return { ok: true };
    }

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

    try {
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
            ...(data.email
              ? { replyTo: [{ emailAddress: { address: data.email, name: data.fullName } }] }
              : {}),
          },
          saveToSentItems: false,
        }),
      });
      if (!res.ok) {
        console.error(`Outlook send failed [${res.status}]: ${await res.text()}`);
        if (dbError) throw new Error("Could not send request.");
      }
    } catch (error) {
      console.error("Outlook send failed:", error);
      if (dbError) throw new Error("Could not send request.");
    }
    return { ok: true };
  });
