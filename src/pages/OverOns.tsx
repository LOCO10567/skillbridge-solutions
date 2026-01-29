import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Award, Clock, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Persoonlijke aanpak",
    description: "Eén vast aanspreekpunt gedurende het hele project. We zijn direct, eerlijk en houden je op de hoogte."
  },
  {
    icon: Award,
    title: "Vakmanschap",
    description: "Ervaren vakmensen die trots zijn op hun werk. Kwaliteit zit in de details en dat zie je terug in het resultaat."
  },
  {
    icon: Clock,
    title: "Betrouwbaar",
    description: "Afspraak is afspraak. Realistische planning, heldere communicatie en geen verrassingen achteraf."
  },
];

const OverOns = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Over SkillBridge Bouwservices
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Vakwerk met een persoonlijke aanpak. Wij geloven dat bouwen en 
              verbouwen niet ingewikkeld hoeft te zijn.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Bouwen met zekerheid
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  SkillBridge Bouwservices is opgericht vanuit de overtuiging dat bouwen 
                  en verbouwen anders kan. Geen vage afspraken, geen eindeloze vertragingen, 
                  geen verrassingen in de rekening.
                </p>
                <p>
                  Met jarenlange ervaring in de bouw weten we precies wat er nodig is om 
                  een project tot een goed einde te brengen. Van de eerste inventarisatie 
                  tot de laatste afwerking: we zorgen dat je weet waar je aan toe bent.
                </p>
                <p>
                  Ons team bestaat uit ervaren vakmensen die trots zijn op hun werk. 
                  We werken netjes, ruimen op aan het einde van de dag en leveren strak 
                  af. Want een tevreden klant is voor ons de beste aanbeveling.
                </p>
              </div>
            </div>
            <div className="bg-secondary rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Wat ons kenmerkt
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Heldere communicatie van begin tot eind</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Transparante offertes zonder kleine lettertjes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Realistische planning die we nakomen</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Ervaren vakmensen met oog voor detail</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Garantie op uitgevoerd werk</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Netjes werken en schoon opleveren</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Onze kernwaarden
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="bg-card rounded-xl p-8 border border-border text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Werkgebied Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Ons werkgebied
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              SkillBridge Bouwservices is actief in [Regio] en omstreken. 
              We werken voor zowel particulieren als zakelijke opdrachtgevers.
            </p>
            <p className="text-muted-foreground">
              Vul uw postcode in bij de offerte aanvraag en we laten direct 
              weten of we in uw regio werkzaam zijn.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Maak kennis met ons
          </h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Benieuwd wat wij voor u kunnen betekenen? Neem contact op voor een 
            vrijblijvend gesprek.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl">
              Contact opnemen
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default OverOns;
