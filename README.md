# church-site

Website for Good Land New Testament Church of God, Barbados: info pages, a sermon archive, and an events list.
Built with [Astro](https://astro.build) + Tailwind CSS, deployed to Netlify as a static site.

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
recording is uploaded). It appears automatically on the homepage once it's the most recent by date,
and on `/sermons`.

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
the soonest 3 upcoming ones show on the homepage.

## Editing site-wide info

Service times, address, and phone/email currently show as `[placeholders]` in three places — replace
them with the real details:

- `src/components/Footer.astro` — footer (every page)
- `src/pages/index.astro` — homepage "Service Times / Location / Get in Touch" strip
- `src/pages/about.astro` — About page (also has a `[leadership]` section to fill in)

## Brand colors

Reused from the church's existing branding (also used in the Sanctuary presentation software):
`#1B75BB` (blue, primary/links) and `#F6921E` (orange, the one call-to-action color — used sparingly,
same principle as Sanctuary's own design system).

## Deployment

Configured for Netlify (`netlify.toml`): build command `npm run build`, publish directory `dist`.
Connect the repo in Netlify and it deploys automatically on every push to `main`.
