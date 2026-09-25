import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'zh-Hant' | 'zh-Hans';

export interface Translations {
  // Navigation
  nav: {
    home: string;
    games: string;
    about: string;
    contact: string;
    communityChannels: string;
  };
  // Hero Section
  hero: {
    wishlistNow: string;
    wishlistedOnSteam: string;
    scrollToExplore: string;
  };
  // Featured & Our Games Section
  games: {
    badge: string;
    headingPrefix: string;
    headingHighlight: string;
    subtitle: string;
    viewDetails: string;
    wishlistOnSteam: string;
    availableOnSteam: string;
    statusLabel: string;
  };
  // Steam copy for Prize Denied
  prizeDenied: {
    title: string;
    subtitle: string;
    genre: string;
    shortDesc: string;
    fullDesc: string;
    releaseDate: string;
    developer: string;
    publisher: string;
    features: string[];
    tags: string[];
  };
  // About Section
  about: {
    welcomeTo: string;
    studioNameEn1: string;
    studioNameEn2: string;
    studioNameZh: string;
    badge: string;
    p1Part1: string;
    p1Strong: string;
    p1Part2: string;
    p2Part1: string;
    p2Title: string;
    p2Part2: string;
    pillarDebutVal: string;
    pillarDebutLabel: string;
    pillarSoloVal: string;
    pillarSoloLabel: string;
    pillarLocationVal: string;
    pillarLocationLabel: string;
  };
  // Contact & Newsletter Section
  contact: {
    badge: string;
    headingPrefix: string;
    headingHighlight: string;
    subtitle: string;
    emailLabel: string;
    copy: string;
    copied: string;
    emailDesc: string;
    reviewKeysTitle: string;
    reviewKeysDesc: string;
    supportTitle: string;
    supportDesc: string;
    connectTitle: string;
    connectDesc: string;
    newsletterTitle: string;
    newsletterSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailInputLabel: string;
    emailPlaceholder: string;
    roleLabel: string;
    roleSelectPlaceholder: string;
    roles: {
      player: string;
      creator: string;
      press: string;
      developer: string;
      partner: string;
      other: string;
    };
    submitButton: string;
    submittingButton: string;
    successTitle: string;
    successDescPrefix: string;
    successDescSuffix: string;
    subscribeAnother: string;
  };
  // Footer
  footer: {
    bio: string;
    quickNavTitle: string;
    navHome: string;
    navGames: string;
    navAbout: string;
    navContact: string;
    studioDetailsTitle: string;
    studioName: string;
    soloDevLabel: string;
    locationLabel: string;
    contactLabel: string;
    legalNotice: string;
    craftedWith: string;
    forPlayers: string;
    backToTop: string;
  };
  // Game Detail Modal
  modal: {
    aboutTitle: string;
    keyFeaturesTitle: string;
    releaseStatus: string;
    developer: string;
    publisher: string;
    platform: string;
    supportHint: string;
    wishlistCta: string;
  };
  // Community Modals
  communityModal: {
    steamTitle: string;
    steamDesc: string;
    steamPoint1: string;
    steamPoint2: string;
    steamPoint3: string;
    steamCta: string;
    close: string;
    discordTitle: string;
    discordDesc: string;
    discordMembersLabel: string;
    discordMembersVal: string;
    discordLiveLabel: string;
    discordLiveVal: string;
    discordKeysLabel: string;
    discordKeysVal: string;
    discordCta: string;
    maybeLater: string;
  };
  // Wishlist Toast
  toast: {
    wishlisted: string;
    toastDesc: string;
    supportText: string;
    viewOnSteam: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'HOME',
      games: 'GAMES',
      about: 'ABOUT',
      contact: 'CONTACT',
      communityChannels: 'Community Channels',
    },
    hero: {
      wishlistNow: 'WISHLIST NOW',
      wishlistedOnSteam: 'WISHLISTED ON STEAM',
      scrollToExplore: 'Scroll to explore',
    },
    games: {
      badge: 'FEATURED RELEASE',
      headingPrefix: 'OUR',
      headingHighlight: 'GAMES',
      subtitle: 'Explore our cozy-evil claw machine roguelike debut. Assemble rigged setups, play shady cards, and discover quirky combos!',
      viewDetails: 'View Game Details',
      wishlistOnSteam: 'Wishlist on Steam',
      availableOnSteam: 'Available on Steam',
      statusLabel: 'Release Status',
    },
    prizeDenied: {
      title: 'PRIZE DENIED',
      subtitle: 'CASUAL / CLAW MACHINE ROGUELIKE / DECKBUILDER',
      genre: 'CASUAL / CLAW MACHINE ROGUELIKE / DECKBUILDER',
      shortDesc: 'Prize Denied: In this cozy-evil claw machine roguelike, assemble rigged setups and play shady cards to stop customers from ever winning! Discover quirky combos to trap them in an endless addiction loop, draining their pockets dry until they finally win… or go completely broke!',
      fullDesc: `The previous owners were too nice to the customers, so they got kicked out. Now, it's your turn to run the arcade.

Make your customers addicted! Maximize their addiction score to keep them playing, and drain their wallets until you hit your daily income goal.

Build the perfect trap. Pack your machine with prizes and obstacles to create satisfying combos that skyrocket addiction, while making it impossible for them to actually win.

Play rigged cards to sabotage the machine and increase their addiction. But be careful, blatant cheating drains their Trust. If you get caught, they will leave immediately!`,
      releaseDate: 'Q2 2027',
      developer: 'Snownooo Studio',
      publisher: 'Snownooo Studio',
      features: [
        '50+ unlockable prizes and obstacles to rig your machine.',
        '50+ shady cards to manipulate the claw and addiction score.',
        '20+ Boss Customers to challenge, each with unique abilities.',
        '5 distinct Arcades featuring different machines and cards.',
        '7 Days of escalating difficulty to survive in each arcade.'
      ],
      tags: ['Roguelike', 'Deckbuilder', 'Arcade', 'Cozy-Evil', 'Strategy', 'Indie']
    },
    about: {
      welcomeTo: 'WELCOME TO',
      studioNameEn1: 'SNOW',
      studioNameEn2: 'NOOO',
      studioNameZh: '雪落工作室',
      badge: 'Solo Indie Studio · Hong Kong',
      p1Part1: 'Founded in 2024, ',
      p1Strong: 'Snownooo Studio',
      p1Part2: ' is a solo independent developer dedicated to experimental game design. My mission is to craft clever, bite-sized games that deliver an immediate dose of fun and joy to players relaxing after a long, busy day.',
      p2Part1: 'In my debut title ',
      p2Title: 'PRIZE DENIED',
      p2Part2: ', you play the house in a cozy-evil claw machine roguelike. Assemble rigged setups, play shady cards, and discover quirky combos to trap customers in an endless addiction loop—draining their pockets dry until they finally win, or go completely broke!',
      pillarDebutVal: 'Debut',
      pillarDebutLabel: 'PRIZE DENIED',
      pillarSoloVal: 'Solo',
      pillarSoloLabel: 'Independent Dev',
      pillarLocationVal: 'HK',
      pillarLocationLabel: 'Hong Kong Based',
    },
    contact: {
      badge: 'GET IN TOUCH',
      headingPrefix: 'CONTACT &',
      headingHighlight: 'COMMUNITY',
      subtitle: 'Sign up for the latest game updates, connect across our official channels, or reach out directly.',
      emailLabel: 'Official Studio Email',
      copy: 'Copy',
      copied: 'Copied!',
      emailDesc: 'Open for publishing inquiries, co-development, media requests, and developer relations.',
      reviewKeysTitle: 'Review Keys',
      reviewKeysDesc: 'Streamers & journalists can request preview builds directly via email.',
      supportTitle: 'Player Support',
      supportDesc: 'Bug reports, feedback, and gameplay questions welcome anytime.',
      connectTitle: 'CONNECT',
      connectDesc: 'Follow us on social media and stay tuned for the latest updates!',
      newsletterTitle: 'NEWSLETTER',
      newsletterSubtitle: 'Sign up to the Snownooo newsletter for all the latest news and offers direct from the source. No spam, ever, we promise!',
      nameLabel: 'YOUR NAME',
      namePlaceholder: 'ENTER YOUR NAME HERE',
      emailInputLabel: 'EMAIL ADDRESS *',
      emailPlaceholder: 'E.G. YOURNAME@EXAMPLE.COM',
      roleLabel: "I'M A...",
      roleSelectPlaceholder: 'SELECT AN OPTION...',
      roles: {
        player: 'GAMER / PLAYER',
        creator: 'CONTENT CREATOR / STREAMER',
        press: 'JOURNALIST / PRESS',
        developer: 'GAME DEVELOPER',
        partner: 'INDUSTRY PARTNER',
        other: 'OTHER',
      },
      submitButton: 'SIGN UP',
      submittingButton: 'SIGNING UP...',
      successTitle: "YOU'RE ON THE LIST!",
      successDescPrefix: "Thank you for subscribing! We've registered ",
      successDescSuffix: '. You will receive all the latest news, playtest invitations, and offers direct from the source!',
      subscribeAnother: 'Subscribe Another Email',
    },
    footer: {
      bio: 'Based in Hong Kong, Snownooo Studio is a solo independent developer dedicated to experimental game design and crafting clever, bite-sized games that deliver immediate fun and joy.',
      quickNavTitle: 'Quick Navigation',
      navHome: 'Home / Showcase',
      navGames: 'Our Games',
      navAbout: 'About',
      navContact: 'Newsletter & Contact',
      studioDetailsTitle: 'Studio Details',
      studioName: 'Snownooo Studio',
      soloDevLabel: 'Solo Independent Game Developer',
      locationLabel: 'Based in Hong Kong',
      contactLabel: 'Direct Contact:',
      legalNotice: 'All game titles, characters, logos, and original artwork are created by and property of Snownooo Studio. All rights reserved.',
      craftedWith: 'Snownooo Studio. Crafted with',
      forPlayers: 'for players worldwide.',
      backToTop: 'Back to top',
    },
    modal: {
      aboutTitle: 'About The Game',
      keyFeaturesTitle: 'Key Features',
      releaseStatus: 'Release Status',
      developer: 'Developer',
      publisher: 'Publisher',
      platform: 'Platform',
      supportHint: 'Wishlisting on Steam greatly supports us!',
      wishlistCta: 'Wishlist on Steam',
    },
    communityModal: {
      steamTitle: 'Snownooo Studio on Steam',
      steamDesc: 'Follow our official Steam Developer & Creator Hub to receive immediate notifications when new demos, playtests, and releases go live!',
      steamPoint1: 'PRIZE DENIED · Cozy-Evil Roguelike (Target Release: Q2 2027)',
      steamPoint2: '50+ Rigged Prizes, Shady Cards & Boss Customers',
      steamPoint3: 'Wishlist Now to Support Our Indie Journey',
      steamCta: 'Wishlist PRIZE DENIED on Steam',
      close: 'Close',
      discordTitle: 'Join Snownooo Studio Discord Hub',
      discordDesc: 'Hang out with our solo developer, share your claw machine setups, discover secret card combos, and participate in closed beta playtests!',
      discordMembersLabel: 'Community Members:',
      discordMembersVal: '15,480+ Online',
      discordLiveLabel: 'Dev Q&A Sessions:',
      discordLiveVal: 'Weekly Live Streams',
      discordKeysLabel: 'Playtest Keys:',
      discordKeysVal: 'Available in #announcements',
      discordCta: 'Join Discord Community',
      maybeLater: 'Maybe Later',
    },
    toast: {
      wishlisted: 'Wishlisted!',
      toastDesc: 'Added to your Steam Wishlist. You will be notified on launch!',
      supportText: 'Support our indie journey',
      viewOnSteam: 'View on Steam',
    },
  },

  'zh-Hant': {
    nav: {
      home: '首頁',
      games: '遊戲作品',
      about: '關於我們',
      contact: '聯絡與交流',
      communityChannels: '官方社群頻道',
    },
    hero: {
      wishlistNow: '立即加入願望單',
      wishlistedOnSteam: '已加入 STEAM 願望單',
      scrollToExplore: '向下滾動探索',
    },
    games: {
      badge: '焦點新作',
      headingPrefix: '遊戲',
      headingHighlight: '作品',
      subtitle: '探索我們兼具休閒與邪惡的娃娃機Roguelike首作。佈置黑心機台並打出卡牌，阻止顧客出貨！',
      viewDetails: '查看遊戲詳情',
      wishlistOnSteam: '加入 Steam 願望單',
      availableOnSteam: '現已登陸 Steam',
      statusLabel: '發售時程',
    },
    prizeDenied: {
      title: '保證不取物',
      subtitle: '休閒 / 娃娃機 ROGUELIKE / 卡牌構築',
      genre: '休閒 / 娃娃機 ROGUELIKE / 卡牌構築',
      shortDesc: '保證不取物！在這款兼具休閒與邪惡的娃娃機Roguelike遊戲中，佈置黑心機台並打出卡牌，阻止顧客出貨！發掘各種有趣的配搭，將顧客困在無盡的上癮循環中，榨乾他們的口袋，直到他們僥倖出貨……或是徹底破產！',
      fullDesc: `前幾任台主對顧客太好，所以他們被趕走了。現在，輪到你來經營這家娃娃機店了。

讓你的顧客上癮！增加他們的上癮值讓他們一直玩下去，榨乾他們的錢包，直到達成你的營收目標。

打造完美的黑心機台。在機台中塞滿獎品和障礙物，創造出能讓上癮值飆升的爽快配搭，同時讓他們沒辦法成功出貨。

打出卡牌來阻止出貨並增加顧客的上癮值。但請注意，明目張膽的行為會消耗信任值。一旦被抓包，他們就會立刻離開！`,
      releaseDate: '2027 年第 2 季',
      developer: '雪落工作室',
      publisher: '雪落工作室',
      features: [
        '超過 50 種可解鎖的獎品和障礙物，用來改造你的機台。',
        '超過 50 張作弊卡牌，用來操縱爪子和上癮值。',
        '超過 20 位等你來挑戰的 Boss 級顧客，每位都有獨特的特殊能力。',
        '5 家各具特色的娃娃機店，擁有不同的機台和卡牌。',
        '在每家店中生存 7 天，面對不斷升級的難度。'
      ],
      tags: ['Roguelike', '卡牌構築', '街機遊戲', '休閒邪惡', '策略', '獨立遊戲']
    },
    about: {
      welcomeTo: '歡迎來到',
      studioNameEn1: 'SNOW',
      studioNameEn2: 'NOOO',
      studioNameZh: '雪落工作室',
      badge: '獨立遊戲一人工作室 · 香港',
      p1Part1: '成立於 2024 年，',
      p1Strong: '雪落工作室',
      p1Part2: ' 是一家專注於實驗性遊戲設計的獨立一人工作室。我的初心與使命，是打造精巧純粹的小品遊戲，為在忙碌一天後放鬆休息的玩家帶來最即時的樂趣與歡笑。',
      p2Part1: '在我的首作 ',
      p2Title: '保證不取物',
      p2Part2: ' 中，你將在一款兼具休閒與邪惡的娃娃機Roguelike遊戲中化身黑心台主。佈置黑心機台、打出卡牌並發掘奇妙配搭，將顧客困在無盡的上癮循環中——榨乾他們的口袋，直到他們僥倖出貨，或是徹底破產！',
      pillarDebutVal: '首作',
      pillarDebutLabel: '保證不取物',
      pillarSoloVal: '一人開發',
      pillarSoloLabel: '獨立遊戲創作者',
      pillarLocationVal: '香港',
      pillarLocationLabel: '所在地',
    },
    contact: {
      badge: '保持聯絡',
      headingPrefix: '聯絡我們與',
      headingHighlight: '社群交流',
      subtitle: '訂閱獲取最新遊戲動態、加入官方社群頻道交流，或直接與我取得聯繫。',
      emailLabel: '工作室官方信箱',
      copy: '複製',
      copied: '已複製！',
      emailDesc: '歡迎洽談發行合作、共同開發、媒體採訪及開發者交流。',
      reviewKeysTitle: '媒體與實況序號',
      reviewKeysDesc: '實況主與遊戲媒體可直接透過 Email 申請搶先體驗測試版本。',
      supportTitle: '玩家支援與回饋',
      supportDesc: '隨時歡迎回報 Bug、提出玩法建議或交流體驗心得。',
      connectTitle: '社群關注',
      connectDesc: '追蹤我們的社群平台，搶先掌握最新發布與活動情報！',
      newsletterTitle: '電子報訂閱',
      newsletterSubtitle: '訂閱雪落工作室官方電子報，直接獲取第一手最新消息與專屬福利。我們保證絕不發送垃圾郵件！',
      nameLabel: '您的稱呼',
      namePlaceholder: '請輸入您的稱呼',
      emailInputLabel: '電子郵件信箱 *',
      emailPlaceholder: '例如：YOURNAME@EXAMPLE.COM',
      roleLabel: '我的身分...',
      roleSelectPlaceholder: '請選擇一項身分...',
      roles: {
        player: '玩家 / 遊戲愛好者',
        creator: '實況主 / 內容創作者',
        press: '遊戲媒體 / 記者評測',
        developer: '獨立遊戲同業',
        partner: '發行商 / 商務合作夥伴',
        other: '其他身分',
      },
      submitButton: '立即訂閱',
      submittingButton: '正在訂閱...',
      successTitle: '訂閱成功！歡迎加入！',
      successDescPrefix: '感謝您的訂閱！我們已記錄您的信箱 ',
      successDescSuffix: '。您將第一時間收到最新動態、測試邀請與專屬福利！',
      subscribeAnother: '訂閱另一個信箱',
    },
    footer: {
      bio: '雪落工作室成立於香港，是一家專注於實驗性遊戲設計的獨立一人工作室，致力於打造能帶來即時樂趣的精巧小品遊戲。',
      quickNavTitle: '快速導覽',
      navHome: '首頁 / 焦點新作',
      navGames: '遊戲作品',
      navAbout: '關於我們',
      navContact: '聯絡與電子報',
      studioDetailsTitle: '工作室資訊',
      studioName: '雪落工作室',
      soloDevLabel: '獨立遊戲一人創作者',
      locationLabel: '所在地：香港',
      contactLabel: '直接聯絡：',
      legalNotice: '所有遊戲標題、角色形象、標誌及原創藝術皆為雪落工作室之專屬產權。版權所有，翻印必究。',
      craftedWith: '雪落工作室. 用',
      forPlayers: '為全球玩家精心打造。',
      backToTop: '返回頂部',
    },
    modal: {
      aboutTitle: '關於這款遊戲',
      keyFeaturesTitle: '核心特色',
      releaseStatus: '發售時程',
      developer: '開發者',
      publisher: '發行商',
      platform: '發售平台',
      supportHint: '在 Steam 上加入願望單是對我們最大的支持！',
      wishlistCta: '在 Steam 加入願望單',
    },
    communityModal: {
      steamTitle: '雪落工作室 Steam 開發者專區',
      steamDesc: '關注我們的官方 Steam 創作者主頁，第一時間獲取最新試玩 Demo、封閉測試與正式發售通知！',
      steamPoint1: '保證不取物 · 娃娃機 Roguelike (預計發售：2027 Q2)',
      steamPoint2: '超過 50 種黑心獎品、作弊卡牌與 Boss 級顧客',
      steamPoint3: '立即加入願望單，支持我們的獨立創作之路',
      steamCta: '在 Steam 加入願望單',
      close: '關閉',
      discordTitle: '加入雪落工作室 Discord 社群',
      discordDesc: '與獨立開發者即時交流，分享你的黑心機台擺設、發掘隱藏卡牌配搭，並獲取封測資格！',
      discordMembersLabel: '社群成員：',
      discordMembersVal: '15,480+ 在線',
      discordLiveLabel: '開發者面對面：',
      discordLiveVal: '每週直播互動',
      discordKeysLabel: '測試序號：',
      discordKeysVal: '於 #announcements 發布',
      discordCta: '加入 Discord 社群',
      maybeLater: '稍後再說',
    },
    toast: {
      wishlisted: '已加入願望單！',
      toastDesc: '已將遊戲加入您的 Steam 願望單。發售時將自動通知您！',
      supportText: '支持我們的獨立創作之旅',
      viewOnSteam: '在 Steam 上查看',
    },
  },

  'zh-Hans': {
    nav: {
      home: '首页',
      games: '游戏作品',
      about: '关于我们',
      contact: '联系与交流',
      communityChannels: '官方社区频道',
    },
    hero: {
      wishlistNow: '立即加入愿望单',
      wishlistedOnSteam: '已加入 STEAM 愿望单',
      scrollToExplore: '向下滚动探索',
    },
    games: {
      badge: '焦点新作',
      headingPrefix: '游戏',
      headingHighlight: '作品',
      subtitle: '探索我们兼具休闲与邪恶的娃娃机Roguelike首作。布置黑心机台并打出卡牌，阻止顾客出货！',
      viewDetails: '查看游戏详情',
      wishlistOnSteam: '加入 Steam 愿望单',
      availableOnSteam: '现已登陆 Steam',
      statusLabel: '发售时程',
    },
    prizeDenied: {
      title: '保证不取物',
      subtitle: '休闲 / 娃娃机 ROGUELIKE / 卡牌构筑',
      genre: '休闲 / 娃娃机 ROGUELIKE / 卡牌构筑',
      shortDesc: '保证不取物！在这款兼具休闲与邪恶的娃娃机Roguelike游戏中，布置黑心机台并打出卡牌，阻止顾客出货！发掘各种有趣的配搭，将顾客困在无尽的上瘾循环中，榨干他们的口袋，直到他们侥幸出货……或是彻底破产！',
      fullDesc: `前几任台主对顾客太好，所以他们被赶走了。现在，轮到你来经营这家娃娃机店了。

让你的顾客上瘾！增加他们的上瘾值让他们一直玩下去，榨干他们的钱包，直到达成你的营收目标。

打造完美的黑心机台。在机台中塞满奖品和障碍物，创造出能让上瘾值飙升的爽快配搭，同时让他们没办法成功出货。

打出卡牌来阻止出货并增加顾客的上瘾值。但请注意，明目张胆的行为会消耗信任值。一旦被抓包，他们就会立刻离开！`,
      releaseDate: '2027 年第 2 季度',
      developer: '雪落工作室',
      publisher: '雪落工作室',
      features: [
        '超过 50 种可解锁的奖品和障碍物，用来改造你的机台。',
        '超过 50 张作弊卡牌，用来操纵爪子和上瘾值。',
        '超过 20 位等你来挑战的 Boss 级顾客，每位都有独特的特殊能力。',
        '5 家各具特色的娃娃机店，拥有不同的机台和卡牌。',
        '在每家店中生存 7 天，面对不断升级的难度。'
      ],
      tags: ['Roguelike', '卡牌构筑', '街机游戏', '休闲邪恶', '策略', '独立游戏']
    },
    about: {
      welcomeTo: '欢迎来到',
      studioNameEn1: 'SNOW',
      studioNameEn2: 'NOOO',
      studioNameZh: '雪落工作室',
      badge: '独立游戏一人工作室 · 香港',
      p1Part1: '成立于 2024 年，',
      p1Strong: '雪落工作室',
      p1Part2: ' 是一家专注于实验性游戏设计的独立一人工作室。我的初心与使命，是打造精巧纯粹的小品游戏，为在忙碌一天后放松休息的玩家带来最即时的乐趣与欢笑。',
      p2Part1: '在我的首作 ',
      p2Title: '保证不取物',
      p2Part2: ' 中，你将在一款兼具休闲与邪恶的娃娃机Roguelike游戏中化身黑心台主。布置黑心机台、打出卡牌并发掘奇妙配搭，将顾客困在无尽的上瘾循环中——榨干他们的口袋，直到他们侥幸出货，或是彻底破产！',
      pillarDebutVal: '首作',
      pillarDebutLabel: '保证不取物',
      pillarSoloVal: '一人开发',
      pillarSoloLabel: '独立游戏创作者',
      pillarLocationVal: '香港',
      pillarLocationLabel: '所在地',
    },
    contact: {
      badge: '保持联系',
      headingPrefix: '联系我们与',
      headingHighlight: '社区交流',
      subtitle: '订阅获取最新游戏动态、加入官方社区频道交流，或直接与我取得联系。',
      emailLabel: '工作室官方邮箱',
      copy: '复制',
      copied: '已复制！',
      emailDesc: '欢迎洽谈发行合作、共同开发、媒体采访及开发者交流。',
      reviewKeysTitle: '媒体与实况序号',
      reviewKeysDesc: '实况主与游戏媒体可直接通过 Email 申请抢先体验测试版本。',
      supportTitle: '玩家支持与反馈',
      supportDesc: '随时欢迎反馈 Bug、提出玩法建议或交流体验心得。',
      connectTitle: '社区关注',
      connectDesc: '关注我们的社交平台，抢先掌握最新发布与活动情报！',
      newsletterTitle: '电子报订阅',
      newsletterSubtitle: '订阅雪落工作室官方电子报，直接获取第一手最新消息与专属福利。我们保证绝不发送垃圾邮件！',
      nameLabel: '您的称呼',
      namePlaceholder: '请输入您的称呼',
      emailInputLabel: '电子邮件邮箱 *',
      emailPlaceholder: '例如：YOURNAME@EXAMPLE.COM',
      roleLabel: '我的身份...',
      roleSelectPlaceholder: '请选择一项身份...',
      roles: {
        player: '玩家 / 游戏爱好者',
        creator: '实况主 / 内容创作者',
        press: '游戏媒体 / 记者评测',
        developer: '独立游戏同业',
        partner: '发行商 / 商务合作伙伴',
        other: '其他身份',
      },
      submitButton: '立即订阅',
      submittingButton: '正在订阅...',
      successTitle: '订阅成功！欢迎加入！',
      successDescPrefix: '感谢您的订阅！我们已记录您的邮箱 ',
      successDescSuffix: '。您将第一时间收到最新动态、测试邀请与专属福利！',
      subscribeAnother: '订阅另一个邮箱',
    },
    footer: {
      bio: '雪落工作室成立于香港，是一家专注于实验性游戏设计的独立一人工作室，致力于打造能带来即时乐趣的精巧小品游戏。',
      quickNavTitle: '快速导览',
      navHome: '首页 / 焦点新作',
      navGames: '游戏作品',
      navAbout: '关于我们',
      navContact: '联系与电子报',
      studioDetailsTitle: '工作室信息',
      studioName: '雪落工作室',
      soloDevLabel: '独立游戏一人创作者',
      locationLabel: '所在地：香港',
      contactLabel: '直接联系：',
      legalNotice: '所有游戏标题、角色形象、标志及原创艺术皆为雪落工作室之专属产权。版权所有，侵权必究。',
      craftedWith: '雪落工作室. 用',
      forPlayers: '为全球玩家精心打造。',
      backToTop: '返回顶部',
    },
    modal: {
      aboutTitle: '关于这款游戏',
      keyFeaturesTitle: '核心特色',
      releaseStatus: '发售时程',
      developer: '开发者',
      publisher: '发行商',
      platform: '发售平台',
      supportHint: '在 Steam 上加入愿望单是对我们最大的支持！',
      wishlistCta: '在 Steam 加入愿望单',
    },
    communityModal: {
      steamTitle: '雪落工作室 Steam 开发者专区',
      steamDesc: '关注我们的官方 Steam 创作者主页，第一时间获取最新试玩 Demo、封闭测试与正式发售通知！',
      steamPoint1: '保证不取物 · 娃娃机 Roguelike (预计发售：2027 Q2)',
      steamPoint2: '超过 50 种黑心奖品、作弊卡牌与 Boss 级顾客',
      steamPoint3: '立即加入愿望单，支持我们的独立创作之路',
      steamCta: '在 Steam 加入愿望单',
      close: '关闭',
      discordTitle: '加入雪落工作室 Discord 社区',
      discordDesc: '与独立开发者即时交流，分享你的黑心机台摆设、发掘隐藏卡牌配搭，并获取封测资格！',
      discordMembersLabel: '社区成员：',
      discordMembersVal: '15,480+ 在线',
      discordLiveLabel: '开发者面对面：',
      discordLiveVal: '每周直播互动',
      discordKeysLabel: '测试序号：',
      discordKeysVal: '于 #announcements 发布',
      discordCta: '加入 Discord 社区',
      maybeLater: '稍后再说',
    },
    toast: {
      wishlisted: '已加入愿望单！',
      toastDesc: '已将游戏加入您的 Steam 愿望单。发售时将自动通知您！',
      supportText: '支持我们的独立创作之旅',
      viewOnSteam: '在 Steam 上查看',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('snownooo_language') as Language;
      if (saved && (saved === 'en' || saved === 'zh-Hant' || saved === 'zh-Hans')) {
        return saved;
      }
    } catch {
      // ignore
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('snownooo_language', lang);
    } catch {
      // ignore
    }
    if (lang === 'zh-Hant') {
      document.documentElement.lang = 'zh-TW';
    } else if (lang === 'zh-Hans') {
      document.documentElement.lang = 'zh-CN';
    } else {
      document.documentElement.lang = 'en';
    }
  };

  useEffect(() => {
    if (language === 'zh-Hant') {
      document.documentElement.lang = 'zh-TW';
    } else if (language === 'zh-Hans') {
      document.documentElement.lang = 'zh-CN';
    } else {
      document.documentElement.lang = 'en';
    }
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: TRANSLATIONS[language],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
