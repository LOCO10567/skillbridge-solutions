import { MessageSquare, FileText, Hammer } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: MessageSquare,
    title: "Intake en advies",
    description: "We bespreken je wensen, bekijken de situatie en denken mee in oplossingen.",
  },
  {
    number: "2",
    icon: FileText,
    title: "Transparante offerte en planning",
    description: "Je ontvangt een duidelijke offerte en een realistische planning.",
  },
  {
    number: "3",
    icon: Hammer,
    title: "Uitvoering en nette oplevering",
    description: "We werken netjes, houden je op de hoogte en leveren strak en schoon op.",
  },
];

export function Werkwijze() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Onze werkwijze
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Van eerste contact tot oplevering: zo werken wij.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-border" />
              )}
              
              <div className="relative bg-card rounded-xl p-8 border border-border text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                  <step.icon className="h-8 w-8 text-accent-foreground" />
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-sm font-bold text-muted-foreground">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
