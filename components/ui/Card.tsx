import * as React from "react"
import { cn } from "@/lib/utils"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverEffect = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-card bg-surface shadow-card border border-gray-100",
        hoverEffect && "transition-shadow duration-300 hover:shadow-cardHover",
        className
      )}
      {...props}
    />
  )
)
Card.displayName = "Card"

export { Card }
