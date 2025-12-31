import type { Control, FieldValues, Path } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

interface SelectProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  items: { id: number; item: string; label?: string }[] | null;
  title?: string;
  label?: string;
  className?: string;
  classLabel?: string;
  onChangeSetValue?: (value?: any) => void;
}

export const SelectDefault = <T extends FieldValues>({
  control,
  items,
  name,
  title,
  label,
  className,
  classLabel,
  onChangeSetValue,
}: SelectProps<T>) => {
  const displayLabel = label || title;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn(className)}>
          <FormLabel className={cn(classLabel)}>{displayLabel}</FormLabel>
          <Select
            onValueChange={(value) => {
              if (value === "_clear_") {
                field.onChange(""); // Reseta o campo para vazio
              } else {
                field.onChange(value); // Define o valor selecionado
                onChangeSetValue?.(value);
              }
            }}
            value={field.value || ""}
          >
            <FormControl className="w-full">
              <SelectTrigger>
                <SelectValue placeholder="Selecione..." />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="_clear_">...</SelectItem>
              {items?.map(
                (option: { id: number; item: string; label?: string }) => (
                  <SelectItem key={option.id} value={option.item}>
                    {option.label ?? option.item}
                  </SelectItem>
                ),
              )}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
