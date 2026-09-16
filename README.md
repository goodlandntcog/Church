# church-site

Website for Goodland New Testament Church of God, Barbados: info pages, a sermon archive, and an
events list. Built with [Astro](https://astro.build) + Tailwind CSS, deployed to Netlify as a
static site.

## Getting started

```sh
npm install
npm run dev      # http://localhost:4321
```

```sh
npm run build     # builds the static site into dist/
npm run preview   # serve that build locally to sanity-check it before deploying
npm run astro check   # type-check
```

## Pages

- `/` — home
- `/about` — history, leadership, service times, location
- `/live-and-zoom` — livestream + Zoom links for each service
- `/ministries` — ministry areas (placeholder cards — fill in the real ones)
- `/sermons`, `/sermons/[id]` — sermon archive (see below)
- `/events` — upcoming/past events (see below)
- `/gallery` — photo grid (placeholder tiles — swap in real photos)
- `/prayer` — prayer request info
- `/visit` — what to expect, service times, location (the "Plan your visit" nav target)

## Adding a sermon

Add a new file to `src/content/sermons/`, named anything ending in `.md` (the filename becomes the
page's URL, e.g. `walking-in-faith.md` → `/sermons/walking-in-faith`):

```md
---
title: "Sermon Title"
speaker: "Pastor's Name"
date: 2026-09-14
series: "Optional series name"
scripture: "Optional reference, e.g. John 3:16"
youtubeId: "optional-youtube-video-id"   # from a YouTube URL: youtube.com/watch?v=THIS_PART
summary: "One or two sentences shown on the sermon list and homepage."
---

Any longer notes/transcript go here as regular markdown — optional.
```

`youtubeId` embeds the video on the sermon's page. Leave it out for a text-only entry (or before the
recording is uploaded). It appears automatically on the homepage's "This Sunday" section once it's
the most recent by date, and on `/sermons`.

## Adding an event

Same idea, in `src/content/events/`:

```md
---
title: "Event Title"
date: 2026-10-11
location: "Optional location, e.g. Fellowship Hall"
summary: "One or two sentences."
---

Optional longer description as markdown.
```

Events automatically move from "Upcoming" to "Past Events" on `/events` once their date passes, and
the soonest 3 upcoming ones show on the homepage's "What's coming up" section.

## Editing site-wide info

Service times, address, and phone/email show as `[placeholders]` in several places — replace them
with the real details:

- `src/components/Footer.astro` — footer (every page)
- `src/pages/index.astro` — homepage service-times strip
- `src/pages/about.astro`, `src/pages/visit.astro` — service times, location, leadership
- `src/pages/live-and-zoom.astro` — Zoom link/ID, livestream channel link
- `src/pages/ministries.astro`, `src/pages/gallery.astro`, `src/pages/prayer.astro` — placeholder
  content pending real ministry descriptions, photos, and a prayer-request contact method

`src/components/Logo.astro` is a placeholder mark (a simple cross icon) — swap it for the real church
logo once you have an image file (drop it in `public/` and reference it there).

## Design system

The visual design (colors, type, layout) was built out from a Claude Design mockup. Tokens live in
`src/styles/global.css` under `@theme`:

- `navy` `#071a3a` / `navy-2` `#0a1f4d` — primary dark backgrounds, headline text
- `blue` `#1b6fae` — links, secondary buttons
- `gold` `#ffd200` — the "warm welcome" accent (primary CTA, active nav underline)
- `orange` `#f6921e` — the "live now" accent (play buttons, live indicators)
- `cream` `#fbf8f2` / `cream-card` `#f1ebdf` — page background / card background
- Fonts: `font-serif` (Playfair Display, headings) and `font-mono` (IBM Plex Mono, small
  uppercase labels), both self-hosted via `@fontsource`; body text uses the system font stack.

## Deployment

Configured for Netlify (`netlify.toml`): build command `npm run build`, publish directory `dist`.
Connect the repo in Netlify and it deploys automatically on every push to `main`.
