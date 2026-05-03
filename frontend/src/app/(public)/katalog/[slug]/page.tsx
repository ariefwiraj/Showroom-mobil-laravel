import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCarBySlug, getRelatedCars, mockSettings } from "@/lib/mock-data";
import { DetailMobilContent } from "./detail-content";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const car = getCarBySlug(resolvedParams.slug);
  
  if (!car) {
    return {
      title: "Mobil Tidak Ditemukan - Garasirumahan",
      description: "Mobil yang Anda cari tidak tersedia.",
    };
  }

  return {
    title: `${car.name} - ${mockSettings.showroom_name}`,
    description: car.description || mockSettings.meta_description,
  };
}

export default async function DetailMobilPage({ params }: PageProps) {
  const resolvedParams = await params;
  const car = getCarBySlug(resolvedParams.slug);

  if (!car) {
    notFound();
  }

  const relatedCars = getRelatedCars(car, 4);

  return <DetailMobilContent car={car} relatedCars={relatedCars} />;
}
