"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "glow";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants: Record<string, string> = {
    default:
      "bg-primary/10 text-primary border-primary/20 hover:bg-primary/20",
    secondary:
      "bg-secondary text-secondary-foreground border-secondary hover:bg-secondary/80",
    outline: "text-foreground border-border hover:bg-white/5",
    glow: "bg-primary/10 text-primary border-primary/30 glow-sm",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };
