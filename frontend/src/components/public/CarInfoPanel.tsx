"use client";

import Link from "next/link";
import { Calendar, Gauge, Settings2, Fuel, Palette, MessageCircle } from "lucide-react";
import { Car } from "@/lib/types";
import { formatPrice, generateWALink } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { mockSettings } from "@/lib/mock-data";

interface CarInfoPanelProps {
  car: Car;
}

export function CarInfoPanel({ car }: CarInfoPanelProps) {
  const waMessage = `Halo, saya tertarik dengan ${car.name} (${formatPrice(car.price)}). Apakah masih tersedia?`;
  const waLink = generateWALink(mockSettings.phone, waMessage);

  return (
    <div className="flex flex-col h-full bg-white rounded-xl shadow-sm border border-slate-200 p-6 lg:p-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
          {car.name}
        </h1>
        <p className="text-3xl font-bold text-[var(--color-primary)] mt-3">
          {formatPrice(car.price)}
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8">
        <div className="bg-slate-50 rounded-lg p-3 sm:p-4 flex flex-col items-center justify-center text-center border border-slate-100">
          <Calendar size={22} className="text-[var(--color-secondary)] mb-2" />
          <span className="text-sm font-semibold text-slate-900">{car.year}</span>
          <span className="text-xs text-slate-500 mt-0.5">Tahun</span>
        </div>
        <div className="bg-slate-50 rounded-lg p-3 sm:p-4 flex flex-col items-center justify-center text-center border border-slate-100">
          <Gauge size={22} className="text-[var(--color-secondary)] mb-2" />
          <span className="text-sm font-semibold text-slate-900">{car.mileage.toLocaleString('id-ID')} km</span>
          <span className="text-xs text-slate-500 mt-0.5">Kilometer</span>
        </div>
        <div className="bg-slate-50 rounded-lg p-3 sm:p-4 flex flex-col items-center justify-center text-center border border-slate-100">
          <Settings2 size={22} className="text-[var(--color-secondary)] mb-2" />
          <span className="text-sm font-semibold text-slate-900">{car.transmission}</span>
          <span className="text-xs text-slate-500 mt-0.5">Transmisi</span>
        </div>
        <div className="bg-slate-50 rounded-lg p-3 sm:p-4 flex flex-col items-center justify-center text-center border border-slate-100">
          <Fuel size={22} className="text-[var(--color-secondary)] mb-2" />
          <span className="text-sm font-semibold text-slate-900">{car.fuel}</span>
          <span className="text-xs text-slate-500 mt-0.5">Bahan Bakar</span>
        </div>
        <div className="bg-slate-50 rounded-lg p-3 sm:p-4 flex flex-col items-center justify-center text-center border border-slate-100">
          <Palette size={22} className="text-[var(--color-secondary)] mb-2" />
          <span className="text-sm font-semibold text-slate-900">{car.color}</span>
          <span className="text-xs text-slate-500 mt-0.5">Warna</span>
        </div>
      </div>

      <div className="mt-auto pt-8 flex flex-col gap-4">
        <Button 
          variant="whatsapp" 
          size="lg" 
          className="w-full text-base font-semibold gap-2 py-6 shadow-md shadow-[#25D366]/20 group"
          onClick={() => window.open(waLink, '_blank')}
          disabled={car.status === "sold"}
        >
          <MessageCircle size={20} className="transition-transform group-hover:scale-110" />
          {car.status === "sold" ? "Mobil Terjual" : "Hubungi via WhatsApp"}
        </Button>

        <Link 
          href="/katalog" 
          className="text-center text-sm font-medium text-[var(--color-secondary)] hover:text-[var(--color-primary)] hover:underline underline-offset-4 transition-colors"
        >
          &larr; Kembali ke Katalog
        </Link>
      </div>
    </div>
  );
}
