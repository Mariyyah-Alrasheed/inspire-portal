import Select from "react-select";
import type { Control, FieldValues, Path } from "react-hook-form";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

type Option = {
  value: string;
  label: string;
};

type CustomMultiSelectProps<TFieldValues extends FieldValues> = {
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  options: Option[];
  label?: string;
  description?: string;
  placeholder?: string;
};

export default function CustomMultiSelect<T extends FieldValues>({
  name,
  control,
  options,
  label,
  description,
  placeholder,
}: CustomMultiSelectProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        const value = options.filter(
          (option) =>
            Array.isArray(field.value) && field.value.includes(option.value)
        );

        return (
          <FormItem>
            {label && (
              <FormLabel className="text-xs xl:text-base">{label}</FormLabel>
            )}
            <FormControl>
              <Select
                options={options}
                isMulti
                placeholder={placeholder}
                value={value}
                onChange={(selected) => {
                  const newValue = selected
                    ? (selected as Option[]).map((opt) => opt.value)
                    : [];
                  field.onChange(newValue);
                }}
                isClearable
                styles={{
                  control: (base, state) => ({
                    ...base,
                    backgroundColor: "#FFFFFF",
                    borderColor: state.isFocused ? "#4C6EF5" : "#D0D5DD",
                    boxShadow: state.isFocused
                      ? "0 0 0 3px rgba(76, 110, 245, 0.3)" // نفس تأثير الفوكس في input
                      : "0 1px 1px rgba(0, 0, 0, 0.05)",
                    borderWidth: "1px",
                    borderRadius: "6px",
                    minHeight: "36px",
                    padding: "0px 2px",
                    fontSize: "14px",
                    transition: "all 0.2s",
                  }),
                  placeholder: (base) => ({
                    ...base,
                    fontSize: "14px",
                    color: "#9CA3AF", // لون مشابه placeholder في input
                  }),
                  valueContainer: (base) => ({
                    ...base,
                    padding: "0 6px",
                  }),
                  multiValue: (base) => ({
                    ...base,
                    backgroundColor: "#E5E7EB",
                    borderRadius: "4px",
                    padding: "0 4px",
                  }),
                  multiValueLabel: (base) => ({
                    ...base,
                    fontSize: "13px",
                    color: "#1F2937",
                  }),
                  multiValueRemove: (base) => ({
                    ...base,
                    color: "#6B7280",
                    ":hover": {
                      backgroundColor: "#D1D5DB",
                      color: "#111827",
                    },
                  }),
                  dropdownIndicator: (base) => ({
                    ...base,
                    color: "#6B7280",
                  }),
                  indicatorSeparator: () => ({
                    display: "none",
                  }),
                }}
              />
            </FormControl>
            {description && (
              <FormDescription className="text-xs">
                {description}
              </FormDescription>
            )}
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}
