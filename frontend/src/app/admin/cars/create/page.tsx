import { CarForm } from "@/components/admin/CarForm";

export default function CreateCarPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold font-dm-sans text-slate-900">Tambah Mobil</h1>
        <p className="text-slate-500 mt-1">Tambahkan data mobil baru ke inventaris showroom.</p>
      </div>

      <CarForm />
    </div>
  );
}
