import type { ReactNode } from "react";

import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import "@/styles/globals.css";
import "lenis/dist/lenis.css";

import { Footer } from "@/components/layout/Footer";
import { GsapAnimations } from "@/components/layout/GsapAnimations";
import { LocationMap } from "@/components/layout/LocationMap";
import { Navbar } from "@/components/layout/Navbar";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Doner Factory | Premium Dining Experience",
  description:
    "A premium restaurant website scaffold built with Next.js for modern menu, story, and reservation experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="sv" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-background text-accent antialiased">
        <SmoothScroll>
          <div className="relative min-h-screen overflow-x-hidden">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,46,46,0.18),_transparent_32%),linear-gradient(180deg,_rgba(245,230,211,0.03)_0%,_rgba(15,15,15,0)_35%)]" />
            <Navbar />
            <main className="relative z-10">{children}</main>
            <LocationMap />
            <Footer />
            <GsapAnimations />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
