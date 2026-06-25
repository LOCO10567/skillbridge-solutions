import { z } from "zod";

export const postcodeRegex = /^\d{4}\s?[A-Za-z]{2}$/;

export const stepServiceSchema = z.object({
  service: z.string().min(1, "Kies een type klus"),
});

export const stepScopeSchema = z.object({
  scope: z.enum(["Klein", "Middel", "Groot", "Weet ik niet"], {
    errorMap: () => ({ message: "Kies een omvang" }),
  }),
  timing: z.enum(["Z.s.m.", "1-3 maanden", "3-6 maanden", "Oriënterend"], {
    errorMap: () => ({ message: "Kies een startmoment" }),
  }),
  notes: z.string().trim().max(500, "Max 500 tekens").optional(),
});

export const stepLocationSchema = z.object({
  postcode: z
    .string()
    .trim()
    .regex(postcodeRegex, "Vul een geldige postcode in (1234 AB)"),
  city: z.string().trim().max(100).optional(),
  clientType: z.enum(["Particulier", "Zakelijk", "VvE"], {
    errorMap: () => ({ message: "Kies een type opdrachtgever" }),
  }),
});

export const stepContactSchema = z.object({
  name: z.string().trim().min(2, "Vul je naam in").max(100),
  phone: z
    .string()
    .trim()
    .min(8, "Vul een geldig telefoonnummer in")
    .max(20, "Max 20 tekens"),
  email: z.string().trim().email("Vul een geldig e-mailadres in").max(255),
  contactPreference: z.enum(["Bellen", "WhatsApp", "E-mail"], {
    errorMap: () => ({ message: "Kies een contactvoorkeur" }),
  }),
  // Honeypot — must stay empty
  company_website: z.string().max(0).optional(),
});

export function formatPostcode(input: string): string {
  const cleaned = input.toUpperCase().replace(/\s+/g, "");
  if (cleaned.length <= 4) return cleaned;
  return `${cleaned.slice(0, 4)} ${cleaned.slice(4, 6)}`;
}

export const quoteSchema = stepServiceSchema
  .merge(stepScopeSchema)
  .merge(stepLocationSchema)
  .merge(stepContactSchema);

export type QuoteData = z.infer<typeof quoteSchema>;
