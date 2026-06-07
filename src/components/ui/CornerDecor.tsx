export default function CornerDecor({
  position = "tl",
  size = 110,
  opacity = 1,
}) {
  const transforms = {
    tl: "none",
    tr: "scaleX(-1)",
    bl: "scaleY(-1)",
    br: "scale(-1,-1)",
  };

  return (
    <div
      style={{
        position: "absolute",
        ...(position.includes("t")
          ? { top: 0 }
          : { bottom: 0 }),
        ...(position.includes("l")
          ? { left: 0 }
          : { right: 0 }),
        width: `${size}px`,
        height: `${size}px`,
        pointerEvents: "none",
        opacity,
        transform:
          transforms[
            position as keyof typeof transforms
          ],
        zIndex: 1,
      }}
    >
      <svg
        viewBox="0 0 110 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
      >
        <path
          d="M8 102 C8 8 102 8 102 8"
          stroke="#D4AF37"
          strokeWidth="0.8"
        />

        <path
          d="M20 102 C20 20 90 20 90 20"
          stroke="#D4AF37"
          strokeWidth="0.4"
          strokeDasharray="4 4"
        />
        <path
          d="M8 8 Q30 42 54 42"
          stroke="#D4AF37"
          strokeWidth="0.5"
        />

        <path
          d="M54 42 Q78 42 102 8"
          stroke="#D4AF37"
          strokeWidth="0.5"
        />

        <path
          d="M8 8 L26 8"
          stroke="#D4AF37"
          strokeWidth="1.5"
        />

        <path
          d="M8 8 L8 26"
          stroke="#D4AF37"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}