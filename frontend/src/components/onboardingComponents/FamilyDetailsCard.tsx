import { useFormContext } from "react-hook-form";
import ReusableCard from "../ReusableCard";
import CustomInput from "../custom/CustomInput";
import CustomSelect from "../custom/CustomSelect";

import CustomRadioGroup from "../custom/CustomRadioGroup";
// import { register } from "module";

export default function FamilyDetailsCard() {
  const { control } = useFormContext();

  return (
    <>
      <ReusableCard
        title="Family Details"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      >
        {/* Father's Name */}
        <CustomInput
          name="fatherName"
          control={control}
          label="Father’s Name"
          placeholder="Enter Father’s name"
        />
        {/* Mother's Name */}
        <CustomInput
          name="motherName"
          control={control}
          label="Mother’s Name"
          placeholder="Enter Mother’s name"
        />
        {/* Family Member in Inspire */}
        <CustomRadioGroup
          label="Family member in Inspire?"
          name="familyMemberInInspire"
          control={control}
          options={[
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
          ]}
        />
        {/* Marital Status */}
        <CustomSelect
          label="Marital Status"
          name="maritalStatus"
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
