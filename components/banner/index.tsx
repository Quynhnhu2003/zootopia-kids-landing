"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    title: "Phát triển trí tuệ toàn diện cho trẻ",
    desc: "Chọn lọc đồ chơi giáo dục chuẩn quốc tế – đồng hành cùng tương lai của con bạn",
    image:
      "https://i.pinimg.com/736x/49/b5/99/49b5990e910893c6c090b50074800f9a.jpg",
  },
  {
    title: "Chuẩn Montessori & STEM",
    desc: "Giúp trẻ phát triển logic – sáng tạo – ngôn ngữ sớm",
    image:
      "https://i.pinimg.com/1200x/d3/2a/f8/d32af8c07129ecbba4da340999aa51a3.jpg",
  },
  {
    title: "Được tin dùng bởi 10.000+ phụ huynh",
    desc: "Niềm tin của phụ huynh là giá trị lớn nhất của chúng tôi",
    image:
      "https://i.pinimg.com/736x/9b/99/7a/9b997af07a6f830eed79f0960d6d03c6.jpg",
  },
];

export default function Banner() {
  // ** State
  const [index, setIndex] = useState<number>(0);

  // ** Functions
  const scrollToSection = (id: string) => {  
    const el = document.getElementById(id);
    if (!el) return;
  
    const yOffset = 90;
    const y =
      el.getBoundingClientRect().top + window.pageYOffset - yOffset;
  
    window.scrollTo({
      top: y,
      behavior: 'smooth',
    });
  };

  // ** useEffect
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="program"
      className="w-full bg-linear-to-r from-eduMint to-eduIvory py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center px-6 gap-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-[var(--font-playfair)] text-5xl font-bold mb-6 leading-tight">
              {slides[index].title}
            </h1>
            <p className="text-eduGray mb-8 text-lg">{slides[index].desc}</p>

            <div className="flex gap-4">
              <button
                onClick={() => scrollToSection('products')}
                className="bg-eduGold text-eduNavy px-7 py-3 rounded-edu font-semibold shadow hover:scale-105 transition-transform rounded-md"
              >
                Xem bộ sưu tập
              </button>
              <button className="border border-eduBlue px-7 py-3 rounded-edu font-semibold text-eduBlue hover:scale-105 transition-transform rounded-md">
                Tư vấn 1–1
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={slides[index].image}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Image
              src={slides[index].image}
              alt="slide"
              width={420}
              height={420}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-3 mt-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full hover:scale-105 transition-transform ${
              i === index ? "bg-eduBlue scale-125" : "bg-eduGray/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
