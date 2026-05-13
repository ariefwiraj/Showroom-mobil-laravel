"use client";

import { useState } from "react";
import Link from "next/link";
import { Car } from "@/lib/types";
import { StatusBadge } from "./StatusBadge";
import { ConfirmDialog } from "./ConfirmDialog";
import { Edit, Trash2, Search } from "lucide-react";
import { Input } from "@/components/ui/Input";

interface CarTableProps {
  cars: Car[];
  onToggleStatus: (id: number) => void;
  onDelete: (id: number) => void;
}

export function CarTable({ cars, onToggleStatus, onDelete }: CarTableProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "available" | "sold">("all");
  const [brandFilter, setBrandFilter] = useState<string>("all");
  const [yearFilter, setYearFilter] = useState<string>("all");
  const [deleteId, setDeleteId] = useState<number | null>(null);

  // Dapatkan daftar brand dan tahun unik dari data mobil
  const uniqueBrands = Array.from(new Set(cars.map(car => car.brand))).sort();
  const uniqueYears = Array.from(new Set(cars.map(car => car.year))).sort((a, b) => b - a);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const filteredCars = cars.filter((car) => {
    const matchesSearch = 
      car.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      car.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || car.status === statusFilter;
    const matchesBrand = brandFilter === "all" || car.brand === brandFilter;
    const matchesYear = yearFilter === "all" || car.year.toString() === yearFilter;
    
    return matchesSearch && matchesStatus && matchesBrand && matchesYear;
  });

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-slate-200">
        <div className="w-full lg:max-w-md">
          <Input
            icon={Search}
            placeholder="Cari nama atau brand mobil..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap w-full lg:w-auto gap-3">
          <select
            className="flex-1 sm:flex-none h-10 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2"
            value={brandFilter}
            onChange={(e) => setBrandFilter(e.target.value)}
          >
            <option value="all">Semua Brand</option>
            {uniqueBrands.map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
          <select
            className="flex-1 sm:flex-none h-10 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2"
            value={yearFilter}
            onChange={(e) => setYearFilter(e.target.value)}
          >
            <option value="all">Semua Tahun</option>
            {uniqueYears.map(year => (
              <option key={year} value={year.toString()}>{year}</option>
            ))}
          </select>
          <select
            className="flex-1 sm:flex-none h-10 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as any)}
          >
            <option value="all">Semua Status</option>
            <option value="available">Available</option>
            <option value="sold">Sold</option>
          </select>
        </div>
      </div>

      {/* Table Desktop / Card List Mobile */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-sm text-slate-500">
                <th className="px-6 py-4 font-medium">Mobil</th>
                <th className="px-6 py-4 font-medium">Brand</th>
                <th className="px-6 py-4 font-medium">Harga</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredCars.length > 0 ? (
                filteredCars.map((car) => (
                  <tr key={car.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium text-slate-900">{car.name}</div>
                      <div className="text-xs text-slate-500">{car.year} • {car.transmission}</div>
                    </td>
                    <td className="px-6 py-4 text-slate-600">{car.brand}</td>
                    <td className="px-6 py-4 font-medium text-slate-900">
                      {formatPrice(car.price)}
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge 
                        status={car.status} 
                        onClick={() => onToggleStatus(car.id)} 
                      />
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <Link
                          href={`/admin/cars/${car.id}/edit`}
                          className="p-2 text-slate-400 hover:text-[var(--color-primary)] hover:bg-slate-100 rounded-lg transition-colors"
                        >
                          <Edit size={18} />
                        </Link>
                        <button
                          onClick={() => setDeleteId(car.id)}
                          className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                    Tidak ada data mobil yang ditemukan.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <ConfirmDialog
        isOpen={deleteId !== null}
        onClose={() => setDeleteId(null)}
        onConfirm={() => {
          if (deleteId) onDelete(deleteId);
          setDeleteId(null);
        }}
        title="Hapus Mobil"
        description="Apakah Anda yakin ingin menghapus data mobil ini? Tindakan ini tidak dapat dibatalkan."
        confirmText="Hapus"
      />
    </div>
  );
}
