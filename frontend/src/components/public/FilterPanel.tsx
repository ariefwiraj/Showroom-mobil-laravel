"use client";

import * as React from "react";
import { X, SlidersHorizontal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";
import { cn } from "@/lib/utils";

interface FilterValues {
  brand: string;
  transmission: string;
  minPrice: string;
  maxPrice: string;
  minYear: string;
  maxYear: string;
}

interface FilterPanelProps {
  filters: FilterValues;
  onFilterChange: (key: keyof FilterValues, value: string) => void;
  onReset: () => void;
  brands: string[];
  activeFilterCount: number;
}

const priceOptions = [
  { value: "", label: "Tanpa batas" },
  { value: "100000000", label: "Rp 100 Juta" },
  { value: "150000000", label: "Rp 150 Juta" },
  { value: "200000000", label: "Rp 200 Juta" },
  { value: "250000000", label: "Rp 250 Juta" },
  { value: "300000000", label: "Rp 300 Juta" },
  { value: "400000000", label: "Rp 400 Juta" },
  { value: "500000000", label: "Rp 500 Juta" },
];

const yearOptions = [
  { value: "", label: "Semua" },
  { value: "2017", label: "2017" },
  { value: "2018", label: "2018" },
  { value: "2019", label: "2019" },
  { value: "2020", label: "2020" },
  { value: "2021", label: "2021" },
  { value: "2022", label: "2022" },
  { value: "2023", label: "2023" },
];

function FilterContent({ filters, onFilterChange, onReset, brands }: Omit<FilterPanelProps, "activeFilterCount">) {
  return (
    <div className="space-y-6">
      {/* Brand */}
      <div>
        <h3 className="text-sm font-semibold text-slate-900 mb-3">Brand</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm cursor-pointer group">
            <input
              type="radio"
              name="brand"
              checked={filters.brand === ""}
              onChange={() => onFilterChange("brand", "")}
              className="accent-[var(--color-primary)] cursor-pointer"
            />
            <span className={cn(
              "transition-colors group-hover:text-[var(--color-primary)]",
              filters.brand === "" ? "text-[var(--color-primary)] font-medium" : "text-slate-600"
            )}>
              Semua Brand
            </span>
          </label>
          {brands.map((brand) => (
            <label key={brand} className="flex items-center gap-2 text-sm cursor-pointer group">
              <input
                type="radio"
                name="brand"
                checked={filters.brand === brand}
                onChange={() => onFilterChange("brand", brand)}
                className="accent-[var(--color-primary)] cursor-pointer"
              />
              <span className={cn(
                "transition-colors group-hover:text-[var(--color-primary)]",
                filters.brand === brand ? "text-[var(--color-primary)] font-medium" : "text-slate-600"
              )}>
                {brand}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-100" />

      {/* Price Range */}
      <div>
        <h3 className="text-sm font-semibold text-slate-900 mb-3">Rentang Harga</h3>
        <div className="flex items-center gap-2">
          <Select
            options={priceOptions}
            value={filters.minPrice}
            onChange={(e) => onFilterChange("minPrice", e.target.value)}
            aria-label="Harga minimum"
            className="text-xs"
          />
          <span className="text-slate-400 text-xs shrink-0">—</span>
          <Select
            options={priceOptions}
            value={filters.maxPrice}
            onChange={(e) => onFilterChange("maxPrice", e.target.value)}
            aria-label="Harga maximum"
            className="text-xs"
          />
        </div>
      </div>

      <div className="border-t border-slate-100" />

      {/* Year Range */}
      <div>
        <h3 className="text-sm font-semibold text-slate-900 mb-3">Tahun</h3>
        <div className="flex items-center gap-2">
          <Select
            options={yearOptions}
            value={filters.minYear}
            onChange={(e) => onFilterChange("minYear", e.target.value)}
            aria-label="Tahun minimum"
            className="text-xs"
          />
          <span className="text-slate-400 text-xs shrink-0">—</span>
          <Select
            options={yearOptions}
            value={filters.maxYear}
            onChange={(e) => onFilterChange("maxYear", e.target.value)}
            aria-label="Tahun maximum"
            className="text-xs"
          />
        </div>
      </div>

      <div className="border-t border-slate-100" />

      {/* Transmission */}
      <div>
        <h3 className="text-sm font-semibold text-slate-900 mb-3">Transmisi</h3>
        <div className="space-y-2">
          {["", "Manual", "Automatic"].map((trans) => (
            <label key={trans || "all"} className="flex items-center gap-2 text-sm cursor-pointer group">
              <input
                type="radio"
                name="transmission"
                checked={filters.transmission === trans}
                onChange={() => onFilterChange("transmission", trans)}
                className="accent-[var(--color-primary)] cursor-pointer"
              />
              <span className={cn(
                "transition-colors group-hover:text-[var(--color-primary)]",
                filters.transmission === trans ? "text-[var(--color-primary)] font-medium" : "text-slate-600"
              )}>
                {trans || "Semua"}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-100" />

      {/* Reset */}
      <Button variant="outline" size="sm" onClick={onReset} className="w-full">
        Reset Filter
      </Button>
    </div>
  );
}

export function FilterPanel({ filters, onFilterChange, onReset, brands, activeFilterCount }: FilterPanelProps) {
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 shrink-0" aria-label="Filter mobil">
        <div className="sticky top-28 bg-white rounded-lg border border-slate-200 shadow-sm p-6">
          <h2 className="text-base font-bold text-slate-900 mb-6">Filter</h2>
          <FilterContent filters={filters} onFilterChange={onFilterChange} onReset={onReset} brands={brands} />
        </div>
      </aside>

      {/* Mobile Toggle */}
      <div className="lg:hidden mb-4">
        <Button
          variant="outline"
          onClick={() => setIsMobileOpen(true)}
          className="gap-2"
        >
          <SlidersHorizontal size={18} />
          Filter
          {activeFilterCount > 0 && (
            <span className="ml-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-primary)] text-[10px] font-bold text-white">
              {activeFilterCount}
            </span>
          )}
        </Button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40 lg:hidden"
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="fixed top-0 left-0 bottom-0 z-50 w-80 max-w-[85vw] bg-white shadow-xl overflow-y-auto lg:hidden"
              aria-label="Filter drawer"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-base font-bold text-slate-900">Filter</h2>
                  <button
                    onClick={() => setIsMobileOpen(false)}
                    className="p-2 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                    aria-label="Tutup filter"
                  >
                    <X size={20} />
                  </button>
                </div>
                <FilterContent filters={filters} onFilterChange={onFilterChange} onReset={onReset} brands={brands} />
                <div className="mt-6">
                  <Button
                    variant="primary"
                    className="w-full"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Terapkan Filter
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
