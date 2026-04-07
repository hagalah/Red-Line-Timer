import { useState, useEffect, useCallback } from "react";

interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalSeconds: number;
  isExpired: boolean;
  targetDate: Date;
}

// Deadline: Tuesday April 7, 2026 at 8:00 PM Eastern Time (00:00 UTC April 8)
const DEFAULT_DEADLINE = new Date("2026-04-08T00:00:00Z");

export function useCountdown(customDeadline?: Date): CountdownState {
  const [targetDate, setTargetDate] = useState<Date>(customDeadline || DEFAULT_DEADLINE);

  useEffect(() => {
    if (customDeadline) setTargetDate(customDeadline);
  }, [customDeadline]);

  const calculate = useCallback(() => {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, totalSeconds: 0, isExpired: true, targetDate };
    }

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
      totalSeconds: Math.floor(distance / 1000),
      isExpired: false,
      targetDate,
    };
  }, [targetDate]);

  const [state, setState] = useState<CountdownState>(calculate);

  useEffect(() => {
    const interval = setInterval(() => setState(calculate()), 1000);
    return () => clearInterval(interval);
  }, [calculate]);

  return state;
}
