import React, { useState } from 'react';
import { GameItem } from '../data/gamesData.ts';
import { StudioLogoImg } from './ImagePlaceholders.tsx';

// Studio Mascot Logo: Now renders from /public/images/logo.png with clean fallback
export const StudioLogo = StudioLogoImg;

// Game Banner / Card Image Placeholder: Loads from user's PNG (e.g. game.imagePath)
// with customizable placeholder styling so they can easily swap the PNG file.
export const GameImagePlaceholder: React.FC<{
  game: GameItem;
  className?: string;
  showOverlayTitle?: boolean;
}> = ({ game, className = '', showOverlayTitle = true }) => {
  const [imgSrc, setImgSrc] = useState<string>(game.imagePath);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(game.placeholderFallback);
    }
  };

  return (
    <div className={`relative w-full h-full overflow-hidden bg-slate-900 group select-none ${className}`}>
      {/* Real Image Placeholder (Loads from /public/images/games/<id>.png) */}
      <img
        src={imgSrc}
        alt={game.title}
        onError={handleError}
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
        loading="lazy"
      />

      {/* Atmospheric lighting gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1329]/90 via-transparent to-transparent pointer-events-none" />

      {/* Optional Title Overlay */}
      {showOverlayTitle && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none">
          <div className="text-center group-hover:scale-105 transition-transform duration-300">
            <div className="inline-block bg-slate-950/75 backdrop-blur-sm px-4 py-1.5 rounded-full border border-sky-400/40 shadow-lg">
              <span className="font-display text-xl sm:text-2xl font-bold tracking-wide text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                {game.title.split(':')[0]}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Full Hero Background Image Placeholder:
// Loads directly from /public/images/hero-bg.png (or game.heroBgPath)
export const HeroImagePlaceholder: React.FC<{
  game: GameItem;
  className?: string;
}> = ({ game, className = '' }) => {
  const initialSrc = game.heroBgPath || '/images/hero-bg.png';
  const [imgSrc, setImgSrc] = useState<string>(initialSrc);

  // Update src when game changes
  React.useEffect(() => {
    setImgSrc(game.heroBgPath || '/images/hero-bg.png');
  }, [game]);

  return (
    <div className={`relative w-full h-full overflow-hidden select-none bg-[#091326] ${className}`}>
      {/* Hero Background Image */}
      <img
        src={imgSrc}
        alt={game.title}
        onError={() => {
          if (imgSrc !== game.placeholderFallback && game.placeholderFallback) {
            setImgSrc(game.placeholderFallback);
          }
        }}
        className="w-full h-full object-cover object-center transition-all duration-500 ease-out"
      />

      {/* Gentle top gradient so header navbar is always legible */}
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#091124]/80 via-[#091124]/30 to-transparent pointer-events-none" />

      {/* Gentle bottom gradient to seamlessly blend into the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a1226] via-[#0a1226]/60 to-transparent pointer-events-none" />
    </div>
  );
};
