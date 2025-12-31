"use client";

import { EditorContent, EditorContext } from "@tiptap/react";
import type {
  Control,
  ControllerRenderProps,
  FieldValues,
  Path,
} from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { BubbleBar } from "./_components/bubblebar";
import { FloatBar } from "./_components/floatbar";
import { useMarkdownEditorField } from "./useMarkedownEditorField";

type MarkdownEditorFieldProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  className?: string;
  disabled?: boolean;
};

function EditorContent_<T extends FieldValues>({
  field,
  disabled,
}: {
  field: ControllerRenderProps<T, Path<T>>;
  disabled: boolean;
}) {
  const { editor, providerValue } = useMarkdownEditorField({
    value: field.value || "",
    onChange: field.onChange,
    disabled,
  });

  if (!editor) {
    return null;
  }

  return (
    <EditorContext.Provider value={providerValue}>
      <div className="relative w-full">
        <FloatBar editor={editor} />
        <BubbleBar editor={editor} />
        <EditorContent editor={editor} />
      </div>
    </EditorContext.Provider>
  );
}

export function MarkdownEditorField<T extends FieldValues>({
  control,
  name,
  label = "Conteúdo",
  className,
  disabled = false,
}: MarkdownEditorFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn(className)}>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <EditorContent_ field={field} disabled={disabled} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
