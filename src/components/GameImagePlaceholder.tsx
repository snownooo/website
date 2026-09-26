import React, { useState } from 'react';
import { GameItem } from '../data/gamesData.ts';
import { useLanguage } from '../context/LanguageContext.tsx';

interface GameImagePlaceholderProps {
  game: GameItem;
  className?: string;
  showOverlayTitle?: boolean;
}

export const GameImagePlaceholder: React.FC<GameImagePlaceholderProps> = ({
  game,
  className = '',
  showOverlayTitle = false,
}) => {
  const { language } = useLanguage();
  const [imageError, setImageError] = useState(false);

  // Pick localized image first, fallback to imagePath / heroBgPath / fallback
  const imageSrc =
    game.localizedHeroImages?.[language] ||
    game.imagePath ||
    game.heroBgPath ||
    game.placeholderFallback ||
    '/images/hero-bg.png';

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!imageError ? (
        <img
          key={imageSrc}
          src={imageSrc}
          alt={game.title}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="w-full h-full bg-[#0a152d] flex items-center justify-center text-slate-500 text-sm">
          <span>{game.title}</span>
        </div>
      )}

      {showOverlayTitle && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
          <span className="font-bold text-white text-base">{game.title}</span>
        </div>
      )}
    </div>
  );
};

export const HeroImagePlaceholder: React.FC<{ game: GameItem; className?: string }> = ({
  game,
  className = '',
}) => {
  return <GameImagePlaceholder game={game} className={className} showOverlayTitle={false} />;
};