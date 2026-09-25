import React from 'react';
import { StudioLogoImg as StudioLogo } from './ImagePlaceholders.tsx';
import { Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="py-28 relative overflow-hidden bg-gradient-to-b from-[#091124] via-[#0c1a38] to-[#091124] text-white border-y border-sky-900/30"
      aria-label="About Our Studio"
    >
      {/* Decorative Pastel Geometric & Cloud Elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

      {/* Subtle background cartoon grid / constellation dots */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #38bdf8 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Core Layout: Left Giant Typographic Block | Right Editorial Copy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Monumental Studio Graphic Block */}
          <div className="lg:col-span-6 flex flex-col items-start justify-center">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-sky-500/15 border border-sky-400/30">
              <Sparkles size={13} className="text-sky-300" />
              <span className="text-xs font-bold tracking-widest text-sky-200 uppercase">
                {t.about.welcomeTo}
              </span>
            </div>

            {/* Giant Graphic Studio Typography Block (Pastel Blue & Cream cartoon style) */}
            <div className="relative select-none w-full">
              {/* Massive stylized block letters */}
              <div className="font-display font-black leading-none tracking-tight text-[#fef3c7]">
                <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl drop-shadow-[0_8px_0_rgba(2,132,199,0.5)]">
                  {t.about.studioNameEn1}
                </div>
                <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-200 to-white drop-shadow-[0_8px_0_rgba(14,165,233,0.4)]">
                  {t.about.studioNameEn2}
                </div>
              </div>

              {/* Chinese / Kanji Studio Subtitle (雪落工作室) */}
              <div className="mt-2 text-3xl sm:text-4xl md:text-5xl font-black tracking-widest text-sky-300/80 font-display">
                {t.about.studioNameZh}
              </div>

              {/* Playful cartoon decorative tape / badge */}
              <div className="mt-6 flex items-center gap-3">
                <StudioLogo size={42} showText={false} />
                <span className="text-xs font-bold uppercase tracking-widest text-sky-200/90 bg-sky-950/70 border border-sky-400/40 px-3.5 py-1.5 rounded-full">
                  {t.about.badge}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Company Mission */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              {t.about.p1Part1}
              <strong className="text-sky-300 font-semibold">{t.about.p1Strong}</strong>
              {t.about.p1Part2}
            </p>

            <p className="text-sm sm:text-base text-slate-300/95 leading-relaxed font-normal">
              {t.about.p2Part1}
              <strong className="text-white font-semibold">{t.about.p2Title}</strong>
              {t.about.p2Part2}
            </p>

            {/* Studio Pillars & Highlights */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2">
              <div className="p-3.5 bg-[#0e1b38] rounded-xl border border-sky-900/40">
                <div className="text-xl sm:text-2xl font-bold font-display text-sky-300">{t.about.pillarDebutVal}</div>
                <div className="text-xs text-slate-400 font-medium">{t.about.pillarDebutLabel}</div>
              </div>
              <div className="p-3.5 bg-[#0e1b38] rounded-xl border border-sky-900/40">
                <div className="text-xl sm:text-2xl font-bold font-display text-amber-300">{t.about.pillarSoloVal}</div>
                <div className="text-xs text-slate-400 font-medium">{t.about.pillarSoloLabel}</div>
              </div>
              <div className="p-3.5 bg-[#0e1b38] rounded-xl border border-sky-900/40">
                <div className="text-xl sm:text-2xl font-bold font-display text-cyan-300">{t.about.pillarLocationVal}</div>
                <div className="text-xs text-slate-400 font-medium">{t.about.pillarLocationLabel}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
