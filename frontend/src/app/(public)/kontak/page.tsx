import { Metadata } from "next";
import { ContactHero } from "@/components/public/ContactHero";
import { ContactInfoSection } from "@/components/public/ContactInfoSection";
import { MapsSection } from "@/components/public/MapsSection";
import { WhatsAppCTA } from "@/components/public/WhatsAppCTA";

export const metadata: Metadata = {
  title: "Kontak - Garasirumahan",
  description: "Hubungi Garasirumahan untuk informasi mobil bekas berkualitas. Kunjungi showroom kami atau hubungi via WhatsApp.",
};

export default function KontakPage() {
  return (
    <main>
      <ContactHero />
      <ContactInfoSection />
      <MapsSection />
      <WhatsAppCTA />
    </main>
  );
}
