// ─── CONFIGURAÇÃO DO SITE ───────────────────────────────────────────────────
// Este é o único arquivo que você precisa editar antes do deploy.
// Todas as URLs, links de CTA e redes sociais saem daqui.

export const siteConfig = {
  // ── Domínio ──────────────────────────────────────────────────────────────
  // Troque pelo domínio real antes do deploy.
  url: "https://ugclocal.com.br",

  // ── Identidade ───────────────────────────────────────────────────────────
  name: "UGC Local",
  tagline: "Encontre Creators da Sua Região",
  description:
    "Descubra creators próximos ao seu negócio no mapa interativo. Contrate para conteúdo presencial ou digital de forma organizada e profissional. 2.500+ creators ativos.",

  // ── Redes sociais ────────────────────────────────────────────────────────
  // Troque pelos perfis reais.
  social: {
    instagram: "https://instagram.com/ugc.local",
    linkedin: "https://linkedin.com/company/ugclocal",
    twitter: "https://twitter.com/ugclocal",
  },

  // ── Links de CTA ─────────────────────────────────────────────────────────
  // Troque pelas URLs reais de cadastro/app assim que estiverem disponíveis.
  links: {
    // Cadastro de empresa (CTA principal — "Começar agora", "Para empresas")
    empresas: "#",
    // Cadastro de creator ("Sou creator")
    creators: "#",
    // Demo agendada ("Ver demonstração", "Agendar demonstração")
    demo: "#",
    // Suporte ("Falar com suporte")
    suporte: "#",
  },

  // ── Links do footer ──────────────────────────────────────────────────────
  // Troque pelos paths reais quando as páginas existirem.
  footerLinks: {
    plataforma: [
      { label: "Como funciona", href: "#descoberta" },
      { label: "Mapa de creators", href: "#" },
      { label: "Marketplace", href: "#" },
      { label: "Preços", href: "#" },
      { label: "Casos de sucesso", href: "#" },
    ],
    creators: [
      { label: "Cadastrar-se", href: "#" },
      { label: "Como ganhar dinheiro", href: "#" },
      { label: "Guia do creator", href: "#" },
      { label: "Comunidade", href: "#" },
      { label: "Blog", href: "#" },
    ],
    empresa: [
      { label: "Sobre nós", href: "#" },
      { label: "Carreiras", href: "#" },
      { label: "Contato", href: "#" },
      { label: "Termos de uso", href: "#" },
      { label: "Privacidade", href: "#" },
    ],
  },
} as const;
