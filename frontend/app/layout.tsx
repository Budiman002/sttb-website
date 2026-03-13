import type { Metadata } from "next";
import {
  Playfair_Display,
  DM_Serif_Display,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ConditionalPublicLayout } from "@/components/layout/ConditionalPublicLayout";

// STTB Brand Fonts
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "STTB Bandung — Sekolah Tinggi Teologi Bandung",
  description:
    "Sekolah Tinggi Teologi Bandung - Institusi pendidikan teologi terkemuka yang berkomitmen untuk keunggulan dalam pendidikan teologi dan pelayanan gerejawi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={cn(
        "font-body",
        playfairDisplay.variable,
        dmSerifDisplay.variable,
        plusJakartaSans.variable,
      )}
    >
      <body className="antialiased">
        <ConditionalPublicLayout>{children}</ConditionalPublicLayout>
      </body>
    </html>
  );
}
