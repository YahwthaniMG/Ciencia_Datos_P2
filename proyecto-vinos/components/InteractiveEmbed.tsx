'use client';

import { useState } from 'react';
import { Maximize2, Minimize2, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import CodeReference from './CodeReference';

interface InteractiveEmbedProps {
  src: string;
  title: string;
  description?: string;
  notebook?: string;
  section?: string;
  githubUrl?: string;
  height?: string;
  className?: string;
}

export default function InteractiveEmbed({
  src,
  title,
  description,
  notebook,
  section,
  githubUrl,
  height = '600px',
  className
}: InteractiveEmbedProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <>
      <div className={cn("space-y-4 animate-fade-in", className)}>
        <div className="space-y-2">
          <h3 className="font-semibold text-lg text-foreground">{title}</h3>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
          {notebook && section && (
            <CodeReference
              notebook={notebook}
              section={section}
              githubUrl={githubUrl}
            />
          )}
        </div>

        <div className="relative rounded-lg border border-border card-shadow overflow-hidden bg-card">
          {isLoading && (
            <div
              className="absolute inset-0 flex items-center justify-center bg-muted/50 z-10"
              style={{ height }}
            >
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          )}

          <div className="relative">
            <button
              onClick={toggleFullscreen}
              className="absolute top-2 right-2 z-20 p-2 rounded-lg bg-white/90 dark:bg-black/90 hover:bg-white dark:hover:bg-black transition-colors shadow-lg"
              title="Pantalla completa"
            >
              <Maximize2 className="w-4 h-4 text-foreground" />
            </button>

            <iframe
              src={src}
              title={title}
              className="w-full border-0"
              style={{ height }}
              onLoad={() => setIsLoading(false)}
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-background animate-fade-in">
          <div className="h-full flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div>
                <h3 className="font-semibold text-lg text-foreground">{title}</h3>
                {description && (
                  <p className="text-sm text-muted-foreground">{description}</p>
                )}
              </div>
              <button
                onClick={toggleFullscreen}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                title="Salir de pantalla completa"
              >
                <Minimize2 className="w-5 h-5 text-foreground" />
              </button>
            </div>
            <div className="flex-1">
              <iframe
                src={src}
                title={title}
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}