# Vite React BaseUI Application

> **LLM Instructions**: This document contains mandatory rules for React development. Follow ALL token usage rules strictly. Never use hardcoded values.

## Project Overview
This is a Vite React application using BaseUI component library with a simple homepage.

### Tech Stack
- **Framework**: Vite + React + TypeScript
- **UI Library**: BaseUI component library
- **Styling**: CSS Custom Properties with design tokens
- **Architecture**: Simple homepage with header component

## Development Commands
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

### Development Workflow Rules
🚨 **MANDATORY**: Before doing any UI, frontend or React development, ALWAYS call the Storybook MCP server to get further instructions.

**LLM INSTRUCTION**: Execute this rule before writing any React components or UI code.

## Styling Guidelines

### Framework Rules
🚨 **LLM DIRECTIVE**: Never generate hardcoded CSS values. Always use tokens.

- ✅ Use BaseUI's styling solution for consistent theming
- ✅ Use CSS Custom Properties for additional styles
- ✅ Use design tokens for colors, typography, and spacing
- ❌ Do NOT use Tailwind CSS or other utility-first CSS frameworks

### CSS Design Token System

#### Core Principles
🚨 **LLM VALIDATION**: Before outputting any CSS, verify all values use var(--token-name) format.

**ALWAYS use CSS Custom Properties with semantic token names. NEVER use hardcoded values.**

#### Required Token Usage

**Spacing Tokens**
```css
/* ✅ CORRECT */
padding: var(--space-md);

/* ❌ WRONG */
padding: 16px;
```

**Color Tokens**
```css
/* ✅ CORRECT */
background: var(--color-primary-500);

/* ❌ WRONG */
background: #3b82f6;
```

**Typography Tokens**
```css
/* ✅ CORRECT */
font-size: var(--text-lg);
font-weight: var(--font-weight-medium);

/* ❌ WRONG */
font-size: 18px;
font-weight: 500;
```

## Design Token Documentation

🤖 **LLM TOKEN REFERENCE**: Use these exact token names in CSS. Copy-paste format: `var(--token-name)`

### Spacing Scale
```css
--space-xs: 4px;    /* Tight spacing, borders */
--space-sm: 8px;    /* Small gaps, icon margins */
--space-md: 16px;   /* Standard padding, card spacing */
--space-lg: 24px;   /* Section spacing, large gaps */
--space-xl: 32px;   /* Page margins, hero sections */
```

### Color System

#### Primary Colors
```css
--color-primary-50: #eff6ff;    /* Light backgrounds */
--color-primary-500: #3b82f6;   /* Buttons, links */
--color-primary-900: #1e3a8a;   /* Dark text, headers */
```

#### Neutral Colors
```css
--color-neutral-100: #f5f5f5;   /* Subtle backgrounds */
--color-neutral-800: #262626;   /* Body text */
```

#### Semantic Color Aliases
```css
--color-text-primary: var(--color-neutral-800);
--color-text-secondary: var(--color-neutral-600);
--color-background-primary: #ffffff;
--color-background-secondary: var(--color-neutral-50);
--color-error: var(--color-red-500);
--color-success: var(--color-green-500);
--color-warning: var(--color-yellow-500);
```

### Typography Scale
```css
--text-xs: 12px;    /* Captions, fine print */
--text-sm: 14px;    /* Small labels, metadata */
--text-base: 16px;  /* Body text, default size */
--text-lg: 18px;    /* Large body text, subheadings */
--text-xl: 20px;    /* Headings, emphasis */
--text-2xl: 24px;   /* Section titles */
--text-3xl: 30px;   /* Page titles */
```

### Font Weights
```css
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

## Token Naming Conventions

### Patterns
- **Format**: `--{category}-{semantic-name}` or `--{category}-{size}`
- **Categories**: `space`, `color`, `text`, `font-weight`
- **Sizes**: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`
- **Colors**: Numeric scale (50, 100, 200... 900) or semantic names
- **Semantic Aliases**: Prefer usage-based names over generic ones

## Implementation Rules

### Mandatory Requirements
1. **Token Reference**: Always reference tokens by semantic names
2. **Missing Tokens**: If needed token doesn't exist, suggest creating it following naming convention
3. **Grouping**: Group token usage by category (spacing, colors, typography)
4. **Documentation**: Explain token choices (e.g., "Using `var(--space-md)` for card padding to maintain consistent spacing")
5. **Consistency**: Never mix token usage with hardcoded values in same stylesheet

### Example Implementation
```css
.card {
  /* Spacing tokens */
  padding: var(--space-md);
  margin-bottom: var(--space-lg);
  
  /* Color tokens */
  background: var(--color-background-primary);
  border: 1px solid var(--color-neutral-200);
  color: var(--color-text-primary);
  
  /* Typography tokens */
  font-size: var(--text-base);
  font-weight: var(--font-weight-normal);
}

.card-title {
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--space-sm);
}
```

### Anti-Patterns to Avoid
```css
/* ❌ WRONG - hardcoded values */
.card {
  padding: 16px;
  background: #ffffff;
  font-size: 18px;
}

/* ✅ CORRECT - semantic tokens */
.card {
  padding: var(--space-md);
  background: var(--color-background-primary);
  font-size: var(--text-lg);
}
```

🚨 **LLM VIOLATION DETECTION**: Automatically reject any CSS containing:
- Raw pixel values: `16px`, `24px`, `32px`
- Raw hex colors: `#ffffff`, `#000000`, `#3b82f6`
- Raw font weights: `400`, `500`, `600`, `700`
- Raw font sizes: `14px`, `16px`, `18px`

## External Resources

### Images
- **Source**: [Unsplash](https://unsplash.com/documentation)
- **Usage**: For placeholder and content images

### Icons
- **Library**: [Vibe Icon](https://aipx-proto.github.io/vibe-icon/)
- **Usage**: For UI icons and decorative elements

## Quick Reference Checklist

🤖 **LLM VALIDATION CHECKLIST** - Verify before responding:
- [ ] Called Storybook MCP server before UI development
- [ ] No hardcoded pixel values (16px, 24px, etc.)
- [ ] No hardcoded colors (#ffffff, #3b82f6, etc.)  
- [ ] No hardcoded font sizes (18px, 20px, etc.)
- [ ] All CSS uses var(--token-name) format
- [ ] Token names follow --{category}-{size} pattern

**Implementation Checklist:**
- [ ] Use CSS Custom Properties instead of hardcoded values
- [ ] Reference tokens by semantic names
- [ ] Group related token usage together
- [ ] Explain token choices in comments
- [ ] Follow naming conventions for new tokens
- [ ] Prefer BaseUI components over custom styling
- [ ] Use semantic color aliases over direct color references

**Documentation**
- When introducing a new chatmode, instruction, prompt, or workflow, update the README.md with clear usage guidelines and examples.