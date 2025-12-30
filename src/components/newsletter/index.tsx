import { Sparkles } from "lucide-react";
import NewsletterForm from "./_components/newsletter-form";

export function Newsletter() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-teal-600 to-teal-700 py-16 md:py-24">
      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Newsletter Semanal</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
            Receba Conteúdo Exclusivo
          </h2>

          <p className="text-primary-foreground/80 text-lg mb-10 leading-relaxed">
            Assine nossa newsletter e receba dicas de saúde, exercícios e
            novidades da fisioterapia diretamente no seu email.
          </p>

          <NewsletterForm />

          <p className="text-primary-foreground/60 text-sm mt-6">
            Sem spam. Cancele quando quiser.
          </p>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-coral-500/20 rounded-full blur-3xl" />
    </section>
  );
}
