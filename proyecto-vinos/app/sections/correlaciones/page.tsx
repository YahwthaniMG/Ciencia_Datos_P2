import ImageViewer from '@/components/ImageViewer';
import SectionNav from '@/components/SectionNav';

export default function CorrelacionesPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 space-y-16">
        <div className="space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Sección 3
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Análisis de Correlaciones
          </h1>
          <p className="text-xl text-muted-foreground">
            Exploración de las relaciones entre variables fisicoquímicas y su impacto en la calidad del vino.
          </p>
        </div>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Matriz de Correlaciones
          </h2>
          <ImageViewer
            src="/images/correlacion.png"
            alt="Mapa de calor de correlaciones"
            title="Mapa de Calor de Correlaciones"
            description="Matriz completa de correlaciones entre variables fisicoquímicas"
            notebook="Fase_1.ipynb"
            section="Correlaciones"
          />

          <ImageViewer
            src="/images/correlaciones.png"
            alt="Grafica de correlaciones mas fuertes Negativas - Positivas"
            title="Grafica de correlaciones mas fuertes Negativas - Positivas"
            description="Visualización de las correlaciones mas fuertes de forma absoluta"
            notebook="Fase_1.ipynb"
            section="Correlaciones"
          />
          
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Correlaciones Principales
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-card border border-l-4 border-l-primary rounded-lg">
              <h3 className="font-semibold text-lg text-foreground mb-4">
                Correlaciones Positivas Fuertes
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary mt-1">°</span>
                  <span><strong className="text-foreground">Fixed Acidity ↔ Citric Acid:</strong> r = 0.67 - Relación química esperada</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">°</span>
                  <span><strong className="text-foreground">Fixed Acidity ↔ Density:</strong> r = 0.67 - Mayor acidez correlaciona con mayor densidad</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">°</span>
                  <span><strong className="text-foreground">Alcohol ↔ Calidad:</strong> r = 0.48 - El contenido alcohólico es el predictor más fuerte de calidad</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-card border border-l-4 border-l-secondary rounded-lg">
              <h3 className="font-semibold text-lg text-foreground mb-4">
                Correlaciones Negativas Fuertes
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary mt-1">°</span>
                  <span><strong className="text-foreground">pH ↔ Fixed Acidity:</strong> r = -0.68 - Relación inversa química fundamental</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">°</span>
                  <span><strong className="text-foreground">Density ↔ Alcohol:</strong> r = -0.50 - más alcohol reduce la densidad</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">°</span>
                  <span><strong className="text-foreground">Volatile Acidity ↔ Calidad:</strong> r = -0.39 - La acidez volátil reduce la calidad percibida</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Tendencias Temporales
          </h2>
          <ImageViewer
            src="/images/03_line.png"
            alt="Gráfico de líneas"
            title="Evolución de Métricas Clave"
            description="Tendencias de variables principales a lo largo del análisis,
            encontrando que el nivel de alcochol aumenta con la calidad y los sulfuros disminuyen 
            debido a que estos opacan sabores."
            notebook="analisis_vinos.ipynb"
            section="Correlaciones"
          />
        </section>

        <SectionNav />
      </div>
    </div>
  );
}