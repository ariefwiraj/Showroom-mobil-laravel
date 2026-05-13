import { SettingsForm } from "@/components/admin/SettingsForm";
import { mockSettings } from "@/lib/mock-data";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold font-dm-sans text-slate-900">Settings</h1>
        <p className="text-slate-500 mt-1">Atur informasi showroom dan SEO website Anda.</p>
      </div>

      <SettingsForm initialData={mockSettings} />
    </div>
  );
}
