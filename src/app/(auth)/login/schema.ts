import z from "zod";

export const loginFormSchema = z.object({
  email: z.email("Email é obrigatório"),
});

export type LoginFormSchema = z.infer<typeof loginFormSchema>;
