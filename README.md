# 🚀 Portfolio - Daoud Oudada

Portfolio web profesional de desarrollador Full Stack con soporte multi-idioma (Español/English), diseño moderno y gestión completa de proyectos.

![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=flat&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat&logo=tailwindcss)

## ✨ Características

- 🌍 **Multi-idioma**: Soporte completo en Español e Inglés con sistema de traducción personalizado
- 📱 **Responsive Design**: Diseño mobile-first compatible con todos los dispositivos
- 🎨 **UI Moderna**: Componentes profesionales con shadcn-ui y Tailwind CSS
- 🔍 **Filtros Dinámicos**: Sistema de filtrado de proyectos por categoría (Web, Mobile, ML)
- 📄 **Páginas de Detalle**: Información completa de cada proyecto con características, retos y aprendizajes
- 📥 **CV Descargable**: Sección de CV con experiencia, educación y habilidades
- 📬 **Formulario de Contacto**: Validación de datos y diseño profesional
- ⚡ **Optimizado**: Performance optimizada con Vite y code splitting

## 🛠️ Tecnologías

### Frontend
- **React 18.3** - Biblioteca UI con hooks modernos
- **TypeScript 5.6** - Tipado estático para mayor robustez
- **Vite 7.3** - Build tool ultra-rápido con HMR
- **React Router 7.1** - Enrutamiento SPA

### Estilos
- **Tailwind CSS 3.4** - Framework CSS utility-first
- **shadcn-ui** - Componentes accesibles con Radix UI
- **Lucide React** - Biblioteca de iconos moderna

### Herramientas
- **@tanstack/react-query** - Gestión de estado servidor
- **React Hook Form** - Manejo de formularios
- **Vitest** - Testing framework

## 📂 Estructura del Proyecto

```
dev-daoud-portafolio/
├── src/
│   ├── components/       # Componentes reutilizables
│   │   ├── ui/          # Componentes shadcn-ui
│   │   ├── About.tsx    # Sección sobre mí
│   │   ├── Contact.tsx  # Formulario de contacto
│   │   ├── CV.tsx       # Sección de currículum
│   │   ├── Hero.tsx     # Banner principal
│   │   ├── Navbar.tsx   # Navegación con selector de idioma
│   │   ├── Projects.tsx # Grid de proyectos
│   │   └── Footer.tsx   # Pie de página
│   ├── contexts/        # Contextos de React
│   │   └── LanguageContext.tsx  # Sistema de i18n
│   ├── data/            # Datos estáticos
│   │   └── projects.ts  # Información técnica de proyectos
│   ├── locales/         # Traducciones
│   │   ├── es.json      # Español
│   │   └── en.json      # English
│   ├── pages/           # Páginas principales
│   │   ├── Index.tsx    # Página home
│   │   ├── ProjectDetail.tsx  # Detalle de proyecto
│   │   └── NotFound.tsx # Página 404
│   ├── App.tsx          # Componente raíz
│   └── main.tsx         # Entry point
├── public/              # Archivos estáticos
├── vite.config.ts       # Configuración Vite
├── tailwind.config.ts   # Configuración Tailwind
└── tsconfig.json        # Configuración TypeScript
```

## 🚀 Instalación

### Prerrequisitos
- Node.js 18+ 
- npm o bun

### Pasos

1. **Clonar el repositorio**
```bash
git clone https://github.com/daoudoudada/dev-daoud-portafolio.git
cd dev-daoud-portafolio
```

2. **Instalar dependencias**
```bash
npm install
# o
bun install
```

3. **Ejecutar en desarrollo**
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

## 🎨 Personalización de Colores

Los colores se definen en `src/index.css` usando variables CSS:

```css
:root {
  --background: 207 65% 95%;
  --primary: 207 85% 66%;
  --accent: 219 58% 42%;
  /* ... */
}
```

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👤 Autor

**Daoud Oudada**
- GitHub: [@daoudoudada](https://github.com/daoudoudada)
- LinkedIn: [Daoud Oudada](https://www.linkedin.com/in/daoud-oudada/)
- Email: oudadadaoud21@gmail.com

---

⭐ Si te gusta este proyecto, dale una estrella en GitHub!
