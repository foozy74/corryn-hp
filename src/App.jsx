import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Capabilities from './components/Capabilities';
import ValueProposition from './components/ValueProposition';
import Differentiators from './components/Differentiators';
import ContactSection from './components/ContactSection';
import CapabilityModal from './components/CapabilityModal';
import DisclaimerModal from './components/DisclaimerModal';
import Footer from './components/Footer';
import { translations } from './data/content';

export default function App() {
  // Default language set to English ('en') as requested
  const [lang, setLang] = useState('en');
  const [selectedCapability, setSelectedCapability] = useState(null);
  const [disclaimerOpen, setDisclaimerOpen] = useState(false);

  const t = translations[lang] || translations.en;

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="main" tabIndex={-1} className="min-h-screen bg-[#090c15] text-slate-100 selection:bg-[#c5a059]/30 selection:text-[#f3e5ab]">
      
      {/* Header Navigation with Language Toggle */}
      <Header
        lang={lang}
        setLang={setLang}
        t={t}
        onOpenContact={scrollToContact}
      />

      {/* Hero Section */}
      <Hero
        t={t}
        onOpenContact={scrollToContact}
      />

      {/* Corporate Overview & Principles */}
      <About
        t={t}
      />

      {/* Core Capabilities */}
      <Capabilities
        t={t}
        onSelectCapability={(item) => setSelectedCapability(item)}
      />

      {/* Value Proposition Interactive Diagram */}
      <ValueProposition
        t={t}
      />

      {/* Differentiators & Phased Process */}
      <Differentiators
        t={t}
      />

      {/* Interactive Contact Form & Board Direct Contact */}
      <ContactSection
        t={t}
      />

      {/* Footer */}
      <Footer
        t={t}
        onOpenDisclaimer={() => setDisclaimerOpen(true)}
        onOpenContact={scrollToContact}
      />

      {/* Capability Detail Modal */}
      {selectedCapability && (
        <CapabilityModal
          item={selectedCapability}
          t={t}
          onClose={() => setSelectedCapability(null)}
          onOpenContact={scrollToContact}
        />
      )}

      {/* Legal & Regulatory Disclaimer Modal */}
      {disclaimerOpen && (
        <DisclaimerModal
          t={t}
          onClose={() => setDisclaimerOpen(false)}
        />
      )}

    </div>
  );
}
