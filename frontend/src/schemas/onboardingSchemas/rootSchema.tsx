import { z } from "zod";
import { personalInfoSchema } from "./personalInfoSchema";
import { nationalitySchema } from "./nationalitySchema";
import { cultureLanguageSchema } from "./cultureLanguageSchema";
import { familyDetailsSchema } from "./familyDetailsSchema";

export const rootSchema = z.object({
  personalInfo: personalInfoSchema,
  nationality: nationalitySchema,
  cultureLanguage: cultureLanguageSchema,
  familyDetails: familyDetailsSchema,
});
export type RootSchemaType = z.infer<typeof rootSchema>;
