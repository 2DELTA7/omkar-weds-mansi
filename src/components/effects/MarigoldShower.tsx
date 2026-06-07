"use client";

import { useMemo } from "react";
import Image from "next/image";
export default function MarigoldShower() {
  const petals = useMemo(
    () =>
      Array.from(
        { length: 25 },
        (_, i) => ({
          id: i,
          left: Math.random() * 100,
          size: 20 + Math.random() * 18,
          delay: Math.random() * 8,
          duration: 8 + Math.random() * 6,
        })
      ),
    []
  );

  return (
    <div className="marigold-shower">
      {petals.map((petal) => (
        <span
          key={petal.id}
          className="marigold-petal"
          style={{
            left: `${petal.left}%`,
            fontSize: `${petal.size}px`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
          }}
        >
          <Image
  src="/marigold.png"
  alt=""
  width={30}
  height={30}
/>
        </span>
      ))}
    </div>
  );
}