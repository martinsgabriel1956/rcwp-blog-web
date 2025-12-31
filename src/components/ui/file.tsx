"use client";

import { AlertCircleIcon, ImageIcon, UploadIcon, XIcon } from "lucide-react";
import Image from "next/image";
import type {
  Control,
  ControllerRenderProps,
  FieldValues,
  Path,
} from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useFileUpload } from "@/hooks/use-file-upload";
import { cn } from "@/lib/utils";

type FileWithPreviewProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  className?: string;
  maxSizeMB?: number;
  maxFiles?: number;
  accept?: string;
  disabled?: boolean;
};

function isFile(value: unknown): value is File {
  return value instanceof File;
}

function FileUploadContent<T extends FieldValues>({
  field,
  maxSize,
  maxFiles,
  maxSizeMB,
  accept,
  disabled,
  label,
  className,
}: {
  field: ControllerRenderProps<T, Path<T>>;
  maxSize: number;
  maxFiles: number;
  maxSizeMB: number;
  accept: string;
  disabled: boolean;
  label?: string;
  className?: string;
}) {
  const [
    { files, isDragging, errors },
    {
      handleDragEnter,
      handleDragLeave,
      handleDragOver,
      handleDrop,
      openFileDialog,
      removeFile,
      getInputProps,
    },
  ] = useFileUpload({
    accept,
    maxSize,
    multiple: true,
    maxFiles,
    initialFiles: field.value || [],
    onFilesChange: (newFiles) => {
      const fileList = newFiles.map((file) => file.file).filter(isFile);
      field.onChange(fileList);
    },
  });

  return (
    <FormItem className={cn(className)}>
      {label && <FormLabel>{label}</FormLabel>}
      <FormControl>
        <div className="flex flex-col gap-2">
          {/* biome-ignore lint/a11y/useSemanticElements: This is a drag-and-drop zone, not a button */}
          <div
            role="button"
            tabIndex={0}
            onDragEnter={disabled ? undefined : handleDragEnter}
            onDragLeave={disabled ? undefined : handleDragLeave}
            onDragOver={disabled ? undefined : handleDragOver}
            onDrop={disabled ? undefined : handleDrop}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openFileDialog();
              }
            }}
            data-dragging={isDragging || undefined}
            data-files={files.length > 0 || undefined}
            data-disabled={disabled || undefined}
            className={cn(
              "border-input relative flex min-h-52 flex-col items-center overflow-hidden rounded-md border bg-transparent p-4 transition-colors not-data-files:justify-center",
              "focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]",
              "data-[dragging=true]:bg-accent/50 data-[dragging=true]:border-ring",
              disabled && "opacity-50 cursor-not-allowed pointer-events-none",
            )}
          >
            <input
              {...getInputProps()}
              className="sr-only"
              aria-label="Upload image file"
              disabled={disabled}
            />
            {files.length > 0 ? (
              <div className="flex w-full flex-col gap-3">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-muted-foreground truncate text-sm font-medium">
                    Imagens carregadas ({files.length})
                  </h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={openFileDialog}
                    disabled={disabled || files.length >= maxFiles}
                    type="button"
                  >
                    <UploadIcon
                      className="-ms-0.5 size-3.5 opacity-60"
                      aria-hidden="true"
                    />
                    Adicionar mais
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                  {files.map((file) => (
                    <div
                      key={file.id}
                      className="border-input relative aspect-square rounded-md border bg-muted/30"
                    >
                      <Image
                        src={file.preview ?? ""}
                        alt={file.file.name}
                        className="size-full rounded-[inherit] object-cover"
                        width={100}
                        height={100}
                      />
                      <Button
                        onClick={() => !disabled && removeFile(file.id)}
                        size="icon"
                        variant="destructive"
                        className="absolute -top-2 -right-2 size-6 rounded-full shadow-sm"
                        aria-label="Remove image"
                        type="button"
                        disabled={disabled}
                      >
                        <XIcon className="size-3.5" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center px-4 py-3 text-center">
                <div
                  className="bg-muted mb-2 flex size-11 shrink-0 items-center justify-center rounded-full"
                  aria-hidden="true"
                >
                  <ImageIcon className="text-muted-foreground size-5" />
                </div>
                <p className="mb-1 text-sm font-medium">
                  Arraste e solte suas imagens aqui
                </p>
                <p className="text-muted-foreground mb-3 text-xs">
                  SVG, PNG, JPG ou GIF (máx. {maxSizeMB}MB)
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={openFileDialog}
                  type="button"
                  disabled={disabled}
                >
                  <UploadIcon
                    className="-ms-0.5 size-3.5 opacity-60"
                    aria-hidden="true"
                  />
                  Selecionar imagens
                </Button>
              </div>
            )}
          </div>

          {errors.length > 0 && (
            <div
              className="text-destructive flex items-center gap-1 text-xs"
              role="alert"
            >
              <AlertCircleIcon className="size-3 shrink-0" />
              <span>{errors[0]}</span>
            </div>
          )}
        </div>
      </FormControl>
      <FormMessage />
    </FormItem>
  );
}

export default function FileWithPreview<T extends FieldValues>({
  control,
  name,
  label = "Imagens",
  className,
  maxSizeMB = 5,
  maxFiles = 6,
  accept = "image/svg+xml,image/png,image/jpeg,image/jpg,image/gif",
  disabled = false,
}: FileWithPreviewProps<T>) {
  const maxSize = maxSizeMB * 1024 * 1024;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FileUploadContent
          field={field}
          maxSize={maxSize}
          maxFiles={maxFiles}
          maxSizeMB={maxSizeMB}
          accept={accept}
          disabled={disabled}
          label={label}
          className={className}
        />
      )}
    />
  );
}
