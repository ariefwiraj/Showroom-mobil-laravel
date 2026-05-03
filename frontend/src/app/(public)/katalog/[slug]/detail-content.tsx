"use client";

import { motion } from "framer-motion";
import { fadeUpVariants } from "@/lib/animations";
import { Breadcrumb } from "@/components/public/Breadcrumb";
import { ImageGallery } from "@/components/public/ImageGallery";
import { CarInfoPanel } from "@/components/public/CarInfoPanel";
import { DescriptionSection } from "@/components/public/DescriptionSection";
import { WhatsAppCTA } from "@/components/public/WhatsAppCTA";
import { RelatedCars } from "@/components/public/RelatedCars";
import { Car } from "@/lib/types";

interface DetailMobilContentProps {
  car: Car;
  relatedCars: Car[];
}

export function DetailMobilContent({ car, relatedCars }: DetailMobilContentProps) {
  const breadcrumbItems = [
    { label: "Beranda", href: "/" },
    { label: "Katalog", href: "/katalog" },
    { label: car.name },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Breadcrumb items={breadcrumbItems} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[var(--color-soft-bg)] pb-12 md:pb-16 pt-4">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              <div className="lg:col-span-7 xl:col-span-8">
                <ImageGallery car={car} />
              </div>
              <div className="lg:col-span-5 xl:col-span-4 sticky top-24">
                <CarInfoPanel car={car} />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Description Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariants}
        >
          <DescriptionSection description={car.description} />
        </motion.div>

        {/* CTA Section */}
        <WhatsAppCTA />

        {/* Related Cars Section */}
        {relatedCars.length > 0 && (
          <RelatedCars cars={relatedCars} />
        )}
      </main>
    </div>
  );
}
