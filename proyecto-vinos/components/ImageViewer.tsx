'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, Download, ZoomIn } from 'lucide-react';
import { cn } from '@/lib/utils';
import CodeReference from './CodeReference';

interface ImageViewerProps {
  src: string;
  alt: string;
  title: string;
  description?: string;
  notebook?: string;
  section?: string;
  githubUrl?: string;
  className?: string;
  priority?: boolean;
}

export default function ImageViewer({
  src,
  alt,
  title,
  description,
  notebook,
  section,
  githubUrl,
  className,
  priority = false
}: ImageViewerProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleDownload = async () => {
    try {
      const response = await fetch(src);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = src.split('/').pop() || 'download.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };

  return (
    <>
      <div className={cn("group relative animate-fade-in", className)}>
        <div className="overflow-hidden rounded-lg border border-border card-shadow card-shadow-hover bg-card">
          <div
            className="relative cursor-zoom-in transition-transform duration-300"
            onClick={() => setIsLightboxOpen(true)}
          >
            <div className="relative w-full aspect-video">
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                className="object-contain"
                priority={priority}
                loading={priority ? undefined : 'lazy'}
              />
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
              <div className="bg-white/90 dark:bg-black/90 rounded-full p-3">
                <ZoomIn className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>

          <div className="p-4 space-y-3">
            <div>
              <h3 className="font-semibold text-lg text-foreground mb-1">{title}</h3>
              {description && (
                <p className="text-sm text-muted-foreground">{description}</p>
              )}
            </div>

            {notebook && section && (
              <CodeReference
                notebook={notebook}
                section={section}
                githubUrl={githubUrl}
              />
            )}

            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors text-sm font-medium w-full justify-center"
            >
              <Download className="w-4 h-4" />
              Descargar imagen
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            onClick={() => setIsLightboxOpen(false)}
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="100vw"
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}