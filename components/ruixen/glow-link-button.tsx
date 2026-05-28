"use client";

import { motion } from "motion/react";
import * as React from "react";
import { cn } from "@/lib/utils";

/* ── sound ── */
let _a: AudioContext, _b: AudioBuffer;
const tick = () => {
  if (typeof window === "undefined") return;
  if (!_a) {
    _a = new AudioContext();
    _b = _a.createBuffer(1, (_a.sampleRate * 0.003) | 0, _a.sampleRate);
    const d = _b.getChannelData(0);
    for (let i = 0; i < d.length; i++)
      d[i] = (Math.random() * 2 - 1) * (1 - i / d.length) ** 4;
  }
  const s = _a.createBufferSource();
  s.buffer = _b;
  const g = _a.createGain();
  g.gain.value = 0.08;
  s.connect(g).connect(_a.destination);
  s.start();
};

/* ── component ── */
export interface GlowLinkButtonProps {
  label?: string;
  href?: string;
  sound?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

export default function GlowLinkButton({
  label = "Explore on GitHub",
  href = "#",
  sound = true,
  style,
  className,
}: GlowLinkButtonProps) {
  const [hovered, setHovered] = React.useState(false);
  const [glowX, setGlowX] = React.useState(0);

  return (
    <motion.a
      className={cn("gl", className)}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => sound && tick()}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setGlowX(e.clientX - r.left);
      }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "10px 18px",
        borderRadius: 24,
        border: "1px solid var(--gl-border)",
        background: "var(--gl-glass)",
        boxShadow: "var(--gl-shadow)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        color: "var(--gl-hi)",
        fontSize: 14,
        fontWeight: 500,
        textDecoration: "none",
        cursor: "pointer",
        outline: "none",
        userSelect: "none",
        overflow: "hidden",
        ...style,
      }}
    >
      {/* cursor glow */}
      <span
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.25s",
          background: `radial-gradient(80px circle at ${glowX}px 50%, var(--gl-glow), transparent)`,
        }}
      />
      <span style={{ position: "relative" }}>{label}</span>
      <motion.svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        role="img"
        aria-label="External link"
        style={{ position: "relative", color: "var(--gl-dim)" }}
        animate={{
          x: hovered ? 2 : 0,
          y: hovered ? -2 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <path d="M7 17L17 7" />
        <path d="M7 7h10v10" />
      </motion.svg>
    </motion.a>
  );
}
