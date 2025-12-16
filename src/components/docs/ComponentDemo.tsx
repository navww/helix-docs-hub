import * as React from "react";
import { cn } from "@/lib/utils";

interface ComponentDemoProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export function ComponentDemo({ children, className, title }: ComponentDemoProps) {
  return (
    <div className={cn("rounded-xl border border-border overflow-hidden", className)}>
      {title && (
        <div className="px-4 py-2 border-b border-border bg-secondary/30">
          <span className="text-sm font-medium text-muted-foreground">{title}</span>
        </div>
      )}
      <div className="p-6 bg-card/50 flex flex-wrap items-center justify-center gap-4 min-h-[120px]">
        {children}
      </div>
    </div>
  );
}
