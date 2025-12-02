export interface GraphMetadata {
  id: string;
  title: string;
  description: string;
  filename: string;
  type: 'image' | 'interactive';
  notebook: string;
  section: string;
}

export interface NavigationItem {
  title: string;
  href: string;
  description: string;
}

// Navegación principal
export const navigation: NavigationItem[] = [
  {
    title: 'Inicio',
    href: '/',
    description: 'Página principal del proyecto'
  },
  {
    title: 'Introducción',
    href: '/sections/introduccion',
    description: 'Contexto y objetivos del análisis'
  },
  {
    title: 'Fase 1: Análisis Exploratorio',
    href: '/sections/fase1',
    description: 'Exploración inicial de los datos'
  },
  {
    title: 'Correlaciones',
    href: '/sections/correlaciones',
    description: 'Análisis de correlaciones entre variables'
  },
  {
    title: 'Análisis con Seaborn',
    href: '/sections/seaborn',
    description: 'Visualizaciones avanzadas con Seaborn'
  },
  {
    title: 'Análisis Geográfico',
    href: '/sections/geografia',
    description: 'Distribución geográfica de maridajes'
  },
  {
    title: 'Sistema de Recomendación',
    href: '/sections/recomendacion',
    description: 'Motor de recomendación de vinos'
  },
  {
    title: 'Categorías de Vino',
    href: '/sections/categorias',
    description: 'Clasificación por categorías de calidad'
  },
  {
    title: 'Animaciones',
    href: '/sections/animaciones',
    description: 'Visualizaciones animadas interactivas'
  },
  {
    title: 'Análisis Integrado',
    href: '/sections/analisis-integrado',
    description: 'Comparación entre datasets'
  },
  {
    title: 'Conclusiones',
    href: '/sections/conclusiones',
    description: 'Hallazgos y aplicaciones prácticas'
  }
];

// Metadata de todas las gráficas
export const graphs: GraphMetadata[] = [
  // Gráficas PNG
  {
    id: 'scatter-basic',
    title: 'Gráfico de Dispersión: Alcohol vs Calidad',
    description: 'Relación entre el contenido de alcohol y la calidad del vino',
    filename: '01_scatter.png',
    type: 'image',
    notebook: 'analisis_vinos.ipynb',
    section: 'Visualizaciones Básicas'
  },
  {
    id: 'pie-quality',
    title: 'Distribución de Calidad',
    description: 'Proporción de vinos por categoría de calidad',
    filename: '02_pie.png',
    type: 'image',
    notebook: 'analisis_vinos.ipynb',
    section: 'Análisis Exploratorio'
  },
  {
    id: 'line-trends',
    title: 'Tendencias Temporales',
    description: 'Evolución de métricas clave a lo largo del análisis',
    filename: '03_line.png',
    type: 'image',
    notebook: 'analisis_vinos.ipynb',
    section: 'Correlaciones'
  },
  {
    id: 'heatmap-correlations',
    title: 'Mapa de Calor de Correlaciones',
    description: 'Matriz de corRelación entre todas las variables fisicoquímicas',
    filename: '04_heatmap.png',
    type: 'image',
    notebook: 'analisis_vinos.ipynb',
    section: 'Correlaciones'
  },
  {
    id: 'stacked-bars',
    title: 'Barras Apiladas: Categorías',
    description: 'Distribución de vinos por categoría y subcategoría',
    filename: '05_barras_apiladas.png',
    type: 'image',
    notebook: 'analisis_vinos.ipynb',
    section: 'Categorías'
  },
  {
    id: 'horizontal-bars',
    title: 'Barras Horizontales: Top Cuisines',
    description: 'Las cocinas más populares en los maridajes',
    filename: '06_barras_horizontales.png',
    type: 'image',
    notebook: 'analisis_maridajes.ipynb',
    section: 'Análisis Geográfico'
  },
  {
    id: 'histogram-distribution',
    title: 'Histograma de Distribuciones',
    description: 'Distribución de frecuencias de variables clave',
    filename: '07_histograma.png',
    type: 'image',
    notebook: 'analisis_vinos.ipynb',
    section: 'Análisis Exploratorio'
  },
  {
    id: 'boxplot-outliers',
    title: 'Boxplot: Detección de Outliers',
    description: 'Identificación de valores atípicos en variables fisicoquímicas',
    filename: '08_boxplot.png',
    type: 'image',
    notebook: 'analisis_vinos.ipynb',
    section: 'Análisis Exploratorio'
  },
  {
    id: 'violin-plot',
    title: 'Violin Plot: Distribución por Calidad',
    description: 'Distribución de variables según categoría de calidad',
    filename: '09_violin.png',
    type: 'image',
    notebook: 'analisis_vinos.ipynb',
    section: 'Análisis con Seaborn'
  },
  {
    id: 'area-chart',
    title: 'Gráfico de área: Evolución Acumulada',
    description: 'Evolución acumulada de métricas principales',
    filename: '10_area.png',
    type: 'image',
    notebook: 'analisis_integrado.ipynb',
    section: 'Análisis Integrado'
  },

  // Gráficas adicionales de Seaborn
  {
    id: 'seaborn-heatmap',
    title: 'Seaborn Heatmap: Correlaciones Mejoradas',
    description: 'Mapa de calor estilizado con Seaborn',
    filename: 'seaborn_heatmap.png',
    type: 'image',
    notebook: 'analisis_seaborn.ipynb',
    section: 'Análisis con Seaborn'
  },
  {
    id: 'seaborn-pairplot',
    title: 'Pairplot: Relaciones Multivariadas',
    description: 'Matriz de gráficos de dispersión entre variables',
    filename: 'seaborn_pairplot.png',
    type: 'image',
    notebook: 'analisis_seaborn.ipynb',
    section: 'Análisis con Seaborn'
  },
  {
    id: 'seaborn-jointplot',
    title: 'Jointplot: Relación Bivariada',
    description: 'Análisis detallado de Relación entre dos variables',
    filename: 'seaborn_jointplot.png',
    type: 'image',
    notebook: 'analisis_seaborn.ipynb',
    section: 'Análisis con Seaborn'
  },
  {
    id: 'seaborn-violinplot',
    title: 'Seaborn Violinplot',
    description: 'Distribuciones detalladas con violin plots',
    filename: 'seaborn_violinplots.png',
    type: 'image',
    notebook: 'analisis_seaborn.ipynb',
    section: 'Análisis con Seaborn'
  },
  {
    id: 'seaborn-catplot',
    title: 'Catplot: Análisis Categórico',
    description: 'Visualización de variables categóricas',
    filename: 'seaborn_catplot.png',
    type: 'image',
    notebook: 'analisis_seaborn.ipynb',
    section: 'Análisis con Seaborn'
  },

  // Gráficas de análisis integrado
  {
    id: 'dashboard-completo',
    title: 'Dashboard Completo',
    description: 'Vista general de todas las métricas principales',
    filename: 'dashboard_completo_matplotlib.png',
    type: 'image',
    notebook: 'dashboard.ipynb',
    section: 'Introducción'
  },
  {
    id: 'analisis-comparativo',
    title: 'Análisis Comparativo de Datasets',
    description: 'Comparación entre Wine Quality y Wine Pairings',
    filename: 'analisis_comparativo_datasets.png',
    type: 'image',
    notebook: 'analisis_integrado.ipynb',
    section: 'Análisis Integrado'
  },

  // Visualizaciones interactivas (HTML)
  {
    id: 'mapa-mundial',
    title: 'Mapa Mundial de Cuisines',
    description: 'Distribución geográfica interactiva de cocinas por región',
    filename: 'mapa_cuisines_mundial.html',
    type: 'interactive',
    notebook: 'visualizaciones_interactivas.ipynb',
    section: 'Análisis Geográfico'
  },
  {
    id: 'distribucion-regional',
    title: 'Distribución Regional',
    description: 'Análisis interactivo de distribución por regiones',
    filename: 'distribucion_regional.html',
    type: 'interactive',
    notebook: 'visualizaciones_interactivas.ipynb',
    section: 'Análisis Geográfico'
  },
  {
    id: 'sistema-recomendacion',
    title: 'Sistema de Recomendación Interactivo',
    description: 'Herramienta interactiva para recomendar vinos según preferencias',
    filename: 'sistema_recomendacion_interactivo.html',
    type: 'interactive',
    notebook: 'sistema_recomendacion.ipynb',
    section: 'Sistema de Recomendación'
  },
  {
    id: 'top-comidas',
    title: 'Top Comidas por Variedad de Vinos',
    description: 'Visualización interactiva de comidas y sus variedades de vino',
    filename: 'top_comidas_variedad_vinos.html',
    type: 'interactive',
    notebook: 'analisis_maridajes.ipynb',
    section: 'Sistema de Recomendación'
  },
  {
    id: 'distribucion-categorias',
    title: 'Distribución de Categorías de Vino',
    description: 'Gráfico interactivo de categorías de calidad',
    filename: 'distribucion_categorias_vino.html',
    type: 'interactive',
    notebook: 'analisis_categorias.ipynb',
    section: 'Categorías'
  },

  // Animaciones
  {
    id: 'animacion-calidad',
    title: 'Animación: Distribución de Calidad',
    description: 'Evolución animada de la distribución de calidad',
    filename: 'animacion_distribucion_calidad.html',
    type: 'interactive',
    notebook: 'animaciones.ipynb',
    section: 'Animaciones'
  },
  {
    id: 'animacion-alcohol',
    title: 'Animación: Alcohol vs Calidad',
    description: 'Scatter plot animado de alcohol y calidad',
    filename: 'animacion_scatter_alcohol_quality.html',
    type: 'interactive',
    notebook: 'animaciones.ipynb',
    section: 'Animaciones'
  },
  {
    id: 'animacion-cuisines',
    title: 'Animación: Cuisines vs Calidad',
    description: 'Evolución de cuisines según categorías de calidad',
    filename: 'animacion_cuisines_quality.html',
    type: 'interactive',
    notebook: 'animaciones.ipynb',
    section: 'Animaciones'
  }
];

// Función helper para obtener gráficas por sección
export function getGraphsBySection(section: string): GraphMetadata[] {
  return graphs.filter(graph => graph.section === section);
}

// Función helper para obtener una gráfica por ID
export function getGraphById(id: string): GraphMetadata | undefined {
  return graphs.find(graph => graph.id === id);
}

// Información de los datasets
export const datasets = {
  wineQuality: {
    name: 'Wine Quality Red',
    records: 1599,
    features: [
      'fixed acidity',
      'volatile acidity',
      'citric acid',
      'residual sugar',
      'chlorides',
      'free sulfur dioxide',
      'total sulfur dioxide',
      'density',
      'pH',
      'sulphates',
      'alcohol',
      'quality'
    ],
    description: 'Dataset de vinos tintos con sus propiedades fisicoquímicas y calificación de calidad'
  },
  winePairings: {
    name: 'Wine Food Pairings',
    records: 34933,
    features: [
      'Variety',
      'Wine Name',
      'Food',
      'Cuisine',
      'Region'
    ],
    description: 'Dataset de maridajes de vinos con comidas, incluyendo variedades, cocinas y regiones'
  }
};

// Tecnologías utilizadas
export const technologies = [
  { name: 'Python', purpose: 'Lenguaje principal de análisis' },
  { name: 'Pandas', purpose: 'Manipulación y análisis de datos' },
  { name: 'NumPy', purpose: 'Computación numérica' },
  { name: 'Matplotlib', purpose: 'Visualización básica' },
  { name: 'Seaborn', purpose: 'Visualización estadística avanzada' },
  { name: 'Plotly', purpose: 'Visualizaciones interactivas' },
  { name: 'Next.js', purpose: 'Framework web para presentación' },
  { name: 'TypeScript', purpose: 'Desarrollo type-safe' },
  { name: 'Tailwind CSS', purpose: 'Estilizado moderno' }
];
