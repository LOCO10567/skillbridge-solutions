import { Star } from "lucide-react";

const reviews = [
  {
    name: "Familie De Vries",
    location: "[Stad]",
    rating: 5,
    text: "Uitstekende ervaring met onze aanbouw. Van begin tot eind duidelijke communicatie en het resultaat overtreft onze verwachtingen. Echte vakmensen!",
    project: "Aanbouw"
  },
  {
    name: "J. Bakker",
    location: "[Stad]",
    rating: 5,
    text: "Onze badkamer is prachtig geworden. Netjes gewerkt, alles opgeruimd aan het einde van de dag. Zou SkillBridge zeker aanraden.",
    project: "Badkamer renovatie"
  },
  {
    name: "M. van den Berg",
    location: "[Stad]",
    rating: 5,
    text: "Dakkapel geplaatst binnen de afgesproken tijd. Goede prijs-kwaliteit verhouding. Fijn om een vaste contactpersoon te hebben.",
    project: "Dakkapel"
  },
];

export function ReviewsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Wat klanten zeggen
          </h2>
          <div className="flex items-center justify-center gap-2 text-lg">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-muted-foreground">
              Gemiddeld 4.9/5 op basis van 50+ reviews
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground mb-4 leading-relaxed">
                "{review.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-medium text-foreground">{review.name}</p>
                <p className="text-sm text-muted-foreground">
                  {review.project} • {review.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
