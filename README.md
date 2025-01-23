# Tailwind 4.0 + Radix Colors

This package creates a Tailwind 4.0 @theme CSS file with Radix colors, not including alpha colors.

## Installation
```bash
npm install -D tailwind-4-radix-colors
```

## Usage
1. Import the CSS file:
Add the generated @theme CSS file to the main CSS file of your project:
```css
@import "tailwindcss";
@import "tailwind-4-radix-colors/dist/theme.css";
```
2. Use the Radix Colors using Tailwind syntax:
```html
<div class="bg-violet-2 dark:bg-violet-dark-2 text-violet-12 dark:text-violet-12 border border-violet-9">
  Hello, world!
</div>
```
### Using P3 Colors
Use the `supports-p3` custom variant to add P3 colors to your project:
```html
<div class="bg-violet-2 supports-p3:bg-violet-p3-2 dark:bg-violet-dark-2 dark:supports-p3:bg-violet-dark-p3-2">
  Hello, world with more color space!
</div>
```

## Radix Colors
Radix Colors is an open-source color system designed for adaptive, accessible design. Learn more about Radix Colors at https://www.radix-ui.com/colors.