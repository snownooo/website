/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { OurGamesSection } from './components/OurGamesSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { GameDetailModal } from './components/GameDetailModal.tsx';
import { CommunityModal } from './components/CommunityModals.tsx';
import { WishlistToast } from './components/WishlistToast.tsx';
import { GameItem } from './data/gamesData.ts';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedGame, setSelectedGame] = useState<GameItem | null>(null);
  const [wishlistedGame, setWishlistedGame] = useState<GameItem | null>(null);
  const [communityModalType, setCommunityModalType] = useState<'steam' | 'discord' | null>(null);

  // Scroll spy to update active section in header
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'games', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
  };

  const handleWishlistGame = (game: GameItem) => {
    setWishlistedGame(game);
  };

  return (
    <div className="min-h-screen bg-[#0b1329] text-slate-100 flex flex-col font-sans selection:bg-sky-400 selection:text-slate-900">
      {/* Sticky Header (Always on Top) */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenSteamModal={() => setCommunityModalType('steam')}
        onOpenDiscordModal={() => setCommunityModalType('discord')}
      />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* Part 1: Full-Page Featured Game Showcase (Image 1 reference) */}
        <HeroSection
          onWishlistClick={handleWishlistGame}
          onExploreGames={() => handleNavigate('games')}
        />

        {/* Part 2: Our Games Section (Image 2 reference) */}
        <OurGamesSection
          onSelectGame={(game) => setSelectedGame(game)}
          onWishlistGame={handleWishlistGame}
        />

        {/* Part 3: About Our Company Section (Image 3 reference) */}
        <AboutSection />

        {/* Part 4: Contact Section (Placeholder contacts & message form) */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Game Details Modal */}
      <GameDetailModal
        game={selectedGame}
        onClose={() => setSelectedGame(null)}
        onWishlist={handleWishlistGame}
      />

      {/* Community Channels Modal (Steam & Discord) */}
      <CommunityModal
        type={communityModalType}
        onClose={() => setCommunityModalType(null)}
      />

      {/* Wishlist Added Toast Notification */}
      <WishlistToast
        game={wishlistedGame}
        onClose={() => setWishlistedGame(null)}
      />
    </div>
  );
}
