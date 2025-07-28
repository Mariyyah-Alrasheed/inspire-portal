import { useFormContext } from "react-hook-form";
import ReusableCard from "../ReusableCard";
import CustomSelect from "../custom/CustomSelect";
import CustomMultiSelect from "../custom/CustomMultiSelect";
import type { RootSchemaType } from "@/schemas/onboardingSchemas/rootSchema";

export default function CultureLanguageCard() {
  const { control } = useFormContext<RootSchemaType>();

  const religionOptions = [
    { label: "Islam", value: "islam" },
    { label: "Christianity", value: "christianity" },
    { label: "Judaism", value: "judaism" },
    { label: "Hinduism", value: "hinduism" },
    { label: "Other", value: "other" },
  ];

  const languageOptions = [
    { label: "Arabic", value: "arabic" },
    { label: "English", value: "english" },
    { label: "French", value: "french" },
    { label: "Urdu", value: "urdu" },
    { label: "Hindi", value: "hindi" },
    { label: "Spanish", value: "spanish" },
    // أضيفي حسب الحاجة
  ];

  return (
    <ReusableCard
      title="Culture & Languages Preferences"
      description="Set a maximum spending cap to manage costs effectively."
    >
      <CustomSelect
        label="Religion"
        name="cultureLanguage.religion"
        control={control}
        options={religionOptions}
        placeholder="Select your religion"
      />
      <CustomMultiSelect
        name="cultureLanguage.spokenLanguages"
        control={control}
        label="Spoken Languages (At least 1)"
        placeholder="Select language(s)"
        options={languageOptions}
      />
    </ReusableCard>
  );
}
