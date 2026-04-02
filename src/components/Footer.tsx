import { MapPin, AtSign, Globe, X } from "lucide-react";
import { siteConfig } from "@/lib/config";

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          {/* Brand */}
          <div className="space-y-7">
            <div className="flex items-center gap-2.5">
              <div className="w-11 h-11 rounded-[0.875rem] bg-gradient-to-br from-primary to-[#8B5CF6] flex items-center justify-center shadow-lg shadow-primary/25">
                <MapPin className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-[1.375rem] font-bold tracking-tight">UGC Local</span>
            </div>
            <p className="text-white/60 leading-[1.7] text-[0.9rem] max-w-xs">
              Conectando empresas a creators locais para produção de conteúdo autêntico e profissional.
            </p>
            <div className="flex gap-3 pt-1">
              <a href={siteConfig.social.instagram} className="w-10 h-10 rounded-[0.75rem] bg-white/8 hover:bg-white/15 border border-white/10 hover:border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-105" aria-label="Instagram">
                <AtSign className="w-[1.125rem] h-[1.125rem]" strokeWidth={2.3} />
              </a>
              <a href={siteConfig.social.linkedin} className="w-10 h-10 rounded-[0.75rem] bg-white/8 hover:bg-white/15 border border-white/10 hover:border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-105" aria-label="LinkedIn">
                <Globe className="w-[1.125rem] h-[1.125rem]" strokeWidth={2.3} />
              </a>
              <a href={siteConfig.social.twitter} className="w-10 h-10 rounded-[0.75rem] bg-white/8 hover:bg-white/15 border border-white/10 hover:border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-105" aria-label="X (Twitter)">
                <X className="w-[1.125rem] h-[1.125rem]" strokeWidth={2.3} />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="font-bold mb-5 text-white text-[0.95rem] tracking-tight">Plataforma</h3>
            <ul className="space-y-3.5 text-[0.9rem]">
              {siteConfig.footerLinks.plataforma.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-white/60 hover:text-white transition-colors duration-200 inline-block">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Creators */}
          <div>
            <h3 className="font-bold mb-5 text-white text-[0.95rem] tracking-tight">Para creators</h3>
            <ul className="space-y-3.5 text-[0.9rem]">
              {siteConfig.footerLinks.creators.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-white/60 hover:text-white transition-colors duration-200 inline-block">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-5 text-white text-[0.95rem] tracking-tight">Empresa</h3>
            <ul className="space-y-3.5 text-[0.9rem]">
              {siteConfig.footerLinks.empresa.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-white/60 hover:text-white transition-colors duration-200 inline-block">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[0.85rem]">
            <p className="text-white/50 font-medium">© 2026 UGC Local. Todos os direitos reservados.</p>
            <p className="text-white/50 font-medium">
              Feito com <span className="text-primary">❤️</span> para conectar negócios locais a creators
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
