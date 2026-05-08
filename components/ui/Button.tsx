import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline"
  withChevron?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", withChevron = false, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-pill text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand disabled:pointer-events-none disabled:opacity-50 whitespace-normal sm:whitespace-nowrap",
          "h-14 px-8 py-3",
          variant === "primary" && "bg-brand text-white hover:bg-brand-dark",
          variant === "outline" && "border-2 border-brand text-brand hover:bg-brand/10",
          className
        )}
        {...props}
      >
        {children}
        {withChevron && <ChevronRight className="ml-2 h-5 w-5" />}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button }
