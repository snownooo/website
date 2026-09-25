import React from 'react';
import { GAMES_DATA, GameItem } from '../data/gamesData.ts';
import { GameImagePlaceholder } from './GameImagePlaceholder.tsx';
import { SteamIcon } from './SocialIcons.tsx';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

interface OurGamesSectionProps {
  onSelectGame: (game: GameItem) => void;
  onWishlistGame: (game: GameItem) => void;
}

export const OurGamesSection: React.FC<OurGamesSectionProps> = ({
  onSelectGame,
  onWishlistGame,
}) => {
  const { t } = useLanguage();
  const rawGame = GAMES_DATA[0];

  const localizedGame: GameItem = {
    ...rawGame,
    title: t.prizeDenied.title,
    subtitle: t.prizeDenied.subtitle,
    genre: t.prizeDenied.genre,
    shortDesc: t.prizeDenied.shortDesc,
    fullDesc: t.prizeDenied.fullDesc,
    releaseDate: t.prizeDenied.releaseDate,
    developer: t.prizeDenied.developer,
    publisher: t.prizeDenied.publisher,
    features: t.prizeDenied.features,
    tags: t.prizeDenied.tags,
  };

  return (
    <section id="games" className="py-24 bg-[#0a1226] relative overflow-hidden" aria-label="Our Games">
      {/* Background ambient pastel blue glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-sky-900/30 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-3 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-xs font-bold tracking-widest text-sky-400 uppercase">
                {t.games.badge}
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black tracking-wide text-white uppercase">
              {t.games.headingPrefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-cyan-200">{t.games.headingHighlight}</span>
            </h2>
            <p className="mt-2 text-sm text-slate-300 max-w-xl">
              {t.games.subtitle}
            </p>
          </div>
        </div>

        {/* Featured Single Game Showcase Card */}
        <div className="max-w-3xl mx-auto">
          <article
            onClick={() => onSelectGame(localizedGame)}
            className="group cursor-pointer flex flex-col bg-[#0f1b38]/80 hover:bg-[#132247] rounded-2xl overflow-hidden border border-sky-900/50 hover:border-sky-400/60 shadow-2xl hover:shadow-sky-950/70 transition-all duration-300"
          >
            {/* Card Image Banner (16:9 Placeholder: uses user's hero-bg.png / prize-denied art) */}
            <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
              <GameImagePlaceholder
                game={localizedGame}
                className="w-full h-full"
                showOverlayTitle={false}
              />

              {/* Release status indicator */}
              <div className="absolute top-4 right-4 z-10">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md text-sky-200 border border-sky-500/40 shadow-lg">
                  <Sparkles size={12} className="text-amber-300" />
                  {localizedGame.releaseDate}
                </span>
              </div>

              {/* Quick view button overlay */}
              <div className="absolute inset-0 bg-sky-950/40 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-opacity duration-200 flex items-center justify-center">
                <span className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 text-white font-display text-xs font-bold uppercase tracking-wider shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  {t.games.viewDetails}
                  <ArrowUpRight size={15} />
                </span>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-sky-300 uppercase tracking-widest">
                    {localizedGame.genre}
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-sky-300 transition-colors tracking-wide uppercase">
                  {localizedGame.title}
                </h3>

                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  {localizedGame.shortDesc}
                </p>
              </div>

              {/* Bottom Platform Icons & Wishlist (Skyblue Theme) */}
              <div className="mt-6 pt-5 border-t border-sky-900/40 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <a
                    href="https://store.steampowered.com/app/3424940/_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    title={t.games.availableOnSteam}
                    className="w-11 h-11 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 flex items-center justify-center shadow-lg shadow-sky-500/25 transition-colors cursor-pointer"
                  >
                    <SteamIcon size={26} />
                  </a>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onWishlistGame(localizedGame);
                    window.open('https://store.steampowered.com/app/3424940/_/', '_blank', 'noopener,noreferrer');
                  }}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-400 to-cyan-300 hover:from-sky-300 hover:to-white text-slate-950 font-display text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-sky-500/25 active:scale-95 cursor-pointer"
                >
                  <span>{t.games.wishlistOnSteam}</span>
                  <ArrowUpRight size={15} />
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
