import { useState } from "react";
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
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Star,
  Clock,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import {
  stepServiceSchema,
  stepScopeSchema,
  stepLocationSchema,
  stepContactSchema,
} from "@/lib/quote-schema";

const services = [
  { icon: Home, title: "Aanbouw / opbouw" },
  { icon: Layers, title: "Dakkapel" },
  { icon: Paintbrush, title: "Renovatie huis" },
  { icon: Bath, title: "Badkamer" },
  { icon: Car, title: "Carport" },
  { icon: Warehouse, title: "Garage" },
  { icon: Building2, title: "Kelder" },
  { icon: Building, title: "Nieuwbouw" },
  { icon: Square, title: "Ombouw / koof" },
  { icon: Thermometer, title: "Warmte-isolatie" },
  { icon: Footprints, title: "Vloeren & trappen" },
];

const scopeOptions = ["Klein", "Middel", "Groot", "Weet ik niet"] as const;
const timingOptions = [
  "Z.s.m.",
  "1-3 maanden",
  "3-6 maanden",
  "Oriënterend",
] as const;
const clientTypeOptions = ["Particulier", "Zakelijk", "VvE"] as const;
const contactPrefOptions = ["Bellen", "WhatsApp", "E-mail"] as const;

type FormData = {
  service: string;
  scope: string;
  timing: string;
  notes: string;
  postcode: string;
  city: string;
  clientType: string;
  name: string;
  phone: string;
  email: string;
  contactPreference: string;
};

const initialData: FormData = {
  service: "",
  scope: "",
  timing: "",
  notes: "",
  postcode: "",
  city: "",
  clientType: "",
  name: "",
  phone: "",
  email: "",
  contactPreference: "Bellen",
};

const totalSteps = 4;

export function QuoteWizard() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const update = (patch: Partial<FormData>) => {
    setData((d) => ({ ...d, ...patch }));
    setErrors({});
  };

  const validateStep = (): boolean => {
    let res;
    if (step === 1) res = stepServiceSchema.safeParse({ service: data.service });
    else if (step === 2)
      res = stepScopeSchema.safeParse({
        scope: data.scope,
        timing: data.timing,
        notes: data.notes,
      });
    else if (step === 3)
      res = stepLocationSchema.safeParse({
        postcode: data.postcode,
        city: data.city || undefined,
        clientType: data.clientType,
      });
    else
      res = stepContactSchema.safeParse({
        name: data.name,
        phone: data.phone,
        email: data.email,
        contactPreference: data.contactPreference,
      });

    if (!res.success) {
      const e: Record<string, string> = {};
      res.error.issues.forEach((i) => {
        e[i.path[0] as string] = i.message;
      });
      setErrors(e);
      return false;
    }
    setErrors({});
    return true;
  };

  const next = () => {
    if (!validateStep()) return;
    setStep((s) => Math.min(totalSteps, s + 1));
  };

  const prev = () => setStep((s) => Math.max(1, s - 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep()) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setDone(true);
    toast.success("Bedankt! We nemen binnen 24 uur contact op.");
  };

  if (done) {
    return (
      <div className="bg-card text-card-foreground rounded-2xl p-8 shadow-2xl border border-border/50">
        <div className="text-center py-6">
          <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-4">
            <CheckCircle2 className="h-8 w-8 text-accent" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Bedankt, {data.name.split(" ")[0]}!
          </h3>
          <p className="text-muted-foreground mb-6">
            We hebben je aanvraag voor <strong>{data.service}</strong> ontvangen.
            Je hoort binnen 24 uur op werkdagen van ons via {data.contactPreference.toLowerCase()}.
          </p>
          <Button
            variant="orangeOutline"
            onClick={() => {
              setData(initialData);
              setStep(1);
              setDone(false);
            }}
          >
            Nieuwe aanvraag
          </Button>
        </div>
      </div>
    );
  }

  const progress = (step / totalSteps) * 100;

  return (
    <div className="bg-card text-card-foreground rounded-2xl p-6 md:p-7 shadow-2xl border border-border/50">
      {/* Header */}
      <div className="mb-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">
            Gratis offerte
          </span>
          <span className="text-xs font-medium text-muted-foreground">
            Stap {step} van {totalSteps}
          </span>
        </div>
        <Progress value={progress} className="h-1.5" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* STEP 1 — Service */}
        {step === 1 && (
          <div key="s1" className="animate-in fade-in slide-in-from-right-2 duration-300">
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">
              Wat wil je laten doen?
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Kies het type klus dat het beste past.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {services.map((s) => {
                const active = data.service === s.title;
                return (
                  <button
                    key={s.title}
                    type="button"
                    onClick={() => {
                      update({ service: s.title });
                      setTimeout(() => setStep(2), 150);
                    }}
                    className={cn(
                      "flex items-center gap-2 p-3 rounded-lg border text-left transition-all text-sm",
                      active
                        ? "border-accent bg-accent/10 text-foreground"
                        : "border-border hover:border-accent/50 hover:bg-accent/5 text-foreground"
                    )}
                  >
                    <s.icon
                      className={cn(
                        "h-4 w-4 shrink-0",
                        active ? "text-accent" : "text-muted-foreground"
                      )}
                    />
                    <span className="font-medium leading-tight">{s.title}</span>
                  </button>
                );
              })}
            </div>
            {errors.service && (
              <p className="text-xs text-destructive mt-2">{errors.service}</p>
            )}
          </div>
        )}

        {/* STEP 2 — Scope */}
        {step === 2 && (
          <div key="s2" className="animate-in fade-in slide-in-from-right-2 duration-300 space-y-5">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">
                Hoe groot is de klus?
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Een ruwe inschatting is genoeg.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {scopeOptions.map((opt) => (
                  <ChipButton
                    key={opt}
                    active={data.scope === opt}
                    onClick={() => update({ scope: opt })}
                  >
                    {opt}
                  </ChipButton>
                ))}
              </div>
              {errors.scope && (
                <p className="text-xs text-destructive mt-2">{errors.scope}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Wanneer wil je starten?
              </label>
              <div className="grid grid-cols-2 gap-2">
                {timingOptions.map((opt) => (
                  <ChipButton
                    key={opt}
                    active={data.timing === opt}
                    onClick={() => update({ timing: opt })}
                  >
                    {opt}
                  </ChipButton>
                ))}
              </div>
              {errors.timing && (
                <p className="text-xs text-destructive mt-2">{errors.timing}</p>
              )}
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-foreground mb-2">
                Toelichting <span className="text-muted-foreground font-normal">(optioneel)</span>
              </label>
              <Textarea
                id="notes"
                rows={3}
                maxLength={500}
                placeholder="Vertel kort wat je in gedachten hebt..."
                value={data.notes}
                onChange={(e) => update({ notes: e.target.value })}
              />
            </div>
          </div>
        )}

        {/* STEP 3 — Location */}
        {step === 3 && (
          <div key="s3" className="animate-in fade-in slide-in-from-right-2 duration-300 space-y-4">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">
                Waar moet het gebeuren?
              </h3>
              <p className="text-sm text-muted-foreground">
                We checken meteen of we in jouw regio werken.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="postcode" className="block text-sm font-medium text-foreground mb-2">
                  Postcode *
                </label>
                <Input
                  id="postcode"
                  placeholder="1234 AB"
                  maxLength={7}
                  value={data.postcode}
                  onChange={(e) => update({ postcode: e.target.value.toUpperCase() })}
                  aria-invalid={!!errors.postcode}
                />
                {errors.postcode && (
                  <p className="text-xs text-destructive mt-1">{errors.postcode}</p>
                )}
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-foreground mb-2">
                  Plaats
                </label>
                <Input
                  id="city"
                  placeholder="Bijv. Utrecht"
                  maxLength={100}
                  value={data.city}
                  onChange={(e) => update({ city: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Ik ben *
              </label>
              <div className="grid grid-cols-3 gap-2">
                {clientTypeOptions.map((opt) => (
                  <ChipButton
                    key={opt}
                    active={data.clientType === opt}
                    onClick={() => update({ clientType: opt })}
                  >
                    {opt}
                  </ChipButton>
                ))}
              </div>
              {errors.clientType && (
                <p className="text-xs text-destructive mt-2">{errors.clientType}</p>
              )}
            </div>
          </div>
        )}

        {/* STEP 4 — Contact */}
        {step === 4 && (
          <div key="s4" className="animate-in fade-in slide-in-from-right-2 duration-300 space-y-4">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">
                Hoe kunnen we je bereiken?
              </h3>
              <p className="text-sm text-muted-foreground">
                Laatste stap. Reactie binnen 24 uur op werkdagen.
              </p>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Naam *
              </label>
              <Input
                id="name"
                placeholder="Voor- en achternaam"
                maxLength={100}
                value={data.name}
                onChange={(e) => update({ name: e.target.value })}
                aria-invalid={!!errors.name}
              />
              {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Telefoon *
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="06 - 1234 5678"
                  maxLength={20}
                  value={data.phone}
                  onChange={(e) => update({ phone: e.target.value })}
                  aria-invalid={!!errors.phone}
                />
                {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  E-mail *
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@voorbeeld.nl"
                  maxLength={255}
                  value={data.email}
                  onChange={(e) => update({ email: e.target.value })}
                  aria-invalid={!!errors.email}
                />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Voorkeur contact
              </label>
              <div className="grid grid-cols-3 gap-2">
                {contactPrefOptions.map((opt) => (
                  <ChipButton
                    key={opt}
                    active={data.contactPreference === opt}
                    onClick={() => update({ contactPreference: opt })}
                  >
                    {opt}
                  </ChipButton>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Nav buttons */}
        <div className="flex items-center gap-2 pt-1">
          {step > 1 && (
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={prev}
              disabled={submitting}
            >
              <ArrowLeft className="h-4 w-4" />
              Terug
            </Button>
          )}
          {step < totalSteps && step !== 1 && (
            <Button
              type="button"
              variant="orange"
              size="lg"
              onClick={next}
              className="flex-1"
            >
              Volgende
              <ArrowRight className="h-4 w-4" />
            </Button>
          )}
          {step === 1 && data.service && (
            <Button
              type="button"
              variant="orange"
              size="lg"
              onClick={next}
              className="flex-1"
            >
              Volgende
              <ArrowRight className="h-4 w-4" />
            </Button>
          )}
          {step === totalSteps && (
            <Button
              type="submit"
              variant="orange"
              size="lg"
              className="flex-1"
              disabled={submitting}
            >
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Verzenden...
                </>
              ) : (
                "Offerte aanvragen"
              )}
            </Button>
          )}
        </div>

        <p className="text-xs text-muted-foreground text-center">
          100% vrijblijvend · Geen verplichtingen
        </p>
      </form>

      {/* Trust footer */}
      <div className="mt-5 pt-5 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <Star className="h-3.5 w-3.5 fill-accent text-accent" />
          <strong className="text-foreground">4.9</strong> reviews
        </span>
        <span className="flex items-center gap-1">
          <ShieldCheck className="h-3.5 w-3.5 text-accent" />
          Erkend & verzekerd
        </span>
        <span className="flex items-center gap-1">
          <Clock className="h-3.5 w-3.5 text-accent" />
          Binnen 24u
        </span>
      </div>
    </div>
  );
}

function ChipButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "px-3 py-2.5 rounded-lg border text-sm font-medium transition-all",
        active
          ? "border-accent bg-accent/10 text-foreground"
          : "border-border hover:border-accent/50 hover:bg-accent/5 text-foreground"
      )}
    >
      {children}
    </button>
  );
}
