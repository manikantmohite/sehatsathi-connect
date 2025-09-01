import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface GlassmorphismCardProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const GlassmorphismCard = forwardRef<HTMLDivElement, GlassmorphismCardProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "glass-card p-6 transition-smooth hover:shadow-glow",
          className
        )}
        {...props}
      />
    );
  }
);
GlassmorphismCard.displayName = "GlassmorphismCard";

export { GlassmorphismCard };