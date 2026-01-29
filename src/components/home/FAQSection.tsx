import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Hoe snel ontvang ik een offerte?",
    answer: "Binnen 24 uur op werkdagen na je aanvraag nemen we contact op."
  },
  {
    question: "Komen jullie eerst langs?",
    answer: "Bij de meeste projecten plannen we een korte opname voor een nauwkeurige offerte."
  },
  {
    question: "Werken jullie met garantie?",
    answer: "Ja, we geven garantie op uitgevoerd werk. Details staan in de offerte."
  },
  {
    question: "Doen jullie ook vergunningen?",
    answer: "We denken mee over vergunningen en wat er nodig is in jouw gemeente."
  },
  {
    question: "Kan ik tijdens de verbouwing in huis blijven?",
    answer: "Vaak wel, afhankelijk van het type klus. Dat bespreken we vooraf."
  },
  {
    question: "Wat zijn de betaalmomenten?",
    answer: "Meestal in fases: start, tussentijds, oplevering. Altijd vooraf duidelijk."
  },
  {
    question: "Werken jullie met een vaste planning?",
    answer: "Ja, we plannen realistisch en communiceren direct bij wijzigingen."
  },
  {
    question: "Welke regio bedienen jullie?",
    answer: "Vul je postcode in, dan laten we direct weten of we in jouw regio werken."
  },
];

export function FAQSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Veelgestelde vragen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Antwoorden op de meest gestelde vragen over onze diensten.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-card rounded-lg border border-border px-6"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-accent py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
