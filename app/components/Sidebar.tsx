"use client";
// components/Sidebar.tsx

import {
  FIRST_MONTH,
  LAST_MONTH,
  MONTH_NAMES,
  SHORT_MONTHS,
  YEAR,
  getMonthEntries,
} from "@/lib/calendarData";

interface SidebarProps {
  current: number;
  onChange: (month: number) => void;
}

export default function Sidebar({ current, onChange }: SidebarProps) {
  const totalClosures = Object.entries(
    Object.fromEntries(
      Array.from({ length: LAST_MONTH - FIRST_MONTH + 1 }, (_, i) => {
        const m = FIRST_MONTH + i;
        return [m, getMonthEntries(m)];
      })
    )
  ).reduce((acc, [, entries]) => acc + entries.filter((e) => e.type === "closed").length, 0);

  return (
    <aside className="
      w-[260px] flex-shrink-0 flex flex-col
      bg-espresso-800 text-white
      relative overflow-hidden
    ">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(255,255,255,0.5) 10px,
            rgba(255,255,255,0.5) 11px
          )`
        }}
      />

      {/* Header */}
      <div className="relative px-7 pt-8 pb-6">
        <p className="text-[10px] font-mono font-medium tracking-[0.22em] uppercase text-espresso-300 mb-1">
          CSJC · Academic
        </p>
        <h1 className="font-serif text-5xl font-semibold text-white leading-none tracking-tight">
          {YEAR}
        </h1>
        <div className="mt-4 h-px bg-espresso-700" />
      </div>

      {/* Month list */}
      <nav className="relative flex-1 px-4 pb-4 overflow-y-auto">
        {Array.from({ length: LAST_MONTH - FIRST_MONTH + 1 }, (_, i) => {
          const m = FIRST_MONTH + i;
          const entries = getMonthEntries(m);
          const closedCount = entries.filter((e) => e.type === "closed").length;
          const eventCount = entries.filter((e) => e.type === "event").length;
          const isActive = m === current;

          return (
            <button
              key={m}
              onClick={() => onChange(m)}
              className={`
                w-full flex items-center gap-3 px-3 py-2.5 rounded-xl
                text-left transition-all duration-200 group
                ${isActive
                  ? "bg-espresso-700/60 shadow-inner"
                  : "hover:bg-white/5"
                }
              `}
            >
              {/* Active bar */}
              <span className={`
                w-0.5 h-5 rounded-full flex-shrink-0 transition-all duration-200
                ${isActive ? "bg-espresso-300" : "bg-transparent group-hover:bg-white/20"}
              `} />

              <span className={`
                flex-1 font-sans text-[13px] font-medium transition-colors duration-200
                ${isActive ? "text-white" : "text-espresso-300 group-hover:text-white/80"}
              `}>
                {MONTH_NAMES[m]}
              </span>

              {/* Badges */}
              <span className="flex gap-1">
                {closedCount > 0 && (
                  <span className={`
                    text-[10px] px-1.5 py-0.5 rounded-md font-medium
                    ${isActive
                      ? "bg-red-900/60 text-red-300"
                      : "bg-red-950/40 text-red-400/70"
                    }
                  `}>
                    {closedCount}
                  </span>
                )}
                {eventCount > 0 && (
                  <span className={`
                    text-[10px] px-1.5 py-0.5 rounded-md font-medium
                    ${isActive
                      ? "bg-amber-900/60 text-amber-300"
                      : "bg-amber-950/40 text-amber-400/70"
                    }
                  `}>
                    {eventCount}
                  </span>
                )}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Footer legend */}
      <div className="relative px-7 py-5 border-t border-espresso-700/60">
        <p className="text-[10px] font-mono tracking-[0.14em] uppercase text-espresso-400 mb-3">
          Legend
        </p>
        <div className="space-y-2">
          {[
            { color: "bg-espresso-800 border border-espresso-600", label: "Today" },
            { color: "bg-red-100 border border-red-300", label: "School closed" },
            { color: "bg-amber-100 border border-amber-300", label: "Event" },
          ].map(({ color, label }) => (
            <div key={label} className="flex items-center gap-2.5">
              <span className={`w-3.5 h-3.5 rounded-[4px] flex-shrink-0 ${color}`} />
              <span className="text-[11px] text-espresso-300">{label}</span>
            </div>
          ))}
        </div>

        <div className="mt-5 pt-4 border-t border-espresso-700/40">
          <p className="text-[10px] text-espresso-500 leading-relaxed">
            {totalClosures} closure days across the academic year
          </p>
        </div>
      </div>
    </aside>
  );
}