import { Libre_Caslon_Text } from "next/font/google";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const libre = Libre_Caslon_Text({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-display",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${libre.variable} ${hanken.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
