import React, { useEffect, useRef } from 'react';
import { X, CheckCircle, Shield, ArrowRight } from 'lucide-react';

export default function CapabilityModal({ item, t, onClose, onOpenContact }) {
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

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="capability-modal-title"
      onClick={onClose}
    >
      
      <div
        ref={dialogRef}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-[#0e1322] border border-[#c5a059]/40 rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto [overscroll-behavior:contain] focus:outline-none"
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
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#172033] border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059]">
            <Shield className="w-6 h-6" aria-hidden="true" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#c5a059]">
              TORRYN CAPITAL CAPABILITY
            </span>
            <h3 id="capability-modal-title" className="font-serif text-2xl font-bold text-slate-100">
              {item.title}
            </h3>
          </div>
        </div>

        {/* Full Text */}
        <div className="p-4 rounded-xl bg-[#090c15] border border-slate-800 text-sm text-slate-200 leading-[1.9] font-light">
          {item.fullDesc}
        </div>

        {/* Key Focus Points */}
        <div className="space-y-3">
          <h4 className="font-serif text-sm font-bold text-[#e6c888]">
            {t.modal.focusTitle}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {item.points.map((pt, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#141c2e] border border-slate-800 text-xs text-slate-300">
                <CheckCircle className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" aria-hidden="true" />
                <span>{pt}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="focus-gold px-5 py-2.5 rounded-xl border border-slate-700 text-xs font-semibold text-slate-300 hover:bg-slate-800"
          >
            {t.modal.close}
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="focus-gold btn-gold px-6 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2"
          >
            <span>{t.modal.inquire}</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

      </div>

    </div>
  );
}
