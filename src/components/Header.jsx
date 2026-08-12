import React, { useState, useEffect } from 'react';
import { Globe, Menu, X, Shield, ChevronDown } from 'lucide-react';

export default function Header({ lang, setLang, t, onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = [
    { code: 'en', label: 'English (EN)', flag: '🇬🇧' },
    { code: 'de', label: 'Deutsch (DE)', flag: '🇩🇪' },
    { code: 'pl', label: 'Polski (PL)', flag: '🇵🇱' }
  ];

  const activeLanguageObj = languages.find((l) => l.code === lang) || languages[0];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#080b13]/95 backdrop-blur-xl border-b border-[#c5a059]/25 py-3 shadow-2xl shadow-black/60' 
        : 'bg-gradient-to-b from-[#080b13] via-[#080b13]/70 to-transparent py-5 sm:py-6'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4af37] via-[#c5a059] to-[#8c6823] p-[1.5px] shadow-lg shadow-gold-500/20 group-hover:shadow-gold-500/40 transition-all">
              <div className="w-full h-full rounded-full bg-[#0d1220] flex items-center justify-center">
                <svg className="w-5 h-5 text-[#d4af37]" viewBox="0 0 100 100" fill="currentColor">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="4" />
                  <ellipse cx="50" cy="50" rx="42" ry="18" fill="none" stroke="currentColor" strokeWidth="3" />
                  <ellipse cx="50" cy="50" rx="18" ry="42" fill="none" stroke="currentColor" strokeWidth="3" />
                  <polygon points="50,18 78,72 22,72" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base sm:text-lg font-bold tracking-wider text-slate-100 group-hover:text-[#f3e5ab] transition-colors">
                TORRYN CAPITAL
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.22em] text-[#c5a059] font-medium uppercase">
                & Holding Poland
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
          <a href="#about" className="focus-gold text-xs lg:text-sm font-semibold text-slate-200 hover:text-[#f3e5ab] transition-colors">
            {t.nav.about}
          </a>
            <a href="#capabilities" className="focus-gold text-xs lg:text-sm font-semibold text-slate-200 hover:text-[#f3e5ab] transition-colors">
            {t.nav.capabilities}
          </a>
            <a href="#value-prop" className="focus-gold text-xs lg:text-sm font-semibold text-slate-200 hover:text-[#f3e5ab] transition-colors">
            {t.nav.valueProp}
          </a>
            <a href="#principles" className="focus-gold text-xs lg:text-sm font-semibold text-slate-200 hover:text-[#f3e5ab] transition-colors">
            {t.nav.principles}
          </a>
            <a href="#contact" className="focus-gold text-xs lg:text-sm font-semibold text-slate-200 hover:text-[#f3e5ab] transition-colors">
            {t.nav.contact}
          </a>
          </nav>

          {/* Controls: Language Dropdown + Inquiry Button */}
          <div className="hidden sm:flex items-center gap-4">
            
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                aria-haspopup="listbox"
                aria-expanded={langDropdownOpen}
                className="focus-gold flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#121828] border border-slate-700/80 text-xs font-semibold text-slate-100 hover:border-[#c5a059]/60 transition-colors shadow-sm"
              >
                <span>{activeLanguageObj.flag}</span>
                <span className="uppercase font-bold">{lang}</span>
                <ChevronDown className={`w-3 h-3 text-[#c5a059] transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 rounded-2xl bg-[#0f1525] border border-[#c5a059]/40 shadow-2xl py-1.5 z-50 animate-fadeIn">
                  {languages.map((item) => (
                    <button
                      key={item.code}
                      onClick={() => {
                        setLang(item.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-xs flex items-center justify-between hover:bg-[#1b233a] transition-colors ${
                        lang === item.code ? 'text-[#f3e5ab] font-bold bg-[#151d32]' : 'text-slate-200'
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <span>{item.flag}</span>
                        <span>{item.label}</span>
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Inquire CTA Button */}
            <button
              onClick={onOpenContact}
              className="focus-gold btn-gold px-4 py-2.5 rounded-xl text-xs flex items-center gap-2 font-bold shadow-lg"
            >
              <Shield className="w-3.5 h-3.5" />
              <span>{t.nav.inquireBtn}</span>
            </button>

          </div>

          {/* Mobile Navigation Trigger */}
          <div className="flex lg:hidden items-center gap-2.5">
            <button
              onClick={() => setLang(lang === 'en' ? 'de' : lang === 'de' ? 'pl' : 'en')}
              className="focus-gold px-3 py-1.5 rounded-xl bg-[#121828] border border-slate-700 text-xs font-bold text-[#c5a059] uppercase flex items-center gap-1.5"
            >
              <span>{activeLanguageObj.flag}</span>
              <span>{lang}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              className="focus-gold p-2.5 rounded-xl bg-[#121828] border border-slate-700 text-slate-200 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-nav" className="lg:hidden bg-[#0a0e1b] border-b border-[#c5a059]/30 px-6 pt-4 pb-8 space-y-4 shadow-2xl animate-fadeIn">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="focus-gold block text-slate-100 hover:text-[#c5a059] font-medium py-2.5 border-b border-slate-800/80"
          >
            {t.nav.about}
          </a>
          <a
            href="#capabilities"
            onClick={() => setMobileMenuOpen(false)}
            className="focus-gold block text-slate-100 hover:text-[#c5a059] font-medium py-2.5 border-b border-slate-800/80"
          >
            {t.nav.capabilities}
          </a>
          <a
            href="#value-prop"
            onClick={() => setMobileMenuOpen(false)}
            className="focus-gold block text-slate-100 hover:text-[#c5a059] font-medium py-2.5 border-b border-slate-800/80"
          >
            {t.nav.valueProp}
          </a>
          <a
            href="#principles"
            onClick={() => setMobileMenuOpen(false)}
            className="focus-gold block text-slate-100 hover:text-[#c5a059] font-medium py-2.5 border-b border-slate-800/80"
          >
            {t.nav.principles}
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="focus-gold block text-slate-100 hover:text-[#c5a059] font-medium py-2.5"
          >
            {t.nav.contact}
          </a>
          
          <div className="pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="focus-gold w-full btn-gold py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2"
            >
              <Shield className="w-4 h-4" />
              <span>{t.nav.inquireBtn}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
