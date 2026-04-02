"use client";

import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Como funciona a plataforma UGC Local?",
    answer: "Você busca creators da sua região usando o mapa interativo ou marketplace com filtros. Vê perfis verificados com portfólio e avaliações, envia proposta de trabalho, alinha briefing e recebe o conteúdo. Tudo gerenciado dentro da plataforma de forma organizada e segura.",
  },
  {
    question: "Qual a diferença entre conteúdo presencial e digital?",
    answer: "Conteúdo presencial é quando o creator vai até o seu estabelecimento para gravar (restaurante, loja, academia). Conteúdo digital é quando o creator cria o material remotamente, como análise de produtos que você envia ou conteúdo sobre sua marca sem necessidade de visita.",
  },
  {
    question: "Como sei se o creator é confiável?",
    answer: "Todos os creators passam por verificação de identidade e perfil. Você pode ver avaliações reais de outras empresas, portfólio completo, taxa de entrega no prazo e histórico de trabalhos anteriores na plataforma.",
  },
  {
    question: "Quanto custa contratar um creator?",
    answer: "Os valores variam de acordo com o tipo de conteúdo, alcance do creator e complexidade do projeto. Geralmente entre R$ 250 e R$ 800 por conteúdo. Você vê o preço antes de contratar e não paga taxas mensais, apenas pelo que usar.",
  },
  {
    question: "Como funciona o pagamento?",
    answer: "O pagamento é feito pela plataforma de forma segura. Você paga apenas após receber e aprovar o conteúdo. Aceitamos cartão de crédito, boleto e PIX. A plataforma retém o valor e só repassa ao creator após sua aprovação.",
  },
  {
    question: "E se eu não gostar do conteúdo?",
    answer: "Todo projeto tem direito a revisões conforme acordado no briefing. Se ainda assim não ficar satisfeito, você pode solicitar mediação da plataforma antes de aprovar o pagamento. Seu investimento está protegido.",
  },
  {
    question: "Posso contratar o mesmo creator várias vezes?",
    answer: "Sim! Você pode criar parcerias recorrentes com creators que funcionaram bem. Muitas empresas mantêm creators fixos para conteúdo mensal, mantendo a consistência da comunicação.",
  },
  {
    question: "A plataforma funciona em quais cidades?",
    answer: "Estamos presentes nas principais capitais e regiões metropolitanas do Brasil. São Paulo, Rio de Janeiro, Belo Horizonte, Curitiba, Porto Alegre, Salvador, Recife, Fortaleza e Brasília têm grande concentração de creators.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-gradient-to-br from-accent/20 via-white to-accent/30">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-primary/10 shadow-sm mb-6">
            <span className="text-sm text-primary font-medium">Perguntas frequentes</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
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
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-foreground text-lg pr-4">{faq.question}</span>
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 text-primary" strokeWidth={2.5} />
                  ) : (
                    <Plus className="w-4 h-4 text-primary" strokeWidth={2.5} />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 animate-in slide-in-from-top-2 duration-200">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-2xl border border-primary/20 text-center">
          <h3 className="text-xl font-bold text-foreground mb-3">Ainda tem dúvidas?</h3>
          <p className="text-muted-foreground mb-6">Nossa equipe está pronta para ajudar você a começar</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors font-semibold">
              Falar com suporte
            </button>
            <button className="px-6 py-3 bg-white border border-border text-foreground rounded-xl hover:border-primary/30 hover:bg-accent transition-colors font-semibold">
              Agendar demonstração
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
