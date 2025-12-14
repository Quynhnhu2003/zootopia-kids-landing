"use client";

import TiltCard from "@/animation/tiltCard";
import Reveal from "../../animation/reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const items = [
  {
    name: "Chị Lan – Phụ huynh bé 4 tuổi",
    text: "Đồ chơi an toàn, màu sắc đẹp. Bé nhà mình chơi mà không bị chán, vừa chơi vừa học rất hiệu quả.",
  },
  {
    name: "Anh Minh – Phụ huynh",
    text: "Sản phẩm đúng mô tả, chất liệu tốt và không có mùi. Mình khá yên tâm khi cho con sử dụng.",
  },
  {
    name: "Chị Thảo – Phụ huynh bé 5 tuổi",
    text: "Con mình rất thích bộ đồ chơi này, mỗi ngày đều chủ động lấy ra chơi mà không cần nhắc.",
  },
  {
    name: "Cô Hương – Giáo viên mầm non",
    text: "Đồ chơi phù hợp cho trẻ nhỏ, giúp các bé phát triển tư duy và khả năng phối hợp tay mắt.",
  },
  {
    name: "Anh Tuấn – Phụ huynh",
    text: "Thiết kế thông minh, giúp trẻ rèn luyện khả năng sáng tạo và tập trung tốt hơn.",
  },
  {
    name: "Chị Hạnh – Phụ huynh bé 3 tuổi",
    text: "Bé chơi rất hào hứng, đồ chơi chắc chắn và không có chi tiết sắc nhọn.",
  },
  {
    name: "Thầy Nam – Giáo viên",
    text: "Có thể sử dụng trong lớp học, hỗ trợ tốt cho các hoạt động phát triển kỹ năng sớm.",
  },
  {
    name: "Anh Quân – Phụ huynh",
    text: "Giao hàng nhanh, đóng gói cẩn thận. Sản phẩm thực tế đẹp hơn hình.",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <Reveal>
          <h3 className="text-3xl font-[var(--font-playfair)] font-bold mb-10">
            Đánh giá từ phụ huynh
          </h3>
        </Reveal>

        <Swiper
          modules={[Autoplay]}
          slidesPerView={1.2}
          spaceBetween={24}
          loop
          speed={7000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {items.map((it, i) => (
            <SwiperSlide key={i} className="h-auto">
            <div className="h-full">
              <TiltCard
                className="
                  h-full
                  p-8
                  bg-eduIvory
                  rounded-xl
                  flex
                  flex-col
                  justify-between
          
                  shadow-lg
                  hover:shadow-2xl
                  transition-all
                  duration-500
          
                  border
                  border-black/5
                "
              >
                {/* TEXT */}
                <p className="mb-6 text-eduGray text-base leading-relaxed line-clamp-4">
                  “{it.text}”
                </p>
          
                {/* AUTHOR */}
                <p className="font-semibold text-eduBlue">
                  {it.name}
                </p>
              </TiltCard>
            </div>
          </SwiperSlide>
          
          ))}
        </Swiper>
      </div>
    </section>
  );
}
