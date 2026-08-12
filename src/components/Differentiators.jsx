import React from 'react';
import { ShieldCheck, UserCheck, Layers } from 'lucide-react';

export default function Differentiators({ t }) {
  return (
    <section className="section-padding bg-[#0c101b] relative">
      
      <div className="container-custom relative z-10">
        
        {/* Centered Section Header */}
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#141b2d] border border-[#c5a059]/30 text-xs font-bold uppercase tracking-widest text-[#c5a059]">
            {t.differentiators.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-100 text-center w-full">
            {t.differentiators.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 text-center max-w-xl">
            {t.differentiators.subtitle}
          </p>
          <div className="w-20 h-1 bg-gradient-gold rounded-full mt-2" />
        </div>

        {/* 3 Differentiators Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {t.differentiators.diffs.map((diff, index) => (
            <div
              key={index}
              className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800 hover:border-[#c5a059]/50 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#141b2d] border border-[#c5a059]/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {index === 0 && <UserCheck className="w-6 h-6 text-[#c5a059]" />}
                {index === 1 && <ShieldCheck className="w-6 h-6 text-[#c5a059]" />}
                {index === 2 && <Layers className="w-6 h-6 text-[#c5a059]" />}
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-100 mb-3 group-hover:text-[#f3e5ab] transition-colors">
                {diff.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-[1.9] font-normal">
                {diff.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Phased Execution Roadmap Box */}
        <div className="glass-panel-gold rounded-3xl p-8 sm:p-12 lg:p-14 border border-[#c5a059]/35 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#c5a059]">
                {t.differentiators.processBadge}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-100">
                {t.differentiators.processTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-[1.9] font-normal">
                {t.differentiators.processSubtitle}
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.differentiators.phases.map((phase, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#0d1220] border border-slate-800 hover:border-[#c5a059]/30 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-7 h-7 rounded-full bg-[#c5a059]/20 text-[#c5a059] text-xs font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <h4 className="font-serif text-sm font-bold text-slate-100">
                      {phase.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-[1.9] pl-10">
                    {phase.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
