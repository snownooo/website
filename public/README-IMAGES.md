# 🎨 Asset Guide: How to Replace Placeholder Images with Your Own PNGs

All vector illustrations and icons have been replaced with file-based image paths so you can easily drop your own PNG assets into the project!

---

### 📂 Directory Structure

Place your PNG files in the `/public` folder using the following filenames and paths:

```text
/public/
├── images/
│   ├── logo.png                       # Studio Header & Footer Logo (e.g. 256x256 or 512x512 PNG)
│   ├── hero-bg.png                    # Hero background image (e.g. 1920x1080 PNG)
│   │
│   ├── games/                         # Game Card & Showcase Banners (16:9 ratio, e.g. 1280x720 PNG)
│   │   ├── psycho-sleuth.png          # Game 1: Psycho Sleuth (featured hero & catalog)
│   │   ├── cloud-farm-rebirth.png     # Game 2: Cozy Cloud Farm Rebirth
│   │   ├── house-of-spirits.png       # Game 3: House of Spirits Tea Sanctuary
│   │   ├── teatopia.png               # Game 4: Teatopia
│   │   ├── guidebook-of-babel.png     # Game 5: A Guidebook of Babel
│   │   ├── lonestar-drifter.png       # Game 6: Star Drifter Lonestar
│   │   └── tales-of-neon-sea.png      # Game 7: Tales of the Neon Sea
│   │
│   └── icons/                         # Social & Platform Icons (transparent PNGs, e.g. 64x64 or 128x128)
│       ├── steam.png                  # Steam icon
│       ├── discord.png                # Discord icon
│       ├── x.png                      # X / Twitter icon
│       ├── youtube.png                # YouTube icon
│       ├── epic.png                   # Epic Games Store icon
│       └── switch.png                 # Nintendo Switch icon
```

---

### 💡 Features & Fallbacks

- **Zero Breaking State**: If you haven't uploaded a PNG yet, the site automatically displays a fallback image.
- **Instant Replacement**: As soon as you place your `.png` file at any of the paths listed above, the website will display your custom image.
- **Configuring Custom Names or URLs**: If you want to rename your images or use external URLs, you can edit `/src/data/gamesData.ts` and change the `imagePath` and `heroBgPath` properties for any game.
