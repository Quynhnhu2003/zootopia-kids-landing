"use client";

import Reveal from "../../animation/reveal";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const data = [
  { label: "Học sinh", value: 10000, suffix: "+" },
  { label: "Quốc gia", value: 18, suffix: "" },
  { label: "Giải thưởng", value: 12, suffix: "" },
  { label: "Năm nghiên cứu", value: 15, suffix: "" },
];

export default function Achievements() {
  // ** State
  const [counts, setCounts] = useState<number[]>(data.map(() => 0));

  // ** useEffect
  useEffect(() => {
    data.forEach((item, i) => {
      let start = 0;
      const end = item.value;
      const duration = 2000;
      const stepTime = 20;
      const step = Math.ceil(end / (duration / stepTime));

      const timer = setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCounts((prev) => {
          const next = [...prev];
          next[i] = start;
          return next;
        });
      }, stepTime);
    });
  }, []);

  return (
    <section className="py-28 relative overflow-hidden bg-[radial-gradient(circle_at_top,#fff,#f7f8fc)]">
      {/* Glow nền */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-zooPink/20 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-eduBlue">
            Thành Tích Nổi Bật
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-4 gap-10">
          {data.map((item, i) => (
            <Reveal key={i} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="relative group rounded-3xl p-8 text-center
                  bg-white/70 backdrop-blur-xl
                  shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                  border border-white/40
                  hover:shadow-[0_25px_60px_rgba(255,110,199,0.15)]
                  transition-all duration-500"
              >
                {/* Glow hover MỜ – CAO CẤP */}
                {/* <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500
                      bg-[radial-gradient(circle_at_top,#FF6EC7_0%,transparent_80%)]
                      blur-3xl -z-10"
                /> */}

                {/* VALUE */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-5xl font-black bg-clip-text text-transparent
                    bg-[linear-gradient(90deg,#FF6EC7,#FFD166)]
                    mb-4"
                >
                  {counts[i].toLocaleString()}
                  {item.suffix}
                </motion.p>

                {/* LABEL */}
                <p className="text-lg font-semibold text-eduBlue">
                  {item.label}
                </p>

                {/* UNDERLINE */}
                <div
                  className="mt-4 h-1 w-14 mx-auto rounded-full
                  bg-[linear-gradient(90deg,#FF6EC7,#FFD166)]"
                />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
