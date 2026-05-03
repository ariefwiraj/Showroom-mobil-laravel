import Link from "next/link";
import { Car, MapPin, Phone, Clock } from "lucide-react";
import { mockSettings } from "@/lib/mock-data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-text-dark)] text-white pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Info */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary)] text-white">
                <Car size={24} />
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">
                {mockSettings.showroom_name}
              </span>
            </Link>
            <p className="text-white/70 max-w-xs mt-4 leading-relaxed">
              Showroom mobil bekas terpercaya dengan koleksi pilihan terbaik, harga transparan, dan pelayanan prima.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 tracking-wide">Navigasi</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-white/60 hover:text-white transition-colors">Beranda</Link>
              </li>
              <li>
                <Link href="/katalog" className="text-white/60 hover:text-white transition-colors">Katalog Mobil</Link>
              </li>
              <li>
                <Link href="/kontak" className="text-white/60 hover:text-white transition-colors">Hubungi Kami</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 tracking-wide">Informasi Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-[var(--color-secondary)] mt-1 flex-shrink-0" size={20} />
                <span className="text-white/70">{mockSettings.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[var(--color-secondary)] flex-shrink-0" size={20} />
                <span className="text-white/70">+{mockSettings.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="text-[var(--color-secondary)] flex-shrink-0" size={20} />
                <span className="text-white/70">{mockSettings.open_hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50 text-center md:text-left">
            &copy; {currentYear} {mockSettings.showroom_name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-white/50">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
