import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react";

const helixAlertVariants = cva(
  "relative w-full rounded-lg border p-4 flex gap-3 transition-all duration-300 shadow-sm",
  {
    variants: {
      variant: {
        default: "bg-secondary/80 border-border text-foreground",
        success: "bg-success/10 border-success/30 text-success shadow-success/10",
        error: "bg-destructive/10 border-destructive/30 text-destructive shadow-destructive/10",
        warning: "bg-warning/10 border-warning/30 text-warning shadow-warning/10",
        info: "bg-primary/10 border-primary/30 text-primary shadow-primary/10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const iconMap = {
  default: Info,
  success: CheckCircle,
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info,
};

export interface HelixAlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof helixAlertVariants> {
  title?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
}

const HelixAlert = React.forwardRef<HTMLDivElement, HelixAlertProps>(
  ({ className, variant = "default", title, children, dismissible, onDismiss, ...props }, ref) => {
    const [isVisible, setIsVisible] = React.useState(true);
    const Icon = iconMap[variant || "default"];

    const handleDismiss = () => {
      setIsVisible(false);
      onDismiss?.();
    };

    if (!isVisible) return null;

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(helixAlertVariants({ variant }), className)}
        {...props}
      >
        <Icon className="h-5 w-5 flex-shrink-0 mt-0.5" />
        <div className="flex-1 space-y-1">
          {title && (
            <h5 className="font-semibold leading-none tracking-tight">{title}</h5>
          )}
          {children && (
            <div className="text-sm opacity-90">{children}</div>
          )}
        </div>
        {dismissible && (
          <button
            onClick={handleDismiss}
            className="flex-shrink-0 rounded-md p-1 opacity-70 hover:opacity-100 transition-opacity"
            aria-label="Dismiss alert"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    );
  }
);

HelixAlert.displayName = "HelixAlert";

export { HelixAlert, helixAlertVariants };
