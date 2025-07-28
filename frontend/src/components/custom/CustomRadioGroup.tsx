// "use client";

// import {
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import type { Control, FieldValues, Path } from "react-hook-form";

// interface Option {
//   label: string;
//   value: string;
// }

// interface CustomRadioGroupProps<TFieldValues extends FieldValues> {
//   name: Path<TFieldValues>;
//   control: Control<TFieldValues>;
//   label: string;
//   options: Option[];
// }

// const CustomRadioGroup = <TFieldValues extends FieldValues>({
//   name,
//   control,
//   label,
//   options,
// }: CustomRadioGroupProps<TFieldValues>) => {
//   return (
//     <FormField
//       control={control}
//       name={name}
//       render={({ field }) => (
//         <FormItem className="space-y-3">
//           <FormLabel className="text-xs xl:text-base font-medium">
//             {label}
//           </FormLabel>
//           <FormControl>
//             <RadioGroup
//               onValueChange={field.onChange}
//               defaultValue={field.value}
//               className="flex flex-col space-y-2"
//             >
//               {options.map((option) => (
//                 <FormItem
//                   key={option.value}
//                   className="flex items-center space-x-3 space-y-0"
//                 >
//                   <FormControl>
//                     <RadioGroupItem value={option.value} />
//                   </FormControl>
//                   <FormLabel className="font-normal">{option.label}</FormLabel>
//                 </FormItem>
//               ))}
//             </RadioGroup>
//           </FormControl>
//           <FormMessage />
//         </FormItem>
//       )}
//     />
//   );
// };
"use client";

import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
} from "react-hook-form";
import { RadioButton } from "primereact/radiobutton";

interface Option {
  label: string;
  value: string;
}

interface CustomRadioGroupProps<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  label: string;
  options: Option[];
}

export default function CustomRadioGroup<TFieldValues extends FieldValues>({
  name,
  control,
  options,
  label,
}: CustomRadioGroupProps<TFieldValues>) {
  return (
    <div className="space-y-2">
      <label className="text-xs xl:text-base font-medium">{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div
            className="
              flex flex-row
              rounded-md border border-input
              bg-transparent
              overflow-hidden
              shadow-b-sm
              h-9

            "
          >
            {options.map((option) => (
              <label
                key={option.value}
                htmlFor={option.value}
                className={`
                  flex items-center justify-center
                  cursor-pointer
                  px-5
                  text-sm font-normal
                  hover:bg-gray-100
                  select-none
                  ${
                    field.value === option.value
                      ? "text-blue-600 font-semibold"
                      : "text-gray-600 hover:text-gray-900"
                  }
                `}
              >
                <RadioButton
                  inputId={option.value}
                  value={option.value}
                  onChange={(e) => field.onChange(e.value)}
                  checked={field.value === option.value}
                  className="mr-2"
                />
                {option.label}
              </label>
            ))}
          </div>
        )}
      />
    </div>
  );
}
