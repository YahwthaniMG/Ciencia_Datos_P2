'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Wine, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navigation } from '@/lib/data';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-card border-b border-border backdrop-blur-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
            <Wine className="w-6 h-6 text-primary" />
            <span className="font-bold text-lg text-foreground">Análisis de Vinos</span>
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-30 bg-black/50 animate-fade-in"
          onClick={closeMobileMenu}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-full w-64 bg-card border-r border-border z-40 transition-transform duration-300 overflow-y-auto",
          "lg:translate-x-0",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-6 border-b border-border hidden lg:block">
          <Link href="/" className="flex items-center gap-2 group">
            <Wine className="w-8 h-8 text-primary" />
            <div>
              <h1 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                Análisis de Vinos
              </h1>
              <p className="text-xs text-muted-foreground">Wine Data Science</p>
            </div>
          </Link>
        </div>

        <nav className="p-4 space-y-1 mt-16 lg:mt-0">
          {navigation.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group",
                  active
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "hover:bg-muted text-foreground"
                )}
              >
                <ChevronRight
                  className={cn(
                    "w-4 h-4 transition-transform",
                    active ? "translate-x-1" : "group-hover:translate-x-1"
                  )}
                />
                <div className="flex-1 min-w-0">
                  <div className={cn(
                    "font-medium text-sm",
                    active ? "text-primary-foreground" : "text-foreground"
                  )}>
                    {item.title}
                  </div>
                  {item.description && !active && (
                    <div className="text-xs text-muted-foreground truncate">
                      {item.description}
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 mt-4 border-t border-border">
          <div className="text-xs text-muted-foreground space-y-1">
            <p>Proyecto de Ciencia de Datos</p>
            <p>Universidad Panamericana - 2025</p>
          </div>
        </div>
      </aside>

      {/* Spacer for desktop */}
      <div className="hidden lg:block w-64 flex-shrink-0" />
    </>
  );
}