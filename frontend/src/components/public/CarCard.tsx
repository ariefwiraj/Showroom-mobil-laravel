import Link from "next/link";
import { Car as CarIcon, Settings2, Calendar } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { Car } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  return (
    <Link href={`/katalog/${car.slug}`} className="group block h-full">
      <Card className="h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[var(--color-primary)]/30">
        {/* Image Container */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
          {/* CSS Gradient Placeholder as per PRD */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-slate-400">
            <CarIcon size={64} className="opacity-20" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/5 transition-opacity duration-300" />
          </div>
          
          {/* Badges */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 items-end">
            {car.status === "sold" && (
              <Badge variant="destructive" className="shadow-sm">TERJUAL</Badge>
            )}
            {car.featured && car.status !== "sold" && (
              <Badge className="bg-[var(--color-accent)] text-white shadow-sm">Pilihan Utama</Badge>
            )}
          </div>
        </div>

        {/* Content */}
        <CardContent className="p-5 flex flex-col justify-between flex-1">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 line-clamp-1 group-hover:text-[var(--color-primary)] transition-colors">
              {car.name}
            </h3>
            <p className="mt-2 text-xl font-bold text-[var(--color-primary)]">
              {formatPrice(car.price)}
            </p>
            
            {/* Meta Info */}
            <div className="mt-4 flex flex-wrap gap-y-2 gap-x-4 text-sm text-slate-600">
              <div className="flex items-center gap-1.5">
                <Calendar size={16} className="text-slate-400" />
                <span>{car.year}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Settings2 size={16} className="text-slate-400" />
                <span>{car.transmission}</span>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-sm font-medium text-[var(--color-secondary)] group-hover:underline underline-offset-4">
              Lihat Detail &rarr;
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
