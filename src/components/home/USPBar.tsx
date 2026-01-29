import { 
  Calendar, 
  UserCheck, 
  Sparkles, 
  FileText, 
  Shield 
} from "lucide-react";

const usps = [
  {
    icon: Calendar,
    title: "Heldere planning en communicatie",
  },
  {
    icon: UserCheck,
    title: "Vaste contactpersoon tijdens het project",
  },
  {
    icon: FileText,
    title: "Transparante offerte zonder verrassingen",
  },
  {
    icon: Sparkles,
    title: "Netjes werken en schoon opleveren",
  },
  {
    icon: Shield,
    title: "Garantie op uitgevoerd werk",
  },
];

export function USPBar() {
  return (
    <section className="bg-secondary py-8 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {usps.map((usp, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <usp.icon className="h-5 w-5 text-accent" />
              </div>
              <span className="text-sm font-medium text-foreground leading-tight">
                {usp.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
