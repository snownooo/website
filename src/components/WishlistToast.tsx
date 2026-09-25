import React from 'react';
import { GameItem } from '../data/gamesData.ts';
import { SteamIcon } from './SocialIcons.tsx';
import { CheckCircle2, X, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

interface WishlistToastProps {
  game: GameItem | null;
  onClose: () => void;
}

export const WishlistToast: React.FC<WishlistToastProps> = ({ game, onClose }) => {
  const { t } = useLanguage();

  if (!game) return null;

  const isPrizeDenied = game.id === 'prize-denied';
  const displayTitle = isPrizeDenied ? t.prizeDenied.title : game.title;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-[#0c1833] border-2 border-sky-400/50 rounded-2xl shadow-2xl p-4 text-white animate-in slide-in-from-bottom-5 duration-300">
      <div className="flex items-start justify-between gap-3">
        <div className="w-11 h-11 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 border border-sky-400/30 shadow-lg shadow-sky-500/20">
          <SteamIcon size={26} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 text-xs font-bold text-sky-300 uppercase tracking-wider">
            <CheckCircle2 size={13} className="text-emerald-400" />
            <span>{t.toast.wishlisted}</span>
          </div>
          <p className="font-display font-bold text-sm text-white truncate mt-0.5">
            {displayTitle}
          </p>
          <p className="text-[11px] text-slate-300 mt-0.5">
            {t.toast.toastDesc}
          </p>
        </div>

        <button
          onClick={onClose}
          className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-900 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X size={15} />
        </button>
      </div>

      <div className="mt-3 pt-2.5 border-t border-sky-900/40 flex items-center justify-between text-xs">
        <span className="text-[11px] text-slate-400">{t.toast.supportText}</span>
        <a
          href="https://store.steampowered.com/app/3424940/_/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sky-300 hover:text-white font-bold transition-colors"
        >
          <span>{t.toast.viewOnSteam}</span>
          <ExternalLink size={12} />
        </a>
      </div>
    </div>
  );
};
