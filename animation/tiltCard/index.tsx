/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  style?: any;
}

export default function TiltCard({
  children,
  className,
  style,
}: TiltCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [10, -10]);
  const rotateY = useTransform(x, [-50, 50], [-10, 10]);

  return (
    <motion.div
      className={`bg-white rounded-edu p-6 shadow-sm hover:shadow-lg cursor-pointer ${className}`}
      style={{ rotateX, rotateY, perspective: 600, ...style }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const px = e.clientX - rect.left - rect.width / 2;
        const py = e.clientY - rect.top - rect.height / 2;
        x.set(px / 10);
        y.set(py / 10);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.div>
  );
}
