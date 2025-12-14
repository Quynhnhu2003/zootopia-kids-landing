/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Reveal from "@/animation/reveal";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function AchievementCard({ item, index }: { item: any; index: number }) {
  // ** State
  const [count, setCount] = useState<number>(0);

  // ** Hooks
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // ** useEffect
  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = item.duration ?? 1800;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);

      setCount(Math.floor(progress * item.value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, item.value]);

  return (
    <Reveal delay={index * 0.15}>
      <motion.div
        ref={ref}
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
        className="relative group rounded-3xl p-8 text-center
          bg-white/70 backdrop-blur-xl
          shadow-[0_20px_50px_rgba(0,0,0,0.08)]
          border border-white/40
          hover:shadow-[0_25px_60px_rgba(255,110,199,0.15)]
          transition-all duration-500"
      >
        {/* VALUE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-5xl font-black bg-clip-text text-transparent
            bg-[linear-gradient(90deg,#FF6EC7,#FFD166)]
            mb-4"
        >
          {count.toLocaleString()}
          {item.suffix}
        </motion.p>

        {/* LABEL */}
        <p className="text-lg font-semibold text-eduBlue">{item.label}</p>

        {/* UNDERLINE */}
        <div
          className="mt-4 h-1 w-14 mx-auto rounded-full
          bg-[linear-gradient(90deg,#FF6EC7,#FFD166)]"
        />
      </motion.div>
    </Reveal>
  );
}

export default AchievementCard;
