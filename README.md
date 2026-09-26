# Rekreuz Portfolio - Dual Profile

Portafolio personal tipo "Dual Profile" que muestra dos perfiles profesionales en un mismo sitio:
1. **Desarrollador Backend** - Python, Django, FastAPI, APIs, Automatización
2. **Especialista en Automatización IA** - RAG, Agentes IA, LLMs, Sistemas Inteligentes

## 🚀 Stack Tecnológico

- **React 18** - Componentes funcionales + Hooks
- **Tailwind CSS 3.4** - Estilos utility-first, dark mode nativo
- **Vite 5** - Build tool ultrarrápido
- **ESLint** - Linting configurado

## 📁 Estructura del Proyecto

```
rekreuz-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── profile/
│   │   │   ├── ProfileSelector.jsx
│   │   │   ├── ProjectsSection.jsx
│   │   │   ├── SkillsSection.jsx
│   │   │   └── ExperienceSection.jsx
│   │   ├── sections/
│   │   │   ├── AboutSection.jsx
│   │   │   └── ContactSection.jsx
│   │   └── ui/
│   │       └── UIComponents.jsx
│   ├── data/
│   │   └── profileData.js
│   ├── hooks/
│   │   └── useIndex.js
│   ├── utils/
│   │   └── helpers.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

## ⚙️ Instalación y Configuración

### 1. Clonar e instalar dependencias

```bash
cd Rekreuz_portafolio
npm install
```

### 2. Configuración de Tailwind CSS

El proyecto ya incluye la configuración completa en `tailwind.config.js`:

```javascript
// tailwind.config.js - Puntos clave
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        backend: { primary: '#10B981', secondary: '#059669', ... },
        ai: { primary: '#8B5CF6', secondary: '#7C3AED', ... },
        neutral: { 50: '#FAFAFA', ..., 950: '#0A0A0A' }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      boxShadow: {
        'glow-backend': '0 0 30px rgba(16, 185, 129, 0.2)',
        'glow-ai': '0 0 30px rgba(139, 92, 246, 0.2)',
      }
    }
  }
}
```

### 3. Ejecutar en desarrollo

```bash
npm run dev
```

Abre http://localhost:5173

### 4. Build para producción

```bash
npm run build
npm run preview
```

## 🎨 Características de Diseño

### Dark Mode Elegante
- Fondo `neutral-950` (#0A0A0A) como base
- Cards con `backdrop-blur` y bordes sutiles
- Acentos de color por perfil:
  - **Backend**: Emerald/Green (`#10B981`, `#059669`)
  - **IA**: Violet/Purple (`#8B5CF6`, `#7C3AED`)

### Animaciones Nativas (Sin Framer Motion)
```css
/* Definidas en tailwind.config.js + index.css */
animate-fade-in
animate-slide-up
animate-slide-down
animate-scale-in
animate-pulse-soft
animate-float
```

### Componentes UI Reutilizables
- `Button` - 4 variantes (backend, ai, outline, ghost)
- `Badge` - 6 variantes de color
- `Card` - Con hover effects opcionales
- `Input` / `Textarea` - Con validación visual
- `Avatar` - Con fallback a iniciales
- `Tooltip` - CSS-only

### Responsive Design
- Mobile-first con Tailwind
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- Grid/Flexbox para layouts complejos
- Navegación móvil con menú hamburguesa

## 🔧 Personalización

### Cambiar datos del perfil
Edita `src/data/profileData.js`:
```javascript
export const personalInfo = {
  name: "Tu Nombre",
  tagline: "Tu tagline",
  email: "tu@email.com",
  // ...
}

export const backendProfile = {
  // Proyectos, skills, experiencia...
}

export const aiProfile = {
  // Proyectos, skills, experiencia...
}
```

### Cambiar colores de marca
En `tailwind.config.js`:
```javascript
colors: {
  backend: { primary: '#TU_COLOR', ... },
  ai: { primary: '#TU_COLOR', ... },
}
```

### Añadir nueva sección
1. Crea componente en `src/components/sections/` o `profile/`
2. Impórtalo en `App.jsx`
3. Añádelo al array `sectionIds` para navegación activa

## 📱 Accesibilidad

- Semántica HTML5 correcta
- ARIA labels en elementos interactivos
- Focus visible en todos los controles
- Contraste WCAG AA en modo oscuro
- Navegación por teclado completa
- `prefers-reduced-motion` respetado

## 🎯 Performance

- Lazy loading de secciones con IntersectionObserver
- Animaciones CSS nativas (GPU accelerated)
- Sin dependencias pesadas de animación
- Build optimizado con Vite (code splitting automático)

## 📝 Scripts Disponibles

```bash
npm run dev      # Servidor desarrollo
npm run build    # Build producción
npm run preview  # Preview build local
npm run lint     # ESLint check
```

## 🌐 Despliegue

Compatible con:
- **Vercel** - `vercel --prod`
- **Netlify** - Conectar repo, build: `npm run build`, output: `dist`
- **GitHub Pages** - Configurar `base` en `vite.config.js`
- **Cloudflare Pages** - Build command: `npm run build`

## 📄 Licencia

MIT - Libre para uso personal y comercial.