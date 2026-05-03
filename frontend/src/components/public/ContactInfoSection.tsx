"use client";

import { motion } from "framer-motion";
import { MessageCircle, MapPin, Clock, Globe } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { fadeUpVariants, staggerContainer } from "@/lib/animations";
import { mockSettings } from "@/lib/mock-data";

export function ContactInfoSection() {
  const contactInfo = [
    {
      id: "whatsapp",
      icon: MessageCircle,
      label: "WhatsApp",
      value: `+${mockSettings.phone}`,
      action: (
        <Button 
          variant="whatsapp" 
          size="sm" 
          className="mt-4"
          onClick={() => window.open(`https://wa.me/${mockSettings.phone}`, "_blank")}
        >
          Chat Sekarang &rarr;
        </Button>
      )
    },
    {
      id: "address",
      icon: MapPin,
      label: "Alamat",
      value: mockSettings.address,
    },
    {
      id: "hours",
      icon: Clock,
      label: "Jam Operasional",
      value: mockSettings.open_hours,
    },
    {
      id: "social",
      icon: Globe,
      label: "Follow Us",
      value: "Instagram @garasirumahan",
    }
  ];

  return (
    <section className="bg-[var(--color-soft-bg)] pt-0 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {contactInfo.map((info) => {
            const Icon = info.icon;
            return (
              <motion.div key={info.id} variants={fadeUpVariants} className="h-full">
                <Card className="h-full p-8 transition-all duration-300 hover:shadow-md hover:border-[var(--color-secondary)] hover:-translate-y-1">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">
                    {info.label}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {info.value}
                  </p>
                  {info.action}
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
