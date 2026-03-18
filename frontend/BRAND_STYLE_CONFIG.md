# Ginja Brand Style Config

## 1) Body Font Style

### Global body typography (`frontend/styles/globals.css`)

```css
body {
  min-height: 100vh;
  background: var(--bg-primary);
  color: var(--text-primary);
  font-family: 'Avenir Next', Avenir, 'Segoe UI', 'Helvetica Neue', Helvetica, sans-serif;
  text-rendering: optimizeLegibility;
}
```

### Heading typography (`h1, h2, h3`)

```css
h1,
h2,
h3 {
  font-family: 'Iowan Old Style', 'Palatino Linotype', Palatino, Georgia, serif;
  letter-spacing: -0.02em;
}
```

### Tailwind sans family (project config)

```js
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
}
```

Note: actual page/body text currently uses the global CSS body font stack (`Avenir Next...`), not Tailwind `font-sans`.

---

## 2) Brand Color Shades (Orange + Green)

### Primary CSS variables (`frontend/styles/globals.css`)

- `--ginja-orange: #ED8522`
- `--ginja-green: #87B66A`

### Tailwind brand colors (`frontend/tailwind.config.js`)

- `ginja-orange: #ED8522`
- `ginja-green: #96B56C`
- `ginja-yellow: #C4C879`

### Theme meta color (`frontend/pages/index.js`)

- `<meta name="theme-color" content="#ED8522" />`

---

## 3) "Ginja" Wordmark Styling (Gin orange + ja green)

### Component used (`frontend/component/landing/GinjaText.jsx`)

```jsx
<span>
  <span className="text-[#FF5A00]">Gin</span>
  <span className="text-[#4B8E1C]">ja</span>
</span>
```

### Current wordmark colors

- `Gin` = `#FF5A00` (orange)
- `ja` = `#4B8E1C` (green)

---

## 4) Quick Reference

- Body font stack: `'Avenir Next', Avenir, 'Segoe UI', 'Helvetica Neue', Helvetica, sans-serif`
- Main orange token: `#ED8522`
- Main green token (CSS variable): `#87B66A`
- Tailwind green token: `#96B56C`
- Wordmark colors:
  - `Gin`: `#FF5A00`
  - `ja`: `#4B8E1C`
