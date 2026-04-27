# Slide Templates

Complete HTML templates for each layout type. Insert as a `<section>` inside `<main>` in `index.html`.

All slides must use this base structure:
```html
<section class="slide" role="group" aria-roledescription="slide" tabindex="-1" aria-hidden="true">
  <!-- content -->
</section>
```

For title/closing slides use `class="slide title-slide"`.

Remember to also add a matching entry to the `slides` array in `PRESENTATION_CONFIG` inside `index.html`.

## Title Slide

```html
<div class="slide title-slide">
  <div class="badge">EVENT &middot; DATE</div>
  <h1 style="margin-top:24px;">TITLE</h1>
  <p class="subtitle">SUBTITLE</p>
  <div style="display:flex;gap:10px;margin-top:8px;">
    <span class="tag tag-new">TAG</span>
    <span class="tag tag-opus">TAG</span>
    <span class="tag tag-feature">TAG</span>
  </div>
</div>
```

Tag classes: `.tag-new` (green), `.tag-opus` (pink), `.tag-feature` (blue).

## Agenda Slide

```html
<div class="slide">
  <div class="section-num">Overview</div>
  <h2>Agenda</h2>
  <div class="content-full">
    <ul style="font-size:24px;">
      <li><strong class="accent-text">1.</strong> &nbsp;ITEM</li>
      <li><strong class="pink-text">2.</strong> &nbsp;ITEM</li>
      <li><strong class="green-text">3.</strong> &nbsp;ITEM</li>
      <li><strong class="yellow-text">4.</strong> &nbsp;ITEM</li>
    </ul>
  </div>
</div>
```

## Two-Column Cards

```html
<div class="slide">
  <div class="section-num">SECTION_LABEL</div>
  <h2>HEADING</h2>
  <div class="content-grid">
    <div class="card">
      <h3 class="accent-text">LEFT_TITLE</h3>
      <ul>
        <li>POINT</li>
      </ul>
    </div>
    <div class="card highlight">
      <h3 class="green-text">RIGHT_TITLE</h3>
      <ul>
        <li>POINT</li>
      </ul>
    </div>
  </div>
</div>
```

Add `highlight` class to a card for a glowing border accent.

## Code Block

```html
<div class="slide">
  <div class="section-num">SECTION_LABEL</div>
  <h2>HEADING</h2>
  <div class="content-full">
    <div class="code-label">FILENAME</div>
    <div class="code-block">CODE_CONTENT</div>
    <div class="callout">CALLOUT_TEXT</div>
  </div>
</div>
```

Syntax highlight spans inside `.code-block`:

| Class | Color | Use for |
|-------|-------|---------|
| `.kw` | pink | keywords |
| `.str` | green | strings |
| `.key` | blue | key names |
| `.val` | yellow | values |
| `.comment` | gray italic | comments |
| `.type` | orange | types |

The code-block uses `white-space: pre` -- line breaks and indentation are preserved literally.

## Feature Grid (2x2)

```html
<div class="slide">
  <div class="section-num">SECTION_LABEL</div>
  <h2>HEADING</h2>
  <div class="feature-list">
    <div class="feature-item">
      <div class="feature-icon" style="background:rgba(27,150,255,0.2);">
        <span class="accent-text">01</span>
      </div>
      <div>
        <h4>TITLE</h4>
        <p>DESCRIPTION</p>
      </div>
    </div>
    <div class="feature-item">
      <div class="feature-icon" style="background:rgba(255,83,138,0.2);">
        <span class="pink-text">02</span>
      </div>
      <div>
        <h4>TITLE</h4>
        <p>DESCRIPTION</p>
      </div>
    </div>
    <div class="feature-item">
      <div class="feature-icon" style="background:rgba(69,198,90,0.2);">
        <span class="green-text">03</span>
      </div>
      <div>
        <h4>TITLE</h4>
        <p>DESCRIPTION</p>
      </div>
    </div>
    <div class="feature-item">
      <div class="feature-icon" style="background:rgba(254,147,57,0.2);">
        <span class="yellow-text">04</span>
      </div>
      <div>
        <h4>TITLE</h4>
        <p>DESCRIPTION</p>
      </div>
    </div>
  </div>
</div>
```

## Comparison Table

```html
<div class="slide">
  <div class="section-num">SECTION_LABEL</div>
  <h2>HEADING</h2>
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
</div>
```

`.col-sub` renders yellow, `.col-team` renders teal.

## Demo Terminal

```html
<div class="slide">
  <div class="section-num">SECTION_LABEL</div>
  <h2>HEADING</h2>
  <div class="demo-placeholder">
    <div class="demo-terminal">
<span class="prompt">$</span> COMMAND <span class="flag">--flag</span> <span style="color:var(--text)">ARG</span>

<span class="output">OUTPUT_LINES</span></div>
  </div>
</div>
```

Terminal classes: `.prompt` (blue), `.flag` (yellow), `.output` (muted).

## Image Slide

```html
<div class="slide">
  <div class="section-num">SECTION_LABEL</div>
  <h2>HEADING</h2>
  <div class="content-full" style="text-align:center;">
    <img src="IMAGE_PATH" alt="ALT_TEXT" class="arch-image" />
  </div>
</div>
```

## Content Slide with Bullets (layout: "bullets")

```html
<section class="slide" role="group" aria-roledescription="slide" tabindex="-1" aria-hidden="true">
  <div class="section-num">SECTION_LABEL</div>
  <h2>HEADING</h2>
  <div class="content-full">
    <p style="font-size:22px; margin-bottom: 28px;">
      Introductory paragraph text.
    </p>
    <ul role="list">
      <li>Bullet point</li>
    </ul>
    <div class="callout">Callout text here.</div>
  </div>
</section>
```

## Section Divider (layout: "section")

A transitional slide for separating major sections. Uses the title-slide centering with just a heading and optional subtitle.

```html
<section class="slide title-slide" role="group" aria-roledescription="slide" tabindex="-1" aria-hidden="true">
  <div class="section-num">Section 02</div>
  <h1 style="font-size:56px;">SECTION_TITLE</h1>
  <p class="subtitle">Optional subtitle or description</p>
</section>
```
