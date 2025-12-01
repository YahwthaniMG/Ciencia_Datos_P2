import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Análisis de Vinos y Maridajes | Wine Data Science",
  description: "Análisis completo de 1,599 vinos tintos y 34,933 maridajes. Visualizaciones interactivas, correlaciones, sistema de recomendación y análisis geográfico.",
  keywords: ["vinos", "maridajes", "data science", "análisis de datos", "visualización", "python"],
  authors: [{ name: "Proyecto Ciencia de Datos" }],
  openGraph: {
    title: "Análisis de Vinos y Maridajes",
    description: "Exploración de datos de vinos y maridajes con visualizaciones interactivas",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased font-sans">
        <div className="flex min-h-screen">
          <Navigation />
          <main className="flex-1 lg:ml-0 pt-16 lg:pt-0">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
