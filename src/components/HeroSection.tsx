import React, { useState } from 'react';
import { GAMES_DATA, GameItem } from '../data/gamesData.ts';
import { HeroImagePlaceholder } from './GameImagePlaceholder.tsx';
import { SteamIcon } from './SocialIcons.tsx';
import { Play, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface HeroSectionProps {
  onWishlistClick: (game: GameItem) => void;
  onExploreGames?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onWishlistClick,
}) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const currentGame = GAMES_DATA[0];

  const handleWishlist = () => {
    // Trigger celebratory skyblue confetti
    confetti({
      particleCount: 80,
      spread: 65,
      origin: { y: 0.8 },
      colors: ['#38bdf8', '#0284c7', '#7dd3fc', '#bae6fd', '#e0f2fe', '#ffffff'],
    });

    setIsWishlisted(true);
    onWishlistClick(currentGame);

    // Redirect to Steam page directly
    window.open('https://store.steampowered.com/app/3424940/_/', '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[600px] flex items-end justify-center overflow-hidden bg-[#070e20]"
      aria-label="Featured Game Showcase"
    >
      {/* Background Image (Loads /public/images/hero-bg.png) */}
      <div className="absolute inset-0 w-full h-full">
        <HeroImagePlaceholder game={currentGame} className="w-full h-full" />
      </div>

      {/* Main Center Content: Skyblue Theme Wishlist Now Button */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center pb-20 sm:pb-24">
        {/* Skyblue Themed WISHLIST NOW Button Block */}
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
          className="flex items-stretch shadow-2xl shadow-sky-500/30 rounded-xl overflow-hidden border-2 border-sky-300/70 bg-[#071329]/90 backdrop-blur-md transition-all duration-300 hover:border-sky-200 hover:shadow-sky-400/40 hover:scale-[1.02] active:scale-98 cursor-pointer group select-none"
        >
          {/* Rotating star left block (replaced left arrow) */}
          <div className="bg-[#0b1c3a] px-4 sm:px-5 flex items-center justify-center border-r border-sky-400/40 group-hover:bg-[#0f244a] transition-colors">
            <Sparkles className="w-5 h-5 text-sky-300 animate-spin" style={{ animationDuration: '6s' }} />
          </div>

          {/* Skyblue Wishlist Now core button */}
          <div
            className="bg-gradient-to-r from-sky-400 via-sky-300 to-cyan-300 group-hover:from-sky-300 group-hover:to-white text-slate-950 font-display text-sm sm:text-base md:text-lg font-black tracking-widest uppercase px-8 sm:px-14 py-3.5 sm:py-4 transition-all duration-200 flex items-center justify-center shadow-inner"
          >
            <span className="drop-shadow-sm font-extrabold">{isWishlisted ? 'WISHLISTED ON STEAM' : 'WISHLIST NOW'}</span>
          </div>

          {/* Steam Logo right block */}
          <div className="bg-[#0b1c3a] px-4 sm:px-5 flex items-center justify-center border-l border-sky-400/40 group-hover:bg-[#0f244a] transition-colors">
            <SteamIcon size={32} className="text-sky-200 group-hover:text-white transition-colors" />
          </div>
        </div>
      </div>

      {/* Subtle Bottom Scroll Hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 opacity-80 hover:opacity-100 transition-opacity pointer-events-none">
        <span className="text-[10px] tracking-widest uppercase text-sky-200 font-bold drop-shadow">Scroll to explore</span>
        <div className="w-4 h-7 rounded-full border-2 border-sky-300 flex justify-center p-1 bg-sky-950/40 backdrop-blur-[2px]">
          <div className="w-1 h-2 bg-sky-300 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};
