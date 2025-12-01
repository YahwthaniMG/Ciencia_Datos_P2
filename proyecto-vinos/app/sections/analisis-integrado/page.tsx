import ImageViewer from '@/components/ImageViewer';
import SectionNav from '@/components/SectionNav';

export default function AnalisisIntegradoPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 space-y-16">
        <div className="space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Sección 8
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Análisis Integrado de Datasets
          </h1>
          <p className="text-xl text-muted-foreground">
            Comparación y síntesis de insights de ambos datasets para revelar patrones unificados.
          </p>
        </div>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Normalización y Comparación
          </h2>
          <p className="text-muted-foreground">
            Para comparar efectivamente el dataset de Wine Quality (variables numéricas) con el de Wine Pairings
            (variables categóricas), implementamos técnicas de Normalización de escalas que permiten visualizar
            ambos conjuntos de datos en un marco común.
          </p>
          <div className="p-6 bg-card border border-border rounded-lg">
            <h3 className="font-semibold text-lg text-foreground mb-3">Metodología de Integración</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary mt-1">"</span>
                <span><strong className="text-foreground">Normalización Min-Max:</strong> Escalado de variables fisicoquímicas al rango [0,1]</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1">"</span>
                <span><strong className="text-foreground">Encoding Categórico:</strong> Transformación de variedades y cuisines a valores numéricos</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1">"</span>
                <span><strong className="text-foreground">Agregación:</strong> Cálculo de métricas comunes para permitir comparaciones directas</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Comparativa Visual de Datasets
          </h2>
          <ImageViewer
            src="/images/analisis_comparativo_datasets.png"
            alt="Análisis comparativo"
            title="Comparación Entre Wine Quality y Wine Pairings"
            description="Visualización lado a lado de las características principales de ambos datasets"
            notebook="analisis_integrado.ipynb"
            section="Análisis Integrado"
          />
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Evolución Acumulada de Métricas
          </h2>
          <ImageViewer
            src="/images/10_area.png"
            alt="Gráfico de área"
            title="Evolución Acumulada de Variables Principales"
            description="Análisis temporal de la evolución de métricas clave"
            notebook="analisis_integrado.ipynb"
            section="Análisis Integrado"
          />
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Hallazgos Principales del Análisis Integrado
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-card border border-border rounded-lg">
              <h4 className="font-semibold text-lg text-foreground mb-3">Complementariedad</h4>
              <p className="text-muted-foreground text-sm">
                Los datasets son altamente complementarios: Wine Quality proporciona características intrínsecas
                del vino, mientras que Wine Pairings ofrece contexto de consumo y aplicación práctica.
              </p>
            </div>
            <div className="p-6 bg-card border border-border rounded-lg">
              <h4 className="font-semibold text-lg text-foreground mb-3">Patrones Consistentes</h4>
              <p className="text-muted-foreground text-sm">
                Las variedades de vino de mayor calidad (según Wine Quality) aparecen frecuentemente en
                maridajes de cocinas reconocidas (según Wine Pairings).
              </p>
            </div>
            <div className="p-6 bg-card border border-border rounded-lg">
              <h4 className="font-semibold text-lg text-foreground mb-3">Geografía y Calidad</h4>
              <p className="text-muted-foreground text-sm">
                Existe correlación entre regiones con alta diversidad de cocinas y variedades de vino de
                mejor calidad, especialmente en Europa Mediterránea.
              </p>
            </div>
            <div className="p-6 bg-card border border-border rounded-lg">
              <h4 className="font-semibold text-lg text-foreground mb-3">Valor Predictivo</h4>
              <p className="text-muted-foreground text-sm">
                La combinación de ambos datasets mejora la capacidad de predicción de maridajes exitosos
                y recomendaciones personalizadas.
              </p>
            </div>
          </div>
        </section>

        <SectionNav />
      </div>
    </div>
  );
}