---
name: add-component
description: >-
  Add a UI component to an existing slide in a presentation. Use when the user
  asks to add a card, code block, callout, table, feature grid, terminal, image,
  bullet list, tag group, or badge to a slide, even if they just say "add a box
  with some points" or "put a code snippet on slide 3."
metadata:
  author: presentation-template
  version: "2.0"
---

# Add Component

Inserts a UI component into an existing slide by editing `index.html`. Components are the building blocks used inside slide layouts.

## Ask the user

Before making changes, ask:

1. **Which slide?** Identify by number (1-based) or name from the `slides` array in `PRESENTATION_CONFIG` inside `index.html`. Note: slide headings (h1/h2) are set by the `title` field in the config -- to change a heading, update `slides[].title` in `PRESENTATION_CONFIG`.
2. **Component type?** Options:
   - `card` -- frosted glass panel with title and bullets
   - `code-block` -- monospace code with syntax highlighting
   - `callout` -- info box with left blue border
   - `feature-grid` -- icon + title + description items (2-4)
   - `comparison-table` -- two-column comparison table
   - `demo-terminal` -- terminal-style output block
   - `image` -- bordered, rounded image
   - `bullet-list` -- arrow-prefixed list
   - `tag-group` -- row of colored pill labels
   - `badge` -- top pill label
3. **Content** -- the text, code, or data for the component

## Component HTML Snippets

### Card

```html
<div class="card">
  <h3 class="accent-text">TITLE</h3>
  <ul role="list">
    <li>Point one</li>
    <li>Point two</li>
  </ul>
</div>
```

Add `highlight` class for a glowing border: `<div class="card highlight">`.

Wrap two cards in `<div class="content-grid">...</div>` for side-by-side layout.

### Code Block

```html
<div class="code-label" id="code-label-N">FILENAME</div>
<pre class="code-block" role="region" aria-labelledby="code-label-N"><code>CODE_HERE</code></pre>
```

Syntax spans inside `<code>`:

| Class | Color | Use for |
|-------|-------|---------|
| `.kw` | pink | keywords |
| `.str` | green | strings |
| `.key` | blue | key names |
| `.val` | yellow | values |
| `.comment` | gray italic | comments |

### Callout

```html
<div class="callout">Important information here.</div>
```

### Feature Grid

Wrap items in `<div class="feature-list">`:

```html
<div class="feature-item">
  <div class="feature-icon" style="background:rgba(27,150,255,0.2);">
    <span class="accent-text">01</span>
  </div>
  <div>
    <h4>TITLE</h4>
    <p>DESCRIPTION</p>
  </div>
</div>
```

Icon background colors: blue `rgba(27,150,255,0.2)`, pink `rgba(255,83,138,0.2)`, green `rgba(69,198,90,0.2)`, yellow `rgba(254,147,57,0.2)`.

### Comparison Table

```html
<table class="comparison">
  <tr>
    <th></th>
    <th class="col-sub">COLUMN_A</th>
    <th class="col-team">COLUMN_B</th>
  </tr>
  <tr>
    <td>CRITERIA</td>
    <td class="col-sub">VALUE_A</td>
    <td class="col-team">VALUE_B</td>
  </tr>
</table>
```

`.col-sub` renders yellow, `.col-team` renders teal.

### Demo Terminal

```html
<div class="demo-placeholder">
  <div class="demo-terminal">
<span class="prompt">$</span> COMMAND
<span class="output">OUTPUT</span></div>
</div>
```

Classes: `.prompt` (blue), `.flag` (yellow), `.output` (muted). Terminal has a blinking cursor via `::after`.

### Image

```html
<img src="assets/IMAGE.png" alt="ALT_TEXT" class="arch-image" />
```

Wrap in `<div class="content-full" style="text-align:center;">` for centering.

### Bullet List

```html
<ul role="list">
  <li>Point one</li>
  <li>Point two</li>
</ul>
```

Arrow markers are auto-added via CSS. Wrap in `<div class="content-full">` for proper width.

### Tag Group

```html
<div style="display:flex;gap:10px;margin-top:8px;">
  <span class="tag tag-new">LABEL</span>
  <span class="tag tag-opus">LABEL</span>
  <span class="tag tag-feature">LABEL</span>
</div>
```

Tag classes: `.tag-new` (green), `.tag-opus` (pink), `.tag-feature` (blue).

### Badge

```html
<div class="badge">BADGE TEXT</div>
```

### Text color helpers

`<span class="accent-text">blue</span>`, `.pink-text`, `.green-text`, `.yellow-text`.

## How to apply

1. Find the target `<section class="slide">` in `index.html` by counting from the top (1-based).
2. Insert the component HTML inside the section, after existing content or replacing placeholder content.
3. Wrap in an appropriate container if needed (`.content-full`, `.content-grid`, `.feature-list`).

## Gotchas

- Components use CSS animations (`staggerFadeUp`) that trigger when a slide becomes active. New components automatically inherit this -- no extra setup needed.
- Cards and features have hover effects (lift/scale). Don't add custom transforms that conflict.
- Code blocks use `white-space: pre` -- line breaks and indentation in HTML are preserved literally. Be careful with formatting inside `<code>` tags.
- The `id` attribute on `code-label` must be unique across the entire page. Increment the number (e.g., `code-label-2`, `code-label-3`).

## Verification

After editing, reload the browser, navigate to the target slide, and confirm:
- [ ] Component renders correctly with expected styling
- [ ] Content text is readable against the glass panel background
- [ ] Hover effects work (if applicable)

## Example

User says: "Add a callout to slide 3."

Find the 3rd `<section class="slide">` and insert before the closing `</section>`:

```html
<div class="callout">This is important context for the audience.</div>
```
