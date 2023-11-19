import "./globals.css";
import { Inter } from "next/font/google";
import favicon from "@/app/favicon.png";
import image from "@/app/PERFIL.jpg";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alejandro Morales | Portafolio Digital",
  description:
    "  Alejandro morales es un apasionado Desarrollador FullStack, dedicado a crear experiencias web atractivas y transformar ideas creativas en aplicaciones funcionales y eficientes. ",
  icons: {
    icon: `${favicon.src}`,
  },
  openGraph: {
    type: "website",
    locale: "es",
    url: "https://alejandromorales.vercel.app/",
    title: "Alejandro Morales | Portafolio Digital",
    description:
      "  Alejandro morales es un apasionado Desarrollador FullStack, dedicado a crear experiencias web atractivas y transformar ideas creativas en aplicaciones funcionales y eficientes. ",
    image: `${image.src}`,
    site_name: "Alejandro Morales | Portafolio Digital",
    imageWidth: 1200,
    imageHeight: 1200,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
