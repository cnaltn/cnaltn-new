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

  if (!time) {
    return (
      <div
        className="flex items-center gap-1 w-full h-full justify-center"
        role="timer"
        aria-label="Loading clock"
      >
        <ClockDigit value={0} />
        <ClockDigit value={0} />
        <Matrix
          rows={7}
          cols={3}
          pattern={colon}
          size={4.5}
          gap={1.5}
          ariaLabel="colon"
        />
        <ClockDigit value={0} />
        <ClockDigit value={0} />
        <Matrix
          rows={7}
          cols={3}
          pattern={colon}
          size={4.5}
          gap={1.5}
          ariaLabel="colon"
        />
        <ClockDigit value={0} />
        <ClockDigit value={0} />
      </div>
    );
  }

  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");

  const allDigits = hours + minutes + seconds;

  const parts: React.ReactNode[] = [];
  for (let i = 0; i < 6; i++) {
    parts.push(<ClockDigit key={`d-${i}`} value={Number(allDigits[i])} />);
    if (i === 1 || i === 3) {
      parts.push(
        <Matrix
          key={`c-${i}`}
          rows={7}
          cols={3}
          pattern={colon}
          size={4.5}
          gap={1.5}
          ariaLabel="colon"
        />,
      );
    }
  }

  return (
    <div
      className="flex items-center gap-1 w-full h-full justify-center"
      role="timer"
      aria-label={`${hours}:${minutes}:${seconds}`}
    >
      {parts}
    </div>
  );
}
