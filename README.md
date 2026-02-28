# Dev Daoud Portfolio

Portfolio personal desarrollado con **React + TypeScript** y construido con **Vite**. Es una web tipo single-page con secciones (Home, About, Projects, CV, Contact) y soporte multi-idioma.

## Características
- **React + TypeScript** con Vite
- **Tailwind CSS** para estilos
- Componentes UI con **shadcn-ui / Radix UI**
- **Multi-idioma** (ES / EN) con contexto (`LanguageContext`)
- Navegación por secciones con anclas (`#home`, `#projects`, `#experience`, `#education`, `#cv`, `#contact`)
- Diseño responsive y modo oscuro (según configuración de Tailwind)

## Estructura (resumen)

```text
src/
├─ pages/              # Index, NotFound, ProjectDetail
├─ components/         # Navbar, Hero, Projects, Experience, Education, Contact, CV, Footer...
├─ components/ui/      # componentes shadcn-ui
├─ contexts/           # LanguageContext (i18n)
├─ locales/            # es.ts, en.ts
├─ data/               # projects.ts
├─ lib/                # utils (cn)
└─ App.tsx             # providers + routing
```

## Instalación
```bash
npm install
```

## Desarrollo
```bash
npm run dev
# o
bun dev
```

El proyecto estará disponible en `http://localhost:8080`

## 📜 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo con HMR
npm run build        # Build de producción
npm run preview      # Preview del build de producción
npm run lint         # Ejecutar ESLint
npm run test         # Ejecutar tests con Vitest
npm run test:watch   # Tests en modo watch
```

## 🌐 Sistema de Internacionalización

El proyecto usa un sistema de i18n personalizado basado en Context API:

```typescript
// Uso en componentes
import { useLanguage } from '@/contexts/LanguageContext';

const MyComponent = () => {
  const { t, language, setLanguage } = useLanguage();
  
  return <h1>{t.hero.greeting}</h1>;
};
```

Las traducciones se gestionan en archivos JSON:
- `src/locales/es.json` - Español
- `src/locales/en.json` - English
```
Vite levanta el proyecto en `http://localhost:8080`.

## Build
```bash
npm run build
npm run preview
```

## Tests (si están configurados)
```bash
npm run test
npm run test:watch
```

## Idiomas
Las traducciones están en `src/locales/` y se usan desde los componentes con:

```ts
const { t } = useLanguage();
```

El idioma seleccionado se guarda en `localStorage` con la clave `portfolio-language`.

## Notas
- Para añadir una sección nueva: crea el componente en `src/components/`, ponle un `id` y añádelo en `src/pages/Index.tsx`, además de añadir las claves en los archivos TypeScript de traducciones.
- Para añadir rutas nuevas: edita `src/App.tsx` (antes del catch-all `*`).

## 👤 Autor

**Daoud Oudada**
- GitHub: [@daoudoudada](https://github.com/daoudoudada)
- LinkedIn: [Daoud Oudada](https://www.linkedin.com/in/daoud-oudada/)
- Email: oudadadaoud21@gmail.com