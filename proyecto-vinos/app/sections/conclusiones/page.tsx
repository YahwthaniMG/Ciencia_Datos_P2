import DataTable from '@/components/DataTable';
import SectionNav from '@/components/SectionNav';
import { graphs, technologies } from '@/lib/data';
import { CheckCircle2, TrendingUp, Users, Lightbulb } from 'lucide-react';

export default function ConclusionesPage() {
  const graphSummary = graphs.map((graph, index) => ({
    numero: index + 1,
    titulo: graph.title,
    tipo: graph.type === 'image' ? 'Imagen' : 'Interactivo',
    seccion: graph.section
  }));

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 space-y-16">
        <div className="space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Sección 9
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Conclusiones y Aplicaciones
          </h1>
          <p className="text-xl text-muted-foreground">
            Síntesis de hallazgos principales y aplicaciones prácticas del análisis realizado.
          </p>
        </div>

        {/* Insights Principales */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Lightbulb className="w-8 h-8 text-primary" />
            <h2 className="font-serif text-3xl font-bold text-foreground">
              Insights Principales
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h3 className="font-semibold text-lg text-foreground">
                  Factores de Calidad en Vinos Tintos
                </h3>
              </div>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li> <span className="text-primary font-semibold">°</span> El <strong className="text-foreground">alcohol</strong> es el predictor más fuerte de calidad (r = 0.48)</li>
                <li> <span className="text-primary font-semibold">°</span> La <strong className="text-foreground">acidez volátil</strong> tiene impacto negativo significativo</li>
                <li> <span className="text-primary font-semibold">°</span> Los <strong className="text-foreground">sulfatos</strong> contribuyen positivamente a la percepción de calidad</li>
                <li> <span className="text-primary font-semibold">°</span> El <strong className="text-foreground">Ácido cítrico</strong> mejora la frescura y balance</li>
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-lg border border-secondary/20">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-6 h-6 text-secondary-foreground flex-shrink-0 mt-1" />
                <h3 className="font-semibold text-lg text-foreground">
                  Patrones en Maridajes
                </h3>
              </div>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li> <span className="text-primary font-semibold">°</span> Cocinas <strong className="text-foreground">asiaticas y europeas </strong> dominan en número de maridajes documentados</li>
                <li> <span className="text-primary font-semibold">°</span> Alta <strong className="text-foreground">diversidad regional</strong> en preferencias de maridaje</li>
                <li> <span className="text-primary font-semibold">°</span> Ciertas comidas admiten <strong className="text-foreground">amplia variedad</strong> de vinos</li>
                <li> <span className="text-primary font-semibold">°</span> Tendencia hacia maridajes <strong className="text-foreground">innovadores</strong> en cocinas asiáticas</li>
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg border border-border">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h3 className="font-semibold text-lg text-foreground">
                  Distribución de Calidad
                </h3>
              </div>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li> <span className="text-primary font-semibold">°</span> La mayoría de vinos se concentra en <strong className="text-foreground">calidad media</strong> (3)</li>
                <li> <span className="text-primary font-semibold">°</span> Pocos vinos alcanzan <strong className="text-foreground">excelencia</strong> (5)</li>
                <li> <span className="text-primary font-semibold">°</span> Distribución aproximadamente <strong className="text-foreground">normal</strong></li>
                <li> <span className="text-primary font-semibold">°</span> Outliers representan <strong className="text-foreground">menos del 5%</strong></li>
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-br from-muted/50 to-muted/20 rounded-lg border border-border">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h3 className="font-semibold text-lg text-foreground">
                  Correlaciones Clave
                </h3>
              </div>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li> <span className="text-primary font-semibold">°</span> <strong className="text-foreground">pH y acidez fija:</strong> correlación negativa fuerte (-0.68)</li>
                <li> <span className="text-primary font-semibold">°</span> <strong className="text-foreground">Densidad y alcohol:</strong> relación inversa clara (-0.50)</li>
                <li> <span className="text-primary font-semibold">°</span> <strong className="text-foreground">Acidez fija y cítrica:</strong> correlación positiva (0.67)</li>
                <li> <span className="text-primary font-semibold">°</span> <strong className="text-foreground">Variables independientes:</strong> sulfatos y cloruros</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Aplicaciones Prácticas */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-primary" />
            <h2 className="font-serif text-3xl font-bold text-foreground">
              Aplicaciones Prácticas
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-6 bg-card border border-border rounded-lg card-shadow">
              <h3 className="font-semibold text-lg text-foreground mb-3">
                Para Productores de Vino
              </h3>
              <p className="text-muted-foreground mb-3">
                Los hallazgos sobre correlaciones fisicoquímicas pueden guiar el proceso de vinificación
                para optimizar la calidad final del producto.
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li> <span className="text-primary font-semibold">°</span> Controlar la acidez volátil durante la fermentación</li>
                <li> <span className="text-primary font-semibold">°</span> Optimizar el contenido de alcohol sin comprometer el balance</li>
                <li> <span className="text-primary font-semibold">°</span> Ajustar niveles de sulfatos para mejor conservación</li>
              </ul>
            </div>

            <div className="p-6 bg-card border border-border rounded-lg card-shadow">
              <h3 className="font-semibold text-lg text-foreground mb-3">
                Para Sommeliers y Restaurantes
              </h3>
              <p className="text-muted-foreground mb-3">
                El sistema de recomendación y análisis de maridajes proporciona una base científica
                para sugerencias de vino más precisas.
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li> <span className="text-primary font-semibold">°</span> Maridajes basados en datos reales de 34,000+ combinaciones</li>
                <li> <span className="text-primary font-semibold">°</span> Recomendaciones personalizadas según cocina y preferencias</li>
                <li> <span className="text-primary font-semibold">°</span> Identificación de combinaciones innovadoras</li>
              </ul>
            </div>

            <div className="p-6 bg-card border border-border rounded-lg card-shadow">
              <h3 className="font-semibold text-lg text-foreground mb-3">
                Para Consumidores
              </h3>
              <p className="text-muted-foreground mb-3">
                Herramientas interactivas que facilitan la selección de vinos según gustos personales
                y ocasiones específicas.
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li> <span className="text-primary font-semibold">°</span> Sistema de recomendación intuitivo y accesible</li>
                <li> <span className="text-primary font-semibold">°</span> Comprensión de factores que determinan la calidad</li>
                <li> <span className="text-primary font-semibold">°</span> Exploración de nuevas combinaciones gastronómicas</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Resumen de Visualizaciones */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Users className="w-8 h-8 text-primary" />
            <h2 className="font-serif text-3xl font-bold text-foreground">
              Resumen de Visualizaciones
            </h2>
          </div>
          <p className="text-muted-foreground">
            Este proyecto incluye {graphs.length} visualizaciones, distribuidas entre gráficos estéticos
            e interactivos, cada uno diseñado para revelar aspectos específicos del análisis.
          </p>
          <DataTable
            columns={[
              { key: 'numero', label: '#', sortable: true },
              { key: 'titulo', label: 'Visualización', sortable: true },
              { key: 'tipo', label: 'Tipo', sortable: true },
              { key: 'seccion', label: 'Sección', sortable: true }
            ]}
            data={graphSummary}
          />
        </section>

        {/* Tecnolog�as */}
        <section className="space-y-6">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Stack Tecnológico Completo
          </h2>
          <div className="grid md:grid-cols-3 gap-3">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="p-4 bg-card border border-border rounded-lg text-center animate-fade-in"
                style={{ animationDelay: `${index * 30}ms` }}
              >
                <h4 className="font-semibold text-foreground">{tech.name}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* Cierre */}
        <section className="p-8 bg-gradient-to-br from-primary/5 via-secondary/5 to-background rounded-lg border border-border text-center space-y-4">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Gracias por Explorar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Este análisis demuestra el poder de la ciencia de datos aplicada al mundo del vino,
            combinando rigor estadístico con visualizaciones intuitivas para generar insights
            accionables.
          </p>
          <div className="pt-4">
            <p className="text-sm text-muted-foreground">
              Proyecto de Ciencia de Datos - Universidad Panamericana 2025<br></br>
              Yahwthani Morales Gómez
            </p>
          </div>
        </section>

        <SectionNav />
      </div>
    </div>
  );
}