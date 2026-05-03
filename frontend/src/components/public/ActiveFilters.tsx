"use client";

import { X } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

interface ActiveFilter {
  key: string;
  label: string;
}

interface ActiveFiltersProps {
  filters: ActiveFilter[];
  onRemove: (key: string) => void;
  onClearAll: () => void;
}

export function ActiveFilters({ filters, onRemove, onClearAll }: ActiveFiltersProps) {
  if (filters.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2 mb-6">
      {filters.map((filter) => (
        <button
          key={filter.key}
          onClick={() => onRemove(filter.key)}
          className="group cursor-pointer"
          aria-label={`Hapus filter: ${filter.label}`}
        >
          <Badge
            variant="outline"
            className="gap-1.5 pr-1.5 hover:border-[var(--color-danger)] hover:text-[var(--color-danger)] transition-colors"
          >
            {filter.label}
            <X size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
          </Badge>
        </button>
      ))}
      <button
        onClick={onClearAll}
        className="text-sm text-[var(--color-secondary)] hover:underline underline-offset-4 transition-colors cursor-pointer ml-1"
      >
        Hapus Semua
      </button>
    </div>
  );
}
