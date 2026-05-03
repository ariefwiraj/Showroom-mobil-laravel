"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Car, Star, ShieldCheck, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";

const stats = [
  { icon: Car, value: "100+", label: "Unit Tersedia" },
  { icon: Star, value: "500+", label: "Pelanggan Puas" },
  { icon: ShieldCheck, value: "10+", label: "Tahun Pengalaman" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-soft-bg)] pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] rounded-full bg-[var(--color-secondary)]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] rounded-full bg-[var(--color-primary)]/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text-dark)] leading-tight tracking-tight mb-6">
                Temukan Mobil Bekas <span className="text-[var(--color-primary)]">Impian Anda</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                Showroom terpercaya dengan koleksi mobil bekas berkualitas terbaik. Proses mudah, aman, dan harga transparan.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/katalog">
                  <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-[var(--color-primary)]/20">
                    Lihat Katalog
                  </Button>
                </Link>
                <Link href="/kontak">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2">
                    <Phone size={18} />
                    Hubungi Kami
                  </Button>
                </Link>
              </div>

              {/* Stats Strip */}
              <div className="grid grid-cols-3 gap-4 border-t border-slate-200 pt-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="flex flex-col items-start"
                    >
                      <Icon className="text-[var(--color-primary)] mb-2" size={24} />
                      <span className="text-2xl font-bold text-slate-900">{stat.value}</span>
                      <span className="text-sm text-slate-500">{stat.label}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-lg lg:max-w-none mx-auto"
          >
            {/* CSS Gradient Placeholder for Car Image as per PRD */}
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950 flex flex-col items-center justify-center text-white/20 p-8 text-center border-4 border-white/10">
                <Car size={120} strokeWidth={1} className="mb-6 opacity-30" />
                <p className="text-2xl font-bold tracking-widest uppercase opacity-40">Premium Selection</p>
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_3s_infinite_linear]" />
              </div>
            </div>
            
            {/* Floating element decoration */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 animate-bounce" style={{ animationDuration: "3s" }}>
              <div className="bg-[#25D366]/10 p-3 rounded-full text-[#25D366]">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Garansi Mesin</p>
                <p className="text-xs text-slate-500">Hingga 1 Tahun</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
