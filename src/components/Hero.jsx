import React from 'react';
import { ArrowRight, ShieldCheck, Award, Globe2, Building2 } from 'lucide-react';

export default function Hero({ t, onOpenContact }) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-24 overflow-hidden bg-[#080b13]">
      
      {/* Background Image with Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero_bg.jpg"
          alt="Torryn Capital Architecture"
          width="1376"
          height="768"
          fetchPriority="high"
          className="w-full h-full object-cover object-center opacity-30 scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080b13] via-[#080b13]/85 to-[#080b13]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#080b13]/80 to-[#080b13]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      </div>

      <div className="container-custom relative z-10 pt-4 sm:pt-0">
        
        <div className="text-center max-w-4xl mx-auto space-y-5 sm:space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full glass-panel-gold text-[#f3e5ab] text-[9px] sm:text-xs font-bold uppercase tracking-widest border border-[#c5a059]/40 shadow-xl animate-float max-w-full">
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#d4af37] shrink-0" />
            <span className="truncate">{t.hero.badge}</span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-slate-100 tracking-tight leading-[1.2]">
            Investing Today, <br className="hidden sm:inline" />
            <span className="text-gradient-gold">Building Tomorrow</span>
          </h1>

          {/* Subtitle with High Contrast and Optimal Line Height */}
          <p className="text-sm sm:text-base md:text-xl text-slate-200 font-normal leading-[1.8] max-w-3xl mx-auto px-2">
            {t.hero.subtitle}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 pt-2">
            <button
              onClick={onOpenContact}
              className="focus-gold w-full sm:w-auto btn-gold px-8 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-3 shadow-2xl group"
            >
              <span>{t.hero.ctaSecondary}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </button>

            <a
              href="#capabilities"
              className="focus-gold w-full sm:w-auto btn-outline-gold px-8 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2"
            >
              <span>{t.hero.ctaPrimary}</span>
            </a>
          </div>

        </div>

        {/* Hero Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 mt-10 sm:mt-16 lg:mt-20">
          
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/80 hover:border-[#c5a059]/50 transition-colors group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#141b2e] border border-[#c5a059]/40 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
              <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#c5a059]" aria-hidden="true" />
            </div>
            <div className="font-serif text-lg sm:text-2xl font-bold text-slate-100">{t.hero.stat1}</div>
            <div className="text-xs text-slate-300 mt-1 font-medium">{t.hero.stat1Sub}</div>
          </div>

          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/80 hover:border-[#c5a059]/50 transition-colors group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#141b2e] border border-[#c5a059]/40 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
              <Globe2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#c5a059]" aria-hidden="true" />
            </div>
            <div className="font-serif text-lg sm:text-2xl font-bold text-slate-100">{t.hero.stat2}</div>
            <div className="text-xs text-slate-300 mt-1 font-medium">{t.hero.stat2Sub}</div>
          </div>

          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/80 hover:border-[#c5a059]/50 transition-colors group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#141b2e] border border-[#c5a059]/40 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
              <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#c5a059]" aria-hidden="true" />
            </div>
            <div className="font-serif text-lg sm:text-2xl font-bold text-slate-100">{t.hero.stat3}</div>
            <div className="text-xs text-slate-300 mt-1 font-medium">{t.hero.stat3Sub}</div>
          </div>

          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/80 hover:border-[#c5a059]/50 transition-colors group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#141b2e] border border-[#c5a059]/40 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#c5a059]" aria-hidden="true" />
            </div>
            <div className="font-serif text-lg sm:text-2xl font-bold text-slate-100">{t.hero.stat4}</div>
            <div className="text-xs text-slate-300 mt-1 font-medium">{t.hero.stat4Sub}</div>
          </div>

        </div>

      </div>

      {/* Decorative Bottom Line Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c5a059]/40 to-transparent" />
    </section>
  );
}
