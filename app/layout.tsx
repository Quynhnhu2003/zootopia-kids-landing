import LuxuryCursor from "@/animation/lightGlow";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "EduToys - Đồ chơi giáo dục cao cấp",
  description: "Nền tảng đồ chơi giáo dục chuẩn quốc tế cho trẻ em",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="vi" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-eduIvory text-eduNavy font-(--font-inter)">
        <LuxuryCursor />
        {children}
      </body>
    </html>
  );
}
