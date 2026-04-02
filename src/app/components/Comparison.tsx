import { X, Check } from "lucide-react";

export function Comparison() {
  const comparisons = [
    {
      feature: "Encontrar creators qualificados",
      traditional: "Buscar manualmente no Instagram",
      platform: "Buscar no mapa e marketplace"
    },
    {
      feature: "Negociação de valores",
      traditional: "DM, sem padrão de preço",
      platform: "Propostas com valores definidos"
    },
    {
      feature: "Validação de credibilidade",
      traditional: "Checar perfil manualmente",
      platform: "Avaliações e creators verificados"
    },
    {
      feature: "Gestão do projeto",
      traditional: "WhatsApp, email, planilhas",
      platform: "Dashboard com prazos e entregas"
    },
    {
      feature: "Pagamento",
      traditional: "PIX, transferência sem garantia",
      platform: "Pagamento seguro pela plataforma"
    },
    {
      feature: "Histórico de trabalhos",
      traditional: "Sem registro centralizado",
      platform: "Biblioteca de todos os conteúdos"
    }
  ];

  return (
    <section className="py-32 lg:py-48 bg-gradient-to-b from-white via-[#fafbfc] to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header - More Editorial */}
        <div className="max-w-4xl mx-auto text-center mb-24 lg:mb-32">
          <div className="inline-flex items-center gap-2.5 px-6 py-2.5 bg-white backdrop-blur-sm rounded-full border border-primary/20 shadow-sm shadow-primary/5 mb-10">
            <span className="text-sm text-primary font-bold tracking-tight">
              Por que UGC Local?
            </span>
          </div>
          <h2 className="text-[2.75rem] lg:text-[3.75rem] font-bold text-foreground mb-7 leading-[1.05] tracking-[-0.02em]">
            Mais simples que buscar <span className="text-primary">no direct</span>
          </h2>
          <p className="text-[1.1rem] lg:text-[1.3rem] text-muted-foreground leading-[1.7] max-w-2xl mx-auto">
            Compare o processo tradicional de contratar creators com a experiência organizada da plataforma
          </p>
        </div>

        {/* Comparison Table - More Premium */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-[1.75rem] border border-border/50 shadow-2xl shadow-black/5 overflow-hidden">
            {/* Header - More Refined */}
            <div className="grid md:grid-cols-3 gap-8 p-8 lg:p-10 bg-gradient-to-br from-[#fafbfc] via-white to-[#f5f6f8] border-b border-border/50">
              <div className="hidden md:block" />
              <div className="text-center space-y-3">
                <div className="text-xs font-black text-muted-foreground/60 uppercase tracking-widest">Forma tradicional</div>
                <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white border border-border/60 rounded-xl shadow-sm">
                  <X className="w-4 h-4 text-red-500" strokeWidth={2.5} />
                  <span className="text-sm font-bold text-foreground/80">Sem plataforma</span>
                </div>
              </div>
              <div className="text-center space-y-3">
                <div className="text-xs font-black text-primary/60 uppercase tracking-widest">UGC Local</div>
                <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-gradient-to-r from-primary to-[#8B5CF6] text-white rounded-xl shadow-lg shadow-primary/30">
                  <Check className="w-4 h-4" strokeWidth={2.5} />
                  <span className="text-sm font-bold">Plataforma completa</span>
                </div>
              </div>
            </div>

            {/* Comparison Rows - More Refined */}
            <div className="divide-y divide-border/40">
              {comparisons.map((item, index) => (
                <div 
                  key={index} 
                  className={`grid md:grid-cols-3 gap-8 p-7 lg:p-9 hover:bg-gradient-to-r hover:from-accent/20 hover:to-transparent transition-all duration-300 ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gradient-to-r from-[#fafbfc] to-white'
                  }`}
                >
                  {/* Feature Name */}
                  <div className="md:flex items-center">
                    <h3 className="font-bold text-foreground text-[1.0625rem] mb-5 md:mb-0 tracking-tight">
                      {item.feature}
                    </h3>
                  </div>
                  
                  {/* Traditional Approach */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-4 h-4 text-red-500" strokeWidth={2.5} />
                    </div>
                    <p className="text-[0.9rem] text-muted-foreground leading-[1.7] pt-0.5">
                      {item.traditional}
                    </p>
                  </div>
                  
                  {/* Platform Solution */}
                  <div className="flex items-start gap-3.5 bg-gradient-to-r from-primary/5 to-transparent -m-2 p-2 rounded-xl md:m-0 md:p-0 md:bg-none">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" strokeWidth={2.5} />
                    </div>
                    <p className="text-[0.9rem] font-semibold text-foreground leading-[1.7] pt-0.5">
                      {item.platform}
                    </p>
                  </div>
                </div>
              ))}</div>
          </div>

          {/* Bottom CTA - Subtle */}
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