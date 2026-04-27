---
name: configure-slide-counter
description: >-
  Configure the slide number counter display. Use when the user asks to show,
  hide, move, restyle, resize, or reformat the slide counter, slide number,
  page number, or progress indicator at the bottom of the screen, even if they
  just say "hide the slide number" or "make the counter bigger."
metadata:
  author: presentation-template
  version: "2.0"
---

# Configure Slide Counter

Controls the slide number display via the `slideCounter` object in `PRESENTATION_CONFIG` inside `index.html`.

## Ask the user

Before making changes, ask:

1. **What to change?** Show/hide, reposition, resize, recolor, or change the format?
2. If repositioning: **Where?** `bottom-right` (default), `bottom-left`, `top-right`, `top-left`
3. If reformatting: **Which format?**
   - `numbered` (default) -- "1 / 6 -- Slide Name"
   - `simple` -- "Slide 1 of 6"
   - `minimal` -- "1 / 6"

## How to apply

Edit the `slideCounter` object in `PRESENTATION_CONFIG` inside `index.html`:

```javascript
slideCounter: {
  show: true,
  format: "numbered",
  position: "bottom-right",
  fontSize: "14px",
  color: "",
},
```

### Properties

| Property | Default | Description |
|----------|---------|-------------|
| `show` | `true` | Set to `false` to hide the counter entirely |
| `format` | `"numbered"` | `"numbered"` = "1 / 6 -- Name", `"simple"` = "Slide 1 of 6", `"minimal"` = "1 / 6" |
| `position` | `"bottom-right"` | One of: `"bottom-right"`, `"bottom-left"`, `"top-right"`, `"top-left"` |
| `fontSize` | `"14px"` | Any CSS font-size value |
| `color` | `""` | Any CSS color value; empty string uses `--text-muted` default |

### Hide the counter

```javascript
slideCounter: { show: false },
```

### Move to bottom-left

```javascript
slideCounter: { show: true, position: "bottom-left" },
```

### Minimal format with larger text

```javascript
slideCounter: { show: true, format: "minimal", fontSize: "18px" },
```

## Gotchas

- The counter label after the dash comes from the `slides[].name` field in `PRESENTATION_CONFIG`. If a slide has no `name`, the `numbered` format falls back to "Slide N of M".
- The `#slideNum` element has `aria-live="polite"` for screen readers. Setting `show: false` hides it visually but the element remains in the DOM for accessibility.
- Omitting the `slideCounter` object entirely uses all defaults (visible, numbered, bottom-right, 14px, muted text).

## Verification

After editing, reload the browser and confirm:
- [ ] Counter shows (or is hidden) as expected
- [ ] Position is correct on the screen
- [ ] Format displays the right information
- [ ] Counter updates correctly when navigating between slides
