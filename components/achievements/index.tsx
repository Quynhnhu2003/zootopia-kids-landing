"use client";
import Reveal from "../../animation/reveal";

export default function Achievements() {
  const stats = [
    "10.000+ học sinh",
    "18 quốc gia",
    "12 giải thưởng giáo dục",
    "15 năm nghiên cứu",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 px-6 text-center">
        {stats.map((text, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <p className="text-3xl font-bold text-eduBlue mb-2">{text}</p>
            <div className="h-1 w-10 bg-eduGold mx-auto"></div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
