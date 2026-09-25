import React, { useState, useEffect, useRef } from 'react';
import { StudioLogoImg as StudioLogo } from './ImagePlaceholders.tsx';
import { SteamIcon, DiscordIcon, XIcon, YouTubeIcon } from './SocialIcons.tsx';
import { Globe, Menu, X as CloseIcon, ChevronDown, Check } from 'lucide-react';
import { useLanguage, Language } from '../context/LanguageContext.tsx';

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
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close language dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false);
      }
    };
    if (langMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [langMenuOpen]);

  const navLinks = [
    { id: 'hero', label: t.nav.home },
    { id: 'games', label: t.nav.games },
    { id: 'about', label: t.nav.about },
    { id: 'contact', label: t.nav.contact },
  ];

  const languages: { code: Language; label: string; short: string }[] = [
    { code: 'en', label: 'English', short: 'EN' },
    { code: 'zh-Hant', label: '繁體中文', short: '繁中' },
    { code: 'zh-Hans', label: '简体中文', short: '简中' },
  ];

  const currentLangObj = languages.find(l => l.code === language) || languages[0];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const handleSelectLanguage = (code: Language) => {
    setLanguage(code);
    setLangMenuOpen(false);
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
        <div className="flex items-center justify-between min-h-[48px]">
          {/* Left Zone: Studio Logo */}
          <div className="flex items-center">
            <button
              onClick={() => handleLinkClick('hero')}
              className="flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg group cursor-pointer"
              aria-label="Snownooo Studio Home"
            >
              <StudioLogo
                size={38}
                showText={true}
                subtitle={language === 'en' ? 'INDIE GAME STUDIO' : '雪落工作室'}
              />
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
                  className={`relative py-1.5 px-3.5 text-sm lg:text-[15px] tracking-wider font-bold uppercase transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded cursor-pointer ${
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

          {/* Right Zone: Socials & Icons & Language Selector */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            {/* Steam Page Direct Link */}
            <a
              href="https://store.steampowered.com/curator/45366541"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit our Steam Page"
              className="p-1.5 text-slate-300 hover:text-sky-300 hover:bg-sky-950/60 rounded-xl transition-all border border-transparent hover:border-sky-500/30 active:scale-95 cursor-pointer"
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
              className="p-1.5 text-slate-300 hover:text-sky-300 hover:bg-sky-950/60 rounded-xl transition-all border border-transparent hover:border-sky-500/30 active:scale-95 cursor-pointer"
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
              className="p-1.5 text-slate-300 hover:text-sky-300 hover:bg-sky-950/60 rounded-xl transition-all border border-transparent hover:border-sky-500/30 active:scale-95 cursor-pointer"
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
              className="p-1.5 text-slate-300 hover:text-rose-400 hover:bg-rose-950/40 rounded-xl transition-all border border-transparent hover:border-rose-500/30 hidden lg:inline-flex active:scale-95 cursor-pointer"
              aria-label="YouTube Channel"
            >
              <YouTubeIcon size={30} />
            </a>

            <div className="h-5 w-px bg-slate-700/60 mx-1 hidden sm:block" />

            {/* Language Selector Dropdown (Desktop) */}
            <div className="relative hidden sm:block" ref={langMenuRef}>
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-sky-200 bg-sky-950/60 hover:bg-sky-900/60 border border-sky-800/50 hover:border-sky-500/50 rounded-full transition-all cursor-pointer shadow-sm"
                aria-expanded={langMenuOpen}
                aria-haspopup="true"
                title="Select Language"
              >
                <Globe size={13} className="text-sky-400 shrink-0" />
                <span className="tracking-wide">{currentLangObj.short}</span>
                <ChevronDown size={12} className={`text-sky-400 transition-transform duration-200 ${langMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-36 py-1.5 bg-[#0b1633] border border-sky-700/50 rounded-xl shadow-2xl shadow-sky-950/70 z-50 animate-in fade-in zoom-in-95 duration-150 backdrop-blur-md">
                  <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-sky-900/50">
                    Language / 語言
                  </div>
                  {languages.map((lang) => {
                    const isSelected = language === lang.code;
                    return (
                      <button
                        key={lang.code}
                        onClick={() => handleSelectLanguage(lang.code)}
                        className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between transition-colors cursor-pointer ${
                          isSelected
                            ? 'text-sky-300 bg-sky-500/15 font-bold'
                            : 'text-slate-300 hover:text-white hover:bg-sky-900/40'
                        }`}
                      >
                        <span>{lang.label}</span>
                        {isSelected && <Check size={13} className="text-sky-400 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-white hover:bg-sky-950/70 rounded-lg cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <CloseIcon size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#091124]/98 border-b border-sky-800/30 px-4 pt-3 pb-6 space-y-4 backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold tracking-wider uppercase transition-colors cursor-pointer ${
                  activeSection === link.id
                    ? 'bg-sky-500/20 text-sky-300 border border-sky-400/30'
                    : 'text-slate-300 hover:bg-sky-950/50 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Language Selector */}
          <div className="pt-2 border-t border-sky-900/40 space-y-2">
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <Globe size={13} className="text-sky-400" />
              <span>Language / 語言：</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {languages.map((lang) => {
                const isSelected = language === lang.code;
                return (
                  <button
                    key={lang.code}
                    onClick={() => {
                      handleSelectLanguage(lang.code);
                    }}
                    className={`py-2 px-1 text-xs rounded-lg font-medium text-center transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-sky-500 text-slate-950 font-bold shadow-md shadow-sky-500/25'
                        : 'bg-[#0e1b38] text-slate-300 hover:text-white border border-sky-900/50'
                    }`}
                  >
                    {lang.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile Community Channels */}
          <div className="pt-3 border-t border-sky-900/40 flex items-center justify-between text-xs text-slate-400">
            <span>{t.nav.communityChannels}</span>
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
