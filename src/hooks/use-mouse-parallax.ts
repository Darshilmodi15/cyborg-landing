"use client";

import { useEffect, useState } from "react";

type ParallaxPoint = {
  x: number;
  y: number;
};

export function useMouseParallax(strength = 24): ParallaxPoint {
  const [point, setPoint] = useState<ParallaxPoint>({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const handleMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * strength;
      const y = (event.clientY / window.innerHeight - 0.5) * strength;
      setPoint({ x, y });
    };

    window.addEventListener("pointermove", handleMove);

    return () => window.removeEventListener("pointermove", handleMove);
  }, [strength]);

  return point;
}
