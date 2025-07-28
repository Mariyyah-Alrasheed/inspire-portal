import { useFormContext } from "react-hook-form";
import ReusableCard from "../ReusableCard";
import CustomInput from "../custom/CustomInput";
import CustomSelect from "../custom/CustomSelect";

import CustomRadioGroup from "../custom/CustomRadioGroup";
import type { RootSchemaType } from "@/schemas/onboardingSchemas/rootSchema";
// import { register } from "module";

export default function FamilyDetailsCard() {
  const { control } = useFormContext<RootSchemaType>();

  return (
    <>
      <ReusableCard
        title="Family Details"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      >
        {/* Father's Name */}
        <CustomInput
          name="familyDetails.fatherName"
          control={control}
          label="Father’s Name"
          placeholder="Enter Father’s name"
        />
        {/* Mother's Name */}
        <CustomInput
          name="familyDetails.motherName"
          control={control}
          label="Mother’s Name"
          placeholder="Enter Mother’s name"
        />
        {/* Family Member in Inspire */}
        <CustomRadioGroup
          label="Family member in Inspire?"
          name="familyDetails.familyMemberInInspire"
          control={control}
          options={[
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
          ]}
        />
        {/* Marital Status */}
        <CustomSelect
          label="Marital Status"
          name="familyDetails.maritalStatus"
          control={control}
          options={[
            { label: "Single", value: "single" },
            { label: "Married", value: "married" },
            { label: "Divorced", value: "divorced" },
            { label: "Widowed", value: "widowed" },
          ]}
          placeholder="Select your marital status"
        />
      </ReusableCard>
    </>
  );
}
