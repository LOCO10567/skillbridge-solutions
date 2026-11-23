import { Star, ShieldCheck, Award, Hammer } from "lucide-react";

const avatars = [
  { initials: "MK", color: "bg-accent" },
  { initials: "JV", color: "bg-primary" },
  { initials: "SB", color: "bg-accent/70" },
];

export function HeroSocialProof() {
  return (
    <div className="space-y-4">
      {/* Review strip */}
      <div className="flex items-center gap-3 flex-wrap">
        <div className="flex -space-x-2">
          {avatars.map((a) => (
            <div
              key={a.initials}
              className={`w-8 h-8 rounded-full ${a.color} ring-2 ring-primary/60 flex items-center justify-center text-[10px] font-bold text-primary-foreground`}
            >
              {a.initials}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-accent text-accent" />
          ))}
        </div>
        <span className="text-sm text-primary-foreground/90">
          <strong className="text-primary-foreground">4.9</strong>
          <span className="text-primary-foreground/70"> · 87 reviews</span>
        </span>
      </div>

      {/* Quote */}
      <blockquote className="text-sm text-primary-foreground/90 italic border-l-2 border-accent/60 pl-3">
        &ldquo;Strakke planning, netjes opgeleverd. Aanrader.&rdquo;
        <span className="block mt-1 not-italic text-xs text-primary-foreground/70">
          — Mark, Utrecht
        </span>
      </blockquote>

      {/* Trust badges */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2">
        <Badge icon={ShieldCheck} label="Erkend & verzekerd" />
        <Badge icon={Award} label="10+ jaar ervaring" />
        <Badge icon={Hammer} label="150+ projecten" />
      </div>
    </div>
  );
}

function Badge({
  icon: Icon,
  label,
}: {
  icon: typeof ShieldCheck;
  label: string;
}) {
  return (
    <div className="flex items-center gap-1.5 text-xs font-medium text-primary-foreground/80">
      <Icon className="h-3.5 w-3.5 text-accent" />
      {label}
    </div>
  );
}
