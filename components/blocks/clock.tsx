"use client";

import { useEffect, useRef, useState } from "react";

import { digits, type Frame, Matrix } from "@/components/ui/matrix";

const colon: Frame = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
  [0, 0, 0],
];

function ClockDigit({ value }: { value: number }) {
  return (
    <Matrix
      rows={7}
      cols={5}
      pattern={digits[value]}
      size={4.5}
      gap={1.5}
      ariaLabel={`Digit ${value}`}
    />
  );
}

function ColonSeparator() {
  return (
    <Matrix
      rows={7}
      cols={3}
      pattern={colon}
      size={4.5}
      gap={1.5}
      ariaLabel="colon"
    />
  );
}

function ClockDigits({ digits: digitValues }: { digits: number[] }) {
  const parts: React.ReactNode[] = [];
  for (let i = 0; i < 6; i++) {
    parts.push(<ClockDigit key={`d-${i}`} value={digitValues[i]} />);
    if (i === 1 || i === 3) {
      parts.push(<ColonSeparator key={`c-${i}`} />);
    }
  }
  return <div className="flex items-center gap-1">{parts}</div>;
}

export function DigitalClock() {
  const [time, setTime] = useState<Date | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    setTime(new Date());
    const tick = () => {
      setTime(new Date());
      const msUntilNextSecond = 1000 - new Date().getMilliseconds();
      timerRef.current = setTimeout(tick, msUntilNextSecond);
    };
    timerRef.current = setTimeout(tick, 1000 - new Date().getMilliseconds());
    return () => clearTimeout(timerRef.current);
  }, []);

  const hours = time
    ? String(time.getHours()).padStart(2, "0")
    : "00";
  const minutes = time
    ? String(time.getMinutes()).padStart(2, "0")
    : "00";
  const seconds = time
    ? String(time.getSeconds()).padStart(2, "0")
    : "00";

  const allDigits = (hours + minutes + seconds).split("").map(Number);

  return (
    <div
      className="flex items-center justify-center w-full h-full"
      role="timer"
      aria-label={time ? `${hours}:${minutes}:${seconds}` : "Loading clock"}
    >
      <div className="scale-[0.65] sm:scale-100 transition-transform origin-center">
        <ClockDigits digits={allDigits} />
      </div>
    </div>
  );
}
