import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, GraduationCap, Target, Heart, BookOpen, Users } from "lucide-react";
import { MagisterMinistriTeologiPelayananGerejawiAccordion } from "@/components/akademik/MagisterMinistriTeologiPelayananGerejawiAccordion";

export const metadata: Metadata = {
  title: "Magister Ministri — Teologi Pelayanan Gerejawi (M.Min.) — STTB Bandung",
  description:
    "Program Magister Ministri Teologi Pelayanan Gerejawi STTB untuk memperlengkapi pelayan gereja dengan fondasi Teologi Reformed yang mendalam. 65 SKS, 2,5 tahun, gelar M.Min.",
};

const REQUIREMENTS = [
  "Minimal lulusan S1 Teologi (STT terakreditasi).",
  "Sudah baptis dewasa/sidi.",
  "Aktif terlibat pelayanan di gereja/lembaga pelayanan minimal 2 tahun.",
  "Menyerahkan book review.",
  "Memenuhi syarat dan prosedur admisi STTB.",
];

const SYSTEM_ITEMS = [
  "Perkuliahan dilakukan pada akhir pekan. Satu akhir pekan senilai 1–2 SKS.",
  "Kuliah Online: Jumat malam (18.00–21.00) dan Sabtu sore (16.00–19.00).",
  "Kuliah Onsite: Jumat malam (18.00–21.00) dan Sabtu pagi–sore (08.30–16.30).",
  "Dalam 1 semester rata-rata terdapat 3 mata kuliah online dan 1 mata kuliah onsite di kampus STTB.",
];

const CURRICULUM_CATEGORIES_ROW1 = [
  {
    title: "Fondasi Biblika",
    sks: "9 SKS",
    description: "PL Taurat, PB Injil, Hermeneutika",
  },
  {
    title: "Fondasi Historika",
    sks: "12 SKS",
    description: "Allah & Penciptaan, Kristus, Roh Kudus, Sejarah Gereja",
  },
  {
    title: "Mata Kuliah Inti",
    sks: "11 SKS",
    description: "Spiritualitas, Pemuridan, Misi, & Kepemimpinan",
  },
  {
    title: "Mata Kuliah Konsentrasi",
    sks: "23 SKS",
    description: "PL, PB, Homiletika, Ibadah, Bahasa Biblika",
  },
];

const CURRICULUM_CATEGORY_BOTTOM = {
  title: "Tugas Akhir & Mentoring",
  sks: "10 SKS",
  description: "Mentoring Akademik, Penulisan, & Praktik Pelayanan",
};

export default function MagisterMinistriTeologiPelayananGerejawiPage() {
  return (
    <main>
      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[92vh]">
          {/* Left Column — Content */}
          <div
            className="relative flex items-center px-8 lg:px-16 xl:px-24 py-20 lg:py-28"
            style={{ background: "linear-gradient(135deg, #00276B 0%, #003F8A 100%)" }}
          >
            <div className="max-w-2xl">
              <p
                className="uppercase font-bold mb-6 font-body"
                style={{ fontSize: "13px", color: "#C41E3A", letterSpacing: "0.15em" }}
              >
                PROGRAM PASCASARJANA
              </p>

              <h1 className="mb-8">
                <span
                  className="block mb-2 font-display italic text-white"
                  style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 400, lineHeight: 1.15 }}
                >
                  Magister Ministri
                </span>
                <span
                  className="block font-heading text-white"
                  style={{ fontSize: "clamp(28px, 4.5vw, 58px)", fontWeight: 700, lineHeight: 1.05 }}
                >
                  TEOLOGI PELAYANAN GEREJAWI
                </span>
              </h1>

              <p
                className="mb-8 font-body"
                style={{
                  fontSize: "18px",
                  color: "rgba(255,255,255,0.95)",
                  lineHeight: 1.75,
                  maxWidth: "580px",
                }}
              >
                Program studi ini dirancang untuk memperlengkapi para pelayan gereja
                dengan fondasi teologi yang mendalam dan keterampilan pelayanan yang
                komprehensif guna melayani gereja dan masyarakat secara transformatif.
              </p>

              <p
                className="mb-10 px-4 py-3 rounded-md font-body italic"
                style={{
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.85)",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  maxWidth: "540px",
                }}
              >
                Program ini beserta 2 tahun berikutnya di tahap M.Th. memiliki
                karakteristik M.Div. plus.
              </p>

              <div className="flex flex-wrap gap-4">
                <span
                  className="px-6 py-3 rounded-lg font-body font-bold text-white text-sm"
                  style={{ background: "#C41E3A" }}
                >
                  Gelar: M.Min.
                </span>
                <span
                  className="px-6 py-3 rounded-lg font-body font-bold text-white text-sm"
                  style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}
                >
                  65 SKS
                </span>
                <span
                  className="px-6 py-3 rounded-lg font-body font-bold text-white text-sm"
                  style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}
                >
                  2,5 Tahun
                </span>
              </div>
            </div>
          </div>

          {/* Right Column — Image */}
          <div className="relative min-h-[400px] overflow-hidden">
            <Image
              src="/images/Akademik/Magister-ministri-teologo-pelayanan-gerejawi.png"
              alt="Magister Ministri Teologi Pelayanan Gerejawi STTB"
              fill
              className="object-cover object-center"
              priority
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(0,39,107,0.3) 0%, rgba(0,39,107,0.1) 50%, transparent 100%)",
              }}
            />
          </div>
        </div>
      </section>

      {/* SECTION 2 — PROFIL LULUSAN */}
      <section className="py-20 lg:py-28" style={{ background: "#F8F7F4" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <p
              className="uppercase font-bold mb-4 font-body"
              style={{ fontSize: "13px", color: "#C41E3A", letterSpacing: "0.12em" }}
            >
              PROFIL LULUSAN
            </p>
            <h2
              className="mb-6 font-heading"
              style={{
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 700,
                color: "#00276B",
                lineHeight: 1.2,
              }}
            >
              <em>Transformative Church Minister</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Informed */}
            <div
              className="p-8 rounded-2xl"
              style={{ background: "#FFFFFF", boxShadow: "0 4px 20px rgba(0,39,107,0.08)" }}
            >
              <div
                className="flex items-center justify-center w-14 h-14 rounded-full mb-6"
                style={{ background: "#E8F0FB" }}
              >
                <BookOpen className="w-7 h-7" style={{ color: "#0056B3" }} />
              </div>
              <h3
                className="mb-4 font-heading"
                style={{ fontSize: "24px", fontWeight: 700, color: "#00276B" }}
              >
                Informed
              </h3>
              <p className="font-body" style={{ fontSize: "16px", color: "#6B7A99", lineHeight: 1.7 }}>
                Pelayan gereja yang memiliki fondasi biblikal-teologis yang kokoh
                serta pemahaman yang mendalam tentang Firman Tuhan dan doktrin
                Kristen Reformed untuk mengemban panggilan pelayanan.
              </p>
            </div>

            {/* Transformed */}
            <div
              className="p-8 rounded-2xl"
              style={{ background: "#FFFFFF", boxShadow: "0 4px 20px rgba(0,39,107,0.08)" }}
            >
              <div
                className="flex items-center justify-center w-14 h-14 rounded-full mb-6"
                style={{ background: "#FDEAEA" }}
              >
                <Heart className="w-7 h-7" style={{ color: "#C41E3A" }} />
              </div>
              <h3
                className="mb-4 font-heading"
                style={{ fontSize: "24px", fontWeight: 700, color: "#00276B" }}
              >
                Transformed
              </h3>
              <p className="font-body" style={{ fontSize: "16px", color: "#6B7A99", lineHeight: 1.7 }}>
                Pelayan gereja yang hidupnya mengalami transformasi dan tumbuh
                secara nyata dalam spiritualitas yang utuh, menjadi teladan bagi
                jemaat yang dilayaninya.
              </p>
            </div>

            {/* Transformative */}
            <div
              className="p-8 rounded-2xl"
              style={{ background: "#FFFFFF", boxShadow: "0 4px 20px rgba(0,39,107,0.08)" }}
            >
              <div
                className="flex items-center justify-center w-14 h-14 rounded-full mb-6"
                style={{ background: "#E8F0FB" }}
              >
                <Users className="w-7 h-7" style={{ color: "#0056B3" }} />
              </div>
              <h3
                className="mb-4 font-heading"
                style={{ fontSize: "24px", fontWeight: 700, color: "#00276B" }}
              >
                Transformative
              </h3>
              <p className="font-body" style={{ fontSize: "16px", color: "#6B7A99", lineHeight: 1.7 }}>
                Pelayan gereja yang tumbuh dalam semangat dan kompetensi untuk
                membawa transformasi bagi gereja dan masyarakat melalui pelayanan
                yang autentik dan berdampak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — DETAIL PROGRAM */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Left — Informasi Program (7 cols) */}
            <div className="lg:col-span-7">
              <h2
                className="mb-12 font-heading"
                style={{
                  fontSize: "clamp(32px, 4vw, 48px)",
                  fontWeight: 700,
                  color: "#00276B",
                  lineHeight: 1.2,
                }}
              >
                Informasi Program
              </h2>

              <div className="space-y-8">
                {/* Jumlah Kredit */}
                <div className="border-l-4 pl-6" style={{ borderColor: "#C41E3A" }}>
                  <div className="flex items-center gap-3 mb-2">
                    <GraduationCap className="w-6 h-6" style={{ color: "#C41E3A" }} />
                    <span
                      className="font-body font-bold uppercase"
                      style={{ fontSize: "14px", letterSpacing: "0.08em", color: "#C41E3A" }}
                    >
                      Jumlah Kredit
                    </span>
                  </div>
                  <p
                    className="font-body font-semibold"
                    style={{ fontSize: "20px", color: "#1A2340" }}
                  >
                    65 SKS
                  </p>
                  <p
                    className="font-body mt-1"
                    style={{ fontSize: "14px", color: "#9CA3AF", fontStyle: "italic" }}
                  >
                    *Bagi lulusan S1 Teologi, 15 SKS Fondasi dapat ditransfer.
                  </p>
                </div>

                {/* Masa Studi */}
                <div className="border-l-4 pl-6" style={{ borderColor: "#0056B3" }}>
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-6 h-6" style={{ color: "#0056B3" }} />
                    <span
                      className="font-body font-bold uppercase"
                      style={{ fontSize: "14px", letterSpacing: "0.08em", color: "#0056B3" }}
                    >
                      Masa Studi
                    </span>
                  </div>
                  <p className="font-body" style={{ fontSize: "18px", color: "#1A2340", lineHeight: 1.6 }}>
                    2,5 Tahun (Mulai Agustus / Semester Ganjil)
                  </p>
                </div>

                {/* Persyaratan */}
                <div className="border-l-4 pl-6" style={{ borderColor: "#00276B" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <Target className="w-6 h-6" style={{ color: "#00276B" }} />
                    <span
                      className="font-body font-bold uppercase"
                      style={{ fontSize: "14px", letterSpacing: "0.08em", color: "#00276B" }}
                    >
                      Persyaratan Admisi
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {REQUIREMENTS.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span style={{ color: "#C41E3A", fontSize: "18px", lineHeight: 1 }}>•</span>
                        <span
                          className="font-body"
                          style={{ fontSize: "16px", color: "#6B7A99", lineHeight: 1.6 }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right — Sistem Perkuliahan (5 cols) */}
            <div className="lg:col-span-5 p-10 rounded-2xl" style={{ background: "#F8F7F4" }}>
              <h3
                className="mb-4 font-heading"
                style={{ fontSize: "28px", fontWeight: 700, color: "#00276B" }}
              >
                Sistem Perkuliahan
              </h3>
              <p
                className="mb-6 font-body"
                style={{ fontSize: "15px", color: "#6B7A99", lineHeight: 1.6 }}
              >
                Dirancang khusus untuk para pelayan gereja. Mahasiswa yang telah
                diterima dapat mulai kuliah di bulan Agustus (Ganjil) atau Januari
                (Genap). Kuliah dalam bentuk <strong>block teaching</strong> secara
                daring dan luring.
              </p>
              <ul className="space-y-4">
                {SYSTEM_ITEMS.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1"
                      style={{ background: "#C41E3A" }}
                    >
                      <span className="font-body font-bold text-white" style={{ fontSize: "12px" }}>
                        {idx + 1}
                      </span>
                    </div>
                    <span
                      className="font-body"
                      style={{ fontSize: "15px", color: "#1A2340", lineHeight: 1.7 }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p
                className="mt-6 font-body italic"
                style={{ fontSize: "12px", color: "#9CA3AF" }}
              >
                *Kelas dapat bergabung bersama M.Min. Marketplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — STRUKTUR KURIKULUM */}
      <section
        className="py-20 lg:py-28"
        style={{ background: "linear-gradient(135deg, #00276B 0%, #003F8A 100%)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <p
              className="uppercase font-bold mb-4 font-body"
              style={{ fontSize: "13px", color: "#C41E3A", letterSpacing: "0.12em" }}
            >
              STRUKTUR PROGRAM
            </p>
            <h2
              className="font-heading text-white"
              style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700 }}
            >
              Kategori Mata Kuliah
            </h2>
          </div>

          {/* Row 1 — 4 columns */}
          <div className="grid md:grid-cols-4 gap-6">
            {CURRICULUM_CATEGORIES_ROW1.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl flex flex-col items-center text-center"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <div
                  className="inline-block px-4 py-2 rounded-full mb-4 font-body font-bold text-white text-sm"
                  style={{ background: "#C41E3A" }}
                >
                  {cat.sks}
                </div>
                <h3
                  className="mb-2 font-heading text-white"
                  style={{ fontSize: "18px", fontWeight: 700 }}
                >
                  {cat.title}
                </h3>
                <p
                  className="font-body"
                  style={{ fontSize: "13px", color: "rgba(255,255,255,0.85)", lineHeight: 1.5 }}
                >
                  {cat.description}
                </p>
              </div>
            ))}
          </div>

          {/* Row 2 — 1 centered */}
          <div className="mt-6 flex justify-center">
            <div
              className="p-6 rounded-xl flex flex-col items-center text-center w-full max-w-sm"
              style={{
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <div
                className="inline-block px-4 py-2 rounded-full mb-4 font-body font-bold text-white text-sm"
                style={{ background: "#C41E3A" }}
              >
                {CURRICULUM_CATEGORY_BOTTOM.sks}
              </div>
              <h3
                className="mb-2 font-heading text-white"
                style={{ fontSize: "18px", fontWeight: 700 }}
              >
                {CURRICULUM_CATEGORY_BOTTOM.title}
              </h3>
              <p
                className="font-body"
                style={{ fontSize: "13px", color: "rgba(255,255,255,0.85)", lineHeight: 1.5 }}
              >
                {CURRICULUM_CATEGORY_BOTTOM.description}
              </p>
            </div>
          </div>

          <div className="mt-10 text-center space-y-2">
            <p
              className="font-body italic"
              style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)" }}
            >
              *Total beban studi keseluruhan adalah 65 SKS
            </p>
            <p
              className="font-body italic"
              style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)" }}
            >
              *Mata Kuliah Fondasi (15 SKS) transfer dari S1 Teologi
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5 — DETAIL MATA KULIAH (accordion — client component) */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <p
              className="uppercase font-bold mb-4 font-body"
              style={{ fontSize: "13px", color: "#C41E3A", letterSpacing: "0.12em" }}
            >
              SILABUS
            </p>
            <h2
              className="mb-6 font-heading"
              style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, color: "#00276B" }}
            >
              Silabus Program M.Min.
            </h2>
            <p
              className="max-w-3xl mx-auto font-body"
              style={{ fontSize: "18px", color: "#6B7A99", lineHeight: 1.7 }}
            >
              Pelajari lebih detail kurikulum yang dirancang untuk memperlengkapi
              pelayan gereja dengan fondasi teologi yang mendalam dan keterampilan
              pelayanan yang komprehensif.
            </p>
          </div>

          <MagisterMinistriTeologiPelayananGerejawiAccordion />
        </div>
      </section>

      {/* SECTION 6 — CTA */}
      <section className="py-20 lg:py-24" style={{ background: "#F8F7F4" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16 text-center">
          <h2
            className="mb-6 font-display italic"
            style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 700,
              color: "#00276B",
              lineHeight: 1.2,
            }}
          >
            Diperlengkapi untuk Melayani Gereja dan Dunia
          </h2>
          <p
            className="mb-10 max-w-2xl mx-auto font-body"
            style={{ fontSize: "18px", color: "#6B7A99", lineHeight: 1.7 }}
          >
            Bergabunglah dengan program Magister Ministri Teologi Pelayanan Gerejawi
            STTB dan jadilah pelayan gereja yang transformatif.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/admisi/pendaftaran-online"
              className="px-10 py-4 rounded-lg font-bold font-body text-base text-white transition-all shadow-lg hover:shadow-xl"
              style={{ background: "#C41E3A" }}
            >
              Daftar Sekarang →
            </Link>
            <Link
              href="/admisi/info-persyaratan"
              className="px-10 py-4 rounded-lg font-bold font-body text-base transition-all hover:bg-gray-50"
              style={{ color: "#00276B", background: "#FFFFFF", border: "2px solid #00276B" }}
            >
              Info Persyaratan
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
