import { Menu } from "lucide-react";
import { mockUser } from "@/lib/mock-data";

interface TopBarProps {
  onOpenSidebar: () => void;
  title?: string;
}

export function TopBar({ onOpenSidebar, title = "Admin Dashboard" }: TopBarProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between bg-white px-4 lg:px-8 border-b border-slate-200">
      <div className="flex items-center gap-4">
        <button
          onClick={onOpenSidebar}
          className="lg:hidden p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
        >
          <Menu size={24} />
        </button>
        <h1 className="text-lg font-semibold font-dm-sans text-slate-900 hidden sm:block">
          {title}
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-slate-900">{mockUser.name}</p>
            <p className="text-xs text-slate-500 capitalize">{mockUser.role}</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] font-bold">
            {mockUser.name.charAt(0)}
          </div>
        </div>
      </div>
    </header>
  );
}
