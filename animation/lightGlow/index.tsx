"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Point {
  x: number;
  y: number;
  timestamp: number;
}

export default function LightTrailUltraVIPSmooth() {
  const [points, setPoints] = useState<Point[]>([]);
  const MAX_LENGTH = 200; 
  const IDLE_TIMEOUT = 300; // 0.3s nếu đứng yên → trail biến mất

  // Lắng nghe chuột
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      const newPoint: Point = { x: e.clientX, y: e.clientY, timestamp: now };

      setPoints((prev) => {
        const arr = [...prev, newPoint];

        let distance = 0;
        const filtered: Point[] = [];
        for (let i = arr.length - 1; i >= 0; i--) {
          const p = arr[i];
          if (i < arr.length - 1) {
            const dx = arr[i + 1].x - p.x;
            const dy = arr[i + 1].y - p.y;
            distance += Math.sqrt(dx * dx + dy * dy);
          }
          if (distance <= MAX_LENGTH) filtered.unshift(p);
        }
        return filtered;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const interval = setInterval(() => {
      const now = Date.now();
      setPoints((prev) => prev.filter((p) => now - p.timestamp <= IDLE_TIMEOUT));
    }, 16);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  if (points.length < 2) return null;

  // Hàm tạo path cubic Bézier mượt hơn
  const generateSmoothPath = (pts: Point[]) => {
    let d = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 1; i < pts.length; i++) {
      const midX = (pts[i - 1].x + pts[i].x) / 2;
      const midY = (pts[i - 1].y + pts[i].y) / 2;
      d += ` Q ${pts[i - 1].x} ${pts[i - 1].y}, ${midX} ${midY}`;
    }
    d += ` L ${pts[pts.length - 1].x} ${pts[pts.length - 1].y}`;
    return d;
  };

  const path = generateSmoothPath(points);

  return (
    <svg className="pointer-events-none fixed top-0 left-0 w-full h-full z-50">
      <motion.path
        d={path}
        stroke="url(#gradient1)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="transparent"
        style={{ filter: "blur(2px)" }}
      />
      <motion.path
        d={path}
        stroke="url(#gradient2)"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="transparent"
        style={{ filter: "blur(3px)" }}
      />
      <motion.path
        d={path}
        stroke="url(#gradient3)"
        strokeWidth={0.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="transparent"
        style={{ filter: "blur(5px)" }}
      />

      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF6EC7" stopOpacity={1} />
          <stop offset="100%" stopColor="#FFD166" stopOpacity={1} />
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF6EC7" stopOpacity={0.7} />
          <stop offset="100%" stopColor="#FFD166" stopOpacity={0.7} />
        </linearGradient>
        <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF6EC7" stopOpacity={0.4} />
          <stop offset="100%" stopColor="#FFD166" stopOpacity={0.4} />
        </linearGradient>
      </defs>
    </svg>
  );
}
