import React from 'react';
import { Briefcase, Coins, Ship, Zap, TrendingUp, Globe, ArrowUpRight, CheckCircle } from 'lucide-react';

export default function Capabilities({ t, onSelectCapability }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Briefcase': return <Briefcase className="w-7 h-7 text-[#c5a059]" />;
      case 'Coins': return <Coins className="w-7 h-7 text-[#c5a059]" />;
      case 'Ship': return <Ship className="w-7 h-7 text-[#c5a059]" />;
      case 'Zap': return <Zap className="w-7 h-7 text-[#c5a059]" />;
      case 'TrendingUp': return <TrendingUp className="w-7 h-7 text-[#c5a059]" />;
      case 'Globe': return <Globe className="w-7 h-7 text-[#c5a059]" />;
      default: return <Briefcase className="w-7 h-7 text-[#c5a059]" />;
    }
  };

  const getDocxIconAsset = (id) => {
    switch (id) {
      case 'corp-finance': return '/assets/image2.png';
      case 'private-capital': return '/assets/image3.png';
      case 'commodities': return '/assets/image4.png';
      case 'infrastructure': return '/assets/image5.png';
      case 'ventures': return '/assets/image6.png';
      case 'market-access': return '/assets/image7.png';
      default: return null;
    }
  };

  return (
    <section id="capabilities" className="section-padding bg-[#0c101b] relative">
      
      <div className="container-custom relative z-10">
        
        {/* Centered Section Header */}
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#141b2d] border border-[#c5a059]/30 text-xs font-bold uppercase tracking-widest text-[#c5a059]">
            {t.capabilities.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-100 text-center w-full">
            {t.capabilities.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 text-center max-w-2xl">
            {t.capabilities.subtitle}
          </p>
          <div className="w-20 h-1 bg-gradient-gold rounded-full mt-2" />
        </div>

        {/* 6 Capabilities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.capabilities.items.map((item) => {
            const docxImg = getDocxIconAsset(item.id);
            return (
              <div
                key={item.id}
                className="glass-panel rounded-3xl p-8 sm:p-10 border !border-slate-800/60 hover:!border-[#c5a059]/40 transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1.5 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  
                  {/* Top Bar: Icon + Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div aria-hidden="true" className="w-12 h-12 flex items-center justify-center text-[#c5a059] transition-transform duration-300 group-hover:scale-110">
                      {docxImg ? (
                        <img src={docxImg} alt="" className="w-10 h-10 object-contain filter brightness-110" />
                      ) : (
                        getIcon(item.icon)
                      )}
                    </div>
                    <span className="text-xs font-serif font-bold text-[#c5a059]/50 group-hover:text-[#c5a059] transition-colors">
                      0{t.capabilities.items.indexOf(item) + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-100 mb-3 group-hover:text-[#f3e5ab] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-[1.9] mb-6 font-normal">
                    {item.shortDesc}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2.5 mb-6 border-t border-slate-800/80 pt-4">
                    {item.points.map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                        <span className="leading-snug">{pt}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Footer Action */}
                <button
                  onClick={() => onSelectCapability(item)}
                  className="focus-gold mt-auto pt-4 flex items-center gap-1.5 text-xs font-semibold text-[#c5a059] group-hover:text-[#f3e5ab] transition-colors text-left self-start cursor-pointer"
                >
                  <span>{t.capabilities.viewDetails}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#c5a059] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
                </button>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
