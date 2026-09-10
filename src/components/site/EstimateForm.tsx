import { useState } from "react";
import { CheckCircle2, Mail, MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { serviceOptions, site } from "@/lib/site";

const fieldClass =
  "w-full rounded-sm border border-input bg-background px-4 py-3 text-base outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20";
const labelClass = "block text-sm font-semibold text-foreground";

export function EstimateForm({ defaultService }: { defaultService?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  if (submitted) {
    return (
      <div className="rounded-md border border-border bg-card p-8 text-center shadow-card">
        <CheckCircle2 className="mx-auto size-12 text-primary" aria-hidden="true" />
        <h3 className="mt-4 text-xl">Your estimate request was sent</h3>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          Thank you for contacting S&amp;A Homes Services. We&rsquo;ll review your project
          information and contact you about the next step.
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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formElement = e.currentTarget;
    const form = new FormData(formElement);
    form.set("_subject", `New website estimate — ${String(form.get("service") || "Remodeling")}`);
    form.set("_template", "table");
    form.set("_captcha", "true");
    form.set("_replyto", String(form.get("email") || ""));

    setSubmitting(true);
    setError("");
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: form,
      });
      if (!response.ok) throw new Error("Estimate request failed");
      formElement.reset();
      setSubmitted(true);
    } catch {
      setError("We couldn’t send the request. Please call, text or try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      className="rounded-md border border-border bg-card p-6 shadow-card md:p-8"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" />
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="fullName">
            Full Name *
          </label>
          <input
            id="fullName"
            name="fullName"
            autoComplete="name"
            required
            className={`mt-2 ${fieldClass}`}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            className={`mt-2 ${fieldClass}`}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={`mt-2 ${fieldClass}`}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="zip">
            ZIP Code *
          </label>
          <input
            id="zip"
            name="zip"
            inputMode="numeric"
            autoComplete="postal-code"
            pattern="[0-9]{5}"
            maxLength={5}
            required
            className={`mt-2 ${fieldClass}`}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="address">
            Project Address <span className="font-normal text-muted-foreground">(optional)</span>
          </label>
          <input
            id="address"
            name="address"
            autoComplete="street-address"
            className={`mt-2 ${fieldClass}`}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="service">
            Service Needed *
          </label>
          <select
            id="service"
            name="service"
            required
            defaultValue={defaultService ?? ""}
            className={`mt-2 ${fieldClass}`}
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="sqft">
            Approximate Square Footage
          </label>
          <input
            id="sqft"
            name="sqft"
            inputMode="numeric"
            placeholder="e.g. 850"
            className={`mt-2 ${fieldClass}`}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="contactMethod">
            Preferred Contact Method
          </label>
          <select
            id="contactMethod"
            name="contactMethod"
            defaultValue="Call"
            className={`mt-2 ${fieldClass}`}
          >
            <option>Call</option>
            <option>Text</option>
            <option>Email</option>
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="startDate">
            Preferred Start Date
          </label>
          <input id="startDate" name="startDate" type="date" className={`mt-2 ${fieldClass}`} />
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="description">
            Project Description *
          </label>
          <textarea
            id="description"
            name="description"
            rows={5}
            required
            placeholder="Tell us about the rooms, materials, current flooring and what you'd like done."
            className={`mt-2 ${fieldClass}`}
          />
        </div>
        <div className="sm:col-span-2 rounded-sm border border-dashed border-border bg-muted/30 px-4 py-3 text-sm text-muted-foreground">
          <p className="font-semibold text-foreground">Have project photos?</p>
          <label className="mt-3 block" htmlFor="attachment">
            <span className="sr-only">Attach project photo</span>
            <input
              id="attachment"
              name="attachment"
              type="file"
              accept="image/jpeg,image/png,image/webp"
              className="block w-full text-sm file:mr-4 file:rounded-sm file:border-0 file:bg-primary file:px-4 file:py-2 file:font-semibold file:text-primary-foreground"
            />
          </label>
          <p className="mt-2 text-xs">
            Optional: JPG, PNG or WebP. For several photos, send them by text after submitting.
          </p>
        </div>
      </div>

      {error && (
        <p role="alert" className="mt-5 text-center text-sm font-semibold text-destructive">
          {error}
        </p>
      )}
      <Button type="submit" variant="cta" size="xl" className="mt-7 w-full" disabled={submitting}>
        <Mail aria-hidden="true" /> {submitting ? "Sending…" : "Request My Free Estimate"}
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Your information is sent directly to {site.email}.
      </p>
    </form>
  );
}
