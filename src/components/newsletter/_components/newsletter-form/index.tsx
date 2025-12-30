"use client";

import { ArrowRight, Mail } from "lucide-react";
import { InputDefault } from "@/components/input-default";
import { Form } from "@/components/ui/form";
import { useNewsletterForm } from "./useNewsletterForm";

export default function NewsletterForm() {
  const { handleNewsletterFormSubmit, form } = useNewsletterForm();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleNewsletterFormSubmit)}
        className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
      >
        <div className="relative flex-1 flex items-center">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <InputDefault
            control={form.control}
            name="email"
            type="email"
            classLabel="hidden"
            placeholder="Seu melhor email"
            className="w-full pl-12 pr-4 py-2 rounded-xl border-0 bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-foreground/30 shadow-lg"
          />
        </div>
        <button
          type="submit"
          className="btn bg-coral-500 text-primary-foreground hover:bg-coral-600 shadow-lg px-8 py-4 group"
        >
          Inscrever
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </form>
    </Form>
  );
}
