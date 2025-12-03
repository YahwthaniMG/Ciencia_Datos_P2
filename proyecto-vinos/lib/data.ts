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
    id: 'dashboard_completo',
    title: 'Dashboard Completo de Análisis',
    description: 'Vista general de las visualizaciones y métricas principales del proyecto',
    filename: 'dashboard_completo_matplotlib.png',
    type: 'image',
    notebook: 'Fase_2.5.ipynb',
    section: 'Introducción'
  },
  {
    id: '02_pie',
    title: 'Distribución de Categorías de Calidad',
    description: 'Gráfico de pastel mostrando la proporción de vinos en cada categoría de calidad',
    filename: '02_pie.png',
    type: 'image',
    notebook: 'Fase_1.ipynb',
    section: 'Análisis Exploratorio'
  },
  {
    id: '07_histograma',
    title: 'Histogramas de Distribución Alcohol',
    description: 'Distribución de frecuencias del alcohol en los vinos',
    filename: '07_histograma.png',
    type: 'image',
    notebook: 'Fase_2.5.ipynb',
    section: 'Análisis Exploratorio'
  },
  {
    id: 'chlorides',
    title: 'Histogramas de Distribución Cloruros',
    description: 'Distribución de frecuencias de los cloruros en los vinos',
    filename: 'chlorides.png',
    type: 'image',
    notebook: 'Fase_1.ipynb',
    section: 'Análisis Exploratorio'
  },
  {
    id: 'citric acid',
    title: 'Histogramas de Distribución Acidos Citricos',
    description: 'Distribución de frecuencias de los acidos citricos en los vinos',
    filename: 'citric acid.png',
    type: 'image',
    notebook: 'Fase_1.ipynb',
    section: 'Análisis Exploratorio'
  },
  {
    id: 'density',
    title: 'Histogramas de Distribución Densidad',
    description: 'Distribución de frecuencias de la densidad en los vinos',
    filename: 'density.png',
    type: 'image',
    notebook: 'Fase_1.ipynb',
    section: 'Análisis Exploratorio'
  },
  {
    id: 'fixed acidity',
    title: 'Histogramas de Distribución Acidez Fija',
    description: 'Distribución de frecuencias de la Acidez Fija en los vinos',
    filename: 'fixed acidity.png',
    type: 'image',
    notebook: 'Fase_1.ipynb',
    section: 'Análisis Exploratorio'
  },
  {
    id: 'free sulfur dioxide',
    title: 'Histogramas de Distribución Dióxido de Azufre Libre',
    description: 'Distribución de frecuencias del Dióxido de Azufre Libre en los vinos',
    filename: 'free sulfur dioxide.png',
    type: 'image',
    notebook: 'Fase_1.ipynb',
    section: 'Análisis Exploratorio'
  },
  {
    id: 'pH',
    title: 'Histogramas de Distribución pH',
    description: 'Distribución de frecuencias del pH en los vinos',
    filename: 'pH.png',
    type: 'image',
    notebook: 'Fase_1.ipynb',
    section: 'Análisis Exploratorio'
  },
  {
    id: 'residual sugar',
    title: 'Histogramas de Distribución Azúcar Residual',
    description: 'Distribución de frecuencias del Azúcar Residual en los vinos',
    filename: 'residual sugar.png',
    type: 'image',
    notebook: 'Fase_1.ipynb',
    section: 'Análisis Exploratorio'
  },
  {
    id: 'sulphates',
    title: 'Histogramas de Distribución Sulfatos',
    description: 'Distribución de frecuencias de los sulfatos en los vinos',
    filename: 'sulphates.png',
    type: 'image',
    notebook: 'Fase_1.ipynb',
    section: 'Análisis Exploratorio'
  },
  {
    id: 'total sulfur dioxide',
    title: 'Histogramas de Distribución Dióxido de Azufre Total',
    description: 'Distribución de frecuencias del dióxido de azufre total en los vinos',
    filename: 'total sulfur dioxide.png',
    type: 'image',
    notebook: 'Fase_1.ipynb',
    section: 'Análisis Exploratorio'
  },
  {
    id: 'volatile acidity',
    title: 'Histogramas de Distribución Acidez Volátil',
    description: 'Distribución de frecuencias de la acidez volátil total en los vinos',
    filename: 'volatile acidity.png',
    type: 'image',
    notebook: 'Fase_1.ipynb',
    section: 'Análisis Exploratorio'
  },
  {
    id: 'outliers_residual sugar',
    title: 'Boxplot de Azúcar Residual',
    description: 'Identificación de valores atípicos en azúcar residual respecto la calidad, mediante diagramas de caja',
    filename: 'outliers_residual sugar.png',
    type: 'image',
    notebook: 'Fase_2.5.ipynb',
    section: 'Análisis Exploratorio'
  },
  {
    id: 'outliers_chlorides',
    title: 'Boxplot de Cloruros',
    description: 'Identificación de valores atípicos en cloruros respecto la calidad, mediante diagramas de caja',
    filename: 'outliers_chlorides.png',
    type: 'image',
    notebook: 'Fase_2.5.ipynb',
    section: 'Análisis Exploratorio'
  },
  {
    id: 'outliers_total sulfur dioxide',
    title: 'Boxplot de Azufre Total',
    description: 'Identificación de valores atípicos en azufre total respecto la calidad, mediante diagramas de caja',
    filename: 'outliers_total sulfur dioxide.png',
    type: 'image',
    notebook: 'Fase_2.5.ipynb',
    section: 'Análisis Exploratorio'
  },
  {
    id: '08_boxplot',
    title: 'Boxplot de Alcohol',
    description: 'Identificación de valores atípicos en alcohol respecto la calidad, mediante diagramas de caja',
    filename: '08_boxplot.png',
    type: 'image',
    notebook: 'Fase_2.5.ipynb',
    section: 'Análisis Exploratorio'
  },
  {
    id: '01_scatter',
    title: 'Gráfico de Dispersión: Alcohol vs Calidad',
    description: 'Relación entre el contenido de alcohol y la calificación de calidad del vino',
    filename: '01_scatter.png',
    type: 'image',
    notebook: 'Fase_2.5.ipynb',
    section: 'Visualizaciones básicas'
  },
  {
    id: 'distribucion',
    title: 'Distribución de la calidad del maridaje',
    description: 'Gráfico de barras mostrando la calidad del maridaje',
    filename: 'distribucion.png',
    type: 'image',
    notebook: 'Fase_1.ipynb',
    section: 'Análisis Exploratorio'
  },
  {
    id: 'barplot_wine_category',
    title: 'Distribución de los vinos evaluados',
    description: 'Gráfico de barras mostrando todos los tipos de vinos evaluados',
    filename: 'barplot_wine_category.png',
    type: 'image',
    notebook: 'Fase_1.ipynb',
    section: 'Análisis Exploratorio'
  },
  {
    id: 'barplot_cuisine',
    title: 'Distribución del Top 5 cocinas más evaluadas',
    description: 'Gráfico de barras mostrando las 5 cocinas más evaluadas en el maridaje',
    filename: 'barplot_cuisine.png',
    type: 'image',
    notebook: 'Fase_1.ipynb',
    section: 'Análisis Exploratorio'
  },
  {
    id: 'barplot_food_category',
    title: 'Distribución del Top 5 categorias de alimentos más evaluados',
    description: 'Gráfico de barras mostrando el Top 5 categorias de alimentos más evaluados',
    filename: 'barplot_food_category.png',
    type: 'image',
    notebook: 'Fase_1.ipynb',
    section: 'Análisis Exploratorio'
  },
  {
    id: 'correlacion',
    title: 'Mapa de Calor de Correlaciones',
    description: 'Matriz completa de correlaciones entre variables fisicoquímicas',
    filename: 'correlacion.png',
    type: 'image',
    notebook: 'Fase_1.ipynb',
    section: 'Correlaciones'
  },
  {
    id: 'correlaciones',
    title: 'Grafica de correlaciones mas fuertes',
    description: 'Visualización de las correlaciones mas fuertes de forma absoluta',
    filename: 'correlaciones.png',
    type: 'image',
    notebook: 'Fase_1.ipynb',
    section: 'Correlaciones'
  },
  {
    id: '03_line',
    title: 'Evolución de Métricas Clave',
    description: 'Tendencias de variables principales a lo largo del análisis',
    filename: '03_line.png',
    type: 'image',
    notebook: 'Fase_1.ipynb',
    section: 'Correlaciones'
  },
  {
    id: 'seaborn_pairplot',
    title: 'Matriz de Gráficos de Dispersión',
    description: 'Visualización completa de relaciones entre variables principales',
    filename: 'seaborn_pairplot.png',
    type: 'image',
    notebook: 'Fase_2.5.ipynb',
    section: 'Análisis con Seaborn'
  },
  {
    id: 'seaborn_jointplot',
    title: 'Análisis Bivariado con Distribuciones Marginales',
    description: 'Relación detallada entre alcohol y calidad con distribuciones',
    filename: 'seaborn_jointplot.png',
    type: 'image',
    notebook: 'Fase_2.5.ipynb',
    section: 'Análisis con Seaborn'
  },
  {
    id: 'seaborn_violinplots',
    title: 'Violin Plots de Variables por Calidad',
    description: 'Distribución de variables fisicoquímicas según categoría de calidad',
    filename: 'seaborn_violinplots.png',
    type: 'image',
    notebook: 'Fase_2.5.ipynb',
    section: 'Análisis con Seaborn'
  },
  {
    id: '09_violin',
    title: 'Violin Plots de Variables por Calidad',
    description: 'Visualización de la distribución de variables principales',
    filename: '09_violin.png',
    type: 'image',
    notebook: 'Fase_2.5.ipynb',
    section: 'Análisis con Seaborn'
  },
  {
    id: '06_barras_horizontales',
    title: 'Cocinas Más Populares',
    description: 'Top 10 cocinas con mayor número de maridajes registrados',
    filename: '06_barras_horizontales.png',
    type: 'image',
    notebook: 'Fase_2.5.ipynb',
    section: 'Análisis con Seaborn'
  },
  {
    id: '05_barras_apiladas',
    title: 'Distribución de Vinos por Categoría',
    description: 'Visualización de barras apiladas mostrando la proporción de vinos en cada categoría',
    filename: '05_barras_apiladas.png',
    type: 'image',
    notebook: 'Fase_2.5.ipynb',
    section: 'Análisis con Seaborn'
  },
  {
    id: 'analisis_comparativo_datasets',
    title: 'Comparación Entre Wine Quality y Wine Pairings',
    description: 'Visualización lado a lado de las características principales de ambos datasets.',
    filename: 'analisis_comparativo_datasets.png',
    type: 'image',
    notebook: 'Fase_2.5.ipynb',
    section: 'Análisis con Seaborn'
  },
  {
    id: '10_area',
    title: 'Evolución Acumulada de Variables Principales',
    description: 'Análisis temporal de la evolución de métricas clave',
    filename: '10_area.png',
    type: 'image',
    notebook: 'Fase_2.5.ipynb',
    section: 'Análisis con Seaborn'
  },



  // Visualizaciones interactivas (HTML)
  {
    id: 'mapa-mundial',
    title: 'Mapa Mundial de Cuisines',
    description: 'Distribución geográfica interactiva de cocinas por región',
    filename: 'mapa_cuisines_mundial.html',
    type: 'interactive',
    notebook: 'Fase_2.ipynb',
    section: 'Análisis Geográfico'
  },
  {
    id: 'distribucion-regional',
    title: 'Distribución Regional',
    description: 'Análisis interactivo de distribución por regiones',
    filename: 'distribucion_regional.html',
    type: 'interactive',
    notebook: 'Fase_2.ipynb',
    section: 'Análisis Geográfico'
  },
  {
    id: 'sistema-recomendacion',
    title: 'Sistema de Recomendación Interactivo',
    description: 'Herramienta interactiva para recomendar vinos según preferencias',
    filename: 'sistema_recomendacion_interactivo.html',
    type: 'interactive',
    notebook: 'Fase_2.ipynb',
    section: 'Sistema de Recomendación'
  },
  {
    id: 'top-comidas',
    title: 'Top Comidas por Variedad de Vinos',
    description: 'Visualización interactiva de comidas y sus variedades de vino',
    filename: 'top_comidas_variedad_vinos.html',
    type: 'interactive',
    notebook: 'Fase_2.ipynb',
    section: 'Sistema de Recomendación'
  },
  {
    id: 'distribucion-categorias',
    title: 'Distribución de Categorías de Vino',
    description: 'Gráfico interactivo de categorías de calidad',
    filename: 'distribucion_categorias_vino.html',
    type: 'interactive',
    notebook: 'Fase_2.ipynb',
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
    notebook: 'Fase_2.ipynb',
    section: 'Animaciones'
  },
  {
    id: 'animacion-cuisines',
    title: 'Animación: Cuisines vs Calidad',
    description: 'Evolución de cuisines según categorías de calidad',
    filename: 'animacion_cuisines_quality.html',
    type: 'interactive',
    notebook: 'Fase_2.ipynb',
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
