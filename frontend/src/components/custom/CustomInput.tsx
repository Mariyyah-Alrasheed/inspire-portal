// import { Input } from "@/components/ui/input";

// type CustomInputProps = {
//   label: string;
//   value?: string;
//   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   placeholder: string;
//   type?: string;
//   required?: boolean;
//   className?: string;
// };

// export default function CustomInput({
//   label,
//   //   value,
//   //   onChange,
//   placeholder = "",
// }: //   type = "text",
// //   required = false,
// //   className = "",
// CustomInputProps) {
//   return (
//     <>
//       <div className="flex flex-col gap-1.5 w-full text-xs xl:text-base ">
//         <label className="">{label}</label>
//         <Input placeholder={placeholder} />
//       </div>
//     </>
//   );
// }

import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import type { Control, FieldValues } from "react-hook-form";
// import { useTranslation } from "react-i18next";

import type { Path } from "react-hook-form";

type CustomInputProps<TFieldValues extends FieldValues> = {
  name: Path<TFieldValues>;
  label: string;
  placeholder: string;
  control: Control<TFieldValues>;
  type?: string;
  required?: boolean;
  className?: string;
};

export default function CustomInput<TFieldValues extends FieldValues>({
  name,
  label,
  placeholder,
  control,
  type = "text",
  required = false,
  className = "",
}: CustomInputProps<TFieldValues>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-xs xl:text-base">
            {label}
            {required && <span className="text-gray-500 ml-1">*</span>}
          </FormLabel>
          <FormControl>
            <Input
              {...field}
              value={field.value ?? ""}
              type={type}
              className={`${className}`}
              placeholder={placeholder}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
