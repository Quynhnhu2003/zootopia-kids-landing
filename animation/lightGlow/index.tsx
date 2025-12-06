"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function LightGlow() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 120, damping: 30 });
  const smoothY = useSpring(y, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 150);
      y.set(e.clientY - 150);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      style={{ translateX: smoothX, translateY: smoothY }}
      className="pointer-events-none fixed top-0 left-0 w-[300px] h-[300px] rounded-full z-[1]"
    >
      <div
        className="w-full h-full rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.35) 0%, rgba(37,99,235,0.15) 40%, rgba(255,255,255,0) 70%)",
          filter: "blur(60px)",
        }}
      />
    </motion.div>
  );
}
