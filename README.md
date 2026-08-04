<div align="center">

# Pruthvi Shah — Portfolio

**Machine Learning Engineer building intelligent products from idea to deployment**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/pruthvi189/portfolio)
![Next.js](https://img.shields.io/badge/Next.js%2016-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React%2019-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind%20CSS%204-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

</div>

Personal portfolio website for **Pruthvi Shah**, a Machine Learning Engineer specializing in deep learning, NLP, and full-stack AI applications. Showcases ML projects and skills with a smooth, animated single-page experience.

> [!NOTE]
> Looking for the latest version? See [**portfolio-v2**](https://github.com/pruthvi189/portfolio-v2) — the current, actively maintained portfolio. This repo is the earlier iteration.

## ✨ Features

- **Animated single-page layout** — hero, about, skills, projects, contact, and footer sections
- **Interactive project cards** — 3D tilt on hover with mouse-tracked rotation
- **Scroll animations** — staggered reveals, parallax fades, and page transitions with Framer Motion
- **Intro splash + lazy-loaded sections** for a snappy first paint
- **SEO + sitemap** — Next.js App Router with generated `sitemap.ts`
- **Fully responsive** across mobile, tablet, and desktop

## 🛠️ Tech Stack

- **Framework:** Next.js 16 + React 19 (App Router)
- **Styling:** Tailwind CSS 4 + shadcn/ui components
- **Animations:** Framer Motion
- **Language:** TypeScript
- **Deployment:** Vercel

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 📦 Scripts

```bash
npm run dev      # development server
npm run build    # production build
npm run start    # serve production build
npm run lint     # eslint
npx tsc --noEmit # typecheck
```

## 🔧 Configuration

- Site content (name, title, tagline) lives in `src/data/site.ts`
- Projects live in `src/data/projects.ts`
