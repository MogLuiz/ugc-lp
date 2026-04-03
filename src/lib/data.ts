export const faqs = [
  {
    question: "Como funciona a plataforma UGC Local?",
    answer:
      "Busque creators da sua região pelo mapa ou marketplace, veja perfis verificados com portfólio e avaliações, envie uma proposta e alinhe o briefing. O conteúdo é entregue e gerenciado dentro da plataforma, do início ao pagamento.",
  },
  {
    question: "Qual a diferença entre conteúdo presencial e digital?",
    answer:
      "Presencial: o creator vai até o seu negócio para gravar (restaurante, loja, academia). Digital: o creator produz remotamente, como análise de produtos enviados ou conteúdo sobre a sua marca sem necessidade de visita.",
  },
  {
    question: "Como sei se o creator é confiável?",
    answer:
      "Todos os creators passam por verificação de identidade. Na plataforma você vê avaliações reais de outras empresas, portfólio completo e histórico de entregas antes de fechar qualquer contratação.",
  },
  {
    question: "Quanto custa contratar um creator?",
    answer:
      "Os valores variam por tipo de conteúdo e perfil do creator — geralmente entre R$ 250 e R$ 800 por entrega. Você vê o preço antes de contratar. Não há mensalidade: você paga apenas pelo que usar.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "Você paga pela plataforma e o valor fica retido até você aprovar o conteúdo. Só então o repasse é feito ao creator. Aceitamos cartão de crédito, boleto e PIX.",
  },
  {
    question: "E se eu não gostar do conteúdo?",
    answer:
      "Todo projeto inclui rodadas de revisão conforme o briefing. Se necessário, você pode abrir uma mediação com a plataforma antes de liberar o pagamento. O valor só é repassado com a sua aprovação.",
  },
  {
    question: "Posso contratar o mesmo creator várias vezes?",
    answer:
      "Sim. Você pode fixar creators para contratações recorrentes — útil para manter frequência e consistência de conteúdo ao longo do mês.",
  },
  {
    question: "A plataforma funciona em quais cidades?",
    answer:
      "Estamos em Belo Horizonte e região metropolitana, com a possibilidade de expandir para outras cidades em breve.",
  },
];

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};
