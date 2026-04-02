import { X, Check } from "lucide-react";

const comparisons = [
  {
    feature: "Encontrar creators qualificados",
    traditional: "Buscar manualmente no Instagram",
    platform: "Buscar no mapa e marketplace",
  },
  {
    feature: "Negociação de valores",
    traditional: "DM, sem padrão de preço",
    platform: "Propostas com valores definidos",
  },
  {
    feature: "Validação de credibilidade",
    traditional: "Checar perfil manualmente",
    platform: "Avaliações e creators verificados",
  },
  {
    feature: "Gestão do projeto",
    traditional: "WhatsApp, email, planilhas",
    platform: "Dashboard com prazos e entregas",
  },
  {
    feature: "Pagamento",
    traditional: "PIX, transferência sem garantia",
    platform: "Pagamento seguro pela plataforma",
  },
  {
    feature: "Histórico de trabalhos",
    traditional: "Sem registro centralizado",
    platform: "Biblioteca de todos os conteúdos",
  },
];

export function Comparison() {
  return (
    <section className="py-32 lg:py-24 bg-gradient-to-b from-white via-[#fafbfc] to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-24 lg:mb-20">
          <div className="inline-flex items-center gap-2.5 px-6 py-2.5 bg-white backdrop-blur-sm rounded-full border border-primary/20 shadow-sm shadow-primary/5 mb-6">
            <span className="text-sm text-primary font-bold tracking-tight">Por que UGC Local?</span>
          </div>
          <h2 className="text-[2.75rem] lg:text-[2.75rem] font-bold text-foreground mb-5 leading-[1.05] tracking-[-0.02em]">
            Mais simples que buscar <span className="text-primary">no direct</span>
          </h2>
          <p className="text-[1.1rem] lg:text-[1.3rem] text-muted-foreground leading-[1.7] max-w-2xl mx-auto">
            Compare o processo tradicional de contratar creators com a experiência organizada da plataforma
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-[1.75rem] border border-border/50 shadow-2xl shadow-black/5 overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 p-5 md:p-8 lg:p-10 bg-gradient-to-br from-[#fafbfc] via-white to-[#f5f6f8] border-b border-border/50">
              <div className="hidden md:block" />
              <div className="text-center space-y-2 md:space-y-3">
                <div className="text-[0.65rem] md:text-xs font-black text-muted-foreground/60 uppercase tracking-widest">Forma tradicional</div>
                <div className="inline-flex items-center gap-1.5 md:gap-2.5 px-3 md:px-5 py-2 md:py-2.5 bg-white border border-border/60 rounded-xl shadow-sm">
                  <X className="w-3.5 md:w-4 h-3.5 md:h-4 text-red-500" strokeWidth={2.5} />
                  <span className="text-xs md:text-sm font-bold text-foreground/80">Sem plataforma</span>
                </div>
              </div>
              <div className="text-center space-y-2 md:space-y-3">
                <div className="text-[0.65rem] md:text-xs font-black text-primary/60 uppercase tracking-widest">UGC Local</div>
                <div className="inline-flex items-center gap-1.5 md:gap-2.5 px-3 md:px-5 py-2 md:py-2.5 bg-gradient-to-r from-primary to-[#8B5CF6] text-white rounded-xl shadow-lg shadow-primary/30">
                  <Check className="w-3.5 md:w-4 h-3.5 md:h-4" strokeWidth={2.5} />
                  <span className="text-xs md:text-sm font-bold">Plataforma completa</span>
                </div>
              </div>
            </div>

            <div className="divide-y divide-border/40">
              {comparisons.map((item, index) => (
                <div
                  key={index}
                  className={`p-5 md:p-0 hover:bg-gradient-to-r hover:from-accent/20 hover:to-transparent transition-all duration-300 ${
                    index % 2 === 0 ? "bg-white" : "bg-gradient-to-r from-[#fafbfc] to-white"
                  }`}
                >
                  {/* Feature name — visible on all breakpoints */}
                  <h3 className="font-bold text-foreground text-[0.9375rem] md:text-[1.0625rem] px-0 md:px-7 lg:px-8 py-0 md:py-7 lg:py-6 tracking-tight border-b md:border-b-0 border-border/30 pb-3 mb-3 md:pb-0 md:mb-0">
                    {item.feature}
                  </h3>
                  {/* Mobile: side-by-side comparison */}
                  <div className="grid grid-cols-2 gap-3 md:hidden px-0 pt-1">
                    <div className="flex items-start gap-2.5 p-3 bg-red-50/40 rounded-xl border border-red-100/60">
                      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-3 h-3 text-red-500" strokeWidth={2.5} />
                      </div>
                      <p className="text-[0.8rem] text-muted-foreground leading-[1.6]">{item.traditional}</p>
                    </div>
                    <div className="flex items-start gap-2.5 p-3 bg-primary/5 rounded-xl border border-primary/15">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" strokeWidth={2.5} />
                      </div>
                      <p className="text-[0.8rem] font-semibold text-foreground leading-[1.6]">{item.platform}</p>
                    </div>
                  </div>
                  {/* Desktop: 3-column grid (inner) */}
                  <div className="hidden md:grid md:grid-cols-2 gap-8 px-7 lg:px-8 py-7 lg:py-6">
                    <div className="flex items-start gap-3.5">
                      <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-4 h-4 text-red-500" strokeWidth={2.5} />
                      </div>
                      <p className="text-[0.9rem] text-muted-foreground leading-[1.7] pt-0.5">{item.traditional}</p>
                    </div>
                    <div className="flex items-start gap-3.5">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-primary" strokeWidth={2.5} />
                      </div>
                      <p className="text-[0.9rem] font-semibold text-foreground leading-[1.7] pt-0.5">{item.platform}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground font-medium">
              Deixe a plataforma organizar todo o processo para você
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
