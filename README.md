# Jessica Oshiro — Portfolio

Personal portfolio website built with Next.js 14 and Tailwind CSS. Fully static, no backend required.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS v3
- **Language:** TypeScript
- **Deployment:** Vercel (static export)

## Local Development

**Prerequisites:** Node.js 18 or higher

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
```

This generates a static site in the `/out` directory.

## Deploy to Vercel

### Option 1: Via GitHub (recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and click **Add New Project**
3. Import your GitHub repository
4. Vercel auto-detects Next.js — no configuration needed
5. Click **Deploy**

The `vercel.json` file already configures the output directory to `out`.

### Option 2: Vercel CLI

```bash
npm install -g vercel
vercel
```

## Customization

### Update your Upwork URL

In `src/components/Hero.tsx` and `src/components/Contact.tsx`, replace the `href="#"` placeholder on the Upwork button with your actual Upwork profile URL.

### Update project data

Edit `src/data/projects.ts` to add, remove, or modify projects.

### Update skills

Edit `src/data/skills.ts` to update your skill categories and tools.
