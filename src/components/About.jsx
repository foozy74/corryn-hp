import React from 'react';
import { Lock, CheckCircle2, ShieldAlert, Target, HeartHandshake } from 'lucide-react';

export default function About({ t }) {
  const getPrincipleIcon = (id) => {
    switch (id) {
      case 'discretion': return <Lock className="w-5 h-5 text-[#c5a059]" />;
      case 'integrity': return <CheckCircle2 className="w-5 h-5 text-[#c5a059]" />;
      case 'governance': return <ShieldAlert className="w-5 h-5 text-[#c5a059]" />;
      case 'execution': return <Target className="w-5 h-5 text-[#c5a059]" />;
      case 'alignment': return <HeartHandshake className="w-5 h-5 text-[#c5a059]" />;
      default: return <CheckCircle2 className="w-5 h-5 text-[#c5a059]" />;
    }
  };

  return (
    <section id="about" className="section-padding bg-[#080b13] relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#1e263d]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        
        {/* Centered Section Header */}
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#141b2d] border border-[#c5a059]/30 text-xs font-bold uppercase tracking-widest text-[#c5a059]">
            {t.about.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-100 text-center w-full">
            {t.about.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-gold rounded-full mt-2" />
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
          
          {/* Left Column: Text Overview */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 sm:p-10 rounded-2xl glass-panel border border-slate-800 space-y-5">
              <p className="text-base sm:text-lg font-medium text-slate-100 leading-[1.8]">
                {t.about.p1}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-[1.9] font-normal">
                {t.about.p2}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-[1.9] font-normal">
                {t.about.p3}
              </p>
            </div>

            {/* Positioning & Philosophy sub-cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="p-8 rounded-2xl bg-[#0f1525] border border-[#c5a059]/25 hover:border-[#c5a059]/50 transition-colors">
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#f3e5ab] mb-2">
                  {t.about.positioningTitle}
                </h3>
                <p className="text-xs text-slate-300 leading-[1.9]">
                  {t.about.positioningText}
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-[#0f1525] border border-[#c5a059]/25 hover:border-[#c5a059]/50 transition-colors">
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#f3e5ab] mb-2">
                  {t.about.philosophyTitle}
                </h3>
                <p className="text-xs text-slate-300 leading-[1.9]">
                  {t.about.philosophyText}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Cover Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-2.5 bg-gradient-to-b from-[#c5a059]/30 via-slate-800/40 to-[#c5a059]/10 shadow-2xl overflow-hidden group">
              <img
                src="/assets/image1.png"
                alt="Torryn Capital Corporate Cover"
                width="1054"
                height="1492"
                loading="lazy"
                className="w-full h-auto rounded-2xl object-cover shadow-2xl group-hover:scale-[1.02] transition-transform duration-700 max-h-[520px]"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#080b13] via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 rounded-2xl glass-panel-gold border border-[#c5a059]/40">
                <div className="font-serif text-xs sm:text-sm font-bold text-slate-100">
                  TORRYN CAPITAL & HOLDING POLAND
                </div>
                <div className="text-[11px] text-[#f3e5ab] tracking-wider mt-1 font-semibold">
                  Sp. z o.o. | Headquarters: Poland
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Core Principles Section */}
        <div id="principles" className="pt-6 sm:pt-10">
          <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2.5">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#141b2d] border border-[#c5a059]/30 text-xs font-bold uppercase tracking-widest text-[#c5a059]">
              {t.principles.badge}
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-slate-100 text-center w-full">
              {t.principles.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 text-center max-w-xl">
              {t.principles.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {t.principles.list.map((item) => (
              <div
                key={item.id}
                className="p-8 rounded-2xl glass-panel border border-slate-800/80 hover:border-[#c5a059]/50 hover:-translate-y-1 transition-[border-color,transform,opacity] duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#141c2e] border border-[#c5a059]/30 flex items-center justify-center mb-4 group-hover:bg-[#c5a059]/20 transition-colors">
                    {getPrincipleIcon(item.id)}
                  </div>
                  <h4 className="font-serif text-base font-bold text-slate-100 mb-2 group-hover:text-[#f3e5ab] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-[1.9]">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-800/80 text-[10px] uppercase font-bold text-[#c5a059] tracking-wider">
                  Core Standard
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
