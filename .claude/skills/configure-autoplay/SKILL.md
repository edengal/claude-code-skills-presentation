---
name: configure-autoplay
description: >-
  Configure auto-play for automatic slide advancement. Use when the user asks
  to enable, disable, or adjust auto-play, auto-run, auto-advance, slide timer,
  kiosk mode, looping, or timed slide progression, even if they just say "make
  it play automatically" or "stop auto-advancing."
metadata:
  author: presentation-template
  version: "2.0"
---

# Configure Auto-play

Controls automatic slide advancement by editing the `autoPlay` object in `PRESENTATION_CONFIG` inside `index.html`.

## Ask the user

Before making changes, ask:

1. **Enable or disable?**
   - **Enable** -- auto-advance slides on a timer
   - **Disable** -- remove the `autoPlay` object entirely to hide the button
2. If enabling: **Start on load?** (default: false -- user must press P or click the button)
3. If enabling: **Interval?** Seconds per slide (default: 5)

## How to apply

### Enable auto-play

Add or update the `autoPlay` object in `PRESENTATION_CONFIG` inside `index.html`:

```javascript
autoPlay: {
  enabled: true,    // start playing on page load
  interval: 5000,   // milliseconds per slide
},
```

- `enabled: true` starts auto-advancing immediately on load
- `enabled: false` shows the button but doesn't start until the user presses P or clicks it

### Disable auto-play

Remove the entire `autoPlay` object from `PRESENTATION_CONFIG` in `index.html`. This hides the play/pause button completely.

## Runtime behavior

- **Toggle**: press `P` key or click the play/pause button at bottom center
- **Auto-stop**: manual navigation (arrow keys, click, Home/End) pauses auto-play
- **Loop**: wraps from last slide back to slide 1
- **Visual indicator**: green pulsing dot when playing, muted dot when paused

## Gotchas

- The auto-play button is **hidden on screens <= 1024px** (tablets and mobile). Auto-play still works via keyboard `P` but there's no visible button.
- Any manual navigation (arrow keys, clicking, Home/End) **immediately pauses** auto-play. The user must press P again to resume.
- The interval is in **milliseconds**, not seconds. 5 seconds = `5000`, 10 seconds = `10000`.
- Setting `enabled: true` means the presentation starts auto-advancing the moment the page loads -- good for kiosk mode, bad for live demos.

## Verification

After editing, reload the browser and confirm:
- [ ] Play/pause button appears (or is hidden if disabled)
- [ ] Slides advance at the configured interval
- [ ] Manual navigation pauses auto-play as expected

## Example

User says: "Auto-play every 8 seconds, but don't start automatically."

```javascript
autoPlay: {
  enabled: false,
  interval: 8000,
},
```
