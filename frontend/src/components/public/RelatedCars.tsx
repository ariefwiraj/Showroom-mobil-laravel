"use client";

import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer } from "@/lib/animations";
import { CarCard } from "./CarCard";
import { Car } from "@/lib/types";

interface RelatedCarsProps {
  cars: Car[];
}

export function RelatedCars({ cars }: RelatedCarsProps) {
  if (!cars || cars.length === 0) return null;

  return (
    <section className="bg-[var(--color-soft-bg)] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariants}
          className="mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Mobil Lainnya
          </h2>
          <div className="h-1 w-20 bg-[var(--color-primary)] mt-3 rounded-full" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cars.map((car) => (
            <motion.div key={car.id} variants={fadeUpVariants} className="h-full">
              <CarCard car={car} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
