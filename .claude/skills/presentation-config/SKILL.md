---
name: presentation-config
description: >-
  Overview and router for presentation-template configuration. Use when the user asks about the project structure or how to configure a presentation. Routes to specialized skills for each feature area.
metadata:
  author: presentation-template
  version: "2.0"
---

# Presentation Config

Central hub for configuring a presentation-template project. Each feature area has a dedicated skill -- use the right one for the task.

## Project Layout

```
presentation-directory/
  index.html    Slides, CSS, JS, and the PRESENTATION_CONFIG object (all-in-one)
  assets/       Images: background, character PNGs, logo, diagrams
```

All visual settings live in the `PRESENTATION_CONFIG` object at the top of `index.html` (inside a `<script>` tag, lines 11-38). No build step needed. After editing, reload the browser.

## Feature Skills

Every skill maps to a section in `PRESENTATION_CONFIG` -- the config object is the single source of truth.

| Task | Skill | Config section |
|------|-------|---------------|
| Add a new slide | `add-slide` | `slides[]` (name, layout, title) + slide HTML |
| Edit a slide | `edit-slide` | `slides[].title` + slide HTML |
| Add a component | `add-component` | `slides[].title` (headings) + slide HTML |
| Change colors | `change-theme` | `theme` |
| Set background | `set-background` | `background` |
| Configure logo | `configure-logo` | `logo` |
| Manage characters | `manage-characters` | `characters` + `randomizeCharacters` |
| Set up auto-play | `configure-autoplay` | `autoPlay` |
| Slide counter | `configure-slide-counter` | `slideCounter` |

## Reference Files

- `assets/slide-templates.md` -- full HTML templates for all 10 slide layouts
- `assets/theme-presets.md` -- 7 ready-to-use color palettes
- `assets/default-config.js` -- complete config template with all options documented

## Gotchas

- Everything is in one file (`index.html`). There is no separate `config.js`. The `PRESENTATION_CONFIG` object and all slide HTML live together.
- No build step -- just open `index.html` in a browser. After any edit, reload the page.
- The `default-config.js` in the `assets/` folder is a reference template only, not a runtime file.
- Slide numbering: users say "slide 3" (1-based) but the `slides` config array is 0-based (index 2).
