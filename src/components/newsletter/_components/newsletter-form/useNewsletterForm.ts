import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { type NewsletterFormSchema, newsletterFormSchema } from "./schema";

export function useNewsletterForm() {
  const form = useForm<NewsletterFormSchema>({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues: {
      email: "",
    },
  });

  function handleNewsletterFormSubmit(data: NewsletterFormSchema) {
    console.log(data);
  };

  return {
    handleNewsletterFormSubmit,
    form,
  };
}
