import { MapPin, Calendar, Users, Clock, Sparkles } from "lucide-react";

export function LocalCreators() {
  return (
    <section className="py-32 lg:py-48 bg-gradient-to-b from-white via-[#fafbfc] to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(107,70,193,0.03),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Content */}
          <div className="space-y-12">
            <div className="inline-flex items-center gap-2.5 px-6 py-2.5 bg-white rounded-full border border-primary/20 shadow-sm shadow-primary/5">
              <span className="text-sm text-primary font-bold tracking-tight">Creators presenciais</span>
            </div>

            <div className="space-y-7">
              <h2 className="text-[2.75rem] lg:text-[3.75rem] font-bold text-foreground leading-[1.05] tracking-[-0.02em]">
                Creators locais vão até o seu <span className="text-primary">estabelecimento</span>
              </h2>
              <p className="text-[1.1rem] lg:text-[1.3rem] text-muted-foreground leading-[1.7] max-w-xl">
                Contrate creators da sua região para gravarem conteúdo diretamente no seu negócio. Eles conhecem a cidade, chegam rápido e entendem o contexto local.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-5 p-7 lg:p-8 bg-white rounded-[1.5rem] border border-border/50 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 group">
                <div className="w-[3.75rem] h-[3.75rem] rounded-[1.125rem] bg-gradient-to-br from-primary/15 to-primary/8 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-sm shadow-primary/10">
                  <MapPin className="w-7 h-7 text-primary" strokeWidth={2.3} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-foreground text-[1.125rem] tracking-tight">Proximidade geográfica</h3>
                  <p className="text-[0.9rem] text-muted-foreground leading-[1.7]">
                    Creators da sua região chegam rápido, conhecem o bairro e podem gravar com frequência sem complicação logística.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-7 lg:p-8 bg-gradient-to-br from-white to-accent/30 rounded-[1.5rem] border border-primary/20 shadow-sm hover:shadow-lg hover:border-primary/40 transition-all duration-300 group">
                <div className="w-[3.75rem] h-[3.75rem] rounded-[1.125rem] bg-gradient-to-br from-primary/15 to-primary/8 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-sm shadow-primary/10">
                  <Calendar className="w-7 h-7 text-primary" strokeWidth={2.3} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-foreground text-[1.125rem] tracking-tight">Agendamento flexível</h3>
                  <p className="text-[0.9rem] text-muted-foreground leading-[1.7]">
                    Agende visitas presenciais direto pela plataforma. Defina data, horário e formato de conteúdo que você precisa.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-7 lg:p-8 bg-white rounded-[1.5rem] border border-border/50 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 group">
                <div className="w-[3.75rem] h-[3.75rem] rounded-[1.125rem] bg-gradient-to-br from-primary/15 to-primary/8 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-sm shadow-primary/10">
                  <Sparkles className="w-7 h-7 text-primary" strokeWidth={2.3} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-foreground text-[1.125rem] tracking-tight">Autenticidade local</h3>
                  <p className="text-[0.9rem] text-muted-foreground leading-[1.7]">
                    Conteúdo criado por quem vive na sua região. Mais autêntico, relevante e conectado com o público local.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            <div className="relative bg-white rounded-[1.75rem] border border-border/60 shadow-2xl shadow-black/5 overflow-hidden">
              <div className="bg-gradient-to-br from-primary via-primary to-[#8B5CF6] p-7 text-white">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-[1.125rem] bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-lg">
                    <Users className="w-7 h-7" strokeWidth={2.3} />
                  </div>
                  <div>
                    <div className="text-sm opacity-90 font-medium mb-1">Creators disponíveis hoje</div>
                    <div className="text-3xl font-black tracking-tight">43</div>
                  </div>
                </div>
                <div className="flex gap-2.5">
                  <div className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold border border-white/20">&lt; 2km</div>
                  <div className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold border border-white/20">Disponíveis hoje</div>
                </div>
              </div>

              <div className="p-7 space-y-4 bg-gradient-to-b from-white to-[#fafbfc]">
                {[
                  { name: "Marina Santos", distance: "900m", time: "Disponível agora", specialty: "Food & Restaurants", available: true },
                  { name: "Lucas Oliveira", distance: "1.2km", time: "Disponível 14h-18h", specialty: "Retail & Fashion", available: true },
                  { name: "Beatriz Lima", distance: "1.8km", time: "Disponível amanhã", specialty: "Wellness & Beauty", available: false },
                ].map((creator, i) => (
                  <div key={i} className="p-5 border border-border/60 rounded-[1.25rem] hover:border-primary/40 hover:bg-white hover:shadow-md transition-all duration-300 cursor-pointer group">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center ring-2 ring-primary/10 group-hover:ring-primary/20 transition-all">
                        <span className="text-sm font-black text-primary">
                          {creator.name.split(" ").map((n) => n[0]).join("")}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-[0.95rem] text-foreground mb-0.5">{creator.name}</div>
                        <div className="text-xs text-muted-foreground font-medium">{creator.specialty}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-bold text-primary flex items-center gap-1.5 bg-primary/8 px-2.5 py-1 rounded-lg">
                          <MapPin className="w-3 h-3" strokeWidth={2.5} />
                          {creator.distance}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
                        <Clock className="w-3.5 h-3.5" strokeWidth={2.5} />
                        {creator.time}
                      </div>
                      <button className="text-xs px-4 py-2 bg-accent/70 group-hover:bg-primary group-hover:text-white rounded-lg transition-all font-bold shadow-sm">
                        Agendar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -top-5 -right-5 bg-white rounded-[1.125rem] shadow-2xl shadow-black/10 border border-border/50 p-5">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/50" />
                <span className="text-sm font-bold text-foreground tracking-tight">Em tempo real</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
