import type { Metadata } from "next";
import { Suspense } from "react";
import KatalogContent from "./katalog-content";

export const metadata: Metadata = {
  title: "Katalog Mobil - Garasirumahan",
  description: "Jelajahi koleksi mobil bekas berkualitas di Garasirumahan. Filter berdasarkan brand, harga, tahun, dan transmisi.",
};

export default function KatalogPage() {
  return (
    <Suspense fallback={<KatalogSkeleton />}>
      <KatalogContent />
    </Suspense>
  );
}

function KatalogSkeleton() {
  return (
    <>
      {/* Header skeleton */}
      <section className="bg-[var(--color-soft-bg)] pt-32 pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="h-10 w-48 bg-slate-200 rounded-md mx-auto mb-4 animate-pulse" />
          <div className="h-6 w-80 bg-slate-200 rounded-md mx-auto mb-8 animate-pulse" />
          <div className="h-12 w-full max-w-xl bg-slate-200 rounded-lg mx-auto animate-pulse" />
        </div>
      </section>
      {/* Grid skeleton */}
      <section className="py-8 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            <div className="hidden lg:block w-64 shrink-0">
              <div className="h-96 bg-slate-100 rounded-lg animate-pulse" />
            </div>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-80 bg-slate-100 rounded-lg animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
