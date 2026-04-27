---
name: edit-slide
description: >-
  Edit or modify the content of an existing slide. Use when the user asks to
  change, update, edit, fix, or rewrite the text, heading, code, bullets, or
  layout of a specific slide, even if they just say "update slide 3" or "change
  the title on the first slide" or "fix the code on that slide."
metadata:
  author: presentation-template
  version: "1.0"
---

# Edit Slide

Modifies the content of an existing slide by editing its `<section>` HTML in `index.html`. May also update the `slides` array entry in `PRESENTATION_CONFIG` if the slide name or layout type changes.

## Ask the user

Before making changes, ask:

1. **Which slide?** Identify by number (1-based) or name.
2. **What to change?** Options:
   - **Text** -- update heading, body text, bullet points, or labels
   - **Layout** -- swap to a different layout type (requires replacing the full inner HTML)
   - **Code** -- update code block content or syntax highlighting
   - **Components** -- add/remove/edit cards, callouts, tables, etc. (consider `add-component` skill for adding new ones)
   - **Name** -- update the slide name shown in the counter

## How to apply

Progress:
- [ ] Step 1: Locate the slide in `index.html`
- [ ] Step 2: Edit the slide HTML content
- [ ] Step 3: Update `PRESENTATION_CONFIG` if name or layout changed

### Step 1: Locate the slide

Find the Nth `<section class="slide">` element in `index.html` by counting from the top. Each slide is a `<section>` inside `<main>`.

### Step 2: Edit the content

Make the requested changes to the HTML inside the `<section>`. Preserve the section wrapper and its attributes:

```html
<section class="slide" role="group" aria-roledescription="slide" tabindex="-1" aria-hidden="true">
  <!-- edit content here, keep section wrapper intact -->
</section>
```

If changing the layout entirely, replace the inner HTML with the appropriate template from `assets/slide-templates.md`.

### Step 3: Update config (if needed)

If the slide name, layout, or heading changed, update the matching entry in the `PRESENTATION_CONFIG.slides` array:

```javascript
{ name: "New Slide Name", layout: "new-layout-type", title: "New Heading" },
```

The `title` field sets the slide's h1/h2 heading text at runtime. Always update it when changing the slide heading.

## Text color helpers

Inline color spans: `.accent-text` (blue), `.pink-text` (pink), `.green-text` (green), `.yellow-text` (yellow).

## Gotchas

- Slide numbering: the user says "slide 3" (1-based) but the `slides` config array is **0-based** (index 2). The HTML `<section>` elements are also counted from the top starting at 1.
- When changing layout, you must replace the **entire inner HTML** of the section. Mixing layout structures (e.g., cards markup inside a code layout) will produce broken styling.
- Title slides use `class="slide title-slide"` -- don't forget the `title-slide` class for vertical centering. Non-title slides use just `class="slide"`.
- Keep `aria-hidden="true"` on all slides except the currently active one. Don't change this when editing content.
- The `slides` array position must match the `<section>` position. If you only edit content without moving the slide, the index stays the same.

## Verification

After editing, reload the browser and confirm:
- [ ] Navigate to the edited slide -- content appears correctly
- [ ] Slide counter shows the updated name (if changed)
- [ ] All animations and hover effects still work
- [ ] No layout glitches or overlapping elements
