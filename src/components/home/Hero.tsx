import { Phone, MessageCircle, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";
import { QuoteWizard } from "./QuoteWizard";
import { HeroSocialProof } from "./HeroSocialProof";

const usps = [
  "Vaste prijsafspraak vooraf",
  "Reactie binnen 24 uur",
  "Eigen vaste vakmensen",
  "Netjes opgeleverd, oplevercheck",
];

export function Hero() {
  return (
    <section className="relative">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="SkillBridge Bouwservices - Professionele verbouwing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/70" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 items-center">
          {/* Left — copy */}
          <div className="lg:col-span-3">
            <span className="inline-block px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-semibold uppercase tracking-wider mb-5 border border-accent/30">
              Aannemersbedrijf · Sinds 2010
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.1] mb-5">
              Verbouwen met zekerheid.{" "}
              <span className="text-accent">Vakwerk dat klopt.</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 mb-7 max-w-xl">
              Van aanbouw en dakkapel tot complete renovatie of nieuwbouw.
              Heldere afspraken, strakke planning en netjes opgeleverd.
            </p>

            <ul className="space-y-2.5 mb-8">
              {usps.map((u) => (
                <li
                  key={u}
                  className="flex items-center gap-3 text-primary-foreground/95"
                >
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                  <span className="font-medium">{u}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+31612345678"
                className="inline-flex items-center justify-center gap-2 bg-primary-foreground/10 hover:bg-primary-foreground hover:text-primary text-primary-foreground border-2 border-primary-foreground/20 backdrop-blur-sm font-semibold py-3 px-6 rounded-lg transition-all"
              >
                <Phone className="h-5 w-5" />
                Bel direct — 06 1234 5678
              </a>
              <a
                href="https://wa.me/31612345678?text=Hallo%2C%20ik%20wil%20graag%20een%20offerte%20aanvragen."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </div>

            {/* Social proof */}
            <div className="mt-8 pt-6 border-t border-primary-foreground/10">
              <HeroSocialProof />
            </div>
          </div>

          {/* Right — wizard */}
          <div className="lg:col-span-2">
            <QuoteWizard />
          </div>
        </div>
      </div>
    </section>
  );
}
