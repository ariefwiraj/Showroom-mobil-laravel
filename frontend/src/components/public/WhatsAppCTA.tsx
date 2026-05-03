"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { mockSettings } from "@/lib/mock-data";
import { generateWALink } from "@/lib/utils";

export function WhatsAppCTA() {
  const waLink = generateWALink(
    mockSettings.phone, 
    "Halo Garasirumahan, saya tertarik dengan koleksi mobil yang ada dan ingin mendapat informasi lebih lanjut."
  );

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)]" />
      
      {/* Decorative background patterns */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PHBhdGggZD0iTTAgMGw4IDhaIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjMiLz48L3N2Zz4=')]" />
      
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Tertarik dengan Mobil Kami?
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Hubungi kami sekarang untuk mendapatkan informasi lebih lanjut, mengatur jadwal test drive, atau konsultasi pembelian.
          </p>
          
          <Button 
            variant="whatsapp" 
            size="lg" 
            className="w-full sm:w-auto shadow-xl shadow-[#25D366]/20 font-semibold gap-3 group"
            onClick={() => window.open(waLink, '_blank')}
          >
            <MessageCircle className="transition-transform group-hover:scale-110" />
            Contact via WhatsApp
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
