# Análisis de Vinos y Maridajes 🍷

Proyecto completo de ciencia de datos que explora dos datasets complementarios: Wine Quality Red (1,599 vinos tintos) y Wine Food Pairings (34,933 maridajes). Una plataforma web interactiva construida con Next.js que presenta análisis estadísticos profundos, visualizaciones dinámicas y un sistema de recomendación de vinos.

![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## 📊 Características Principales

- **24 Visualizaciones** (10 PNG + 11 HTML interactivos + 3 animaciones)
- **Análisis Estadístico Profundo** de propiedades fisicoquímicas
- **Sistema de Recomendación** basado en datos reales
- **Mapas Interactivos** de distribución geográfica
- **Animaciones Dinámicas** para exploración temporal
- **Diseño Responsive** optimizado para mobile y desktop
- **Modo Oscuro** con paleta adaptada
- **Navegación Intuitiva** con sidebar y breadcrumbs

## 🗂️ Estructura del Proyecto

```
proyecto-vinos/
├── app/
│   ├── layout.tsx              # Layout principal con navegación
│   ├── page.tsx                # Página de inicio
│   ├── globals.css             # Estilos globales y paleta
│   └── sections/               # Secciones del análisis
│       ├── introduccion/
│       ├── fase1/
│       ├── correlaciones/
│       ├── seaborn/
│       ├── geografia/
│       ├── recomendacion/
│       ├── categorias/
│       ├── animaciones/
│       ├── analisis-integrado/
│       └── conclusiones/
├── components/
│   ├── Navigation.tsx          # Sidebar con hamburger menu
│   ├── ImageViewer.tsx         # Visor con zoom y descarga
│   ├── InteractiveEmbed.tsx    # Embed de HTML interactivo
│   ├── DataTable.tsx           # Tablas con sorting
│   ├── CodeReference.tsx       # Referencias a notebooks
│   └── SectionNav.tsx          # Navegación entre secciones
├── lib/
│   ├── data.ts                 # Metadata de gráficas
│   └── utils.ts                # Utilidades (cn)
├── public/
│   ├── images/                 # Gráficas PNG (17 archivos)
│   └── interactive/            # Visualizaciones HTML (11 archivos)
└── DEPLOYMENT.md               # Guía completa de deployment
```

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18 o superior
- npm, yarn, pnpm o bun

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/YahwthaniMG/Ciencia_Datos_P2.git
cd proyecto-vinos

# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.


## 📚 Secciones del Análisis

### 1. Introducción
- Descripción de datasets
- Objetivos del proyecto
- Tecnologías utilizadas
- Dashboard completo

### 2. Fase 1: Análisis Exploratorio
- Estadísticas descriptivas
- Detección de outliers
- Visualizaciones básicas
- Distribuciones

### 3. Correlaciones
- Matriz de correlaciones
- Análisis de relaciones fisicoquímicas
- Predictores de calidad
- Tendencias principales

### 4. Análisis con Seaborn
- Pairplots multivariados
- Jointplots bivariados
- Violin plots de distribución
- Catplots categóricos

### 5. Análisis Geográfico
- Mapa mundial de cocinas
- Distribución regional
- Top cuisines globales
- Patrones geográficos

### 6. Sistema de Recomendación
- Motor de recomendación interactivo
- Maridajes por comida y cocina
- Top comidas con mayor variedad
- Combinaciones innovadoras

### 7. Categorías de Vino
- Clasificación por calidad
- Distribución de categorías
- Características por categoría
- Estadísticas comparativas

### 8. Animaciones
- Evolución de distribución de calidad
- Relación alcohol-calidad animada
- Cuisines vs calidad temporal
- Patrones dinámicos

### 9. Análisis Integrado
- Comparación entre datasets
- Normalización de escalas
- Hallazgos unificados
- Métricas comparativas

### 10. Conclusiones
- Insights principales
- Aplicaciones prácticas
- Resumen de visualizaciones
- Recomendaciones

## 🎨 Stack Tecnológico

### Frontend
- **Next.js 14+** - Framework React con App Router
- **TypeScript** - Type safety y mejor DX
- **Tailwind CSS 4** - Utility-first styling
- **Lucide React** - Iconos modernos

### Análisis de Datos
- **Python** - Lenguaje principal
- **Pandas** - Manipulación de datos
- **NumPy** - Computación numérica
- **Matplotlib** - Visualización básica
- **Seaborn** - Visualización estadística
- **Plotly** - Interactividad


## 🎯 Datasets

### Wine Quality Red
- **Registros**: 1,599 vinos tintos portugueses
- **Variables**: 12 (11 fisicoquímicas + calidad)

### Wine Food Pairings
- **Registros**: 34,933 maridajes
- **Variables**: 5 (variedad, vino, comida, cocina, región)
- **Cobertura**: Global, múltiples cocinas

## 🚢 Deployment

### Deploy en Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy a producción
vercel --prod
```

O conecta tu repositorio de GitHub directamente en [vercel.com](https://vercel.com).

Ver [DEPLOYMENT.md](DEPLOYMENT.md) para guía completa con troubleshooting.

## 📱 Características Responsive

- **Desktop**: Sidebar fijo, layout amplio
- **Tablet**: Sidebar colapsable, grid adaptativo
- **Mobile**: Hamburger menu, stack vertical
- **Touch**: Gestos optimizados para móviles

## 🎨 Paleta de Colores

- **Primary (Burgundy)**: #8B0000
- **Secondary (Gold)**: #D4AF37
- **Accent (Cream)**: #F5F5DC
- **Background**: #FAFAF8 / #1A1A1A (dark)

## 🧪 Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar servidor de producción
npm start

# Lint
npm run lint
```

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver archivo `LICENSE` para más detalles.

## 👥 Autor
Yahwthani Morales Gómez
**Proyecto de Herramientas de Ciencia de Datos**
Universidad Panamericana - 2025

## 🙏 Agradecimientos

- Comunidad de Kaggle por el dataset Wine Pairings
- Vercel por el hosting gratuito
- Next.js team por el framework


## 🔗 Enlaces Útiles

- [Demo en vivo](https://ciencia-datos-p2.vercel.app/)
- [Documentación de Next.js](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vercel](https://vercel.com/docs)

---

Hecho con ❤️ y mucho análisis de datos
