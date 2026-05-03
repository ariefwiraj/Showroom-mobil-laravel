"use client";

import * as React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Car as CarIcon } from "lucide-react";
import { mockCars } from "@/lib/mock-data";
import { fadeUpVariants, staggerContainer } from "@/lib/animations";
import { CatalogHeader } from "@/components/public/CatalogHeader";
import { FilterPanel } from "@/components/public/FilterPanel";
import { ActiveFilters } from "@/components/public/ActiveFilters";
import { CarCard } from "@/components/public/CarCard";
import { Pagination } from "@/components/public/Pagination";
import { Button } from "@/components/ui/Button";

const ITEMS_PER_PAGE = 6;

const allBrands = Array.from(new Set(mockCars.map((c) => c.brand))).sort();

export default function KatalogContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Read filters from URL
  const search = searchParams.get("search") || "";
  const brand = searchParams.get("brand") || "";
  const transmission = searchParams.get("transmission") || "";
  const minPrice = searchParams.get("minPrice") || "";
  const maxPrice = searchParams.get("maxPrice") || "";
  const minYear = searchParams.get("minYear") || "";
  const maxYear = searchParams.get("maxYear") || "";
  const page = Number(searchParams.get("page") || "1");

  // Update URL helper
  const updateParams = React.useCallback(
    (updates: Record<string, string>) => {
      const params = new URLSearchParams(searchParams.toString());
      Object.entries(updates).forEach(([key, value]) => {
        if (value) {
          params.set(key, value);
        } else {
          params.delete(key);
        }
      });
      if (!("page" in updates)) {
        params.delete("page");
      }
      router.push(`/katalog?${params.toString()}`, { scroll: false });
    },
    [searchParams, router]
  );

  // Debounced search
  const [searchInput, setSearchInput] = React.useState(search);
  const searchTimeout = React.useRef<NodeJS.Timeout | null>(null);

  const handleSearchChange = React.useCallback(
    (value: string) => {
      setSearchInput(value);
      if (searchTimeout.current) clearTimeout(searchTimeout.current);
      searchTimeout.current = setTimeout(() => {
        updateParams({ search: value });
      }, 300);
    },
    [updateParams]
  );

  React.useEffect(() => {
    setSearchInput(search);
  }, [search]);

  // Filter cars
  const filteredCars = React.useMemo(() => {
    return mockCars
      .filter((car) =>
        search
          ? car.name.toLowerCase().includes(search.toLowerCase()) ||
            car.brand.toLowerCase().includes(search.toLowerCase())
          : true
      )
      .filter((car) => (brand ? car.brand === brand : true))
      .filter((car) => (transmission ? car.transmission === transmission : true))
      .filter((car) => (minPrice ? car.price >= Number(minPrice) : true))
      .filter((car) => (maxPrice ? car.price <= Number(maxPrice) : true))
      .filter((car) => (minYear ? car.year >= Number(minYear) : true))
      .filter((car) => (maxYear ? car.year <= Number(maxYear) : true));
  }, [search, brand, transmission, minPrice, maxPrice, minYear, maxYear]);

  // Pagination
  const totalPages = Math.ceil(filteredCars.length / ITEMS_PER_PAGE);
  const currentPage = Math.min(Math.max(1, page), Math.max(1, totalPages));
  const paginatedCars = filteredCars.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Active filter labels
  const activeFiltersList = React.useMemo(() => {
    const list: { key: string; label: string }[] = [];
    if (brand) list.push({ key: "brand", label: brand });
    if (transmission) list.push({ key: "transmission", label: transmission });
    if (minPrice || maxPrice) {
      const fmt = (v: string) => `${(Number(v) / 1_000_000).toFixed(0)} Jt`;
      const label =
        minPrice && maxPrice
          ? `${fmt(minPrice)} — ${fmt(maxPrice)}`
          : minPrice
            ? `≥ ${fmt(minPrice)}`
            : `≤ ${fmt(maxPrice)}`;
      list.push({ key: "price", label: `Harga: ${label}` });
    }
    if (minYear || maxYear) {
      const label =
        minYear && maxYear
          ? `${minYear} — ${maxYear}`
          : minYear
            ? `≥ ${minYear}`
            : `≤ ${maxYear}`;
      list.push({ key: "year", label: `Tahun: ${label}` });
    }
    return list;
  }, [brand, transmission, minPrice, maxPrice, minYear, maxYear]);

  const handleRemoveFilter = React.useCallback(
    (key: string) => {
      if (key === "brand") updateParams({ brand: "" });
      else if (key === "transmission") updateParams({ transmission: "" });
      else if (key === "price") updateParams({ minPrice: "", maxPrice: "" });
      else if (key === "year") updateParams({ minYear: "", maxYear: "" });
    },
    [updateParams]
  );

  const handleResetAll = React.useCallback(() => {
    router.push("/katalog", { scroll: false });
    setSearchInput("");
  }, [router]);

  return (
    <>
      <CatalogHeader
        search={searchInput}
        onSearchChange={handleSearchChange}
        totalResults={filteredCars.length}
      />

      <section className="py-8 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            <FilterPanel
              filters={{ brand, transmission, minPrice, maxPrice, minYear, maxYear }}
              onFilterChange={(key, value) => updateParams({ [key]: value })}
              onReset={handleResetAll}
              brands={allBrands}
              activeFilterCount={activeFiltersList.length}
            />

            <div className="flex-1 min-w-0">
              <ActiveFilters
                filters={activeFiltersList}
                onRemove={handleRemoveFilter}
                onClearAll={handleResetAll}
              />

              {paginatedCars.length > 0 ? (
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                  initial="hidden"
                  animate="visible"
                  key={`page-${currentPage}-${search}-${brand}-${transmission}`}
                  variants={staggerContainer}
                >
                  {paginatedCars.map((car) => (
                    <motion.div key={car.id} variants={fadeUpVariants}>
                      <CarCard car={car} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <CarIcon size={64} className="text-slate-300 mb-6" strokeWidth={1} />
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Tidak ada mobil yang ditemukan
                  </h3>
                  <p className="text-sm text-slate-500 mb-6 max-w-md">
                    Coba ubah filter atau kata kunci pencarian Anda untuk menemukan mobil yang sesuai.
                  </p>
                  <Button variant="outline" onClick={handleResetAll}>
                    Reset Filter
                  </Button>
                </motion.div>
              )}

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(p) => updateParams({ page: String(p) })}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
