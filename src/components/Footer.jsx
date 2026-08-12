import React from 'react';
import { ArrowUp, ShieldCheck, FileText } from 'lucide-react';

export default function Footer({ t, onOpenDisclaimer, onOpenContact }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#06080e] border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#d4af37] to-[#8c6823] p-[1px]">
                <div className="w-full h-full rounded-full bg-[#0e1322] flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#d4af37]" viewBox="0 0 100 100" fill="currentColor">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="6" />
                    <polygon points="50,18 78,72 22,72" fill="none" stroke="currentColor" strokeWidth="6" />
                  </svg>
                </div>
              </div>
              <span className="font-serif text-lg font-bold text-slate-100">
                TORRYN CAPITAL
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-[1.8] max-w-sm">
              Torryn Capital & Holding Poland Sp. z o.o. is a senior-led private capital & corporate finance platform headquartered in Poland with an international perspective.
            </p>

            <div className="flex items-center gap-2 text-[11px] font-mono text-[#c5a059]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>VALUES. GLOBAL PERSPECTIVE.</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-slate-200">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="focus-gold hover:text-[#c5a059] transition-colors">{t.nav.about}</a>
              </li>
              <li>
                <a href="#capabilities" className="focus-gold hover:text-[#c5a059] transition-colors">{t.nav.capabilities}</a>
              </li>
              <li>
                <a href="#value-prop" className="focus-gold hover:text-[#c5a059] transition-colors">{t.nav.valueProp}</a>
              </li>
              <li>
                <a href="#principles" className="focus-gold hover:text-[#c5a059] transition-colors">{t.nav.principles}</a>
              </li>
              <li>
                <a href="#contact" className="focus-gold hover:text-[#c5a059] transition-colors">{t.nav.contact}</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Board Details & Disclaimer Trigger */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif text-sm font-bold text-slate-200">{t.footer.boardHeading}</h4>
            <div className="space-y-1 text-slate-300">
              <div className="font-semibold text-slate-100">{t.contact.companyName}</div>
              <div>{t.contact.headquartersVal}</div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenDisclaimer}
                className="focus-gold flex items-center gap-2 text-[11px] text-slate-400 hover:text-[#e6c888] underline transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>{t.disclaimer.fullBtn} (TC/CP/2026/EVOLVED)</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            © 2026 Torryn Capital & Holding Poland Sp. z o.o. {t.footer.rights}
          </div>

          <div className="flex items-center gap-6">
            <button onClick={onOpenDisclaimer} className="focus-gold hover:text-slate-200">
              {t.footer.privacy}
            </button>
            <button onClick={onOpenDisclaimer} className="focus-gold hover:text-slate-200">
              {t.footer.imprint}
            </button>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="focus-gold p-2 rounded-lg bg-[#121727] hover:bg-[#1a2238] border border-slate-800 text-slate-300 hover:text-[#c5a059] transition-colors"
              title="Top"
            >
              <ArrowUp className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
