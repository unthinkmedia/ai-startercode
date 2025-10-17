# Atomic Design Pattern in Storybook

This Storybook implementation follows the **Atomic Design** methodology created by Brad Frost. Components are organized into five distinct levels, each building upon the previous one to create a comprehensive design system.

## Directory Structure

```
src/stories/
├── 01-atoms/           # Basic building blocks
├── 02-molecules/       # Groups of atoms functioning together  
├── 03-organisms/       # Groups of molecules forming distinct sections
├── 04-templates/       # Page-level objects placing components into layout
└── 05-pages/          # Specific instances of templates with real content
```

## Design System Levels

### 🔴 01-Atoms
**Basic building blocks of matter** - The smallest functional units that can't be broken down further.

**Examples in this project:**
- `Button` - Interactive element for user actions
- `Icon` - Visual symbols using vibe-icon library  
- `Typography` - Text elements with consistent styling
- `BaseUI Button` - Button component from BaseUI library

**Characteristics:**
- Single responsibility
- Reusable across the entire system
- No dependencies on other components
- Include basic HTML elements and BaseUI primitives

### 🟡 02-Molecules  
**Groups of atoms** that bond together to form simple functional units.

**Examples in this project:**
- `Card` - Combines typography, spacing, and container atoms
- `Search` - Combines input field, button, and icon atoms

**Characteristics:**
- Combine 2-5 atoms
- Have a single, well-defined purpose
- Reusable in multiple contexts
- Begin to show interface patterns

### 🟢 03-Organisms
**Groups of molecules** joined together to form distinct sections of an interface.

**Examples in this project:**
- `Header` - Combines logo, navigation, and user actions
- `Navigation` - Groups multiple navigation items and actions

**Characteristics:**
- Complex UI components
- Combine multiple molecules and atoms
- Form distinct sections of a page
- May have specific business logic

### 🔵 04-Templates
**Page-level objects** that place components into a layout and articulate the design's underlying content structure.

**Examples in this project:**
- `AppTemplate` - Defines overall page layout with header, nav, content, footer areas

**Characteristics:**
- Focus on layout and content structure
- No real content, use placeholder content
- Show relationships between organisms
- Demonstrate responsive behavior

### 🟣 05-Pages
**Specific instances of templates** that show what a UI looks like with real representative content.

**Examples in this project:**
- `ProductShowcase` - Complete product listing page with real content
- `Example Page` - Demo page showing template usage

**Characteristics:**
- Real content and data
- Specific use cases and user flows
- Complete user experiences
- Test templates with edge cases

## Benefits of This Organization

### 🎯 **Clear Hierarchy**
Each level builds upon the previous, making it easy to understand component relationships and dependencies.

### 🔧 **Easier Maintenance** 
Changes to atoms automatically propagate up through molecules, organisms, templates, and pages.

### 🚀 **Faster Development**
Developers can quickly find and reuse components at the appropriate level of complexity.

### 📋 **Better Testing**
Each level can be tested in isolation, from unit tests on atoms to integration tests on pages.

### 🎨 **Design Consistency**
Ensures visual and behavioral consistency across the entire application.

## Usage Guidelines

### When Building New Components

1. **Start with Atoms** - Build the smallest possible components first
2. **Compose Molecules** - Combine atoms into functional groups  
3. **Create Organisms** - Build complex sections from molecules
4. **Design Templates** - Layout organisms into page structures
5. **Build Pages** - Create specific instances with real content

### Naming Conventions

- **Directories**: Use numbered prefixes (`01-atoms`, `02-molecules`, etc.)
- **Stories**: Use descriptive titles that indicate the atomic level
- **Components**: Use clear, purpose-driven names

### Story Organization

Each story file includes:
- Component implementation
- Multiple story variants
- Comprehensive controls and documentation
- `__namedExportsOrder` for consistent story ordering

## Integration with BaseUI

This project uses BaseUI as the foundation design system:
- **Atoms** leverage BaseUI primitives (Button, Block, Typography)
- **Molecules** combine BaseUI components with custom logic
- **Organisms** create complex components using BaseUI patterns
- **Templates/Pages** use BaseUI layout components

## Design Tokens

All components use design tokens for consistency:
- Spacing: `var(--space-xs)` through `var(--space-xl)`
- Colors: `var(--color-primary-500)`, `var(--color-neutral-800)`, etc.
- Typography: `var(--text-base)`, `var(--font-weight-medium)`, etc.

## Next Steps

1. **Expand Atoms** - Add more basic components (Input, Checkbox, etc.)
2. **Build Molecules** - Create form fields, tabs, pagination, etc.
3. **Design Organisms** - Add sidebar, footer, product grid, etc.
4. **Create Templates** - Build dashboard, landing page, etc. layouts
5. **Develop Pages** - Implement specific user flows and scenarios

---

This atomic design implementation provides a scalable foundation for building consistent, maintainable user interfaces. Each level serves a specific purpose and can be developed, tested, and maintained independently while contributing to the overall design system.