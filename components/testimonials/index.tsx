import TiltCard from "@/animation/tiltCard";
import Reveal from "../../animation/reveal";

export default function Testimonials() {
  const items = [
    {
      name: "Chị Lan – Phụ huynh",
      text: "Chất lượng rất tốt, con tôi học tiến bộ rõ rệt.",
    },
    {
      name: "Anh Minh – Phụ huynh",
      text: "Tư vấn chuyên nghiệp, sản phẩm đúng chuẩn giáo dục.",
    },
    {
      name: "Cô Hương – Giáo viên mầm non",
      text: "Phù hợp cho chương trình giảng dạy sớm.",
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-white">
      <div id="reviews-sentinel" className="max-w-5xl mx-auto text-center px-6">
        <Reveal>
          <h3 className="text-3xl font-[var(--font-playfair)] font-bold mb-10">
            Đánh giá từ phụ huynh
          </h3>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 0.15}>
              <TiltCard className="p-8 bg-eduIvory">
                <p className="mb-4 text-eduGray">“{it.text}”</p>
                <p className="font-semibold">{it.name}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
