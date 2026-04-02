import { FileText, MessageSquare, CreditCard, Shield, Clock, TrendingUp } from "lucide-react";

export function Benefits() {
  const benefits = [
    {
      icon: FileText,
      title: "Propostas organizadas",
      description: "Receba propostas detalhadas de creators com portfólio, preços e prazos claros. Sem negociação por DM.",
      highlight: false
    },
    {
      icon: MessageSquare,
      title: "Chat integrado",
      description: "Converse com creators, tire dúvidas e alinhe briefing direto na plataforma de forma profissional.",
      highlight: true
    },
    {
      icon: CreditCard,
      title: "Pagamento seguro",
      description: "Transações protegidas pela plataforma com termos claros. Você só paga após aprovar o conteúdo.",
      highlight: false
    },
    {
      icon: Shield,
      title: "Creators verificados",
      description: "Todos os perfis são validados. Veja avaliações reais de outras empresas que já contrataram.",
      highlight: false
    },
    {
      icon: Clock,
      title: "Gestão de prazos",
      description: "Acompanhe o progresso dos projetos com sistema de entregas, revisões e aprovações estruturado.",
      highlight: true
    },
    {
      icon: TrendingUp,
      title: "Histórico e métricas",
      description: "Acesse todo histórico de conteúdos criados, performance e relatórios de resultados em um só lugar.",
      highlight: false
    }
  ];

  return (
    <section id="beneficios" className="py-32 lg:py-48 bg-gradient-to-b from-white via-[#fafbfc] to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header - More Editorial */}
        <div className="max-w-4xl mx-auto text-center mb-24 lg:mb-32">
          <div className="inline-flex items-center gap-2.5 px-6 py-2.5 bg-white backdrop-blur-sm rounded-full border border-primary/20 shadow-sm shadow-primary/5 mb-10">
            <span className="text-sm text-primary font-bold tracking-tight">
              Experiência profissional
            </span>
          </div>
          <h2 className="text-[2.75rem] lg:text-[3.75rem] font-bold text-foreground mb-7 leading-[1.05] tracking-[-0.02em]">
            Muito mais que <span className="text-primary">encontrar creators</span>
          </h2>
          <p className="text-[1.1rem] lg:text-[1.3rem] text-muted-foreground leading-[1.7] max-w-2xl mx-auto">
            Uma plataforma completa para gerenciar todo o processo de criação de conteúdo com creators locais
          </p>
        </div>

        {/* Benefits Grid - More Refined */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`group p-9 lg:p-10 rounded-[1.75rem] border transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 ${
                benefit.highlight 
                  ? 'bg-gradient-to-br from-white to-accent/40 border-primary/25 hover:border-primary/40' 
                  : 'bg-white border-border/50 hover:border-primary/30'
              }`}
            >
              {/* Icon - More Premium */}
              <div className={`w-[4.5rem] h-[4.5rem] rounded-[1.25rem] bg-gradient-to-br from-primary/15 to-primary/8 flex items-center justify-center mb-7 group-hover:scale-105 transition-transform duration-500 shadow-sm shadow-primary/10`}>
                <benefit.icon className="w-9 h-9 text-primary" strokeWidth={2.3} />
              </div>
              
              {/* Title - Better Hierarchy */}
              <h3 className="text-[1.375rem] font-bold text-foreground mb-4 tracking-tight leading-tight">
                {benefit.title}
              </h3>
              
              {/* Description - More Refined */}
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