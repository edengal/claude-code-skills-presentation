---
name: manage-characters
description: >-
  Manage the flying Astro characters and floating mascots in a presentation.
  Use when the user asks to add, remove, reposition, resize, or configure the
  floating characters, flying astro, bobbing mascots, or animated figures
  around the slide panel, even if they just say "add astro" or "remove the
  robots."
metadata:
  author: presentation-template
  version: "2.0"
---

# Manage Characters

Configures the flying characters that float around the slide panel edges. Characters are PNG images positioned in the panel gutters with gentle bobbing animations.

## Ask the user

Before making changes, ask:

1. **What to do?** Add, remove, reposition, resize, or change randomization?
2. If adding: **Which images?** Provide PNG files or pick from the available assets below.
3. **Size?** Default is 140px height. Override with the `height` property.
4. **Randomize?** Shuffle positions on each page load? (default: false)

## Available character assets

| File | Description |
|------|-------------|
| `assets/astro-flying.png` | Astro flying |
| `assets/astro-waving.png` | Astro waving |
| `assets/astro-presenting.png` | Astro presenting |
| `assets/astro-jumping.png` | Astro jumping |
| `assets/astro-pointing.png` | Astro pointing |
| `assets/char-astro-cloud.png` | Astro on cloud |
| `assets/char-robot-flying.png` | Robot flying |
| `assets/char-robot-slack.png` | Robot celebrating |
| `assets/char-robot-cloud.png` | Robot presenting |

## How to apply

Edit the `PRESENTATION_CONFIG` object in `index.html` -- the `characters` array and `randomizeCharacters` boolean.

### Add a character

1. Place the PNG in `assets/`.
2. Add an entry to the `characters` array:

```javascript
{ src: "assets/name.png", alt: "Description" },
```

### Set custom height

```javascript
{ src: "assets/name.png", alt: "Name", height: "100px" },
```

### Pin to a fixed position

```javascript
{ src: "assets/name.png", alt: "Name", position: { left: "30px", top: "50%" } },
```

The `position` object accepts any combination of `left`, `right`, `top`, `bottom` with CSS values.

### Remove a character

Delete the entry from the `characters` array. Optionally delete the PNG from `assets/`.

### Toggle randomization

```javascript
randomizeCharacters: true,  // shuffle positions each load
randomizeCharacters: false, // deterministic positions (default)
```

## Edge zones (auto-assigned pool)

Characters without a `position` are placed in these zones cyclically:

| Zone | Properties |
|------|-----------|
| Left center | `left: 30px, top: calc(50% - 70px)` |
| Bottom left | `left: 180px, bottom: 20px` |
| Top right | `right: 40px, top: 110px` |
| Top left | `left: 80px, top: 30px` |
| Bottom right | `right: 50px, bottom: 30px` |
| Upper right | `right: 180px, top: 30px` |

## Gotchas

- Characters are **hidden entirely** below 640px viewport width (mobile).
- Characters **shrink to 100px** between 640px and 1024px.
- Characters are `pointer-events: none` -- they don't block slide interaction.
- More than 6 characters will wrap and may overlap. Stick to 3-4 for best results.
- PNGs with transparent backgrounds work best. Solid-background images will look out of place on the dark presentation background.

## Verification

After editing, reload the browser and confirm:
- [ ] Characters appear in expected positions around the slide edges
- [ ] Bobbing animations are smooth
- [ ] Characters don't overlap the slide content area

## Example

User says: "Add 3 Astro characters."

```javascript
characters: [
  { src: "assets/astro-flying.png",     alt: "Astro flying" },
  { src: "assets/astro-waving.png",     alt: "Astro waving" },
  { src: "assets/astro-presenting.png", alt: "Astro presenting" },
],
randomizeCharacters: false,
```
