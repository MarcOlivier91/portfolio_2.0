import type { Metadata } from "next"
import Header from "@/components/header"
import { Inter } from "next/font/google"
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";

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
    <html lang="en" className="!scroll-smooth duration-200">
      <body className={`${inter.className} bg-sky-50 text-[#0D1F2D] relative pt-24 sm:pt-32`}>
        <div className="bg-[#77B6EA] absolute top-[-6rem] right-[11rem] h-[31.24rem] w-[31.24rem] rounded-full blur-[10rem] -z-10 sm:w-[15.75rem] sm:h-[30.75]"></div>
        <div className="bg-[#D6C9C9] absolute top-[-6rem] left-[11rem] h-[55.24rem] w-[55.24rem] rounded-full blur-[10rem] -z-10 sm:w-[15.75rem] sm:h-[30.75]"></div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
