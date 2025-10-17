# Storybook Setup

This project now includes Storybook for component development and documentation. Storybook runs on port **6006** while your main Vite application runs on port **5173**, so you can use both simultaneously.

## Available Scripts

- `npm run dev` - Start the main Vite development server (port 5173)
- `npm run storybook` - Start Storybook development server (port 6006)
- `npm run build-storybook` - Build Storybook for production

## Running Both Applications

To run both your main app and Storybook at the same time:

1. **Terminal 1** - Start your main application:
   ```bash
   npm run dev
   ```
   This will start your main Vite app at http://localhost:5173

2. **Terminal 2** - Start Storybook:
   ```bash
   npm run storybook
   ```
   This will start Storybook at http://localhost:6006

## What's Included

Storybook has been configured with:

- **BaseUI Provider**: All stories are wrapped with BaseUI's provider and theme
- **Accessibility Testing**: Automated a11y checks with `@storybook/addon-a11y`
- **Vitest Integration**: Component testing with `@storybook/addon-vitest`
- **Documentation**: Auto-generated docs for all components

## Available Stories

The following BaseUI component stories are included:

### 1. BaseUI/Button (`src/stories/BaseUIButton.stories.ts`)
- Showcases all button variants (primary, secondary, tertiary)
- Different sizes (mini, compact, default, large)
- Various states (loading, disabled)
- Interactive controls to test different props

### 2. BaseUI/Card (`src/stories/Card.stories.tsx`)
- Custom card component built with BaseUI Block
- Demonstrates proper use of BaseUI styling
- Shows spacing, typography, and interaction patterns

### 3. BaseUI/Typography (`src/stories/Typography.stories.tsx`)
- Complete typography scale showcase
- All heading sizes and paragraph variants
- Label components for forms
- Demonstrates BaseUI's typography system

## Features

- **Component Isolation**: Develop and test components in isolation
- **Interactive Controls**: Modify component props in real-time
- **Accessibility Testing**: Automatic a11y violation detection
- **Responsive Testing**: Test components at different viewport sizes
- **Documentation**: Auto-generated component documentation

## Development Workflow

1. Create components in your main app
2. Add corresponding `.stories.ts` or `.stories.tsx` files
3. Use Storybook to develop and test components
4. View your full application in the main dev server
5. Both can run simultaneously for seamless development

The BaseUI provider and theme are properly configured, so all your components will have consistent styling and theming across both environments.