import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { type LoginFormSchema, loginFormSchema } from "./schema";

export function useLogin() {
  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
    },
  });

  function handleLoginFormSubmit(data: LoginFormSchema) {
    console.log(data);
  };

  return {
    form,
    handleLoginFormSubmit,
  };
}
