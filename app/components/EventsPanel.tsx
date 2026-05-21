"use client";
// components/EventsPanel.tsx

import {
  getMonthEntries,
  MONTH_NAMES,
  YEAR,
  ordinal,
} from "@/lib/calendarData";

interface EventsPanelProps {
  month: number;
}

export default function EventsPanel({ month }: EventsPanelProps) {
  const entries = getMonthEntries(month);

  return (
    <div className="border-t border-espresso-100 pt-5">
      <p className="text-[10px] font-mono font-semibold tracking-[0.2em] uppercase text-espresso-300 mb-4">
        {entries.length > 0
          ? `${entries.length} date${entries.length !== 1 ? "s" : ""} this month`
          : "This month"}
      </p>

      {entries.length > 0 ? (
        <div className="space-y-1">
          {entries.map((entry, i) => (
            <div
              key={i}
              className="
                flex items-center gap-4 px-4 py-3 rounded-xl
                bg-espresso-50/50 border border-espresso-100
                hover:bg-espresso-50 transition-colors duration-150
                animate-slide-up
              "
              style={{ animationDelay: `${i * 40}ms`, animationFillMode: "both" }}
            >
              {/* Date badge */}
              <span className={`
                shrink-0 w-10 h-10 flex items-center justify-center
                rounded-lg text-[12px] font-semibold font-mono
                ${entry.type === "closed"
                  ? "bg-red-100 text-red-700 border border-red-200"
                  : "bg-amber-100 text-amber-800 border border-amber-200"
                }
              `}>
                {entry.day}
              </span>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-medium text-espresso-700 truncate">
                  {entry.label}
                </p>
                <p className="text-[11px] text-espresso-300 mt-0.5 font-mono">
                  {MONTH_NAMES[month]} {ordinal(entry.day)}, {YEAR}
                  <span className={`
                    ml-2 px-1.5 py-px rounded text-[10px] font-semibold uppercase tracking-wide
                    ${entry.type === "closed"
                      ? "bg-red-100 text-red-600"
                      : "bg-amber-100 text-amber-700"
                    }
                  `}>
                    {entry.type === "closed" ? "Closed" : "Event"}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-[13px] text-espresso-300 italic">
          No closures or special events this month.
        </p>
      )}
    </div>
  );
}