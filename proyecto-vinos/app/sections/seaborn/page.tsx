import ImageViewer from '@/components/ImageViewer';
import SectionNav from '@/components/SectionNav';

export default function SeabornPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 space-y-16">
        <div className="space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Sección 4
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Análisis Avanzado con Seaborn
          </h1>
          <p className="text-xl text-muted-foreground">
            Visualizaciones estadísticas sofisticadas para análisis multivariado profundo.
          </p>
        </div>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Pairplot: Relaciones Multivariadas
          </h2>
          <p className="text-muted-foreground">
            El pairplot permite visualizar simultáneamente las relaciones entre múltiples variables,
            facilitando la identificación de patrones complejos y agrupamientos naturales en los datos.
          </p>
          <ImageViewer
            src="/images/seaborn_pairplot.png"
            alt="Pairplot de variables"
            title="Matriz de Gráficos de Dispersión"
            description="Visualización completa de relaciones entre variables principales"
            notebook="analisis_seaborn.ipynb"
            section="Análisis con Seaborn"
          />
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Jointplot: Análisis Bivariado Detallado
          </h2>
          <p className="text-muted-foreground">
            Los jointplots combinan scatter plots con histogramas marginales, proporcionando una vista
            comprehensiva de la distribución y correlación entre dos variables específicas.
          </p>
          <ImageViewer
            src="/images/seaborn_jointplot.png"
            alt="Jointplot"
            title="Análisis Bivariado con Distribuciones Marginales"
            description="Relación detallada entre alcohol y calidad con distribuciones"
            notebook="analisis_seaborn.ipynb"
            section="Análisis con Seaborn"
          />
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Violin Plots: Distribución y Densidad
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <ImageViewer
              src="/images/seaborn_violinplots.png"
              alt="Violin plots Seaborn"
              title="Violin Plots de Variables por Calidad"
              description="Distribución de variables fisicoquímicas según categoría de calidad"
              notebook="analisis_seaborn.ipynb"
              section="Análisis con Seaborn"
            />
            <ImageViewer
              src="/images/09_violin.png"
              alt="Violin plot básico"
              title="Violin Plot: Distribución por Calidad"
              description="Visualización de la distribución de variables principales"
              notebook="analisis_vinos.ipynb"
              section="Análisis con Seaborn"
            />
          </div>
          <div className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border border-border">
            <h3 className="font-semibold text-lg text-foreground mb-3">
              Interpretación de Violin Plots
            </h3>
            <p className="text-muted-foreground">
              Los violin plots revelan no solo la mediana y cuartiles (como los boxplots), sino tambión
              la densidad completa de la distribución. Esto permite identificar distribuciones multimodales
              y entender mejor cómo varían las propiedades fisicoquímicas entre diferentes niveles de calidad.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Catplot: Análisis Categórico
          </h2>
          <ImageViewer
            src="/images/seaborn_catplot.png"
            alt="Catplot"
            title="Visualización de Variables Categóricas"
            description="Análisis de categorías de calidad y sus características"
            notebook="analisis_seaborn.ipynb"
            section="Análisis con Seaborn"
          />
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Insights del Análisis con Seaborn
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">Separabilidad</h4>
              <p className="text-sm text-muted-foreground">
                Las variables muestran buena separabilidad entre categorías de calidad, especialmente alcohol y acidez volátil.
              </p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">Multimodalidad</h4>
              <p className="text-sm text-muted-foreground">
                Algunas distribuciones son multimodales, sugiriendo subgrupos naturales dentro del dataset.
              </p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">Outliers</h4>
              <p className="text-sm text-muted-foreground">
                Confirmación visual de outliers previamente detectados, con contexto de su distribución.
              </p>
            </div>
          </div>
        </section>

        <SectionNav />
      </div>
    </div>
  );
}