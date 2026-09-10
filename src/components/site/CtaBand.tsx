import { Link } from "@tanstack/react-router";
import { MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function CtaBand({
  title = "Ready to start your project?",
  text = "Tell us what you need and we'll get you a clear, honest estimate — no pressure, no obligation.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-charcoal text-charcoal-foreground">
      <div className="container-x flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between md:py-16">
        <div className="max-w-xl">
          <h2 className="text-2xl md:text-3xl">{title}</h2>
          <p className="mt-3 text-charcoal-foreground/75">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="cta" size="xl">
            <Link to="/contact">Get a Free Estimate</Link>
          </Button>
          <Button asChild variant="outlineLight" size="xl">
            <a href={site.telHref}>
              <Phone aria-hidden="true" /> Call Now
            </a>
          </Button>
          <Button asChild variant="outlineLight" size="xl">
            <a href={site.smsHref}>
              <MessageSquare aria-hidden="true" /> Text Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
