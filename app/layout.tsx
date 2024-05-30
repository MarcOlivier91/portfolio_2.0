import type { Metadata } from "next"
import Header from "@/components/header"
import { Inter } from "next/font/google"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marc's Portfolio",
  description: "Portfolio de Marc-Olivier",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-sky-50 text-[#0D1F2D] relative`}>
        <div className="bg-[#77B6EA] absolute top-[-6rem] right-[11rem] h-[31.24rem] w-[31.24rem] rounded-full blur-[10rem] -z-10 sm:w-[68.75rem]"></div>
        <div className="bg-[#D6C9C9] absolute top-[-6rem] left-[11rem] h-[55.24rem] w-[55.24rem] rounded-full blur-[10rem] -z-10 sm:w-[68.75rem]"></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
