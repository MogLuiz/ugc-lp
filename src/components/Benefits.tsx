import { FileText, MessageSquare, CreditCard, Shield, Clock, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: FileText,
    title: "Propostas organizadas",
    description: "Receba propostas com portfólio, valores e prazos mais claros, sem negociação espalhada.",
    highlight: false,
  },
  {
    icon: MessageSquare,
    title: "Chat integrado",
    description: "Converse, alinhe briefing e centralize a comunicação em um só lugar.",
    highlight: true,
  },
  {
    icon: CreditCard,
    title: "Pagamento seguro",
    description: "Pague com mais segurança e só aprove o repasse após validar o conteúdo.",
    highlight: false,
  },
  {
    icon: Shield,
    title: "Creators verificados",
    description: "Veja perfis validados, avaliações reais e histórico antes de contratar.",
    highlight: false,
  },
  {
    icon: Clock,
    title: "Gestão de prazos",
    description: "Acompanhe entregas, revisões e aprovações com mais controle.",
    highlight: true,
  },
  {
    icon: TrendingUp,
    title: "Histórico e métricas",
    description: "Acesse conteúdos, histórico e resultados sem perder informação no processo.",
    highlight: false,
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="py-12 lg:py-24 bg-gradient-to-b from-white via-[#fafbfc] to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-10 lg:mb-20">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 bg-white backdrop-blur-sm rounded-full border border-primary/20 shadow-sm shadow-primary/5 mb-4 lg:mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-sm text-primary font-semibold tracking-tight">Plataforma completa</span>
          </div>
          <h2 className="text-[2rem] sm:text-[2.75rem] lg:text-[2.75rem] font-bold text-foreground mb-3 lg:mb-5 leading-[1.05] tracking-[-0.02em]">
            Tudo para contratar e gerenciar<br className="hidden lg:block" /> creators <span className="text-primary">em um só lugar</span>
          </h2>
          <p className="text-[1.05rem] lg:text-[1.1rem] text-muted-foreground leading-[1.75] max-w-xl mx-auto">
            Centralize propostas, briefing, pagamentos, aprovações e resultados em uma operação mais organizada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group p-5 lg:p-8 rounded-[1.75rem] border transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 ${
                benefit.highlight
                  ? "bg-gradient-to-br from-white to-accent/40 border-primary/25 hover:border-primary/40"
                  : "bg-white border-border/50 hover:border-primary/30"
              }`}
            >
              <div className="w-11 h-11 lg:w-[4.5rem] lg:h-[4.5rem] rounded-[1.25rem] bg-gradient-to-br from-primary/15 to-primary/8 flex items-center justify-center mb-3 lg:mb-4 group-hover:scale-105 transition-transform duration-500 shadow-sm shadow-primary/10">
                <benefit.icon className="w-6 h-6 lg:w-9 lg:h-9 text-primary" strokeWidth={2.3} />
              </div>
              <h3 className="text-[1.05rem] lg:text-[1.375rem] font-bold text-foreground mb-2 lg:mb-3 tracking-tight leading-tight">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-[1.7] text-[0.95rem]">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
