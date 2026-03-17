import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  GraduationCap,
  Target,
  Heart,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import { SarjanaTeologiAccordion } from "@/components/akademik/SarjanaTeologiAccordion";

export const metadata: Metadata = {
  title: "Sarjana Teologi (S.Th.) — STTB Bandung",
  description:
    "Program studi Sarjana Teologi STTB untuk memperlengkapi rohaniwan penuh waktu. 148 SKS, 4 tahun, gelar S.Th.",
};

const REQUIREMENTS = [
  "Lulusan SMA/sederajat",
  "Terlibat pelayanan gerejawi minimal 2 tahun",
  "Memiliki panggilan jelas sebagai rohaniwan penuh waktu",
  "Kemampuan dasar Bahasa Inggris yang baik",
  "Memenuhi prosedur pendaftaran STTB",
];

const SYSTEM_ITEMS = [
  "Perkuliahan dilakukan secara blok teaching selama 3 minggu diikuti dengan minggu pengerjaan tugas",
  "Satu semester terdiri dari 15x pertemuan (kuliah & evaluasi)",
  "Perkuliahan berlangsung selama 7 semester dan dilanjut dengan praktik pelayanan 6 bulan",
  "Mahasiswa yang belum menikah wajib tinggal di asrama",
];

const CURRICULUM_CATEGORIES = [
  {
    title: "Mata Kuliah Umum",
    sks: "14 SKS",
    description:
      "Pancasila, Bahasa Indonesia & Inggris, Metode Berpikir, Psikologi, Metode Penelitian",
  },
  {
    title: "Studi Biblika",
    sks: "34 SKS",
    description:
      "Pengantar Alkitab, Studi PL & PB, Bahasa Ibrani & Yunani, Hermeneutika",
  },
  {
    title: "Studi Teologi",
    sks: "23 SKS",
    description:
      "Prolegomena, Doktrin Allah, Kristus, Roh Kudus, Gereja, Etika, Apologetika",
  },
  {
    title: "Mata Kuliah Praktika",
    sks: "42 SKS",
    description:
      "Pelayanan Praktis, Homilika, Konseling, Misiologi, Kepemimpinan Gereja",
  },
];

export default function SarjanaTeologiPage() {
  return (
    <main>
      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[92vh]">
          {/* Left Column — Content */}
          <div
            className="relative flex items-center px-8 lg:px-16 xl:px-24 py-20 lg:py-28"
            style={{
              background: "linear-gradient(135deg, #00276B 0%, #003F8A 100%)",
            }}
          >
            <div className="max-w-2xl">
              <p
                className="uppercase font-bold mb-6 font-body"
                style={{
                  fontSize: "13px",
                  color: "#C41E3A",
                  letterSpacing: "0.15em",
                }}
              >
                PROGRAM SARJANA
              </p>

              <h1 className="mb-8">
                <span
                  className="block mb-2 font-display italic text-white"
                  style={{
                    fontSize: "clamp(42px, 6vw, 68px)",
                    fontWeight: 400,
                    lineHeight: 1.15,
                  }}
                >
                  Sarjana
                </span>
                <span
                  className="block font-heading text-white"
                  style={{
                    fontSize: "clamp(52px, 7.5vw, 92px)",
                    fontWeight: 700,
                    lineHeight: 0.95,
                  }}
                >
                  TEOLOGI
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
                Program studi Sarjana Teologi ditujukan untuk memperlengkapi
                mereka yang terpanggil untuk melayani sebagai rohaniwan penuh
                waktu di gereja, lembaga pelayanan, dan misi.
              </p>

              <div className="flex flex-wrap gap-4">
                <span
                  className="px-6 py-3 rounded-lg font-body font-bold text-white text-sm"
                  style={{ background: "#C41E3A" }}
                >
                  Gelar: S.Th.
                </span>
                <span
                  className="px-6 py-3 rounded-lg font-body font-bold text-white text-sm"
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  148 SKS
                </span>
                <span
                  className="px-6 py-3 rounded-lg font-body font-bold text-white text-sm"
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  4 Tahun
                </span>
              </div>
            </div>
          </div>

          {/* Right Column — Image */}
          <div className="relative min-h-[400px] overflow-hidden">
            <Image
              src="/images/Akademik/Sarjana-Theologi.png"
              alt="Sarjana Teologi STTB"
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
              style={{
                fontSize: "13px",
                color: "#C41E3A",
                letterSpacing: "0.12em",
              }}
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
              <em>Transformative Pastor-Scholar</em>
            </h2>
            <p
              className="max-w-3xl mx-auto font-body"
              style={{ fontSize: "18px", color: "#6B7A99", lineHeight: 1.7 }}
            >
              Lulusan yang diperlengkapi untuk menjadi pemimpin gereja yang
              transformatif dengan fondasi teologi yang kokoh dan karakter yang
              matang.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Informed */}
            <div
              className="p-8 rounded-2xl"
              style={{
                background: "#FFFFFF",
                boxShadow: "0 4px 20px rgba(0,39,107,0.08)",
              }}
            >
              <div
                className="flex items-center justify-center w-14 h-14 rounded-full mb-6"
                style={{ background: "#E8F0FB" }}
              >
                <Lightbulb className="w-7 h-7" style={{ color: "#0056B3" }} />
              </div>
              <h3
                className="mb-4 font-heading"
                style={{ fontSize: "24px", fontWeight: 700, color: "#00276B" }}
              >
                Informed
              </h3>
              <p
                className="font-body"
                style={{ fontSize: "16px", color: "#6B7A99", lineHeight: 1.7 }}
              >
                <em>Pastor-scholar</em> yang berpengetahuan luas dan aplikatif
                terhadap tantangan perkembangan pelayanan gerejawi dalam konteks
                urban.
              </p>
            </div>

            {/* Transformed */}
            <div
              className="p-8 rounded-2xl"
              style={{
                background: "#FFFFFF",
                boxShadow: "0 4px 20px rgba(0,39,107,0.08)",
              }}
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
              <p
                className="font-body"
                style={{ fontSize: "16px", color: "#6B7A99", lineHeight: 1.7 }}
              >
                <em>Pastor-scholar</em> yang terus bertumbuh secara rohani,
                karakter, dan memiliki integritas yang menjadi teladan jemaat.
              </p>
            </div>

            {/* Impactful */}
            <div
              className="p-8 rounded-2xl"
              style={{
                background: "#FFFFFF",
                boxShadow: "0 4px 20px rgba(0,39,107,0.08)",
              }}
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
                Impactful
              </h3>
              <p
                className="font-body"
                style={{ fontSize: "16px", color: "#6B7A99", lineHeight: 1.7 }}
              >
                <em>Pastor-scholar</em> yang mampu memberikan kontribusi nyata
                dalam kehidupan gereja dan masyarakat untuk kemuliaan Tuhan.
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
                <div
                  className="border-l-4 pl-6"
                  style={{ borderColor: "#C41E3A" }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <GraduationCap
                      className="w-6 h-6"
                      style={{ color: "#C41E3A" }}
                    />
                    <span
                      className="font-body font-bold uppercase"
                      style={{
                        fontSize: "14px",
                        letterSpacing: "0.08em",
                        color: "#C41E3A",
                      }}
                    >
                      Jumlah Kredit
                    </span>
                  </div>
                  <p
                    className="font-body font-semibold"
                    style={{ fontSize: "20px", color: "#1A2340" }}
                  >
                    148 SKS
                  </p>
                </div>

                {/* Masa Studi */}
                <div
                  className="border-l-4 pl-6"
                  style={{ borderColor: "#0056B3" }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-6 h-6" style={{ color: "#0056B3" }} />
                    <span
                      className="font-body font-bold uppercase"
                      style={{
                        fontSize: "14px",
                        letterSpacing: "0.08em",
                        color: "#0056B3",
                      }}
                    >
                      Masa Studi
                    </span>
                  </div>
                  <p
                    className="font-body"
                    style={{
                      fontSize: "18px",
                      color: "#1A2340",
                      lineHeight: 1.6,
                    }}
                  >
                    4 tahun <em>full time</em>: 3,5 tahun kuliah + 6 bulan
                    praktik pelayanan
                  </p>
                </div>

                {/* Persyaratan */}
                <div
                  className="border-l-4 pl-6"
                  style={{ borderColor: "#00276B" }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Target className="w-6 h-6" style={{ color: "#00276B" }} />
                    <span
                      className="font-body font-bold uppercase"
                      style={{
                        fontSize: "14px",
                        letterSpacing: "0.08em",
                        color: "#00276B",
                      }}
                    >
                      Persyaratan
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {REQUIREMENTS.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span
                          style={{
                            color: "#C41E3A",
                            fontSize: "18px",
                            lineHeight: 1,
                          }}
                        >
                          •
                        </span>
                        <span
                          className="font-body"
                          style={{
                            fontSize: "16px",
                            color: "#6B7A99",
                            lineHeight: 1.6,
                          }}
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
                Sistem Perkuliahan
              </h3>
              <ul className="space-y-4">
                {SYSTEM_ITEMS.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1"
                      style={{ background: "#C41E3A" }}
                    >
                      <span
                        className="font-body font-bold text-white"
                        style={{ fontSize: "12px" }}
                      >
                        {idx + 1}
                      </span>
                    </div>
                    <span
                      className="font-body"
                      style={{
                        fontSize: "16px",
                        color: "#1A2340",
                        lineHeight: 1.7,
                      }}
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
        style={{
          background: "linear-gradient(135deg, #00276B 0%, #003F8A 100%)",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <p
              className="uppercase font-bold mb-4 font-body"
              style={{
                fontSize: "13px",
                color: "#C41E3A",
                letterSpacing: "0.12em",
              }}
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CURRICULUM_CATEGORIES.map((cat, idx) => (
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
                  style={{
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.85)",
                    lineHeight: 1.6,
                  }}
                >
                  {cat.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {[
              {
                label: "Konsentrasi: Pemuridan & Misi",
                sks: "9 SKS",
                highlight: false,
              },
              {
                label: "Konsentrasi: Pelayanan Anak Holistik",
                sks: "9 SKS",
                highlight: false,
              },
              { label: "Praktik Lapangan", sks: "9 SKS", highlight: true },
              { label: "Tugas Akhir", sks: "6 SKS", highlight: true },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl flex items-center justify-between"
                style={{
                  background: item.highlight
                    ? "rgba(196,30,58,0.15)"
                    : "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(10px)",
                  border: item.highlight
                    ? "1px solid rgba(196,30,58,0.3)"
                    : "1px solid rgba(255,255,255,0.15)",
                }}
              >
                <h4
                  className="font-heading text-white"
                  style={{ fontSize: "18px", fontWeight: 700 }}
                >
                  {item.label}
                </h4>
                <span
                  className="flex-shrink-0 ml-4 px-4 py-2 rounded-full font-body font-bold text-white text-sm"
                  style={{
                    background: item.highlight
                      ? "#C41E3A"
                      : "rgba(255,255,255,0.2)",
                  }}
                >
                  {item.sks}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — DETAIL MATA KULIAH (accordion — client component) */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <p
              className="uppercase font-bold mb-4 font-body"
              style={{
                fontSize: "13px",
                color: "#C41E3A",
                letterSpacing: "0.12em",
              }}
            >
              DESKRIPSI LENGKAP
            </p>
            <h2
              className="mb-6 font-heading"
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 700,
                color: "#00276B",
              }}
            >
              Mata Kuliah Program S.Th.
            </h2>
            <p
              className="max-w-3xl mx-auto font-body"
              style={{ fontSize: "18px", color: "#6B7A99", lineHeight: 1.7 }}
            >
              Pelajari lebih detail tentang setiap mata kuliah dalam program
              Sarjana Teologi
            </p>
          </div>

          <SarjanaTeologiAccordion />
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
            Siap Memulai Perjalanan Studi Teologi?
          </h2>
          <p
            className="mb-10 max-w-2xl mx-auto font-body"
            style={{ fontSize: "18px", color: "#6B7A99", lineHeight: 1.7 }}
          >
            Bergabunglah dengan program S.Th. STTB dan wujudkan panggilan Anda
            untuk menjadi <em>pastor-scholar</em> yang transformatif.
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
              className="px-10 py-4 rounded-lg font-bold font-body text-base transition-all"
              style={{
                color: "#00276B",
                background: "#FFFFFF",
                border: "2px solid #00276B",
              }}
            >
              Info Persyaratan
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
