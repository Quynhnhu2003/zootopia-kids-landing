"use client";

import Image from "next/image";
import Reveal from "../../animation/reveal";
import TiltCard from "@/animation/tiltCard";

export default function FeaturedProducts() {
  const products = [
    {
      name: "Bộ học STEM Robotics",
      desc: "Phát triển tư duy logic & sáng tạo",
      price: "1.250.000đ",
      image:
        "https://i.pinimg.com/736x/4f/6d/87/4f6d87418df697960822bdddda530a55.jpg",
    },
    {
      name: "Bộ Toán Tư Duy Montessori",
      desc: "Dành cho trẻ 4–6 tuổi",
      price: "890.000đ",
      image:
        "https://i.pinimg.com/1200x/be/57/63/be57636213b915528e61ab31e0868708.jpg",
    },
    {
      name: "Bộ Ngôn Ngữ Sớm",
      desc: "Tăng khả năng ngôn ngữ",
      price: "720.000đ",
      image:
        "https://i.pinimg.com/1200x/1d/e5/82/1de582a62e93b9a5623f3555f8e761d3.jpg",
    },
  ];

  return (
    <section id="featuredProducts" className="py-24 bg-eduIvory">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <h2 className="text-4xl font-[var(--font-playfair)] font-bold text-center mb-12">
            Sản phẩm tiêu biểu
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-10 rounded">
          {products.map((p, i) => (
            <Reveal key={i}>
            <TiltCard className="h-full flex flex-col bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden">

              {/* IMAGE */}
              <div className="flex-1 flex items-center justify-center overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  width={420}
                  height={420}
                  className="h-56 object-contain transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* CONTENT */}
              <div className="mt-4 text-center px-4">
                <h3 className="text-lg font-bold text-eduNavy mb-2">
                  {p.name}
                </h3>

                <p className="text-zooPink font-extrabold mb-5 text-lg">
                  {p.price}
                </p>

                <button
                  className="w-full text-white font-bold py-3 rounded-2xl shadow-lg
                      bg-[linear-gradient(90deg,#FF6EC7,#FFD166)]
                      hover:scale-105 hover:shadow-xl transition-transform duration-300"
                >
                  Nhận tư vấn ngay
                </button>
              </div>
            </TiltCard>
          </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
