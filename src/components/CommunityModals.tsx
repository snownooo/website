import React, { useEffect } from 'react';
import { SteamIcon, DiscordIcon } from './SocialIcons.tsx';
import { X, ExternalLink, Users, Gamepad2, Sparkles, MessageCircle, Heart } from 'lucide-react';
import { StudioLogoImg as StudioLogo } from './ImagePlaceholders.tsx';

interface CommunityModalProps {
  type: 'steam' | 'discord' | null;
  onClose: () => void;
}

export const CommunityModal: React.FC<CommunityModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (type) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-[#0c1833] border border-sky-800/50 rounded-2xl shadow-2xl p-6 text-white animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-900 transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {type === 'steam' ? (
          <div className="space-y-5 text-center">
            <div className="w-16 h-16 rounded-2xl bg-sky-500/20 text-sky-400 mx-auto flex items-center justify-center border border-sky-400/30 shadow-lg shadow-sky-500/20">
              <SteamIcon size={48} />
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-white">
                Snownooo Studio on Steam
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Follow our official Steam Developer & Creator Hub to receive immediate notifications when new demos, playtests, and releases go live!
              </p>
            </div>

            <div className="p-4 bg-[#081126] rounded-xl border border-sky-950 text-left space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2 text-sky-300">
                <Gamepad2 size={15} />
                <span className="font-bold">PRIZE DENIED · Cozy-Evil Roguelike (Target Release: Q2 2027)</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-300">
                <Sparkles size={15} />
                <span className="font-bold">50+ Rigged Prizes, Shady Cards & Boss Customers</span>
              </div>
              <div className="flex items-center gap-2 text-sky-200">
                <Heart size={15} />
                <span className="font-bold">Wishlist Now to Support Our Indie Journey</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href="https://store.steampowered.com/app/3424940/_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-sky-400 via-sky-300 to-cyan-300 hover:from-sky-300 hover:to-white text-slate-950 font-display text-xs font-black uppercase tracking-wider shadow-lg shadow-sky-500/25 transition-all"
              >
                <span>Wishlist PRIZE DENIED on Steam</span>
                <ExternalLink size={14} />
              </a>
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs text-slate-400 hover:text-white transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-5 text-center">
            <div className="w-16 h-16 rounded-2xl bg-indigo-600/20 text-indigo-400 mx-auto flex items-center justify-center border border-indigo-500/30">
              <DiscordIcon size={48} />
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-white">
                Join Snownooo Studio Discord Hub
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Hang out with our solo developer, share your claw machine setups, discover secret card combos, and participate in closed beta playtests!
              </p>
            </div>

            <div className="p-4 bg-[#081126] rounded-xl border border-sky-950 text-left space-y-2 text-xs text-slate-300">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Community Members:</span>
                <span className="font-bold text-white flex items-center gap-1">
                  <Users size={13} className="text-sky-400" />
                  15,480+ Online
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Dev Q&A Sessions:</span>
                <span className="font-bold text-emerald-400">Weekly Live Streams</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Playtest Keys:</span>
                <span className="font-bold text-amber-300">Available in #announcements</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href="https://discord.gg/mDNhRY7zuR"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-display text-xs font-bold uppercase tracking-wider shadow-lg shadow-indigo-950/60 transition-colors"
              >
                <span>Join Discord Community</span>
                <ExternalLink size={14} />
              </a>
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs text-slate-400 hover:text-white transition-colors"
              >
                Maybe Later
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
