import React, { useEffect } from 'react';
import { GameItem } from '../data/gamesData.ts';
import { GameImagePlaceholder } from './GameImagePlaceholder.tsx';
import { SteamIcon } from './SocialIcons.tsx';
import { X, Sparkles, Check, Heart, ExternalLink, Calendar, Building, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

interface GameDetailModalProps {
  game: GameItem | null;
  onClose: () => void;
  onWishlist: (game: GameItem) => void;
}

export const GameDetailModal: React.FC<GameDetailModalProps> = ({
  game,
  onClose,
  onWishlist,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (game) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [game, onClose]);

  if (!game) return null;

  const handleWishlistClick = () => {
    confetti({
      particleCount: 60,
      spread: 55,
      origin: { y: 0.7 },
      colors: ['#38bdf8', '#0284c7', '#7dd3fc', '#bae6fd', '#ffffff'],
    });
    onWishlist(game);
    window.open('https://store.steampowered.com/app/3424940/_/', '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0c1833] border border-sky-800/50 rounded-2xl shadow-2xl text-white animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-950/80 hover:bg-slate-900 text-slate-400 hover:text-white border border-sky-800/40 transition-colors"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Banner Image Placeholder */}
        <div className="relative aspect-video w-full overflow-hidden bg-slate-900 border-b border-sky-900/40">
          <GameImagePlaceholder game={game} className="w-full h-full" showOverlayTitle={false} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1833] via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Content Details */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-widest mb-1.5">
              <span>{game.genre}</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-wide text-white">
              {game.title}
            </h2>
          </div>

          {/* Description */}
          <div className="space-y-3 text-sm text-slate-300 leading-relaxed border-t border-sky-900/40 pt-4">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">
              About The Game
            </h4>
            <div className="whitespace-pre-line text-slate-300 leading-relaxed space-y-2">{game.fullDesc}</div>
          </div>

          {/* Key Features */}
          <div className="space-y-2 border-t border-sky-900/40 pt-4">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-2">
              Key Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {game.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 bg-[#081126] p-2.5 rounded-lg border border-sky-950">
                  <Check size={14} className="text-sky-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Meta Grid: Release date, Developer, Publisher, Platforms */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#081126] p-4 rounded-xl border border-sky-950 text-xs">
            <div>
              <span className="text-slate-400 block mb-0.5">Release Status</span>
              <span className="font-bold text-white flex items-center gap-1">
                <Calendar size={12} className="text-sky-400" />
                {game.releaseDate}
              </span>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5">Developer</span>
              <span className="font-bold text-white">{game.developer}</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5">Publisher</span>
              <span className="font-bold text-white">{game.publisher}</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5">Platform</span>
              <a
                href="https://store.steampowered.com/app/3424940/_/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-1 text-xs font-bold text-sky-300 hover:text-white transition-colors"
              >
                <SteamIcon size={18} />
                <span>Steam</span>
              </a>
            </div>
          </div>

          {/* Bottom Action Wishlist CTA */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-sky-900/40">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Sparkles size={14} className="text-amber-300" />
              <span>Wishlisting on Steam greatly supports us!</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={handleWishlistClick}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-400 via-sky-300 to-cyan-300 hover:from-sky-300 hover:to-white text-slate-950 font-display text-xs font-black uppercase tracking-widest shadow-lg shadow-sky-500/30 transition-all active:scale-95 cursor-pointer"
              >
                <SteamIcon size={24} />
                <span>Wishlist on Steam</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
