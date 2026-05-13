"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { CarTable } from "@/components/admin/CarTable";
import { mockCars } from "@/lib/mock-data";

export default function CarsListPage() {
  const [cars, setCars] = useState(mockCars);

  const handleToggleStatus = (id: number) => {
    setCars(prev => prev.map(car => {
      if (car.id === id) {
        return { ...car, status: car.status === "available" ? "sold" : "available" };
      }
      return car;
    }));
  };

  const handleDelete = (id: number) => {
    // Mock delete
    setCars(prev => prev.filter(car => car.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold font-dm-sans text-slate-900">Daftar Mobil</h1>
          <p className="text-slate-500 mt-1">Kelola inventaris mobil di showroom Anda.</p>
        </div>
        <Link
          href="/admin/cars/create"
          className="inline-flex items-center justify-center rounded-lg bg-[var(--color-primary)] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-800 shrink-0"
        >
          <Plus size={18} className="mr-2" />
          Tambah Mobil
        </Link>
      </div>

      <CarTable 
        cars={cars} 
        onToggleStatus={handleToggleStatus} 
        onDelete={handleDelete} 
      />
    </div>
  );
}
