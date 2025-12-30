import z from "zod";

export const newsletterFormSchema = z.object({
  email: z.email("Email é obrigatório"),
});

export type NewsletterFormSchema = z.infer<typeof newsletterFormSchema>;
