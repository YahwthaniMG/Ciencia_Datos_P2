import InteractiveEmbed from '@/components/InteractiveEmbed';
import SectionNav from '@/components/SectionNav';

export default function RecomendacionPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 space-y-16">
        <div className="space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Sección 6
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Sistema de Recomendación de Vinos
          </h1>
          <p className="text-xl text-muted-foreground">
            Herramienta interactiva para descubrir maridajes perfectos basados en preferencias y cocinas.
          </p>
        </div>

        <section className="space-y-6">
          <div className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border border-border">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
              ¿Cómo Funciona el Sistema?
            </h2>
            <p className="text-muted-foreground mb-4">
              Nuestro sistema de recomendación utiliza análisis de datos para encontrar patrones entre
              los vinos y maridajes con una calificación perfecta (5) para sugerir los vinos ideales según tus
              preferencias de comida.<br></br>
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex gap-2">
                <span className="text-primary">1.</span>
                <span className="text-foreground">Selecciona tu comida favorita</span>
              </div>
              <div className="flex gap-2">
                <span className="text-primary">2.</span>
                <span className="text-foreground">Obtén el top 5 mejores vinos</span>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Herramienta Interactiva
          </h2>
          <InteractiveEmbed
            src="/interactive/sistema_recomendacion_interactivo.html"
            title="Sistema de Recomendación Interactivo"
            description="El estudio reveló que existen 7,163 maridajes perfectos de 34,933
              evaluados, dando un promedio de 188 recomendaciones por comida, distribuidas en los 29 vinos, por
              lo que a mayores recomendaciones, mayor probabilidad de ser de tu agrado el maridaje. "
            notebook="Fase_2.ipynb"
            section="Sistema de Recomendación"
            height="750px"
          />
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Top Comidas por Variedad
          </h2>
          <InteractiveEmbed
            src="/interactive/top_comidas_variedad_vinos.html"
            title="Comidas con Mayor Diversidad de Vinos"
            description="Visualización del Top 20 comidas con la mayor variedad de maridajes posibles.
            Recuerda que solo existen 29 tipos de vino en este análisis, por lo que si un alimento tiene 
            un conteo de 29 vinos excelentes, significa que por lo menos una vez se consideró que ese maridaje
            es de 5 estrellas, por lo que puedes atreverte a probarlo."
            notebook="Fase_2.ipynb"
            section="Sistema de Recomendación"
            height="650px"
          />
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Hallazgos del Sistema
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-card border border-l-4 border-l-primary rounded-lg">
              <h4 className="font-semibold text-lg text-foreground mb-3">Maridajes Clásicos</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>° <strong className="text-foreground">Carnes rojas:</strong> Cabernet Sauvignon, Malbec</li>
                <li>° <strong className="text-foreground">Pescados:</strong> Sauvignon Blanc, Chardonnay</li>
                <li>° <strong className="text-foreground">Quesos:</strong> Pinot Noir, Merlot</li>
                <li>° <strong className="text-foreground">Postres:</strong> Moscato, Port</li>
              </ul>
            </div>
            <div className="p-6 bg-card border border-l-4 border-l-secondary rounded-lg">
              <h4 className="font-semibold text-lg text-foreground mb-3">Combinaciones Innovadoras</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>° <strong className="text-foreground">Sushi:</strong> Riesling, Albariño</li>
                <li>° <strong className="text-foreground">Tacos:</strong> Tempranillo, Garnacha</li>
                <li>° <strong className="text-foreground">Curry:</strong> Gewürztraminer, Viognier</li>
                <li>° <strong className="text-foreground">BBQ:</strong> Zinfandel, Syrah</li>
              </ul>
            </div>
          </div>
        </section>

        <SectionNav />
      </div>
    </div>
  );
}