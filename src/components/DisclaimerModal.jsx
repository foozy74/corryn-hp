import React, { useEffect, useRef } from 'react';
import { X, ShieldAlert } from 'lucide-react';

export default function DisclaimerModal({ t, onClose, documentRef = "TC/CP/2026/EVOLVED" }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const prevActive = document.activeElement;
    if (dialogRef.current) dialogRef.current.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (prevActive && prevActive.focus) prevActive.focus();
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-modal-title"
      onClick={onClose}
    >
      
      <div
        ref={dialogRef}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl bg-[#0e1322] border border-[#c5a059]/40 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-6 max-h-[85vh] overflow-y-auto [overscroll-behavior:contain] focus:outline-none"
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="focus-gold absolute top-6 right-6 p-2 rounded-full bg-[#172033] text-slate-400 hover:text-white hover:bg-[#1e2a44] transition-colors"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#c5a059]/20 border border-[#c5a059] flex items-center justify-center text-[#c5a059]">
            <ShieldAlert className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold text-[#c5a059] uppercase tracking-widest">
              DOC REF: {documentRef}
            </span>
            <h3 id="disclaimer-modal-title" className="font-serif text-2xl font-bold text-slate-100">
              {t.disclaimer.title}
            </h3>
          </div>
        </div>

        {/* Legal Text paragraphs matching DOCX lines 109-117 */}
        <div className="space-y-5 text-xs text-slate-300 leading-[1.9] font-light bg-[#090c15] p-6 rounded-2xl border border-slate-800">
          <p className="font-semibold text-slate-200">
            Torryn Capital & Holding Poland Sp. z o.o. – Corporate Profile 2026 Disclaimer
          </p>
          
          <p>
            This document and web presentation have been prepared by Torryn Capital & Holding Poland Sp. z o.o. for private information purposes only.
          </p>

          <p>
            The information contained herein does not constitute legal, tax, financial, investment, accounting, regulatory, or other professional advice. Nothing in this presentation should be construed as an offer, solicitation, recommendation, or invitation to buy, sell, subscribe for, or otherwise participate in any investment, security, financial instrument, commodity transaction, trading programme, or other product or service.
          </p>

          <p>
            This presentation is intended only for qualified, professional, institutional, or otherwise eligible recipients. It is not intended for retail distribution. Any recipient should conduct independent legal, financial, tax, regulatory, commercial, and operational due diligence before entering into any transaction or relying on any information contained herein.
          </p>

          <p>
            All information has been prepared in good faith and from sources considered reliable; however, no representation or warranty, express or implied, is made as to the accuracy, completeness, or continued validity of the information. The information may be subject to change without notice.
          </p>

          <p>
            Any forward-looking statements, projections, estimates, market views, or strategic expectations are inherently uncertain and may differ materially from actual outcomes. Past performance, prior transaction experience, or market access does not guarantee future results.
          </p>

          <p>
            Torryn Capital accepts no liability for any loss, damage, cost, or expense arising directly or indirectly from the use of, reliance upon, or interpretation of this document.
          </p>

          <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-[#c5a059]">
            <span>CONFIDENTIAL & PRIVATE</span>
            <span>Ref Code: {documentRef}</span>
          </div>
        </div>

        {/* Footer Action */}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="focus-gold btn-gold px-6 py-2.5 rounded-xl text-xs font-semibold"
          >
            {t.modal ? t.modal.understood : "Understood & Close"}
          </button>
        </div>

      </div>

    </div>
  );
}
