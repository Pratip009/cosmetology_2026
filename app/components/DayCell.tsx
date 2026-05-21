"use client";
// components/DayCell.tsx

import { useState } from "react";
import type { DayCellData } from "@/lib/calendarData";

interface DayCellProps {
  data: DayCellData;
}

const dayStyles: Record<string, string> = {
  blank:   "invisible pointer-events-none",
  normal:  "bg-ivory border border-espresso-100 text-espresso-700 hover:border-espresso-300 hover:bg-espresso-50 transition-all duration-150",
  weekend: "bg-ivory border border-espresso-100 text-espresso-300 hover:border-espresso-200",
  today:   "bg-espresso-800 border-2 border-espresso-700 text-white font-semibold shadow-lg",
  closed:  "bg-red-50 border border-red-200 text-red-700 font-medium hover:bg-red-100 hover:border-red-300 transition-all duration-150",
  event:   "bg-amber-50 border border-amber-300 text-amber-800 font-medium hover:bg-amber-100 hover:border-amber-400 transition-all duration-150",
};

export default function DayCell({ data }: DayCellProps) {
  const [hovered, setHovered] = useState(false);

  if (data.type === "blank") {
    return <div className="aspect-square" />;
  }

  const hasTooltip = data.type === "closed" || data.type === "event";

  return (
    <div
      className={`
        relative aspect-square flex flex-col items-center justify-center
        rounded-xl text-sm select-none cursor-default
        ${dayStyles[data.type]}
      `}
      onMouseEnter={() => hasTooltip && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="relative z-10 text-[13px] font-medium leading-none">
        {data.day}
      </span>

      {/* Pip indicator */}
      {data.type === "closed" && (
        <span className="absolute bottom-[6px] w-1 h-1 rounded-full bg-red-400" />
      )}
      {data.type === "event" && (
        <span className="absolute bottom-[6px] w-1 h-1 rounded-full bg-amber-500" />
      )}

      {/* Tooltip */}
      {hasTooltip && hovered && data.label && (
        <div className="
          absolute z-30 bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2
          bg-espresso-800 text-white text-[11px] font-medium
          px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap
          pointer-events-none animate-fade-in
        ">
          {data.label}
          <span className="
            absolute top-full left-1/2 -translate-x-1/2
            border-[5px] border-transparent border-t-espresso-800
          " />
        </div>
      )}
    </div>
  );
}