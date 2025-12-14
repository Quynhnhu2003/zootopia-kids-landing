import TiltCard from "@/animation/tiltCard";
import Reveal from "../../animation/reveal";
import Image from "next/image";

const products = [
  {
    name: "Bộ sưu tập thủ công Hiệp sĩ Tumbler Doll",
    price: "490.000đ",
    image:
      "https://i.pinimg.com/1200x/f0/3d/fb/f03dfb5b3e3e285e3f3aec619e1aacbc.jpg",
    tag: "Hot",
  },
  {
    name: "Children Cartoon Engineering Car Toy Cute Animal Inertia Push and Go Excavator Fire Truck Education Toys",
    price: "490.000đ",
    image:
      "https://i.pinimg.com/1200x/ea/9e/3a/ea9e3a51bf455ff499536ed58cf41363.jpg",
    tag: "New",
  },
  {
    name: "Mô hình xe máy điện tương tác sáng tạo",
    price: "350.000đ",
    image:
      "https://i.pinimg.com/1200x/8c/96/87/8c96873a914d16a07657d5573ac135b1.jpg",
    tag: "Best",
  },
  {
    name: "Construction Race Tracks Toy for Kids Truck Car Engineering Road Playset Interaction",
    price: "1.490.000đ",
    image:
      "https://i.pinimg.com/1200x/e2/b8/a7/e2b8a7ce3d29b40b7b354193f615f426.jpg",
    tag: "Hot",
  },
  {
    name: "Xe trộn bê tông đồ chơi tự quay",
    price: "690.000đ",
    image:
      "https://i.pinimg.com/1200x/68/bf/d0/68bfd03566a39feba7df296184a56e8e.jpg",
    tag: "New",
  },
  {
    name: "Xe tải đồ chơi chở đất nặng",
    price: "350.000đ",
    image:
      "https://i.pinimg.com/1200x/32/04/59/32045951bc58ed9d71fc0982bc3cd35c.jpg",
    tag: "Best",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-zooBlue/10">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <h2 className="text-4xl font-extrabold text-center mb-14 text-zooPurple">
            Đồ Chơi Nổi Bật
          </h2>
        </Reveal>

        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-10">
          {products.map((p, i) => (
            <Reveal key={i}>
              <TiltCard className="h-full flex flex-col bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                {/* TAG */}
                <span className="absolute top-4 left-4 bg-zooPink text-black text-xs font-semibold px-3 py-1 rounded-full shadow-md z-10">
                  {p.tag}
                </span>

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
                    Thêm vào giỏ
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
