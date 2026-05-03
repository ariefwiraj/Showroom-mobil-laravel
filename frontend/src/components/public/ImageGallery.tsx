"use client";

import { useState } from "react";
import { Car as CarIcon } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Car } from "@/lib/types";

interface ImageGalleryProps {
  car: Car;
}

export function ImageGallery({ car }: ImageGalleryProps) {
  const images = [1, 2, 3, 4];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col gap-3 w-full">
      {/* Main Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-slate-100 shadow-sm border border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-slate-400 transition-all duration-300">
          <CarIcon size={96} className="opacity-20" />
          <span className="absolute mt-24 text-sm font-medium opacity-40">Gambar {activeIndex + 1}</span>
        </div>
        
        {/* Badges */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
          {car.status === "sold" && (
            <Badge variant="destructive" className="shadow-md px-3 py-1 text-sm font-medium">TERJUAL</Badge>
          )}
          {car.featured && car.status !== "sold" && (
            <Badge className="bg-[var(--color-accent)] text-white shadow-md px-3 py-1 text-sm font-medium">Pilihan Utama</Badge>
          )}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 mt-1 overflow-x-auto pb-2 scrollbar-hide">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`relative flex-shrink-0 h-16 w-20 sm:h-20 sm:w-28 rounded-md overflow-hidden bg-slate-100 border-2 transition-all duration-300 ${
              activeIndex === index 
                ? 'border-[var(--color-primary)] opacity-100' 
                : 'border-transparent opacity-60 hover:opacity-100'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-slate-400">
              <CarIcon size={24} className="opacity-20" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
