import React from 'react';

// Studio logo image with fallback
export const StudioLogoImg: React.FC<{
  size?: number;
  showText?: boolean;
  subtitle?: string;
  className?: string;
}> = ({
  size = 40,
  showText = true,
  subtitle = 'INDIE GAME STUDIO',
  className = '',
}) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <div
        style={{ width: size, height: size }}
        className="relative flex items-center justify-center shrink-0"
      >
        <img
          src="/images/logo.png"
          alt="Snownooo Studio Logo"
          className="w-full h-full object-contain"
          onError={(e) => {
            // When user hasn't added custom file, graceful fallback image
            const target = e.currentTarget;
            target.onerror = null;
            target.src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=80';
          }}
        />
      </div>

      {showText && (
        <div className="flex flex-col justify-center">
          <span className="font-display text-xl sm:text-[22px] font-bold tracking-wider text-white drop-shadow-sm leading-tight">
            SNOW<span className="text-sky-300">NOOO</span>
          </span>
          <span className="text-[13px] font-bold tracking-wider text-sky-200 mt-0.5 leading-tight uppercase">
            {subtitle}
          </span>
        </div>
      )}
    </div>
  );
};

// Social icon component that renders PNG images from /public/images/icons/<name>.png
export const ImageIcon: React.FC<{
  name: 'steam' | 'discord' | 'x' | 'youtube' | 'epic' | 'switch';
  size?: number;
  className?: string;
  alt?: string;
}> = ({ name, size = 20, className = '', alt }) => {
  const iconSrc = `/images/icons/${name}.png`;

  // Pre-configured online fallback icons if the user hasn't put local files yet
  const fallbacks: Record<string, string> = {
    steam: 'https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/steam.png',
    discord: 'https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/discord.png',
    x: 'https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/twitter.png',
    youtube: 'https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/youtube.png',
    epic: 'https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/epic-games.png',
    switch: 'https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/nintendo-switch.png',
  };

  return (
    <img
      src={iconSrc}
      alt={alt || `${name} icon`}
      style={{ width: size, height: size }}
      className={`object-contain inline-block shrink-0 ${className}`}
      onError={(e) => {
        const target = e.currentTarget;
        if (target.src !== fallbacks[name]) {
          target.src = fallbacks[name];
        }
      }}
    />
  );
};
