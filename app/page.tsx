import Achievements from "@/components/achievements";
import Banner from "@/components/banner";
import FeaturedProducts from "@/components/featuredProducts";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Products from "@/components/products";
import Testimonials from "@/components/testimonials";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Banner />
      <Achievements />
      <FeaturedProducts />
      <Products />
      <Testimonials />
      <Footer />
    </main>
  );
}
