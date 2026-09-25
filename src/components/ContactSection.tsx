import React, { useState } from 'react';
import { Mail, CheckCircle2, Copy, Check, Sparkles, Gamepad2, ShieldCheck } from 'lucide-react';
import { SteamIcon, DiscordIcon, XIcon, YouTubeIcon } from './SocialIcons.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [newsletterData, setNewsletterData] = useState({
    name: '',
    email: '',
    role: '',
  });

  const studioEmail = 'snownooostudio@gmail.com';
  const GOOGLE_SHEET_WEBAPP_URL =
    'https://script.google.com/macros/s/AKfycbzEbaxEp2_13Emrao9AfR6m37mkOu4C7GHrO7sxd5qV30kWmWR769A4fx7rYy8bChM2/exec';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(studioEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterData.email) return;

    setIsSubmitting(true);

    try {
      const timestamp = new Date().toISOString();
      const role = newsletterData.role || 'Gamer / Player';
      const name = newsletterData.name.trim();
      const email = newsletterData.email.trim();

      const params = new URLSearchParams();
      // Match exact Row 1 headers: A1: Timestamp, B1: Name, C1: Email, D1: Role
      params.append('Timestamp', timestamp);
      params.append('Name', name);
      params.append('Email', email);
      params.append('Role', role);

      // Lowercase fallbacks in case the Google Apps Script expects lowercase keys
      params.append('timestamp', timestamp);
      params.append('name', name);
      params.append('email', email);
      params.append('role', role);

      await fetch(GOOGLE_SHEET_WEBAPP_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
      });
    } catch (err) {
      console.warn('Newsletter submission notice:', err);
    } finally {
      setIsSubmitting(false);
      setNewsletterSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#080f21] relative overflow-hidden" aria-label="Contact and Newsletter">
      {/* Background Soft Blue Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/25 mb-3">
            <Sparkles size={12} className="text-sky-300" />
            <span className="text-xs font-bold tracking-widest text-sky-300 uppercase">
              {t.contact.badge}
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black tracking-wide text-white uppercase">
            {t.contact.headingPrefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-cyan-200">{t.contact.headingHighlight}</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Content Grid: Left Panels & Newsletter Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Direct Inquiries & Community */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4 h-full">
            {/* Primary Email Card with Quick Copy */}
            <div className="p-5 sm:p-6 bg-[#0f1b38] rounded-2xl border border-sky-800/40 shadow-xl relative overflow-hidden group">
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-300 flex items-center justify-center border border-sky-400/30">
                  <Mail size={20} />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-sky-950/80 hover:bg-sky-900 text-sky-200 border border-sky-700/50 transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={13} className="text-emerald-400" />
                      <span className="text-emerald-400 font-bold">{t.contact.copied}</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>{t.contact.copy}</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-3.5">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-400">{t.contact.emailLabel}</span>
                <a
                  href={`mailto:${studioEmail}`}
                  className="block mt-1 font-display text-lg sm:text-xl font-bold text-white hover:text-sky-300 transition-colors break-all"
                >
                  {studioEmail}
                </a>
                <p className="mt-1 text-xs text-slate-400">
                  {t.contact.emailDesc}
                </p>
              </div>
            </div>

            {/* Inquiries Division Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-[#0d172e] rounded-xl border border-sky-900/40 flex flex-col justify-between">
                <div className="flex items-center gap-2 text-sky-300 mb-1">
                  <Gamepad2 size={16} />
                  <span className="text-xs font-bold uppercase tracking-wider">{t.contact.reviewKeysTitle}</span>
                </div>
                <p className="text-xs text-slate-300">
                  {t.contact.reviewKeysDesc}
                </p>
              </div>

              <div className="p-4 bg-[#0d172e] rounded-xl border border-sky-900/40 flex flex-col justify-between">
                <div className="flex items-center gap-2 text-cyan-300 mb-1">
                  <ShieldCheck size={16} />
                  <span className="text-xs font-bold uppercase tracking-wider">{t.contact.supportTitle}</span>
                </div>
                <p className="text-xs text-slate-300">
                  {t.contact.supportDesc}
                </p>
              </div>
            </div>

            {/* Social & Community Hub */}
            <div className="p-5 sm:p-6 bg-[#0f1b38]/70 rounded-2xl border border-sky-900/40 flex-1 flex flex-col justify-center">
              <div className="mb-3">
                <span className="text-sm font-display font-black uppercase tracking-wider text-white block">
                  {t.contact.connectTitle}
                </span>
                <p className="text-xs text-slate-400 mt-0.5">
                  {t.contact.connectDesc}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                <a
                  href="https://store.steampowered.com/curator/45366541"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center group cursor-pointer"
                >
                  <div
                    className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-[#070e1f] hover:bg-sky-950/80 border border-slate-800 hover:border-sky-400/50 text-slate-200 hover:text-white transition-all shadow-md group-hover:scale-105"
                    style={{
                      clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)',
                    }}
                  >
                    <SteamIcon size={30} className="group-hover:text-sky-300 transition-colors" />
                  </div>
                  <span className="text-[11px] font-display font-bold tracking-wider uppercase text-slate-400 group-hover:text-sky-300 mt-2">
                    STEAM
                  </span>
                </a>

                <a
                  href="https://discord.gg/mDNhRY7zuR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center group cursor-pointer"
                >
                  <div
                    className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-[#070e1f] hover:bg-indigo-950/80 border border-slate-800 hover:border-indigo-400/50 text-slate-200 hover:text-white transition-all shadow-md group-hover:scale-105"
                    style={{
                      clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)',
                    }}
                  >
                    <DiscordIcon size={30} className="group-hover:text-indigo-300 transition-colors" />
                  </div>
                  <span className="text-[11px] font-display font-bold tracking-wider uppercase text-slate-400 group-hover:text-indigo-300 mt-2">
                    DISCORD
                  </span>
                </a>

                <a
                  href="https://x.com/snownooo_studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center group cursor-pointer"
                >
                  <div
                    className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-[#070e1f] hover:bg-sky-950/80 border border-slate-800 hover:border-sky-400/50 text-slate-200 hover:text-white transition-all shadow-md group-hover:scale-105"
                    style={{
                      clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)',
                    }}
                  >
                    <XIcon size={28} className="group-hover:text-sky-300 transition-colors" />
                  </div>
                  <span className="text-[11px] font-display font-bold tracking-wider uppercase text-slate-400 group-hover:text-sky-300 mt-2">
                    TWITTER
                  </span>
                </a>

                <a
                  href="https://www.youtube.com/@SnownoooStudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center group cursor-pointer"
                >
                  <div
                    className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-[#070e1f] hover:bg-rose-950/80 border border-slate-800 hover:border-rose-400/50 text-slate-200 hover:text-white transition-all shadow-md group-hover:scale-105"
                    style={{
                      clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)',
                    }}
                  >
                    <YouTubeIcon size={30} className="group-hover:text-rose-400 transition-colors" />
                  </div>
                  <span className="text-[11px] font-display font-bold tracking-wider uppercase text-slate-400 group-hover:text-rose-400 mt-2">
                    YOUTUBE
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Sign Up To Newsletter */}
          <div className="lg:col-span-7 bg-[#0b152d] p-6 sm:p-8 lg:p-10 rounded-2xl border border-sky-800/40 shadow-2xl relative overflow-hidden flex flex-col justify-between h-full">
            {/* Soft Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

            {newsletterSubmitted ? (
              <div className="my-auto py-12 px-4 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/40 shadow-lg shadow-emerald-500/20">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="font-display text-3xl font-black text-white uppercase tracking-wider">
                  {t.contact.successTitle}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 max-w-md mx-auto leading-relaxed">
                  {t.contact.successDescPrefix}
                  <span className="text-sky-300 font-semibold">{newsletterData.email}</span>
                  {t.contact.successDescSuffix}
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setNewsletterData({ name: '', email: '', role: '' });
                      setNewsletterSubmitted(false);
                    }}
                    className="px-6 py-2.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-display text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    {t.contact.subscribeAnother}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col justify-between h-full space-y-6 relative z-10">
                <div>
                  <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
                    {t.contact.newsletterTitle}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300/90 leading-relaxed max-w-xl">
                    {t.contact.newsletterSubtitle}
                  </p>
                </div>

                <div className="space-y-4">
                  {/* YOUR NAME */}
                  <div>
                    <label className="block text-xs font-display font-black uppercase tracking-widest text-slate-200 mb-2">
                      {t.contact.nameLabel}
                    </label>
                    <input
                      type="text"
                      placeholder={t.contact.namePlaceholder}
                      value={newsletterData.name}
                      onChange={(e) => setNewsletterData({ ...newsletterData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-md bg-[#070e1f] border border-sky-900/60 focus:border-sky-400 focus:outline-none text-sm text-white placeholder-slate-500 tracking-wider transition-colors"
                    />
                  </div>

                  {/* EMAIL ADDRESS * */}
                  <div>
                    <label className="block text-xs font-display font-black uppercase tracking-widest text-slate-200 mb-2">
                      {t.contact.emailInputLabel}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={t.contact.emailPlaceholder}
                      value={newsletterData.email}
                      onChange={(e) => setNewsletterData({ ...newsletterData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-md bg-[#070e1f] border border-sky-900/60 focus:border-sky-400 focus:outline-none text-sm text-white placeholder-slate-500 tracking-wider transition-colors"
                    />
                  </div>

                  {/* I'M A... */}
                  <div>
                    <label className="block text-xs font-display font-black uppercase tracking-widest text-slate-200 mb-2">
                      {t.contact.roleLabel}
                    </label>
                    <div className="relative">
                      <select
                        value={newsletterData.role}
                        onChange={(e) => setNewsletterData({ ...newsletterData, role: e.target.value })}
                        className="w-full px-4 py-3 rounded-md bg-[#070e1f] border border-sky-900/60 focus:border-sky-400 focus:outline-none text-sm text-white transition-colors cursor-pointer appearance-none uppercase tracking-wider"
                      >
                        <option value="" className="bg-[#070e1f] text-slate-400">{t.contact.roleSelectPlaceholder}</option>
                        <option value="Gamer / Player" className="bg-[#070e1f] text-white">{t.contact.roles.player}</option>
                        <option value="Content Creator / Streamer" className="bg-[#070e1f] text-white">{t.contact.roles.creator}</option>
                        <option value="Journalist / Press" className="bg-[#070e1f] text-white">{t.contact.roles.press}</option>
                        <option value="Game Developer" className="bg-[#070e1f] text-white">{t.contact.roles.developer}</option>
                        <option value="Industry Partner" className="bg-[#070e1f] text-white">{t.contact.roles.partner}</option>
                        <option value="Other" className="bg-[#070e1f] text-white">{t.contact.roles.other}</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SIGN UP BUTTON */}
                <div className="pt-2 flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-14 py-3.5 bg-[#fef3c7] hover:bg-white text-slate-950 font-display text-sm font-black uppercase tracking-widest shadow-xl transition-all active:scale-95 cursor-pointer disabled:opacity-50"
                    style={{
                      clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)',
                    }}
                  >
                    {isSubmitting ? t.contact.submittingButton : t.contact.submitButton}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
