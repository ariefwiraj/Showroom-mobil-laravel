"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Car, Settings, Globe, LogOut, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const adminNavItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Mobil", href: "/admin/cars", icon: Car },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

const adminBottomItems = [
  { label: "Back to Website", href: "/", icon: Globe, external: true },
  { label: "Logout", href: "#", icon: LogOut, action: "logout" },
];

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    // Mock logout
    localStorage.removeItem("admin_token");
    window.location.href = "/admin/login";
  };

  const sidebarContent = (
    <div className="flex flex-col h-full bg-slate-900 text-white w-60 shrink-0">
      <div className="p-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold font-dm-sans text-white">Garasirumahan</h2>
          <p className="text-xs uppercase text-white/50 tracking-wider mt-1">Admin Panel</p>
        </div>
        <button onClick={onClose} className="lg:hidden text-white/70 hover:text-white cursor-pointer">
          <X size={24} />
        </button>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-2">
        {adminNavItems.map((item) => {
          const isActive = 
            item.href === "/admin" 
              ? pathname === "/admin" 
              : pathname.startsWith(item.href);
              
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors group",
                isActive
                  ? "bg-white/10 text-white border-l-4 border-[var(--color-accent)] pl-3"
                  : "text-white/70 hover:bg-white/5 hover:text-white/90"
              )}
            >
              <item.icon size={20} className={isActive ? "text-[var(--color-accent)]" : "text-white/70 group-hover:text-white/90"} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/10 space-y-2">
        {adminBottomItems.map((item) => {
          if (item.action === "logout") {
            return (
              <button
                key={item.label}
                onClick={handleLogout}
                className="flex w-full items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-white/70 hover:bg-white/5 hover:text-red-400 transition-colors group cursor-pointer"
              >
                <item.icon size={20} className="text-white/70 group-hover:text-red-400" />
                {item.label}
              </button>
            );
          }
          return (
            <Link
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-white/70 hover:bg-white/5 hover:text-white/90 transition-colors group"
            >
              <item.icon size={20} className="text-white/70 group-hover:text-white/90" />
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex h-screen sticky top-0 left-0 z-40">
        {sidebarContent}
      </aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm lg:hidden"
              onClick={onClose}
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.3 }}
              className="fixed inset-y-0 left-0 z-50 shadow-2xl lg:hidden"
            >
              {sidebarContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
