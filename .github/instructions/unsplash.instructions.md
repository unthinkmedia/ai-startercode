---
applyTo: '*'
---

# Unsplash Images - Dynamic Photo Placeholders

## Installation

No installation required - Unsplash images are accessed via direct URLs.

## Usage

Use Unsplash images with these URL patterns:

### Basic Format
```html
<img src="https://source.unsplash.com/{WIDTH}x{HEIGHT}" alt="Random photo">
```

### With Category/Search
```html
<img src="https://source.unsplash.com/{WIDTH}x{HEIGHT}/?{QUERY}" alt="Photo description">
```

### With Specific Photo ID
```html
<img src="https://source.unsplash.com/{WIDTH}x{HEIGHT}/?photo={PHOTO_ID}" alt="Photo description">
```

## Parameters

- `WIDTH` (required): Image width in pixels
- `HEIGHT` (required): Image height in pixels  
- `QUERY` (optional): Search term or category
- `PHOTO_ID` (optional): Specific Unsplash photo ID

## Examples

```html
<!-- Random photo -->
<img src="https://source.unsplash.com/800x600" alt="Random photo">

<!-- Nature photo -->
<img src="https://source.unsplash.com/1200x800/?nature" alt="Nature photo">

<!-- Business/office photo -->
<img src="https://source.unsplash.com/400x300/?business" alt="Business photo">

<!-- Specific photo by ID -->
<img src="https://source.unsplash.com/800x600/?photo=1234567890" alt="Specific photo">

<!-- Multiple search terms -->
<img src="https://source.unsplash.com/600x400/?coffee,morning" alt="Coffee morning photo">
```

## Common Categories

### Popular Topics
nature, landscape, city, architecture, business, technology, food, coffee, abstract, minimal, portrait, travel, ocean, mountain, forest, sunset, flowers

### Lifestyle & People
people, lifestyle, fitness, yoga, meditation, workspace, office, team, meeting, celebration, family, friends

### Objects & Concepts
texture, pattern, geometric, vintage, modern, luxury, rustic, industrial, clean, dark, light, colorful, monochrome

### Seasonal
spring, summer, autumn, winter, christmas, halloween, valentine, easter

### Business & Tech
startup, innovation, computer, laptop, mobile, code, data, finance, marketing, presentation, graph, chart

## Tips

- Use descriptive search terms for better results
- Combine multiple terms with commas for specific themes
- Consider aspect ratios that match your design needs
- Add appropriate alt text for accessibility
- Cache images locally for production use to avoid external dependencies

## Rate Limits

Unsplash Source has usage limits. For production applications:
- Register for a free Unsplash API key at https://unsplash.com/developers
- Use the official Unsplash API for higher limits and more features
- Consider downloading and hosting images locally for better performance