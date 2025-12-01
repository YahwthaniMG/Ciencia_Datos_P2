'use client';

import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { navigation } from '@/lib/data';
import { usePathname } from 'next/navigation';

export default function SectionNav() {
  const pathname = usePathname();

  const currentIndex = navigation.findIndex(item => item.href === pathname);
  const prevSection = currentIndex > 0 ? navigation[currentIndex - 1] : null;
  const nextSection = currentIndex < navigation.length - 1 ? navigation[currentIndex + 1] : null;

  return (
    <div className="flex items-center justify-between gap-4 py-8 border-t border-border">
      {prevSection ? (
        <Link
          href={prevSection.href}
          className="flex items-center gap-2 px-4 py-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group"
        >
          <ChevronLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          <div className="text-left">
            <div className="text-xs text-muted-foreground">Anterior</div>
            <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
              {prevSection.title}
            </div>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {nextSection && (
        <Link
          href={nextSection.href}
          className="flex items-center gap-2 px-4 py-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group ml-auto"
        >
          <div className="text-right">
            <div className="text-xs text-muted-foreground">Siguiente</div>
            <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
              {nextSection.title}
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </Link>
      )}
    </div>
  );
}