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

export const metadata: Metadata = {
  description:
    "Plataforma que conecta empresas a creators locais. Mapa interativo, marketplace com filtros, creators presenciais. Cadastro gratuito, sem mensalidades.",
  openGraph: {
    title: "UGC Local — Encontre Creators da Sua Região",
    description:
      "Descubra creators próximos ao seu negócio no mapa. Contrate para conteúdo presencial ou digital de forma organizada e profissional.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Como funciona a plataforma UGC Local?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Você busca creators da sua região usando o mapa interativo ou marketplace com filtros. Vê perfis verificados com portfólio e avaliações, envia proposta de trabalho, alinha briefing e recebe o conteúdo. Tudo gerenciado dentro da plataforma de forma organizada e segura.",
      },
    },
    {
      "@type": "Question",
      name: "Qual a diferença entre conteúdo presencial e digital?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Conteúdo presencial é quando o creator vai até o seu estabelecimento para gravar (restaurante, loja, academia). Conteúdo digital é quando o creator cria o material remotamente, como análise de produtos que você envia ou conteúdo sobre sua marca sem necessidade de visita.",
      },
    },
    {
      "@type": "Question",
      name: "Como sei se o creator é confiável?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Todos os creators passam por verificação de identidade e perfil. Você pode ver avaliações reais de outras empresas, portfólio completo, taxa de entrega no prazo e histórico de trabalhos anteriores na plataforma.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto custa contratar um creator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Os valores variam de acordo com o tipo de conteúdo, alcance do creator e complexidade do projeto. Geralmente entre R$ 250 e R$ 800 por conteúdo. Você vê o preço antes de contratar e não paga taxas mensais, apenas pelo que usar.",
      },
    },
    {
      "@type": "Question",
      name: "Como funciona o pagamento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O pagamento é feito pela plataforma de forma segura. Você paga apenas após receber e aprovar o conteúdo. Aceitamos cartão de crédito, boleto e PIX. A plataforma retém o valor e só repassa ao creator após sua aprovação.",
      },
    },
    {
      "@type": "Question",
      name: "E se eu não gostar do conteúdo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Todo projeto tem direito a revisões conforme acordado no briefing. Se ainda assim não ficar satisfeito, você pode solicitar mediação da plataforma antes de aprovar o pagamento. Seu investimento está protegido.",
      },
    },
    {
      "@type": "Question",
      name: "Posso contratar o mesmo creator várias vezes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim! Você pode criar parcerias recorrentes com creators que funcionaram bem. Muitas empresas mantêm creators fixos para conteúdo mensal, mantendo a consistência da comunicação.",
      },
    },
    {
      "@type": "Question",
      name: "A plataforma funciona em quais cidades?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Estamos presentes nas principais capitais e regiões metropolitanas do Brasil. São Paulo, Rio de Janeiro, Belo Horizonte, Curitiba, Porto Alegre, Salvador, Recife, Fortaleza e Brasília têm grande concentração de creators.",
      },
    },
  ],
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
