import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="SkillBridge Bouwservices - Professionele verbouwing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            SkillBridge Bouwservices: verbouwen met zekerheid
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl">
            Van aanbouw en dakkapel tot complete renovatie of nieuwbouw. Heldere afspraken, strakke planning en vakwerk dat netjes wordt opgeleverd.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Offerte aanvragen
              </Button>
            </Link>
            <a href="tel:+31612345678">
              <Button variant="heroOutline" size="xl">
                <Phone className="h-5 w-5" />
                Bel direct
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
