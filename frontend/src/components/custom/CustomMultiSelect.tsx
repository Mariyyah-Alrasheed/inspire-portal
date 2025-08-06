import Select from "react-select";
import {
  type Control,
  Controller,
  type FieldValues,
  type Path,
} from "react-hook-form";

type Option = {
  value: string;
  label: string;
};

type Props<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  options: Option[];
  label?: string;
  placeholder?: string;
};

export default function CustomMultiSelect<T extends FieldValues>({
  name,
  control,
  options,
  label,
  placeholder,
}: Props<T>) {
  return (
    <div>
      {label && (
        <label className="block text-sm font-medium mb-1">{label}</label>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field }) => {
          const selectedOptions = options.filter((opt) =>
            Array.isArray(field.value) ? field.value.includes(opt.value) : false
          );

          return (
            <Select
              isMulti
              options={options}
              value={selectedOptions}
              onChange={(selected) => {
                const values = (selected as Option[]).map((opt) => opt.value);
                field.onChange(values);
              }}
              placeholder={placeholder}
            />
          );
        }}
      />
    </div>
  );
}
