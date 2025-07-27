import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface Option {
  label: string;
  value: string;
}

import type { Control, FieldValues } from "react-hook-form";

interface CustomRadioGroupProps {
  name: string;
  control: Control<FieldValues>;
  label: string;
  options: Option[];
}

export default function CustomRadioGroup({
  name,
  control,
  label,
  options,
}: CustomRadioGroupProps) {
  //   const safeId = `radio-${option.value.replace(/\s+/g, "-").toLowerCase()}`;
  const id = `${name}-${options.values}`;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="">
          <FormLabel className="text-xs xl:text-base font-medium">
            {label}
          </FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              value={field.value}
              // aria-label={label}

              id={id}
              className={`
                flex flex-row rounded-md border border-input bg-transparent
                py-1 text-sm shadow-xs
                focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-0
                focus-within:outline-none
                overflow-hidden
                `}
            >
              {options.map((option) => (
                <FormItem
                  key={option.value}
                  className={`flex items-center cursor-pointer select-none

                    px-4 py-1
                    `}
                >
                  <FormControl>
                    <RadioGroupItem
                      value={option.value}
                      id={option.value}
                      className="peer"
                    />
                  </FormControl>
                  <FormLabel
                    htmlFor={option.value}
                    className="ml-2 cursor-pointer text-gray-700 peer-checked:text-foreground peer-checked:font-semibold"
                  >
                    {option.label}
                  </FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
