import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import projectAanbouw from "@/assets/project-aanbouw.jpg";
import projectBathroom from "@/assets/project-bathroom.jpg";
import projectDakkapel from "@/assets/project-dakkapel.jpg";
import projectRenovatie from "@/assets/project-renovatie.jpg";
import projectGarage from "@/assets/project-garage.jpg";
import projectNieuwbouw from "@/assets/project-nieuwbouw.jpg";

const projects = [
  {
    image: projectAanbouw,
    title: "Moderne aanbouw",
    location: "[Stad]",
    category: "Aanbouw",
    description: "Uitbreiding woonkamer met lichtstraat en schuifpui."
  },
  {
    image: projectBathroom,
    title: "Luxe badkamerrenovatie",
    location: "[Stad]",
    category: "Badkamer",
    description: "Complete badkamer met inloopdouche en maatwerk meubel."
  },
  {
    image: projectDakkapel,
    title: "Dakkapel op zolder",
    location: "[Stad]",
    category: "Dakkapel",
    description: "Ruime dakkapel voor extra slaapkamer op zolder."
  },
  {
    image: projectRenovatie,
    title: "Volledige woningrenovatie",
    location: "[Stad]",
    category: "Renovatie",
    description: "Jaren 70 woning compleet gerenoveerd en geïsoleerd."
  },
  {
    image: projectGarage,
    title: "Garage met werkplaats",
    location: "[Stad]",
    category: "Garage",
    description: "Nieuwe garage met ruimte voor hobbyruimte."
  },
  {
    image: projectNieuwbouw,
    title: "Vrijstaande nieuwbouw",
    location: "[Stad]",
    category: "Nieuwbouw",
    description: "Moderne nieuwbouwwoning met duurzame afwerking."
  },
];

export function ProjectsGrid() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Recente projecten
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bekijk een selectie van onze uitgevoerde projecten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {projects.map((project, index) => (
            <Link
              key={index}
              to="/projecten"
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
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="font-semibold text-lg text-foreground mb-1 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {project.location}
                </p>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link to="/projecten">
            <Button variant="orange" size="lg">
              Bekijk alle projecten
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
