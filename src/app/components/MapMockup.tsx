import { Search, SlidersHorizontal, MapPin, Star, Instagram, Video, Camera } from "lucide-react";

const creators = [
  {
    id: 1,
    name: "Ana Silva",
    category: "Food & Lifestyle",
    rating: 4.9,
    reviews: 127,
    distance: "1.2 km",
    price: "R$ 350",
    image: "https://images.unsplash.com/photo-1759350075177-eeb89d507990?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGNyZWF0b3IlMjBpbmZsdWVuY2VyfGVufDF8fHx8MTc3NTA4NTY0MHww&ixlib=rb-4.1.0&q=80&w=200",
    position: { x: "52%", y: "45%" },
    selected: true
  },
  {
    id: 2,
    name: "Pedro Costa",
    category: "Tech & Gadgets",
    rating: 4.8,
    reviews: 94,
    distance: "2.8 km",
    price: "R$ 400",
    image: "https://images.unsplash.com/photo-1673214845662-5be3f64a4df1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbiUyMGNvbnRlbnQlMjBjcmVhdG9yJTIwc21hcnRwaG9uZXxlbnwxfHx8fDE3NzUwODU2NDB8MA&ixlib=rb-4.1.0&q=80&w=200",
    position: { x: "38%", y: "58%" }
  },
  {
    id: 3,
    name: "Julia Martins",
    category: "Fashion & Beauty",
    rating: 5.0,
    reviews: 215,
    distance: "0.8 km",
    price: "R$ 500",
    image: "https://images.unsplash.com/photo-1758788505792-38d65b41699e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHZpZGVvZ3JhcGhlciUyMGNhbWVyYXxlbnwxfHx8fDE3NzUwODU2NDF8MA&ixlib=rb-4.1.0&q=80&w=200",
    position: { x: "65%", y: "32%" }
  }
];

export function MapMockup() {
  const selectedCreator = creators.find(c => c.selected);

  return (
    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-black/8 border border-border/30 bg-white">
      {/* Map Background - Rich Urban Context with Real Map Feel */}
      <div className="absolute inset-0 bg-[#f0ede6]">
        {/* Street Grid - More Visible and Structured */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Park/green area */}
            <linearGradient id="parkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a7f3d0" stopOpacity="0.85"/>
              <stop offset="100%" stopColor="#6ee7b7" stopOpacity="0.75"/>
            </linearGradient>
            
            {/* River gradient */}
            <linearGradient id="riverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.7"/>
              <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.7"/>
            </linearGradient>
            
            {/* Commercial area with purple tint */}
            <linearGradient id="commercialGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e9d5ff" stopOpacity="0.5"/>
              <stop offset="100%" stopColor="#d8b4fe" stopOpacity="0.4"/>
            </linearGradient>
            
            {/* Residential blocks */}
            <pattern id="residentialPattern" width="80" height="80" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="38" height="38" fill="#fef3c7" opacity="0.6"/>
              <rect x="42" y="0" width="38" height="38" fill="#fce7f3" opacity="0.5"/>
              <rect x="0" y="42" width="38" height="38" fill="#f3e8ff" opacity="0.5"/>
              <rect x="42" y="42" width="38" height="38" fill="#dfe9f5" opacity="0.6"/>
            </pattern>
          </defs>
          
          {/* Base city blocks pattern */}
          <rect width="100%" height="100%" fill="url(#residentialPattern)" />
          
          {/* Large park area - top left */}
          <ellipse cx="15%" cy="15%" rx="12%" ry="15%" fill="url(#parkGradient)" opacity="0.95"/>
          
          {/* Park area - bottom */}
          <rect x="8%" y="72%" width="30%" height="20%" fill="url(#parkGradient)" rx="12" opacity="0.9"/>
          
          {/* Small park - top right */}
          <ellipse cx="78%" cy="20%" rx="10%" ry="12%" fill="url(#parkGradient)" opacity="0.85"/>
          
          {/* River running diagonally */}
          <path d="M 0 25 Q 25 30, 40 38 T 75 48 T 100 52" 
                fill="none" 
                stroke="url(#riverGradient)" 
                strokeWidth="18" 
                opacity="0.85"
                strokeLinecap="round"/>
          
          {/* River banks - lighter blue */}
          <path d="M 0 25 Q 25 30, 40 38 T 75 48 T 100 52" 
                fill="none" 
                stroke="#bfdbfe" 
                strokeWidth="26" 
                opacity="0.4"
                strokeLinecap="round"/>
          
          {/* Commercial/downtown area - center */}
          <rect x="40%" y="38%" width="28%" height="28%" fill="url(#commercialGradient)" rx="8" opacity="0.7"/>
          
          {/* Main avenues - Horizontal */}
          <line x1="0" y1="22%" x2="100%" y2="22%" stroke="#c9b8a0" strokeWidth="3" opacity="0.7"/>
          <line x1="0" y1="45%" x2="100%" y2="45%" stroke="#c9b8a0" strokeWidth="2.5" opacity="0.65"/>
          <line x1="0" y1="68%" x2="100%" y2="68%" stroke="#c9b8a0" strokeWidth="3" opacity="0.7"/>
          <line x1="0" y1="85%" x2="100%" y2="85%" stroke="#c9b8a0" strokeWidth="2" opacity="0.6"/>
          
          {/* Main avenues - Vertical */}
          <line x1="25%" y1="0" x2="25%" y2="100%" stroke="#c9b8a0" strokeWidth="2.5" opacity="0.65"/>
          <line x1="45%" y1="0" x2="45%" y2="100%" stroke="#c9b8a0" strokeWidth="3" opacity="0.7"/>
          <line x1="65%" y1="0" x2="65%" y2="100%" stroke="#c9b8a0" strokeWidth="2.5" opacity="0.65"/>
          <line x1="82%" y1="0" x2="82%" y2="100%" stroke="#c9b8a0" strokeWidth="2" opacity="0.6"/>
          
          {/* Secondary streets - Horizontal */}
          <line x1="0" y1="12%" x2="100%" y2="12%" stroke="#d4c4b0" strokeWidth="1.5" opacity="0.5"/>
          <line x1="0" y1="33%" x2="100%" y2="33%" stroke="#d4c4b0" strokeWidth="1.5" opacity="0.5"/>
          <line x1="0" y1="56%" x2="100%" y2="56%" stroke="#d4c4b0" strokeWidth="1.5" opacity="0.5"/>
          <line x1="0" y1="78%" x2="100%" y2="78%" stroke="#d4c4b0" strokeWidth="1.5" opacity="0.5"/>
          <line x1="0" y1="92%" x2="100%" y2="92%" stroke="#d4c4b0" strokeWidth="1.5" opacity="0.5"/>
          
          {/* Secondary streets - Vertical */}
          <line x1="12%" y1="0" x2="12%" y2="100%" stroke="#d4c4b0" strokeWidth="1.5" opacity="0.5"/>
          <line x1="35%" y1="0" x2="35%" y2="100%" stroke="#d4c4b0" strokeWidth="1.5" opacity="0.5"/>
          <line x1="55%" y1="0" x2="55%" y2="100%" stroke="#d4c4b0" strokeWidth="1.5" opacity="0.5"/>
          <line x1="73%" y1="0" x2="73%" y2="100%" stroke="#d4c4b0" strokeWidth="1.5" opacity="0.5"/>
          <line x1="90%" y1="0" x2="90%" y2="100%" stroke="#d4c4b0" strokeWidth="1.5" opacity="0.5"/>
          
          {/* Building markers - small squares */}
          <rect x="48%" y="44%" width="4" height="4" fill="#9333ea" opacity="0.25" rx="0.5"/>
          <rect x="58%" y="50%" width="4" height="4" fill="#9333ea" opacity="0.25" rx="0.5"/>
          <rect x="52%" y="56%" width="4" height="4" fill="#9333ea" opacity="0.25" rx="0.5"/>
          <rect x="42%" y="48%" width="3" height="3" fill="#9333ea" opacity="0.2" rx="0.5"/>
          <rect x="62%" y="46%" width="3" height="3" fill="#9333ea" opacity="0.2" rx="0.5"/>
          <rect x="55%" y="60%" width="3" height="3" fill="#9333ea" opacity="0.2" rx="0.5"/>
          
          {/* Bridge over river */}
          <rect x="42%" y="36%" width="3%" height="6%" fill="#b8a99a" opacity="0.6" rx="1"/>
        </svg>
      </div>

      {/* Search Bar - Minimal */}
      <div className="absolute top-5 left-5 right-5 z-20">
        <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-lg shadow-black/[0.04] border border-border/40 p-3.5">
          <div className="flex items-center gap-3">
            <Search className="w-4.5 h-4.5 text-muted-foreground flex-shrink-0" strokeWidth={2} />
            <input 
              type="text" 
              placeholder="Buscar creators próximos"
              className="flex-1 text-sm font-medium outline-none bg-transparent placeholder:text-muted-foreground/60"
              value="São Paulo, Centro"
              readOnly
            />
            <button className="p-2 hover:bg-accent/50 rounded-lg transition-colors">
              <SlidersHorizontal className="w-4 h-4 text-foreground/70" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      {/* Creator Pins - Only 3 visible */}
      {creators.map((creator) => (
        <div
          key={creator.id}
          className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2"
          style={{ left: creator.position.x, top: creator.position.y }}
        >
          <div className={`relative group cursor-pointer ${creator.selected ? 'z-30' : 'z-10'}`}>
            {/* Pin Shadow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1 w-3 h-1.5 bg-black/10 rounded-full blur-sm" />
            
            {/* Pin */}
            <div className={`relative transition-all duration-300 ${ creator.selected ? 'scale-100' : 'scale-90 opacity-60 group-hover:scale-95 group-hover:opacity-80'}`}>
              <div className={`w-11 h-11 rounded-full border-[2.5px] overflow-hidden ${ creator.selected ? 'border-primary shadow-lg shadow-primary/30' : 'border-white shadow-md'}`}>
                <img 
                  src={creator.image} 
                  alt={creator.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Pin Pointer */}
              <div className={`absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent ${ creator.selected ? 'border-t-[7px] border-t-primary' : 'border-t-[7px] border-t-white'}`} />
            </div>

            {/* Pulse Animation for Selected - More Subtle */}
            {creator.selected && (
              <div className="absolute inset-0 rounded-full border-[2.5px] border-primary animate-ping opacity-20" />
            )}
          </div>
        </div>
      ))}

      {/* Selected Creator Card - Single Focus Point */}
      {selectedCreator && (
        <div className="absolute bottom-5 left-5 right-5 z-30 animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/8 border border-border/40 overflow-hidden">
            <div className="p-5">
              <div className="flex gap-4">
                {/* Creator Image */}
                <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border border-border/30 shadow-sm">
                  <img 
                    src={selectedCreator.image} 
                    alt={selectedCreator.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Creator Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <h3 className="font-bold text-base text-foreground mb-0.5">
                        {selectedCreator.name}
                      </h3>
                      <p className="text-xs font-medium text-muted-foreground">
                        {selectedCreator.category}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-foreground">
                        {selectedCreator.price}
                      </div>
                      <div className="text-[10px] font-medium text-muted-foreground">
                        por projeto
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span className="text-xs font-bold text-foreground">
                        {selectedCreator.rating}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        ({selectedCreator.reviews})
                      </span>
                    </div>
                    <div className="w-px h-3 bg-border" />
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-primary" strokeWidth={2} />
                      <span className="text-xs font-semibold text-foreground">
                        {selectedCreator.distance}
                      </span>
                    </div>
                  </div>

                  {/* Service Types - Simplified */}
                  <div className="flex gap-2 mb-4">
                    <div className="flex items-center gap-1 px-2.5 py-1 bg-accent/60 rounded-lg">
                      <Video className="w-3 h-3 text-primary" strokeWidth={2} />
                      <span className="text-[11px] font-semibold text-foreground">Reels</span>
                    </div>
                    <div className="flex items-center gap-1 px-2.5 py-1 bg-accent/60 rounded-lg">
                      <Camera className="w-3 h-3 text-primary" strokeWidth={2} />
                      <span className="text-[11px] font-semibold text-foreground">Fotos</span>
                    </div>
                    <div className="flex items-center gap-1 px-2.5 py-1 bg-accent/60 rounded-lg">
                      <Instagram className="w-3 h-3 text-primary" strokeWidth={2} />
                      <span className="text-[11px] font-semibold text-foreground">Stories</span>
                    </div>
                  </div>

                  {/* Single Action Button */}
                  <button className="w-full px-4 py-2.5 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary/90 transition-all shadow-md shadow-primary/20">
                    Ver perfil completo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}