"use client";
import { AnimatedTextSlider } from "@/components/animated-text-slider";

export default function AnimatedSlide() {
  const roles = [
    "Software Engineer",
    "Full-Stack Developer",
    "Problem Solver",
    "Creative Thinker",
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="  font-medium dark:text-zinc-200 w-full max-w-md text-center">
        <AnimatedTextSlider texts={roles} interval={2000} />
      </div>
    </div>
  );
}
