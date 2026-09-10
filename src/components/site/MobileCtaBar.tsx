import { Link } from "@tanstack/react-router";
import { MessageSquare, Phone, ClipboardList } from "lucide-react";
import { site } from "@/lib/site";

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-charcoal-foreground/10 bg-charcoal text-charcoal-foreground md:hidden">
      <div className="grid grid-cols-3">
        <a
          href={site.telHref}
          className="flex flex-col items-center gap-1 py-3 font-display text-[11px] font-bold uppercase tracking-wider"
        >
          <Phone className="size-5 text-primary" aria-hidden="true" />
          Call
        </a>
        <a
          href={site.smsHref}
          className="flex flex-col items-center gap-1 border-x border-charcoal-foreground/10 py-3 font-display text-[11px] font-bold uppercase tracking-wider"
        >
          <MessageSquare className="size-5 text-primary" aria-hidden="true" />
          Text
        </a>
        <Link
          to="/contact"
          className="flex flex-col items-center gap-1 bg-primary py-3 font-display text-[11px] font-bold uppercase tracking-wider text-primary-foreground"
        >
          <ClipboardList className="size-5" aria-hidden="true" />
          Free Estimate
        </Link>
      </div>
    </div>
  );
}
