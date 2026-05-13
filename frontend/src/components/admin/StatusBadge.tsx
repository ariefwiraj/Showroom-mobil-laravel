import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "available" | "sold";
  onClick?: () => void;
  className?: string;
}

export function StatusBadge({ status, onClick, className }: StatusBadgeProps) {
  const isAvailable = status === "available";
  
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!onClick}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
        isAvailable 
          ? "bg-green-100 text-green-700 hover:bg-green-200" 
          : "bg-red-100 text-red-700 hover:bg-red-200",
        onClick ? "cursor-pointer" : "cursor-default hover:bg-opacity-100",
        className
      )}
    >
      <span className={cn(
        "mr-1.5 h-1.5 w-1.5 rounded-full",
        isAvailable ? "bg-green-500" : "bg-red-500"
      )} />
      {isAvailable ? "Available" : "Sold"}
    </button>
  );
}
