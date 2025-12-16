import * as React from "react";
import { DocsSidebar } from "./DocsSidebar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

interface DocsLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function DocsLayout({ children, className }: DocsLayoutProps) {
  return (
    <div className="min-h-screen flex w-full bg-background transition-theme">
      <DocsSidebar />
      <main className={cn("flex-1 min-w-0 transition-theme", className)}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 pt-16 lg:pt-12 transition-theme">
          {children}
        </div>
        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>
      </main>
    </div>
  );
}
