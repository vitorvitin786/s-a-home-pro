import { ClipboardList, MessageSquare, Phone } from "lucide-react";
import { site } from "@/lib/site";

export function MobileCtaBar() {
  const itemClass =
    "flex min-h-16 flex-col items-center justify-center gap-1 text-[10px] font-bold uppercase tracking-[0.13em]";

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] border-t border-primary/20 bg-[#030811]/95 text-white shadow-[0_-10px_30px_rgba(0,0,0,.35)] backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-3">
        <a href={site.telHref} className={itemClass}>
          <Phone className="size-5 text-primary" aria-hidden="true" />
          Call
        </a>
        <a href={site.smsHref} className={`${itemClass} border-x border-white/10`}>
          <MessageSquare className="size-5 text-primary" aria-hidden="true" />
          Text
        </a>
        <a
          href="/contact#estimate"
          className={`${itemClass} bg-gradient-to-r from-[#0877e8] to-[#18a5ff] text-white`}
        >
          <ClipboardList className="size-5" aria-hidden="true" />
          Free Estimate
        </a>
      </div>
    </div>
  );
}
