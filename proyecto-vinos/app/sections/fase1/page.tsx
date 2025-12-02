import ImageViewer from '@/components/ImageViewer';
import SectionNav from '@/components/SectionNav';

export default function Fase1Page() {
  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 space-y-16">
        {/* Hero */}
        <div className="space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Sección 2
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Fase 1: Análisis Exploratorio
          </h1>
          <p className="text-xl text-muted-foreground">
            Exploración inicial de los datos mediante estadísticas descriptivas, visualizaciones básicas
            y detección de valores atípicos.
          </p>
        </div>

        {/* Descripción de Datos */}
        <section className="space-y-6">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Descripción de los Datos Red Wine Quality 
          </h2>
          <p className="text-muted-foreground">
            El análisis exploratorio inicial revela la estructura y características fundamentales de nuestro
            dataset de vinos. Con 1,599 observaciones y 12 variables, podemos identificar patrones importantes
            en la distribución de la calidad y las propiedades fisicoquímicas.
          </p>

          <ImageViewer
            src="/images/02_pie.png"
            alt="Distribución de calidad de vinos"
            title="Distribución de Categorías de Calidad"
            description="Gráfico de pastel mostrando la proporción de vinos en cada categoría de calidad"
            notebook="Fase_1.ipynb"
            section="Análisis Exploratorio"
          />

          <ImageViewer
            src="/images/07_histograma.png"
            alt="Distribución de alcohol"
            title="Histogramas de Distribución"
            description="Distribución de frecuencias del alcohol en los vinos"
            notebook="Fase_2.5.ipynb"
            section="Análisis Exploratorio"
          />

          <ImageViewer
            src="/images/chlorides.png"
            alt="Distribución de los cloruros"
            title="Histogramas de Distribución"
            description="Distribución de frecuencias de los cloruros en los vinos"
            notebook="Fase_1.ipynb"
            section="Análisis Exploratorio"
          />

          <ImageViewer
            src="/images/citric acid.png"
            alt="Distribución de los acidos citricos"
            title="Histogramas de Distribución"
            description="Distribución de frecuencias de los acidos citricos en los vinos"
            notebook="Fase_1.ipynb"
            section="Análisis Exploratorio"
          />

          <ImageViewer
            src="/images/density.png"
            alt="Distribución de la densidad"
            title="Histogramas de Distribución"
            description="Distribución de frecuencias de la densidad en los vinos"
            notebook="Fase_1.ipynb"
            section="Análisis Exploratorio"
          />

          <ImageViewer
            src="/images/fixed acidity.png"
            alt="Distribución de la acidez fija"
            title="Histogramas de Distribución"
            description="Distribución de frecuencias de la acidez fija en los vinos"
            notebook="Fase_1.ipynb"
            section="Análisis Exploratorio"
          />

          <ImageViewer
            src="/images/free sulfur dioxide.png"
            alt="Distribución del dióxido de azufre libre"
            title="Histogramas de Distribución"
            description="Distribución de frecuencias del dióxido de azufre libre en los vinos"
            notebook="Fase_1.ipynb"
            section="Análisis Exploratorio"
          />

          <ImageViewer
            src="/images/pH.png"
            alt="Distribución del pH"
            title="Histogramas de Distribución"
            description="Distribución de frecuencias del pH en los vinos"
            notebook="Fase_1.ipynb"
            section="Análisis Exploratorio"
          />

          <ImageViewer
            src="/images/residual sugar.png"
            alt="Distribución del azúcar residual"
            title="Histogramas de Distribución"
            description="Distribución de frecuencias del azúcar residual en los vinos"
            notebook="Fase_1.ipynb"
            section="Análisis Exploratorio"
          />

          <ImageViewer
            src="/images/sulphates.png"
            alt="Distribución de los sulfatos"
            title="Histogramas de Distribución"
            description="Distribución de frecuencias de los sulfatos en los vinos"
            notebook="Fase_1.ipynb"
            section="Análisis Exploratorio"
          />

          <ImageViewer
            src="/images/total sulfur dioxide.png"
            alt="Distribución del dióxido de azufre total"
            title="Histogramas de Distribución"
            description="Distribución de frecuencias del dióxido de azufre total en los vinos"
            notebook="Fase_1.ipynb"
            section="Análisis Exploratorio"
          />

          <ImageViewer
            src="/images/volatile acidity.png"
            alt="Distribución de la acidez volátil"
            title="Histogramas de Distribución"
            description="Distribución de frecuencias de la acidez volátil en los vinos"
            notebook="Fase_1.ipynb"
            section="Análisis Exploratorio"
          />
        </section>

        {/* Detección de Outliers */}
        <section className="space-y-6">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Detección de Outliers
          </h2>
          <div className="p-6 bg-card border border-l-4 border-l-primary rounded-lg">
            <h3 className="font-semibold text-lg text-foreground mb-3">
              Hallazgos Principales
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary mt-1">°</span>
                <span>
                  <strong className="text-foreground">Residual Sugar:</strong> Presenta varios outliers
                  superiores, indicando vinos con dulzor inusualmente alto
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1">°</span>
                <span>
                  <strong className="text-foreground">Chlorides:</strong> Valores atípicos en ambos extremos,
                  sugiriendo variabilidad en contenido mineral
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1">°</span>
                <span>
                  <strong className="text-foreground">Total Sulfur Dioxide:</strong> Outliers significativos
                  que podrían afectar el perfil de conservación
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1">°</span>
                <span>
                  <strong className="text-foreground">Alcohol:</strong> Distribución relativamente uniforme
                  con pocos valores extremos
                </span>
              </li>
            </ul>
          </div>

          <ImageViewer
            src="/images/outliers_residual sugar.png"
            alt="Boxplot de azúcar residual"
            title="Boxplots para Detección de Outliers"
            description="Identificación de valores atípicos en azúcar residual respecto la calidad, mediante diagramas de caja"
            notebook="Fase_2.5.ipynb"
            section="Análisis Exploratorio"
          />

          <ImageViewer
            src="/images/outliers_chlorides.png"
            alt="Boxplot de cloruros"
            title="Boxplots para Detección de Outliers"
            description="Identificación de valores atípicos en cloruros respecto la calidad, mediante diagramas de caja"
            notebook="Fase_2.5.ipynb"
            section="Análisis Exploratorio"
          />

          <ImageViewer
            src="/images/outliers_total sulfur dioxide.png"
            alt="Boxplot del dióxido de azufre total"
            title="Boxplots para Detección de Outliers"
            description="Identificación de valores atípicos en el dióxido de azufre total respecto la calidad, mediante diagramas de caja"
            notebook="Fase_2.5.ipynb"
            section="Análisis Exploratorio"
          />

          <ImageViewer
            src="/images/08_boxplot.png"
            alt="Boxplot de alcohol"
            title="Boxplots para Detección de Outliers"
            description="Identificación de valores atípicos en alcohol respecto la calidad, mediante diagramas de caja"
            notebook="Fase_2.5.ipynb"
            section="Análisis Exploratorio"
          />
        </section>

        {/* Visualizaciones básicas */}
        <section className="space-y-6">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Visualizaciones básicas
          </h2>
          <p className="text-muted-foreground">
            La relación entre el contenido de alcohol y la calidad del vino es uno de los patrones más
            interesantes del dataset. A través del análisis de dispersión, podemos observar tendencias
            claras que sugieren correlaciones positivas significativas.
          </p>

          <ImageViewer
            src="/images/01_scatter.png"
            alt="Gráfico de dispersión alcohol vs calidad"
            title="Gráfico de Dispersión: Alcohol vs Calidad"
            description="Relación entre el contenido de alcohol y la calificación de calidad del vino"
            notebook="analisis_vinos.ipynb"
            section="Visualizaciones básicas"
          />

          <div className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border border-border">
            <h3 className="font-semibold text-lg text-foreground mb-3">
              Interpretación del Scatter Plot
            </h3>
            <p className="text-muted-foreground">
              El gráfico revela una tendencia positiva entre el contenido alcohólico y la calidad percibida.
              Los vinos con mayor graduación alcohólica tienden a recibir calificaciones más altas, aunque
              existe considerable variabilidad. Esta relación sugiere que el alcohol contribuye al cuerpo
              y la complejidad del vino, factores valorados en la evaluación de calidad.
            </p>
          </div>
        </section>

        

        {/* Conclusiones de Fase 1 */}
        <section className="space-y-4">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Conclusiones del Análisis Exploratorio Red Wine Quality
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">Calidad de Datos</h4>
              <p className="text-sm text-muted-foreground">
                Dataset limpio con distribuciones razonables. Los outliers detectados son legítimos
                y representan la variabilidad natural del vino.
              </p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">Patrones Identificados</h4>
              <p className="text-sm text-muted-foreground">
                Correlación positiva entre alcohol y calidad. La mayoría de vinos se concentran en
                categorías de calidad media (3).
              </p>
            </div>
          </div>
        </section>

        {/* Descripción de Datos */}
        <section className="space-y-6">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Descripción de los Datos Wine Food Pairings
          </h2>
          <p className="text-muted-foreground">
            El análisis exploratorio inicial revela la estructura y características fundamentales de nuestro
            dataset de maridajes. Con 34,933 observaciones y 5 variables, podemos identificar patrones importantes
            entre los diversos vinos y su interacción con los alimentos pertenecientes a diversas cocinas.
          </p>

          <ImageViewer
            src="/images/distribucion.png"
            alt="Distribución de la calidad del maridaje"
            title="Distribución de la calidad del maridaje"
            description="Gráfico de barras mostrando la calidad del maridaje"
            notebook="Fase_1.ipynb"
            section="Análisis Exploratorio"
          />
          <ImageViewer
            src="/images/barplot_wine_type.png"
            alt="Distribución de todos los tipos de vinos evaluados"
            title="Distribución de los vinos evaluados"
            description="Gráfico de barras mostrando todos los tipos de vinos evaluados"
            notebook="Fase_1.ipynb"
            section="Análisis Exploratorio"
          />
          <ImageViewer
            src="/images/barplot_cuisine.png"
            alt="Distribución de las 5 cocinas mas evaluadas"
            title="Distribución del Top 5 cocinas mas evaluadas"
            description="Gráfico de barras mostrando las 5 cocinas mas evaluadas en el maridaje"
            notebook="Fase_1.ipynb"
            section="Análisis Exploratorio"
          />
        </section>

        {/* Navigation */}
        <SectionNav />
      </div>
    </div>
  );
}