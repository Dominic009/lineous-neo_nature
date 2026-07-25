"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(hover: none)").matches;
    if (isTouchDevice) return;

    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
      animate={{
        x: position.x,
        y: position.y,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        mass: 0.3,
      }}
    >
      {/* Outer ring */}
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 rounded-full border border-chrome1/40" />
        <div className="absolute inset-1 rounded-full border border-chrome1/20" />
        {/* Center dot */}
        <div className="absolute left-1/2 top-1/2 w-1 h-1 rounded-full bg-chrome1 -translate-x-1/2 -translate-y-1/2" />
      </div>
    </motion.div>
  );
}
