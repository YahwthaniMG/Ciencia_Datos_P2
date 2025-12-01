import { Code } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CodeReferenceProps {
  notebook: string;
  section: string;
  githubUrl?: string;
  className?: string;
}

export default function CodeReference({
  notebook,
  section,
  githubUrl,
  className
}: CodeReferenceProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2 text-sm", className)}>
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
        <Code className="w-3.5 h-3.5" />
        <span className="font-medium">{notebook}</span>
      </div>
      {section && (
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 text-secondary-foreground border border-secondary/20">
          <span className="text-xs">Secci�n: {section}</span>
        </div>
      )}
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-3 py-1 rounded-full bg-muted hover:bg-muted/80 transition-colors text-muted-foreground border border-border"
        >
          <span className="text-xs">Ver en GitHub �</span>
        </a>
      )}
    </div>
  );
}