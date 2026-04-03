"use client";

import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/lib/config";
import { faqs } from "@/lib/data";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-10 lg:py-20 bg-gradient-to-br from-accent/20 via-white to-accent/30"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-primary/10 shadow-sm mb-3">
            <span className="text-sm text-primary font-medium">
              Perguntas frequentes
            </span>
          </div>
          <h2 className="text-[2rem] lg:text-5xl font-bold text-foreground mb-3 leading-tight">
            Dúvidas sobre a <span className="text-primary">plataforma</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Tudo que você precisa saber para começar a contratar creators locais
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border-2 border-border hover:border-primary/30 transition-all overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-4 lg:p-6 flex items-center justify-between gap-4 text-left hover:bg-accent/30 transition-colors"
                aria-expanded={index === openIndex}
              >
                <span className="font-semibold text-foreground text-[0.925rem] lg:text-lg pr-4">
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

              {index === openIndex && (
                <div className="px-4 pb-4 lg:px-6 lg:pb-6 animate-in slide-in-from-top-2 duration-200">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 lg:p-8 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-2xl border border-primary/20 text-center">
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
