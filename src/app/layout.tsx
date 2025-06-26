import type { Metadata } from "next";
import {Heebo} from "next/font/google"
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./responsive.css"

const heebo = Heebo({subsets:["latin"], weight:["400","700"]})

export const metadata: Metadata = {
  title: "Shahab",
  description: "Frontend Developer building modern, responsive websites using HTML, CSS, JavaScript, React, and Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={heebo.className}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
