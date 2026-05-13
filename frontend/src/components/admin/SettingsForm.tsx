"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Settings } from "@/lib/types";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";

const settingsSchema = z.object({
  showroom_name: z.string().min(1, "Nama showroom wajib diisi"),
  phone: z.string().min(10, "Nomor WhatsApp tidak valid"),
  address: z.string().min(5, "Alamat wajib diisi"),
  open_hours: z.string().min(1, "Jam operasional wajib diisi"),
  meta_title: z.string().min(1, "Meta title wajib diisi"),
  meta_description: z.string().min(1, "Meta description wajib diisi"),
});

interface SettingsFormProps {
  initialData: Settings;
}

export function SettingsForm({ initialData }: SettingsFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<Settings>({
    resolver: zodResolver(settingsSchema),
    defaultValues: initialData,
  });

  const onSubmit = async (data: Settings) => {
    try {
      // TODO: Submit to API
      console.log("Saving settings:", data);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Mock API delay
      alert("Pengaturan berhasil disimpan!");
    } catch (error) {
      console.error("Failed to save settings:", error);
      alert("Gagal menyimpan pengaturan");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-2xl">
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        <h2 className="text-lg font-semibold font-dm-sans text-slate-900 mb-6 border-b border-slate-100 pb-4">
          Informasi Showroom
        </h2>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Nama Showroom *</label>
            <Input {...register("showroom_name")} />
            {errors.showroom_name && <p className="text-sm text-red-500">{errors.showroom_name.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Nomor WhatsApp *</label>
            <Input {...register("phone")} placeholder="Contoh: 6281234567890" />
            <p className="text-xs text-slate-500">Gunakan format 62xxx tanpa spasi atau +</p>
            {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Jam Operasional *</label>
            <Input {...register("open_hours")} placeholder="Contoh: Senin - Sabtu, 08:00 - 17:00" />
            {errors.open_hours && <p className="text-sm text-red-500">{errors.open_hours.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Alamat Lengkap *</label>
            <Textarea {...register("address")} />
            {errors.address && <p className="text-sm text-red-500">{errors.address.message}</p>}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        <h2 className="text-lg font-semibold font-dm-sans text-slate-900 mb-6 border-b border-slate-100 pb-4">
          SEO & Metadata
        </h2>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Meta Title *</label>
            <Input {...register("meta_title")} />
            {errors.meta_title && <p className="text-sm text-red-500">{errors.meta_title.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Meta Description *</label>
            <Textarea {...register("meta_description")} />
            {errors.meta_description && <p className="text-sm text-red-500">{errors.meta_description.message}</p>}
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <Button 
          type="submit" 
          variant="primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Menyimpan..." : "Simpan Perubahan"}
        </Button>
      </div>
      
      {isSubmitSuccessful && (
        <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-md border border-green-200">
          ✅ Perubahan berhasil disimpan.
        </div>
      )}
    </form>
  );
}
