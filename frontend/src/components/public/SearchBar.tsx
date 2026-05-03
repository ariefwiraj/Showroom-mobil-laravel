"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/Input";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchBar({ value, onChange, placeholder = "Cari mobil berdasarkan nama atau brand..." }: SearchBarProps) {
  return (
    <div className="w-full max-w-xl mx-auto">
      <Input
        icon={Search}
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-12 rounded-lg text-base shadow-sm"
        aria-label="Cari mobil"
      />
    </div>
  );
}
