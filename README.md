# HotCash Frontend

Interface ligera para presentar HotCash, un asistente de IA para emprendedores que combina chat guiado, métricas clave y recomendaciones rápidas.

## Stack

- Next.js 16 + App Router
- React 19 con TypeScript
- Tailwind CSS 4 y componentes de shadcn/ui
- Iconos de Lucide

## Requisitos previos

- Node.js 20 o superior
- pnpm 9 o superior (`corepack enable` lo instala automáticamente)

## Puesta en marcha

```bash
pnpm install
pnpm dev
```

El sitio estará disponible en `http://localhost:3000`.

Variables de entorno esperadas en `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:8080/api
```

## Estructura principal

```
app/
  layout.tsx           # Metadatos y tipografía global
  page.tsx             # Landing principal
components/
  auth/                # Diálogos de acceso y registro
  chat/                # Elementos reutilizados por la vista de chat
  layout/              # Navbar y footer
  sections/
    hero-section.tsx   # Presentación inicial
    dashboard-preview.tsx # Vista previa con métricas y mentores
  ui/                  # Biblioteca de UI (shadcn/ui)
hooks/                 # Hooks compartidos
lib/                   # Utilidades y helpers
```

## Funcionalidades destacadas

- Modales de registro e inicio de sesión integrados con la landing
- Vista previa del chat con respuestas de IA y próximos pasos sugeridos
- Bloques de métricas y mentores para complementar la experiencia
- Diseño responsive con tono oscuro y copy en español latino

## Scripts disponibles

- `pnpm dev` – servidor de desarrollo
- `pnpm build` – compilación para producción
- `pnpm start` – servidor productivo sobre la build
- `pnpm lint` – revisión estática

## Licencia

© 2025 HotCash. Todos los derechos reservados.
