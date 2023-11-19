import "./globals.css";
import { Inter } from "next/font/google";
import favicon from "@/app/favicon.png";
import image from "@/app/PERFIL.jpg";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alejandro Morales | Portafolio Digital",
  description:
    "  Alejandro Morales es un apasionado desarrollador fullstack, dedicado a crear experiencias web atractivas y transformar ideas creativas en aplicaciones funcionales y eficientes. ",
  icons: {
    icon: `${favicon.src}`,
  },
  openGraph: {
    type: "website",
    locale: "es",
    title: "Alejandro Morales | Portafolio Digital",
    description:
      "Alejandro morales es un apasionado Desarrollador FullStack, dedicado a crear experiencias web atractivas y transformar ideas creativas en aplicaciones funcionales y eficientes. ",
    image: `${favicon.src}`,
    site_name: "Alejandro Morales | Portafolio Digital",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
