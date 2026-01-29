import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import projectAanbouw from "@/assets/project-aanbouw.jpg";
import projectBathroom from "@/assets/project-bathroom.jpg";
import projectDakkapel from "@/assets/project-dakkapel.jpg";
import projectRenovatie from "@/assets/project-renovatie.jpg";
import projectGarage from "@/assets/project-garage.jpg";
import projectNieuwbouw from "@/assets/project-nieuwbouw.jpg";

const projects = [
  {
    image: projectAanbouw,
    title: "Moderne aanbouw met lichtstraat",
    location: "[Stad]",
    category: "Aanbouw",
    description: "Complete uitbreiding van de woonkamer met moderne lichtstraat en grote schuifpui naar de tuin. Inclusief vloerverwarming en stucwerk.",
    year: "2024"
  },
  {
    image: projectBathroom,
    title: "Luxe badkamerrenovatie",
    location: "[Stad]",
    category: "Badkamer",
    description: "Volledige renovatie van de badkamer met inloopdouche, vrijstaand bad en maatwerk meubel. Moderne uitstraling met tijdloze materialen.",
    year: "2024"
  },
  {
    image: projectDakkapel,
    title: "Dakkapel voor extra slaapkamer",
    location: "[Stad]",
    category: "Dakkapel",
    description: "Ruime dakkapel geplaatst voor extra slaapkamer op zolder. Inclusief isolatie, stucwerk en elektra.",
    year: "2024"
  },
  {
    image: projectRenovatie,
    title: "Complete woningrenovatie jaren 70",
    location: "[Stad]",
    category: "Renovatie",
    description: "Volledige renovatie van jaren 70 woning. Nieuwe indeling, isolatie, vloeren en moderne keuken.",
    year: "2023"
  },
  {
    image: projectGarage,
    title: "Garage met hobbyruimte",
    location: "[Stad]",
    category: "Garage",
    description: "Nieuwe garage gebouwd met ruimte voor werkplaats. Geïsoleerd en voorzien van elektra en verlichting.",
    year: "2023"
  },
  {
    image: projectNieuwbouw,
    title: "Vrijstaande nieuwbouwwoning",
    location: "[Stad]",
    category: "Nieuwbouw",
    description: "Complete nieuwbouw van vrijstaande woning. Modern ontwerp met duurzame materialen en goede isolatie.",
    year: "2023"
  },
];

const Projecten = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Onze projecten
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Bekijk een selectie van onze recent afgeronde projecten. Van kleine 
              verbouwingen tot complete nieuwbouw - vakwerk met aandacht voor detail.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <article
                key={index}
                className="group bg-card rounded-xl overflow-hidden border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                  <h2 className="font-semibold text-lg text-foreground mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-3">
                    {project.location}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Uw project hier?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Bespreek uw plannen met ons en ontdek wat wij voor u kunnen betekenen.
          </p>
          <Link to="/contact">
            <Button variant="orange" size="lg">
              Offerte aanvragen
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Projecten;
