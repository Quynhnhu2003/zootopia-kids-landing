'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const sections = [
  { id: 'program', label: 'Chương trình' },
  { id: 'featuredProducts', label: 'Nổi bật' },
  { id: 'products', label: 'Sản phẩm' },
  { id: 'reviews', label: 'Đánh giá' },
];

export default function Navbar() {
  // ** State
  const [active, setActive] = useState<string>('program');
  const [scrolled, setScrolled] = useState(false);

  // ** Function
  const scrollToSection = (id: string) => {
    setActive(id); // ✅ cập nhật underline NGAY khi click
  
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
    // ✅ 1. Scroll listener cho navbar blur
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
  
    window.addEventListener('scroll', handleScroll);
  
    // ✅ 2. IntersectionObserver bắt underline
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: '0px 0px -40% 0px', // ✅ QUAN TRỌNG: cho phép section cuối active
        threshold: 0.2,
      }
    );
  
    sections.forEach((sec) => {
      const el =
        sec.id === 'reviews'
          ? document.getElementById('reviews-sentinel')
          : document.getElementById(sec.id);
    
      if (el) observer.observe(el);
    });    
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);  

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled
          ? 'bg-white/70 backdrop-blur-xl shadow-md'
          : 'bg-transparent'}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 h-[80px] flex items-center justify-between">
        {/* LOGO */}
        <div className="font-black text-xl text-eduBlue">
          Zootopia<span className="text-zooPink">Kids</span>
        </div>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-10 text-eduGray font-medium relative">
          {sections.map((item) => (
            <div key={item.id} className="relative">
              <button
                onClick={() => scrollToSection(item.id)}
                className={`transition-all duration-300
                  ${
                    active === item.id
                      ? 'text-eduBlue font-semibold'
                      : 'hover:text-eduBlue'
                  }
                `}
              >
                {item.label}
              </button>

              {/* ✅ UNDERLINE ANIMATION */}
              {active === item.id && (
                <motion.div
                  layoutId="vip-underline"
                  className="absolute -bottom-2 left-0 right-0 h-[3px] rounded-full
                    bg-[linear-gradient(90deg,#FF6EC7,#FFD166)]"
                />
              )}
            </div>
          ))}
        </nav>

        {/* CTA BUTTON */}
        <button
          onClick={() => scrollToSection('contact')}
          className="hidden md:block px-6 py-2 rounded-2xl text-white font-bold shadow-lg
            bg-[linear-gradient(90deg,#FF6EC7,#FFD166)]
            hover:scale-105 transition-transform"
        >
          Đăng ký ngay
        </button>
      </div>
    </motion.header>
  );
}
