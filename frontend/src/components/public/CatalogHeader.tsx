"use client";

import { motion } from "framer-motion";
import { fadeUpVariants } from "@/lib/animations";
import { SearchBar } from "./SearchBar";

interface CatalogHeaderProps {
  search: string;
  onSearchChange: (value: string) => void;
  totalResults: number;
}

export function CatalogHeader({ search, onSearchChange, totalResults }: CatalogHeaderProps) {
  return (
    <section className="bg-[var(--color-soft-bg)] pt-32 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Katalog Mobil
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            Temukan mobil bekas berkualitas dari koleksi kami
          </p>

          <SearchBar value={search} onChange={onSearchChange} />

          <p className="mt-4 text-sm text-slate-500">
            Menampilkan <span className="font-semibold text-slate-700">{totalResults}</span> unit
          </p>
        </motion.div>
      </div>
    </section>
  );
}
