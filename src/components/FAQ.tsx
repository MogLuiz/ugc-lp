"use client";

import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/lib/config";

const faqs = [
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

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-24 lg:py-20 bg-gradient-to-br from-accent/20 via-white to-accent/30"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-primary/10 shadow-sm mb-4">
            <span className="text-sm text-primary font-medium">
              Perguntas frequentes
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
            Dúvidas sobre a <span className="text-primary">plataforma</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Tudo que você precisa saber para começar a contratar creators locais
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border-2 border-border hover:border-primary/30 transition-all overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between gap-4 text-left hover:bg-accent/30 transition-colors"
                aria-expanded={true}
              >
                <span className="font-semibold text-foreground text-lg pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 text-primary" strokeWidth={2.5} />
                  ) : (
                    <Plus className="w-4 h-4 text-primary" strokeWidth={2.5} />
                  )}
                </div>
              </button>

              {true && (
                <div className="px-6 pb-6 animate-in slide-in-from-top-2 duration-200">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-2xl border border-primary/20 text-center">
          <h3 className="text-xl font-bold text-foreground mb-3">
            Ainda tem dúvidas?
          </h3>
          <p className="text-muted-foreground mb-6">
            Nossa equipe está pronta para ajudar você a começar
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={siteConfig.links.suporte}
              className="px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors font-semibold text-center"
            >
              Falar com suporte
            </a>
            <a
              href={siteConfig.links.demo}
              className="px-6 py-3 bg-white border border-border text-foreground rounded-xl hover:border-primary/30 hover:bg-accent transition-colors font-semibold text-center"
            >
              Agendar demonstração
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
