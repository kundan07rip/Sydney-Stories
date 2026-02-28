# Sydney Stories — Premium Cafe Frontend Experience

![Sydney Stories Aesthetic](https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?q=80&w=1200&auto=format&fit=crop)

A high-converting, cinematic, and immersive digital experience built for **Sydney Stories**, a luxury urban café and premium dining experience located in MTM High Street, Bhilwara.

This is a `$5,000+` boutique agency-grade frontend production—polished, immersive, refined, and emotionally engaging.

---

## ✦ The Vibe & Aesthetic
- **Visuals**: Rich dark wood textures, deep espresso browns, charcoal blacks, and warm amber/gold accents.
- **Mood**: Warm, Sophisticated, Intimate, Contemporary Urban Luxury.
- **Typography**: High-contrast luxury serif (`Playfair Display`) paired with clean sans-serif (`Inter`).
- **Interaction**: Immersive smooth scrolling, liquid magnetic cursors, glassmorphism overlays, and 60fps micro-animations.

---

## 🛠 Tech Stack
This project leverages a modern, highly optimized architecture:
- **Framework**: [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) + [Vite](https://vitejs.dev/)
- **Routing**: [React Router v6](https://reactrouter.com/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation Engine**: [Framer Motion](https://www.framer.com/motion/)
- **Scroll Physics**: [Lenis (Studio Freight)](https://lenis.darkroom.engineering/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🎯 Key Features

### Cinematic Landing Page (`/`)
- **Immersive Hero**: Looping atmospheric background video with staggered typography entrances.
- **"The Story" Split-Layout**: Elegant editorial copy layered alongside subtle, parallax-driven overlapping image cards.
- **Bento Menu Teaser**: Asymmetrical hover-reactive grid pulling focus to signature offerings.
- **Atmosphere Gallery**: A pure-CSS masonry layout featuring cinematic sepia/grain color-grading.

### Dedicated Menu Experience (`/menu`)
- **Full Architecture Data**: 83+ items spanning 18 unique categories powered by a robust JSON architecture.
- **Glassmorphism Filter Bar**: Real-time local search and horizontal scrolling category tabs.
- **Dietary Toggles**: An animated "Pure Veg" switch that live-filters the grid.
- **Framer `layout` Grid**: Beautiful 60fps cascading shuffle animations when filters change state.
- **Premium Cards**: Image hover-zooms, unified price styling, and magnetic "Add" buttons.

### Agency-Grade Polish
- **Custom Liquid Cursor**: A magnetic dot cursor that snaps to interactive elements (buttons, links).
- **Smooth Scrolling Wrapper**: Overriding native browser scroll for buttery, inertial parallax effects via Lenis.
- **Performance**: Strict sub-100ms TTI targets, lazy loaded components, and CSS hardware-acceleration clipping.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kundan07rip/Sydney-Stories.git
   cd Sydney-Stories
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── layout/       # Global Navbar, Footer, SmoothScroll wrapper
│   └── ui/           # Reusable micro-components (Cursor, MenuCard)
├── data/
│   └── menu.json     # 83+ structured cafe items
├── pages/
│   ├── Home.tsx      # Main cinematic landing page
│   └── Menu.tsx      # Dedicated filtering/grid experience
├── sections/         # Home page module shards (Hero, About, Gallery)
├── utils/            # Helper functions (`cn` tailwind merge)
├── App.tsx           # React Router implementation
└── index.css         # Reset, Tailwind, Fonts, and Lenis logic
```

---

## 📝 License
Design & Architecture developed for **Sydney Stories Café**. All rights reserved.
