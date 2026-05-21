"use client";
// components/CalendarGrid.tsx

import DayCell from "./DayCell";
import {
  DOW_LABELS,
  buildMonthGrid,
} from "@/lib/calendarData";

interface CalendarGridProps {
  month: number;
}

export default function CalendarGrid({ month }: CalendarGridProps) {
  const cells = buildMonthGrid(month);

  return (
    <div className="select-none">
      {/* Day-of-week labels */}
      <div className="grid grid-cols-7 gap-1.5 mb-1">
        {DOW_LABELS.map((d) => (
          <div
            key={d}
            className="text-center text-[10px] font-mono font-semibold uppercase tracking-[0.16em] text-espresso-300 py-1.5"
          >
            {d}
          </div>
        ))}
      </div>

      {/* Day cells */}
      <div className="grid grid-cols-7 gap-1.5">
        {cells.map((cell, i) => (
          <DayCell key={i} data={cell} />
        ))}
      </div>
    </div>
  );
}