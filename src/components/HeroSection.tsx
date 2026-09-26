import React, { useState } from 'react';
import { GAMES_DATA, GameItem } from '../data/gamesData.ts';
import { SteamIcon } from './SocialIcons.tsx';
import { Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext.tsx';

interface HeroSectionProps {
  onWishlistClick: (game: GameItem) => void;
  onExploreGames?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onWishlistClick,
}) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  // language will be 'en' | 'zh-Hant' | 'zh-Hans'
  const { t, language } = useLanguage();
  const currentGame = GAMES_DATA[0];

  // Map the language directly to your images in /public/images/
  const getHeroBg = () => {
    switch (language) {
      case 'zh-Hans':
        return '/images/hero-bg-schin.png';
      case 'zh-Hant':
        return '/images/hero-bg-tchin.png';
      case 'en':
      default:
        return '/images/hero-bg.png';
    }
  };

  const handleWishlist = () => {
    confetti({
      particleCount: 80,
      spread: 65,
      origin: { y: 0.8 },
      colors: ['#38bdf8', '#0284c7', '#7dd3fc', '#bae6fd', '#e0f2fe', '#ffffff'],
    });

    setIsWishlisted(true);
    onWishlistClick(currentGame);

    window.open('https://store.steampowered.com/app/3424940/_/', '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[600px] flex items-end justify-center overflow-hidden bg-[#070e20]"
      aria-label="Featured Game Showcase"
    >
      {/* Dynamic Background Image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
        <img
          key={language} /* Forces a clean fade/render transition when language changes */
          src={getHeroBg()}
          alt="Prize Denied Hero Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Readability gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070e20] via-transparent to-black/30" />
      </div>

      {/* Main Center Content: Wishlist Button */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center pb-20 sm:pb-24">
        <div 
          onClick={handleWishlist}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleWishlist();
            }
          }}
          className="flex items-stretch shadow-2xl shadow-sky-500/35 rounded-xl overflow-hidden border-2 border-sky-300/80 bg-[#071329]/95 backdrop-blur-md transition-all duration-300 hover:border-sky-200 hover:shadow-sky-400/50 hover:scale-[1.02] active:scale-98 cursor-pointer group select-none ring-1 ring-sky-300/40"
        >
          {/* Rotating star left block */}
          <div className="bg-[#0b1c3a] px-4 sm:px-5 flex items-center justify-center border-r border-sky-400/40 group-hover:bg-[#0f244a] transition-colors">
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-sky-300 animate-spin" style={{ animationDuration: '6s' }} />
          </div>

          {/* Button Text */}
          <div
            className="bg-gradient-to-r from-sky-400 via-sky-300 to-cyan-300 group-hover:from-sky-300 group-hover:via-sky-200 group-hover:to-cyan-200 font-display text-base sm:text-lg md:text-xl font-black tracking-wider uppercase px-8 sm:px-14 py-4 sm:py-4.5 transition-all duration-200 flex items-center justify-center shadow-inner"
          >
            <span
              className="font-black text-white tracking-widest"
              style={{
                textShadow: '0 1px 2px rgba(3, 44, 90, 0.95), 0 2px 6px rgba(2, 40, 80, 0.8), 0 0 1px rgba(0, 0, 0, 0.9)',
              }}
            >
              {isWishlisted ? t.hero.wishlistedOnSteam : t.hero.wishlistNow}
            </span>
          </div>

          {/* Steam Logo right block */}
          <div className="bg-[#0b1c3a] px-4 sm:px-5 flex items-center justify-center border-l border-sky-400/40 group-hover:bg-[#0f244a] transition-colors">
            <SteamIcon size={32} className="text-white group-hover:text-sky-200 transition-colors drop-shadow" />
          </div>
        </div>
      </div>

      {/* Subtle Bottom Scroll Hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 opacity-80 hover:opacity-100 transition-opacity pointer-events-none">
        <span className="text-[10px] tracking-widest uppercase text-sky-200 font-bold drop-shadow">{t.hero.scrollToExplore}</span>
        <div className="w-4 h-7 rounded-full border-2 border-sky-300 flex justify-center p-1 bg-sky-950/40 backdrop-blur-[2px]">
          <div className="w-1 h-2 bg-sky-300 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};