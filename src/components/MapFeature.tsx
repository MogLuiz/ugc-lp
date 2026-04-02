import { MapPin, Zap, Target } from "lucide-react";

export function MapFeature() {
  return (
    <section className="py-28 lg:py-20 bg-gradient-to-br from-primary via-[#7C3AED] to-[#8B5CF6] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-8">
            <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
            <span className="text-sm text-white font-semibold tracking-tight">O grande diferencial</span>
          </div>

          <h2 className="text-[2.75rem] lg:text-[3.5rem] font-bold text-white mb-6 leading-[1.1] tracking-tight">
            Encontre creators<br />da sua região no mapa
          </h2>

          <p className="text-xl lg:text-[1.375rem] text-white/95 max-w-3xl mx-auto leading-[1.6]">
            Visualize creators próximos, filtre por distância e contrate com mais contexto, rapidez e organização.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          <div className="p-8 lg:p-10 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-center hover:bg-white/15 transition-all duration-300 group">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-8 h-8 text-white" strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Busca por região</h3>
            <p className="text-white/90 leading-relaxed text-[0.9375rem]">
              Encontre creators por cidade, bairro ou proximidade no mapa
            </p>
          </div>

          <div className="p-8 lg:p-10 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-center hover:bg-white/15 transition-all duration-300 group">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Target className="w-8 h-8 text-white" strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Filtros por perfil</h3>
            <p className="text-white/90 leading-relaxed text-[0.9375rem]">
              Filtre por categoria, formato de conteúdo e disponibilidade
            </p>
          </div>

          <div className="p-8 lg:p-10 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-center hover:bg-white/15 transition-all duration-300 group">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-8 h-8 text-white" strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Contratação direta</h3>
            <p className="text-white/90 leading-relaxed text-[0.9375rem]">
              Converse, agende e contrate com mais agilidade
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
