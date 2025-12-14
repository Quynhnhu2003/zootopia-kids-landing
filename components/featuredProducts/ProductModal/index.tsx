/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";

interface Props {
  product: any;
  onClose: () => void;
}

function ProductModal({
  product,
  onClose,
}: Props) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-10 w-[90%] max-w-md bg-white rounded-3xl p-6 animate-scaleIn">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="w-full h-52 object-contain mb-4"
        />

        <h3 className="text-xl font-bold text-eduNavy mb-2">{product.name}</h3>

        <p className="text-zooPink font-extrabold mb-4">{product.price}</p>

        <p className="text-eduGray leading-relaxed mb-6">{product.desc}</p>

        <button
          className="w-full text-white font-bold py-3 rounded-2xl
          bg-[linear-gradient(90deg,#FF6EC7,#FFD166)]"
        >
          Nhận tư vấn ngay
        </button>

        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl text-gray-400"
        >
          ×
        </button>
      </div>
    </div>
  );
}

export default ProductModal;