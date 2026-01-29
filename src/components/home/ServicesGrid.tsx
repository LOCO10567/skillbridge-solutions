import { Link } from "react-router-dom";
import { 
  Home, 
  Layers, 
  Paintbrush, 
  Bath, 
  Car, 
  Warehouse, 
  Building2, 
  Building, 
  Square, 
  Thermometer, 
  Footprints,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { 
    icon: Home, 
    title: "Aanbouw of opbouw", 
    description: "Meer ruimte creëren zonder te verhuizen",
    slug: "aanbouw"
  },
  { 
    icon: Layers, 
    title: "Dakkapel plaatsen", 
    description: "Extra licht en stahoogte op zolder",
    slug: "dakkapel"
  },
  { 
    icon: Paintbrush, 
    title: "Renovatie huis", 
    description: "Complete woningrenovatie van A tot Z",
    slug: "renovatie"
  },
  { 
    icon: Bath, 
    title: "Badkamer", 
    description: "Praktische en stijlvolle badkamers",
    slug: "badkamer"
  },
  { 
    icon: Car, 
    title: "Carport plaatsen", 
    description: "Bescherming voor uw auto",
    slug: "carport"
  },
  { 
    icon: Warehouse, 
    title: "Garage (ver)bouwen", 
    description: "Functionele garage of werkplaats",
    slug: "garage"
  },
  { 
    icon: Building2, 
    title: "Kelder bouwen", 
    description: "Extra ruimte onder uw woning",
    slug: "kelder"
  },
  { 
    icon: Building, 
    title: "Nieuwbouw", 
    description: "Volledig huis nieuwbouw",
    slug: "nieuwbouw"
  },
  { 
    icon: Square, 
    title: "Ombouw/koof", 
    description: "Nette afwerking van leidingen",
    slug: "koof"
  },
  { 
    icon: Thermometer, 
    title: "Warmte isolatie", 
    description: "Bespaar energie, verhoog comfort",
    slug: "isolatie"
  },
  { 
    icon: Footprints, 
    title: "Vloeren en trappen", 
    description: "Strakke vloeren en gerenoveerde trappen",
    slug: "vloeren"
  },
];

export function ServicesGrid() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Onze bouwdiensten
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            SkillBridge Bouwservices verzorgt verbouwingen en bouwprojecten van A tot Z. 
            Van constructie tot afwerking.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
          {services.map((service, index) => (
            <Link
              key={index}
              to={`/diensten#${service.slug}`}
              className="group bg-card rounded-xl p-6 border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <service.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link to="/diensten">
            <Button variant="orange" size="lg">
              Bekijk alle diensten
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
