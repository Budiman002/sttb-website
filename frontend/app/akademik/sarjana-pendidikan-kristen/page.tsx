import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Clock, GraduationCap, Target, Heart, TrendingUp } from "lucide-react";
import { SarjanaPendidikanKristenAccordion } from "@/components/akademik/SarjanaPendidikanKristenAccordion";

export const metadata: Metadata = {
  title: "Sarjana Pendidikan Kristen (S.Pd.) — STTB Bandung",
  description:
    "Program studi Sarjana Pendidikan Kristen STTB untuk memperlengkapi pendidik Kristen di sekolah, gereja, dan lembaga pelayanan. 145 SKS, 4 tahun, gelar S.Pd.",
};

const REQUIREMENTS = [
  "Minimal lulusan SMA / sederajat",
  "Sudah baptis dewasa/sidi",
  "Pernah terlibat pelayanan gerejawi / lembaga Kristen",
  "Memiliki panggilan yang jelas sebagai pendidik Kristen penuh waktu",
  "Memenuhi prosedur admisi STTB",
];

const SYSTEM_ITEMS = [
  "Kuliah dimulai pada bulan Agustus (Semester Ganjil)",
  "Perkuliahan dilakukan secara blok teaching selama 3 minggu diikuti dengan minggu pengerjaan tugas",
  "Satu semester terdiri dari 15x pertemuan (kuliah & evaluasi)",
  "Perkuliahan berlangsung selama 6 semester dilanjut praktik pelayanan 1 tahun",
  "Mahasiswa yang belum menikah wajib tinggal di asrama",
  "Wajib menjalani praktik 3 bulan, praktik 1 tahun, Youth Camp, dan MEET di sekolah/gereja/lembaga mitra",
];

const CURRICULUM_CATEGORIES_TOP = [
  {
    title: "Dasar Umum",
    sks: "12 SKS",
    description:
      "Pancasila, Bahasa Indonesia & Inggris Teologi, Psikologi Perkembangan, Penulisan",
  },
  {
    title: "Studi Biblika",
    sks: "29 SKS",
    description:
      "Studi PL, Studi PB, Bahasa Ibrani & Yunani, Hermeneutika Biblika",
  },
  {
    title: "Studi Teologi",
    sks: "20 SKS",
    description:
      "Prolegomena, Doktrin Allah, Kristus, Roh Kudus, Gereja, Etika, Apologetika",
  },
  {
    title: "Sejarah & Budaya",
    sks: "3 SKS",
    description: "Sejarah dan Filosofi Pendidikan Kristen",
  },
];

const CURRICULUM_CATEGORIES_BOTTOM = [
  {
    title: "Pendidikan & Praktika",
    sks: "65 SKS",
    description:
      "Asuhan Kristen, Homiletika, Konseling, Pemuridan, Kurikulum, Micro Teaching",
  },
  {
    title: "Praktik Lapangan",
    sks: "9 SKS",
    description: "Pelayanan Media, Akhir Pekan, Misi, dan Praktik 1 Tahun (PPL)",
  },
  {
    title: "Tugas Akhir",
    sks: "7 SKS",
    description: "Artikel Jurnal & Proyek Merancang Program Pembinaan",
  },
];

export default function SarjanaPendidikanKristenPage() {
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
                PROGRAM SARJANA
              </p>

              <h1 className="mb-8">
                <span
                  className="block mb-2 font-display italic text-white"
                  style={{ fontSize: "clamp(42px, 6vw, 68px)", fontWeight: 400, lineHeight: 1.15 }}
                >
                  Sarjana
                </span>
                <span
                  className="block font-heading text-white"
                  style={{ fontSize: "clamp(46px, 6.5vw, 82px)", fontWeight: 700, lineHeight: 0.95 }}
                >
                  PENDIDIKAN KRISTEN
                </span>
              </h1>

              <p
                className="mb-12 font-body"
                style={{
                  fontSize: "18px",
                  color: "rgba(255,255,255,0.95)",
                  lineHeight: 1.75,
                  maxWidth: "580px",
                }}
              >
                Program studi ini ditujukan untuk memperlengkapi mereka yang
                terpanggil menjadi pendidik Kristen yang akan melayani di
                sekolah, gereja, maupun di lembaga pelayanan lainnya, dalam
                konteks urban.
              </p>

              <div className="flex flex-wrap gap-4">
                <span
                  className="px-6 py-3 rounded-lg font-body font-bold text-white text-sm"
                  style={{ background: "#C41E3A" }}
                >
                  Gelar: S.Pd.
                </span>
                <span
                  className="px-6 py-3 rounded-lg font-body font-bold text-white text-sm"
                  style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}
                >
                  145 SKS
                </span>
                <span
                  className="px-6 py-3 rounded-lg font-body font-bold text-white text-sm"
                  style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}
                >
                  4 Tahun
                </span>
              </div>
            </div>
          </div>

          {/* Right Column — Image */}
          <div className="relative min-h-[400px] overflow-hidden">
            <Image
              src="/images/Akademik/Pendidikan-Kristen.png"
              alt="Sarjana Pendidikan Kristen STTB"
              fill
              className="object-cover object-center"
              priority
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(0,39,107,0.25) 0%, transparent 40%)",
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
              <em>Transformative Educator</em>
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
                Pendidik Kristen yang berpengetahuan luas dan aplikatif terhadap
                tantangan perkembangan dunia pendidikan.
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
                Pembelajar yang memiliki fondasi spiritualitas yang kokoh dan
                matang.
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
                <TrendingUp className="w-7 h-7" style={{ color: "#0056B3" }} />
              </div>
              <h3
                className="mb-4 font-heading"
                style={{ fontSize: "24px", fontWeight: 700, color: "#00276B" }}
              >
                Transformative
              </h3>
              <p className="font-body" style={{ fontSize: "16px", color: "#6B7A99", lineHeight: 1.7 }}>
                Pendidik Kristen yang berdampak bagi peserta didik dan
                lingkungan tempatnya melayani.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — DETAIL PROGRAM */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left — Informasi Program */}
            <div>
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
                    145 SKS
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
                    4 tahun <em>full time</em>: 3 tahun kuliah + 1 tahun praktik
                    pelayanan
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
                      Persyaratan Khusus
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

            {/* Right — Sistem Perkuliahan */}
            <div className="p-10 rounded-2xl" style={{ background: "#F8F7F4" }}>
              <h3
                className="mb-6 font-heading"
                style={{ fontSize: "28px", fontWeight: 700, color: "#00276B" }}
              >
                Sistem Perkuliahan &amp; Praktik
              </h3>
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
                      style={{ fontSize: "16px", color: "#1A2340", lineHeight: 1.7 }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — STRUKTUR KURIKULUM */}
      <section
        className="py-20 lg:py-28"
        style={{ background: "linear-gradient(135deg, #00276B 0%, #003F8A 100%)" }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
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

          {/* Top row: 4 columns */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CURRICULUM_CATEGORIES_TOP.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl text-center"
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
                  className="mb-3 font-heading text-white"
                  style={{ fontSize: "20px", fontWeight: 700 }}
                >
                  {cat.title}
                </h3>
                <p
                  className="font-body"
                  style={{ fontSize: "14px", color: "rgba(255,255,255,0.85)", lineHeight: 1.6 }}
                >
                  {cat.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom row: 3 columns */}
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {CURRICULUM_CATEGORIES_BOTTOM.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl text-center"
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
                  className="mb-3 font-heading text-white"
                  style={{ fontSize: "20px", fontWeight: 700 }}
                >
                  {cat.title}
                </h3>
                <p
                  className="font-body"
                  style={{ fontSize: "14px", color: "rgba(255,255,255,0.85)", lineHeight: 1.6 }}
                >
                  {cat.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p
              className="font-body italic"
              style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)" }}
            >
              *Total beban studi keseluruhan adalah 145 SKS
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5 — DETAIL MATA KULIAH (accordion — client component) */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <p
              className="uppercase font-bold mb-4 font-body"
              style={{ fontSize: "13px", color: "#C41E3A", letterSpacing: "0.12em" }}
            >
              DESKRIPSI LENGKAP
            </p>
            <h2
              className="mb-6 font-heading"
              style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, color: "#00276B" }}
            >
              Mata Kuliah Program S.Pd.
            </h2>
            <p
              className="max-w-3xl mx-auto font-body"
              style={{ fontSize: "18px", color: "#6B7A99", lineHeight: 1.7 }}
            >
              Pelajari lebih detail tentang setiap mata kuliah yang memperlengkapi
              kompetensi lulusan Sarjana Pendidikan Kristen.
            </p>
          </div>

          <SarjanaPendidikanKristenAccordion />
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
            Panggilan untuk Mendidik Generasi?
          </h2>
          <p
            className="mb-10 max-w-2xl mx-auto font-body"
            style={{ fontSize: "18px", color: "#6B7A99", lineHeight: 1.7 }}
          >
            Bergabunglah dengan program S.Pd. STTB dan wujudkan komitmen Anda
            untuk menjadi pendidik Kristen yang berpengetahuan, berkarakter, dan
            transformatif.
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
