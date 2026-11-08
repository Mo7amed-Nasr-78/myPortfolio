# MERN Portfolio

A React portfolio for a MERN stack developer, built with Vite, React Router and Tailwind CSS. It ships with demo content.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the build locally
```

## Replace the demo content

All text, projects and links live in one file: `src/data/portfolio.js`. Edit it and every page updates.

## Structure

```
src/
  data/portfolio.js        all content
  hooks/useTheme.js        light and dark theme, saved in localStorage
  components/              Header, Footer, Hero, ProfileDoc, Facts, StackPillars,
                           ArchitectureDiagram, ProjectCard, ProjectGrid, Timeline,
                           ContactInfo, ContactForm, Button, Chip, Section, SectionHead
  pages/                   Home, Projects, Experience, Contact, NotFound
  App.jsx                  routes
tailwind.config.js         colours, fonts and animation
src/index.css              theme variables (light and dark)
```

## Animation

Motion uses [framer-motion](https://www.framer.com/motion/). Shared timing lives in `src/lib/motion.js`, and `src/components/Reveal.jsx` has the scroll-reveal helpers (`Reveal`, `Stagger`, `StaggerItem`). What animates:

- Hero: headline words rise in one by one, the photo floats gently, and the availability dot pulses.
- Scroll: sections fade up as they come into view, and a thin progress bar fills at the top of the window.
- Facts: numbers count up (`CountUp.jsx`).
- Architecture diagram: boxes appear, then the arrows draw in.
- Projects: the filter pill slides between categories and cards animate in and out.
- Navigation: the active-page pill slides between links, and pages fade in on route change.

Everything respects the visitor's "reduce motion" setting (`MotionConfig` in `src/main.jsx`).

## Photo and logo

Your hero photo is `public/hero.png` and your logo is `public/logo.svg` (also used as the favicon). Swap the files, or change the paths in `src/data/portfolio.js` (`heroImage`, `logo`).

## Theme and colours

The primary colour is `#3498DB`. Colours are CSS variables in `src/index.css`, mapped to Tailwind names (`bg-surface`, `text-muted`, `border-line`, `text-accent`) in `tailwind.config.js`. Change the variables to re-theme the whole site. `--accent-text` is a deeper tone of the same blue used for small text on light backgrounds so it stays readable.

## Connect the contact form

`src/components/ContactForm.jsx` validates the fields but does not send them. Uncomment the `fetch` call and point it at your Express route, for example `POST /api/contact`.

## Deploying a single-page app

Because the site uses client-side routes, configure your host to serve `index.html` for every path (on Netlify add a `_redirects` file with `/* /index.html 200`, on Vercel add a rewrite).
