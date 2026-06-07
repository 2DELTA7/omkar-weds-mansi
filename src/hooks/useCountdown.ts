"use client";

import { useEffect, useState } from "react";

export default function useCountdown(
  targetDate: string
) {
  const calculate = () => {
    const target = new Date(targetDate).getTime();
    const now = Date.now();

    const diff = target - now;

    if (diff <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor(
        (diff % 86400000) / 3600000
      ),
      minutes: Math.floor(
        (diff % 3600000) / 60000
      ),
      seconds: Math.floor(
        (diff % 60000) / 1000
      ),
    };
  };

  const [time, setTime] = useState(calculate());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculate());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return time;
}