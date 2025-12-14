/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/animation/reveal";
import TiltCard from "@/animation/tiltCard";
import ProductModal from "./ProductModal";

export default function FeaturedProducts() {
  const [activeProduct, setActiveProduct] = useState<any>(null);

  const products = [
    {
      name: "Bộ học STEM Robotics",
      desc: "Giúp trẻ phát triển tư duy logic, sáng tạo và kỹ năng giải quyết vấn đề.",
      price: "1.250.000đ",
      image:
        "https://i.pinimg.com/736x/4f/6d/87/4f6d87418df697960822bdddda530a55.jpg",
    },
    {
      name: "Bộ Toán Tư Duy Montessori",
      desc: "Phương pháp Montessori giúp trẻ học toán tự nhiên, dễ hiểu.",
      price: "890.000đ",
      image:
        "https://i.pinimg.com/1200x/be/57/63/be57636213b915528e61ab31e0868708.jpg",
    },
    {
      name: "Bộ Ngôn Ngữ Sớm",
      desc: "Tăng khả năng ngôn ngữ và giao tiếp cho trẻ.",
      price: "720.000đ",
      image:
        "https://i.pinimg.com/1200x/1d/e5/82/1de582a62e93b9a5623f3555f8e761d3.jpg",
    },
  ];

  return (
    <>
      <section id="featuredProducts" className="py-24 bg-eduIvory">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="text-4xl font-bold text-center mb-12">
              Sản phẩm tiêu biểu
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-10">
            {products.map((p, i) => (
              <Reveal key={i}>
                <div className="group" style={{ perspective: "1200px" }}>
                  <div
                    className="
                      relative
                      transition-transform duration-[1400ms] ease-[cubic-bezier(0.25,0.8,0.25,1)]
                      md:group-hover:[transform:rotateY(180deg)]
                    "
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* FRONT */}
                    <TiltCard
                      className="
                        cursor-pointer
                        md:cursor-default
                        h-full flex flex-col bg-white rounded-2xl shadow-md
                      "
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <div className="flex-1 flex items-center justify-center">
                        <Image
                          src={p.image}
                          alt={p.name}
                          width={420}
                          height={420}
                          className="h-56 object-contain"
                        />
                      </div>

                      <div className="p-6 text-center">
                        <h3 className="font-bold mb-2">{p.name}</h3>
                        <p className="text-zooPink font-extrabold mb-4">
                          {p.price}
                        </p>

                        {/* MOBILE BUTTON */}
                        <button
                          className="md:hidden w-full text-white py-3 rounded-xl
                          bg-[linear-gradient(90deg,#FF6EC7,#FFD166)]"
                          onClick={() => setActiveProduct(p)}
                        >
                          Xem chi tiết
                        </button>
                      </div>
                    </TiltCard>

                    {/* BACK (DESKTOP) */}
                    <div
                      className="
                        hidden md:flex absolute inset-0 bg-white rounded-2xl
                        p-8 flex-col justify-center text-center
                      "
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                    >
                      <h3 className="font-bold mb-4">{p.name}</h3>
                      <p className="text-eduGray mb-6">{p.desc}</p>

                      <button
                        className="mt-auto text-white py-3 rounded-xl
                        bg-[linear-gradient(90deg,#FF6EC7,#FFD166)]"
                      >
                        Nhận tư vấn ngay
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MOBILE MODAL */}
      {activeProduct && (
        <ProductModal
          product={activeProduct}
          onClose={() => setActiveProduct(null)}
        />
      )}
    </>
  );
}
