"use client";

// AcademicCalendar.tsx
// Single self-contained component — no external imports beyond React/Next.js

import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type EventType = "event" | "closed";

interface CalendarEvent {
  day: number;
  type: EventType;
  label: string;
  time?: string;
}

interface MonthData {
  name: string;
  year: number;
  startDay: number; // 0 = Sunday
  totalDays: number;
  events: CalendarEvent[];
  schedule: { batch: string; days: string; hours: string }[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const MONTHS: MonthData[] = [
  {
    name: "May",
    year: 2026,
    startDay: 4, // May 1, 2026 = Thursday
    totalDays: 31,
    events: [
      { day: 20, type: "event", label: "Nail Tech Orientation", time: "10:00 AM" },
      { day: 27, type: "closed", label: "Memorial Day Closure" },
    ],
    schedule: [
      { batch: "Morning Batch", days: "Mon – Thu", hours: "9 AM – 1 PM" },
      { batch: "Evening Batch", days: "Mon – Thu", hours: "5 PM – 9 PM" },
    ],
  },
  {
    name: "June",
    year: 2026,
    startDay: 0, // June 1, 2026 = Monday → 1
    totalDays: 30,
    events: [
      { day: 2, type: "event", label: "Nail Technology Classes Begin" },
      { day: 19, type: "closed", label: "Juneteenth — Campus Closed" },
    ],
    schedule: [
      { batch: "Morning Batch", days: "Mon – Thu", hours: "9 AM – 1 PM" },
      { batch: "Evening Batch", days: "Mon – Thu", hours: "5 PM – 9 PM" },
    ],
  },
  {
    name: "July",
    year: 2026,
    startDay: 3,
    totalDays: 31,
    events: [
      { day: 4, type: "closed", label: "Independence Day Closure" },
      { day: 15, type: "event", label: "Mid-Term Assessment", time: "9 AM" },
    ],
    schedule: [
      { batch: "Morning Batch", days: "Mon – Thu", hours: "9 AM – 1 PM" },
      { batch: "Evening Batch", days: "Mon – Thu", hours: "5 PM – 9 PM" },
    ],
  },
  {
    name: "August",
    year: 2026,
    startDay: 6,
    totalDays: 31,
    events: [
      { day: 10, type: "event", label: "Graduation Ceremony", time: "2:00 PM" },
      { day: 31, type: "closed", label: "Campus Closure — Prep Day" },
    ],
    schedule: [
      { batch: "Morning Batch", days: "Mon – Thu", hours: "9 AM – 1 PM" },
      { batch: "Evening Batch", days: "Mon – Thu", hours: "5 PM – 9 PM" },
    ],
  },
];

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const UPCOMING_HIGHLIGHTS = [
  { icon: "✨", title: "Nail Tech Orientation", detail: "May 20, 2026 · 10:00 AM" },
  { icon: "🟤", title: "Memorial Day Closure", detail: "May 27, 2026" },
  { icon: "💅", title: "Nail Technology Classes Begin", detail: "June 2, 2026" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function AcademicCalendar() {
  const [monthIdx, setMonthIdx] = useState(0);
  const month = MONTHS[monthIdx];

  // Build calendar grid cells
  const cells: (number | null)[] = [
    ...Array(month.startDay).fill(null),
    ...Array.from({ length: month.totalDays }, (_, i) => i + 1),
  ];
  // Pad to multiple of 7
  while (cells.length % 7 !== 0) cells.push(null);

  const eventMap = new Map<number, CalendarEvent>();
  month.events.forEach((e) => eventMap.set(e.day, e));

  const closedCount = month.events.filter((e) => e.type === "closed").length;
  const eventCount = month.events.filter((e) => e.type === "event").length;

  return (
    <div
      className="min-h-screen w-full font-sans"
      style={{ background: "#F7F3EE", color: "#4E3C2F" }}
    >
      <div className="px-6 pt-16 pb-0 max-w-[1180px] mx-auto">
        {/* ── HERO ── */}
        <section
          className="mb-8 p-10"
          style={{
            background: "#FFFFFF",
            border: "1px solid #E7DED4",
            borderRadius: "32px",
            boxShadow: "0 18px 50px rgba(78,60,47,0.08)",
          }}
        >
          <div className="flex justify-between items-start gap-10 flex-wrap">
            <div className="flex-1 min-w-[260px]">
              <p
                className="text-xs font-bold tracking-[0.28em] uppercase mb-3"
                style={{ color: "#B59A7A" }}
              >
                Student Information
              </p>
              <h1
                className="text-5xl font-medium leading-tight mb-4"
                style={{ fontFamily: "Georgia, serif", maxWidth: "680px" }}
              >
                Academic Calendar &amp; Important Dates
              </h1>
              <p className="text-lg leading-relaxed" style={{ color: "#79644D", maxWidth: "680px" }}>
                Stay updated with school closures, class schedules, orientations,
                office hours, and important student events.
              </p>
            </div>
            {/* Status card */}
            <div
              className="rounded-3xl p-7 text-white min-w-[260px]"
              style={{
                background: "#79644D",
                boxShadow: "0 18px 35px rgba(121,100,77,0.25)",
              }}
            >
              <p className="text-xs uppercase tracking-[0.22em] opacity-80 mb-2">
                Today's Status
              </p>
              <p className="text-3xl font-bold mb-1">Campus Open</p>
              <p className="opacity-90 text-sm">Office Hours: 9 AM – 5 PM</p>
            </div>
          </div>
        </section>

        {/* ── HIGHLIGHT CARDS ── */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
          {UPCOMING_HIGHLIGHTS.map((h) => (
            <div
              key={h.title}
              className="rounded-3xl p-7"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E7DED4",
                boxShadow: "0 12px 36px rgba(78,60,47,0.055)",
              }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-5"
                style={{ background: "#F6EFE8" }}
              >
                {h.icon}
              </div>
              <h3
                className="text-2xl font-medium mb-2"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {h.title}
              </h3>
              <p className="text-sm" style={{ color: "#79644D" }}>
                {h.detail}
              </p>
            </div>
          ))}
        </section>

        {/* ── MAIN GRID ── */}
        <section className="grid gap-7 mb-12" style={{ gridTemplateColumns: "1.55fr 0.85fr" }}>
          {/* Calendar panel */}
          <div
            className="rounded-3xl p-8"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E7DED4",
              boxShadow: "0 12px 36px rgba(78,60,47,0.055)",
            }}
          >
            {/* Calendar header */}
            <div className="flex justify-between items-start mb-7 gap-4 flex-wrap">
              <div>
                <p
                  className="text-xs font-bold uppercase tracking-[0.28em] mb-1"
                  style={{ color: "#B59A7A" }}
                >
                  Current Month
                </p>
                <h2
                  className="text-4xl font-medium"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {month.name} {month.year}
                </h2>
                <p className="text-xs mt-1" style={{ color: "#79644D" }}>
                  {closedCount > 0 && (
                    <span className="mr-3 text-red-500">
                      {closedCount} closure{closedCount !== 1 ? "s" : ""}
                    </span>
                  )}
                  {eventCount > 0 && (
                    <span className="text-amber-600">
                      {eventCount} event{eventCount !== 1 ? "s" : ""}
                    </span>
                  )}
                </p>
              </div>

              {/* Month nav + legend */}
              <div className="flex flex-col items-end gap-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setMonthIdx((i) => Math.max(0, i - 1))}
                    disabled={monthIdx === 0}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-lg disabled:opacity-30 transition"
                    style={{ border: "1px solid #E7DED4", color: "#79644D" }}
                  >
                    ‹
                  </button>
                  <div className="flex gap-1">
                    {MONTHS.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setMonthIdx(i)}
                        className="rounded-full transition-all"
                        style={{
                          width: i === monthIdx ? "18px" : "8px",
                          height: "8px",
                          background: i === monthIdx ? "#B59A7A" : "#E7DED4",
                        }}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => setMonthIdx((i) => Math.min(MONTHS.length - 1, i + 1))}
                    disabled={monthIdx === MONTHS.length - 1}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-lg disabled:opacity-30 transition"
                    style={{ border: "1px solid #E7DED4", color: "#79644D" }}
                  >
                    ›
                  </button>
                </div>
                <div className="flex gap-4 text-sm" style={{ color: "#79644D" }}>
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full inline-block"
                      style={{ background: "#B59A7A" }}
                    />
                    Closed
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full inline-block"
                      style={{ background: "#79644D" }}
                    />
                    Event
                  </div>
                </div>
              </div>
            </div>

            {/* Weekday headers */}
            <div
              className="grid grid-cols-7 gap-3 text-center mb-3 text-xs font-semibold uppercase tracking-wider"
              style={{ color: "#8B735C" }}
            >
              {WEEKDAYS.map((d) => (
                <div key={d}>{d}</div>
              ))}
            </div>

            {/* Day cells */}
            <div className="grid grid-cols-7 gap-3 text-center">
              {cells.map((day, idx) => {
                if (!day) return <div key={`empty-${idx}`} />;
                const ev = eventMap.get(day);
                const isEvent = ev?.type === "event";
                const isClosed = ev?.type === "closed";
                const isSpecial = isEvent || isClosed;

                return (
                  <div
                    key={day}
                    title={ev?.label}
                    className="aspect-square rounded-2xl flex items-center justify-center text-base font-semibold transition-all cursor-default"
                    style={
                      isSpecial
                        ? {
                            background: "#79644D",
                            borderColor: "#79644D",
                            color: "white",
                            boxShadow: "0 12px 22px rgba(121,100,77,0.25)",
                          }
                        : {
                            background: "#FAF7F2",
                            border: "1px solid #EFE4D7",
                            color: "#4E3C2F",
                          }
                    }
                  >
                    {day}
                  </div>
                );
              })}
            </div>

            {/* Event legend below grid */}
            {month.events.length > 0 && (
              <div className="mt-6 flex flex-col gap-2">
                {month.events.map((ev) => (
                  <div key={ev.day} className="flex items-center gap-3 text-sm">
                    <span
                      className="w-7 h-7 rounded-xl flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                      style={{ background: "#79644D" }}
                    >
                      {ev.day}
                    </span>
                    <span style={{ color: "#4E3C2F" }}>{ev.label}</span>
                    {ev.time && (
                      <span className="ml-auto text-xs" style={{ color: "#B59A7A" }}>
                        {ev.time}
                      </span>
                    )}
                    <span
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{
                        background: ev.type === "closed" ? "#FCE8E8" : "#F6EFE8",
                        color: ev.type === "closed" ? "#A33030" : "#79644D",
                      }}
                    >
                      {ev.type === "closed" ? "Closed" : "Event"}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="flex flex-col gap-6">
            {/* Schedule card */}
            <div
              className="rounded-3xl p-8"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E7DED4",
                boxShadow: "0 12px 36px rgba(78,60,47,0.055)",
              }}
            >
              <p
                className="text-xs font-bold uppercase tracking-[0.28em] mb-2"
                style={{ color: "#B59A7A" }}
              >
                Class Schedule
              </p>
              <h3
                className="text-3xl font-medium mb-5"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Nail Technology
              </h3>
              {month.schedule.map((s) => (
                <div key={s.batch} className="mb-4">
                  <p className="font-semibold text-sm mb-0.5" style={{ color: "#4E3C2F" }}>
                    {s.batch}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "#79644D" }}>
                    {s.days} · {s.hours}
                  </p>
                </div>
              ))}
            </div>

            {/* Download card */}
            <div
              className="rounded-3xl p-8 text-white"
              style={{ background: "#79644D" }}
            >
              <p className="text-xs uppercase tracking-[0.22em] opacity-80 mb-2">
                Quick Notice
              </p>
              <h3
                className="text-3xl font-medium mb-4"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Download Academic Calendar
              </h3>
              <p className="text-sm leading-relaxed opacity-90 mb-5">
                Access the full yearly schedule including holidays, closures, and
                student events.
              </p>
              <a
                href="#"
                className="inline-block font-bold text-sm px-6 py-3 rounded-full transition-opacity hover:opacity-80"
                style={{
                  background: "#FFFFFF",
                  color: "#79644D",
                }}
              >
                Download PDF
              </a>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}