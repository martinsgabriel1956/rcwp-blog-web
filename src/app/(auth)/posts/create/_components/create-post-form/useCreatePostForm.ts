import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { type CreatePostFormSchema, createPostFormSchema } from "./schema";

export function useCreatePostForm() {
  const form = useForm<CreatePostFormSchema>({
    resolver: zodResolver(createPostFormSchema),
    defaultValues: {
      title: "",
      category: "",
      readingTime: "",
      imageUrl: "",
      excerpt: "",
      content: "",
    },
  });

  function handleCreatePostFormSubmit(data: CreatePostFormSchema) {
    console.log(data);
  }

  return {
    handleCreatePostFormSubmit,
    form,
  };
}
