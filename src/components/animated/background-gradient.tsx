"use client";

import { useEffect, useRef } from "react";

// HSL Color arrays [H, S, L]
const startColorLight = [170, 60, 80]; // Light Cyan Green
const endColorLight = [200, 70, 30];   // Dark Bluish Green

const startColorDark = [200, 70, 20];   // Dark Blue
const endColorDark = [220, 60, 40];    // Lighter Blue

function lerp(start: number, end: number, progress: number): number {
  return start + (end - start) * progress;
}

export function BackgroundGradient() {
  const rafRef = useRef<number>(0);
  const isTicking = useRef(false);

  useEffect(() => {
    const updateGradient = () => {
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const maxScroll = documentHeight - windowHeight;
      const scrollProgress = maxScroll > 0 ? Math.min(1, window.scrollY / maxScroll) : 0;

      const isDark = document.documentElement.classList.contains('dark');
      const startColor = isDark ? startColorDark : startColorLight;
      const endColor = isDark ? endColorDark : endColorLight;

      const currentH = lerp(startColor[0], endColor[0], scrollProgress);
      const currentS = lerp(startColor[1], endColor[1], scrollProgress);
      const currentL = lerp(startColor[2], endColor[2], scrollProgress);

      const mainColor = `hsl(${currentH}, ${currentS}%, ${currentL}%)`;
      const lighterColor = `hsl(${currentH + 2}, ${currentS + 5}%, ${currentL + 15}%)`;
      const darkerColor = `hsl(${currentH - 2}, ${currentS - 5}%, ${currentL - 10}%)`;

      const gradient = `linear-gradient(135deg, ${lighterColor} 0%, ${mainColor} 50%, ${darkerColor} 100%)`

      document.documentElement.style.setProperty('--gradient-background', gradient);

      isTicking.current = false;
    };

    const requestTick = () => {
      if (!isTicking.current) {
        rafRef.current = window.requestAnimationFrame(updateGradient);
        isTicking.current = true;
      }
    };

    window.addEventListener('scroll', requestTick, { passive: true });
    
    // Initial call
    updateGradient();

    return () => {
      window.removeEventListener('scroll', requestTick);
      window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <div className="dynamic-gradient"></div>;
}
