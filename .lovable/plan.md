# Plan: High-converting Hero met Offertewizard

## Doel
Vervang de huidige statische hero door een conversie-gerichte hero met links de waardepropositie + USP's en rechts een **multi-step offertewizard** (4 stappen, leadcapture, geen prijsindicatie).

## Layout (desktop)
```text
┌─────────────────────────────────────────────────────────────┐
│  HERO (antraciet bg + project foto overlay)                 │
│  ┌───────────────────────────┐  ┌────────────────────────┐  │
│  │ H1: Verbouwen met         │  │  OFFERTEWIZARD KAART   │  │
│  │ zekerheid                 │  │  [Stap 1 van 4]        │  │
│  │ Subtekst (2 regels)       │  │  ───────────────────── │  │
│  │                           │  │  Wat wil je laten doen?│  │
│  │ ✓ Vaste prijsafspraak     │  │  [11 dienst-tegels]    │  │
│  │ ✓ Reactie binnen 24u      │  │                        │  │
│  │ ✓ Eigen vaste vakmensen   │  │       [Volgende →]     │  │
│  │ ✓ Netjes opgeleverd       │  └────────────────────────┘  │
│  │                           │   • 100% vrijblijvend       │
│  │ [Bel direct] [WhatsApp]   │   • Binnen 24u reactie      │
│  └───────────────────────────┘                              │
└─────────────────────────────────────────────────────────────┘
```
Op mobiel: wizard onder de tekst, full-width.

## Wizard stappen

**Stap 1 — Type klus** (verplicht)
- Grid van 11 dienst-knoppen met icoon (uit `ServicesGrid` data):
  Aanbouw/opbouw, Dakkapel, Renovatie huis, Badkamer, Carport, Garage, Kelder, Nieuwbouw, Ombouw/koof, Warmte-isolatie, Vloeren/trappen
- Klik = selectie + auto-door naar stap 2

**Stap 2 — Omvang & timing**
- Geschatte omvang: chips "Klein / Middel / Groot / Weet ik niet"
- Gewenste startdatum: chips "Z.s.m. / 1-3 mnd / 3-6 mnd / Oriënterend"
- Optioneel: korte toelichting (textarea, max 500 chars)

**Stap 3 — Locatie**
- Postcode (verplicht, regex `^\d{4}\s?[A-Za-z]{2}$`)
- Plaats (optioneel)
- Type opdrachtgever: Particulier / Zakelijk / VvE

**Stap 4 — Contactgegevens**
- Naam, Telefoon, E-mail (verplicht)
- Voorkeur contact: Bellen / WhatsApp / E-mail
- Submit-knop: **"Offerte aanvragen"**

## UX/conversie-elementen
- Progress bar bovenaan kaart (1/4 → 4/4)
- "Vorige" knop vanaf stap 2
- Per stap: kleine geruststellende microcopy ("100% vrijblijvend, geen verplichtingen")
- Trust-signalen onder kaart: ⭐ 4.9 reviews · ✓ Erkend · ✓ Verzekerd
- Sticky behavior: kaart blijft compact, geen scroll-jank
- Na submit: success-state in dezelfde kaart ("Bedankt! We bellen binnen 24u") + toast

## Validatie
- Zod schema voor alle velden (postcode regex, email, telefoon, length limits 100/255 chars)
- Inline foutmeldingen per veld
- "Volgende"-knop disabled tot stap-vereisten kloppen

## Bestanden

**Nieuw:**
- `src/components/home/QuoteWizard.tsx` — hoofdcomponent (state machine met `useState` step 1-4 + formData)
- `src/components/home/wizard/StepService.tsx` — stap 1 dienst-grid
- `src/components/home/wizard/StepScope.tsx` — stap 2 omvang/timing
- `src/components/home/wizard/StepLocation.tsx` — stap 3 postcode
- `src/components/home/wizard/StepContact.tsx` — stap 4 contact + submit
- `src/components/home/wizard/WizardProgress.tsx` — progress bar
- `src/lib/quote-schema.ts` — Zod schemas per stap

**Aangepast:**
- `src/components/home/Hero.tsx` — 2-koloms layout (lg:grid-cols-2), USP-checks links, wizard rechts; behoud bg-image + antraciet overlay; behoud Bel/WhatsApp knoppen onder USP's

**Ongewijzigd:** alle andere pagina's, `ContactSection`, `Contact.tsx` (blijft als uitgebreid formulier voor directe bezoekers van /contact)

## Technisch
- Geen backend: submit gaat (net als huidige form) via `toast.success` simulatie — klaar voor latere koppeling aan Lovable Cloud / e-mail edge function
- Gebruikt bestaande shadcn componenten: Button, Input, Textarea, Label, Progress
- Lucide icons hergebruikt uit `ServicesGrid`
- Animatie: simpele fade/slide tussen stappen via Tailwind `transition` + key-remount (geen extra lib)
- Volledig responsive: mobiel = full-width kaart onder tekst, geen sticky CTA conflict

## Out of scope
- Geen prijsindicatie/berekening
- Geen database-opslag (volgt later indien gewenst)
- Geen wijzigingen aan /contact pagina, Diensten, Projecten etc.
