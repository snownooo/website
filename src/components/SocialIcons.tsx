import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
  alt?: string;
}

// Helper component that loads `/images/icons/<name>.png` and falls back if not yet replaced
const RenderPngIcon: React.FC<{
  name: string;
  defaultSrc: string;
  fallbackSvg: React.ReactNode;
  size?: number;
  className?: string;
  alt: string;
}> = ({ name, defaultSrc, fallbackSvg, size = 30, className = '', alt }) => {
  const [useFallback, setUseFallback] = React.useState(false);

  if (useFallback) {
    return <span style={{ width: size, height: size }} className={`inline-flex items-center justify-center ${className}`}>{fallbackSvg}</span>;
  }

  return (
    <img
      src={`/images/icons/${name}.png`}
      alt={alt}
      style={{ width: size, height: size }}
      className={`object-contain inline-block shrink-0 ${className}`}
      onError={(e) => {
        const target = e.currentTarget;
        if (target.src !== defaultSrc) {
          target.src = defaultSrc;
        } else {
          setUseFallback(true);
        }
      }}
    />
  );
};

// Steam Icon: Replaces from /public/images/icons/steam.png
export const SteamIcon: React.FC<IconProps> = ({ size = 30, className = '', alt = 'Steam' }) => (
  <RenderPngIcon
    name="steam"
    defaultSrc="https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/steam.png"
    size={size}
    className={className}
    alt={alt}
    fallbackSvg={
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.44 8.87 8 9.8v-6.94l-2.3-1.63a2.7 2.7 0 0 1-1.12-2.18c0-1.52 1.23-2.75 2.75-2.75.98 0 1.84.52 2.32 1.3l3.22-2.27A5.95 5.95 0 0 1 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6c-.34 0-.67-.03-1-.09V21.8c.33.03.66.05 1 .05 5.52 0 10-4.48 10-10S17.52 2 12 2zm-2.67 8.25c-.73 0-1.33.6-1.33 1.33 0 .73.6 1.33 1.33 1.33.73 0 1.33-.6 1.33-1.33 0-.73-.6-1.33-1.33-1.33zm6.67 3.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
      </svg>
    }
  />
);

// Discord Icon: Replaces from /public/images/icons/discord.png
export const DiscordIcon: React.FC<IconProps> = ({ size = 30, className = '', alt = 'Discord' }) => (
  <RenderPngIcon
    name="discord"
    defaultSrc="https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/discord.png"
    size={size}
    className={className}
    alt={alt}
    fallbackSvg={
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    }
  />
);

// X (formerly Twitter) Icon: Replaces from /public/images/icons/x.png
export const XIcon: React.FC<IconProps> = ({ size = 30, className = '', alt = 'X' }) => (
  <RenderPngIcon
    name="x"
    defaultSrc="https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/twitter.png"
    size={size}
    className={className}
    alt={alt}
    fallbackSvg={
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    }
  />
);

// Epic Games Store Icon: Replaces from /public/images/icons/epic.png
export const EpicGamesIcon: React.FC<IconProps> = ({ size = 30, className = '', alt = 'Epic Games' }) => (
  <RenderPngIcon
    name="epic"
    defaultSrc="https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/epic-games.png"
    size={size}
    className={className}
    alt={alt}
    fallbackSvg={
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 3h16v13.5l-8 4.5-8-4.5V3zm2 2v9.5l6 3.4 6-3.4V5H6zm4 2h4v2h-4V7zm0 3.5h4v2h-4v-2zm0 3.5h4v1.5l-2 1.1-2-1.1V14z" />
      </svg>
    }
  />
);

// Nintendo Switch Icon: Replaces from /public/images/icons/switch.png
export const NintendoSwitchIcon: React.FC<IconProps> = ({ size = 30, className = '', alt = 'Nintendo Switch' }) => (
  <RenderPngIcon
    name="switch"
    defaultSrc="https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/nintendo-switch.png"
    size={size}
    className={className}
    alt={alt}
    fallbackSvg={
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M9.4 2H4.6C3.2 2 2 3.2 2 4.6v14.8C2 20.8 3.2 22 4.6 22h4.8c.8 0 1.4-.6 1.4-1.4V3.4C10.8 2.6 10.2 2 9.4 2zm-3.2 6.5c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM19.4 2h-4.8c-.8 0-1.4.6-1.4 1.4v17.2c0 .8.6 1.4 1.4 1.4h4.8c1.4 0 2.6-1.2 2.6-2.6V4.6c0-1.4-1.2-2.6-2.6-2.6zm-1.6 14.5c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8z" />
      </svg>
    }
  />
);

// YouTube Icon: Replaces from /public/images/icons/youtube.png
export const YouTubeIcon: React.FC<IconProps> = ({ size = 30, className = '', alt = 'YouTube' }) => (
  <RenderPngIcon
    name="youtube"
    defaultSrc="https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/youtube.png"
    size={size}
    className={className}
    alt={alt}
    fallbackSvg={
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    }
  />
);

// Weibo Icon
export const WeiboIcon: React.FC<IconProps> = ({ size = 30, className = '', alt = 'Weibo' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-label={alt}>
    <path d="M10.09 18.06c-3.69.41-6.9-1.22-7.16-3.65-.27-2.43 2.51-4.73 6.2-5.15 3.69-.41 6.9 1.22 7.16 3.65.27 2.44-2.51 4.74-6.2 5.15zm7.3-6.52c-.28-.09-.48-.15-.33-.53.33-.8.36-1.5.03-2.02-.63-.98-2.38-.93-4.38.07 0 0-.62.33-.46-.17.31-.98.26-1.81-.22-2.31-1.07-1.12-3.87.05-6.25 2.61-2.07 2.22-3.1 4.67-2.75 6.44.47 2.37 3.03 4.09 6.83 4.14 4.88.06 8.52-2.7 8.52-5.89 0-1.09-.38-2.03-1-2.78l-.01.44zm3.92-2.81a3.8 3.8 0 0 0-2.32-2.56c-.53-.2-1.04.14-1.14.65-.1.5.18.99.71 1.2.7.27 1.18.89 1.28 1.63.1.75-.17 1.48-.7 1.95-.4.36-.45.94-.1 1.34.34.4.92.46 1.34.1 1-1.04 1.29-2.67.93-4.31zm2.34-1.92a7.35 7.35 0 0 0-4.63-4.99c-.55-.21-1.12.1-1.26.65-.14.54.12 1.09.68 1.3 2.15.82 3.59 2.8 3.66 5.05.02.58.48 1.04 1.06 1.03.58-.01 1.05-.48 1.04-1.06-.08-2.22-1.55-4.46-3.55-5.98z" />
  </svg>
);

// Bilibili Icon
export const BilibiliIcon: React.FC<IconProps> = ({ size = 30, className = '', alt = 'Bilibili' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-label={alt}>
    <path d="M17.813 4.653h.854c1.51 0 2.733 1.224 2.733 2.734v9.646a2.734 2.734 0 0 1-2.733 2.734H5.333A2.734 2.734 0 0 1 2.6 17.033V7.387a2.734 2.734 0 0 1 2.733-2.734h.854L4.853 3.32a.75.75 0 0 1 1.06-1.06l2.122 2.12h8.04l2.121-2.12a.75.75 0 1 1 1.061 1.06l-1.444 1.333zM8.5 10.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm7 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z" />
  </svg>
);
