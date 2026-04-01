import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "700"] });

export const metadata: Metadata = {
  title: "Manish Bollikonda | Creative Developer",
  description: "High-end scrollytelling portfolio of Manish Bollikonda, Creative Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#121212] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
