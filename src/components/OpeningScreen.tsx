"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import CornerDecor from "./ui/CornerDecor";
export default function OpeningScreen() {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);

    const audio = document.getElementById(
      "wedding-audio"
    ) as HTMLAudioElement;

    if (audio) {
      audio.play().catch(() => {});
    }
  };

  useEffect(() => {
    document.body.style.overflow =
      opened ? "auto" : "hidden";

    return () => {
      document.body.style.overflow =
        "auto";
    };
  }, [opened]);

  if (opened) return null;

  return (
    <div className="opening-screen">
<CornerDecor position="tl" />
  <CornerDecor position="tr" />
  <CornerDecor position="bl" />
  <CornerDecor position="br" />
      {/* Decorative Mandalas */}
      <div className="mandala-one" />
      <div className="mandala-two" />

      <div className="opening-content">
        <Image
          src="/ganpati1.png"
          alt="Lord Ganesha"
          width={130}
          height={100}
          priority
          className="ganesha-image"
        />

        <p className="opening-blessing">
          ॥ श्री गणेशाय नमः ॥
        </p>
        <h1 className="opening-groom">
          Dr. Omkar
        </h1>

        <div className="opening-amp">
          Weds
        </div>

        <h1 className="opening-bride">
          Dr. Mansi
        </h1>

        <p className="opening-date">
          Sunday • 19 July 2026
        </p>

        <button
          className="open-btn"
          onClick={handleOpen}
        >
          ✦ Open Invitation ✦
        </button>

      </div>
    </div>
  );
}