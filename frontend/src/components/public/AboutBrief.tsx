"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUpVariants } from "@/lib/animations";

export function AboutBrief() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariants}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Tentang Garasirumahan
            </h2>
            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
              <p>
                Berawal dari kecintaan terhadap dunia otomotif, Garasirumahan hadir untuk memberikan pengalaman membeli mobil bekas yang berbeda. Kami memahami bahwa membeli kendaraan adalah keputusan penting, sehingga transparansi dan kejujuran menjadi nilai utama yang kami pegang.
              </p>
              <p>
                Setiap kendaraan yang masuk ke garasi kami telah melalui proses seleksi dan inspeksi ketat. Kami memastikan bahwa setiap unit yang Anda bawa pulang tidak hanya siap pakai, tetapi juga memiliki dokumen yang terjamin legalitasnya.
              </p>
              <p>
                Tim kami siap membantu Anda di setiap langkah, mulai dari konsultasi pemilihan unit yang sesuai dengan kebutuhan dan budget, hingga proses test drive dan administrasi.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariants}
            className="order-1 lg:order-2"
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-100">
              {/* Replace src with a real image of the showroom or team */}
              <Image
                src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Garasirumahan Showroom"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 border-2 border-white/20 rounded-2xl pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
