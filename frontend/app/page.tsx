import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { CoreValues } from "@/components/home/CoreValues";
import { AboutSection } from "@/components/home/AboutSection";
import { CampusTour } from "@/components/home/CampusTour";
import { EventsNews } from "@/components/home/EventsNews";
import { Testimonials } from "@/components/home/Testimonials";
import { getKegiatanList } from "@/lib/api";
import type { KegiatanListItem } from "@/types/api";

export const metadata: Metadata = {
  title: "Beranda — STTB Bandung",
  description:
    "Sekolah Tinggi Teologi Bandung menghasilkan pastor-scholar yang berdampak dalam konteks pelayanan urban dengan keunggulan akademik dan pertumbuhan rohani.",
};

export default async function HomePage() {
  // Fetch latest 3 kegiatan for homepage
  let kegiatanList: KegiatanListItem[] = [];
  try {
    const response = await getKegiatanList(1, 3);
    kegiatanList = response.items;
  } catch (error) {
    console.error("Failed to fetch kegiatan list:", error);
    // Empty array will trigger empty state in EventsNews component
  }

  return (
    <main>
      <Hero />
      <CoreValues />
      <AboutSection />
      <CampusTour />
      <EventsNews kegiatanList={kegiatanList} />
      <Testimonials />
    </main>
  );
}
