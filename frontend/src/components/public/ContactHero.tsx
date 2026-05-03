"use client";

import { motion } from "framer-motion";
import { fadeUpVariants } from "@/lib/animations";

export function ContactHero() {
  return (
    <section className="bg-[var(--color-soft-bg)] pt-28 pb-12 md:pt-32 md:pb-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-7xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUpVariants}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Hubungi Kami
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Garasirumahan adalah showroom mobil bekas pilihan di Jakarta Selatan yang mengutamakan transparansi unit dan kualitas pelayanan. Hubungi kami atau kunjungi lokasi kami di bawah ini.
        </p>
      </motion.div>
    </section>
  );
}
