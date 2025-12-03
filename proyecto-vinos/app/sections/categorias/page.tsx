import ImageViewer from '@/components/ImageViewer';
import InteractiveEmbed from '@/components/InteractiveEmbed';
import SectionNav from '@/components/SectionNav';

export default function CategoriasPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 space-y-16">
        <div className="space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Sección 6.5
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Categorías de Vino por Calidad
          </h1>
          <p className="text-xl text-muted-foreground">
            Clasificación y análisis de vinos según sus categorías de calidad, explorando distribuciones
            y características distintivas.
          </p>
        </div>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Clasificación por Categorías
          </h2>
          <div className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border border-border">
            <h3 className="font-semibold text-lg text-foreground mb-3">
              Sistema de Categorización
            </h3>
            <p className="text-muted-foreground mb-4">
              Los vinos se clasifican en categorías de calidad basadas en evaluaciones sensoriales
              realizadas por expertos. La escala va de 1 a 5, donde valores más altos indican
              mayor calidad percibida.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="p-3 bg-card rounded-lg">
                <div className="text-primary font-semibold mb-1">Calidad Baja (1-2)</div>
                <div className="text-muted-foreground">Vinos con defectos notables o desequilibrados</div>
              </div>
              <div className="p-3 bg-card rounded-lg">
                <div className="text-primary font-semibold mb-1">Calidad Media (2-4)</div>
                <div className="text-muted-foreground">Vinos correctos, representan la mayoría</div>
              </div>
              <div className="p-3 bg-card rounded-lg">
                <div className="text-primary font-semibold mb-1">Calidad Alta (4-5)</div>
                <div className="text-muted-foreground">Vinos de excelencia, bien balanceados</div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Distribución de Categorías
          </h2>
          <ImageViewer
            src="/images/05_barras_apiladas.png"
            alt="Barras apiladas de categorías"
            title="Distribución de Vinos por Categoría"
            description="Visualización de barras apiladas mostrando la proporción de vinos en cada categoría"
            notebook="analisis_vinos.ipynb"
            section="Categorías"
          />
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Visualización Interactiva de Categorías
          </h2>
          <InteractiveEmbed
            src="/interactive/distribucion_categorias_vino.html"
            title="Distribución Interactiva de Categorías"
            description="Explora la distribución de categorías de calidad de forma interactiva"
            notebook="analisis_categorias.ipynb"
            section="Categorías"
          />
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Estadísticas por Categoría
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-card border border-border rounded-lg">
              <h4 className="font-semibold text-lg text-foreground mb-4">
                Características de Vinos de Alta Calidad (7-8)
              </h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-foreground">Alcohol:</strong> Mayor contenido promedio (11.5-12.5%)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-foreground">Acidez Volátil:</strong> Niveles bajos y controlados</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-foreground">Sulfatos:</strong> Contenido elevado para mejor conservación</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-foreground">Ácido Cítrico:</strong> Presencia significativa para frescura</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-card border border-border rounded-lg">
              <h4 className="font-semibold text-lg text-foreground mb-4">
                Características de Vinos de Calidad Media (5-6)
              </h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-foreground">Alcohol:</strong> Contenido moderado (10-11%)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-foreground">Acidez Volátil:</strong> Valores variables pero aceptables</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-foreground">Sulfatos:</strong> Niveles estándar</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-foreground">Balance:</strong> Características equilibradas sin destacar</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border border-border">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
            Insights de Categorización
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Distribución Normal</h4>
              <p className="text-muted-foreground">
                La distribución de calidad sigue aproximadamente una curva normal, con la mayoría
                de vinos en categorías medias y pocos en los extremos.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Predictores Clave</h4>
              <p className="text-muted-foreground">
                Alcohol, acidez volátil y sulfatos son los mejores predictores de la categoría
                de calidad final.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Excepciones Notables</h4>
              <p className="text-muted-foreground">
                Algunos vinos con características atípicas logran alta calidad, sugiriendo que
                el balance general es más importante que variables individuales.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Aplicación Práctica</h4>
              <p className="text-muted-foreground">
                Esta categorización permite a productores identificar rangos objetivo para cada
                variable fisicoquímica según la calidad deseada.
              </p>
            </div>
          </div>
        </section>

        <SectionNav />
      </div>
    </div>
  );
}