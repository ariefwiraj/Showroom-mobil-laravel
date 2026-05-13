import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  variant?: "primary" | "success" | "danger";
}

export function StatCard({ title, value, icon: Icon, variant = "primary" }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex items-center gap-4">
      <div
        className={cn(
          "flex h-14 w-14 shrink-0 items-center justify-center rounded-full",
          variant === "primary" && "bg-[var(--color-primary)]/10 text-[var(--color-primary)]",
          variant === "success" && "bg-green-500/10 text-green-600",
          variant === "danger" && "bg-red-500/10 text-red-600"
        )}
      >
        <Icon size={28} />
      </div>
      <div>
        <h3 className="text-sm font-medium text-slate-500">{title}</h3>
        <p className="text-3xl font-bold font-dm-sans text-slate-900 mt-1">{value}</p>
      </div>
    </div>
  );
}
