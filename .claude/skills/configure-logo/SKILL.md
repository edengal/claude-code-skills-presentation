---
name: configure-logo
description: >-
  Configure the logo for a presentation. Use when the user asks to change, set,
  add, remove, hide, or show the logo, brand mark, or watermark in the top-right
  corner, even if they just say "put our logo up there" or "remove the cloud
  thing."
metadata:
  author: presentation-template
  version: "2.0"
---

# Configure Logo

Manages the top-right corner logo by editing the `logo` object in `PRESENTATION_CONFIG` inside `index.html`. Supports either an image file or text rendered inside a cloud SVG shape.

## Ask the user

Before making changes, ask:

1. **Image or text logo?**
   - **Image** -- provide path to a PNG or SVG file
   - **Text** -- provide the text to display (rendered inside a cloud shape)
2. **Show or hide?** (default: show)
3. If image: **Where is the file?** (will be copied to `assets/` if not already there)

## How to apply

### Image logo

```javascript
logo: {
  image: "assets/logo.png",
  show: true,
},
```

If the image is not in `assets/`, copy it there first. The image renders at 60px height with auto width, 0.9 opacity, and a drop shadow. If the image fails to load, it hides automatically.

### Text logo

```javascript
logo: {
  text: "your brand",
  show: true,
},
```

The text appears centered inside a semi-transparent cloud SVG shape in the top-right corner.

### Hide the logo

```javascript
logo: {
  show: false,
},
```

## Gotchas

- If both `image` and `text` are provided, **`image` takes priority**. Remove the `image` key if you want the text cloud to show.
- The logo is fixed-position at top-right (`top: 30px, right: 40px`). It doesn't move with slides.
- Logo images render at 60px height. Very wide logos may overlap with slide content at narrow viewport widths.
- The `show: false` option keeps the config entry but visually hides the logo. This is useful for toggling without losing the configuration.

## Verification

After editing, reload the browser and confirm:
- [ ] Logo appears (or is hidden) as expected
- [ ] Logo doesn't overlap with slide headings or content
- [ ] Image renders clearly (not blurry or stretched)

## Example

User says: "Use the trailhead logo."

```javascript
logo: {
  image: "assets/logo-trailhead.png",
  show: true,
},
```
