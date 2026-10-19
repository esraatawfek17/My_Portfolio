# assets/ — naming guide

All images go directly in `assets/`. No sub-folders.
Missing files fail gracefully: a card without a cover shows a plum/navy
placeholder with the brand's initials, and a missing grid simply doesn't render.
So you can publish now and add images whenever they're ready.

---

## The rule

| Type | Filename | Notes |
|---|---|---|
| Card cover | `<client>-cover.jpg` | One per case, always. Landscape 4:3 (~1200×900) looks best. |
| Grid images | `<client>-grid-1.jpg` → `<client>-grid-4.jpg` | **Up to 4 per case.** Add as many as you have — 1, 2, 3 or 4. They render in numeric order. |
| Portrait | `esraa-profile.jpg` | Already in the folder. |

`<client>` is the case's `id` in `cases.js` — always lowercase, hyphenated.

---

## Full list — 15 cases

| Case | Cover | Grids (up to 4) |
|---|---|---|
| Yafa Restaurant | `yafa-cover.jpg` | `yafa-grid-1.jpg` … `-4.jpg` |
| Hathout | `hathout-cover.jpg` | `hathout-grid-1.jpg` … `-4.jpg` |
| Coffee Wizard | `coffee-wizard-cover.jpg` | `coffee-wizard-grid-1.jpg` … `-4.jpg` |
| Sharqi | `sharqi-cover.jpg` | `sharqi-grid-1.jpg` … `-4.jpg` |
| Mac 'N' Pie | `mac-n-pie-cover.jpg` | `mac-n-pie-grid-1.jpg` … `-4.jpg` |
| Hamdy Shalaby Restaurant | `hamdy-shalaby-rest-cover.jpg` | `hamdy-shalaby-rest-grid-1.jpg` … `-4.jpg` |
| Hamdy Shalaby Butchery | `hamdy-shalaby-butchery-cover.jpg` | `hamdy-shalaby-butchery-grid-1.jpg` … `-4.jpg` |
| Cairo Eats | `cairo-eats-cover.jpg` | `cairo-eats-grid-1.jpg` … `-4.jpg` |
| UPCELLRO | `upcellro-cover.jpg` | `upcellro-grid-1.jpg` … `-4.jpg` |
| Dermatopia | `dermatopia-cover.jpg` | `dermatopia-grid-1.jpg` … `-4.jpg` |
| **Revita Vet Clinic** | `revita-cover.jpg` | `revita-grid-1.jpg` … `-4.jpg` |
| Arty Smile | `arty-smile-cover.jpg` | `arty-smile-grid-1.jpg` … `-4.jpg` |
| Alia Hijab | `alia-hijab-cover.jpg` | `alia-hijab-grid-1.jpg` … `-4.jpg` |
| El Shazly Stationery | `el-shazly-cover.jpg` | `el-shazly-grid-1.jpg` … `-4.jpg` |
| Run Agency | `run-agency-cover.jpg` | `run-agency-grid-1.jpg` … `-4.jpg` |

### Grids with a specific meaning

| File | What it should be |
|---|---|
| `hathout-grid-1.jpg` | Eid campaign grid |
| `hathout-grid-2.jpg` | Summer campaign grid |
| `dermatopia-grid-1.jpg` | Content grid |
| `dermatopia-grid-2.jpg` | Campaign grid |
| `yafa-grid-1.jpg` | Palestinian heritage series grid |
| `upcellro-grid-1.jpg` | Launch / awareness rollout grid |

Captions for these are already written in `cases.js`. Grids 3 and 4 use a
generic caption — edit it there if you want something specific.

---

## Renaming from the Drive folders

### Revita Vet Clinic — folder `Revita`

| Drive file | Rename to |
|---|---|
| Logo | `revita-cover.jpg` |
| Grid 1 | `revita-grid-1.jpg` |
| Grid 2 | `revita-grid-2.jpg` |

### "Portfolio ET" folder

| Drive folder | Drive file | Rename to |
|---|---|---|
| Yafa | Cover | `yafa-cover.jpg` |
| Hathout | Cover | `hathout-cover.jpg` |
| Hathout | grid 1 | `hathout-grid-1.jpg` |
| Hathout | Grid 2 | `hathout-grid-2.jpg` |
| Wizard | Cover | `coffee-wizard-cover.jpg` |
| Shar2y | Cover | `sharqi-cover.jpg` |
| Mac n pie | Cover | `mac-n-pie-cover.jpg` |
| Hamdy shalaby rest | Cover | `hamdy-shalaby-rest-cover.jpg` |
| Hamdy shalaby butcher | Cover | `hamdy-shalaby-butchery-cover.jpg` |
| Cairo eats | IMG_8030.JPG | `cairo-eats-cover.jpg` |
| Upcellro | Cover | `upcellro-cover.jpg` |
| Upcellro | grid | `upcellro-grid-1.jpg` |
| Dermatopia | Cover | `dermatopia-cover.jpg` |
| Dermatopia | Grid 1 | `dermatopia-grid-1.jpg` |
| Dermatopia | Grid 2 | `dermatopia-grid-2.jpg` |
| Arty smile | Cover | `arty-smile-cover.jpg` |
| Alia | Cover | `alia-hijab-cover.jpg` |
| Elshazly | IMG_8033.JPG | `el-shazly-cover.jpg` |
| Run ag | Cover | `run-agency-cover.jpg` |

---

## Instagram handles

14 of the 15 cases have one. **Arty Smile** is intentionally left without one.

To add or change a handle, edit the case's `handle:` line in `cases.js`:
```js
handle: { label: "@theirhandle", url: "https://www.instagram.com/theirhandle" },
```

---

## Adding a new case later

1. Copy an existing object in `cases.js`; change `id`, `client`, `cat`, `cover`, etc.
2. Name its images after the new `id` using the pattern above.
3. Done — card, filter and modal all build themselves from that object.

## Changing how many grids a case shows

Open `cases.js`, find the case, add or delete lines in its `figures` array.
There's no hard cap in the code — 4 is just the number of slots pre-wired.
