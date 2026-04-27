# Theme Presets

Ready-to-use color palettes for `PRESENTATION_CONFIG` in `index.html`. Copy the entire `theme` block.

## Salesforce Blue (default)

```javascript
theme: {
  bg: "#032D60",
  surface: "rgba(6,65,122,0.85)",
  accent: "#1B96FF",
  pink: "#FF538A",
  yellow: "#FE9339",
  green: "#45C65A",
}
```

## Dark Neutral

```javascript
theme: {
  bg: "#1a1a2e",
  surface: "rgba(30,30,50,0.85)",
  accent: "#e94560",
  pink: "#e94560",
  yellow: "#f5a623",
  green: "#0cca4a",
}
```

## Forest Green

```javascript
theme: {
  bg: "#0b3d2e",
  surface: "rgba(14,70,52,0.85)",
  accent: "#2ecc71",
  pink: "#e74c8b",
  yellow: "#f39c12",
  green: "#27ae60",
}
```

## Deep Purple

```javascript
theme: {
  bg: "#1a0a2e",
  surface: "rgba(35,15,60,0.85)",
  accent: "#a855f7",
  pink: "#ec4899",
  yellow: "#facc15",
  green: "#4ade80",
}
```

## Midnight

```javascript
theme: {
  bg: "#0f0f1a",
  surface: "rgba(20,20,35,0.85)",
  accent: "#60a5fa",
  pink: "#f472b6",
  yellow: "#fbbf24",
  green: "#34d399",
}
```

## Warm Ember

```javascript
theme: {
  bg: "#1c1210",
  surface: "rgba(40,25,20,0.85)",
  accent: "#f97316",
  pink: "#fb7185",
  yellow: "#fbbf24",
  green: "#84cc16",
}
```

## Ocean Teal

```javascript
theme: {
  bg: "#042f2e",
  surface: "rgba(10,60,58,0.85)",
  accent: "#2dd4bf",
  pink: "#f472b6",
  yellow: "#fde047",
  green: "#4ade80",
}
```

## Creating Custom Themes

Tips for best results:
- `bg` should be dark (the frosted glass panel overlay assumes a dark base)
- `surface` should use rgba with 0.85 opacity for the glass effect
- `accent` is the most visible color (progress bar, links, highlights)
- Test contrast between text (#FFFFFF) and `surface` color
