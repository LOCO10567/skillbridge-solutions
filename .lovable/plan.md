# Conversie-upgrade SkillBridge

## 1. Logo vergroten (snelle fix)
- `Header.tsx`: logo van huidige hoogte naar `h-12` (desktop) / `h-10` (mobiel), met behoud van uitlijning en sticky header-hoogte.
- Footer-logo proportioneel meegroeien.

## 2. Leads opslaan + e-mailnotificatie (kritieke fix)
**Lovable Cloud activeren** (database + edge functions + e-mail).

**Database**
- Tabel `quote_requests` met velden: id, created_at, service, scope, timing, notes, postcode, city, client_type, name, phone, email, contact_preference, status (`new`/`contacted`/`won`/`lost`), source, user_agent, ip_hash.
- RLS: anon mag `INSERT` (publiek formulier), alleen `service_role` mag lezen. Geen `SELECT` voor anon/authenticated.
- GRANT INSERT op anon, ALL op service_role.

**Spambescherming**
- Honeypot-veld (`company_website`, hidden, moet leeg blijven).
- Minimum-fill-time check (formulier <3s ingevuld = bot).
- Server-side Zod-validatie in edge function (zelfde schema als client).
- Rate limit per IP-hash (max 5 per uur) via tabel `quote_rate_limit`.

**Edge function `submit-quote`**
- Valideert input, checkt honeypot/rate-limit, schrijft naar `quote_requests`.
- Stuurt twee e-mails via Lovable Emails:
  1. **Naar SkillBridge** (notificatie met alle gegevens + directe `tel:`/`mailto:` knoppen).
  2. **Naar aanvrager** (bevestiging: "we nemen binnen 24u contact op", samenvatting aanvraag, contactgegevens SkillBridge).
- Templates in `supabase/functions/_shared/transactional-email-templates/` met brand-styling (antraciet + oranje accent).

**Frontend**
- `QuoteWizard.handleSubmit` roept edge function aan i.p.v. `setTimeout`.
- Foutafhandeling: bij netwerkfout toon retry + tel/WhatsApp-fallback.
- Loading-state behouden.

**E-mailadres SkillBridge** — moet ik van jou krijgen (welk adres ontvangt de notificaties?). Voor nu placeholder `info@skillbridge-bouw.nl`.

## 3. Social proof boven de fold
**Onder de USP-lijst in hero (linker kolom):**
- Compacte review-strip: 5 sterren + `4.9 / 5 · 87 reviews` + 3 kleine avatar-cirkels (initialen) + 1 korte quote ("Strakke planning, netjes opgeleverd." — Mark, Utrecht).
- Keurmerk-row: 3-4 logo-badges (Bouwgarant, VCA, KvK-geregistreerd, 10+ jaar). Als placeholder text-badges met icoon (`ShieldCheck`, `Award`) zodat geen externe logo's nodig zijn. Echte logos kan jij later aanleveren.
- "150+ projecten opgeleverd" teller met `Hammer` icoon.

**Boven de wizard (rechter kolom):**
- Kleine balk: "Laatste aanvraag: 12 min geleden uit Utrecht" (statisch, niet fake-realtime — gewoon vertrouwen-signaal).

## 4. Wizard UX-tuning
**Stap 1 — minder keuze-overload**
- Top 6 diensten zichtbaar: Aanbouw, Dakkapel, Renovatie huis, Badkamer, Nieuwbouw, Vloeren & trappen.
- Knop "Andere klus" toont overige 5 + "Iets anders" veld.

**Stap 2 — auto-progress**
- Bij keuze omvang + timing: na 400ms automatisch naar stap 3 (alleen als beide ingevuld). Toelichting blijft optioneel + handmatige "Volgende".

**Stap 3 — slimmer**
- Postcode auto-format (1234AB → "1234 AB").
- Optioneel: bij geldige postcode tonen we "We werken in jouw regio ✓" (statische check op eerste 2 cijfers, regio's hardcoded — geen externe API).

**Stap 4 — vertrouwen**
- Microcopy: "We bellen alleen voor deze aanvraag. Geen nieuwsbrieven."
- Extra trust-rij onder submit: "✓ Vrijblijvend  ✓ Geen kosten  ✓ Reactie binnen 24u".

**Bedankpagina (vervangt huidige success-state)**
- Nieuwe route `/offerte-bedankt?service=...` met:
  - Bevestiging + samenvatting.
  - "Wat nu?" tijdlijn (24u reactie → intake → offerte).
  - Vervolg-CTA's: "Bekijk onze projecten" en "Bel ons direct".
  - Link "Volg ons op Instagram" (optioneel).
- Wizard redirect naar deze pagina na success (i.p.v. inline state).
- Triggert `gtag`/`plausible` event als analytics later toegevoegd wordt (event hook nu al inbouwen, no-op fallback).

## Bestanden
**Nieuw:**
- `supabase/migrations/<ts>_quote_requests.sql`
- `supabase/functions/submit-quote/index.ts`
- `supabase/functions/_shared/transactional-email-templates/quote-notification.tsx` (intern)
- `supabase/functions/_shared/transactional-email-templates/quote-confirmation.tsx` (klant)
- `src/pages/OfferteBedankt.tsx`
- `src/components/home/HeroSocialProof.tsx`

**Aangepast:**
- `src/components/layout/Header.tsx` (logo groter)
- `src/components/layout/Footer.tsx` (logo proportioneel)
- `src/components/home/Hero.tsx` (social proof onder USP's)
- `src/components/home/QuoteWizard.tsx` (top 6 + meer, auto-progress, postcode format, submit naar edge function, redirect)
- `src/App.tsx` (route `/offerte-bedankt`)
- Optioneel `src/lib/quote-schema.ts` (honeypot veld)

## Wat ik NIET in dit plan doe
- SEO meta-tags / JSON-LD / GA4 (apart traject — koos je nu niet).
- Prijsindicatie tonen (eerder afgewezen).
- Echte keurmerk-logo's uploaden (jij levert later aan).

## Vraag aan jou (kan ook na approval)
1. Welk **e-mailadres** moet de offerte-notificaties ontvangen?
2. Klopt **150+ projecten** en **4.9 / 87 reviews** als getallen, of zijn er andere cijfers?
