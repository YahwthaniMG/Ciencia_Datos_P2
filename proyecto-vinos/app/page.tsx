import Link from 'next/link';
import { ArrowRight, Wine, BarChart3, Map, Sparkles } from 'lucide-react';
import { navigation, datasets } from '@/lib/data';

export default function Home() {
  const sections = navigation.filter(item => item.href !== '/');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-secondary/5 to-background py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          <div className="flex items-center gap-3 text-primary">
            <Wine className="w-10 h-10" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Wine Data Science Project
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Análisis de Vinos<br />
            <span className="text-primary">y Maridajes</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl">
            Exploración completa de {datasets.wineQuality.records.toLocaleString()} vinos tintos
            y {datasets.winePairings.records.toLocaleString()} combinaciones de maridaje entre 29 tipos de uva y 38 tipos de comida. Un viaje por datos,
            visualizaciones interactivas y análisis estadístico profundo.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/sections/introduccion"
              className=" btn-override inline-flex items-center gap-2 px-6 py-3 bg-primary rounded-lg font-semibold hover:bg-primary/90 transition-colors card-shadow"
            >
              Comenzar el recorrido
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/sections/conclusiones"
              className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-colors"
            >
              Ver conclusiones
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6 md:px-12 bg-card border-y border-border">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center space-y-2 animate-fade-in">
            <div className="text-3xl font-bold text-primary">1,599</div>
            <div className="text-sm text-muted-foreground">Vinos Analizados</div>
          </div>
          <div className="text-center space-y-2 animate-fade-in">
            <div className="text-3xl font-bold text-primary">34,933</div>
            <div className="text-sm text-muted-foreground">Maridajes</div>
          </div>
          <div className="text-center space-y-2 animate-fade-in">
            <div className="text-3xl font-bold text-primary">24</div>
            <div className="text-sm text-muted-foreground">Visualizaciones</div>
          </div>
          <div className="text-center space-y-2 animate-fade-in">
            <div className="text-3xl font-bold text-primary">11</div>
            <div className="text-sm text-muted-foreground">Interactivas</div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Aspectos Destacados
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Descubre los análisis más interesantes de nuestro proyecto
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-card border border-border rounded-lg card-shadow-hover space-y-4 animate-fade-in">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-xl text-foreground">
                Correlaciones Fisicoquímicas
              </h3>
              <p className="text-muted-foreground">
                Análisis profundo de 11 variables fisicoquímicas y su impacto en la calidad del vino.
              </p>
              <Link
                href="/sections/correlaciones"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                Explorar
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="p-6 bg-card border border-border rounded-lg card-shadow-hover space-y-4 animate-fade-in">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Map className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="font-semibold text-xl text-foreground">
                Análisis Geográfico
              </h3>
              <p className="text-muted-foreground">
                Mapas interactivos de distribución mundial de cocinas y regiones vinícolas.
              </p>
              <Link
                href="/sections/geografia"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                Ver mapas
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="p-6 bg-card border border-border rounded-lg card-shadow-hover space-y-4 animate-fade-in">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-xl text-foreground">
                Sistema de Recomendación
              </h3>
              <p className="text-muted-foreground">
                Herramienta interactiva para recomendar vinos basada en preferencias y comidas.
              </p>
              <Link
                href="/sections/recomendacion"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                Probar sistema
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sections Grid */}
      <section className="py-16 px-6 md:px-12 bg-muted/30">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Todas las Secciones
            </h2>
            <p className="text-lg text-muted-foreground">
              Explora el análisis completo paso a paso
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {sections.map((section, index) => (
              <Link
                key={section.href}
                href={section.href}
                className="group p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all card-shadow-hover animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {section.description}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            ¿Listo para explorar?
          </h2>
          <p className="text-lg text-muted-foreground">
            Comienza tu recorrido por el fascinante mundo del análisis de vinos
          </p>
          <Link
            href="/sections/introduccion"
            className="btn-override inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors card-shadow text-lg"
          >
            Comenzar ahora
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
