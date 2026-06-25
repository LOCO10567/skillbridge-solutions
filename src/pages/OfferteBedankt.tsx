import { Link, useSearchParams } from "react-router-dom";
import { CheckCircle2, Phone, MessageCircle, ArrowRight, Clock, FileText, Handshake } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

export default function OfferteBedankt() {
  const [params] = useSearchParams();
  const service = params.get("service");
  const name = params.get("name");
  const firstName = name?.split(" ")[0];

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <div className="w-20 h-20 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="h-10 w-10 text-accent" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Bedankt{firstName ? `, ${firstName}` : ""}!
            </h1>
            <p className="text-lg text-muted-foreground">
              We hebben je aanvraag{service ? <> voor <strong className="text-foreground">{service}</strong></> : ""} ontvangen.
              Je hoort binnen 24 uur op werkdagen van ons.
            </p>
          </div>

          {/* Timeline */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-8">
            <h2 className="font-bold text-lg text-foreground mb-6">Wat gebeurt er nu?</h2>
            <ol className="space-y-5">
              <Step
                icon={Clock}
                title="Binnen 24 uur — wij nemen contact op"
                body="We bellen of mailen je (afhankelijk van je voorkeur) om de aanvraag door te nemen."
              />
              <Step
                icon={Handshake}
                title="Gratis intake op locatie"
                body="Een vakman komt langs, bekijkt de situatie en stelt de juiste vragen — vrijblijvend."
              />
              <Step
                icon={FileText}
                title="Heldere offerte met vaste prijs"
                body="Je krijgt een complete offerte met vaste prijsafspraak, planning en voorwaarden. Geen verrassingen achteraf."
              />
            </ol>
          </div>

          {/* Follow-up CTAs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <a
              href="tel:+31612345678"
              className="flex items-center justify-center gap-2 bg-accent hover:bg-orange-hover text-accent-foreground font-semibold py-3 px-5 rounded-lg transition-colors"
            >
              <Phone className="h-5 w-5" />
              Bel direct
            </a>
            <a
              href="https://wa.me/31612345678"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold py-3 px-5 rounded-lg transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp ons
            </a>
          </div>

          <div className="text-center">
            <Link
              to="/projecten"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Bekijk in de tussentijd onze projecten
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Step({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof Clock;
  title: string;
  body: string;
}) {
  return (
    <li className="flex gap-4">
      <div className="shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
        <Icon className="h-5 w-5 text-accent" />
      </div>
      <div>
        <h3 className="font-semibold text-foreground mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{body}</p>
      </div>
    </li>
  );
}
