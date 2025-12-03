import InteractiveEmbed from '@/components/InteractiveEmbed';
import SectionNav from '@/components/SectionNav';

export default function AnimacionesPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 space-y-16">
        <div className="space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Sección 7
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Visualizaciones Animadas
          </h1>
          <p className="text-xl text-muted-foreground">
            Explora los datos a través del tiempo con animaciones interactivas que revelan patrones dinámicos.
          </p>
        </div>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Evolución de la Distribución de Calidad
          </h2>
          <InteractiveEmbed
            src="/interactive/animacion_distribucion_calidad.html"
            title="Animación: Distribución de Calidad"
            description="Visualización animada de cómo varía la distribución de categorías de calidad"
            notebook="Fase_2.ipynb"
            section="Animaciones"
            height="500px"
          />
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Relación Alcohol-Calidad Animada
          </h2>
          <InteractiveEmbed
            src="/interactive/animacion_scatter_alcohol_quality.html"
            title="Animación: Alcohol vs Calidad"
            description="Scatter plot animado mostrando la evolución de la relación entre alcohol y calidad"
            notebook="animaciones.ipynb"
            section="Animaciones"
            height="500px"
          />
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Cuisines y Calidad a Través del Tiempo
          </h2>
          <InteractiveEmbed
            src="/interactive/animacion_cuisines_quality.html"
            title="Animación: Cuisines vs Calidad"
            description="Evolución de las cocinas según categorías de calidad del vino"
            notebook="animaciones.ipynb"
            section="Animaciones"
            height="700px"
          />
        </section>

        <section className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border border-border">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
            Valor de las Animaciones
          </h3>
          <p className="text-muted-foreground mb-4">
            Las visualizaciones animadas permiten identificar tendencias temporales y patrones que serían
            difíciles de detectar en gráficos estáticos. Revelan cómo las distribuciones cambian y cómo
            las relaciones entre variables evolucionan.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="flex gap-2">
              <span className="text-primary font-semibold">°</span>
              <span className="text-foreground">Identificación de tendencias temporales</span>
            </div>
            <div className="flex gap-2">
              <span className="text-primary font-semibold">°</span>
              <span className="text-foreground">Detección de patrones cíclicos</span>
            </div>
            <div className="flex gap-2">
              <span className="text-primary font-semibold">°</span>
              <span className="text-foreground">Visualización de cambios graduales</span>
            </div>
            <div className="flex gap-2">
              <span className="text-primary font-semibold">°</span>
              <span className="text-foreground">Mejor comprensión de datos multidimensionales</span>
            </div>
          </div>
        </section>

        <SectionNav />
      </div>
    </div>
  );
}