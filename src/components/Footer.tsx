import React from 'react';
import { StudioLogoImg as StudioLogo } from './ImagePlaceholders.tsx';
import { SteamIcon, DiscordIcon, XIcon, YouTubeIcon } from './SocialIcons.tsx';
import { ArrowUp, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050a17] text-slate-400 border-t border-sky-950/80 pt-16 pb-12 relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-sky-950">
          {/* Brand Left */}
          <div className="md:col-span-5 space-y-4">
            <StudioLogo
              size={36}
              showText={true}
              subtitle={language === 'en' ? 'INDIE GAME STUDIO' : '雪落工作室'}
            />
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              {t.footer.bio}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://store.steampowered.com/curator/45366541"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-sky-950/80 hover:bg-sky-900/80 text-slate-300 hover:text-white flex items-center justify-center transition-all border border-sky-900/40 active:scale-95 cursor-pointer"
                aria-label="Steam"
              >
                <SteamIcon size={24} />
              </a>
              <a
                href="https://discord.gg/mDNhRY7zuR"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-sky-950/80 hover:bg-sky-900/80 text-slate-300 hover:text-white flex items-center justify-center transition-all border border-sky-900/40 active:scale-95 cursor-pointer"
                aria-label="Discord"
              >
                <DiscordIcon size={24} />
              </a>
              <a
                href="https://x.com/snownooo_studio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-sky-950/80 hover:bg-sky-900/80 text-slate-300 hover:text-white flex items-center justify-center transition-all border border-sky-900/40 active:scale-95 cursor-pointer"
                aria-label="X (Twitter)"
              >
                <XIcon size={24} />
              </a>
              <a
                href="https://www.youtube.com/@SnownoooStudio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-sky-950/80 hover:bg-sky-900/80 text-slate-300 hover:text-white flex items-center justify-center transition-all border border-sky-900/40 active:scale-95 cursor-pointer"
                aria-label="YouTube"
              >
                <YouTubeIcon size={24} />
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display text-xs font-bold text-white uppercase tracking-widest">
              {t.footer.quickNavTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('hero')}
                  className="hover:text-sky-300 transition-colors cursor-pointer"
                >
                  {t.footer.navHome}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('games')}
                  className="hover:text-sky-300 transition-colors cursor-pointer"
                >
                  {t.footer.navGames}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-sky-300 transition-colors cursor-pointer"
                >
                  {t.footer.navAbout}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-sky-300 transition-colors cursor-pointer"
                >
                  {t.footer.navContact}
                </button>
              </li>
            </ul>
          </div>

          {/* Studio Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-display text-xs font-bold text-white uppercase tracking-widest">
              {t.footer.studioDetailsTitle}
            </h4>
            <div className="text-xs text-slate-400 leading-relaxed space-y-1">
              <p className="font-semibold text-slate-200">{t.footer.studioName}</p>
              <p>{t.footer.soloDevLabel}</p>
              <p>{t.footer.locationLabel}</p>
              <p>
                {t.footer.contactLabel} <a href="mailto:snownooostudio@gmail.com" className="text-sky-300 hover:underline">snownooostudio@gmail.com</a>
              </p>
            </div>
            <div className="pt-2">
              <span className="text-[11px] text-slate-500 block leading-relaxed">
                {t.footer.legalNotice}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} {t.footer.craftedWith}</span>
            <Heart size={13} className="text-rose-400 fill-rose-400 inline" />
            <span>{t.footer.forPlayers}</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-sky-200 transition-colors py-1 px-3 rounded-lg bg-sky-950/40 hover:bg-sky-900/60 border border-sky-800/30 cursor-pointer"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
};
