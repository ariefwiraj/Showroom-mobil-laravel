import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline" | "success"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2",
        variant === "default" && "border-transparent bg-[var(--color-primary)] text-white",
        variant === "secondary" && "border-transparent bg-[var(--color-secondary)] text-white",
        variant === "destructive" && "border-transparent bg-[var(--color-danger)] text-white",
        variant === "success" && "border-transparent bg-[#25D366] text-white",
        variant === "outline" && "text-slate-900 border-slate-200",
        className
      )}
      {...props}
    />
  )
}

export { Badge }
