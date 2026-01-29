import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
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
import { Phone, Mail, Clock, MapPin, MessageCircle } from "lucide-react";
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

const Contact = () => {
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
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Contact
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Vraag vrijblijvend een offerte aan of neem contact op voor meer informatie. 
              Wij reageren binnen 24 uur op werkdagen.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Neem contact op
              </h2>
              <p className="text-muted-foreground mb-8">
                Heeft u vragen of wilt u een vrijblijvende offerte? Neem gerust 
                contact met ons op via onderstaande gegevens of vul het formulier in.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Telefoon</h3>
                    <a href="tel:+31612345678" className="text-muted-foreground hover:text-accent transition-colors">
                      06 - 1234 5678
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                    <a 
                      href="https://wa.me/31612345678?text=Hallo%2C%20ik%20wil%20graag%20een%20offerte%20aanvragen."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      Stuur een bericht
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
                      Maandag - Vrijdag: 08:00 - 17:30<br />
                      Zaterdag: Op afspraak
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Werkgebied</h3>
                    <p className="text-muted-foreground">
                      [Regio] en omstreken
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-xl p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Offerte aanvragen
              </h2>
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
                    rows={5}
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
    </Layout>
  );
};

export default Contact;
