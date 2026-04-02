import { ArrowRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { MapMockup } from "./MapMockup";

export function Hero() {
  return (
    <section className="relative pt-20 pb-10 lg:pt-28 lg:pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/6 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-5 lg:space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white shadow-sm shadow-primary/5 rounded-full border border-primary/15">
              <Sparkles className="w-4 h-4 text-primary" strokeWidth={2.5} />
              <span className="text-sm text-foreground font-semibold tracking-tight">
                Plataforma de creators locais
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4 lg:space-y-4">
              <h1 className="text-[2.75rem] leading-[1.05] lg:text-[3rem] xl:text-[3.5rem] font-bold tracking-[-0.02em] text-foreground">
                Encontre creators
                <span className="block text-primary mt-1">da sua região</span>
              </h1>
              <p className="text-[1rem] lg:text-[1.2rem] text-muted-foreground max-w-xl leading-[1.65] font-normal">
                Descubra creators próximos ao seu negócio no mapa. Contrate para
                conteúdo presencial ou digital de forma organizada e
                profissional.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2 lg:pt-4">
              <a
                href={siteConfig.links.empresas}
                className="group px-9 py-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 flex items-center justify-center gap-2.5 font-semibold text-[1.0625rem]"
              >
                <span>Começar agora</span>
                <ArrowRight
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  strokeWidth={2.5}
                />
              </a>
              <a
                href={siteConfig.links.creators}
                className="px-9 py-4 bg-white border-2 border-border text-foreground rounded-xl hover:border-primary/30 hover:bg-accent transition-all flex items-center justify-center gap-2 font-semibold text-[1.0625rem] shadow-sm"
              >
                <span>Sou creator</span>
              </a>
            </div>

            {/* Social Proof */}
            <div className="grid grid-cols-3 gap-4 pt-4 lg:pt-5 border-t border-border/60">
              <div>
                <div className="text-[1.375rem] sm:text-[1.75rem] font-bold text-foreground tracking-tight">
                  2.500+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                  Creators ativos
                </div>
              </div>
              <div className="border-l border-border/60 pl-4 sm:pl-6">
                <div className="text-[1.375rem] sm:text-[1.75rem] font-bold text-foreground tracking-tight">
                  850+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                  Empresas usando
                </div>
              </div>
              <div className="border-l border-border/60 pl-4 sm:pl-6">
                <div className="text-[1.375rem] sm:text-[1.75rem] font-bold text-foreground tracking-tight">
                  15k+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                  Conteúdos criados
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Map Mockup */}
          <div className="relative">
            <div className="aspect-[4/3] lg:aspect-[5/4] relative">
              <MapMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
