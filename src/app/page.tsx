import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MapFeature } from "@/components/MapFeature";
import { Discovery } from "@/components/Discovery";
import { LocalCreators } from "@/components/LocalCreators";
import { Benefits } from "@/components/Benefits";
import { Comparison } from "@/components/Comparison";
import { Segments } from "@/components/Segments";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { faqSchema } from "@/lib/data";

export const metadata: Metadata = {
  description:
    "Plataforma que conecta empresas a creators locais. Mapa interativo, marketplace com filtros, creators presenciais. Cadastro gratuito, sem mensalidades.",
  openGraph: {
    title: "UGC Local — Encontre Creators da Sua Região",
    description:
      "Descubra creators próximos ao seu negócio no mapa. Contrate para conteúdo presencial ou digital de forma organizada e profissional.",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <MapFeature />
          <Discovery />
          <LocalCreators />
          <Benefits />
          <Comparison />
          <Segments />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
