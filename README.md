# AI Ready School - Redesign

## Project Overview
This project is a complete homepage redesign and frontend rebuild of AI Ready School, an AI ecosystem platform for K-12 schools. The new landing page is structured to provide clear information on their core products: Cypher, Morpheus, Zion, NEO, and Matrix.

## Problems Identified
1. **Weak Visual Hierarchy**: The original site lacked visual distinction between headings, elements, and call-to-actions, making it hard for users to understand value at a glance.
2. **Bland UI Design**: Sections blended into a plain white background without color variations or visual separation, resulting in lower engagement.
3. **Complex Product Ecosystem**: The relationship between different offerings was disjointed and hard for decision-makers to digest cohesively.
4. **Unclear Conversion Paths**: Multiple but disconnected CTAs led to poor lead generation flows.

## Solutions Implemented
- **Modern EdTech Color Palette**: Established a strict global design system (`index.css`) featuring custom tailored hex codes (#F8FBFF to #EEF3FF gradient for Hero, #F3F6FF, #F7F9FC, and #0F172A for semantic alternating section backgrounds) to ensure optimum text contrast and pacing.
- **Improved Hierarchy & Pacing**: Introduced distinct sections with scalable typography and `.ed-card` standardization. Added a dedicated `UseCases` section sourced directly from scraped copy outlining explicit value for Students, Teachers, and Administrators.
- **Product Ecosystem Cards**: Built a unified Grid showcasing all platforms (Cypher, Morpheus, Zion, NEO, Matrix). Engineered custom hover physics using a 0.25s React state delay (`useRef`, `setTimeout`) to prevent misclicks, alongside subtle opacity transitions.
- **Authentic Scrape Routing**: All links, including the `Navbar` Mega-Menu dropdown hubs ("Learning Hub", "Creative Hub") and agent cards, have been retrofitted to point exactly to their canonical `https://www.aireadyschool.com/` URLs.
- **Clear Conversion Paths**: Consolidated CTAs prioritizing the `.btn-primary` "Schedule a Call" action, prominently featured in the sticky mega-menu navbar, hero, and main bottom CTA sections.

## Tech Stack
- **Framework**: React via Vite
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React

## How to Run Locally

You will need Node.js installed on your system.

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open `http://localhost:3000` in your browser.

## Deployment Instructions

To build the project for production:
```bash
npm run build
```
This generates optimized static files in the `dist` folder. You can directly host this folder on platforms like Vercel, Netlify, or AWS S3.
