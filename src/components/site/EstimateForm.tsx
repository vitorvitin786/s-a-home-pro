import { useState } from "react";
import { CheckCircle2, Phone, MessageSquare } from "lucide-react";
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
        <h3 className="mt-4 text-xl">Request received</h3>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          Thank you for contacting S&amp;A Homes Services. We&rsquo;ll review your project
          information and contact you about the next step.
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          Need to reach us sooner? Call or text {site.phoneDisplay}.
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

  return (
    <form
      className="rounded-md border border-border bg-card p-6 shadow-card md:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="fullName">
            Full Name *
          </label>
          <input id="fullName" name="fullName" required className={`mt-2 ${fieldClass}`} />
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
            required
            className={`mt-2 ${fieldClass}`}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="address">
            Project Address <span className="font-normal text-muted-foreground">(optional)</span>
          </label>
          <input id="address" name="address" className={`mt-2 ${fieldClass}`} />
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
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="photos">
            Project Photos <span className="font-normal text-muted-foreground">(optional)</span>
          </label>
          <input
            id="photos"
            name="photos"
            type="file"
            accept="image/*"
            multiple
            className="mt-2 w-full rounded-sm border border-dashed border-input bg-muted/40 px-4 py-3 text-sm file:mr-4 file:rounded-sm file:border-0 file:bg-charcoal file:px-4 file:py-2 file:font-display file:text-xs file:font-bold file:uppercase file:text-charcoal-foreground"
          />
          <p className="mt-2 text-xs text-muted-foreground">
            Photos help us give you a more accurate estimate.
          </p>
        </div>
      </div>

      <Button type="submit" variant="cta" size="xl" className="mt-7 w-full">
        Request My Free Estimate
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Prefer to talk now? Call or text{" "}
        <a className="font-semibold text-primary" href={site.telHref}>
          {site.phoneDisplay}
        </a>
      </p>
    </form>
  );
}
