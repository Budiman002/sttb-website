"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const SIDEBAR_ITEMS = [
  {
    id: "tahap1",
    num: "TAHAP 1",
    title: "Memperoleh Formulir",
    subtitle: "Pendaftaran Awal",
  },
  {
    id: "tahap2",
    num: "TAHAP 2",
    title: "Isi Form & Berkas",
    subtitle: "Persiapan Dokumen",
  },
  {
    id: "tahap3",
    num: "TAHAP 3",
    title: "Bayar Biaya Daftar",
    subtitle: "Konfirmasi Pembayaran",
  },
  {
    id: "tahap4",
    num: "TAHAP 4",
    title: "Ikuti Tes Seleksi",
    subtitle: "5 Tes Online",
  },
  {
    id: "tahap5",
    num: "TAHAP 5",
    title: "Pengumuman &",
    subtitle: "Konfirmasi MABA",
  },
];

export function ProsedurSidebar() {
  const [activeSection, setActiveSection] = useState("tahap1");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const { id } of SIDEBAR_ITEMS) {
        const el = document.getElementById(id);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const offsetPosition =
        el.getBoundingClientRect().top + window.pageYOffset - 120;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="rounded-lg border-r border-gray-200 bg-white">
      {SIDEBAR_ITEMS.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className={cn(
            "w-full border-l-4 px-6 py-4 text-left transition-all",
            activeSection === item.id
              ? "border-sttb-navy-dark bg-[#E8F0FB]"
              : "border-transparent bg-white",
          )}
        >
          <p className="mb-1 font-body text-[11px] font-bold text-sttb-red">
            {item.num}
          </p>
          <h4 className="font-heading text-[15px] font-bold text-sttb-navy-dark">
            {item.title}
          </h4>
          <p className="font-body text-xs text-[#6B7A99]">{item.subtitle}</p>
        </button>
      ))}
    </div>
  );
}
