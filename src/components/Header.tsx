import React, { useState, useEffect } from 'react';
import { StudioLogoImg as StudioLogo } from './ImagePlaceholders.tsx';
import { SteamIcon, DiscordIcon, XIcon, YouTubeIcon } from './SocialIcons.tsx';
import { Globe, Menu, X as CloseIcon, ExternalLink } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenSteamModal?: () => void;
  onOpenDiscordModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'HOME' },
    { id: 'games', label: 'GAMES' },
    { id: 'about', label: 'ABOUT' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#091124]/95 backdrop-blur-md shadow-lg shadow-sky-950/40 border-b border-sky-800/25 py-3'
          : 'bg-[#091124]/80 backdrop-blur-sm border-b border-sky-900/15 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left Zone: Studio Logo */}
          <div className="flex items-center">
            <button
              onClick={() => handleLinkClick('hero')}
              className="flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg group"
              aria-label="Snownooo Studio Home"
            >
              <StudioLogo size={38} showText={true} />
            </button>
          </div>

          {/* Middle Zone: Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative py-1.5 px-3 text-xs tracking-widest font-bold uppercase transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded ${
                    isActive
                      ? 'text-sky-300'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-sky-400 to-cyan-300 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.8)]"
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Zone: Socials & Icons */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            {/* Steam Page Direct Link */}
            <a
              href="https://store.steampowered.com/curator/45366541"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit our Steam Page"
              className="p-1.5 text-slate-300 hover:text-sky-300 hover:bg-sky-950/60 rounded-xl transition-all border border-transparent hover:border-sky-500/30 active:scale-95"
              aria-label="Steam Page"
            >
              <SteamIcon size={30} />
            </a>

            {/* Discord Direct Link */}
            <a
              href="https://discord.gg/mDNhRY7zuR"
              target="_blank"
              rel="noopener noreferrer"
              title="Join our Discord Community"
              className="p-1.5 text-slate-300 hover:text-sky-300 hover:bg-sky-950/60 rounded-xl transition-all border border-transparent hover:border-sky-500/30 active:scale-95"
              aria-label="Discord Community"
            >
              <DiscordIcon size={30} />
            </a>

            {/* X / Twitter Link */}
            <a
              href="https://x.com/snownooo_studio"
              target="_blank"
              rel="noopener noreferrer"
              title="Follow us on X (@SnownoooStudio)"
              className="p-1.5 text-slate-300 hover:text-sky-300 hover:bg-sky-950/60 rounded-xl transition-all border border-transparent hover:border-sky-500/30 active:scale-95"
              aria-label="X Profile"
            >
              <XIcon size={30} />
            </a>

            {/* YouTube Link */}
            <a
              href="https://www.youtube.com/@SnownoooStudio"
              target="_blank"
              rel="noopener noreferrer"
              title="Watch Game Trailers on YouTube"
              className="p-1.5 text-slate-300 hover:text-rose-400 hover:bg-rose-950/40 rounded-xl transition-all border border-transparent hover:border-rose-500/30 hidden lg:inline-flex active:scale-95"
              aria-label="YouTube Channel"
            >
              <YouTubeIcon size={30} />
            </a>

            <div className="h-5 w-px bg-slate-700/60 mx-1 hidden sm:block" />

            {/* Language Pill (English Only) */}
            <div
              className="relative hidden sm:flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-sky-200 bg-sky-950/50 border border-sky-800/40 rounded-full select-none cursor-default"
              title="Language: English"
            >
              <Globe size={13} className="text-sky-400" />
              <span className="uppercase text-sky-200 tracking-wider">EN</span>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-white hover:bg-sky-950/70 rounded-lg"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <CloseIcon size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#091124]/98 border-b border-sky-800/30 px-4 pt-3 pb-6 space-y-3 backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold tracking-wider uppercase transition-colors ${
                  activeSection === link.id
                    ? 'bg-sky-500/20 text-sky-300 border border-sky-400/30'
                    : 'text-slate-300 hover:bg-sky-950/50 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-sky-900/40 flex items-center justify-between text-xs text-slate-400">
            <span>Community Channels</span>
            <div className="flex items-center gap-2">
              <a href="https://store.steampowered.com/curator/45366541" target="_blank" rel="noopener noreferrer" className="p-1.5 text-slate-300 hover:text-sky-300" aria-label="Steam">
                <SteamIcon size={26} />
              </a>
              <a href="https://discord.gg/mDNhRY7zuR" target="_blank" rel="noopener noreferrer" className="p-1.5 text-slate-300 hover:text-sky-300" aria-label="Discord">
                <DiscordIcon size={26} />
              </a>
              <a href="https://x.com/snownooo_studio" target="_blank" rel="noopener noreferrer" className="p-1.5 text-slate-300 hover:text-sky-300" aria-label="X">
                <XIcon size={26} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
