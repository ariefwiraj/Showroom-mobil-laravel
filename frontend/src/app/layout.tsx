import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Garasirumahan - Showroom Mobil Bekas Terpercaya",
  description: "Temukan mobil bekas berkualitas dengan harga transparan, dokumen lengkap, dan garansi mesin. Pilihan terbaik di Garasirumahan.",
  keywords: ["mobil bekas", "showroom", "jual mobil", "garasirumahan"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
