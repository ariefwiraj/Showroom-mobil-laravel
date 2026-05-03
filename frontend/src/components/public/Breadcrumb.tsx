import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="bg-[var(--color-soft-bg)] pt-28 pb-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm text-slate-500 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="flex items-center">
                {isLast ? (
                  <span className="text-slate-900 font-medium truncate max-w-[200px] sm:max-w-none">
                    {item.label}
                  </span>
                ) : (
                  <>
                    <Link href={item.href || '#'} className="hover:text-[var(--color-primary)] transition-colors">
                      {item.label}
                    </Link>
                    <ChevronRight size={14} className="mx-2 flex-shrink-0" />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
