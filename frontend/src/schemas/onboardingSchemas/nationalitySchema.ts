import { z } from "zod";

const countryValues = [
  "saudi_arabia",
  "usa",
  "uk",
  "india",
  "pakistan",
  "egypt",
] as const;

export const nationalitySchema = z.object({
countryOfBirth: z.enum(countryValues,).optional(),
  currentNationality: z.enum(countryValues, { error: "Current nationality is required" }),

  secondNationality: z.enum(countryValues).optional(),
});

export type NationalitySchemaType = z.infer<typeof nationalitySchema>;