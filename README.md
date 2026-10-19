# Esraa Tawfek — Portfolio

Static site. No build step, no dependencies. Drop it in a GitHub repo, turn on
Pages, done.

## Deploy

1. Create a new public repo, e.g. `esraa-portfolio`.
2. Upload every file in this folder, keeping `assets/` intact.
   Upload the **contents** of the folder, not the folder itself.
3. **Settings → Pages → Source: Deploy from a branch → main / (root)** → Save.
4. Live in about a minute at `https://<username>.github.io/esraa-portfolio/`

## Files

| File | What it's for |
|---|---|
| `index.html` | Page structure. Rarely needs editing. |
| `style.css` | All styling. Palette variables are at the top. |
| `cases.js` | **All the content.** One object per project. |
| `app.js` | Builds the cards, filters and case modals. Leave alone. |
| `assets/` | Images. See `ASSETS.md` for filenames. |

## Editing content

Everything lives in `cases.js`. To remove a project, delete its object.
To add one, copy an existing object and change the fields.
`index.html`, `style.css` and `app.js` don't need touching.

Each case supports: `brief`, `copy` (Arabic samples, rendered RTL), `films`,
`subprojects`, `linkGroups`, `figures`, `links`, `pills` and `handle`.
Any field you leave out simply isn't rendered.

## Palette

Set in `style.css` under `:root`, taken from the supplied feather board:

`#3A1042` plum · `#1B2A4E` navy · `#8B4BAE` purple · `#457B8E` teal · `#B857C6` orchid
