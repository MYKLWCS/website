"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { cn } from "@/lib/cn";

interface DatePickerProps {
  value?: string;
  onChange: (date: string) => void;
  label?: string;
  placeholder?: string;
  min?: string;
  max?: string;
  disabled?: boolean;
  error?: string;
  className?: string;
}

export function DatePicker({
  value = "",
  onChange,
  label,
  placeholder = "MM/DD/YYYY",
  min,
  max,
  disabled = false,
  error,
  className,
}: DatePickerProps) {
  const [input, setInput] = useState(value);
  const [showPicker, setShowPicker] = useState(false);
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const containerRef = useRef<HTMLDivElement>(null);

  // Format date string
  const formatDate = (dateString: string): string => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return (date.getMonth() + 1).toString().padStart(2, "0") +
      "/" +
      date.getDate().toString().padStart(2, "0") +
      "/" +
      date.getFullYear();
  };

  // Parse date string (MM/DD/YYYY)
  const parseDate = (dateString: string): string => {
    const parts = dateString.replace(/\D/g, "").match(/(\d{0,2})(\d{0,2})(\d{0,4})/);
    if (!parts) return "";

    let month = parts[1];
    let day = parts[2];
    let year = parts[3];

    if (month && parseInt(month) > 12) month = month.substring(0, 1);
    if (day && parseInt(day) > 31) day = day.substring(0, 2);

    let formattedValue = "";
    if (month) formattedValue = month;
    if (day) formattedValue += "/" + day;
    if (year) formattedValue += "/" + year;

    return formattedValue;
  };

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const formatted = parseDate(e.target.value);
      setInput(formatted);

      // If complete date is entered, convert to ISO format
      if (formatted.length === 10) {
        const [m, d, y] = formatted.split("/");
        const date = new Date(parseInt(y), parseInt(m) - 1, parseInt(d));
        if (!isNaN(date.getTime())) {
          onChange(date.toISOString().split("T")[0]);
        }
      }
    },
    [onChange]
  );

  const handleDateSelect = useCallback(
    (day: number) => {
      const date = new Date(year, month, day);
      const isoString = date.toISOString().split("T")[0];
      onChange(isoString);
      setInput(formatDate(isoString));
      setShowPicker(false);
    },
    [month, year, onChange]
  );

  const handlePrevMonth = useCallback(() => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  }, [month, year]);

  const handleNextMonth = useCallback(() => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  }, [month, year]);

  const handleYearChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setYear(parseInt(e.target.value));
    },
    []
  );

  // Close picker on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setShowPicker(false);
      }
    };

    if (showPicker) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [showPicker]);

  // Generate calendar days
  const getDaysInMonth = (month: number, year: number): number => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number): number => {
    return new Date(year, month, 1).getDay();
  };

  const daysInMonth = getDaysInMonth(month, year);
  const firstDay = getFirstDayOfMonth(month, year);
  const days = [];

  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div ref={containerRef} className={cn("relative space-y-2", className)}>
      {label && (
        <label className="block text-sm font-medium text-fg">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onFocus={() => setShowPicker(true)}
          placeholder={placeholder}
          disabled={disabled}
          className={cn(
            "w-full rounded-xl border px-4 py-2 text-sm outline-none transition",
            error
              ? "border-danger/50 bg-danger/10 placeholder:text-danger/70"
              : "border-border/60 bg-panel placeholder:text-muted hover:border-border focus:border-brand focus:ring-1 focus:ring-brand/30"
          )}
        />

        {showPicker && (
          <div className="absolute top-full left-0 z-50 mt-2 rounded-2xl border border-border/60 bg-bg shadow-lg p-4">
            {/* Month/Year selector */}
            <div className="mb-4 flex items-center justify-between">
              <button
                onClick={handlePrevMonth}
                className="h-8 w-8 rounded hover:bg-panel flex items-center justify-center"
              >
                ←
              </button>

              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">{monthNames[month]}</span>
                <select
                  value={year}
                  onChange={handleYearChange}
                  className="rounded border border-border/40 bg-panel px-2 py-1 text-sm outline-none"
                >
                  {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - 50 + i).map(
                    (y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    )
                  )}
                </select>
              </div>

              <button
                onClick={handleNextMonth}
                className="h-8 w-8 rounded hover:bg-panel flex items-center justify-center"
              >
                →
              </button>
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-1">
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                <div key={day} className="h-8 flex items-center justify-center text-xs font-medium text-muted">
                  {day}
                </div>
              ))}

              {days.map((day, index) => (
                <button
                  key={index}
                  onClick={() => day && handleDateSelect(day)}
                  disabled={!day}
                  className={cn(
                    "h-8 rounded text-sm transition",
                    !day
                      ? "cursor-default"
                      : "hover:bg-brand hover:text-white cursor-pointer"
                  )}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {error && <p className="text-xs font-medium text-danger">{error}</p>}
    </div>
  );
}

/**
 * Date range picker
 */
interface DateRangePickerProps {
  startDate?: string;
  endDate?: string;
  onDateChange: (startDate: string, endDate: string) => void;
  label?: string;
  disabled?: boolean;
  error?: string;
  className?: string;
}

export function DateRangePicker({
  startDate = "",
  endDate = "",
  onDateChange,
  label,
  disabled = false,
  error,
  className,
}: DateRangePickerProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {label && (
        <label className="block text-sm font-medium text-fg">
          {label}
        </label>
      )}

      <div className="grid grid-cols-2 gap-3">
        <DatePicker
          value={startDate}
          onChange={(date) => onDateChange(date, endDate)}
          placeholder="Start date"
          disabled={disabled}
          error={error ? "Start date error" : undefined}
        />
        <DatePicker
          value={endDate}
          onChange={(date) => onDateChange(startDate, date)}
          placeholder="End date"
          min={startDate}
          disabled={disabled}
          error={error ? "End date error" : undefined}
        />
      </div>

      {error && <p className="text-xs font-medium text-danger">{error}</p>}
    </div>
  );
}
