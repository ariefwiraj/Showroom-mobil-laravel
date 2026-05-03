import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "whatsapp"
  size?: "sm" | "md" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors cursor-pointer",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          variant === "primary" && "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/90",
          variant === "secondary" && "bg-[var(--color-secondary)] text-white hover:bg-[var(--color-secondary)]/90",
          variant === "outline" && "border border-slate-200 bg-white hover:bg-slate-100 text-slate-900",
          variant === "whatsapp" && "bg-[#25D366] text-white hover:bg-[#20BD5A] rounded-full",
          size === "sm" && "h-9 px-4 py-2",
          size === "md" && "h-10 px-6 py-2",
          size === "lg" && "h-12 px-8 py-4 text-base",
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
