import Image from "next/image";
import { Search, SlidersHorizontal, MapPin, Star, Building2 } from "lucide-react";

const creator = {
  name: "Ana Silva",
  category: "Food & Lifestyle",
  rating: 4.9,
  reviews: 127,
  distance: "1.2 km",
  price: "R$ 350",
  image: "/images/creators/mapa-1.png",
};

export function MapMockup() {
  return (
    <div className="relative w-full h-full rounded-3xl overflow-hidden border border-border/20 shadow-2xl shadow-black/10 bg-[#f0edf8]">

      {/* 1. Map background — limpo, pins construídos via código */}
      <Image
        src="/images/creators/map-background.png"
        fill
        className="object-cover"
        style={{ filter: "contrast(1.08) saturate(1.08)" }}
        alt="Mapa de creators locais"
        priority
        sizes="(max-width: 1024px) 100vw, 50vw"
      />

      {/* 2. Subtle purple brand tint */}
      <div className="absolute inset-0 bg-primary/8 pointer-events-none" />

      {/* 3. Subtle edge vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 42%, rgba(255,255,255,0.30) 68%, rgba(255,255,255,0.55) 100%)",
        }}
      />

      {/* 4. Search bar */}
      <div className="absolute top-3 lg:top-4 left-3 lg:left-4 right-3 lg:right-4 z-20">
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl border border-border/25 shadow-md px-3 lg:px-3.5 py-1 lg:py-1.5 flex items-center gap-2 lg:gap-2.5">
          <Search className="w-4 h-4 text-muted-foreground/70 flex-shrink-0" strokeWidth={2} />
          <label htmlFor="map-search" className="sr-only">Buscar creators próximos</label>
          <input
            id="map-search"
            type="text"
            defaultValue="Belo Horizonte, Centro"
            readOnly
            className="flex-1 text-sm font-medium text-foreground bg-transparent outline-none cursor-default"
            aria-label="Localização atual"
          />
          <button
            className="p-1.5 rounded-lg hover:bg-accent/80 transition-colors flex-shrink-0"
            aria-label="Filtros"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-foreground/50" strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* 5. Main creator pin */}
      <div
        className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
        style={{ left: "50%", top: "44%" }}
      >
        <div className="flex flex-col items-center">
          <div className="relative">
            {/* Pulse animation ring */}
            <div className="absolute inset-0 rounded-full border-[2.5px] border-primary animate-ping opacity-[0.18]" />
            {/* Creator photo */}
            <div
              className="w-[3.75rem] h-[3.75rem] rounded-full overflow-hidden border-[3px] border-primary relative z-10"
              style={{
                boxShadow: "0 0 0 8px rgba(139,92,246,0.09), 0 6px 20px rgba(139,92,246,0.2)",
              }}
            >
              <Image
                src={creator.image}
                alt={creator.name}
                width={60}
                height={60}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
          {/* Teardrop tail */}
          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-primary -mt-px relative z-10" />
        </div>
      </div>

      {/* 6. Creator secundário 1 — upper-left */}
      <div
        className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
        style={{ left: "29%", top: "30%" }}
      >
        <div className="flex flex-col items-center">
          <div
            className="w-9 h-9 lg:w-10 lg:h-10 rounded-full overflow-hidden border-2 border-primary/55 relative z-10"
            style={{ boxShadow: "0 0 0 4px rgba(139,92,246,0.07), 0 4px 12px rgba(139,92,246,0.14)" }}
          >
            <Image
              src="/images/creators/mapa-2.png"
              alt="Creator próximo"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-primary/55 -mt-px relative z-10" />
        </div>
      </div>

      {/* 7. Creator secundário 2 — right of center */}
      <div
        className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
        style={{ left: "68%", top: "54%" }}
      >
        <div className="flex flex-col items-center">
          <div
            className="w-9 h-9 lg:w-10 lg:h-10 rounded-full overflow-hidden border-2 border-primary/55 relative z-10"
            style={{ boxShadow: "0 0 0 4px rgba(139,92,246,0.07), 0 4px 12px rgba(139,92,246,0.14)" }}
          >
            <Image
              src="/images/creators/mapa-3.png"
              alt="Creator próximo"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-primary/55 -mt-px relative z-10" />
        </div>
      </div>

      {/* 8. Empresa — marcador discreto, lower-left do cluster */}
      <div
        className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
        style={{ left: "32%", top: "48%" }}
      >
        <div className="flex flex-col items-center">
          <div className="bg-white/95 backdrop-blur-sm rounded-lg border border-border/30 shadow-md px-1.5 py-1 flex items-center gap-1">
            <Building2 className="w-3 h-3 text-slate-500 flex-shrink-0" strokeWidth={2} />
            <span className="text-[10px] font-semibold text-slate-600 leading-none">Sua empresa</span>
          </div>
          <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[5px] border-t-white -mt-px" style={{ filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.08))" }} />
        </div>
      </div>

      {/* 9. Pin simples extra — upper-right, reforça densidade — oculto no mobile */}
      <div
        className="absolute z-10 -translate-x-1/2 -translate-y-1/2 hidden lg:block"
        style={{ left: "65%", top: "27%" }}
      >
        <div className="w-5 h-5 rounded-full bg-primary/70 border-2 border-white shadow-md flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-white" />
        </div>
      </div>

      {/* 10. Creator info card */}
      <div className="absolute bottom-3 lg:bottom-4 left-3 lg:left-4 right-3 lg:right-4 z-30">
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl border border-border/20 shadow-xl p-2 lg:p-2.5">

          {/* Creator row */}
          <div className="flex items-center gap-2 lg:gap-2.5">
            <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-xl overflow-hidden flex-shrink-0 border border-border/15">
              <Image
                src={creator.image}
                alt={creator.name}
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-0.5">
                <div>
                  <div className="font-bold text-sm text-foreground leading-tight">{creator.name}</div>
                  <div className="text-xs text-muted-foreground font-medium mt-0.5">{creator.category}</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-sm font-bold text-foreground">{creator.price}</div>
                  <div className="text-[10px] text-muted-foreground font-medium">por projeto</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-xs">
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <span className="font-bold text-foreground">{creator.rating}</span>
                  <span className="text-muted-foreground">({creator.reviews})</span>
                </div>
                <div className="w-px h-3 bg-border/50" />
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-primary flex-shrink-0" strokeWidth={2} />
                  <span className="font-semibold text-foreground">{creator.distance}</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <button className="w-full mt-1.5 py-1 lg:py-1.5 bg-primary text-white text-xs lg:text-sm font-semibold rounded-xl hover:bg-primary/90 transition-colors shadow-sm shadow-primary/15">
            Ver perfil completo
          </button>

        </div>
      </div>

    </div>
  );
}
