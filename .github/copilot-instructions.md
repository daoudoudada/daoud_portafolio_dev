# Copilot Instructions for Portfolio Codebase

## Project Overview

This is a React-based portfolio website built with **Vite**, **TypeScript**, **shadcn-ui**, and **Tailwind CSS**. The project is a personal developer portfolio with multi-language support (Spanish, Catalan, English). Built from a Lovable.dev template and optimized for modern web practices.

## Architecture & Key Patterns

### Multi-Language System
- **Context-based i18n**: Uses `LanguageContext.tsx` to manage language state globally
- **Translation Structure**: JSON files in `src/locales/` (es.json, en.json, ca.json) contain all UI text
- **Hook Pattern**: Components use `useLanguage()` hook to access `{ language, setLanguage, t }`
- **Persistence**: Selected language is saved to localStorage as `'portfolio-language'`
- **Example**:
  ```tsx
  const { t } = useLanguage();
  // Then use: t.nav.home, t.about.title, etc.
  ```

### Component Structure
- **Page-level**: `src/pages/` contains route pages (Index, NotFound)
- **UI Components**: `src/components/` has feature components (Navbar, Hero, About, Projects, Contact, CV, Footer)
- **shadcn-ui**: `src/components/ui/` contains pre-built Radix UI + Tailwind components (button, card, dialog, etc.)
- **Single-Page Flow**: Sections are anchored with IDs (#home, #about, #projects, #cv, #contact)

### React Query & State Management
- `QueryClient` initialized in `App.tsx` for data fetching via `@tanstack/react-query`
- Global providers stacked: QueryClientProvider > TooltipProvider > Router > Toast/Sonner
- No Redux/Zustand; state managed via Context API and React hooks

### Styling Approach
- **Tailwind CSS** with custom color variables (--primary, --secondary, --background, --foreground, etc.)
- **Dark Mode**: Configured via `darkMode: ["class"]` in tailwind.config.ts
- **CSS Utilities**: `src/lib/utils.ts` provides `cn()` for className merging
- **Theme Colors**: Defined in CSS variables, shadcn-ui components reference these

## Developer Workflows

### Build & Dev Commands
```bash
npm run dev          # Start Vite dev server on http://localhost:8080
npm run build        # Production build (vite build)
npm run build:dev    # Development build with component tagger
npm run lint         # Run ESLint checks
npm run preview      # Preview production build locally
```

### Testing
```bash
npm run test         # Run all tests once (Vitest)
npm run test:watch   # Run tests in watch mode
```
- **Test Setup**: `vitest.config.ts` configures jsdom environment with testing-library
- **Test Files**: Place `.test.ts` or `.spec.tsx` files alongside components in `src/`
- **Setup**: `src/test/setup.ts` initializes matchMedia mock and @testing-library/jest-dom

### Path Aliases
- `@/*` resolves to `src/*` (configured in tsconfig.json and vite.config.ts)
- Always use `@/` for internal imports: `import { useLanguage } from '@/contexts/LanguageContext'`

## Project-Specific Conventions

### Adding New UI Components
- Use shadcn-ui components from `src/components/ui/`
- Import and compose them in feature components
- Example: Import `Button` from `@/components/ui/button` with Tailwind classes

### Adding New Page Sections
1. Create component in `src/components/` (e.g., Blog.tsx)
2. Import `useLanguage()` if text needed
3. Add section ID for navbar anchor navigation
4. Import in `src/pages/Index.tsx`
5. Add new translation keys to all locale files

### Adding New Routes
- Edit `App.tsx` Routes; add routes ABOVE the catch-all `<Route path="*" />`
- NotFound page handles unmatched routes automatically

### Localization Pattern
- Add keys to all three locale files (es.json, en.json, ca.json) simultaneously
- Structure nested objects by section: `{ nav: { home, about }, hero: { greeting, name }, ...}`
- Use TypeScript for type-safe translation object access

## Integration Points & Dependencies

### External Libraries
- **@radix-ui**: Headless UI components (accordion, dialog, dropdown, etc.)
- **@tanstack/react-query**: Server state management and caching
- **@hookform/resolvers**: Form validation
- **lucide-react**: Icon library (Menu, X, Globe, GraduationCap, Code, Users)
- **sonner**: Toast notifications (secondary to built-in Toaster)
- **embla-carousel**: Image carousel component
- **date-fns**: Date formatting utilities

### Lovable Integration
- `lovable-tagger` plugin in vite.config.ts (development mode) for component tracking
- Lovable project settings in README.md
- Auto-syncing with Lovable project possible via git push

## Critical Files & Their Roles

| File | Purpose |
|------|---------|
| `src/App.tsx` | Root component, provider setup, routing |
| `src/contexts/LanguageContext.tsx` | Global language state & translation provider |
| `src/pages/Index.tsx` | Home page, combines all section components |
| `src/components/Navbar.tsx` | Navigation with language switcher & mobile menu |
| `src/locales/*.json` | UI text in ES, CA, EN |
| `vite.config.ts` | Vite build config with path alias & Lovable plugin |
| `tailwind.config.ts` | Tailwind theme extending HSL color variables |
| `tsconfig.json` | Path aliases and strict type checking config |

## Common Patterns to Follow

1. **Always use `useLanguage()` hook** in components that render user-facing text
2. **Keep component files focused**: Section components ~80-150 lines, split into smaller helpers if needed
3. **Leverage shadcn-ui for consistency**: Don't style custom buttons/modals when built-in exists
4. **Mobile-first Tailwind**: Use `md:` breakpoint for desktop overrides (see Navbar.tsx)
5. **Type safety**: Enable strict types in TS config; avoid `any`

## Debugging Tips

- Lovable component tagger (dev mode) helps trace UI patterns
- Check localStorage for language preference: `localStorage.getItem('portfolio-language')`
- React Query DevTools can be added for state inspection
- Vite HMR (hot module reload) configured with overlay disabled for cleaner UX
- ESLint config in `eslint.config.js` enforces code quality
