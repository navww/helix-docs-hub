import * as React from "react";
import { cn } from "@/lib/utils";

interface HelixCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "outlined" | "glass";
}

const HelixCard = React.forwardRef<HTMLDivElement, HelixCardProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variantStyles = {
      default: "bg-card border border-border shadow-sm",
      elevated: "bg-card shadow-lg border border-border",
      outlined: "bg-transparent border-2 border-border hover:bg-secondary/50 transition-colors",
      glass: "glass backdrop-blur-sm border border-border/30",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl p-6 transition-all duration-300",
          variantStyles[variant],
          className
        )}
        {...props}
      />
    );
  }
);
HelixCard.displayName = "HelixCard";

const HelixCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 pb-4", className)}
    {...props}
  />
));
HelixCardHeader.displayName = "HelixCardHeader";

const HelixCardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-xl font-bold tracking-tight text-foreground", className)}
    {...props}
  />
));
HelixCardTitle.displayName = "HelixCardTitle";

const HelixCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
HelixCardDescription.displayName = "HelixCardDescription";

const HelixCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
));
HelixCardContent.displayName = "HelixCardContent";

const HelixCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center pt-4 border-t border-border", className)}
    {...props}
  />
));
HelixCardFooter.displayName = "HelixCardFooter";

export {
  HelixCard,
  HelixCardHeader,
  HelixCardTitle,
  HelixCardDescription,
  HelixCardContent,
  HelixCardFooter,
};
