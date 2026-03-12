import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { CoreValues } from "@/components/home/CoreValues";
import { AboutSection } from "@/components/home/AboutSection";
import { CampusTour } from "@/components/home/CampusTour";
import { EventsNews } from "@/components/home/EventsNews";
import { Testimonials } from "@/components/home/Testimonials";

export const metadata: Metadata = {
  title: "Beranda — STTB Bandung",
  description:
    "Sekolah Tinggi Teologi Bandung menghasilkan pastor-scholar yang berdampak dalam konteks pelayanan urban dengan keunggulan akademik dan pertumbuhan rohani.",
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CoreValues />
      <AboutSection />
      <CampusTour />
      <EventsNews />
      <Testimonials />
    </main>
  );
}
