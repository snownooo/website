import React from 'react';
import { PrizeDeniedBackground } from './PrizeDeniedBackground.tsx';

// Studio Mascot Logo: Cute smiling snow cloud with gaming headset & controller
export const StudioLogo: React.FC<{ size?: number; showText?: boolean; className?: string }> = ({
  size = 40,
  showText = true,
  className = '',
}) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <div
        style={{ width: size, height: size }}
        className="relative flex items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 p-1 shadow-lg shadow-sky-500/25 ring-2 ring-sky-300/40"
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Soft background glow */}
          <circle cx="50" cy="50" r="45" fill="url(#bgGlow)" />

          {/* Cloud Mascot Body */}
          <path
            d="M26 62C21 62 17 58 17 53C17 48.5 20.2 44.8 24.5 44.1C24.2 42.8 24 41.4 24 40C24 31.7 30.7 25 39 25C44.3 25 49 27.8 51.7 32C54.2 30.1 57.5 29 61 29C69.3 29 76 35.7 76 44C76 44.6 75.9 45.3 75.8 46C79.8 47.4 83 51.3 83 56C83 61.5 78.5 66 73 66L26 66C23.8 66 26 62 26 62Z"
            fill="#FFFFFF"
          />

          {/* Cute Eyes (Happy curved anime eyes) */}
          <path
            d="M38 48C40 45 44 45 46 48"
            stroke="#1E293B"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M56 48C58 45 62 45 64 48"
            stroke="#1E293B"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Cheerful mouth */}
          <path
            d="M48 54C49.5 57 52.5 57 54 54"
            stroke="#1E293B"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Pink blush */}
          <ellipse cx="34" cy="52" rx="4" ry="2.5" fill="#FDA4AF" />
          <ellipse cx="68" cy="52" rx="4" ry="2.5" fill="#FDA4AF" />

          {/* Gamer Headphones Band */}
          <path
            d="M25 45C25 28 36 17 50 17C64 17 75 28 75 45"
            stroke="#0284C7"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* Headphone Ear Cushions */}
          <rect x="20" y="38" width="8" height="15" rx="4" fill="#38BDF8" stroke="#0369A1" strokeWidth="2" />
          <rect x="72" y="38" width="8" height="15" rx="4" fill="#38BDF8" stroke="#0369A1" strokeWidth="2" />

          {/* Sparkle Star */}
          <path
            d="M75 16L76.5 21L81.5 22.5L76.5 24L75 29L73.5 24L68.5 22.5L73.5 21L75 16Z"
            fill="#FEF08A"
          />

          {/* Tiny Gamepad icon on belly */}
          <rect x="42" y="58" width="16" height="6" rx="3" fill="#38BDF8" />
          <circle cx="46" cy="61" r="1.2" fill="#FFFFFF" />
          <circle cx="54" cy="61" r="1.2" fill="#FFFFFF" />

          <defs>
            <radialGradient id="bgGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(50 50) rotate(90) scale(45)">
              <stop stopColor="#E0F2FE" />
              <stop offset="1" stopColor="#38BDF8" stopOpacity="0.4" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="font-display text-xl font-bold tracking-wider text-white drop-shadow-sm">
              SNOW<span className="text-sky-300">NOOO</span>
            </span>
            <span className="rounded bg-sky-500/20 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-sky-300 border border-sky-400/30">
              STUDIO
            </span>
          </div>
          <span className="text-[10px] font-medium tracking-widest text-sky-200/70 uppercase">
            INDIE GAME LAB
          </span>
        </div>
      )}
    </div>
  );
};

// Vector Art for Hero: Psycho Sleuth (referencing Image 1)
export const HeroArtPsychoSleuth: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden select-none ${className}`}>
      {/* Background Deep Sky & Pastel Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#091530] via-[#0f244a] to-[#0b1329]" />

      {/* Atmospheric Star Dust & Glowing Orbs */}
      <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none">
        <div className="absolute top-1/4 left-1/5 w-96 h-96 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-sky-400/15 blur-3xl" />
      </div>

      {/* Stylized Vector Detective Key Visual Scene */}
      <svg
        className="absolute inset-0 w-full h-full object-cover"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="coatGradient" x1="400" y1="200" x2="1200" y2="900" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F8FAFC" />
            <stop offset="0.5" stopColor="#E2E8F0" />
            <stop offset="1" stopColor="#94A3B8" />
          </linearGradient>
          <linearGradient id="cyanCyber" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#38BDF8" />
            <stop offset="1" stopColor="#22D3EE" />
          </linearGradient>
          <linearGradient id="purpleCyber" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#A855F7" />
            <stop offset="1" stopColor="#EC4899" />
          </linearGradient>
          <radialGradient id="featherGlow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#67E8F9" stopOpacity="0.8" />
            <stop offset="1" stopColor="#0284C7" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Dramatic background light beam */}
        <path d="M800 0 L1400 900 L200 900 Z" fill="url(#cyanCyber)" opacity="0.07" />
        <path d="M800 0 L1600 600 L1200 900 Z" fill="#38BDF8" opacity="0.04" />

        {/* Floating feather / memory fragments in background */}
        <g opacity="0.6">
          <path d="M240 180 C260 210 250 260 210 280 C220 250 200 220 240 180Z" fill="#38BDF8" opacity="0.5" />
          <path d="M320 340 C340 370 330 420 290 440 C300 410 280 380 320 340Z" fill="#818CF8" opacity="0.6" />
          <path d="M1360 220 C1340 250 1350 300 1390 320 C1380 290 1400 260 1360 220Z" fill="#38BDF8" opacity="0.5" />
          <path d="M1250 420 C1230 450 1240 500 1280 520 C1270 490 1290 460 1250 420Z" fill="#A855F7" opacity="0.4" />
        </g>

        {/* Central Detective Character Silhouette & Lab Coat */}
        {/* Lab Coat / Robe Fold Wings (referencing image 1 pose) */}
        <path
          d="M480 380 Q350 460 380 850 L560 900 L800 780 L1040 900 L1220 850 Q1250 460 1120 380 L960 340 L800 360 L640 340 Z"
          fill="url(#coatGradient)"
          filter="drop-shadow(0 20px 30px rgba(0,0,0,0.5))"
        />

        {/* Left Side: Human Detective Half with Headphones & Anime Hair */}
        {/* Hair Left (Vibrant pinkish/crimson anime hair with cyan highlights) */}
        <path
          d="M720 200 C680 180 640 220 630 270 C600 260 590 310 610 340 C630 350 670 360 700 340 Z"
          fill="#F43F5E"
        />
        <path
          d="M710 180 C740 160 770 180 800 190 C780 230 750 250 720 260 Z"
          fill="#FB7185"
        />
        {/* Face Left */}
        <path
          d="M700 240 C680 260 670 300 680 340 C720 380 770 390 800 395 L800 230 C760 230 730 235 700 240 Z"
          fill="#FFE4E6"
        />
        {/* Cyan Cyber Headset / Visor on Left */}
        <rect x="620" y="270" width="40" height="70" rx="12" fill="#0EA5E9" stroke="#E0F2FE" strokeWidth="4" />
        <circle cx="640" cy="305" r="8" fill="#38BDF8" />
        <line x1="640" y1="305" x2="730" y2="295" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" />
        {/* Detective Eye Left */}
        <path d="M720 295 Q745 285 765 295" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" />
        <circle cx="745" cy="305" r="7" fill="#06B6D4" />
        <circle cx="743" cy="303" r="2.5" fill="#FFFFFF" />

        {/* Right Side: Cybernetic Half / Skull Mechanical Ribcage (like in image 1) */}
        {/* Dark cyber internal glow */}
        <path
          d="M800 230 L800 395 C830 390 880 380 910 330 C920 280 890 240 850 230 Z"
          fill="#1E293B"
        />
        {/* Golden Mechanical circuits & Skull plates */}
        <path
          d="M810 240 Q860 250 870 290 Q850 340 810 360"
          stroke="#F59E0B"
          strokeWidth="3.5"
          fill="#0F172A"
          strokeDasharray="6 3"
        />
        {/* Eye socket with glowing cyan optic lens */}
        <circle cx="850" cy="295" r="10" fill="#0284C7" stroke="#38BDF8" strokeWidth="3" />
        <circle cx="850" cy="295" r="4" fill="#67E8F9" />

        {/* Central Red Tie & Dark Vest */}
        <path d="M780 390 L820 390 L815 620 L800 660 L785 620 Z" fill="#DC2626" />
        <path d="M775 390 L800 450 L825 390" fill="#991B1B" />

        {/* Ribcage mechanical frame showing under open coat (Right side) */}
        <g stroke="#CBD5E1" strokeWidth="6" strokeLinecap="round" opacity="0.8">
          <line x1="830" y1="460" x2="900" y2="480" />
          <line x1="830" y1="510" x2="920" y2="540" />
          <line x1="830" y1="560" x2="910" y2="600" />
          <line x1="830" y1="610" x2="890" y2="660" />
        </g>

        {/* Gloved Hands holding the lapels (like Image 1 pose) */}
        {/* Left hand glove */}
        <path
          d="M480 440 C460 430 420 460 410 500 C405 525 430 540 450 535 C480 525 500 480 480 440 Z"
          fill="#1E293B"
          stroke="#475569"
          strokeWidth="3"
        />
        {/* Right skeletal/cybernetic hand */}
        <path
          d="M1120 440 C1140 430 1180 460 1190 500 C1195 525 1170 540 1150 535 C1120 525 1100 480 1120 440 Z"
          fill="#0F172A"
          stroke="#0EA5E9"
          strokeWidth="3"
        />

        {/* Tassels / Charm on coat pocket (like in image 1) */}
        <path d="M1020 520 L1035 620 L1015 620 Z" fill="#DC2626" />
        <circle cx="1025" cy="520" r="6" fill="#F59E0B" />

        {/* Floating Neon Cyber Glitch Particles */}
        <rect x="520" y="320" width="80" height="6" fill="#38BDF8" opacity="0.7" />
        <rect x="1000" y="360" width="60" height="5" fill="#F43F5E" opacity="0.6" />
        <rect x="740" y="160" width="40" height="4" fill="#A855F7" opacity="0.8" />
        <rect x="850" y="420" width="90" height="5" fill="#38BDF8" opacity="0.7" />
      </svg>

      {/* Vignette & Bottom Scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1329] via-transparent to-[#0b1329]/60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1329]/70 via-transparent to-[#0b1329]/70 pointer-events-none" />
    </div>
  );
};

// Vector Art for Game 1: Cozy Cloud Farm Rebirth (referencing Image 2 card 1)
export const GameArtFarmRebirth: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-gradient-to-b from-[#7dd3fc] via-[#bae6fd] to-[#86efac] select-none ${className}`}>
      <svg className="w-full h-full object-cover" viewBox="0 0 600 360" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Soft Pastel Sun */}
        <circle cx="120" cy="80" r="50" fill="#FEF08A" opacity="0.8" />
        <circle cx="120" cy="80" r="70" fill="#FEF08A" opacity="0.3" />

        {/* Fluffy Cartoon Clouds */}
        <ellipse cx="460" cy="90" rx="70" ry="30" fill="#FFFFFF" opacity="0.9" />
        <circle cx="430" cy="75" r="35" fill="#FFFFFF" opacity="0.9" />
        <circle cx="485" cy="70" r="28" fill="#FFFFFF" opacity="0.9" />

        <ellipse cx="200" cy="120" rx="55" ry="22" fill="#FFFFFF" opacity="0.85" />
        <circle cx="180" cy="110" r="25" fill="#FFFFFF" opacity="0.85" />

        {/* Floating Green Pasture Hills */}
        <path d="M0 240 Q180 180 340 230 Q480 270 600 220 L600 360 L0 360 Z" fill="#4ADE80" />
        <path d="M0 270 Q240 220 420 280 Q520 310 600 270 L600 360 L0 360 Z" fill="#22C55E" />

        {/* Cute Windmill */}
        <rect x="470" y="160" width="36" height="60" rx="4" fill="#FEF9C3" stroke="#CA8A04" strokeWidth="2" />
        <polygon points="460,160 488,130 516,160" fill="#F87171" stroke="#DC2626" strokeWidth="2" />
        {/* Windmill blades */}
        <line x1="488" y1="145" x2="455" y2="120" stroke="#78350F" strokeWidth="3" strokeLinecap="round" />
        <line x1="488" y1="145" x2="520" y2="170" stroke="#78350F" strokeWidth="3" strokeLinecap="round" />
        <line x1="488" y1="145" x2="465" y2="175" stroke="#78350F" strokeWidth="3" strokeLinecap="round" />
        <line x1="488" y1="145" x2="510" y2="115" stroke="#78350F" strokeWidth="3" strokeLinecap="round" />

        {/* Giant Cute Star Turnip Creature (like in image 2 Another Farm) */}
        <ellipse cx="140" cy="270" rx="55" ry="45" fill="#F472B6" stroke="#BE185D" strokeWidth="3" />
        {/* Cute face */}
        <circle cx="125" cy="265" r="5" fill="#1E293B" />
        <circle cx="155" cy="265" r="5" fill="#1E293B" />
        <circle cx="123" cy="263" r="1.5" fill="#FFFFFF" />
        <circle cx="153" cy="263" r="1.5" fill="#FFFFFF" />
        <ellipse cx="115" cy="273" rx="5" ry="3" fill="#FDA4AF" />
        <ellipse cx="165" cy="273" rx="5" ry="3" fill="#FDA4AF" />
        <path d="M136 273 Q140 278 144 273" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
        {/* Sprout on top */}
        <path d="M140 225 Q130 200 115 210 Q135 215 140 225 Z" fill="#86EFAC" stroke="#16A34A" strokeWidth="2" />
        <path d="M140 225 Q150 195 165 205 Q145 215 140 225 Z" fill="#86EFAC" stroke="#16A34A" strokeWidth="2" />

        {/* Tiny bird companion */}
        <circle cx="140" cy="188" r="12" fill="#FDE047" stroke="#CA8A04" strokeWidth="1.5" />
        <polygon points="148,188 156,190 148,193" fill="#FB923C" />
        <circle cx="143" cy="186" r="2" fill="#1E293B" />

        {/* Sprouting glowing crop seedlings */}
        <g fill="#BBF7D0">
          <circle cx="260" cy="290" r="12" fill="#A7F3D0" />
          <path d="M260 290 Q255 275 250 280 Q258 285 260 290 Z" fill="#10B981" />
          <circle cx="340" cy="280" r="14" fill="#A7F3D0" />
          <path d="M340 280 Q345 260 355 268 Q345 275 340 280 Z" fill="#10B981" />
          <circle cx="410" cy="300" r="10" fill="#A7F3D0" />
        </g>

        {/* Twinkling Little Stars */}
        <polygon points="260,110 263,116 270,117 265,122 266,128 260,125 254,128 255,122 250,117 257,116" fill="#FEF08A" />
        <polygon points="380,80 382,85 388,86 384,90 385,95 380,92 375,95 376,90 372,86 378,85" fill="#FEF08A" />
      </svg>
      {/* Game Title Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent">
        <div className="text-center transform group-hover:scale-105 transition-transform duration-300">
          <div className="inline-block bg-sky-950/75 backdrop-blur-sm px-4 py-1.5 rounded-full border border-sky-400/40 shadow-lg">
            <span className="font-display text-2xl font-bold tracking-wide text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              COZY FARM <span className="text-amber-300 font-extrabold">REBIRTH</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Vector Art for Game 2: House of Spirits (referencing Image 2 card 2)
export const GameArtHouseOfSpirits: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-gradient-to-b from-[#bae6fd] via-[#ccfbf1] to-[#99f6e4] select-none ${className}`}>
      <svg className="w-full h-full object-cover" viewBox="0 0 600 360" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Distant misty jade mountains */}
        <path d="M0 160 Q100 110 200 150 Q320 80 440 140 Q540 100 600 130 L600 360 L0 360 Z" fill="#A7F3D0" opacity="0.6" />
        <path d="M0 190 Q120 150 260 180 Q380 140 500 190 L600 200 L600 360 L0 360 Z" fill="#6EE7B7" opacity="0.7" />

        {/* Jade Lotus Pond Water */}
        <rect x="0" y="220" width="600" height="140" fill="#2DD4BF" opacity="0.6" />

        {/* Oriental Wooden Tea Pavilion on Stilts */}
        {/* Stilts */}
        <rect x="150" y="220" width="10" height="70" fill="#78350F" />
        <rect x="230" y="220" width="10" height="70" fill="#78350F" />
        <rect x="310" y="220" width="10" height="70" fill="#78350F" />
        {/* Deck */}
        <rect x="120" y="210" width="220" height="16" rx="3" fill="#B45309" stroke="#78350F" strokeWidth="2" />
        {/* Pavilion Pillars */}
        <rect x="140" y="140" width="8" height="70" fill="#DC2626" />
        <rect x="200" y="140" width="8" height="70" fill="#DC2626" />
        <rect x="260" y="140" width="8" height="70" fill="#DC2626" />
        <rect x="310" y="140" width="8" height="70" fill="#DC2626" />
        {/* Curving Eaves Roof (Traditional Chinese / Oriental Pagoda) */}
        <path
          d="M100 140 Q225 100 350 140 Q370 125 330 115 Q225 80 120 115 Q80 125 100 140 Z"
          fill="#B91C1C"
          stroke="#7F1D1D"
          strokeWidth="3"
        />
        {/* Glowing Red Lanterns Hanging */}
        <circle cx="130" cy="165" r="9" fill="#EF4444" />
        <circle cx="320" cy="165" r="9" fill="#EF4444" />
        <line x1="130" y1="145" x2="130" y2="156" stroke="#FDE047" strokeWidth="2" />
        <line x1="320" y1="145" x2="320" y2="156" stroke="#FDE047" strokeWidth="2" />

        {/* Wooden Bridge walkway */}
        <path d="M330 220 Q440 250 540 230 L540 260 Q440 280 330 240 Z" fill="#92400E" />

        {/* Small boat on lotus pond */}
        <ellipse cx="480" cy="270" rx="45" ry="12" fill="#B45309" />
        <polygon points="460,250 490,240 480,265" fill="#FEF3C7" />
        {/* Cute traveler standing on boat */}
        <circle cx="450" cy="245" r="8" fill="#FDE047" />
        <polygon points="440,253 460,253 450,235" fill="#F43F5E" />

        {/* Giant Floating Pink Lotus Flowers */}
        <g>
          <ellipse cx="80" cy="290" rx="30" ry="14" fill="#059669" />
          <circle cx="80" cy="285" r="10" fill="#F472B6" />
          <circle cx="80" cy="285" r="5" fill="#FDF2F8" />
          <ellipse cx="380" cy="305" rx="36" ry="16" fill="#059669" />
          <circle cx="380" cy="300" r="12" fill="#F472B6" />
          <circle cx="380" cy="300" r="6" fill="#FEF08A" />
        </g>

        {/* Willow branches on side */}
        <path d="M0 0 Q60 50 40 120 M10 0 Q80 80 60 160" stroke="#34D399" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
      </svg>
      {/* Title Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent">
        <div className="text-center group-hover:scale-105 transition-transform duration-300">
          <div className="inline-block bg-slate-950/75 backdrop-blur-sm px-4 py-1.5 rounded-full border border-teal-400/40 shadow-lg">
            <span className="font-display text-2xl font-bold tracking-wide text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              HOUSE OF <span className="text-rose-400">SPIRITS</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Vector Art for Game 3: Teatopia (referencing Image 2 card 3)
export const GameArtTeatopia: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-gradient-to-b from-[#312e81] via-[#1e1b4b] to-[#0f172a] select-none ${className}`}>
      <svg className="w-full h-full object-cover" viewBox="0 0 600 360" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Soft night sky with pastel twilight glow */}
        <rect x="0" y="0" width="600" height="360" fill="#1E1B4B" />
        <radialGradient id="nightLanternGlow" cx="0.5" cy="0.6" r="0.6">
          <stop offset="0" stopColor="#F59E0B" stopOpacity="0.5" />
          <stop offset="0.6" stopColor="#B45309" stopOpacity="0.2" />
          <stop offset="1" stopColor="#1E1B4B" stopOpacity="0" />
        </radialGradient>
        <rect x="0" y="0" width="600" height="360" fill="url(#nightLanternGlow)" />

        {/* Distant Japanese Pine / Bonsai silhouette */}
        <path d="M500 240 Q540 200 580 230 Q560 270 520 280 Z" fill="#064E3B" opacity="0.8" />
        <path d="M540 280 L550 340 L535 340 Z" fill="#78350F" />

        {/* Isometric Wooden Terrace Planks */}
        <polygon points="60,260 300,160 540,260 300,360" fill="#92400E" stroke="#78350F" strokeWidth="2" />
        <polygon points="80,260 300,170 520,260 300,350" fill="#B45309" />

        {/* Isometric Tea Tables & Cushions */}
        <polygon points="260,220 300,200 340,220 300,240" fill="#FBBF24" stroke="#D97706" strokeWidth="2" />
        <circle cx="300" cy="216" r="4" fill="#FFFFFF" />
        {/* Steam curling up */}
        <path d="M300 212 Q296 200 302 190 Q298 180 304 170" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.8" />

        {/* Glowing Festive Strings of Lanterns across the terrace */}
        <path d="M80 180 Q300 240 520 180" stroke="#FDE68A" strokeWidth="2" strokeDasharray="2 10" />
        {/* Lanterns */}
        <g fill="#F59E0B">
          <circle cx="120" cy="200" r="7" />
          <circle cx="180" cy="216" r="7" />
          <circle cx="240" cy="226" r="8" fill="#FBBF24" />
          <circle cx="300" cy="228" r="9" fill="#FEF08A" />
          <circle cx="360" cy="226" r="8" fill="#FBBF24" />
          <circle cx="420" cy="216" r="7" />
          <circle cx="480" cy="200" r="7" />
        </g>

        {/* Cherry blossom pastel petals drifting */}
        <circle cx="200" cy="140" r="3" fill="#FDA4AF" opacity="0.8" />
        <circle cx="380" cy="120" r="3.5" fill="#FDA4AF" opacity="0.8" />
        <circle cx="270" cy="90" r="2.5" fill="#FDA4AF" opacity="0.8" />
      </svg>
      {/* Title Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent">
        <div className="text-center group-hover:scale-105 transition-transform duration-300">
          <div className="inline-block bg-slate-950/75 backdrop-blur-sm px-4 py-1.5 rounded-full border border-amber-400/40 shadow-lg">
            <span className="font-display text-2xl font-bold tracking-wide text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              TEA<span className="text-amber-300 font-extrabold">TOPIA</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Vector Art for Game 4: A Guidebook of Babel (referencing Image 2 card 4)
export const GameArtBabel: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-gradient-to-b from-[#38bdf8] via-[#818cf8] to-[#0284c7] select-none ${className}`}>
      <svg className="w-full h-full object-cover" viewBox="0 0 600 360" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Stylized Whimsical Retro Airplane / Airship Ferry (like Babel guidebook) */}
        {/* Giant Yellow cartoon airship wing */}
        <path d="M60 140 Q300 80 540 130 L520 220 Q300 240 80 210 Z" fill="#FACC15" stroke="#CA8A04" strokeWidth="4" />
        <path d="M120 150 Q300 110 480 145" stroke="#EAB308" strokeWidth="3" />

        {/* Airship Windows / Porch with cartoon passengers */}
        <g>
          {/* Passenger 1: Cute aviator girl with goggles */}
          <circle cx="160" cy="180" r="16" fill="#FDE047" stroke="#1E293B" strokeWidth="2.5" />
          <rect x="150" y="172" width="20" height="8" rx="4" fill="#38BDF8" stroke="#0284C7" strokeWidth="1.5" />
          {/* Passenger 2: Chef in white hat */}
          <circle cx="230" cy="180" r="16" fill="#FED7AA" stroke="#1E293B" strokeWidth="2.5" />
          <path d="M220 168 Q230 150 240 168 Z" fill="#FFFFFF" stroke="#1E293B" strokeWidth="2" />
          {/* Passenger 3: Quirky professor with round spectacles */}
          <circle cx="310" cy="180" r="16" fill="#FCE7F3" stroke="#1E293B" strokeWidth="2.5" />
          <circle cx="305" cy="180" r="5" stroke="#1E293B" strokeWidth="2" fill="none" />
          <circle cx="317" cy="180" r="5" stroke="#1E293B" strokeWidth="2" fill="none" />
          {/* Passenger 4: Green alien creature waving */}
          <circle cx="390" cy="180" r="14" fill="#86EFAC" stroke="#16A34A" strokeWidth="2.5" />
          <path d="M405 170 Q415 155 420 165" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Flying fluttering Butterfly Diary memos */}
        <rect x="120" y="70" width="18" height="24" rx="2" fill="#FFFFFF" transform="rotate(15 120 70)" stroke="#94A3B8" strokeWidth="1" />
        <rect x="440" y="80" width="20" height="26" rx="2" fill="#FEF08A" transform="rotate(-20 440 80)" stroke="#EAB308" strokeWidth="1" />

        {/* Cartoon blue/white cumulus clouds below */}
        <circle cx="100" cy="320" r="60" fill="#F0F9FF" opacity="0.9" />
        <circle cx="250" cy="330" r="75" fill="#F0F9FF" opacity="0.9" />
        <circle cx="420" cy="320" r="80" fill="#F0F9FF" opacity="0.9" />
        <circle cx="560" cy="330" r="65" fill="#F0F9FF" opacity="0.9" />
      </svg>
      {/* Title Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent">
        <div className="text-center group-hover:scale-105 transition-transform duration-300">
          <div className="inline-block bg-slate-950/75 backdrop-blur-sm px-4 py-1.5 rounded-full border border-sky-400/40 shadow-lg">
            <span className="font-display text-2xl font-bold tracking-wide text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              GUIDEBOOK OF <span className="text-yellow-400 font-extrabold">BABEL</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Vector Art for Game 5: Lonestar Drifter (referencing Image 2 card 5)
export const GameArtLonestar: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#1e1b4b] select-none ${className}`}>
      <svg className="w-full h-full object-cover" viewBox="0 0 600 360" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Deep starry space nebula */}
        <radialGradient id="nebulaPulse" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#0EA5E9" stopOpacity="0.4" />
          <stop offset="0.7" stopColor="#6366F1" stopOpacity="0.2" />
          <stop offset="1" stopColor="#020617" stopOpacity="0" />
        </radialGradient>
        <rect x="0" y="0" width="600" height="360" fill="url(#nebulaPulse)" />

        {/* Pastel Asteroids floating in space */}
        <polygon points="120,60 160,80 140,120 90,110 80,70" fill="#475569" stroke="#64748B" strokeWidth="2" />
        <polygon points="460,90 510,70 540,110 500,150 450,130" fill="#334155" stroke="#475569" strokeWidth="2" />
        <polygon points="80,260 120,280 100,320 60,300" fill="#334155" stroke="#475569" strokeWidth="2" />

        {/* Sleek Cartoon High-Tech Fighter (Lonestar) */}
        {/* Engine Glow Thrusters */}
        <polygon points="210,195 210,215 130,205" fill="#38BDF8" opacity="0.8" />
        <polygon points="210,198 210,212 160,205" fill="#E0F2FE" />
        {/* Main Hull */}
        <polygon points="220,180 380,195 440,205 380,215 220,230 250,205" fill="#0284C7" stroke="#38BDF8" strokeWidth="3" />
        {/* Wings */}
        <polygon points="280,185 340,130 380,185" fill="#0369A1" stroke="#38BDF8" strokeWidth="2" />
        <polygon points="280,225 340,280 380,225" fill="#0369A1" stroke="#38BDF8" strokeWidth="2" />
        {/* Cockpit Canopy */}
        <polygon points="340,200 400,205 340,210" fill="#FACC15" />

        {/* Laser / Plasma Energy Blast */}
        <line x1="440" y1="205" x2="560" y2="205" stroke="#38BDF8" strokeWidth="6" strokeLinecap="round" />
        <line x1="440" y1="205" x2="540" y2="205" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        <circle cx="560" cy="205" r="16" fill="#38BDF8" opacity="0.6" />
        <circle cx="560" cy="205" r="8" fill="#FFFFFF" />

        {/* Star Sparkles */}
        <circle cx="280" cy="70" r="2" fill="#FFFFFF" />
        <circle cx="340" cy="90" r="1.5" fill="#FFFFFF" />
        <circle cx="210" cy="110" r="2.5" fill="#38BDF8" />
        <circle cx="480" cy="270" r="2" fill="#FFFFFF" />
      </svg>
      {/* Title Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent">
        <div className="text-center group-hover:scale-105 transition-transform duration-300">
          <div className="inline-block bg-slate-950/75 backdrop-blur-sm px-4 py-1.5 rounded-full border border-sky-400/40 shadow-lg">
            <span className="font-display text-2xl font-bold tracking-wide text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              STAR DRIFTER: <span className="text-cyan-400 font-extrabold">LONESTAR</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Vector Art for Game 6: Tales of the Neon Sea (referencing Image 2 card 6)
export const GameArtNeonSea: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-gradient-to-b from-[#1e1b4b] via-[#4c1d95] to-[#0f172a] select-none ${className}`}>
      <svg className="w-full h-full object-cover" viewBox="0 0 600 360" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Cyberpunk Pastel Neon Skyline */}
        {/* Buildings silhouettes */}
        <rect x="40" y="160" width="80" height="200" fill="#0F172A" />
        <rect x="140" y="120" width="90" height="240" fill="#1E1B4B" />
        <rect x="250" y="180" width="70" height="180" fill="#0F172A" />
        <rect x="340" y="100" width="110" height="260" fill="#1E1B4B" />
        <rect x="470" y="150" width="90" height="210" fill="#0F172A" />

        {/* Neon Signs (Pastel Cyan and Pink) */}
        <rect x="60" y="180" width="40" height="12" rx="3" fill="#EC4899" stroke="#F472B6" strokeWidth="2" opacity="0.9" />
        <line x1="160" y1="140" x2="160" y2="200" stroke="#06B6D4" strokeWidth="4" strokeLinecap="round" />
        <circle cx="395" cy="135" r="16" fill="#8B5CF6" stroke="#A78BFA" strokeWidth="2" />
        <polygon points="395,125 405,145 385,145" fill="#F43F5E" />

        {/* Balcony Railing in Foreground */}
        <rect x="0" y="270" width="600" height="90" fill="#090D1A" />
        <line x1="0" y1="270" x2="600" y2="270" stroke="#334155" strokeWidth="6" />
        <line x1="100" y1="270" x2="100" y2="360" stroke="#334155" strokeWidth="4" />
        <line x1="250" y1="270" x2="250" y2="360" stroke="#334155" strokeWidth="4" />
        <line x1="400" y1="270" x2="400" y2="360" stroke="#334155" strokeWidth="4" />

        {/* Cyber Cat Mascot silhouette sitting on the railing (William the Cat) */}
        <ellipse cx="280" cy="255" rx="14" ry="18" fill="#020617" />
        <circle cx="280" cy="235" r="12" fill="#020617" />
        {/* Cat ears */}
        <polygon points="271,228 274,218 280,226" fill="#020617" />
        <polygon points="280,226 286,218 289,228" fill="#020617" />
        {/* Glowing cyber cat eyes */}
        <circle cx="276" cy="235" r="2" fill="#22D3EE" />
        <circle cx="284" cy="235" r="2" fill="#22D3EE" />
        {/* Cat tail hanging down */}
        <path d="M292 265 Q305 285 295 300" stroke="#020617" strokeWidth="4" strokeLinecap="round" fill="none" />

        {/* Floating Holographic Cyber Whale/Fish swimming in the sky */}
        <path
          d="M180 80 Q250 50 320 80 Q250 95 180 80 Z"
          fill="#38BDF8"
          opacity="0.5"
          stroke="#7DD3FC"
          strokeWidth="2"
        />
        <polygon points="180,80 150,65 150,95" fill="#38BDF8" opacity="0.5" />
      </svg>
      {/* Title Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent">
        <div className="text-center group-hover:scale-105 transition-transform duration-300">
          <div className="inline-block bg-slate-950/75 backdrop-blur-sm px-4 py-1.5 rounded-full border border-purple-400/40 shadow-lg">
            <span className="font-display text-2xl font-bold tracking-wide text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              TALES OF <span className="text-fuchsia-400 font-extrabold">NEON SEA</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Dispatcher Component for Game Artwork Cards
export const GameArtCard: React.FC<{
  artType: string;
  className?: string;
}> = ({ artType, className = '' }) => {
  switch (artType) {
    case 'prize-denied':
      return <PrizeDeniedBackground className={className} />;
    case 'hero-sleuth':
      return <HeroArtPsychoSleuth className={className} />;
    case 'farm-rebirth':
      return <GameArtFarmRebirth className={className} />;
    case 'house-spirits':
      return <GameArtHouseOfSpirits className={className} />;
    case 'teatopia':
      return <GameArtTeatopia className={className} />;
    case 'babel':
      return <GameArtBabel className={className} />;
    case 'lonestar':
      return <GameArtLonestar className={className} />;
    case 'neonsea':
    default:
      return <GameArtNeonSea className={className} />;
  }
};
