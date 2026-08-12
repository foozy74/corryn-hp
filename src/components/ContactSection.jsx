import React, { useState, useRef } from 'react';
import { Phone, Mail, MapPin, Shield, Send, CheckCircle2, Building2, User, Globe, Lock } from 'lucide-react';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';

export default function ContactSection({ t }) {
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const companyRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);
  const authorityRef = useRef(null);
  const [formData, setFormData] = useState({
    category: t.contact.categories[0],
    fullName: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    subject: '',
    message: '',
    requestNda: true,
    confirmAuthority: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = "Name is required.";
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = "Valid email address required.";
    if (!formData.company.trim()) errs.company = "Organization is required.";
    if (!formData.subject.trim()) errs.subject = "Subject is required.";
    if (!formData.message.trim() || formData.message.length < 15) errs.message = "Please describe your inquiry (min. 15 characters).";
    if (!formData.confirmAuthority) errs.confirmAuthority = "Please confirm authority to represent.";
    
    setErrors(errs);
    return errs;
  };

  const focusFirstError = (errs) => {
    if (errs.fullName) fullNameRef.current?.focus();
    else if (errs.email) emailRef.current?.focus();
    else if (errs.company) companyRef.current?.focus();
    else if (errs.subject) subjectRef.current?.focus();
    else if (errs.message) messageRef.current?.focus();
    else if (errs.confirmAuthority) authorityRef.current?.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      focusFirstError(errs);
      return;
    }

    setIsSubmitting(true);
    
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const refCode = `TC-INQ-2026-${Math.floor(1000 + Math.random() * 9000)}`;

    if (serviceId && templateId && publicKey) {
      // Send real email via EmailJS
      emailjs.send(
        serviceId,
        templateId,
        {
          category: formData.category,
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          country: formData.country,
          subject: formData.subject,
          message: formData.message,
          reference: refCode
        },
        publicKey
      )
      .then(() => {
        setIsSubmitting(false);
        setSubmittedData({ ...formData, refCode });
        confetti({
          particleCount: 75,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#c5a059', '#f3e5ab', '#ffffff']
        });
      })
      .catch((err) => {
        setIsSubmitting(false);
        console.error('EmailJS sending failed:', err);
        alert('E-Mail-Versand fehlgeschlagen. Bitte überprüfen Sie Ihre Internetverbindung oder versuchen Sie es später erneut.');
      });
    } else {
      // Fallback to Mock mode
      console.log('EmailJS variables missing in .env. Running contact form in mock mode.');
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmittedData({ ...formData, refCode });

        // Trigger Confetti effect
        confetti({
          particleCount: 75,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#c5a059', '#f3e5ab', '#ffffff']
        });
      }, 1200);
    }
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      category: t.contact.categories[0],
      fullName: '',
      email: '',
      phone: '',
      company: '',
      country: '',
      subject: '',
      message: '',
      requestNda: true,
      confirmAuthority: false
    });
    setErrors({});
  };

  return (
    <section id="contact" className="section-padding bg-[#080b13] relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#c5a059]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-custom relative z-10">
        
        {/* Centered Section Header */}
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#141b2d] border border-[#c5a059]/30 text-xs font-bold uppercase tracking-widest text-[#c5a059]">
            {t.contact.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-100 text-center w-full">
            {t.contact.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 text-center max-w-xl">
            {t.contact.subtitle}
          </p>
          <div className="w-20 h-1 bg-gradient-gold rounded-full mt-2" />
        </div>

        {/* Content Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Board Contact Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Board Contact Card */}
            <div className="glass-panel-gold rounded-3xl p-8 sm:p-10 border border-[#c5a059]/40 shadow-2xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#c5a059]/20 to-transparent rounded-bl-full pointer-events-none" />

              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#141c2e] border border-[#c5a059]/40 flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-[#d4af37]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#c5a059] tracking-widest">
                    {t.contact.directHeading}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-100">
                    {t.contact.companyName}
                  </h3>
                </div>
              </div>

              <div className="space-y-3.5 pt-4 border-t border-slate-800/80 text-xs">

                {/* Direct HQ Location */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#0d1220] border border-slate-800">
                  <MapPin className="w-4 h-4 text-[#c5a059] shrink-0" />
                  <div>
                    <div className="text-[10px] text-slate-400 font-medium">{t.contact.headquartersLabel}</div>
                    <div className="font-semibold text-slate-100">
                      {t.contact.headquartersVal}
                    </div>
                  </div>
                </div>

                {/* Confidentiality Notice */}
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#141b2d] border border-[#c5a059]/25 text-slate-200 text-xs leading-[1.8]">
                  <Lock className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                  <span>{t.contact.availabilityNotice}</span>
                </div>

              </div>
            </div>

            {/* Quick Summary Badge */}
            <div className="p-8 rounded-3xl glass-panel border border-slate-800 space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-bold text-[#f3e5ab]">
                <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
                <span>{t.contact.confidentialityGuarantee}</span>
              </div>
              <p className="text-xs text-slate-300 leading-[1.9] font-normal">
                {t.contact.confidentialityText}
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            
            {submittedData ? (
              /* Success State Card */
              <div role="status" aria-live="polite" className="glass-panel-gold rounded-3xl p-10 sm:p-12 border border-[#c5a059] shadow-2xl text-center space-y-6 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[#c5a059]/20 border-2 border-[#d4af37] flex items-center justify-center mx-auto text-[#d4af37]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold text-slate-100">
                    {t.contact.successTitle}
                  </h3>
                  <p className="text-sm text-slate-200 max-w-md mx-auto">
                    {t.contact.successText}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#0d1220] border border-slate-800 text-left max-w-md mx-auto space-y-2.5 text-xs">
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-400">{t.contact.refLabel}</span>
                    <span className="font-mono font-bold text-[#f3e5ab]">{submittedData.refCode}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Name:</span>
                    <span className="text-slate-100 font-semibold">{submittedData.fullName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Organization:</span>
                    <span className="text-slate-100 font-semibold">{submittedData.company}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Category:</span>
                    <span className="text-slate-100 font-semibold">{submittedData.category}</span>
                  </div>
                </div>

                <button
                  onClick={handleReset}
                  className="focus-gold btn-outline-gold px-6 py-3 rounded-xl text-xs font-bold"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              /* Contact Form */
              <form onSubmit={handleSubmit} className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-800 space-y-6 shadow-2xl">
                
                <div className="space-y-1">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-100">
                    {t.contact.formTitle}
                  </h3>
                  <p className="text-xs text-slate-300">
                    {t.contact.formSubtitle}
                  </p>
                </div>

                {/* Category Dropdown */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-200">
                    {t.contact.fieldCategory}
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#0f1525] border border-slate-700 text-xs font-medium text-slate-100 focus:border-[#c5a059] focus:outline-none transition-colors"
                  >
                    {t.contact.categories.map((cat, idx) => (
                      <option key={idx} value={cat} className="bg-[#0f1525] text-slate-100">
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Grid 2 Columns for Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-200">
                      {t.contact.fieldName}
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        ref={fullNameRef}
                        type="text"
                        name="fullName"
                        autoComplete="name"
                        placeholder={t.contact.namePlaceholder}
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full pl-10 pr-4 py-3.5 rounded-xl bg-[#0f1525] border text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none transition-colors ${
                          errors.fullName ? 'border-red-500/80' : 'border-slate-700 focus:border-[#c5a059]'
                        }`}
                      />
                    </div>
                    {errors.fullName && <p className="text-[10px] text-red-400">{errors.fullName}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-200">
                      {t.contact.fieldEmail}
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        ref={emailRef}
                        type="email"
                        name="email"
                        autoComplete="email"
                        spellCheck={false}
                        placeholder={t.contact.emailPlaceholder}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full pl-10 pr-4 py-3.5 rounded-xl bg-[#0f1525] border text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500/80' : 'border-slate-700 focus:border-[#c5a059]'
                        }`}
                      />
                    </div>
                    {errors.email && <p className="text-[10px] text-red-400">{errors.email}</p>}
                  </div>

                </div>

                {/* Grid 2 Columns for Company & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-200">
                      {t.contact.fieldCompany}
                    </label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        ref={companyRef}
                        type="text"
                        name="company"
                        autoComplete="organization"
                        placeholder={t.contact.companyPlaceholder}
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className={`w-full pl-10 pr-4 py-3.5 rounded-xl bg-[#0f1525] border text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none transition-colors ${
                          errors.company ? 'border-red-500/80' : 'border-slate-700 focus:border-[#c5a059]'
                        }`}
                      />
                    </div>
                    {errors.company && <p className="text-[10px] text-red-400">{errors.company}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-200">
                      {t.contact.fieldPhone}
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        inputMode="tel"
                        placeholder={t.contact.phonePlaceholder}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-[#0f1525] border border-slate-700 text-xs text-slate-100 placeholder:text-slate-500 focus:border-[#c5a059] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                </div>

                {/* Country & Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-200">
                      {t.contact.fieldCountry}
                    </label>
                    <div className="relative">
                      <Globe className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        name="country"
                        autoComplete="country-name"
                        placeholder={t.contact.countryPlaceholder}
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-[#0f1525] border border-slate-700 text-xs text-slate-100 placeholder:text-slate-500 focus:border-[#c5a059] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-200">
                      {t.contact.fieldSubject}
                    </label>
                    <input
                      ref={subjectRef}
                      type="text"
                      name="subject"
                      autoComplete="off"
                      placeholder={t.contact.subjectPlaceholder}
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={`w-full px-4 py-3.5 rounded-xl bg-[#0f1525] border text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none transition-colors ${
                        errors.subject ? 'border-red-500/80' : 'border-slate-700 focus:border-[#c5a059]'
                      }`}
                    />
                    {errors.subject && <p className="text-[10px] text-red-400">{errors.subject}</p>}
                  </div>

                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-200">
                    {t.contact.fieldMessage}
                  </label>
                  <textarea
                    ref={messageRef}
                    rows={4}
                    name="message"
                    autoComplete="off"
                    placeholder={t.contact.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3.5 rounded-xl bg-[#0f1525] border text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none transition-colors ${
                      errors.message ? 'border-red-500/80' : 'border-slate-700 focus:border-[#c5a059]'
                    }`}
                  />
                  {errors.message && <p className="text-[10px] text-red-400">{errors.message}</p>}
                </div>

                {/* Checkboxes */}
                <div className="space-y-3 pt-2">
                  
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="requestNda"
                      checked={formData.requestNda}
                      onChange={(e) => setFormData({ ...formData, requestNda: e.target.checked })}
                      className="mt-0.5 rounded border-slate-700 bg-[#0f1525] text-[#c5a059] focus:ring-0"
                    />
                    <span className="text-xs text-slate-200 group-hover:text-white transition-colors">
                      {t.contact.checkboxNda}
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      ref={authorityRef}
                      type="checkbox"
                      name="confirmAuthority"
                      checked={formData.confirmAuthority}
                      onChange={(e) => setFormData({ ...formData, confirmAuthority: e.target.checked })}
                      className="mt-0.5 rounded border-slate-700 bg-[#0f1525] text-[#c5a059] focus:ring-0"
                    />
                    <span className="text-xs text-slate-200 group-hover:text-white transition-colors">
                      {t.contact.checkboxAuthority}
                    </span>
                  </label>
                  {errors.confirmAuthority && (
                    <p className="text-[10px] text-red-400">{errors.confirmAuthority}</p>
                  )}

                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="focus-gold w-full btn-gold py-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-2xl transition-transform active:scale-[0.99]"
                >
                  {isSubmitting ? (
                    <span>{t.contact.submittingBtn}</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" aria-hidden="true" />
                      <span>{t.contact.submitBtn}</span>
                    </>
                  )}
                </button>

                <p aria-live="polite" className="sr-only">
                  {Object.keys(errors).length > 0
                    ? `${Object.keys(errors).length} field(s) require attention`
                    : ''}
                </p>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
