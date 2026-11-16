import { useState } from "react";
import { CheckCircle2, Mail, MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projectTypeOptions, serviceOptions, site } from "@/lib/site";
import { submitLead } from "@/lib/leads";

const fieldClass =
  "w-full rounded-sm border border-input bg-background px-4 py-3 text-base outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20";
const labelClass = "block text-sm font-semibold text-foreground";

function getToday() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

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
          If you need a faster response, call or text {site.phoneDisplay} directly.
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
    setSubmitting(true);
    setError("");
    try {
      await submitLead(form);
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
    >
      <input type="checkbox" name="botcheck" value="1" tabIndex={-1} autoComplete="off" className="hidden" />
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
          <label className={labelClass} htmlFor="projectType">
            Project Type *
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            defaultValue="Residential"
            className={`mt-2 ${fieldClass}`}
          >
            {projectTypeOptions.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
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
            title="Enter a 5-digit ZIP code"
            maxLength={5}
            required
            className={`mt-2 ${fieldClass}`}
          />
        </div>
        <div className="sm:col-span-2">
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
          <input
            id="startDate"
            name="startDate"
            type="date"
            min={getToday()}
            className={`mt-2 ${fieldClass}`}
          />
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
        <p className="sm:col-span-2 text-sm text-muted-foreground">
          Have photos? Submit the request, then text them to {site.phoneDisplay}.
        </p>
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
