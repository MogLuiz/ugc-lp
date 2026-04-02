import { Map, Grid3x3, Tag, MapPin, Star, TrendingUp } from "lucide-react";

export function Discovery() {
  return (
    <section id="descoberta" className="py-32 lg:py-48 bg-gradient-to-b from-white via-[#fafbfc] to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-24 lg:mb-32">
          <div className="inline-flex items-center gap-2.5 px-6 py-2.5 bg-white backdrop-blur-sm rounded-full border border-primary/20 shadow-sm shadow-primary/5 mb-10">
            <span className="text-sm text-primary font-bold tracking-tight">Descoberta inteligente</span>
          </div>
          <h2 className="text-[2.75rem] lg:text-[3.75rem] font-bold text-foreground mb-7 leading-[1.05] tracking-[-0.02em]">
            Encontre o creator ideal<br />de <span className="text-primary">3 formas diferentes</span>
          </h2>
          <p className="text-[1.1rem] lg:text-[1.3rem] text-muted-foreground leading-[1.7] max-w-2xl mx-auto">
            A plataforma oferece múltiplas formas de descoberta para você encontrar exatamente o que precisa
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-7 lg:gap-9">
          {/* Map Discovery */}
          <div className="group relative bg-white rounded-[1.75rem] border border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-black/5">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-9 lg:p-11">
              <div className="w-[4.5rem] h-[4.5rem] rounded-[1.25rem] bg-gradient-to-br from-primary/15 to-primary/8 flex items-center justify-center mb-7 group-hover:scale-105 transition-transform duration-500 shadow-sm shadow-primary/10">
                <Map className="w-9 h-9 text-primary" strokeWidth={2.3} />
              </div>
              <h3 className="text-[1.65rem] font-bold text-foreground mb-4 tracking-tight leading-tight">Mapa regional</h3>
              <p className="text-muted-foreground mb-8 leading-[1.7] text-[0.95rem]">
                Visualize creators próximos ao seu negócio em um mapa interativo. Filtre por distância e descubra talentos na sua região.
              </p>
              <div className="space-y-3.5 mb-8">
                <div className="flex items-center gap-3 text-sm font-semibold text-foreground/90">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Busca por localização exata</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-foreground/90">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Raio de busca personalizável</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-foreground/90">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Preview instantâneo no pin</span>
                </div>
              </div>
              <div className="p-5 bg-gradient-to-br from-[#fafbfc] to-[#f5f6f8] rounded-2xl border border-border/40 shadow-sm">
                <div className="flex items-center gap-2 text-[0.7rem] font-bold text-muted-foreground/80 mb-4 tracking-wide uppercase">
                  <MapPin className="w-3 h-3" />
                  <span>Pinheiros, São Paulo</span>
                </div>
                <div className="relative h-24 rounded-xl bg-gradient-to-br from-[#f0ede6] to-[#e8e4dd] overflow-hidden">
                  <svg className="absolute inset-0 w-full h-full opacity-40">
                    <line x1="0" y1="40%" x2="100%" y2="40%" stroke="#c9b8a0" strokeWidth="1.5" />
                    <line x1="0" y1="70%" x2="100%" y2="70%" stroke="#c9b8a0" strokeWidth="1" />
                    <line x1="35%" y1="0" x2="35%" y2="100%" stroke="#c9b8a0" strokeWidth="1.5" />
                    <line x1="65%" y1="0" x2="65%" y2="100%" stroke="#c9b8a0" strokeWidth="1" />
                  </svg>
                  <div className="absolute top-[35%] left-[30%] w-4 h-4 rounded-full bg-primary border-2 border-white shadow-lg" />
                  <div className="absolute top-[55%] left-[58%] w-3.5 h-3.5 rounded-full bg-primary/60 border-2 border-white shadow-md" />
                  <div className="absolute top-[25%] left-[70%] w-3.5 h-3.5 rounded-full bg-primary/60 border-2 border-white shadow-md" />
                </div>
              </div>
            </div>
          </div>

          {/* Marketplace Discovery */}
          <div className="group relative bg-white rounded-[1.75rem] border border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-black/5">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-9 lg:p-11">
              <div className="w-[4.5rem] h-[4.5rem] rounded-[1.25rem] bg-gradient-to-br from-primary/15 to-primary/8 flex items-center justify-center mb-7 group-hover:scale-105 transition-transform duration-500 shadow-sm shadow-primary/10">
                <Grid3x3 className="w-9 h-9 text-primary" strokeWidth={2.3} />
              </div>
              <h3 className="text-[1.65rem] font-bold text-foreground mb-4 tracking-tight leading-tight">Marketplace completo</h3>
              <p className="text-muted-foreground mb-8 leading-[1.7] text-[0.95rem]">
                Navegue por todos os creators com filtros avançados de categoria, formato de conteúdo e localização.
              </p>
              <div className="space-y-3.5 mb-8">
                <div className="flex items-center gap-3 text-sm font-semibold text-foreground/90">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Filtros por categoria e nicho</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-foreground/90">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Formato de conteúdo</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-foreground/90">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Portfólio visual completo</span>
                </div>
              </div>
              <div className="p-5 bg-gradient-to-br from-[#fafbfc] to-[#f5f6f8] rounded-2xl border border-border/40 shadow-sm">
                <div className="flex gap-2 mb-4 flex-wrap">
                  <div className="px-3 py-1.5 bg-primary text-white rounded-lg text-[0.7rem] font-bold shadow-sm">Food</div>
                  <div className="px-3 py-1.5 bg-white border border-border/60 text-foreground/70 rounded-lg text-[0.7rem] font-bold">Tech</div>
                  <div className="px-3 py-1.5 bg-white border border-border/60 text-foreground/70 rounded-lg text-[0.7rem] font-bold">+12</div>
                </div>
                <div className="grid grid-cols-3 gap-2.5">
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/25 to-primary/15 border border-primary/20 flex items-center justify-center">
                    <Star className="w-4 h-4 text-primary/50" fill="currentColor" />
                  </div>
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/15 to-primary/8 border border-primary/15 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-primary/40" />
                  </div>
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/10" />
                </div>
              </div>
            </div>
          </div>

          {/* Category Discovery */}
          <div className="group relative bg-white rounded-[1.75rem] border border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-black/5">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-9 lg:p-11">
              <div className="w-[4.5rem] h-[4.5rem] rounded-[1.25rem] bg-gradient-to-br from-primary/15 to-primary/8 flex items-center justify-center mb-7 group-hover:scale-105 transition-transform duration-500 shadow-sm shadow-primary/10">
                <Tag className="w-9 h-9 text-primary" strokeWidth={2.3} />
              </div>
              <h3 className="text-[1.65rem] font-bold text-foreground mb-4 tracking-tight leading-tight">Busca por categoria</h3>
              <p className="text-muted-foreground mb-8 leading-[1.7] text-[0.95rem]">
                Explore creators organizados por nicho de mercado. De food a tech, encontre especialistas no seu segmento.
              </p>
              <div className="space-y-3.5 mb-8">
                <div className="flex items-center gap-3 text-sm font-semibold text-foreground/90">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>15+ categorias especializadas</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-foreground/90">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Busca por palavras-chave</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-foreground/90">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Ordenação inteligente</span>
                </div>
              </div>
              <div className="space-y-2.5">
                <div className="p-4 bg-gradient-to-r from-primary/8 to-primary/5 backdrop-blur-sm rounded-xl border border-primary/20 shadow-sm flex items-center justify-between group-hover:border-primary/30 transition-colors">
                  <span className="text-[0.8rem] font-bold text-foreground">Food & Lifestyle</span>
                  <span className="text-[0.7rem] font-black text-primary bg-white px-2.5 py-1 rounded-lg shadow-sm">487</span>
                </div>
                <div className="p-4 bg-white backdrop-blur-sm rounded-xl border border-border/50 shadow-sm flex items-center justify-between opacity-75">
                  <span className="text-[0.8rem] font-bold text-foreground">Fashion & Beauty</span>
                  <span className="text-[0.7rem] font-bold text-muted-foreground bg-accent/70 px-2.5 py-1 rounded-lg">352</span>
                </div>
                <div className="p-4 bg-white backdrop-blur-sm rounded-xl border border-border/50 shadow-sm flex items-center justify-between opacity-75">
                  <span className="text-[0.8rem] font-bold text-foreground">Tech & Gadgets</span>
                  <span className="text-[0.7rem] font-bold text-muted-foreground bg-accent/70 px-2.5 py-1 rounded-lg">298</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
