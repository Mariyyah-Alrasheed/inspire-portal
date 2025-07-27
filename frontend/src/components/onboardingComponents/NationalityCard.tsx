import { useFormContext } from "react-hook-form";
import ReusableCard from "../ReusableCard";
import CustomSelect from "../custom/CustomSelect";
import type { NationalitySchemaType } from "@/schemas/onboardingSchemas/nationalitySchema";

export default function NationalityCard() {
  const { control } = useFormContext<NationalitySchemaType>();

  const countryOptions = [
    { label: "Saudi Arabia", value: "saudi_arabia" },
    { label: "United States", value: "usa" },
    { label: "United Kingdom", value: "uk" },
    { label: "India", value: "india" },
    { label: "Pakistan", value: "pakistan" },
    { label: "Egypt", value: "egypt" },
    // أضف أو عدل حسب احتياجك
  ];

  return (
    <ReusableCard
      title="Nationality & Citizenship"
      description="Set a maximum spending cap to manage costs effectively."
    >
      <CustomSelect
        label="Country of Birth"
        name="countryOfBirth"
        control={control}
        options={countryOptions}
        placeholder="Select your birth country"
      />
      <CustomSelect
        label="Current Nationality"
        name="currentNationality"
        control={control}
        options={countryOptions}
        placeholder="Select your current nationality"
      />
      <CustomSelect
        label="Second Nationality"
        name="secondNationality"
        control={control}
        options={countryOptions}
        placeholder="Select your second nationality"
      />
    </ReusableCard>
  );
}
