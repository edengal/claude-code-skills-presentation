---
name: change-theme
description: >-
  Change the color theme or palette of a presentation. Use when the user asks
  to change colors, apply a theme, switch palette, update the look and feel,
  make it darker, make it purple, or adjust any visual color scheme, even if
  they just describe a mood like "make it warmer" or "corporate blue."
metadata:
  author: presentation-template
  version: "2.0"
---

# Change Theme

Updates the `theme` object in `PRESENTATION_CONFIG` inside `index.html` to change all presentation colors at once.

## Ask the user

Before making changes, ask:

1. **Preset or custom?**
   - **Preset** -- choose from: Salesforce Blue, Dark Neutral, Forest Green, Deep Purple, Midnight, Warm Ember, Ocean Teal
   - **Custom** -- provide individual colors

2. If custom, ask for any or all of these (missing keys keep current values):

| Key | CSS variable | Controls | Tips |
|-----|-------------|----------|------|
| `bg` | `--bg` | Page background fallback | Should be dark |
| `surface` | `--surface` | Card/panel fill | Use rgba at ~0.85 opacity |
| `accent` | `--accent` | Progress bar, links, highlights | Most visible color |
| `pink` | `--pink` | Tags, code keywords | |
| `yellow` | `--yellow` | Code values, flags | |
| `green` | `--green` | Code strings, success | |

## How to apply

Replace the `theme` object in `PRESENTATION_CONFIG` inside `index.html`:

```javascript
theme: {
  bg: "#032D60",
  surface: "rgba(6,65,122,0.85)",
  accent: "#1B96FF",
  pink: "#FF538A",
  yellow: "#FE9339",
  green: "#45C65A",
},
```

Full preset definitions are in `assets/theme-presets.md`.

## Gotchas

- `bg` must be a **dark color**. The frosted glass panel overlay (`backdrop-filter: blur(20px)`) assumes a dark base -- light backgrounds make text unreadable.
- `surface` must use **rgba with ~0.85 opacity** for the glass effect. Using a solid hex color (e.g., `#06417A`) breaks the frosted glass transparency.
- Text is always white (`#FFFFFF`). Ensure sufficient contrast between `#FFFFFF` and the `surface` color.
- The `accent` color is the most visible -- it drives the progress bar, links, and highlights. Pick this first when creating a custom theme.

## Verification

After editing, reload the browser and confirm:
- [ ] All slides have consistent colors
- [ ] Text is readable on glass panels (good contrast)
- [ ] Progress bar and links use the new accent color
- [ ] Code syntax highlighting colors look distinct from each other

## Example

User says: "Make it purple."

Apply the Deep Purple preset:

```javascript
theme: {
  bg: "#1a0a2e",
  surface: "rgba(35,15,60,0.85)",
  accent: "#a855f7",
  pink: "#ec4899",
  yellow: "#facc15",
  green: "#4ade80",
},
```
