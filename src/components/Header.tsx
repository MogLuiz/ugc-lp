import { MapPin } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-border/60 shadow-sm shadow-black/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-[#8B5CF6] flex items-center justify-center shadow-lg shadow-primary/25">
            <MapPin className="w-5 h-5 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-xl font-bold tracking-tight">UGC Local</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#descoberta" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Como funciona
          </a>
          <a href="#beneficios" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Benefícios
          </a>
          <a href="#segmentos" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Segmentos
          </a>
          <a href="#faq" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden md:block text-sm font-semibold px-5 py-2.5 text-foreground hover:bg-accent rounded-xl transition-colors">
            Sou creator
          </button>
          <button className="text-sm font-semibold px-5 py-2.5 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all shadow-md shadow-primary/20">
            Para empresas
          </button>
        </div>
      </div>
    </header>
  );
}
