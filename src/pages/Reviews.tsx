import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight, Quote } from "lucide-react";

const reviews = [
  {
    name: "Familie De Vries",
    location: "[Stad]",
    rating: 5,
    text: "Uitstekende ervaring met onze aanbouw. Van begin tot eind duidelijke communicatie en het resultaat overtreft onze verwachtingen. Echte vakmensen die netjes werken en alles goed achterlaten. Zou SkillBridge zonder twijfel aanraden!",
    project: "Aanbouw woonkamer",
    date: "December 2024"
  },
  {
    name: "J. Bakker",
    location: "[Stad]",
    rating: 5,
    text: "Onze badkamer is prachtig geworden. Netjes gewerkt, elke dag opgeruimd aan het einde van de dag. Goede prijs-kwaliteit verhouding en het is precies geworden zoals we hadden gehoopt. Bedankt!",
    project: "Badkamer renovatie",
    date: "November 2024"
  },
  {
    name: "M. van den Berg",
    location: "[Stad]",
    rating: 5,
    text: "Dakkapel geplaatst binnen de afgesproken tijd. Zeer tevreden over de communicatie en het eindresultaat. Fijn om een vaste contactpersoon te hebben die alles regelt.",
    project: "Dakkapel plaatsen",
    date: "Oktober 2024"
  },
  {
    name: "Familie Jansen",
    location: "[Stad]",
    rating: 5,
    text: "Complete renovatie van onze jaren 70 woning laten uitvoeren. Groot project maar alles verliep soepel. Duidelijke offerte, goede planning en een prachtig resultaat. Echt vakwerk!",
    project: "Woningrenovatie",
    date: "September 2024"
  },
  {
    name: "P. de Groot",
    location: "[Stad]",
    rating: 5,
    text: "Garage laten bouwen met ruimte voor werkplaats. Mooi vakwerk, alles netjes afgewerkt. Prettige samenwerking en goede communicatie gedurende het hele project.",
    project: "Garage bouwen",
    date: "Augustus 2024"
  },
  {
    name: "Familie Smit",
    location: "[Stad]",
    rating: 5,
    text: "Heel blij met onze nieuwe keukenuitbreiding. Ze hebben meegedacht over de indeling en het is precies geworden wat we wilden. Aanrader voor iedereen die wil verbouwen!",
    project: "Aanbouw keuken",
    date: "Juli 2024"
  },
];

const Reviews = () => {
  const averageRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Klantreviews
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-6">
              Lees wat onze klanten zeggen over hun ervaring met SkillBridge Bouwservices.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-primary-foreground text-lg">
                {averageRating.toFixed(1)}/5 op basis van {reviews.length}+ reviews
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <article
                key={index}
                className="bg-card rounded-xl p-6 border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-accent/20" />
                </div>
                <p className="text-foreground mb-6 leading-relaxed">
                  "{review.text}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-medium text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {review.project}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {review.location} • {review.date}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Uw review plaatsen?
            </h2>
            <p className="text-muted-foreground mb-6">
              Heeft u onlangs een project met ons afgerond? We horen graag uw ervaring! 
              Stuur ons een e-mail met uw review.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ook tevreden worden?
          </h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Vraag vrijblijvend een offerte aan en ontdek waarom onze klanten zo tevreden zijn.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl">
              Offerte aanvragen
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Reviews;
