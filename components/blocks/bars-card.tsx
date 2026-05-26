"use client";

import { GradientBars } from "@/components/ui/gradient-bars";

export function BarsCard() {
  return (
    <div className="flex h-full w-full items-center justify-center relative">
      <GradientBars
        animation="wave"
        duration={3}
        colors={["#f97316", "transparent"]}
      />
    </div>
  );
}
