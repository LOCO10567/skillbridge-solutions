import { Phone, MessageCircle } from "lucide-react";

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-primary p-4 border-t border-primary-foreground/10">
      <div className="flex gap-3">
        <a
          href="tel:+31612345678"
          className="flex-1 flex items-center justify-center gap-2 bg-accent hover:bg-orange-hover text-accent-foreground font-semibold py-3 px-4 rounded-lg transition-colors"
        >
          <Phone className="h-5 w-5" />
          <span>Bel direct</span>
        </a>
        <a
          href="https://wa.me/31612345678?text=Hallo%2C%20ik%20wil%20graag%20een%20offerte%20aanvragen."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-primary-foreground font-semibold py-3 px-4 rounded-lg transition-colors"
        >
          <MessageCircle className="h-5 w-5" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
