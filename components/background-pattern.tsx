"use client"

import { GridPattern } from "@/components/ui/grid-pattern"
import { cn } from "@/lib/utils"

export function BackgroundPattern() {
  return (
    <GridPattern
      width={40}
      height={40}
      className={cn(
        "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]",
        "opacity-20"
      )}
      x={-1}
      y={-1}
    />
  )
} 