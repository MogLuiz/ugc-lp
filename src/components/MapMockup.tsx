import Image from "next/image";
import { Search, SlidersHorizontal, MapPin, Star } from "lucide-react";

const creator = {
  name: "Ana Silva",
  category: "Food & Lifestyle",
  rating: 4.9,
  reviews: 127,
  distance: "1.2 km",
  price: "R$ 350",
  image: "/images/creators/ana.jpg",
};

const secondaryPins = [
  {
    name: "Pedro Costa",
    image: "/images/creators/pedro.jpg",
    left: "26%",
    top: "30%",
  },
  {
    name: "Julia Martins",
    image: "/images/creators/julia.jpg",
    left: "74%",
    top: "60%",
  },
];

export function MapMockup() {
  return (
    <div className="relative w-full h-full rounded-3xl overflow-hidden border border-border/20 shadow-2xl shadow-black/10 bg-[#f0edf8]">
      {/* 1. Map background */}
      <Image
        src="/images/creators/map-background.png"
        fill
        className="object-cover"
        alt="Mapa de creators locais"
        priority
        sizes="(max-width: 1024px) 100vw, 50vw"
      />

      {/* 2. Subtle purple brand tint */}
      <div className="absolute inset-0 bg-primary/8 pointer-events-none" />

      {/* 3. Subtle edge vignette — integrates with page background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 32%, rgba(255,255,255,0.35) 65%, rgba(255,255,255,0.65) 100%)",
        }}
      />

      {/* 4. Central glow behind main creator pin */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 44%, rgba(139,92,246,0.11) 0%, transparent 36%)",
        }}
      />

      {/* 5. Search bar */}
      <div className="absolute top-4 left-4 right-4 z-20">
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl border border-border/25 shadow-md px-3.5 py-2 flex items-center gap-2.5">
          <Search
            className="w-4 h-4 text-muted-foreground/70 flex-shrink-0"
            strokeWidth={2}
          />
          <label htmlFor="map-search" className="sr-only">
            Buscar creators próximos
          </label>
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
            <SlidersHorizontal
              className="w-3.5 h-3.5 text-foreground/50"
              strokeWidth={2}
            />
          </button>
        </div>
      </div>

      {/* 6. Secondary creator pins — desktop/tablet only */}
      {secondaryPins.map((pin) => (
        <div
          key={pin.name}
          className="absolute hidden sm:block z-10 -translate-x-1/2 -translate-y-1/2"
          style={{ left: pin.left, top: pin.top }}
        >
          <div className="relative flex flex-col items-center">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-lg opacity-75 hover:opacity-95 transition-opacity cursor-pointer">
              <Image
                src={pin.image}
                alt={pin.name}
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[5px] border-t-white -mt-px" />
          </div>
        </div>
      ))}

      {/* 7. Empty location marker — desktop/tablet only */}
      <div
        className="absolute hidden sm:block z-10 -translate-x-1/2 -translate-y-1/2"
        style={{ left: "75%", top: "26%" }}
      >
        <svg
          width="22"
          height="28"
          viewBox="0 0 22 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-md"
        >
          <path
            d="M11 0C4.925 0 0 4.925 0 11c0 8.25 11 17 11 17s11-8.75 11-17C22 4.925 17.075 0 11 0z"
            className="fill-primary"
          />
          <circle cx="11" cy="11" r="4.5" fill="white" />
          <circle cx="11" cy="11" r="2.25" className="fill-primary" />
        </svg>
      </div>

      {/* 8. Main creator pin */}
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
                boxShadow:
                  "0 0 0 8px rgba(139,92,246,0.09), 0 6px 20px rgba(139,92,246,0.2)",
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

      {/* 9. Creator info card */}
      <div className="absolute bottom-4 left-4 right-4 z-30">
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl border border-border/20 shadow-xl p-3">
          {/* Creator row */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0 border border-border/15">
              <Image
                src={creator.image}
                alt={creator.name}
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-1">
                <div>
                  <div className="font-bold text-sm text-foreground leading-tight">
                    {creator.name}
                  </div>
                  <div className="text-xs text-muted-foreground font-medium mt-0.5">
                    {creator.category}
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-sm font-bold text-foreground">
                    {creator.price}
                  </div>
                  <div className="text-[10px] text-muted-foreground font-medium">
                    por projeto
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-xs">
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <span className="font-bold text-foreground">
                    {creator.rating}
                  </span>
                  <span className="text-muted-foreground">
                    ({creator.reviews})
                  </span>
                </div>
                <div className="w-px h-3 bg-border/50" />
                <div className="flex items-center gap-1">
                  <MapPin
                    className="w-3 h-3 text-primary flex-shrink-0"
                    strokeWidth={2}
                  />
                  <span className="font-semibold text-foreground">
                    {creator.distance}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <button className="w-full mt-2.5 py-2 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary/90 transition-colors shadow-sm shadow-primary/15">
            Ver perfil completo
          </button>
        </div>
      </div>
    </div>
  );
}
