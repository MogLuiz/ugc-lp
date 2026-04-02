import {
  UtensilsCrossed,
  ShoppingBag,
  Dumbbell,
  Sparkles,
  Home,
  Briefcase,
} from "lucide-react";

const segments = [
  {
    icon: UtensilsCrossed,
    title: "Restaurantes & Cafés",
    description:
      "Creators especializados em food content para divulgar seus pratos e ambiente",
    examples: [
      "Reels de pratos",
      "Stories de visita",
      "Avaliações gastronômicas",
    ],
    featured: false,
  },
  {
    icon: ShoppingBag,
    title: "Varejo & E-commerce",
    description:
      "Creators para unboxing, demonstração de produto e conteúdo de conversão",
    examples: ["Product reviews", "Experimentando roupas", "Demos de produtos"],
    featured: true,
  },
  {
    icon: Dumbbell,
    title: "Fitness & Bem-estar",
    description:
      "Creators de saúde para promover academias, studios e centros de bem-estar",
    examples: ["Tour pela academia", "Aulas experimentais", "Transformações"],
    featured: false,
  },
  {
    icon: Sparkles,
    title: "Beleza & Estética",
    description:
      "Conteúdo de salões, clínicas e procedimentos estéticos com before/after",
    examples: ["Procedimentos", "Resultados", "Experiência no local"],
    featured: false,
  },
  {
    icon: Home,
    title: "Serviços Locais",
    description:
      "Creators para negócios de bairro, serviços locais e empresas regionais",
    examples: ["Tour do espaço", "Atendimento", "Diferenciais"],
    featured: true,
  },
  {
    icon: Briefcase,
    title: "Empresas B2B",
    description:
      "Creators para conteúdo institucional, bastidores e demonstração de serviços",
    examples: ["Cases de sucesso", "Bastidores", "Depoimentos"],
    featured: false,
  },
];

export function Segments() {
  return (
    <section
      id="segmentos"
      className="py-12 lg:py-24 bg-gradient-to-b from-white via-[#fafbfc] to-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-10 lg:mb-20">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 bg-white backdrop-blur-sm rounded-full border border-primary/20 shadow-sm shadow-primary/5 mb-4 lg:mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-sm text-primary font-semibold tracking-tight">
              Para todo tipo de negócio
            </span>
          </div>
          <h2 className="text-[2rem] sm:text-[2.75rem] lg:text-[2.75rem] font-bold text-foreground mb-3 lg:mb-5 leading-[1.05] tracking-[-0.02em]">
            Creators locais para diferentes{" "}
            <span className="text-primary">tipos de negócio</span>
          </h2>
          <p className="text-[1.05rem] lg:text-[1.1rem] text-muted-foreground leading-[1.75] max-w-xl mx-auto">
            De restaurantes a empresas B2B, encontre creators que fazem sentido
            para o seu segmento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {segments.map((segment, index) => (
            <div
              key={index}
              className={`group p-5 lg:p-8 rounded-[1.75rem] border transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 ${
                segment.featured
                  ? "bg-gradient-to-br from-white to-accent/40 border-primary/25 hover:border-primary/40"
                  : "bg-white border-border/50 hover:border-primary/30"
              }`}
            >
              <div className="w-11 h-11 lg:w-[4.5rem] lg:h-[4.5rem] rounded-[1.25rem] bg-gradient-to-br from-primary/15 to-primary/8 flex items-center justify-center mb-3 lg:mb-4 group-hover:scale-105 transition-transform duration-500 shadow-sm shadow-primary/10">
                <segment.icon
                  className="w-6 h-6 lg:w-9 lg:h-9 text-primary"
                  strokeWidth={2.3}
                />
              </div>
              <h3 className="text-[1.05rem] lg:text-[1.375rem] font-bold text-foreground mb-2 lg:mb-3 tracking-tight leading-tight">
                {segment.title}
              </h3>
              <p className="text-muted-foreground mb-4 lg:mb-7 leading-[1.7] text-[0.95rem]">
                {segment.description}
              </p>
              <div className="space-y-2">
                <div className="text-[0.7rem] font-black text-primary/60 uppercase tracking-widest mb-2 lg:mb-3.5">
                  Tipos de conteúdo
                </div>
                {segment.examples.map((example, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground/90">
                      {example}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 lg:mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 p-5 lg:p-10 bg-white rounded-[1.75rem] border border-border/50 shadow-xl shadow-black/5">
            <div className="text-center space-y-2">
              <div className="text-[2rem] lg:text-[2.25rem] font-black text-primary leading-none tracking-tight">
                850+
              </div>
              <div className="text-sm font-semibold text-muted-foreground tracking-tight">
                Empresas ativas
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-[2rem] lg:text-[2.25rem] font-black text-primary leading-none tracking-tight">
                2.5k+
              </div>
              <div className="text-sm font-semibold text-muted-foreground tracking-tight">
                Creators cadastrados
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-[2rem] lg:text-[2.25rem] font-black text-primary leading-none tracking-tight">
                15k+
              </div>
              <div className="text-sm font-semibold text-muted-foreground tracking-tight">
                Conteúdos criados
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-[2rem] lg:text-[2.25rem] font-black text-primary leading-none tracking-tight">
                4.8
              </div>
              <div className="text-sm font-semibold text-muted-foreground tracking-tight">
                Avaliação média
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-[1.05rem] text-muted-foreground mb-5 lg:mb-7 leading-relaxed max-w-2xl mx-auto">
            Encontre creators que entendem o seu mercado, a sua cidade e o tipo
            de conteúdo que a sua empresa precisa.
          </p>
          <button className="group px-9 py-4 bg-gradient-to-r from-primary to-[#8B5CF6] text-white rounded-[1.125rem] hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 shadow-lg shadow-primary/20 font-bold text-[0.95rem] hover:scale-[1.02]">
            Buscar creators do meu segmento
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
