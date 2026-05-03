interface DescriptionSectionProps {
  description: string;
}

export function DescriptionSection({ description }: DescriptionSectionProps) {
  return (
    <section className="bg-white py-12 md:py-16 border-t border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Deskripsi Mobil
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 leading-relaxed whitespace-pre-line text-lg">
              {description || "Tidak ada deskripsi tersedia untuk mobil ini."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
