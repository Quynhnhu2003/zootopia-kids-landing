"use client";

import Reveal from "../../animation/reveal";
import AchievementCard from "./AchievementCard";

const data = [
  { label: "Học sinh", value: 10000, suffix: "+" },
  { label: "Quốc gia", value: 18, suffix: "" },
  { label: "Giải thưởng", value: 12, suffix: "" },
  { label: "Năm nghiên cứu", value: 15, suffix: "" },
];

export default function Achievements() {
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

        <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-10">
          {data.map((item, i) => (
            <AchievementCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
