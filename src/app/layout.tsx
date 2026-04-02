import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ugclocal.com.br"),
  title: {
    default: "UGC Local — Encontre Creators da Sua Região",
    template: "%s | UGC Local",
  },
  description:
    "Descubra creators próximos ao seu negócio no mapa interativo. Contrate para conteúdo presencial ou digital de forma organizada e profissional. 2.500+ creators ativos.",
  keywords: [
    "UGC",
    "creators locais",
    "conteúdo presencial",
    "marketing local",
    "creators Brasil",
    "user generated content",
    "influenciadores locais",
  ],
  authors: [{ name: "UGC Local" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "UGC Local",
    title: "UGC Local — Encontre Creators da Sua Região",
    description:
      "Plataforma que conecta empresas a creators locais. Mapa interativo, marketplace com filtros, contratação segura.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "UGC Local — Conecte-se com creators da sua região",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UGC Local — Encontre Creators da Sua Região",
    description:
      "Descubra creators próximos ao seu negócio. 2.500+ creators ativos em todo o Brasil.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://ugclocal.com.br",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "UGC Local",
  url: "https://ugclocal.com.br",
  logo: "https://ugclocal.com.br/og-image.png",
  description:
    "Plataforma que conecta empresas a creators locais para produção de conteúdo presencial e digital.",
  sameAs: [
    "https://instagram.com/ugclocal",
    "https://linkedin.com/company/ugclocal",
    "https://twitter.com/ugclocal",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "UGC Local",
  url: "https://ugclocal.com.br",
  description:
    "Descubra creators próximos ao seu negócio no mapa interativo. Contrate para conteúdo presencial ou digital.",
  inLanguage: "pt-BR",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
