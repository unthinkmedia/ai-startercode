# Vite React BaseUI Application

A boilerplate Vite React application using BaseUI component library with a simple homepage featuring a header that says "Let's Gooooo!"

## Features

- ⚡ **Vite** - Fast build tool and development server
- ⚛️ **React 19** - Modern React with TypeScript
- 🎨 **BaseUI** - Uber's design system components
- 🎯 **TypeScript** - Type safety out of the box
- 🔥 **Hot Module Replacement** - Instant updates during development

## Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation & Development

```bash
# Clone the repository
git clone <repository-url>
cd ai-startercode

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
  ├── App.tsx          # Main application component
  ├── main.tsx         # Entry point with BaseUI provider setup
  └── ...
```

## BaseUI Integration

This project is set up with BaseUI components and theming:

- **Styletron** engine for CSS-in-JS styling
- **BaseUI Provider** with light theme
- Responsive **Block** components for layout
- Typography components for consistent text styling

## Development Notes

- The development server runs on `http://localhost:5173` (or another port if 5173 is in use)
- BaseUI components are fully TypeScript typed
- Hot reload is enabled for instant feedback during development

## Configuration & AI Development Resources

The `.github/` folder contains specialized configuration files designed to enhance AI-assisted development and maintain consistency across the project:

### 📋 **Instructions** (`/.github/instructions/`)
- **`copilot-instructions.md`** - Core development guidelines and mandatory rules for React/BaseUI development, including design token usage and styling patterns
- **`unsplash.instructions.md`** - Configuration for dynamic photo placeholders with URL patterns and usage examples  
- **`vibe-icon.instructions.md`** - Integration guide for Microsoft Fluent Icons web components with 200+ icon references

### 🎯 **Prompts** (`/.github/prompts/`)
- **`analyze-figma-llm-readiness.prompt.md`** - Analyzes Figma designs for LLM implementation readiness
- **`analyze-ui-design.prompt.md`** - Comprehensive UI design analysis and component breakdown
- **`implement-storybook.prompt.md`** - Automated Storybook implementation following atomic design patterns
- **`write-token-strategy.prompt.md`** - Design token strategy development and CSS custom property planning

### 💬 **Chat Modes** (`/.github/chatmodes/`)
- **`Context Engineer.chatmode.md`** - Specialized AI assistant mode for architectural decisions and context management

### 🔗 **How They Work Together**

**Design-to-Code Workflow:**
1. Use `analyze-ui-design.prompt.md` to break down design files
2. Apply `write-token-strategy.prompt.md` to establish consistent design tokens
3. Follow `copilot-instructions.md` rules for implementation
4. Leverage `implement-storybook.prompt.md` for component documentation
5. Integrate assets using `unsplash.instructions.md` and `vibe-icon.instructions.md`

**Use Cases:**
- **Component Development** - Instructions ensure consistent BaseUI patterns and design token usage
- **Design System Maintenance** - Prompts automate analysis and token strategy updates  
- **Asset Integration** - Streamlined workflow for images and icons in development
- **Code Review** - Automated checks against established guidelines and patterns
- **Onboarding** - New developers can quickly understand project conventions and AI-assisted workflows

## Technologies Used

- **Vite** - Build tool and dev server
- **React** - UI framework  
- **TypeScript** - Type safety
- **BaseUI** - UI component library
- **Styletron** - CSS-in-JS engine

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
