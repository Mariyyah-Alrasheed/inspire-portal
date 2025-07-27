import { useFormContext } from "react-hook-form";
import CustomInput from "../custom/CustomInput";
import CustomSelect from "../custom/CustomSelect";
import ReusableCard from "../ReusableCard";
import CustomCalendar from "../custom/CustomCalendar";
import type { PersonalInfoSchemaType } from "@/schemas/onboardingSchemas/personalInfoSchema";

// type PersonalInfo = {
//   title: string;
//   fullNameEnglish: string;
//   fullNameOriginal: string;
//   dateOfBirth: string;
//   placeOfBirth: string;
// };

export default function PersonalInfoCard() {
  const { control } = useFormContext<PersonalInfoSchemaType>();

  return (
    <ReusableCard
      title="Personal Information"
      description="Please fill in your details"
    >
      <CustomSelect
        label="Title"
        name={"title"}
        control={control}
        options={[
          { label: "Ms.", value: "ms" },
          { label: "Mr.", value: "mr" },
        ]}
        placeholder="e.g.Ms"
      />
      <CustomInput
        name="fullNameEnglish"
        control={control}
        label="Full Name in English"
        placeholder="Enter full name"
      />
      <CustomInput
        name="fullNameOriginal"
        control={control}
        label="Full Name in Original Language"
        placeholder="Enter full name"
      />
      <CustomCalendar
        label="Date of Birth"
        name="dateOfBirth"
        control={control}
        description="Your date of birth is used to calculate your age."
      />

      <CustomInput
        name="placeOfBirth"
        control={control}
        label="Place of Birth"
        placeholder="Enter place of birth"
      />
    </ReusableCard>
  );
}
