import { z } from "zod";

export const cultureLanguageSchema = z.object({
  religion: z.enum([
    "islam",
    "christianity",
    "judaism",
    "hinduism",
    "other",
  ]),
  
  spokenLanguages: z
    .array(z.enum([
      "arabic",
      "english",
      "french",
      "urdu",
      "hindi",
      "spanish",
    ]))
    .min(1, "Select at least one spoken language"),
});
export type CultureLanguageSchemaType = z.infer<typeof cultureLanguageSchema>;