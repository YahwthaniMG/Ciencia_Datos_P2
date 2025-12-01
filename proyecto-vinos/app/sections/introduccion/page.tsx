import ImageViewer from '@/components/ImageViewer';
import DataTable from '@/components/DataTable';
import SectionNav from '@/components/SectionNav';
import { datasets, technologies } from '@/lib/data';
import { Database, Target, Code2 } from 'lucide-react';

export default function IntroduccionPage() {
  const wineFeatures = datasets.wineQuality.features.map((feature, index) => ({
    numero: index + 1,
    variable: feature,
    tipo: index < 11 ? 'Fisicoquímica' : 'Target'
  }));

  const pairingFeatures = datasets.winePairings.features.map((feature, index) => ({
    numero: index + 1,
    variable: feature,
    tipo: 'Categórica'
  }));

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 space-y-16">
        {/* Hero */}
        <div className="space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Sección 1
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Introducción al Proyecto
          </h1>
          <p className="text-xl text-muted-foreground">
            Bienvenido al análisis completo de vinos y maridajes. Este proyecto explora dos datasets
            complementarios para entender las propiedades que definen la calidad del vino y las
            combinaciones gastronómicas ideales.
          </p>
        </div>

        {/* Objetivos */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Target className="w-8 h-8 text-primary" />
            <h2 className="font-serif text-3xl font-bold text-foreground">
              Objetivos del Análisis
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-6 bg-card border border-border rounded-lg card-shadow">
              <h3 className="font-semibold text-lg text-foreground mb-3">
                Wine Quality Dataset
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary mt-1">"</span>
                  <span>Identificar variables fisicoquímicas clave que determinan la calidad</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">"</span>
                  <span>Analizar correlaciones entre propiedades</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">"</span>
                  <span>Detectar outliers y patrones anómalos</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">"</span>
                  <span>Clasificar vinos por categorías de calidad</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-card border border-border rounded-lg card-shadow">
              <h3 className="font-semibold text-lg text-foreground mb-3">
                Wine Pairings Dataset
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary mt-1">"</span>
                  <span>Mapear distribución geográfica de cocinas y vinos</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">"</span>
                  <span>Identificar maridajes más populares</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">"</span>
                  <span>Desarrollar sistema de recomendación</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">"</span>
                  <span>Analizar variedad de vinos por cocina</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Datasets */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <Database className="w-8 h-8 text-primary" />
            <h2 className="font-serif text-3xl font-bold text-foreground">
              Descripción de los Datasets
            </h2>
          </div>

          {/* Wine Quality */}
          <div className="space-y-4">
            <div className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border border-border">
              <h3 className="font-semibold text-xl text-foreground mb-2">
                {datasets.wineQuality.name}
              </h3>
              <p className="text-muted-foreground mb-4">
                {datasets.wineQuality.description}
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div>
                  <span className="text-muted-foreground">Registros: </span>
                  <span className="font-semibold text-foreground">
                    {datasets.wineQuality.records.toLocaleString()}
                  </span>
                </div>
                <div>
                  <span className="text-muted-foreground">Variables: </span>
                  <span className="font-semibold text-foreground">
                    {datasets.wineQuality.features.length}
                  </span>
                </div>
              </div>
            </div>

            <DataTable
              columns={[
                { key: 'numero', label: '#', sortable: true },
                { key: 'variable', label: 'Variable', sortable: true },
                { key: 'tipo', label: 'Tipo', sortable: true }
              ]}
              data={wineFeatures}
            />
          </div>

          {/* Wine Pairings */}
          <div className="space-y-4">
            <div className="p-6 bg-gradient-to-br from-secondary/5 to-primary/5 rounded-lg border border-border">
              <h3 className="font-semibold text-xl text-foreground mb-2">
                {datasets.winePairings.name}
              </h3>
              <p className="text-muted-foreground mb-4">
                {datasets.winePairings.description}
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div>
                  <span className="text-muted-foreground">Registros: </span>
                  <span className="font-semibold text-foreground">
                    {datasets.winePairings.records.toLocaleString()}
                  </span>
                </div>
                <div>
                  <span className="text-muted-foreground">Variables: </span>
                  <span className="font-semibold text-foreground">
                    {datasets.winePairings.features.length}
                  </span>
                </div>
              </div>
            </div>

            <DataTable
              columns={[
                { key: 'numero', label: '#', sortable: true },
                { key: 'variable', label: 'Variable', sortable: true },
                { key: 'tipo', label: 'Tipo', sortable: true }
              ]}
              data={pairingFeatures}
            />
          </div>
        </section>

        {/* Tecnologías */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Code2 className="w-8 h-8 text-primary" />
            <h2 className="font-serif text-3xl font-bold text-foreground">
              Tecnologías Utilizadas
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="p-4 bg-card border border-border rounded-lg card-shadow-hover animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <h4 className="font-semibold text-foreground mb-1">{tech.name}</h4>
                <p className="text-sm text-muted-foreground">{tech.purpose}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Dashboard Preview */}
        <section className="space-y-6">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Vista General del Análisis
          </h2>
          <ImageViewer
            src="/images/dashboard_completo_matplotlib.png"
            alt="Dashboard completo del proyecto"
            title="Dashboard Completo de Análisis"
            description="Vista general de las visualizaciones y métricas principales del proyecto"
            notebook="dashboard.ipynb"
            section="Introducción"
            priority
          />
        </section>

        {/* Navigation */}
        <SectionNav />
      </div>
    </div>
  );
}