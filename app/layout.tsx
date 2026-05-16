import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingSocialBar from "./components/FloatingSocialBar";

export const metadata: Metadata = {
  title: "Cosmetology School of Jersey City",
  description: "NJ State Board Approved cosmetology school offering five professional programs in Jersey City, New Jersey.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}<FloatingSocialBar /></main>
        <Footer />
      </body>
    </html>
  );
}
