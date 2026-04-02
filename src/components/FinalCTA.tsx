import { ArrowRight, Sparkles, MapPin, Users } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-32 lg:py-44 bg-gradient-to-b from-white via-accent/20 to-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/6 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="relative bg-gradient-to-br from-primary via-[#7C3AED] to-[#8B5CF6] rounded-[2rem] p-12 lg:p-20 text-white overflow-hidden shadow-2xl shadow-primary/20">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white rounded-full blur-3xl" />
          </div>

          <div className="relative">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/20 backdrop-blur-md rounded-full border border-white/30 mb-10">
              <Sparkles className="w-4 h-4" strokeWidth={2.5} />
              <span className="text-sm font-semibold tracking-tight">Comece hoje mesmo</span>
            </div>

            <div className="max-w-3xl">
              <h2 className="text-[2.75rem] lg:text-[3.75rem] xl:text-[4.5rem] font-bold mb-7 leading-[1.05] tracking-tight">
                Encontre creators locais e comece a criar conteúdo
              </h2>

              <p className="text-xl lg:text-[1.375rem] text-white/95 mb-12 leading-[1.6]">
                Descubra creators da sua região no mapa, contrate para conteúdo presencial ou digital e gerencie tudo em uma plataforma profissional.
              </p>

              <div className="grid sm:grid-cols-3 gap-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="font-bold text-[1.0625rem] mb-1.5">Mapa interativo</div>
                    <div className="text-sm text-white/85 leading-relaxed">Visualize creators próximos</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="font-bold text-[1.0625rem] mb-1.5">2.500+ creators</div>
                    <div className="text-sm text-white/85 leading-relaxed">Todos verificados</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="font-bold text-[1.0625rem] mb-1.5">Gestão completa</div>
                    <div className="text-sm text-white/85 leading-relaxed">Do briefing à entrega</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="group px-10 py-4 bg-white text-primary rounded-xl hover:bg-white/95 transition-all shadow-2xl hover:shadow-white/30 hover:scale-105 flex items-center justify-center gap-2.5 font-bold text-[1.0625rem]">
                  <span>Começar agora</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                </button>
                <button className="px-10 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-xl hover:bg-white/20 hover:border-white/40 transition-all flex items-center justify-center gap-2 font-bold text-[1.0625rem]">
                  <span>Ver demonstração</span>
                </button>
              </div>

              <div className="pt-10 border-t border-white/20 flex flex-wrap items-center gap-x-10 gap-y-5 text-sm font-medium text-white/90">
                {["Cadastro gratuito", "Sem mensalidades", "Pagamento seguro"].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
