---
name: set-background
description: >-
  Set or change the presentation background image or solid color. Use when the
  user asks to change, set, remove, or swap the background, wallpaper, backdrop,
  or scenery of their presentation, even if they just say "make it darker" or
  "use a different image."
metadata:
  author: presentation-template
  version: "2.0"
---

# Set Background

Configures the full-viewport background image by editing the `background` property in `PRESENTATION_CONFIG` inside `index.html`.

## Ask the user

Before making changes, ask:

1. **Image or solid color?**
   - **Image** -- provide a file path (will be copied to `assets/` if not already there)
   - **Solid color** -- set `background` to `""` and the `theme.bg` color will be used instead

2. If image: **Where is the file?** The user may provide a path to an existing file, or point to an image already in `assets/`.

## How to apply

### Image background

1. If the image is not already in `assets/`, copy it there.
2. Set the `background` property in `PRESENTATION_CONFIG` inside `index.html`:

```javascript
background: "assets/your-image.png",
```

The image is applied with `background-size: cover`, `background-position: center`, `background-attachment: fixed`.

### Solid color background

Set to empty string:

```javascript
background: "",
```

The `theme.bg` color from the theme object will be used as a solid background.

## Available backgrounds

| File | Description |
|------|-------------|
| `assets/sf-bg.png` | Default Salesforce cityscape |
| `assets/bg-gradient.png` | Abstract gradient |

## Gotchas

- Dark images work best. The frosted glass slide panels use `backdrop-filter: blur(20px)` over the background -- light or busy images make text unreadable.
- Resolution should be 1920x1080 or higher. Smaller images will look blurry on large screens.
- The background is applied to `document.body` at runtime via JS. CSS also sets a fallback, so if you only change the config property, both will update on reload.

## Verification

After editing, reload the browser and confirm:
- [ ] Background image fills the viewport edge-to-edge
- [ ] Text on frosted glass panels is still readable
- [ ] No visible tiling or stretching

## Example

User says: "Use sf-bg.png as the background."

```javascript
background: "assets/sf-bg.png",
```
