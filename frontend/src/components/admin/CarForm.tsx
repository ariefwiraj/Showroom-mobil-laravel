"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { CarFormData, Car } from "@/lib/types";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { ImageUploader } from "./ImageUploader";

const carSchema = z.object({
  name: z.string().min(1, "Nama mobil wajib diisi"),
  brand: z.string().min(1, "Brand wajib diisi"),
  price: z.coerce.number().min(1, "Harga wajib diisi dan harus lebih dari 0"),
  year: z.coerce.number().min(1990, "Tahun minimal 1990").max(new Date().getFullYear(), "Tahun tidak valid"),
  mileage: z.coerce.number().min(0, "Kilometer tidak boleh negatif"),
  transmission: z.enum(["Manual", "Automatic"]),
  fuel: z.enum(["Bensin", "Diesel", "Hybrid", "Electric"]),
  color: z.string().min(1, "Warna wajib diisi"),
  description: z.string().min(10, "Deskripsi minimal 10 karakter"),
  featured: z.boolean().default(false),
});

interface CarFormProps {
  initialData?: Car;
  isEdit?: boolean;
}

export function CarForm({ initialData, isEdit = false }: CarFormProps) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CarFormData>({
    resolver: zodResolver(carSchema),
    defaultValues: initialData ? {
      name: initialData.name,
      brand: initialData.brand,
      price: initialData.price,
      year: initialData.year,
      mileage: initialData.mileage,
      transmission: initialData.transmission,
      fuel: initialData.fuel,
      color: initialData.color,
      description: initialData.description,
      featured: initialData.featured,
    } : {
      transmission: "Automatic",
      fuel: "Bensin",
      featured: false,
    },
  });

  const onSubmit = async (data: CarFormData) => {
    try {
      // TODO: Submit to API
      console.log("Submitting:", data);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Mock API delay
      router.push("/admin/cars");
    } catch (error) {
      console.error("Failed to submit car:", error);
      alert("Gagal menyimpan data mobil");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        <h2 className="text-lg font-semibold font-dm-sans text-slate-900 mb-6 border-b border-slate-100 pb-4">
          Informasi Mobil
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Nama Mobil *</label>
            <Input {...register("name")} placeholder="Contoh: Honda Jazz RS" />
            {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Brand *</label>
            <Input {...register("brand")} placeholder="Contoh: Honda" />
            {errors.brand && <p className="text-sm text-red-500">{errors.brand.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Harga (Rp) *</label>
            <Input type="number" {...register("price")} placeholder="Contoh: 250000000" />
            {errors.price && <p className="text-sm text-red-500">{errors.price.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Tahun *</label>
            <Input type="number" {...register("year")} placeholder="Contoh: 2021" />
            {errors.year && <p className="text-sm text-red-500">{errors.year.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Kilometer *</label>
            <Input type="number" {...register("mileage")} placeholder="Contoh: 35000" />
            {errors.mileage && <p className="text-sm text-red-500">{errors.mileage.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Warna *</label>
            <Input {...register("color")} placeholder="Contoh: Putih" />
            {errors.color && <p className="text-sm text-red-500">{errors.color.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Transmisi *</label>
            <select
              {...register("transmission")}
              className="w-full h-10 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2"
            >
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
            </select>
            {errors.transmission && <p className="text-sm text-red-500">{errors.transmission.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Bahan Bakar *</label>
            <select
              {...register("fuel")}
              className="w-full h-10 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2"
            >
              <option value="Bensin">Bensin</option>
              <option value="Diesel">Diesel</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Electric">Electric</option>
            </select>
            {errors.fuel && <p className="text-sm text-red-500">{errors.fuel.message}</p>}
          </div>
        </div>

        <div className="mt-6 space-y-2">
          <label className="text-sm font-medium text-slate-700">Deskripsi *</label>
          <Textarea 
            {...register("description")} 
            placeholder="Deskripsikan kondisi mobil, riwayat servis, dll."
            className="min-h-[120px]"
          />
          {errors.description && <p className="text-sm text-red-500">{errors.description.message}</p>}
        </div>

        <div className="mt-6 flex items-center gap-2">
          <input
            type="checkbox"
            id="featured"
            {...register("featured")}
            className="h-4 w-4 rounded border-slate-300 text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
          />
          <label htmlFor="featured" className="text-sm font-medium text-slate-700">
            Tampilkan di bagian Featured (Beranda)
          </label>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        <h2 className="text-lg font-semibold font-dm-sans text-slate-900 mb-6 border-b border-slate-100 pb-4">
          Upload Gambar
        </h2>
        <ImageUploader 
          onImagesChange={(files) => {
            // TODO: handle images for API
            console.log("Images to upload:", files);
          }} 
        />
        <p className="text-sm text-slate-500 mt-4">
          * Gambar pertama akan menjadi thumbnail utama mobil.
        </p>
      </div>

      <div className="flex justify-end gap-4">
        <Button 
          type="button" 
          variant="outline" 
          onClick={() => router.push("/admin/cars")}
          disabled={isSubmitting}
        >
          Batal
        </Button>
        <Button 
          type="submit" 
          variant="primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Menyimpan..." : isEdit ? "Update Mobil" : "Simpan Mobil"}
        </Button>
      </div>
    </form>
  );
}
