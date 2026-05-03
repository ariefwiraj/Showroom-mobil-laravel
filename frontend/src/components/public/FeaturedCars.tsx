"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { mockCars } from "@/lib/mock-data";
import { fadeUpVariants, staggerContainer } from "@/lib/animations";
import { CarCard } from "./CarCard";

export function FeaturedCars() {
  const featuredCars = mockCars.filter((car) => car.featured).slice(0, 3); // Ambil 3 mobil unggulan

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Mobil Unggulan Kami
          </h2>
          <p className="text-lg text-slate-600">
            Pilihan terbaik yang kami rekomendasikan, telah melewati inspeksi menyeluruh untuk menjamin kualitas.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {featuredCars.map((car) => (
            <motion.div key={car.id} variants={fadeUpVariants}>
              <CarCard car={car} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
        >
          <Link 
            href="/katalog" 
            className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:text-[var(--color-secondary)] transition-colors group px-6 py-3 rounded-full hover:bg-[var(--color-primary)]/5"
          >
            Lihat Semua Mobil
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
