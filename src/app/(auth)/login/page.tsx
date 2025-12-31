"use client";

import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { InputDefault } from "@/components/input-default";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useLogin } from "./useLogin";

export default function LoginPage() {
  const { form, handleLoginFormSubmit } = useLogin();

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/20 to-background p-4">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-2xl shadow-elegant p-8 border border-border/50">
          <div className="text-center mb-8">
            <h1 className="font-display text-3xl font-bold text-foreground mb-2">
              Revival Core Wellness Physiotherapy
            </h1>
            <p className="text-muted-foreground">Entre na sua conta</p>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleLoginFormSubmit)}
              className="space-y-5"
            >
              <div className="space-y-2">
                <div className="relative">
                  <InputDefault
                    control={form.control}
                    name="email"
                    label="Email"
                    type="email"
                    leftIcon={<Mail className="w-4 h-4" />}
                  />
                </div>
              </div>

              <Button type="submit" className="w-full">
                Entrar
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </Form>
          <Link href="/" className="hover:text-primary transition-colors mx-0 text-center mt-6 flex items-center justify-center gap-2 ">
            <ArrowLeft className="w-4 h-4" />
            Voltar ao blog
          </Link>
        </div>
      </div>
    </main>
  );
}
