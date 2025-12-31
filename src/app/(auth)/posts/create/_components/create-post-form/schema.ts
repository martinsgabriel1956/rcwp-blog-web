import z from "zod";

export const createPostFormSchema = z.object({
  title: z.string().min(1, "Título é obrigatório"),
  category: z.string().min(1, "Categoria é obrigatório"),
  readingTime: z.string().min(1, "Tempo de leitura é obrigatório"),
  imageUrl: z.string().min(1, "URL da imagem é obrigatório"),
  excerpt: z.string().min(1, "Resumo é obrigatório"),
  content: z.string().min(1, "Conteúdo é obrigatório"),
});

export type CreatePostFormSchema = z.infer<typeof createPostFormSchema>;
