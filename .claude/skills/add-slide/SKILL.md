---
name: add-slide
description: >-
  Add a new slide to a presentation. Use when the user asks to add, insert, or
  create a new slide, page, or section in their presentation, even if they just
  say "add a slide about X" or "I need another page."
metadata:
  author: presentation-template
  version: "2.0"
---

# Add Slide

Inserts a new slide into the presentation by editing `index.html` (both the `PRESENTATION_CONFIG` object and the slide HTML).

## Ask the user

Before making changes, ask for:

1. **Layout** -- which type? Options:
   - `title` -- full-screen title with badge, subtitle, tags (vertically centered)
   - `agenda` -- numbered list with colored numbers
   - `cards` -- two-column card grid (use `highlight` class for emphasis)
   - `code` -- code block with syntax spans + optional callout
   - `features` -- 2x2 or auto-fit feature grid with icons (2-4 items)
   - `comparison` -- table with two colored columns
   - `demo` -- terminal-style output block
   - `image` -- centered image with border
   - `bullets` -- section heading with bullet list + optional callout
   - `section` -- section divider (large centered heading, no content)
2. **Title/heading** -- the slide's h1 or h2 text
3. **Position** -- insert after which slide number, or at the end? (default: end)
4. **Content** -- varies by layout:
   - `title`: subtitle, badge text, tags
   - `agenda`: list items (4-6 recommended)
   - `cards`: left card title + bullets, right card title + bullets
   - `code`: filename label, code content, callout text
   - `features`: 2-4 items each with icon number, title, description
   - `comparison`: column headers + rows of criteria/values
   - `demo`: terminal command and output lines
   - `image`: image path and alt text
   - `bullets`: intro paragraph, bullet points, callout
   - `section`: section label, optional subtitle

## How to apply

Progress:
- [ ] Step 1: Add entry to `slides` array in `PRESENTATION_CONFIG`
- [ ] Step 2: Add `<section>` HTML at matching position in `<main>`
- [ ] Step 3: Verify slide count matches between config and HTML

### Step 1: Add to PRESENTATION_CONFIG

Insert an entry in the `slides` array at the correct position:

```javascript
{ name: "Slide Name", layout: "layout-type", title: "Slide Heading" },
```

The `name` appears in the slide counter. The `title` sets the slide's h1/h2 heading text at runtime.

### Step 2: Add to index.html

Insert a `<section>` inside `<main>` at the matching position. Count existing `<section class="slide">` elements to find the right spot.

Base structure for all slides:

```html
<section class="slide" role="group" aria-roledescription="slide" tabindex="-1" aria-hidden="true">
  <!-- slide content here -->
</section>
```

For title/closing slides use `class="slide title-slide"`.

Full HTML templates for each layout are in `assets/slide-templates.md`.

### Text color helpers

Inline color spans: `.accent-text` (blue), `.pink-text` (pink), `.green-text` (green), `.yellow-text` (yellow).

### Callout box

```html
<div class="callout">Important information here.</div>
```

## Gotchas

- You MUST edit two places in the same file (`index.html`): the `PRESENTATION_CONFIG.slides` array AND the `<section>` HTML inside `<main>`. If they get out of sync, slide names won't match their content.
- Slide position in the `slides` array (0-based) must match the position of the `<section>` element in HTML. Count carefully.
- The user says "slide 3" (1-based) but the config array uses 0-based indexing (index 2).
- New slides must have `aria-hidden="true"` -- only the active slide should have `aria-hidden="false"`.

## Verification

After editing, reload the browser and confirm:
- [ ] New slide appears at the correct position when navigating
- [ ] Slide counter shows the correct name
- [ ] Total slide count is correct in the counter

## Example

User says: "Add an agenda slide after slide 1 with 4 items."

**PRESENTATION_CONFIG in index.html** -- insert at index 1:

```javascript
slides: [
  { name: "Title", layout: "title", title: "Title" },
  { name: "Agenda", layout: "agenda", title: "Agenda" },  // <-- new
  { name: "Code Example", layout: "code", title: "Code Example" },
],
```

**index.html** -- insert after the first `<section>`:

```html
<section class="slide" role="group" aria-roledescription="slide" tabindex="-1" aria-hidden="true">
  <div class="section-num">Overview</div>
  <h2>Agenda</h2>
  <div class="content-full">
    <ul role="list" style="font-size:24px;">
      <li><strong class="accent-text">1.</strong> &nbsp;First item</li>
      <li><strong class="pink-text">2.</strong> &nbsp;Second item</li>
      <li><strong class="green-text">3.</strong> &nbsp;Third item</li>
      <li><strong class="yellow-text">4.</strong> &nbsp;Fourth item</li>
    </ul>
  </div>
</section>
```
