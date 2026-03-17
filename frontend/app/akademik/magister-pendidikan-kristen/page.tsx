import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Target,
  Clock,
  GraduationCap,
  Heart,
  TrendingUp,
} from "lucide-react";
import { MagisterPendidikanKristenAccordion } from "@/components/akademik/MagisterPendidikanKristenAccordion";

export const metadata: Metadata = {
  title: "Magister Pendidikan Kristen (M.Pd.) — STTB Bandung",
  description:
    "Program Magister Pendidikan Kristen STTB untuk memperlengkapi pemimpin dan pendidik dengan fondasi biblika-teologis serta teori pendidikan dan formasi spiritualitas. 60 SKS, 2 tahun, gelar M.Pd.",
};

const REQUIREMENTS = [
  "Minimal lulusan S1 dari semua jurusan.",
  "Sudah baptis dewasa/sidi.",
  "Pernah terlibat pelayanan sekolah/gereja/lembaga Kristen minimal selama 2 tahun.",
  "Memiliki kemampuan dasar Bahasa Inggris yang baik (terutama membaca teks Inggris).",
  "Menyerahkan book review sebagai bagian dari seleksi administrasi.",
  "Memenuhi seluruh prosedur pendaftaran yang berlaku di STTB.",
];

const SYSTEM_ITEMS = [
  <>
    Kuliah dimulai pada bulan <strong>Agustus</strong> (Semester Ganjil).
  </>,
  <>
    Mata kuliah diajarkan secara <strong>Block Teaching (intensif)</strong>.
  </>,
  <>
    Dalam 1 Semester berisi <strong>5 mata kuliah</strong>. Terdapat 1 Mata
    Kuliah yang diadakan <strong>Onsite</strong> setiap semesternya.
  </>,
];

const TOP_CURRICULUM = [
  {
    title: "Mata Kuliah Fondasi",
    sks: "12 SKS",
    description: "Teologi Sistematika, PL, PB, Hermeneutika",
  },
  {
    title: "Mata Kuliah Inti",
    sks: "16 SKS",
    description: "Natur Manusia, Sejarah & Filosofi, Psikologi Perkembangan",
  },
  {
    title: "Mata Kuliah Penelitian",
    sks: "17 SKS",
    description: "Metodologi, Proposal, Tesis/Proyek Kreatif",
  },
];

export default function MagisterPendidikanKristenPage() {
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
                PROGRAM PASCASARJANA
              </p>

              <h1 className="mb-8">
                <span
                  className="block mb-2 font-display italic text-white"
                  style={{
                    fontSize: "clamp(36px, 5vw, 56px)",
                    fontWeight: 400,
                    lineHeight: 1.15,
                  }}
                >
                  Magister
                </span>
                <span
                  className="block font-heading text-white"
                  style={{
                    fontSize: "clamp(38px, 5vw, 64px)",
                    fontWeight: 700,
                    lineHeight: 1.05,
                  }}
                >
                  PENDIDIKAN KRISTEN
                </span>
              </h1>

              <p
                className="mb-12 font-body"
                style={{
                  fontSize: "17px",
                  color: "rgba(255,255,255,0.85)",
                  lineHeight: 1.8,
                  maxWidth: "600px",
                }}
              >
                Program studi ini ditujukan untuk memperlengkapi pemimpin dan
                pendidik di sekolah, gereja, atau lembaga pelayanan Kristen
                lainnya dengan fondasi biblika-teologis yang solid serta teori
                pendidikan dan formasi spiritualitas untuk berkarya secara
                transformatif.
              </p>

              <div className="flex flex-wrap gap-4">
                <span
                  className="px-6 py-3 rounded-lg font-body font-bold text-white text-sm shadow-lg"
                  style={{ background: "#C41E3A" }}
                >
                  Gelar: M.Pd.
                </span>
                <span
                  className="px-6 py-3 rounded-lg font-body font-bold text-white text-sm"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  60 SKS
                </span>
                <span
                  className="px-6 py-3 rounded-lg font-body font-bold text-white text-sm"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  2 Tahun
                </span>
              </div>
            </div>
          </div>

          {/* Right Column — Image */}
          <div className="relative min-h-[400px] overflow-hidden">
            <Image
              src="/images/Akademik/Magister-Pendidikan-Kristen.png"
              alt="Magister Pendidikan Kristen STTB"
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
      <section className="py-24 lg:py-32" style={{ background: "#F8F7F4" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <div className="text-center mb-20">
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
                fontSize: "clamp(36px, 4vw, 52px)",
                fontWeight: 700,
                color: "#00276B",
                lineHeight: 1.2,
              }}
            >
              <em>Transformative Educational Leaders</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Informed */}
            <div
              className="p-10 rounded-2xl bg-white"
              style={{ boxShadow: "0 10px 40px rgba(0,39,107,0.05)" }}
            >
              <div
                className="flex items-center justify-center w-16 h-16 rounded-2xl mb-8"
                style={{ background: "#E8F0FB" }}
              >
                <BookOpen className="w-8 h-8" style={{ color: "#0056B3" }} />
              </div>
              <h3
                className="mb-4 font-heading"
                style={{ fontSize: "26px", fontWeight: 700, color: "#00276B" }}
              >
                Informed
              </h3>
              <p
                className="font-body"
                style={{ fontSize: "16px", color: "#6B7A99", lineHeight: 1.7 }}
              >
                Memiliki fondasi biblika-teologis dan pendidikan yang solid
                dalam mengembangkan pendidikan Kristen yang holistik dan
                integratif.
              </p>
            </div>

            {/* Transformed */}
            <div
              className="p-10 rounded-2xl bg-white"
              style={{ boxShadow: "0 10px 40px rgba(0,39,107,0.05)" }}
            >
              <div
                className="flex items-center justify-center w-16 h-16 rounded-2xl mb-8"
                style={{ background: "#FDEAEA" }}
              >
                <Heart className="w-8 h-8" style={{ color: "#C41E3A" }} />
              </div>
              <h3
                className="mb-4 font-heading"
                style={{ fontSize: "26px", fontWeight: 700, color: "#00276B" }}
              >
                Transformed
              </h3>
              <p
                className="font-body"
                style={{ fontSize: "16px", color: "#6B7A99", lineHeight: 1.7 }}
              >
                Memiliki transformasi hidup yang berpusatkan kepada Kristus dan
                memiliki karakter yang dewasa.
              </p>
            </div>

            {/* Transformative */}
            <div
              className="p-10 rounded-2xl bg-white"
              style={{ boxShadow: "0 10px 40px rgba(0,39,107,0.05)" }}
            >
              <div
                className="flex items-center justify-center w-16 h-16 rounded-2xl mb-8"
                style={{ background: "#E8F0FB" }}
              >
                <TrendingUp className="w-8 h-8" style={{ color: "#0056B3" }} />
              </div>
              <h3
                className="mb-4 font-heading"
                style={{ fontSize: "26px", fontWeight: 700, color: "#00276B" }}
              >
                Transformative
              </h3>
              <p
                className="font-body"
                style={{ fontSize: "16px", color: "#6B7A99", lineHeight: 1.7 }}
              >
                Memiliki kecakapan memimpin dan merancang pendidikan Kristen
                yang transformatif.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — DETAIL PROGRAM */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Left — Informasi Program */}
            <div className="lg:col-span-7">
              <h2
                className="mb-10 font-heading"
                style={{
                  fontSize: "clamp(32px, 4vw, 44px)",
                  fontWeight: 700,
                  color: "#00276B",
                  lineHeight: 1.2,
                }}
              >
                Informasi Program
              </h2>

              <div className="flex flex-wrap gap-8 mb-12">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      background: "#F8F7F4",
                      border: "1px solid #E8ECF2",
                    }}
                  >
                    <GraduationCap
                      className="w-6 h-6"
                      style={{ color: "#C41E3A" }}
                    />
                  </div>
                  <div>
                    <p
                      className="font-body font-bold uppercase mb-1"
                      style={{
                        fontSize: "13px",
                        color: "#C41E3A",
                        letterSpacing: "0.08em",
                      }}
                    >
                      Jumlah Kredit
                    </p>
                    <p
                      className="font-body font-bold"
                      style={{ fontSize: "20px", color: "#1A2340" }}
                    >
                      60 SKS
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      background: "#F8F7F4",
                      border: "1px solid #E8ECF2",
                    }}
                  >
                    <Clock className="w-6 h-6" style={{ color: "#0056B3" }} />
                  </div>
                  <div>
                    <p
                      className="font-body font-bold uppercase mb-1"
                      style={{
                        fontSize: "13px",
                        color: "#0056B3",
                        letterSpacing: "0.08em",
                      }}
                    >
                      Masa Studi
                    </p>
                    <p
                      className="font-body font-bold"
                      style={{ fontSize: "20px", color: "#1A2340" }}
                    >
                      2 Tahun
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="p-8 rounded-2xl"
                style={{ background: "#F8F7F4", border: "1px solid #E8ECF2" }}
              >
                <h4
                  className="font-heading mb-6 flex items-center gap-3"
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#00276B",
                  }}
                >
                  <Target className="w-6 h-6" style={{ color: "#C41E3A" }} />
                  Persyaratan Pendaftar
                </h4>
                <ul className="space-y-3">
                  {REQUIREMENTS.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span
                        style={{
                          color: "#C41E3A",
                          fontSize: "18px",
                          lineHeight: 1,
                          marginTop: "2px",
                        }}
                      >
                        •
                      </span>
                      <span
                        className="font-body"
                        style={{
                          fontSize: "15px",
                          color: "#4A5568",
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

            {/* Right — Sistem Perkuliahan */}
            <div className="lg:col-span-5">
              <div
                className="rounded-2xl p-10"
                style={{
                  background: "#F8F7F4",
                  border: "1px solid #E8ECF2",
                  boxShadow: "0 4px 20px rgba(0,39,107,0.04)",
                }}
              >
                <h3
                  className="mb-8 font-heading"
                  style={{
                    fontSize: "28px",
                    fontWeight: 700,
                    color: "#00276B",
                  }}
                >
                  Sistem Perkuliahan
                </h3>

                <div className="space-y-6">
                  {SYSTEM_ITEMS.map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div
                        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm text-white"
                        style={{ background: "#C41E3A" }}
                      >
                        {idx + 1}
                      </div>
                      <p
                        className="font-body"
                        style={{
                          fontSize: "16px",
                          lineHeight: 1.6,
                          color: "#1A2340",
                        }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <p
                  className="font-body italic mt-6 pt-4 border-t"
                  style={{
                    fontSize: "12px",
                    color: "#9CA3AF",
                    borderColor: "#E8ECF2",
                  }}
                >
                  *Jadwal ini bisa berubah tergantung pada kesepakatan kelas
                  bersama dosen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — STRUKTUR KURIKULUM */}
      <section
        className="py-24 lg:py-32"
        style={{
          background: "linear-gradient(135deg, #001A4A 0%, #00276B 100%)",
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

          {/* Top row: 3 columns */}
          <div className="grid md:grid-cols-3 gap-6">
            {TOP_CURRICULUM.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl text-center flex flex-col items-center"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div
                  className="px-5 py-1.5 mb-4 rounded-full font-body font-bold text-white text-sm"
                  style={{ background: "#C41E3A" }}
                >
                  {cat.sks}
                </div>
                <h3
                  className="mb-2 font-body font-bold"
                  style={{ fontSize: "18px", color: "rgba(255,255,255,0.9)" }}
                >
                  {cat.title}
                </h3>
                <p
                  className="font-body"
                  style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)" }}
                >
                  {cat.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom row: 2 columns (concentration + elective) */}
          <div className="mt-6 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div
              className="p-6 rounded-xl text-center flex flex-col items-center"
              style={{
                background: "rgba(196,30,58,0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(196,30,58,0.3)",
              }}
            >
              <div
                className="px-5 py-1.5 mb-3 rounded-full font-body font-bold text-white text-sm"
                style={{ background: "#C41E3A" }}
              >
                9 SKS
              </div>
              <h3
                className="mb-2 font-body font-bold text-white"
                style={{ fontSize: "18px" }}
              >
                Pilihan Konsentrasi
              </h3>
              <p
                className="font-body"
                style={{ fontSize: "13px", color: "rgba(255,255,255,0.8)" }}
              >
                Pilih antara <strong>Desain Pembelajaran</strong> ATAU{" "}
                <strong>Kepemimpinan Pendidikan</strong>
              </p>
            </div>

            <div
              className="p-6 rounded-xl text-center flex flex-col items-center"
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div
                className="px-5 py-1.5 mb-3 rounded-full font-body font-bold text-white text-sm"
                style={{ background: "#0056B3" }}
              >
                6 SKS
              </div>
              <h3
                className="mb-2 font-body font-bold text-white"
                style={{ fontSize: "18px" }}
              >
                Mata Kuliah Elektif
              </h3>
              <p
                className="font-body"
                style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)" }}
              >
                Pilihan mata kuliah lintas prodi jenjang magister
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p
              className="font-body italic"
              style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)" }}
            >
              *Total beban studi keseluruhan adalah 60 SKS
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5 — DESKRIPSI MATA KULIAH (accordion — client component) */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-16">
          <div className="text-center mb-20">
            <p
              className="uppercase font-bold mb-4 font-body"
              style={{
                fontSize: "13px",
                color: "#C41E3A",
                letterSpacing: "0.12em",
              }}
            >
              SILABUS
            </p>
            <h2
              className="mb-6 font-heading"
              style={{
                fontSize: "clamp(32px, 4vw, 44px)",
                fontWeight: 700,
                color: "#00276B",
              }}
            >
              Deskripsi Mata Kuliah
            </h2>
          </div>

          <MagisterPendidikanKristenAccordion />
        </div>
      </section>

      {/* SECTION 6 — CTA */}
      <section className="py-24" style={{ background: "#F8F7F4" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16 text-center">
          <h2
            className="mb-6 font-display italic max-w-3xl mx-auto"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 700,
              color: "#00276B",
              lineHeight: 1.2,
            }}
          >
            Siap Memimpin Transformasi Pendidikan Kristen?
          </h2>
          <p
            className="mb-10 max-w-2xl mx-auto font-body"
            style={{ fontSize: "18px", color: "#6B7A99", lineHeight: 1.7 }}
          >
            Bergabunglah dengan program Magister Pendidikan Kristen STTB dan
            tingkatkan kapasitas Anda sebagai pendidik dan pemimpin yang
            holistik.
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
