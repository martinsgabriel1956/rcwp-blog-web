import type { Metadata } from "next";
import "./globals.css";
import { dmSans, playfairDisplay } from "@/utils/fonts";

export const metadata: Metadata = {
  title: {
    default: "Revival Core Wellness Physiotherapy | Blog de Fisioterapia e Bem-Estar",
    template: "%s | Revival Core Wellness Physiotherapy",
  },
  description:
    "Descubra dicas especializadas de fisioterapia, exercícios terapêuticos, prevenção de lesões e bem-estar físico. Conteúdo atualizado sobre saúde, reabilitação e qualidade de vida.",
  keywords: [
    "fisioterapia",
    "bem-estar",
    "saúde",
    "reabilitação",
    "exercícios terapêuticos",
    "prevenção de lesões",
    "qualidade de vida",
    "terapia física",
    "bem-estar físico",
    "saúde e fitness",
  ],
  authors: [{ name: "Regina Cardoso de Almeida" }],
  creator: "Regina Cardoso de Almeida",
  publisher: "Regina Cardoso de Almeida",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://revivalcorewellness.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Revival Core Wellness Physiotherapy",
    title: "Revival Core Wellness Physiotherapy | Blog de Fisioterapia e Bem-Estar",
    description:
      "Descubra dicas especializadas de fisioterapia, exercícios terapêuticos, prevenção de lesões e bem-estar físico. Conteúdo atualizado sobre saúde, reabilitação e qualidade de vida.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Revival Core Wellness Physiotherapy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Revival Core Wellness Physiotherapy | Blog de Fisioterapia e Bem-Estar",
    description:
      "Descubra dicas especializadas de fisioterapia, exercícios terapêuticos, prevenção de lesões e bem-estar físico.",
    images: ["/og-image.jpg"],
    creator: "@revivalcorewellness",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Saúde e Bem-Estar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${dmSans.variable} ${playfairDisplay.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
