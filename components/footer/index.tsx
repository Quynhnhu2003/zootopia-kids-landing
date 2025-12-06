export default function Footer() {
  return (
    <footer id="contact" className="bg-transparent text-black py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-[var(--font-playfair)] text-xl font-bold">
          Zootopia<span className="text-zooPink">Kids</span>
          </h4>
          <p className="mt-2 text-sm text-black/80">
            Nền tảng đồ chơi giáo dục cao cấp cho trẻ em.
          </p>
        </div>

        <div>
          <h5 className="font-semibold mb-2">Liên hệ</h5>
          <p className="text-sm text-black/80">contact@zootopia_kid.vn</p>
          <p className="text-sm text-black/80">(+84) 123 456 789</p>
        </div>

        <div>
          <h5 className="font-semibold mb-2">Địa chỉ</h5>
          <p className="text-sm text-black/80">TP. Hồ Chí Minh, Việt Nam</p>
        </div>
      </div>

      <div className="text-center mt-8 text-sm text-black/70">
        © {new Date().getFullYear()} {' '}
        Zootopia<span className="text-zooPink">Kids</span>
      </div>
    </footer>
  );
}
