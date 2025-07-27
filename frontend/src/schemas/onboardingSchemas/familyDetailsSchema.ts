import { z } from "zod";

export const familyDetailsSchema = z.object({
  fatherName: z.string().min(1, "Father’s name is required"),
  motherName: z.string().min(1, "Mother’s name is required"),
  familyMemberInInspire: z.enum(["yes", "no"], "Please select yes or no"),
  maritalStatus: z.enum(["single", "married", "divorced", "widowed"], "Please select marital status"),
});
export type FamilyDetailsSchemaType = z.infer<typeof familyDetailsSchema>;