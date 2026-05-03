"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  // Generate page numbers with ellipsis
  const getPageNumbers = (): (number | "...")[] => {
    const pages: (number | "...")[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <nav className="mt-12 flex items-center justify-center gap-1.5" aria-label="Pagination">
      {/* Previous */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={cn(
          "inline-flex h-10 items-center gap-1 rounded-md px-3 text-sm font-medium transition-colors cursor-pointer",
          currentPage === 1
            ? "opacity-50 pointer-events-none text-slate-400"
            : "text-slate-600 hover:bg-slate-100"
        )}
        aria-label="Halaman sebelumnya"
      >
        <ChevronLeft size={16} />
        <span className="hidden sm:inline">Prev</span>
      </button>

      {/* Page Numbers */}
      <div className="hidden sm:flex items-center gap-1">
        {getPageNumbers().map((page, idx) =>
          page === "..." ? (
            <span key={`ellipsis-${idx}`} className="h-10 w-10 flex items-center justify-center text-sm text-slate-400">
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={cn(
                "h-10 w-10 rounded-md text-sm font-medium transition-colors cursor-pointer",
                page === currentPage
                  ? "bg-[var(--color-primary)] text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-100"
              )}
              aria-label={`Halaman ${page}`}
              aria-current={page === currentPage ? "page" : undefined}
            >
              {page}
            </button>
          )
        )}
      </div>

      {/* Mobile indicator */}
      <span className="sm:hidden text-sm text-slate-500">
        {currentPage} / {totalPages}
      </span>

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={cn(
          "inline-flex h-10 items-center gap-1 rounded-md px-3 text-sm font-medium transition-colors cursor-pointer",
          currentPage === totalPages
            ? "opacity-50 pointer-events-none text-slate-400"
            : "text-slate-600 hover:bg-slate-100"
        )}
        aria-label="Halaman berikutnya"
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight size={16} />
      </button>
    </nav>
  );
}
