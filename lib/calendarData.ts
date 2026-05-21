// lib/calendarData.ts

export type EntryType = "closed" | "event";

export interface CalendarEntry {
  day: number;
  type: EntryType;
  label: string;
}

export interface MonthData {
  index: number;  // 0-indexed JS month
  name: string;
  short: string;
  entries: CalendarEntry[];
}

export const YEAR = 2026;
export const TODAY_MONTH = 4; // May (0-indexed)
export const TODAY_DATE = 20;
export const FIRST_MONTH = 4;
export const LAST_MONTH = 11;

export const MONTH_NAMES = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December",
];

export const SHORT_MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export const DOW_LABELS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const RAW_DATA: Record<number, CalendarEntry[]> = {
  4: [
    { day: 20, type: "event",  label: "Nail Tech Orientation" },
    { day: 25, type: "closed", label: "School Closed" },
    { day: 26, type: "closed", label: "School Closed" },
    { day: 27, type: "closed", label: "Memorial Day — School Closed" },
  ],
  5: [
    { day: 2,  type: "event",  label: "Nail Technology Classes Begin" },
    { day: 19, type: "closed", label: "Juneteenth — School Closed" },
  ],
  6: [
    { day: 3,  type: "closed", label: "School Closed (Independence Day Eve)" },
    { day: 4,  type: "closed", label: "Independence Day — School Closed" },
  ],
  7: [],
  8: [
    { day: 7,  type: "closed", label: "Labor Day — School Closed" },
  ],
  9: [
    { day: 12, type: "closed", label: "Columbus Day — School Closed" },
  ],
  10: [
    { day: 11, type: "closed", label: "Veterans Day — School Closed" },
    { day: 26, type: "closed", label: "Thanksgiving — School Closed" },
    { day: 27, type: "closed", label: "School Closed (Thanksgiving Weekend)" },
    { day: 28, type: "closed", label: "School Closed (Thanksgiving Weekend)" },
  ],
  11: [
    { day: 24, type: "closed", label: "Christmas Eve — School Closed" },
    { day: 25, type: "closed", label: "Christmas Day — School Closed" },
    { day: 31, type: "closed", label: "New Year's Eve — School Closed" },
  ],
};

export function getMonthEntries(month: number): CalendarEntry[] {
  return RAW_DATA[month] ?? [];
}

export function getEntryForDay(month: number, day: number): CalendarEntry | undefined {
  return getMonthEntries(month).find((e) => e.day === day);
}

export function ordinal(n: number): string {
  const v = n % 100;
  const s = ["th", "st", "nd", "rd"];
  return n + (s[(v - 20) % 10] ?? s[v] ?? s[0]);
}

export function getDaysInMonth(month: number): number {
  return new Date(YEAR, month + 1, 0).getDate();
}

export function getFirstDayOfWeek(month: number): number {
  return new Date(YEAR, month, 1).getDay();
}

export type DayType = "normal" | "closed" | "event" | "today" | "weekend" | "blank";

export interface DayCellData {
  day: number;
  type: DayType;
  label?: string;
}

export function buildMonthGrid(month: number): DayCellData[] {
  const firstDow = getFirstDayOfWeek(month);
  const daysInMonth = getDaysInMonth(month);

  const blanks: DayCellData[] = Array.from({ length: firstDow }, (_, i) => ({
    day: 0,
    type: "blank" as DayType,
  }));

  const days: DayCellData[] = Array.from({ length: daysInMonth }, (_, i) => {
    const day = i + 1;
    const dow = (firstDow + i) % 7;
    const entry = getEntryForDay(month, day);

    if (entry) return { day, type: entry.type, label: entry.label };
    if (month === TODAY_MONTH && day === TODAY_DATE) return { day, type: "today" };
    if (dow === 0 || dow === 6) return { day, type: "weekend" };
    return { day, type: "normal" };
  });

  return [...blanks, ...days];
}