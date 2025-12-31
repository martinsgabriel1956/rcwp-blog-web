"use client";

import { InputDefault } from "@/components/input-default";
import { MarkdownEditorField } from "@/components/markdown-editor-field";
import { SelectDefault } from "@/components/select-default";
import { TextareaDefault } from "@/components/textarea-default";
import FileWithPreview from "@/components/ui/file";
import { Form } from "@/components/ui/form";
import { generateSlug } from "@/utils/generate-slug";
import { categories } from "@/utils/mockedData";
import { useCreatePostForm } from "./useCreatePostForm";

export function CreatePostForm() {
  const { handleCreatePostFormSubmit, form } = useCreatePostForm();

  const categoriesNames = categories.map((category) => ({
    id: Number(category.id),
    item: category.name,
  }));

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleCreatePostFormSubmit)}
        className="space-y-6"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2 md:col-span-2">
            <InputDefault
              control={form.control}
              name="title"
              label="Título *"
              placeholder="Digite o título do post"
              className="text-lg"
              required
            />

            {form.watch("title") && (
              <p className="text-xs text-muted-foreground">
                Slug: {generateSlug(form.watch("title"))}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <SelectDefault
              control={form.control}
              name="category"
              label="Categoria"
              items={categoriesNames}
            />
          </div>

          <div className="space-y-2">
            <InputDefault
              control={form.control}
              name="readingTime"
              label="Tempo de leitura"
              placeholder="Ex: 5 min"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <FileWithPreview
              control={form.control}
              name="imageUrl"
              label="URL da Imagem"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <TextareaDefault
              control={form.control}
              name="excerpt"
              label="Resumo"
              placeholder="Um breve resumo do post (aparece na listagem)"
              rows={3}
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <MarkdownEditorField
              control={form.control}
              name="content"
              label="Conteúdo *"
            />
          </div>
        </div>
      </form>
    </Form>
  );
}
