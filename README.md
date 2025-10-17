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
