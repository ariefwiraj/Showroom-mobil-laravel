"use client";

import Link from "next/link";
import { Car, CheckCircle2, XCircle, Plus, List } from "lucide-react";
import { StatCard } from "@/components/admin/StatCard";
import { StatusPieChart } from "@/components/admin/StatusPieChart";
import { BrandBarChart } from "@/components/admin/BrandBarChart";
import { MonthlyAreaChart } from "@/components/admin/MonthlyAreaChart";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { mockCars, mockMonthlyData } from "@/lib/mock-data";

export default function DashboardPage() {
  // Calculate stats from mock data
  const totalCars = mockCars.length;
  const availableCars = mockCars.filter(c => c.status === "available").length;
  const soldCars = mockCars.filter(c => c.status === "sold").length;

  // Calculate brand data
  const brandCounts = mockCars.reduce((acc, car) => {
    acc[car.brand] = (acc[car.brand] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  const brandData = Object.entries(brandCounts)
    .map(([brand, count]) => ({ brand, count }))
    .sort((a, b) => b.count - a.count);

  const recentCars = [...mockCars]
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .slice(0, 5);

  return (
    <div className="space-y-6">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <StatCard 
          title="Total Mobil" 
          value={totalCars} 
          icon={Car} 
          variant="primary" 
        />
        <StatCard 
          title="Available" 
          value={availableCars} 
          icon={CheckCircle2} 
          variant="success" 
        />
        <StatCard 
          title="Sold" 
          value={soldCars} 
          icon={XCircle} 
          variant="danger" 
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <StatusPieChart available={availableCars} sold={soldCars} />
        <BrandBarChart data={brandData} />
      </div>

      {/* Full Width Chart */}
      <div className="w-full">
        <MonthlyAreaChart data={mockMonthlyData} />
      </div>

      {/* Quick Actions & Recent Cars */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/cars/create"
            className="inline-flex items-center justify-center rounded-lg bg-[var(--color-primary)] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-800"
          >
            <Plus size={18} className="mr-2" />
            Tambah Mobil
          </Link>
          <Link
            href="/admin/cars"
            className="inline-flex items-center justify-center rounded-lg bg-white border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
          >
            <List size={18} className="mr-2" />
            Daftar Mobil
          </Link>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mt-6">
          <div className="p-6 border-b border-slate-100">
            <h3 className="text-lg font-semibold font-dm-sans text-slate-900">Mobil Terbaru</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 text-slate-500">
                <tr>
                  <th className="px-6 py-3 font-medium">Nama</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                  <th className="px-6 py-3 font-medium text-right">Tanggal Ditambahkan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {recentCars.map((car) => (
                  <tr key={car.id}>
                    <td className="px-6 py-4 font-medium text-slate-900">{car.name}</td>
                    <td className="px-6 py-4">
                      <StatusBadge status={car.status} />
                    </td>
                    <td className="px-6 py-4 text-right">
                      {new Date(car.created_at).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "short",
                        year: "numeric"
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
