"use client";

import { MapPin, Menu, X } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/lib/config";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-border/60 shadow-sm shadow-black/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 lg:h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-[#8B5CF6] flex items-center justify-center shadow-lg shadow-primary/25">
            <MapPin className="w-5 h-5 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-xl font-bold tracking-tight">UGC Local</span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
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
          <a href={siteConfig.links.creators} className="hidden md:block text-sm font-semibold px-5 py-2.5 text-foreground hover:bg-accent rounded-xl transition-colors">
            Sou creator
          </a>
          <a href={siteConfig.links.empresas} className="text-sm font-semibold px-5 py-2.5 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all shadow-md shadow-primary/20">
            Para empresas
          </a>
          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="w-5 h-5 text-foreground" strokeWidth={2} />
            ) : (
              <Menu className="w-5 h-5 text-foreground" strokeWidth={2} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-border/40 px-6 py-6 space-y-1">
          <nav aria-label="Navegação mobile">
            {[
              { href: "#descoberta", label: "Como funciona" },
              { href: "#beneficios", label: "Benefícios" },
              { href: "#segmentos", label: "Segmentos" },
              { href: "#faq", label: "FAQ" },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-xl transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-border/40 flex flex-col gap-3">
            <a href={siteConfig.links.creators} className="w-full text-sm font-semibold px-5 py-3 text-foreground hover:bg-accent rounded-xl transition-colors border border-border/60 text-center">
              Sou creator
            </a>
            <a href={siteConfig.links.empresas} className="w-full text-sm font-semibold px-5 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all shadow-md shadow-primary/20 text-center">
              Para empresas
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
