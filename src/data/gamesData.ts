import { Language } from '../context/LanguageContext.tsx';

export interface GameItem {
  id: string;
  title: string;
  subtitle: string;
  genre: string;
  shortDesc: string;
  fullDesc: string;
  releaseDate: string;
  developer: string;
  publisher: string;
  platforms: ('steam' | 'epic' | 'switch' | 'playstation' | 'xbox')[];
  rating?: string;
  tags: string[];
  bannerTheme: string;
  featured: boolean;
  artType: 'hero-sleuth' | 'farm-rebirth' | 'house-spirits' | 'teatopia' | 'babel' | 'lonestar' | 'neonsea';
  imagePath: string;
  heroBgPath?: string;
  placeholderFallback: string;
  // Localized image paths dictionary
  localizedHeroImages?: Record<Language, string>;
  trailerUrl?: string;
  features: string[];
}

export const GAMES_DATA: GameItem[] = [
  {
    id: 'prize-denied',
    title: 'PRIZE DENIED',
    subtitle: 'CASUAL / CLAW MACHINE ROGUELIKE / DECKBUILDER',
    genre: 'CASUAL / CLAW MACHINE ROGUELIKE / DECKBUILDER',
    shortDesc: 'Prize Denied: In this cozy-evil claw machine roguelike, assemble rigged setups and play shady cards to stop customers from ever winning! Discover quirky combos to trap them in an endless addiction loop, draining their pockets dry until they finally win… or go completely broke!',
    fullDesc: "The previous owners were too nice to the customers, so they got kicked out. Now, it's your turn to run the arcade.\n\nMake your customers addicted! Maximize their addiction score to keep them playing, and drain their wallets until you hit your daily income goal.\n\nBuild the perfect trap. Pack your machine with prizes and obstacles to create satisfying combos that skyrocket addiction, while making it impossible for them to actually win.\n\nPlay rigged cards to sabotage the machine and increase their addiction. But be careful, blatant cheating drains their Trust. If you get caught, they will leave immediately!",
    releaseDate: 'Q2 2027',
    developer: 'snownooo',
    publisher: 'snownooo',
    platforms: ['steam'],
    tags: ['Roguelike', 'Deckbuilder', 'Arcade', 'Cozy-Evil', 'Strategy', 'Indie'],
    bannerTheme: 'from-sky-900/90 via-indigo-950/90 to-[#0b1329]',
    featured: true,
    artType: 'hero-sleuth',
    imagePath: '/images/hero-bg.png',
    heroBgPath: '/images/hero-bg.png',
    placeholderFallback: '/images/hero-bg.png',
    // Add the localized dictionary here:
    localizedHeroImages: {
      en: '/images/hero-bg.png',
      'zh-Hans': '/images/hero-bg-schin.png',
      'zh-Hant': '/images/hero-bg-tchin.png',
    },
    trailerUrl: 'https://store.steampowered.com/app/3424940/_/',
    features: [
      '50+ unlockable prizes and obstacles to rig your machine',
      '50+ shady cards to manipulate the claw and the score',
      '20+ Boss Customers to scam, each with unique abilities',
      '5 distinct Arcades featuring different machines and cards',
      '7 Days of escalating difficulty to survive in each arcade'
    ]
  }
];