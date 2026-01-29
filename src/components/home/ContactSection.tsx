import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

const serviceTypes = [
  "Aanbouw of opbouw",
  "Dakkapel plaatsen",
  "Renovatie huis",
  "Badkamer",
  "Carport",
  "Garage (ver)bouwen",
  "Kelder",
  "Nieuwbouw",
  "Ombouw/koof",
  "Warmte isolatie",
  "Vloeren en trappen",
  "Anders",
];

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Bedankt voor je aanvraag! We nemen binnen 24 uur contact op.");
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="py-20 bg-background" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Offerte aanvragen
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Vul het formulier in en ontvang vrijblijvend een offerte. 
              Reactie binnen 24 uur op werkdagen.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Bel ons</h3>
                  <a href="tel:+31612345678" className="text-muted-foreground hover:text-accent transition-colors">
                    06 - 1234 5678
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">E-mail</h3>
                  <a href="mailto:info@skillbridge.nl" className="text-muted-foreground hover:text-accent transition-colors">
                    info@skillbridge.nl
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Bereikbaar</h3>
                  <p className="text-muted-foreground">
                    Ma - Vr: 08:00 - 17:30<br />
                    Za: Op afspraak
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-xl p-8 border border-border">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Naam *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Uw naam"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telefoon *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="06 - 1234 5678"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-mail *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="email@voorbeeld.nl"
                  />
                </div>
                <div>
                  <label htmlFor="postcode" className="block text-sm font-medium text-foreground mb-2">
                    Postcode *
                  </label>
                  <Input
                    id="postcode"
                    name="postcode"
                    required
                    placeholder="1234 AB"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Type klus *
                  </label>
                  <Select name="service" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecteer..." />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="startdate" className="block text-sm font-medium text-foreground mb-2">
                    Gewenste startdatum
                  </label>
                  <Input
                    id="startdate"
                    name="startdate"
                    type="date"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Uw bericht
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Vertel ons meer over uw project..."
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="orange"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Verzenden..." : "Offerte aanvragen"}
                </Button>
                <p className="text-sm text-muted-foreground text-center mt-3">
                  Vrijblijvende offerte. Reactie binnen 24 uur.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
