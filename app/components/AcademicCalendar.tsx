"use client";

import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type EventCategory =
  | "holiday"
  | "exam"
  | "enrollment"
  | "orientation"
  | "workshop"
  | "graduation"
  | "break";

interface CalendarEvent {
  id: string;
  date: string; // "YYYY-MM-DD"
  title: string;
  category: EventCategory;
  description?: string;
  time?: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const EVENTS: CalendarEvent[] = [
  { id: "e1",  date: "2026-01-05", title: "Spring Enrollment Opens",    category: "enrollment",   description: "New student registration begins for Spring 2026 cohort.", time: "9:00 AM" },
  { id: "e2",  date: "2026-01-12", title: "New Student Orientation",    category: "orientation",  description: "Welcome ceremony, campus tour, and kit distribution.",     time: "10:00 AM" },
  { id: "e3",  date: "2026-01-19", title: "Martin Luther King Jr. Day", category: "holiday",      description: "Academy closed — National Holiday." },
  { id: "e4",  date: "2026-02-02", title: "Color Theory Workshop",      category: "workshop",     description: "Advanced hair color techniques with guest educators.",     time: "1:00 PM" },
  { id: "e5",  date: "2026-02-14", title: "Skin Care Midterm Exam",     category: "exam",         description: "Written and practical examination for esthetics students.", time: "9:00 AM" },
  { id: "e6",  date: "2026-02-16", title: "Presidents' Day",            category: "holiday",      description: "Academy closed — National Holiday." },
  { id: "e7",  date: "2026-03-09", title: "Spring Break Begins",        category: "break",        description: "No classes for the week. Resume March 16." },
  { id: "e8",  date: "2026-03-16", title: "Classes Resume",             category: "orientation",  description: "Spring break ends — all programs resume." },
  { id: "e9",  date: "2026-03-23", title: "Nail Technology Showcase",   category: "workshop",     description: "Student competition and industry showcase event.",          time: "2:00 PM" },
  { id: "e10", date: "2026-04-03", title: "Good Friday",                category: "holiday",      description: "Academy closed." },
  { id: "e11", date: "2026-04-15", title: "State Board Prep Session",   category: "workshop",     description: "Intensive review for upcoming board examinations.",         time: "8:00 AM" },
  { id: "e12", date: "2026-04-24", title: "Spring Final Exams Begin",   category: "exam",         description: "Written finals across all programs.",                      time: "9:00 AM" },
  { id: "e13", date: "2026-05-04", title: "Practical Finals",           category: "exam",         description: "Live client services assessed by faculty.",                time: "8:00 AM" },
  { id: "e14", date: "2026-05-15", title: "Spring Graduation Ceremony", category: "graduation",   description: "Class of Spring 2026 commencement celebration.",           time: "6:00 PM" },
  { id: "e15", date: "2026-05-25", title: "Memorial Day",               category: "holiday",      description: "Academy closed — National Holiday." },
  { id: "e16", date: "2026-06-01", title: "Summer Enrollment Opens",    category: "enrollment",   description: "New student registration begins for Summer 2026 cohort.",   time: "9:00 AM" },
  { id: "e17", date: "2026-06-08", title: "Summer Orientation Day",     category: "orientation",  description: "Welcome day for Summer 2026 students.",                    time: "10:00 AM" },
  { id: "e18", date: "2026-06-19", title: "Juneteenth",                 category: "holiday",      description: "Academy closed — National Holiday." },
  { id: "e19", date: "2026-07-03", title: "Independence Day Observed",  category: "holiday",      description: "Academy closed — Independence Day Holiday." },
  { id: "e20", date: "2026-07-20", title: "Barbering Techniques Seminar", category: "workshop",   description: "Master barber guest lecture and demo session.",             time: "11:00 AM" },
  { id: "e21", date: "2026-08-07", title: "Summer Final Exams",         category: "exam",         description: "Final written and practical assessments.",                 time: "9:00 AM" },
  { id: "e22", date: "2026-08-21", title: "Summer Graduation",          category: "graduation",   description: "Class of Summer 2026 commencement.",                       time: "5:00 PM" },
  { id: "e23", date: "2026-09-07", title: "Labor Day",                  category: "holiday",      description: "Academy closed — National Holiday." },
  { id: "e24", date: "2026-09-14", title: "Fall Enrollment Opens",      category: "enrollment",   description: "Fall 2026 cohort registration begins.",                    time: "9:00 AM" },
  { id: "e25", date: "2026-10-12", title: "Cosmetology Symposium",      category: "workshop",     description: "Industry professionals panel and networking event.",        time: "9:00 AM" },
  { id: "e26", date: "2026-11-11", title: "Veterans Day",               category: "holiday",      description: "Academy closed — National Holiday." },
  { id: "e27", date: "2026-11-26", title: "Thanksgiving Break Begins",  category: "break",        description: "Academy closed. Resume December 1." },
  { id: "e28", date: "2026-12-11", title: "Fall Final Exams",           category: "exam",         description: "Written and practical finals for all programs.",           time: "9:00 AM" },
  { id: "e29", date: "2026-12-18", title: "Fall Graduation Ceremony",   category: "graduation",   description: "Class of Fall 2026 commencement celebration.",             time: "6:00 PM" },
  { id: "e30", date: "2026-12-24", title: "Winter Break Begins",        category: "break",        description: "Academy closed through January 4, 2027." },
];

const CATEGORY_META: Record<EventCategory, { label: string; color: string; dot: string }> = {
  holiday:     { label: "Holiday",     color: "bg-amber-100  text-amber-800  border-amber-200",  dot: "#d97706" },
  exam:        { label: "Exam",        color: "bg-rose-50    text-rose-700   border-rose-200",   dot: "#e11d48" },
  enrollment:  { label: "Enrollment",  color: "bg-emerald-50 text-emerald-700 border-emerald-200", dot: "#059669" },
  orientation: { label: "Orientation", color: "bg-sky-50     text-sky-700    border-sky-200",    dot: "#0284c7" },
  workshop:    { label: "Workshop",    color: "bg-violet-50  text-violet-700 border-violet-200", dot: "#7c3aed" },
  graduation:  { label: "Graduation",  color: "bg-yellow-50  text-yellow-700 border-yellow-300", dot: "#c9a96e" },
  break:       { label: "Break",       color: "bg-stone-100  text-stone-600  border-stone-200",  dot: "#78716c" },
};

const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

const DAYS_SHORT = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}
function toDateStr(year: number, month: number, day: number) {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}
function formatDisplayDate(dateStr: string) {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function AcademicCalendar() {
  const today = new Date();
  const [viewYear, setViewYear] = useState(2026);
  const [viewMonth, setViewMonth] = useState(0); // Jan
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<EventCategory | "all">("all");
  const [activeTab, setActiveTab] = useState<"calendar" | "list">("calendar");

  // Events map
  const eventsByDate = EVENTS.reduce<Record<string, CalendarEvent[]>>((acc, ev) => {
    if (!acc[ev.date]) acc[ev.date] = [];
    acc[ev.date].push(ev);
    return acc;
  }, {});

  // Calendar grid
  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth);
  const cells: Array<{ day: number | null; dateStr: string | null }> = [];
  for (let i = 0; i < firstDay; i++) cells.push({ day: null, dateStr: null });
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, dateStr: toDateStr(viewYear, viewMonth, d) });
  }

  function prevMonth() {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
    setSelectedDate(null);
  }
  function nextMonth() {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
    setSelectedDate(null);
  }

  const selectedEvents = selectedDate ? (eventsByDate[selectedDate] ?? []) : [];

  // Filtered list view
  const filteredEvents = EVENTS
    .filter(ev => filterCategory === "all" || ev.category === filterCategory)
    .sort((a, b) => a.date.localeCompare(b.date));

  const todayStr = toDateStr(today.getFullYear(), today.getMonth(), today.getDate());

  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Playfair+Display:wght@400;500;600;700&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --brand:       #79644d;
          --brand-light: #a68b6a;
          --brand-dark:  #4e3f31;
          --brand-pale:  #f0e8df;
          --brand-cream: #faf6f1;
          --gold:        #c9a96e;
          --gold-light:  #e8d5b0;
          --gold-dark:   #9c7a42;
          --charcoal:    #1a1714;
          --warm-white:  #fdfaf6;
        }

        .font-display   { font-family: 'Cormorant Garamond', serif; }
        .font-headline  { font-family: 'Playfair Display', serif; }
        .font-sans-dm   { font-family: 'DM Sans', sans-serif; }

        .cal-container {
          background: var(--warm-white);
          min-height: 100vh;
          font-family: 'DM Sans', sans-serif;
          color: var(--charcoal);
        }

        /* ─── Hero Banner ─── */
        .hero-banner {
          background: var(--brand-dark);
          background-image:
            radial-gradient(ellipse at 10% 50%, rgba(201,169,110,0.18) 0%, transparent 60%),
            radial-gradient(ellipse at 90% 20%, rgba(166,139,106,0.12) 0%, transparent 55%);
          position: relative;
          overflow: hidden;
          padding: 3.5rem 2rem 3rem;
          text-align: center;
        }
        .hero-banner::before {
          content: '';
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a96e' fill-opacity='0.06'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          opacity: 1;
        }
        .hero-ornament {
          width: 60px; height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
          margin: 0.75rem auto;
        }
        .hero-subtitle {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--gold-light);
          opacity: 0.85;
        }
        .hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          font-weight: 300;
          color: var(--warm-white);
          line-height: 1.1;
          letter-spacing: 0.02em;
          margin: 0.35rem 0;
        }
        .hero-year {
          font-family: 'Playfair Display', serif;
          font-size: clamp(0.95rem, 2vw, 1.1rem);
          color: var(--gold);
          letter-spacing: 0.1em;
        }

        /* ─── Tab Nav ─── */
        .tab-nav {
          display: flex;
          gap: 0;
          background: var(--brand-pale);
          border-bottom: 1px solid rgba(121,100,77,0.15);
          padding: 0 2rem;
        }
        .tab-btn {
          padding: 0.9rem 1.6rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          border: none;
          background: transparent;
          cursor: pointer;
          color: var(--brand-light);
          border-bottom: 2px solid transparent;
          transition: all 0.2s ease;
          margin-bottom: -1px;
        }
        .tab-btn.active {
          color: var(--brand-dark);
          border-bottom-color: var(--gold);
        }
        .tab-btn:hover:not(.active) {
          color: var(--brand);
        }

        /* ─── Calendar View ─── */
        .cal-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem 2rem 0.5rem;
        }
        .cal-nav-btn {
          width: 36px; height: 36px;
          border: 1px solid rgba(121,100,77,0.25);
          border-radius: 50%;
          background: transparent;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          color: var(--brand);
          transition: all 0.2s ease;
          font-size: 1rem;
        }
        .cal-nav-btn:hover {
          background: var(--brand);
          color: var(--warm-white);
          border-color: var(--brand);
        }
        .cal-month-label {
          font-family: 'Playfair Display', serif;
          font-size: 1.35rem;
          font-weight: 500;
          color: var(--brand-dark);
          letter-spacing: 0.02em;
        }
        .cal-year-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          color: var(--brand-light);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-top: 0.1rem;
        }

        .cal-grid {
          padding: 0 2rem 1.5rem;
        }
        .cal-days-header {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 2px;
          margin-bottom: 4px;
        }
        .cal-day-name {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--brand-light);
          text-align: center;
          padding: 0.4rem 0;
        }
        .cal-cells {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 2px;
        }
        .cal-cell {
          aspect-ratio: 1;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding: 6px 4px 4px;
          cursor: pointer;
          position: relative;
          transition: all 0.18s ease;
          background: transparent;
          border: 1px solid transparent;
          min-height: 52px;
        }
        .cal-cell:hover:not(.empty) {
          background: var(--brand-pale);
          border-color: rgba(121,100,77,0.15);
        }
        .cal-cell.selected {
          background: var(--brand-dark);
          border-color: var(--brand-dark);
        }
        .cal-cell.today:not(.selected) {
          border-color: var(--gold);
          background: rgba(201,169,110,0.08);
        }
        .cal-cell.empty { cursor: default; }
        .cal-cell-num {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem;
          font-weight: 400;
          color: var(--charcoal);
          line-height: 1;
        }
        .cal-cell.selected .cal-cell-num { color: var(--warm-white); }
        .cal-cell.today:not(.selected) .cal-cell-num {
          color: var(--gold-dark);
          font-weight: 600;
        }
        .cal-cell.empty .cal-cell-num { color: transparent; }
        .event-dots {
          display: flex;
          gap: 2px;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 3px;
        }
        .event-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
        }
        .cal-cell.selected .event-dot {
          opacity: 0.85;
        }

        /* ─── Event Panel ─── */
        .event-panel {
          margin: 0 2rem 2rem;
          border: 1px solid rgba(121,100,77,0.18);
          border-radius: 12px;
          overflow: hidden;
          background: var(--brand-cream);
        }
        .event-panel-header {
          background: var(--brand-pale);
          padding: 0.85rem 1.25rem;
          border-bottom: 1px solid rgba(121,100,77,0.12);
        }
        .event-panel-date {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.05rem;
          font-style: italic;
          color: var(--brand-dark);
        }
        .event-panel-body { padding: 0.75rem 1.25rem 1rem; }
        .event-item {
          display: flex;
          gap: 0.85rem;
          align-items: flex-start;
          padding: 0.65rem 0;
          border-bottom: 1px solid rgba(121,100,77,0.08);
        }
        .event-item:last-child { border-bottom: none; }
        .event-item-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          margin-top: 5px;
          flex-shrink: 0;
        }
        .event-item-title {
          font-family: 'Playfair Display', serif;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--brand-dark);
          line-height: 1.3;
        }
        .event-item-meta {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          color: var(--brand-light);
          margin-top: 2px;
        }
        .event-badge {
          display: inline-block;
          font-size: 0.62rem;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 2px 7px;
          border-radius: 20px;
          border: 1px solid;
          margin-left: 6px;
          vertical-align: middle;
          position: relative;
          top: -1px;
        }
        .no-events {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          color: var(--brand-light);
          font-size: 0.95rem;
          padding: 0.5rem 0;
        }

        /* ─── Legend ─── */
        .legend {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem 1.1rem;
          padding: 1rem 2rem 1.5rem;
          border-top: 1px solid rgba(121,100,77,0.1);
        }
        .legend-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          color: var(--brand);
          letter-spacing: 0.06em;
        }
        .legend-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        /* ─── List View ─── */
        .list-toolbar {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          padding: 1.25rem 2rem 0.75rem;
        }
        .filter-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--brand-light);
        }
        .filter-pill {
          padding: 0.3rem 0.85rem;
          border-radius: 20px;
          border: 1px solid rgba(121,100,77,0.25);
          background: transparent;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          cursor: pointer;
          color: var(--brand);
          transition: all 0.18s ease;
        }
        .filter-pill.active, .filter-pill:hover {
          background: var(--brand-dark);
          color: var(--warm-white);
          border-color: var(--brand-dark);
        }

        .list-group { padding: 0 2rem 0.5rem; }
        .list-month-header {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.2rem;
          font-weight: 400;
          color: var(--brand-dark);
          letter-spacing: 0.05em;
          padding: 1rem 0 0.5rem;
          border-bottom: 1px solid rgba(121,100,77,0.15);
          margin-bottom: 0.5rem;
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
        }
        .list-month-year {
          font-size: 0.8rem;
          font-family: 'DM Sans', sans-serif;
          color: var(--brand-light);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .list-event-row {
          display: grid;
          grid-template-columns: 3.5rem 1fr auto;
          gap: 1rem;
          align-items: start;
          padding: 0.7rem 0;
          border-bottom: 1px solid rgba(121,100,77,0.07);
          transition: background 0.15s;
        }
        .list-event-row:last-child { border-bottom: none; }
        .list-event-day {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--brand);
          line-height: 1;
          text-align: center;
        }
        .list-event-weekday {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--brand-light);
          text-align: center;
          margin-top: 2px;
        }
        .list-event-title {
          font-family: 'Playfair Display', serif;
          font-size: 0.92rem;
          font-weight: 500;
          color: var(--charcoal);
          line-height: 1.3;
        }
        .list-event-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          color: var(--brand-light);
          margin-top: 3px;
          line-height: 1.5;
        }
        .list-event-time {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          color: var(--brand-light);
          letter-spacing: 0.04em;
          white-space: nowrap;
          padding-top: 3px;
        }

        /* divider ornament */
        .ornament-divider {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0 2rem 0.25rem;
          opacity: 0.35;
        }
        .ornament-line {
          flex: 1;
          height: 1px;
          background: var(--brand-light);
        }
        .ornament-diamond {
          width: 5px; height: 5px;
          background: var(--gold);
          transform: rotate(45deg);
        }

        @media (max-width: 480px) {
          .hero-banner { padding: 2.5rem 1rem 2rem; }
          .cal-nav, .cal-grid, .event-panel { padding-left: 1rem; padding-right: 1rem; }
          .event-panel { margin-left: 1rem; margin-right: 1rem; }
          .legend { padding: 0.75rem 1rem 1rem; }
          .list-toolbar, .list-group { padding-left: 1rem; padding-right: 1rem; }
          .cal-cell { min-height: 40px; }
        }
      `}</style>

      <div className="cal-container">
        {/* Hero */}
        <div className="hero-banner">
          
        
          <h1 className="hero-title">Academic Calendar</h1>
          <div className="hero-ornament" />
          <p className="hero-year">2026 Academic Year</p>
        </div>

        {/* Tab Nav */}
        <div className="tab-nav">
          <button
            className={`tab-btn ${activeTab === "calendar" ? "active" : ""}`}
            onClick={() => setActiveTab("calendar")}
          >
            ◈ Monthly View
          </button>
          <button
            className={`tab-btn ${activeTab === "list" ? "active" : ""}`}
            onClick={() => setActiveTab("list")}
          >
            ≡ All Events
          </button>
        </div>

        {/* ── CALENDAR TAB ── */}
        {activeTab === "calendar" && (
          <div>
            {/* Month nav */}
            <div className="cal-nav">
              <button className="cal-nav-btn" onClick={prevMonth} aria-label="Previous month">‹</button>
              <div style={{ textAlign: "center" }}>
                <div className="cal-month-label">{MONTHS[viewMonth]}</div>
                <div className="cal-year-label">{viewYear}</div>
              </div>
              <button className="cal-nav-btn" onClick={nextMonth} aria-label="Next month">›</button>
            </div>

            {/* Grid */}
            <div className="cal-grid">
              <div className="cal-days-header">
                {DAYS_SHORT.map(d => (
                  <div key={d} className="cal-day-name">{d}</div>
                ))}
              </div>
              <div className="cal-cells">
                {cells.map((cell, i) => {
                  if (!cell.day || !cell.dateStr) {
                    return <div key={`e${i}`} className="cal-cell empty" />;
                  }
                  const evs = eventsByDate[cell.dateStr] ?? [];
                  const isToday = cell.dateStr === todayStr;
                  const isSelected = cell.dateStr === selectedDate;
                  return (
                    <div
                      key={cell.dateStr}
                      className={`cal-cell ${isToday ? "today" : ""} ${isSelected ? "selected" : ""}`}
                      onClick={() => setSelectedDate(isSelected ? null : cell.dateStr!)}
                    >
                      <span className="cal-cell-num">{cell.day}</span>
                      {evs.length > 0 && (
                        <div className="event-dots">
                          {evs.slice(0, 3).map(ev => (
                            <div
                              key={ev.id}
                              className="event-dot"
                              style={{ background: CATEGORY_META[ev.category].dot }}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Selected day events */}
            {selectedDate && (
              <div className="event-panel">
                <div className="event-panel-header">
                  <div className="event-panel-date">{formatDisplayDate(selectedDate)}</div>
                </div>
                <div className="event-panel-body">
                  {selectedEvents.length === 0 ? (
                    <p className="no-events">No scheduled events for this day.</p>
                  ) : (
                    selectedEvents.map(ev => (
                      <div key={ev.id} className="event-item">
                        <div
                          className="event-item-dot"
                          style={{ background: CATEGORY_META[ev.category].dot }}
                        />
                        <div style={{ flex: 1 }}>
                          <div className="event-item-title">
                            {ev.title}
                            <span className={`event-badge ${CATEGORY_META[ev.category].color}`}>
                              {CATEGORY_META[ev.category].label}
                            </span>
                          </div>
                          {(ev.time || ev.description) && (
                            <div className="event-item-meta">
                              {ev.time && <span style={{ marginRight: "0.5rem" }}>🕐 {ev.time}</span>}
                              {ev.description}
                            </div>
                          )}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {/* Legend */}
            <div className="ornament-divider">
              <div className="ornament-line" />
              <div className="ornament-diamond" />
              <div className="ornament-line" />
            </div>
            <div className="legend">
              {(Object.keys(CATEGORY_META) as EventCategory[]).map(cat => (
                <div key={cat} className="legend-item">
                  <div className="legend-dot" style={{ background: CATEGORY_META[cat].dot }} />
                  {CATEGORY_META[cat].label}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── LIST TAB ── */}
        {activeTab === "list" && (
          <div>
            <div className="list-toolbar">
              <span className="filter-label">Filter:</span>
              <button
                className={`filter-pill ${filterCategory === "all" ? "active" : ""}`}
                onClick={() => setFilterCategory("all")}
              >
                All
              </button>
              {(Object.keys(CATEGORY_META) as EventCategory[]).map(cat => (
                <button
                  key={cat}
                  className={`filter-pill ${filterCategory === cat ? "active" : ""}`}
                  onClick={() => setFilterCategory(cat)}
                >
                  {CATEGORY_META[cat].label}
                </button>
              ))}
            </div>

            {/* Group by month */}
            {(() => {
              const grouped: Record<string, CalendarEvent[]> = {};
              filteredEvents.forEach(ev => {
                const [y, m] = ev.date.split("-").map(Number);
                const key = `${y}-${String(m).padStart(2, "0")}`;
                if (!grouped[key]) grouped[key] = [];
                grouped[key].push(ev);
              });
              return Object.entries(grouped).map(([key, evs]) => {
                const [y, m] = key.split("-").map(Number);
                return (
                  <div key={key} className="list-group">
                    <div className="list-month-header">
                      {MONTHS[m - 1]}
                      <span className="list-month-year">{y}</span>
                    </div>
                    {evs.map(ev => {
                      const [, , d] = ev.date.split("-").map(Number);
                      const weekday = new Date(Number(y), m - 1, d).toLocaleDateString("en-US", { weekday: "short" });
                      return (
                        <div key={ev.id} className="list-event-row">
                          <div>
                            <div className="list-event-day">{d}</div>
                            <div className="list-event-weekday">{weekday}</div>
                          </div>
                          <div>
                            <div className="list-event-title">
                              {ev.title}
                            </div>
                            {ev.description && (
                              <div className="list-event-desc">{ev.description}</div>
                            )}
                            <span className={`event-badge ${CATEGORY_META[ev.category].color}`} style={{ marginLeft: 0, marginTop: "6px", display: "inline-block" }}>
                              {CATEGORY_META[ev.category].label}
                            </span>
                          </div>
                          <div className="list-event-time">{ev.time ?? ""}</div>
                        </div>
                      );
                    })}
                  </div>
                );
              });
            })()}

            <div style={{ height: "2rem" }} />
          </div>
        )}
      </div>
    </>
  );
}