# Portfolio homepage prototype

Open `index.html` in a browser (double-click it, or use VS Code's Live Server extension) to view it.

## File map

- `index.html` — page structure: the pot/sprout/butterfly SVG markup and the layout panels.
- `css/style.css` — all styling, colors, layout, and the flight/flap/bloom animations.
- `js/data.js` — **the content you'll edit most.** Intro text, and one entry per project (`PROJECTS`) and work experience (`EXPERIENCES`). Anything wrapped in `[brackets]` is a placeholder to replace.
- `js/script.js` — the interaction logic (hover tooltips, click-to-bloom, panel swapping). You shouldn't need to touch this unless you're changing *how* it behaves, not *what* it shows.

## Adding or removing a project / experience

1. In `index.html`, duplicate a `<g class="sprout" data-project="...">` block (for a project) or a `<div class="butterfly" id="bfly-..." data-exp="...">` block (for a work experience), and give it a new unique id/data attribute.
2. In `js/data.js`, add a matching entry to `PROJECTS` or `EXPERIENCES` with that same key.
3. If it's a butterfly, add a matching flight path in `css/style.css` (copy one of the `@keyframes flyA/B/C/D` blocks and the `#bfly-yourid{ animation: ... }` rule).

## The "get in touch" page

Clicking the "get in touch!" pill swaps the whole screen (`#gardenStage`) out for a second screen (`#contactStage`) — a pink info panel plus a photo panel — and the "back to garden" link swaps it back. This mirrors the sprout/butterfly pattern: `showContact()` / `showGarden()` in `js/script.js` just toggle which stage is displayed, and the copy comes from the `CONTACT` object in `js/data.js`.

To finish setting it up:
- Add your photo to `images/headshot.jpg` (or update the filename in `index.html`'s `.contact-photo` `<img>` tag). Until it's added, the photo panel shows a tinted placeholder box.
- In `js/data.js`, replace `CONTACT.linkedin` and `CONTACT.email` with your real links (currently bracketed placeholders).
- Rewrite `CONTACT.body` if you want contact-specific copy instead of the reused garden tagline, then delete the `CONTACT.note` placeholder-note line in `js/script.js`'s `contactHTML()`.
- Add more pills (e.g. GitHub, resume) by following the `linkedin`/`email` pattern in `contactHTML()` — give each a `.pill.<name>` CSS rule in `style.css`.

## Swapping in your own artwork

The pot, sprouts, flowers, and butterflies are all placeholder SVG. Once you've drawn your own (as transparent PNG or SVG), the easiest path is to replace the inline `<svg>...</svg>` blocks in `index.html` with `<img src="images/assets/your-file.svg">` tags — just keep the same wrapping `<g class="sprout" data-project="...">` / `<div class="butterfly" data-exp="...">` structure so the hover/click behavior keeps working.
