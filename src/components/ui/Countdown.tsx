"use client";

import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function Countdown() {
  const [mounted, setMounted] = useState(false);

  const [timeLeft, setTimeLeft] =
    useState<TimeLeft>({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });

  useEffect(() => {
    setMounted(true);

    const targetDate = new Date(
      "2026-07-19T10:53:00"
    ).getTime();

    const updateCountdown = () => {
      const now = Date.now();

      const difference =
        targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });

        return;
      }

      setTimeLeft({
        days: Math.floor(
          difference /
            (1000 * 60 * 60 * 24)
        ),

        hours: Math.floor(
          (difference %
            (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        ),

        minutes: Math.floor(
          (difference %
            (1000 * 60 * 60)) /
            (1000 * 60)
        ),

        seconds: Math.floor(
          (difference %
            (1000 * 60)) /
            1000
        ),
      });
    };

    updateCountdown();

    const interval =
      setInterval(
        updateCountdown,
        1000
      );

    return () =>
      clearInterval(interval);
  }, []);

  const formatNumber = (
    value: number
  ) => {
    return value
      .toString()
      .padStart(2, "0");
  };

  if (!mounted) {
    return (
      <div className="countdown-wrap">
        <div className="countdown-heading">
          <span className="countdown-icon">
            ✦
          </span>

          <h3>
            Countdown To Our Wedding Day
          </h3>

          <span className="countdown-icon">
            ✦
          </span>
        </div>

        <p className="countdown-subtitle">
          Every moment brings us closer
          to our happily ever after.
        </p>

        <div className="countdown-grid">
          {["Days", "Hours", "Minutes", "Seconds"].map(
            (item) => (
              <div
                key={item}
                className="count-box"
              >
                <div className="count-num">
                  --
                </div>

                <div className="count-unit">
                  {item}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="countdown-wrap">

      <div className="countdown-heading">
        <span className="countdown-icon">
          ✦
        </span>

        <h3>
          Countdown To Our Wedding Day
        </h3>

        <span className="countdown-icon">
          ✦
        </span>
      </div>

      <p className="countdown-subtitle">
        Every moment brings us closer
        to our happily ever after.
      </p>

      <div className="countdown-grid">

        <div className="count-box">
          <div className="count-num">
            {formatNumber(
              timeLeft.days
            )}
          </div>

          <div className="count-unit">
            Days
          </div>
        </div>

        <div className="count-box">
          <div className="count-num">
            {formatNumber(
              timeLeft.hours
            )}
          </div>

          <div className="count-unit">
            Hours
          </div>
        </div>

        <div className="count-box">
          <div className="count-num">
            {formatNumber(
              timeLeft.minutes
            )}
          </div>

          <div className="count-unit">
            Minutes
          </div>
        </div>

        <div className="count-box">
          <div className="count-num">
            {formatNumber(
              timeLeft.seconds
            )}
          </div>

          <div className="count-unit">
            Seconds
          </div>
        </div>

      </div>
    </div>
  );
}