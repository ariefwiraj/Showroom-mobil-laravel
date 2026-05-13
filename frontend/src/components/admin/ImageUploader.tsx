"use client";

import { useState } from "react";
import { Upload, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageUploaderProps {
  onImagesChange: (files: File[]) => void;
  maxFiles?: number;
}

export function ImageUploader({ onImagesChange, maxFiles = 5 }: ImageUploaderProps) {
  const [previews, setPreviews] = useState<{ id: string; url: string; file: File }[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleFiles = (newFiles: File[]) => {
    const validFiles = newFiles.filter(file => file.type.startsWith("image/"));
    
    if (previews.length + validFiles.length > maxFiles) {
      alert(`Maksimal ${maxFiles} gambar diperbolehkan`);
      return;
    }

    const newPreviews = validFiles.map(file => ({
      id: Math.random().toString(36).substring(7),
      url: URL.createObjectURL(file),
      file
    }));

    const updatedPreviews = [...previews, ...newPreviews];
    setPreviews(updatedPreviews);
    onImagesChange(updatedPreviews.map(p => p.file));
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(Array.from(e.target.files));
    }
  };

  const removeImage = (idToRemove: string) => {
    const updatedPreviews = previews.filter(p => p.id !== idToRemove);
    // Cleanup object URL
    const removed = previews.find(p => p.id === idToRemove);
    if (removed) URL.revokeObjectURL(removed.url);
    
    setPreviews(updatedPreviews);
    onImagesChange(updatedPreviews.map(p => p.file));
  };

  return (
    <div className="space-y-4">
      <div
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        className={cn(
          "border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center text-center transition-colors cursor-pointer",
          isDragging ? "border-[var(--color-primary)] bg-[var(--color-primary)]/5" : "border-slate-300 bg-slate-50 hover:bg-slate-100"
        )}
      >
        <input
          type="file"
          multiple
          accept="image/jpeg, image/png, image/webp"
          className="hidden"
          id="image-upload"
          onChange={handleChange}
        />
        <label htmlFor="image-upload" className="cursor-pointer flex flex-col items-center">
          <Upload size={32} className="text-slate-400 mb-3" />
          <p className="text-sm font-medium text-slate-700">Drag & drop atau klik untuk upload gambar</p>
          <p className="text-xs text-slate-500 mt-1">Format: JPG, PNG, WEBP (Max {maxFiles} files)</p>
        </label>
      </div>

      {previews.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {previews.map((preview) => (
            <div key={preview.id} className="relative group aspect-square rounded-lg border border-slate-200 overflow-hidden bg-slate-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={preview.url}
                alt="Preview"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button
                  type="button"
                  onClick={() => removeImage(preview.id)}
                  className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
