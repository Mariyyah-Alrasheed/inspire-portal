import { z } from "zod";

export const personalInfoSchema = z.object({
  title: z.enum(["ms", "mr"], { error: "Title is required" }),
  fullNameEnglish: z.string().min(1, "Full name in English is required"),
  fullNameOriginal: z.string().min(1, "Full name in original language is required"),
  dateOfBirth: z.string().min(1, "Date of birth is required"), // ممكن تتحقق بشكل أدق لو التاريخ
  placeOfBirth: z.string().min(1, "Place of birth is required"),
});

export type PersonalInfoSchemaType = z.infer<typeof personalInfoSchema>;