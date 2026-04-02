import { UtensilsCrossed, ShoppingBag, Dumbbell, Sparkles, Home, Briefcase } from "lucide-react";

const segments = [
  {
    icon: UtensilsCrossed,
    title: "Restaurantes & Cafés",
    description: "Creators especializados em food content para divulgar seus pratos e ambiente",
    examples: ["Reels de pratos", "Stories de visita", "Avaliações gastronômicas"],
    featured: false,
  },
  {
    icon: ShoppingBag,
    title: "Varejo & E-commerce",
    description: "Conteúdo para produtos, unboxing e demonstrações de uso autênticas",
    examples: ["Product reviews", "Try-on hauls", "Demos de produtos"],
    featured: true,
  },
  {
    icon: Dumbbell,
    title: "Fitness & Bem-estar",
    description: "Creators de saúde para promover academias, studios e centros de bem-estar",
    examples: ["Tour pela academia", "Aulas experimentais", "Transformações"],
    featured: false,
  },
  {
    icon: Sparkles,
    title: "Beleza & Estética",
    description: "Conteúdo de salões, clínicas e procedimentos estéticos com before/after",
    examples: ["Procedimentos", "Resultados", "Experiência no local"],
    featured: false,
  },
  {
    icon: Home,
    title: "Serviços Locais",
    description: "Divulgação de pet shops, lavanderias, oficinas e serviços de bairro",
    examples: ["Tour do espaço", "Atendimento", "Diferenciais"],
    featured: true,
  },
  {
    icon: Briefcase,
    title: "Empresas B2B",
    description: "Conteúdo institucional, cultura empresarial e demonstração de serviços",
    examples: ["Cases de sucesso", "Bastidores", "Depoimentos"],
    featured: false,
  },
];

export function Segments() {
  return (
    <section id="segmentos" className="py-32 lg:py-48 bg-gradient-to-b from-white via-[#fafbfc] to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-24 lg:mb-28">
          <div className="inline-flex items-center gap-2.5 px-6 py-2.5 bg-white backdrop-blur-sm rounded-full border border-primary/20 shadow-sm shadow-primary/5 mb-10">
            <span className="text-sm text-primary font-bold tracking-tight">Para todo tipo de negócio</span>
          </div>
          <h2 className="text-[2.75rem] lg:text-[3.75rem] font-bold text-foreground mb-7 leading-[1.05] tracking-[-0.02em]">
            Segmentos que já <span className="text-primary">contratam creators</span>
          </h2>
          <p className="text-[1.1rem] lg:text-[1.3rem] text-muted-foreground leading-[1.7] max-w-2xl mx-auto">
            Empresas de diversos setores usam a plataforma para criar conteúdo autêntico e local
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
          {segments.map((segment, index) => (
            <div
              key={index}
              className={`group p-9 lg:p-10 rounded-[1.75rem] border transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 ${
                segment.featured
                  ? "bg-gradient-to-br from-white to-accent/40 border-primary/25 hover:border-primary/40"
                  : "bg-white border-border/50 hover:border-primary/30"
              }`}
            >
              <div className="w-[4.5rem] h-[4.5rem] rounded-[1.25rem] bg-gradient-to-br from-primary/15 to-primary/8 flex items-center justify-center mb-7 group-hover:scale-105 transition-transform duration-500 shadow-sm shadow-primary/10">
                <segment.icon className="w-9 h-9 text-primary" strokeWidth={2.3} />
              </div>
              <h3 className="text-[1.375rem] font-bold text-foreground mb-4 tracking-tight leading-tight">{segment.title}</h3>
              <p className="text-muted-foreground mb-7 leading-[1.7] text-[0.95rem]">{segment.description}</p>
              <div className="space-y-3">
                <div className="text-[0.7rem] font-black text-primary/60 uppercase tracking-widest mb-3.5">
                  Tipos de conteúdo
                </div>
                {segment.examples.map((example, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground/90">{example}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 lg:mt-28">
          <div className="grid md:grid-cols-4 gap-8 p-10 lg:p-12 bg-white rounded-[1.75rem] border border-border/50 shadow-xl shadow-black/5">
            <div className="text-center space-y-2">
              <div className="text-[2.75rem] font-black text-primary leading-none tracking-tight">850+</div>
              <div className="text-sm font-semibold text-muted-foreground tracking-tight">Empresas ativas</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-[2.75rem] font-black text-primary leading-none tracking-tight">2.5k+</div>
              <div className="text-sm font-semibold text-muted-foreground tracking-tight">Creators cadastrados</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-[2.75rem] font-black text-primary leading-none tracking-tight">15k+</div>
              <div className="text-sm font-semibold text-muted-foreground tracking-tight">Conteúdos criados</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-[2.75rem] font-black text-primary leading-none tracking-tight">4.8</div>
              <div className="text-sm font-semibold text-muted-foreground tracking-tight">Avaliação média</div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-[1.05rem] text-muted-foreground mb-7 leading-relaxed max-w-2xl mx-auto">
            Independente do seu segmento, encontre creators locais especializados no seu nicho
          </p>
          <button className="group px-9 py-4 bg-gradient-to-r from-primary to-[#8B5CF6] text-white rounded-[1.125rem] hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 shadow-lg shadow-primary/20 font-bold text-[0.95rem] hover:scale-[1.02]">
            Buscar creators do meu segmento
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
