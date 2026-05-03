"use client";

import { motion } from "framer-motion";
import { fadeUpVariants } from "@/lib/animations";

export function MapsSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Lokasi Kami
          </h2>
          <p className="text-lg text-slate-600">
            Kunjungi showroom kami secara langsung untuk melihat unit pilihan Anda.
          </p>
        </motion.div>

        <motion.div
          className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden border border-slate-200 shadow-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUpVariants}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.24037562842!2d106.759242!3d-6.2297465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%20Selatan%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Garasirumahan"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
