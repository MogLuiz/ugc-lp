import { Map, Grid3x3, Tag, MapPin, Star, TrendingUp } from "lucide-react";

export function Discovery() {
  return (
    <section id="descoberta" className="py-32 lg:py-24 bg-gradient-to-b from-white via-[#fafbfc] to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2.5 px-6 py-2.5 bg-white backdrop-blur-sm rounded-full border border-primary/20 shadow-sm shadow-primary/5 mb-6">
            <span className="text-sm text-primary font-bold tracking-tight">Descoberta inteligente</span>
          </div>
          <h2 className="text-[2.75rem] lg:text-[2.75rem] font-bold text-foreground mb-5 leading-[1.05] tracking-[-0.02em]">
            Encontre o creator ideal<br />de <span className="text-primary">3 formas diferentes</span>
          </h2>
          <p className="text-[1.1rem] lg:text-[1.3rem] text-muted-foreground leading-[1.7] max-w-2xl mx-auto">
            A plataforma oferece múltiplas formas de descoberta para você encontrar exatamente o que precisa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
          {/* Card 1 — Mapa regional */}
          <div className="group relative bg-white rounded-[1.75rem] border border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-black/5 flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-8 flex flex-col flex-1">
              <div className="w-14 h-14 rounded-[1.1rem] bg-gradient-to-br from-primary/15 to-primary/8 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-500 shadow-sm shadow-primary/10">
                <Map className="w-7 h-7 text-primary" strokeWidth={2.3} />
              </div>
              <h3 className="text-[1.35rem] font-bold text-foreground mb-2.5 tracking-tight leading-tight">Mapa regional</h3>
              <p className="text-muted-foreground mb-5 leading-[1.65] text-[0.925rem]">
                Visualize creators próximos ao seu negócio. Filtre por distância e descubra talentos na sua região.
              </p>
              <div className="space-y-2.5 mb-7">
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
              <div className="mt-auto relative h-32 rounded-2xl bg-gradient-to-br from-[#ede9e1] to-[#e4dfd6] overflow-hidden border border-black/5">
                <svg className="absolute inset-0 w-full h-full opacity-25">
                  <line x1="0" y1="36%" x2="100%" y2="36%" stroke="#a8906e" strokeWidth="1.5" />
                  <line x1="0" y1="65%" x2="100%" y2="65%" stroke="#a8906e" strokeWidth="1" />
                  <line x1="32%" y1="0" x2="32%" y2="100%" stroke="#a8906e" strokeWidth="1.5" />
                  <line x1="65%" y1="0" x2="65%" y2="100%" stroke="#a8906e" strokeWidth="1" />
                </svg>
                <div className="absolute top-[28%] left-[27%] w-4 h-4 rounded-full bg-primary border-2 border-white shadow-md" />
                <div className="absolute top-[52%] left-[56%] w-3 h-3 rounded-full bg-primary/55 border-2 border-white shadow-sm" />
                <div className="absolute top-[20%] left-[67%] w-3 h-3 rounded-full bg-primary/55 border-2 border-white shadow-sm" />
                <div className="absolute bottom-3 left-3">
                  <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-lg px-2.5 py-1.5 shadow-sm">
                    <MapPin className="w-3 h-3 text-primary" />
                    <span className="text-[0.65rem] font-bold text-foreground/80 tracking-tight">Pinheiros, SP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 — Marketplace */}
          <div className="group relative bg-white rounded-[1.75rem] border border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-black/5 flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-8 flex flex-col flex-1">
              <div className="w-14 h-14 rounded-[1.1rem] bg-gradient-to-br from-primary/15 to-primary/8 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-500 shadow-sm shadow-primary/10">
                <Grid3x3 className="w-7 h-7 text-primary" strokeWidth={2.3} />
              </div>
              <h3 className="text-[1.35rem] font-bold text-foreground mb-2.5 tracking-tight leading-tight">Marketplace completo</h3>
              <p className="text-muted-foreground mb-5 leading-[1.65] text-[0.925rem]">
                Navegue por todos os creators com filtros avançados de categoria, formato de conteúdo e localização.
              </p>
              <div className="space-y-2.5 mb-7">
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
              <div className="mt-auto h-32 rounded-2xl bg-gradient-to-br from-[#fafbfc] to-[#f3f4f6] border border-border/40 p-4 flex flex-col justify-between">
                <div className="flex gap-1.5 flex-wrap">
                  <div className="px-2.5 py-1 bg-primary text-white rounded-lg text-[0.68rem] font-bold shadow-sm">Food</div>
                  <div className="px-2.5 py-1 bg-white border border-border/60 text-foreground/60 rounded-lg text-[0.68rem] font-bold">Tech</div>
                  <div className="px-2.5 py-1 bg-white border border-border/60 text-foreground/60 rounded-lg text-[0.68rem] font-bold">Moda</div>
                  <div className="px-2.5 py-1 bg-white border border-border/60 text-foreground/55 rounded-lg text-[0.68rem] font-bold">+9</div>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/25 to-primary/15 border border-primary/20 flex items-center justify-center">
                    <Star className="w-3.5 h-3.5 text-primary/60" fill="currentColor" />
                  </div>
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/15 to-primary/8 border border-primary/15 flex items-center justify-center">
                    <TrendingUp className="w-3.5 h-3.5 text-primary/40" />
                  </div>
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/10" />
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-[#f0f0f0] to-[#eaeaea] border border-border/30" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 — Categoria */}
          <div className="group relative bg-white rounded-[1.75rem] border border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-black/5 flex flex-col md:col-span-2 lg:col-span-1">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-8 flex flex-col flex-1">
              <div className="w-14 h-14 rounded-[1.1rem] bg-gradient-to-br from-primary/15 to-primary/8 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-500 shadow-sm shadow-primary/10">
                <Tag className="w-7 h-7 text-primary" strokeWidth={2.3} />
              </div>
              <h3 className="text-[1.35rem] font-bold text-foreground mb-2.5 tracking-tight leading-tight">Busca por categoria</h3>
              <p className="text-muted-foreground mb-5 leading-[1.65] text-[0.925rem]">
                Explore creators organizados por nicho de mercado. De food a tech, encontre especialistas no seu segmento.
              </p>
              <div className="space-y-2.5 mb-7">
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
              <div className="mt-auto h-32 flex flex-col gap-2">
                <div className="flex-1 px-4 bg-gradient-to-r from-primary/8 to-primary/4 rounded-xl border border-primary/20 flex items-center justify-between group-hover:border-primary/30 transition-colors">
                  <span className="text-[0.82rem] font-bold text-foreground">Food & Lifestyle</span>
                  <span className="text-[0.67rem] font-black text-primary bg-white px-2 py-0.5 rounded-lg shadow-sm">487</span>
                </div>
                <div className="flex-1 px-4 bg-white rounded-xl border border-border/50 flex items-center justify-between opacity-65">
                  <span className="text-[0.82rem] font-bold text-foreground">Fashion & Beauty</span>
                  <span className="text-[0.67rem] font-bold text-muted-foreground bg-accent/60 px-2 py-0.5 rounded-lg">352</span>
                </div>
                <div className="flex-1 px-4 bg-white rounded-xl border border-border/50 flex items-center justify-between opacity-40">
                  <span className="text-[0.82rem] font-bold text-foreground">Tech & Gadgets</span>
                  <span className="text-[0.67rem] font-bold text-muted-foreground bg-accent/60 px-2 py-0.5 rounded-lg">298</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
