"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export function MouseGlow() {
  const [point, setPoint] = useState({ x: 50, y: 30, active: false });

  useEffect(() => {
    const update = (event: PointerEvent) => {
      setPoint({ x: event.clientX, y: event.clientY, active: true });
    };

    const leave = () => setPoint((current) => ({ ...current, active: false }));

    window.addEventListener("pointermove", update);
    window.addEventListener("pointerleave", leave);

    return () => {
      window.removeEventListener("pointermove", update);
      window.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none fixed inset-0 z-0 transition-opacity duration-500", point.active ? "opacity-100" : "opacity-40")}
      style={{
        background: `radial-gradient(420px circle at ${point.x}px ${point.y}px, rgba(56, 189, 248, 0.12), transparent 55%)`,
      }}
    />
  );
}
