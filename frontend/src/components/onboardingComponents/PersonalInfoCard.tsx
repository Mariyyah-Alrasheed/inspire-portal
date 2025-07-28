import { useFormContext } from "react-hook-form";
import CustomInput from "../custom/CustomInput";
import CustomSelect from "../custom/CustomSelect";
import ReusableCard from "../ReusableCard";
import CustomCalendar from "../custom/CustomCalendar";
// import type { PersonalInfoSchemaType } from "@/schemas/onboardingSchemas/personalInfoSchema";
import type { RootSchemaType } from "@/schemas/onboardingSchemas/rootSchema";

// type PersonalInfo = {
//   title: string;
//   fullNameEnglish: string;
//   fullNameOriginal: string;
//   dateOfBirth: string;
//   placeOfBirth: string;
// };

export default function PersonalInfoCard() {
  const { control } = useFormContext<RootSchemaType>();

  return (
    <ReusableCard
      title="Personal Information"
      description="Please fill in your details"
    >
      <CustomSelect
        label="Title"
        name="personalInfo.title"
        control={control}
        options={[
          { label: "Ms.", value: "ms" },
          { label: "Mr.", value: "mr" },
        ]}
        placeholder="e.g.Ms"
      />
      <CustomInput
        name="personalInfo.fullNameEnglish"
        control={control}
        label="Full Name in English"
        placeholder="Enter full name"
      />
      <CustomInput
        name="personalInfo.fullNameOriginal"
        control={control}
        label="Full Name in Original Language"
        placeholder="Enter full name"
      />
      <CustomCalendar
        label="Date of Birth"
        name="personalInfo.dateOfBirth"
        control={control}
        description="Your date of birth is used to calculate your age."
      />

      <CustomInput
        name="personalInfo.placeOfBirth"
        control={control}
        label="Place of Birth"
        placeholder="Enter place of birth"
      />
    </ReusableCard>
  );
}
