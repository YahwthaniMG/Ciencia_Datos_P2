import ImageViewer from '@/components/ImageViewer';
import InteractiveEmbed from '@/components/InteractiveEmbed';
import SectionNav from '@/components/SectionNav';

export default function GeografiaPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 space-y-16">
        <div className="space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Sección 5
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Análisis Geográfico
          </h1>
          <p className="text-xl text-muted-foreground">
            Distribución mundial de cocinas y regiones vinícolas, explorando patrones geográficos en maridajes.
          </p>
        </div>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Mapa Mundial de Cuisines
          </h2>
          <InteractiveEmbed
            src="/interactive/mapa_cuisines_mundial.html"
            title="Distribución Global de Cocinas"
            description="Mapa interactivo mostrando la diversidad de cocinas por región geográfica,
            asi como la cantidad de maridajes realizadas en cada una"
            notebook="Fase_2.5.ipynb"
            section="Análisis Geográfico"
            height="700px"
          />
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Distribución Regional Detallada
          </h2>
          <InteractiveEmbed
            src="/interactive/distribucion_regional.html"
            title="Análisis por Regiones"
            description="Visualización interactiva de la distribución de maridajes por región, 
            mostrando las minimas diferencias de calidad entre ellas"
            notebook="visualizaciones_interactivas.ipynb"
            section="Fase_2.5.ipynb"
            height="650px"
          />
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Top Cuisines Globales
          </h2>
          <ImageViewer
            src="/images/06_barras_horizontales.png"
            alt="Top cuisines"
            title="Cocinas Más Populares"
            description="Top 10 cocinas con mayor número de maridajes registrados"
            notebook="Fase_2.5.ipynb"
            section="Análisis Geográfico"
          />
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Insights Geográficos
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-6 bg-card border border-border rounded-lg">
              <h4 className="font-semibold text-foreground mb-3">Europa Dominante</h4>
              <p className="text-sm text-muted-foreground">
                Las cocinas europeas (italiana, francesa, española) se encuentran en la segunda posición
                del liderato en número de maridajes, reflejando la tradición vinícola del continente.
              </p>
            </div>
            <div className="p-6 bg-card border border-border rounded-lg">
              <h4 className="font-semibold text-foreground mb-3">Diversidad Asiática</h4>
              <p className="text-sm text-muted-foreground">
                Asia presenta gran diversidad de cocinas con maridajes únicos, especialmente en la región mediterránea asiática.
              </p>
            </div>
            <div className="p-6 bg-card border border-border rounded-lg">
              <h4 className="font-semibold text-foreground mb-3">Tendencias Emergentes</h4>
              <p className="text-sm text-muted-foreground">
                Cocinas de Medio Oriente y América Latina muestran crecimiento en maridajes innovadores.
              </p>
            </div>
          </div>
        </section>

        <SectionNav />
      </div>
    </div>
  );
}