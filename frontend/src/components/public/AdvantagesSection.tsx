"use client";

import { motion } from "framer-motion";
import { CarFront, BadgeDollarSign, FileCheck, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { fadeUpVariants, staggerContainer } from "@/lib/animations";

const advantages = [
  { 
    icon: CarFront,    
    title: "Unit Berkualitas",  
    desc: "Setiap unit melalui inspeksi menyeluruh 150 titik untuk memastikan kualitas terbaik." 
  },
  { 
    icon: BadgeDollarSign, 
    title: "Harga Transparan", 
    desc: "Tidak ada biaya tersembunyi. Harga yang Anda lihat adalah harga final." 
  },
  { 
    icon: FileCheck,   
    title: "Dokumen Lengkap",  
    desc: "Surat-surat kendaraan terjamin keasliannya dan bebas masalah hukum." 
  },
  { 
    icon: ShieldCheck, 
    title: "Garansi Mesin",    
    desc: "Garansi mesin dan transmisi hingga 1 tahun untuk ketenangan Anda berkendara." 
  }
];



export function AdvantagesSection() {
  return (
    <section className="py-24 bg-[var(--color-soft-bg)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Mengapa Memilih Kami?
          </h2>
          <p className="text-lg text-slate-600">
            Komitmen kami untuk memberikan pelayanan dan unit kendaraan terbaik untuk Anda.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {advantages.map((adv, index) => {
            const Icon = adv.icon;
            return (
              <motion.div key={index} variants={fadeUpVariants} className="h-full">
                <Card className="h-full p-8 transition-all duration-300 hover:shadow-md hover:border-[var(--color-secondary)] hover:-translate-y-1">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-slate-900">
                    {adv.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {adv.desc}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
