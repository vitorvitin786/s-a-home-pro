import { useState } from "react";
import { CheckCircle2, Mail, MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { serviceOptions, site } from "@/lib/site";

const fieldClass =
  "w-full rounded-sm border border-input bg-background px-4 py-3 text-base outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20";
const labelClass = "block text-sm font-semibold text-foreground";

export function EstimateForm({ defaultService }: { defaultService?: string }) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-md border border-border bg-card p-8 text-center shadow-card">
        <CheckCircle2 className="mx-auto size-12 text-primary" aria-hidden="true" />
        <h3 className="mt-4 text-xl">Your estimate request is ready</h3>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          Your email app should have opened with the project details. Send the email to finish your request.
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          If email is not available, call or text {site.phoneDisplay} directly.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild variant="cta" size="lg">
            <a href={site.telHref}>
              <Phone aria-hidden="true" /> Call Now
            </a>
          </Button>
          <Button asChild variant="outlineDark" size="lg">
            <a href={site.smsHref}>
              <MessageSquare aria-hidden="true" /> Text Us
            </a>
          </Button>
        </div>
      </div>
    );
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const get = (name: string) => String(form.get(name) ?? "").trim();
    const subject = `Free Estimate Request — ${get("service") || "Home Remodeling"}`;
    const body = [
      `New free estimate request for ${site.name}`,
      "",
      `Name: ${get("fullName")}`,
      `Phone: ${get("phone")}`,
      `Email: ${get("email")}`,
      `ZIP Code: ${get("zip")}`,
      `Project Address: ${get("address") || "Not provided"}`,
      `Service: ${get("service")}`,
      `Approx. Square Footage: ${get("sqft") || "Not provided"}`,
      `Preferred Contact Method: ${get("contactMethod") || "Not provided"}`,
      `Preferred Start Date: ${get("startDate") || "Not provided"}`,
      "",
      "Project Description:",
      get("description"),
      "",
      "Photos: Please attach project photos to the email before sending if needed.",
    ].join("\n");

    window.location.href = `${site.mailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <form
      className="rounded-md border border-border bg-card p-6 shadow-card md:p-8"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="fullName">Full Name *</label>
          <input id="fullName" name="fullName" autoComplete="name" required className={`mt-2 ${fieldClass}`} />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">Phone Number *</label>
          <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required className={`mt-2 ${fieldClass}`} />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">Email *</label>
          <input id="email" name="email" type="email" autoComplete="email" required className={`mt-2 ${fieldClass}`} />
        </div>
        <div>
          <label className={labelClass} htmlFor="zip">ZIP Code *</label>
          <input id="zip" name="zip" inputMode="numeric" autoComplete="postal-code" pattern="[0-9]{5}" maxLength={5} required className={`mt-2 ${fieldClass}`} />
        </div>
        <div>
          <label className={labelClass} htmlFor="address">Project Address <span className="font-normal text-muted-foreground">(optional)</span></label>
          <input id="address" name="address" autoComplete="street-address" className={`mt-2 ${fieldClass}`} />
        </div>
        <div>
          <label className={labelClass} htmlFor="service">Service Needed *</label>
          <select id="service" name="service" required defaultValue={defaultService ?? ""} className={`mt-2 ${fieldClass}`}>
            <option value="" disabled>Select a service</option>
            {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="sqft">Approximate Square Footage</label>
          <input id="sqft" name="sqft" inputMode="numeric" placeholder="e.g. 850" className={`mt-2 ${fieldClass}`} />
        </div>
        <div>
          <label className={labelClass} htmlFor="contactMethod">Preferred Contact Method</label>
          <select id="contactMethod" name="contactMethod" defaultValue="Call" className={`mt-2 ${fieldClass}`}>
            <option>Call</option><option>Text</option><option>Email</option>
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="startDate">Preferred Start Date</label>
          <input id="startDate" name="startDate" type="date" className={`mt-2 ${fieldClass}`} />
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="description">Project Description *</label>
          <textarea id="description" name="description" rows={5} required placeholder="Tell us about the rooms, materials, current flooring and what you'd like done." className={`mt-2 ${fieldClass}`} />
        </div>
        <div className="sm:col-span-2 rounded-sm border border-dashed border-border bg-muted/30 px-4 py-3 text-sm text-muted-foreground">
          <p className="font-semibold text-foreground">Have project photos?</p>
          <p className="mt-1">After your email opens, attach your photos there before sending. The website does not upload or store customer photos yet.</p>
        </div>
      </div>

      <Button type="submit" variant="cta" size="xl" className="mt-7 w-full">
        <Mail aria-hidden="true" /> Request My Free Estimate
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Your request opens in your email app and is addressed to {site.email}.
      </p>
    </form>
  );
}
