import { MapPin, Calendar, Users, Clock, Sparkles } from "lucide-react";

export function LocalCreators() {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-white via-[#fafbfc] to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(107,70,193,0.03),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-10 lg:space-y-8">
            <div className="inline-flex items-center gap-2.5 px-5 py-2 bg-white rounded-full border border-primary/20 shadow-sm shadow-primary/5">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-sm text-primary font-semibold tracking-tight">Creators presenciais</span>
            </div>

            <div className="space-y-5">
              <h2 className="text-[2.75rem] lg:text-[2.75rem] font-bold text-foreground leading-[1.05] tracking-[-0.02em]">
                Creators locais vão<br className="hidden lg:block" /> até o seu <span className="text-primary">negócio</span>
              </h2>
              <p className="text-[1.05rem] lg:text-[1.1rem] text-muted-foreground leading-[1.75] max-w-[30rem]">
                Contrate creators da sua região para gravar conteúdo presencial com mais agilidade, contexto local e menos fricção operacional.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 lg:p-5 bg-white rounded-2xl border border-border/50 shadow-sm hover:shadow-md hover:border-primary/25 transition-all duration-300 group">
                <div className="w-11 h-11 rounded-[0.875rem] bg-primary/8 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/12 transition-colors">
                  <MapPin className="w-5 h-5 text-primary" strokeWidth={2.3} />
                </div>
                <div className="space-y-1 pt-0.5">
                  <h3 className="font-semibold text-foreground text-[0.975rem] tracking-tight">Proximidade real</h3>
                  <p className="text-[0.875rem] text-muted-foreground leading-[1.65]">
                    Creators da sua região chegam mais rápido e entendem melhor o contexto do seu negócio.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 lg:p-5 bg-white rounded-2xl border border-border/50 shadow-sm hover:shadow-md hover:border-primary/25 transition-all duration-300 group">
                <div className="w-11 h-11 rounded-[0.875rem] bg-primary/8 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/12 transition-colors">
                  <Calendar className="w-5 h-5 text-primary" strokeWidth={2.3} />
                </div>
                <div className="space-y-1 pt-0.5">
                  <h3 className="font-semibold text-foreground text-[0.975rem] tracking-tight">Agendamento simples</h3>
                  <p className="text-[0.875rem] text-muted-foreground leading-[1.65]">
                    Defina data, horário e formato do conteúdo com uma operação mais prática e organizada.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 lg:p-5 bg-white rounded-2xl border border-border/50 shadow-sm hover:shadow-md hover:border-primary/25 transition-all duration-300 group">
                <div className="w-11 h-11 rounded-[0.875rem] bg-primary/8 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/12 transition-colors">
                  <Sparkles className="w-5 h-5 text-primary" strokeWidth={2.3} />
                </div>
                <div className="space-y-1 pt-0.5">
                  <h3 className="font-semibold text-foreground text-[0.975rem] tracking-tight">Conteúdo mais autêntico</h3>
                  <p className="text-[0.875rem] text-muted-foreground leading-[1.65]">
                    Gravações feitas por quem conhece a cidade, o público e a dinâmica local.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            <div className="relative bg-white rounded-[1.75rem] border border-border/60 shadow-2xl shadow-black/5 overflow-hidden">
              <div className="bg-gradient-to-br from-primary via-primary to-[#8B5CF6] px-5 py-5 lg:px-7 lg:py-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-xs font-medium opacity-75 mb-1 tracking-wide uppercase">Creators na sua região</div>
                    <div className="text-3xl font-black tracking-tight">43 disponíveis</div>
                  </div>
                  <div className="w-12 h-12 rounded-[1rem] bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <Users className="w-6 h-6" strokeWidth={2.3} />
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[0.7rem] font-semibold border border-white/15 tracking-wide">Em até 2km</div>
                  <div className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[0.7rem] font-semibold border border-white/15 tracking-wide">Hoje e amanhã</div>
                </div>
              </div>

              <div className="p-5 lg:p-6 space-y-3 bg-gradient-to-b from-white to-[#fafbfc]">
                {[
                  { name: "Marina Santos", distance: "900m", time: "Disponível agora", specialty: "Food & Restaurantes", available: true },
                  { name: "Lucas Oliveira", distance: "1.2km", time: "Hoje, 14h–18h", specialty: "Varejo & Moda", available: true },
                  { name: "Beatriz Lima", distance: "1.8km", time: "Disponível amanhã", specialty: "Beleza & Bem-estar", available: false },
                ].map((creator, i) => (
                  <div key={i} className="p-4 border border-border/50 rounded-xl hover:border-primary/30 hover:bg-white hover:shadow-sm transition-all duration-200 cursor-pointer group">
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/15 to-purple-500/15 flex items-center justify-center ring-1 ring-primary/10 group-hover:ring-primary/20 transition-all flex-shrink-0">
                        <span className="text-xs font-black text-primary">
                          {creator.name.split(" ").map((n) => n[0]).join("")}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-[0.9rem] text-foreground leading-tight">{creator.name}</div>
                        <div className="text-[0.75rem] text-muted-foreground mt-0.5">{creator.specialty}</div>
                      </div>
                      <div className="flex items-center gap-1 text-[0.7rem] font-semibold text-primary bg-primary/8 px-2 py-1 rounded-md flex-shrink-0">
                        <MapPin className="w-2.5 h-2.5" strokeWidth={2.5} />
                        {creator.distance}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-[0.75rem] text-muted-foreground">
                        <Clock className="w-3 h-3" strokeWidth={2.5} />
                        {creator.time}
                      </div>
                      <button className="text-[0.75rem] px-3.5 py-1.5 bg-accent/60 group-hover:bg-primary group-hover:text-white rounded-lg transition-all font-semibold">
                        Agendar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -top-4 right-0 sm:-right-4 bg-white rounded-2xl shadow-xl shadow-black/8 border border-border/40 px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-sm shadow-green-500/60" />
                <span className="text-xs font-semibold text-foreground">Atualizado em tempo real</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
