import type { InputHTMLAttributes, ReactNode } from "react";
import type { Control, FieldValues, Path } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface InputProps<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  className?: string;
  formatValue?: (value: any) => string;
  isHidden?: string;
  onChangeValue?: (value: any) => void;
  classLabel?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  classNameInputWrapper?: string;
}

export const InputDefault = <T extends FieldValues>({
  control,
  name,
  label,
  className,
  formatValue,
  isHidden = "",
  onChangeValue,
  classLabel,
  leftIcon,
  rightIcon,
  classNameInputWrapper,
  ...props
}: InputProps<T>) => {
  const isReadOnly = props.readOnly;
  const hasIcons = leftIcon || rightIcon;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        const formattedValue = formatValue
          ? formatValue(field.value)
          : field.value;

        const inputElement = (
          <Input
            {...field}
            {...props}
            ref={field.ref}
            className={cn(
              "m-0",
              leftIcon && "pl-10",
              rightIcon && "pr-10"
            )}
            {...(isReadOnly
              ? {
                readOnly: true,
                defaultValue: formattedValue,
              }
              : {
                value: formattedValue,
                onChange: (e) => {
                  const newValue = e.target.value;
                  field.onChange(newValue);
                  if (onChangeValue) onChangeValue(newValue);
                },
              })}
          />
        );

        return (
          <FormItem className={cn(`${isHidden} space-y-0 w-full`, className)}>
            <FormLabel className={cn(classLabel)}>{label}</FormLabel>
            <FormControl>
              {hasIcons ? (
                <div className={cn("relative", classNameInputWrapper)}>
                  {leftIcon && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
                      {leftIcon}
                    </div>
                  )}
                  {inputElement}
                  {rightIcon && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      {rightIcon}
                    </div>
                  )}
                </div>
              ) : (
                inputElement
              )}
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};
