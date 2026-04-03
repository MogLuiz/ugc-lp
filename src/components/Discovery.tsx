import { Map, Grid3x3, Tag, MapPin } from "lucide-react";

export function Discovery() {
  return (
    <section
      id="descoberta"
      className="py-12 lg:py-24 bg-gradient-to-b from-white via-[#fafbfc] to-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-8 lg:mb-20">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 bg-white backdrop-blur-sm rounded-full border border-primary/20 shadow-sm shadow-primary/5 mb-4 lg:mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-sm text-primary font-semibold tracking-tight">
              Descoberta inteligente
            </span>
          </div>
          <h2 className="text-[2rem] sm:text-[2.75rem] lg:text-[2.75rem] font-bold text-foreground mb-3 lg:mb-5 leading-[1.05] tracking-[-0.02em]">
            Encontre o creator ideal
            <br />
            de <span className="text-primary">3 formas diferentes</span>
          </h2>
          <p className="text-[1.05rem] lg:text-[1.1rem] text-muted-foreground leading-[1.75] max-w-xl mx-auto">
            A plataforma oferece múltiplas formas de descoberta para você
            encontrar exatamente o que precisa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {/* Card 1 — Mapa regional */}
          <div className="group relative bg-white rounded-[1.75rem] border border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-black/5 flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-5 lg:p-8 flex flex-col flex-1">
              <div className="w-11 h-11 lg:w-14 lg:h-14 rounded-[1.1rem] bg-gradient-to-br from-primary/15 to-primary/8 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-500 shadow-sm shadow-primary/10">
                <Map className="w-5 h-5 lg:w-7 lg:h-7 text-primary" strokeWidth={2.3} />
              </div>
              <h3 className="text-[1.35rem] font-bold text-foreground mb-2.5 tracking-tight leading-tight">
                Mapa regional
              </h3>
              <p className="text-muted-foreground mb-3 lg:mb-5 leading-[1.65] text-[0.925rem]">
                Visualize creators próximos ao seu negócio. Filtre por distância
                e descubra talentos na sua região.
              </p>
              <div className="space-y-2 mb-4 lg:mb-5">
                <div className="flex items-center gap-2.5 text-[0.84rem] font-semibold text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>Busca por localização exata</span>
                </div>
                <div className="flex items-center gap-2.5 text-[0.84rem] font-semibold text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>Raio de busca personalizável</span>
                </div>
                <div className="flex items-center gap-2.5 text-[0.84rem] font-semibold text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>Preview instantâneo no pin</span>
                </div>
              </div>
              {/* Map preview */}
              <div
                className="mt-auto relative h-20 lg:h-32 rounded-2xl overflow-hidden border border-black/5 bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('/images/creators/map-background-thumb.webp')",
                  backgroundSize: "118% 118%",
                }}
              >
                <div className="absolute top-[28%] left-[27%] w-4 h-4 rounded-full bg-primary border-2 border-white shadow-md" />
                <div className="absolute top-[52%] left-[56%] w-3 h-3 rounded-full bg-primary/55 border-2 border-white shadow-sm" />
                <div className="absolute top-[20%] left-[67%] w-3 h-3 rounded-full bg-primary/55 border-2 border-white shadow-sm" />
                <div className="absolute bottom-3 left-3">
                  <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-lg px-2.5 py-1.5 shadow-sm">
                    <MapPin className="w-3 h-3 text-primary" />
                    <span className="text-[0.65rem] font-bold text-foreground/80 tracking-tight">
                      Belo Horizonte, MG
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 — Marketplace */}
          <div className="group relative bg-white rounded-[1.75rem] border border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-black/5 flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-5 lg:p-8 flex flex-col flex-1">
              <div className="w-11 h-11 lg:w-14 lg:h-14 rounded-[1.1rem] bg-gradient-to-br from-primary/15 to-primary/8 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-500 shadow-sm shadow-primary/10">
                <Grid3x3 className="w-5 h-5 lg:w-7 lg:h-7 text-primary" strokeWidth={2.3} />
              </div>
              <h3 className="text-[1.35rem] font-bold text-foreground mb-2.5 tracking-tight leading-tight">
                Marketplace completo
              </h3>
              <p className="text-muted-foreground mb-3 lg:mb-5 leading-[1.65] text-[0.925rem]">
                Navegue por todos os creators com filtros avançados de
                categoria, formato de conteúdo e localização.
              </p>
              <div className="space-y-2 mb-4 lg:mb-5">
                <div className="flex items-center gap-2.5 text-[0.84rem] font-semibold text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>Filtros por categoria e nicho</span>
                </div>
                <div className="flex items-center gap-2.5 text-[0.84rem] font-semibold text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>Formato de conteúdo</span>
                </div>
                <div className="flex items-center gap-2.5 text-[0.84rem] font-semibold text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>Portfólio visual completo</span>
                </div>
              </div>
              {/* Marketplace preview */}
              <div className="mt-auto h-20 lg:h-32 rounded-2xl bg-gradient-to-br from-[#fafbfc] to-[#f3f4f6] border border-border/40 p-3.5 flex flex-col gap-3 overflow-hidden">
                <div className="flex gap-1.5">
                  <div className="px-2.5 py-1 bg-primary text-white rounded-lg text-[0.68rem] font-bold shadow-sm">
                    Food
                  </div>
                  <div className="px-2.5 py-1 bg-white border border-border/60 text-foreground/60 rounded-lg text-[0.68rem] font-bold">
                    Tech
                  </div>
                  <div className="px-2.5 py-1 bg-white border border-border/60 text-foreground/60 rounded-lg text-[0.68rem] font-bold">
                    Moda
                  </div>
                  <div className="px-2.5 py-1 bg-white border border-border/60 text-foreground/55 rounded-lg text-[0.68rem] font-bold">
                    +9
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 bg-white rounded-xl border border-border/50 px-3 py-2.5 shadow-sm">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary/35 to-primary/15 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="h-2 bg-foreground/12 rounded-full w-20 mb-1.5" />
                      <div className="h-1.5 bg-foreground/7 rounded-full w-14" />
                    </div>
                    <div className="px-2 py-0.5 bg-primary/10 rounded-md flex-shrink-0">
                      <span className="text-[0.6rem] font-bold text-primary">
                        Food
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white rounded-xl border border-border/40 px-3 py-2.5 opacity-55">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary/20 to-primary/8 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="h-2 bg-foreground/10 rounded-full w-16 mb-1.5" />
                      <div className="h-1.5 bg-foreground/6 rounded-full w-12" />
                    </div>
                    <div className="px-2 py-0.5 bg-foreground/6 rounded-md flex-shrink-0">
                      <span className="text-[0.6rem] font-bold text-foreground/35">
                        Tech
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 — Categoria */}
          <div className="group relative bg-white rounded-[1.75rem] border border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-black/5 flex flex-col md:col-span-2 lg:col-span-1">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-5 lg:p-8 flex flex-col flex-1">
              <div className="w-11 h-11 lg:w-14 lg:h-14 rounded-[1.1rem] bg-gradient-to-br from-primary/15 to-primary/8 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-500 shadow-sm shadow-primary/10">
                <Tag className="w-5 h-5 lg:w-7 lg:h-7 text-primary" strokeWidth={2.3} />
              </div>
              <h3 className="text-[1.35rem] font-bold text-foreground mb-2.5 tracking-tight leading-tight">
                Busca por categoria
              </h3>
              <p className="text-muted-foreground mb-3 lg:mb-5 leading-[1.65] text-[0.925rem]">
                Explore creators organizados por nicho de mercado. De food a
                tech, encontre especialistas no seu segmento.
              </p>
              <div className="space-y-2 mb-4 lg:mb-5">
                <div className="flex items-center gap-2.5 text-[0.84rem] font-semibold text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>15+ categorias especializadas</span>
                </div>
                <div className="flex items-center gap-2.5 text-[0.84rem] font-semibold text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>Busca por palavras-chave</span>
                </div>
                <div className="flex items-center gap-2.5 text-[0.84rem] font-semibold text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>Ordenação inteligente</span>
                </div>
              </div>
              {/* Category preview */}
              <div className="mt-auto h-20 lg:h-32 flex flex-col gap-2">
                <div className="flex-1 px-4 bg-gradient-to-r from-primary/8 to-primary/4 rounded-xl border border-primary/20 flex items-center justify-between group-hover:border-primary/30 transition-colors">
                  <span className="text-[0.82rem] font-bold text-foreground">
                    Food & Lifestyle
                  </span>
                  <span className="text-[0.67rem] font-black text-primary bg-white px-2 py-0.5 rounded-lg shadow-sm">
                    487
                  </span>
                </div>
                <div className="flex-1 px-4 bg-white rounded-xl border border-border/50 flex items-center justify-between opacity-65">
                  <span className="text-[0.82rem] font-bold text-foreground">
                    Fashion & Beauty
                  </span>
                  <span className="text-[0.67rem] font-bold text-muted-foreground bg-accent/60 px-2 py-0.5 rounded-lg">
                    352
                  </span>
                </div>
                <div className="flex-1 px-4 bg-white rounded-xl border border-border/50 flex items-center justify-between opacity-40">
                  <span className="text-[0.82rem] font-bold text-foreground">
                    Tech & Gadgets
                  </span>
                  <span className="text-[0.67rem] font-bold text-muted-foreground bg-accent/60 px-2 py-0.5 rounded-lg">
                    298
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
