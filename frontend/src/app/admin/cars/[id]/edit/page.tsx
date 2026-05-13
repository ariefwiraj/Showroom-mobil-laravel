"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { CarForm } from "@/components/admin/CarForm";
import { mockCars } from "@/lib/mock-data";
import { Car } from "@/lib/types";

export default function EditCarPage() {
  const params = useParams();
  const router = useRouter();
  const [car, setCar] = useState<Car | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real app, you would fetch the car data from an API
    // Here we're using mock data
    const id = parseInt(params.id as string);
    const foundCar = mockCars.find(c => c.id === id);
    
    if (foundCar) {
      setCar(foundCar);
    } else {
      alert("Mobil tidak ditemukan");
      router.push("/admin/cars");
    }
    setIsLoading(false);
  }, [params.id, router]);

  if (isLoading) {
    return <div className="p-8 text-center text-slate-500">Loading data mobil...</div>;
  }

  if (!car) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold font-dm-sans text-slate-900">Edit Mobil</h1>
        <p className="text-slate-500 mt-1">Ubah informasi mobil yang sudah ada.</p>
      </div>

      <CarForm initialData={car} isEdit={true} />
    </div>
  );
}
