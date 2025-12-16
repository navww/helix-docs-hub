import * as React from "react";
import { cn } from "@/lib/utils";

export interface PropDefinition {
  name: string;
  type: string;
  default?: string;
  description: string;
  required?: boolean;
}

interface APITableProps {
  props: PropDefinition[];
  className?: string;
}

export function APITable({ props, className }: APITableProps) {
  return (
    <div className={cn("rounded-xl border border-border overflow-hidden", className)}>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-secondary/50">
              <th className="px-4 py-3 text-left font-semibold text-foreground">Prop</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Type</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Default</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {props.map((prop) => (
              <tr key={prop.name} className="bg-card hover:bg-secondary/30 transition-colors">
                <td className="px-4 py-3 font-mono text-sm">
                  <span className="text-primary font-medium">{prop.name}</span>
                  {prop.required && (
                    <span className="ml-1 text-destructive">*</span>
                  )}
                </td>
                <td className="px-4 py-3 font-mono text-xs">
                  <code className="px-2 py-1 rounded-md bg-secondary text-accent">
                    {prop.type}
                  </code>
                </td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                  {prop.default ? (
                    <code className="px-2 py-1 rounded-md bg-secondary">
                      {prop.default}
                    </code>
                  ) : (
                    <span className="text-muted-foreground/50">—</span>
                  )}
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  {prop.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
