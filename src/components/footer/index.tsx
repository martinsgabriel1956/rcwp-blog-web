import { Instagram, Mail } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <section className="lg:col-span-1" aria-labelledby="footer-brand">
            <header className="flex items-center gap-3 mb-5">
              <div className="flex flex-col gap-2">
                <Link href="/" className="text-xs text-primary-foreground/60 hover:text-primary transition-colors">
                  <h2 id="footer-brand" className="text-lg font-display text-white/70 font-bold leading-tight max-w-[180px]">
                    Revival Core {' '}
                    Wellness Physiotherapy
                  </h2>
                </Link>
              </div>
            </header>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Conteúdo de qualidade sobre fisioterapia, saúde e bem-estar.
            </p>
            <nav aria-label="Redes sociais">
              <ul className="flex items-center gap-3">
                <li>
                  <a
                    href="https://www.instagram.com/rcaphysioterapy/"
                    className="w-9 h-9 rounded-xl bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label="Visite nosso Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="w-4 h-4" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </nav>
          </section>

          <section aria-labelledby="footer-links">
            <h2 id="footer-links" className="font-semibold mb-5">Links Úteis</h2>
            <nav aria-label="Links úteis">
              <ul className="space-y-3 text-sm text-primary-foreground/70">
                <li><Link href="/profissional" className="hover:text-primary transition-colors">Sobre a Profissional</Link></li>
                <li><Link href="/politica-de-privacidade" className="hover:text-primary transition-colors">Política de Privacidade</Link></li>
                <li><Link href="/termos-de-uso" className="hover:text-primary transition-colors">Termos de Uso</Link></li>
              </ul>
            </nav>
          </section>

          <section aria-labelledby="footer-contact">
            <h2 id="footer-contact" className="font-semibold mb-5">Contato</h2>
            <address className="not-italic">
              <ul className="space-y-4 text-sm text-primary-foreground/70">
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                  <a href="mailto:contact@revivalcorewellness.com" className="hover:text-primary transition-colors">
                    contact@revivalcorewellness.com
                  </a>
                </li>
              </ul>
            </address>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/50">
          <p>© {currentYear} Revival Core Wellness Physiotherapy. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
