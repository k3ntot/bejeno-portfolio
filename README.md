# John Kenneth Bejeno — Portfolio

Personal portfolio website for John Kenneth Bejeno, fourth-year Information Technology student at Quezon City University.

Built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. Deployable to Vercel with zero configuration.

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Updating Your Portfolio

All personal data lives in one file:

```
lib/data.ts
```

Edit this file to update:
- Name, email, GitHub URL
- About text
- Skills and proficiency levels
- Projects (title, description, technologies, links)
- Certifications (title, organization, year, certificate URL)
- Interests

### Adding a Resume

Place your resume PDF at:

```
public/resume.pdf
```

The Download Resume button will automatically pick it up.

### Adding Certificate Files

For each certification, place the file in `public/` and update `certificateUrl` in `lib/data.ts`:

```ts
certificateUrl: "/certificates/cert-name.pdf",
```

### Updating Your GitHub URL

In `lib/data.ts`:

```ts
github: "https://github.com/your-actual-username",
```

### Updating Your Site URL After Deployment

After deploying to Vercel, update `siteUrl` in `lib/data.ts` with your actual deployment URL:

```ts
siteUrl: "https://your-project.vercel.app",
```

---

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles, Tailwind base, animations
│   ├── layout.tsx        # Root layout, metadata, SEO
│   └── page.tsx          # Main page (assembles all sections)
├── components/
│   ├── Navigation.tsx    # Sticky nav with mobile hamburger menu
│   ├── Hero.tsx          # Hero section with tech visual
│   ├── About.tsx         # About section + student profile card
│   ├── Skills.tsx        # Technical and soft skills
│   ├── Projects.tsx      # Project cards grid
│   ├── Certifications.tsx # Training & certifications timeline
│   ├── Interests.tsx     # Interests cards
│   ├── Contact.tsx       # Contact section with email/GitHub
│   ├── Footer.tsx        # Site footer
│   ├── SectionHeader.tsx # Reusable section heading component
│   └── RevealObserver.tsx # Scroll-triggered fade-in animations
├── lib/
│   └── data.ts           # ← ALL personal data lives here
└── public/
    ├── favicon.svg
    ├── resume.pdf        # Add your actual resume here
    └── og-image.png      # Add a 1200×630 image for social sharing
```

---

## Deployment to Vercel

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel auto-detects Next.js — no configuration needed
4. Deploy

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

---

## Adding an OG Image

Replace `public/og-image.png` with a real 1200×630 PNG image for better social sharing previews. A simple design with your name and role on a dark background works well.
