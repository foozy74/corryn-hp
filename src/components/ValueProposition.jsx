import React, { useState } from 'react';
import { Layers, CheckCircle2, Eye, ChevronRight } from 'lucide-react';

export default function ValueProposition({ t }) {
  const [activeNodeId, setActiveNodeId] = useState(1);
  const [showFullGraphic, setShowFullGraphic] = useState(false);

  const activeNode = t.valueProp.nodes.find((n) => n.id === activeNodeId) || t.valueProp.nodes[0];

  return (
    <section id="value-prop" className="section-padding bg-[#080b13] relative overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c5a059]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        
        {/* Centered Section Header */}
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#141b2d] border border-[#c5a059]/30 text-xs font-bold uppercase tracking-widest text-[#c5a059]">
            {t.valueProp.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-100 text-center w-full">
            {t.valueProp.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 text-center max-w-xl">
            {t.valueProp.subtitle}
          </p>
          <div className="w-20 h-1 bg-gradient-gold rounded-full mt-2" />
        </div>

        {/* Interactive Radar Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Desktop/Tablet Radar Wheel (sm and up) */}
          <div className="hidden sm:flex lg:col-span-7 justify-center py-4 sm:py-6">
            <div className="relative w-full max-w-[460px] aspect-square flex items-center justify-center">
              
              {/* Outer Decorative Ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-[#c5a059]/30 animate-spin-slow" style={{ animationDuration: '45s' }} />
              <div className="absolute inset-6 rounded-full border border-slate-800" />

              {/* Center Hub */}
              <div className="z-20 w-36 h-36 md:w-44 md:h-44 rounded-full bg-[#111728] border-2 border-[#c5a059] shadow-2xl flex flex-col items-center justify-center p-4 text-center">
                <div className="w-8 h-8 rounded-full bg-[#c5a059]/20 flex items-center justify-center mb-1">
                  <Layers className="w-4 h-4 text-[#d4af37]" />
                </div>
                <div className="font-serif text-xs font-bold text-slate-100 tracking-wider">
                  {t.valueProp.centerTitle}
                </div>
                <div className="text-[9px] text-[#c5a059] tracking-widest uppercase mt-0.5 font-semibold">
                  {t.valueProp.centerSub}
                </div>
              </div>

              {/* 8 Satellite Nodes */}
              {t.valueProp.nodes.map((node, index) => {
                const total = t.valueProp.nodes.length;
                const angle = (index * 360) / total - 90; // Top start
                const radius = 160; // px distance from center
                const x = radius * Math.cos((angle * Math.PI) / 180);
                const y = radius * Math.sin((angle * Math.PI) / 180);
                const isActive = node.id === activeNodeId;

                return (
                  <React.Fragment key={node.id}>
                    {/* Connecting Line to Center */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                      <line
                        x1="50%"
                        y1="50%"
                        x2={`calc(50% + ${x}px)`}
                        y2={`calc(50% + ${y}px)`}
                        stroke={isActive ? '#d4af37' : 'rgba(197, 160, 89, 0.25)'}
                        strokeWidth={isActive ? '2.5' : '1'}
                        strokeDasharray={isActive ? 'none' : '4 4'}
                      />
                    </svg>

                    {/* Node Button */}
                    <button
                      onClick={() => setActiveNodeId(node.id)}
                      aria-pressed={isActive}
                      aria-label={node.title}
                      style={{
                        transform: `translate(${x}px, ${y}px)`
                      }}
                      className={`focus-gold absolute z-30 w-20 h-20 md:w-24 md:h-24 rounded-full flex flex-col items-center justify-center p-2 text-center transition-[scale,background-color,border-color,color] duration-300 shadow-xl cursor-pointer ${
                        isActive
                          ? 'bg-[#1b243b] border-2 border-[#d4af37] text-white scale-110 shadow-gold-500/30'
                          : 'bg-[#0f1423] border border-slate-700 text-slate-200 hover:border-[#c5a059]/60 hover:scale-105'
                      }`}
                    >
                      <span className={`text-[10px] md:text-xs font-semibold leading-tight ${isActive ? 'text-[#f3e5ab]' : 'text-slate-200'}`}>
                        {node.label}
                      </span>
                    </button>
                  </React.Fragment>
                );
              })}

            </div>
          </div>

          {/* Mobile Pillar Selector Grid (< sm screens) */}
          <div className="sm:hidden grid grid-cols-2 gap-2.5 mb-4">
            {t.valueProp.nodes.map((node) => {
              const isActive = node.id === activeNodeId;
              return (
                <button
                  key={node.id}
                  onClick={() => setActiveNodeId(node.id)}
                  aria-pressed={isActive}
                  className={`focus-gold p-3 rounded-xl border text-left text-xs font-semibold flex items-center justify-between transition-all ${
                    isActive
                      ? 'bg-[#1b243b] border-[#d4af37] text-[#f3e5ab] shadow-lg'
                      : 'bg-[#0f1423] border-slate-800 text-slate-300'
                  }`}
                >
                  <span className="truncate">{node.label}</span>
                  <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-[#d4af37]' : 'text-slate-600'}`} aria-hidden="true" />
                </button>
              );
            })}
          </div>

          {/* Right Column: Node Details & Document Graphic View Toggle */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Active Pillar Card */}
            <div className="glass-panel-gold rounded-3xl p-8 sm:p-10 border border-[#c5a059]/40 shadow-2xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#151d32] text-[10px] font-bold text-[#c5a059] uppercase tracking-wider">
                  Pillar 0{activeNode.id} / 08
                </span>
                <span className="text-xs text-slate-300 font-serif font-semibold">Torryn Capital Model</span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-100">
                {activeNode.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-200 leading-[1.9] font-normal">
                {activeNode.desc}
              </p>

              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-[#f3e5ab]">
                <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0" />
                <span>{t.valueProp.cycleNotice}</span>
              </div>
            </div>

            {/* View Full Corporate Infographic Graphic Button */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0d1220] border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="font-serif text-sm font-bold text-slate-200">
                  {t.valueProp.graphicTitle}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {t.valueProp.graphicSub}
                </div>
              </div>
              <button
                onClick={() => setShowFullGraphic(!showFullGraphic)}
                aria-expanded={showFullGraphic}
                className="focus-gold px-4 py-2.5 rounded-xl bg-[#161d30] hover:bg-[#202b48] border border-[#c5a059]/30 text-xs font-semibold text-[#f3e5ab] flex items-center justify-center gap-2 transition-colors cursor-pointer shrink-0"
              >
                <Eye className="w-4 h-4 text-[#c5a059]" aria-hidden="true" />
                <span>{showFullGraphic ? t.valueProp.graphicToggleHide : t.valueProp.graphicToggleShow}</span>
              </button>
            </div>

            {showFullGraphic && (
              <div className="rounded-2xl p-2 bg-[#080b13] border border-[#c5a059]/40 shadow-2xl overflow-hidden animate-fadeIn">
                <img
                  src="/assets/image9.png"
                  alt="Torryn Capital Value Proposition Infographic"
                  width="1388"
                  height="778"
                  loading="lazy"
                  className="w-full h-auto rounded-xl object-contain"
                />
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
