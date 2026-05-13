"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Sidebar } from "@/components/admin/Sidebar";
import { TopBar } from "@/components/admin/TopBar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    // Periksa token di localStorage
    const token = localStorage.getItem("admin_token");
    
    if (!token && !isLoginPage) {
      router.push("/admin/login");
    } else {
      setIsAuthenticated(true);
    }
  }, [pathname, router, isLoginPage]);

  // Jika belum ngecek auth dan bukan halaman login, jangan render dulu (hindari flash konten)
  if (isAuthenticated === null && !isLoginPage) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-[var(--color-soft-bg)]">
        <div className="text-slate-500 flex flex-col items-center">
          <div className="w-8 h-8 border-4 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin mb-4"></div>
          <p>Memeriksa autentikasi...</p>
        </div>
      </div>
    );
  }

  // Jika ini halaman login, render konten tanpa sidebar dan topbar
  if (isLoginPage) {
    return <>{children}</>;
  }

  return (
    <div className="flex h-screen bg-[var(--color-soft-bg)] overflow-hidden">
      {/* Sidebar - Desktop & Mobile */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />

      {/* Main Content */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <TopBar 
          onOpenSidebar={() => setIsSidebarOpen(true)} 
          title="Admin Dashboard"
        />
        
        <main className="flex-1 overflow-y-auto p-4 lg:p-8">
          <div className="max-w-7xl mx-auto w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
