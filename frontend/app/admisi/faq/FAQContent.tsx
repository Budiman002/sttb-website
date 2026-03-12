"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  CheckCircle,
  Users,
  Search,
  Calendar,
  ClipboardCheck,
  FileText,
} from "lucide-react";
import { ROUTES } from "@/constants/routes";

export function FAQContent() {
  const [activeSection, setActiveSection] = useState("panduan-umum");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["panduan-umum", "program-s1", "program-s2"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen">
      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden">
        <div className="grid min-h-[85vh] lg:grid-cols-[55%_45%]">
          {/* Left Column — Navy Dark Background */}
          <div className="relative flex items-center bg-sttb-navy-dark px-8 py-20 lg:px-16 xl:px-24">
            <div className="max-w-2xl">
              <p className="mb-8 font-body text-xs font-bold uppercase tracking-[0.15em] text-sttb-red">
                ADMISI STTB
              </p>

              <h1 className="mb-8">
                <div className="mb-2 block font-display text-[clamp(3.5rem,8vw,4.5rem)] italic leading-[1.1] text-white">
                  PERTANYAAN
                </div>
                <div className="block font-heading text-[clamp(4rem,10vw,5.625rem)] font-bold leading-none text-sttb-red">
                  UMUM
                </div>
              </h1>

              <p className="max-w-[540px] font-body text-base leading-relaxed text-white">
                Temukan jawaban atas pertanyaan yang paling sering diajukan
                seputar admisi dan pemilihan program studi di STTB.
              </p>
            </div>

            {/* Decorative Red Bar */}
            <div className="absolute right-0 top-1/2 hidden h-[60px] w-1 -translate-y-1/2 bg-sttb-red lg:block" />
          </div>

          {/* Right Column — Navy Brand Block */}
          <div className="relative flex items-center justify-center bg-sttb-navy px-8 py-20">
            <div className="flex w-full max-w-md flex-col items-center">
              {/* Label */}
              <p className="mb-8 text-center font-body text-[11px] font-bold uppercase tracking-[0.15em] text-sttb-red">
                NAVIGASI CEPAT
              </p>

              {/* Three Navigation Cards */}
              <div className="flex w-full flex-col gap-4">
                {/* Card 1 */}
                <Link
                  href={ROUTES.admisi.jadwalPendaftaran}
                  className="flex items-start gap-4 rounded-lg bg-white/10 p-5 transition-all hover:bg-white/15"
                >
                  <Calendar className="h-5 w-5 flex-shrink-0 text-white" />
                  <div>
                    <h3 className="mb-1 font-heading text-lg text-white">
                      Jadwal Admisi
                    </h3>
                    <p className="font-body text-[13px] text-white/75">
                      Lihat jadwal penerimaan mahasiswa baru →
                    </p>
                  </div>
                </Link>

                {/* Card 2 */}
                <Link
                  href={ROUTES.admisi.prosedurAdmisi}
                  className="flex items-start gap-4 rounded-lg bg-white/10 p-5 transition-all hover:bg-white/15"
                >
                  <ClipboardCheck className="h-5 w-5 flex-shrink-0 text-white" />
                  <div>
                    <h3 className="mb-1 font-heading text-lg text-white">
                      Prosedur Admisi
                    </h3>
                    <p className="font-body text-[13px] text-white/75">
                      Pelajari langkah-langkah pendaftaran →
                    </p>
                  </div>
                </Link>

                {/* Card 3 */}
                <Link
                  href={ROUTES.admisi.infoPersyaratan}
                  className="flex items-start gap-4 rounded-lg bg-white/10 p-5 transition-all hover:bg-white/15"
                >
                  <FileText className="h-5 w-5 flex-shrink-0 text-white" />
                  <div>
                    <h3 className="mb-1 font-heading text-lg text-white">
                      Info Persyaratan
                    </h3>
                    <p className="font-body text-[13px] text-white/75">
                      Cek persyaratan dokumen yang dibutuhkan →
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — STICKY ANCHOR NAVIGATION */}
      <nav className="sticky top-20 z-40 border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="flex items-center justify-center gap-12 py-5">
            {[
              { id: "panduan-umum", label: "Panduan Umum" },
              { id: "program-s1", label: "Program S1" },
              { id: "program-s2", label: "Program S2" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative pb-1 font-body text-sm font-semibold transition-colors"
                style={{
                  color: activeSection === item.id ? "#C41E3A" : "#003F8A",
                }}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-sttb-red" />
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* SECTION 3 — PANDUAN UMUM */}
      <section id="panduan-umum" className="bg-sttb-offwhite py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
          {/* Section Header */}
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-4 font-body text-[13px] font-bold uppercase tracking-[0.12em] text-sttb-red">
              LANGKAH PERTAMA
            </p>
            <h2 className="mb-6 font-heading text-[clamp(2rem,5vw,3rem)] font-bold text-sttb-navy-dark">
              Memilih Program Studi Yang Tepat
            </h2>
            <p className="font-body text-base leading-relaxed text-gray-600">
              Memilih program studi adalah keputusan penting yang membutuhkan
              pertimbangan matang, riset pribadi, doa, dan konsultasi dengan
              orang-orang yang tepat.
            </p>
          </div>

          {/* Three Cards */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <div className="overflow-hidden rounded-lg border-t-4 border-sttb-red bg-white shadow-lg">
              <div className="p-8">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
                  <CheckCircle className="h-6 w-6 text-sttb-red" />
                </div>
                <h3 className="mb-6 font-body text-xl font-bold text-sttb-navy-dark">
                  Hal yang Perlu Dipertimbangkan
                </h3>
                <ul className="space-y-3">
                  {[
                    "Karunia/talenta dan rencana pelayanan spesifik",
                    "Peluang pelayanan sesuai program studi",
                    "Isi kurikulum dan pembinaan mahasiswa",
                    "Kualitas dosen dan pandangan iman STT",
                    "Kemampuan finansial dan peluang beasiswa",
                    "Manajemen waktu (khusus S2)",
                    "Komunitas belajar dan fasilitas kampus",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 font-body text-sm text-gray-600"
                    >
                      <span className="mt-[2px] text-sttb-red">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div className="overflow-hidden rounded-lg border-t-4 border-sttb-red bg-white shadow-lg">
              <div className="p-8">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                  <Users className="h-6 w-6 text-sttb-navy" />
                </div>
                <h3 className="mb-6 font-body text-xl font-bold text-sttb-navy-dark">
                  Konsultasikan Dengan
                </h3>
                <ul className="space-y-3">
                  {[
                    "Hamba Tuhan di gereja Anda",
                    "Pembina atau mentor rohani Anda",
                    "Pihak admisi STT yang dituju",
                    "Keluarga (orang tua / pasangan)",
                    "Atasan Anda (bila sudah bekerja)",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 font-body text-sm text-gray-600"
                    >
                      <span className="mt-[2px] text-sttb-navy">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 3 */}
            <div className="overflow-hidden rounded-lg border-t-4 border-sttb-red bg-white shadow-lg">
              <div className="p-8">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
                  <Search className="h-6 w-6 text-sttb-red" />
                </div>
                <h3 className="mb-6 font-body text-xl font-bold text-sttb-navy-dark">
                  Cara Riset Pribadi
                </h3>
                <ul className="space-y-3">
                  {[
                    "Dengarkan testimoni alumni",
                    "Ikuti open house STTB",
                    "Eksplorasi website, YouTube, media sosial STTB",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 font-body text-sm text-gray-600"
                    >
                      <span className="mt-[2px] text-sttb-red">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — PROGRAM S1 */}
      <section id="program-s1" className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
          {/* Section Header */}
          <div className="mb-16">
            <p className="mb-4 font-body text-[13px] font-bold uppercase tracking-[0.12em] text-sttb-red">
              JENJANG SARJANA
            </p>
            <h2 className="font-heading text-[clamp(2rem,5vw,3rem)] font-bold text-sttb-navy-dark">
              Memilih Program S1
            </h2>
          </div>

          {/* 2x2 Grid */}
          <div className="mb-12 grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Saya ingin menjadi Hamba Tuhan full time",
                body: "Pilih Sarjana Teologi. Jika sinode tidak mengharuskan gelar S.Th., Sarjana Pendidikan Kristen juga bisa menjadi pilihan.",
              },
              {
                title: "Saya ingin menjadi guru agama atau guru Kristen",
                body: "Pilih Sarjana Pendidikan Kristen (S.Pd.) — muatan ilmu pendidikannya jauh lebih dalam dibanding S.Th.",
              },
              {
                title: "Saya ingin berkarir di bidang misi",
                body: "Konsultasikan dengan gereja atau lembaga misi Anda, karena persyaratan gelar berbeda-beda tiap denominasi.",
              },
              {
                title: "Apakah lulusan S1 bisa bekerja di luar gereja?",
                body: "Ya. Baik S.Th. maupun S.Pd. dapat bekerja di lingkungan non-gereja. Pertimbangkan panggilan dan rencana pelayanan sejak awal.",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="rounded-lg border-l-4 border-sttb-red bg-white p-8 shadow-lg"
              >
                <h3 className="mb-4 font-body text-lg font-bold text-sttb-navy-dark">
                  {card.title}
                </h3>
                <p className="font-body text-[15px] leading-[1.7] text-gray-600">
                  {card.body}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="flex flex-col items-center justify-between gap-6 rounded-lg bg-sttb-navy p-8 lg:flex-row lg:p-10">
            <p className="font-body text-xl font-bold text-white">
              Masih ragu memilih program S1?
            </p>
            <Link
              href={ROUTES.admisi.infoPersyaratan}
              className="rounded-lg border-2 border-white bg-transparent px-8 py-4 font-body text-base font-bold text-white transition-all hover:bg-white hover:text-sttb-navy"
            >
              Hubungi Admisi →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5 — PROGRAM S2 */}
      <section id="program-s2" className="bg-sttb-offwhite py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
          {/* Section Header */}
          <div className="mb-16">
            <p className="mb-4 font-body text-[13px] font-bold uppercase tracking-[0.12em] text-sttb-red">
              JENJANG MAGISTER
            </p>
            <h2 className="font-heading text-[clamp(2rem,5vw,3rem)] font-bold text-sttb-navy-dark">
              Memilih Program S2
            </h2>
          </div>

          {/* Seven Cards in 3-column grid */}
          <div className="mb-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title:
                  "Saya ingin berkarir di bidang akademik atau pendidikan",
                body: "Pilih Magister Pendidikan (M.Pd.) dengan fokus riset tesis untuk mendukung studi doktoral. Bila ingin berkarir sebagai dosen teologi, Magister Teologi (M.Th.) juga tersedia dan diakui sebagai gelar akademis.",
              },
              {
                title: "Saya ingin menjadi Hamba Tuhan full time",
                body: "Pilih Magister Teologi (M.Th.) — jalur matrikulasi tersedia. Lulusan Sarjana Pendidikan Kristen dari STTB dapat langsung masuk M.Th. tanpa matrikulasi.",
              },
              {
                title: "Saya sudah memiliki gelar M.Div.",
                body: "Magister Teologi (M.Th.) memiliki kekuatan akademik yang dibutuhkan sebagai pelengkap gelar vokasional M.Div.",
              },
              {
                title:
                  "Saya ingin bekerja di lingkup gereja atau organisasi parachurch",
                body: "Konsultasikan dengan gereja atau lembaga misi Anda. Beberapa denominasi membutuhkan M.Th., sementara ada yang menerima Magister Ministri atau Magister Pendidikan (M.Pd.)",
              },
              {
                title:
                  "Saya ingin mengintegrasikan iman Kristen dalam karir saya",
                body: "Pilih Magister Ministri Pelayanan Marketplace (M.Min. Marketplace) — dirancang untuk pelayan Tuhan yang berkarya di dunia profesional sehari-hari.",
              },
              {
                title:
                  "Saya adalah aktivis gereja dan ingin diperlengkapi secara teologis",
                body: "Magister Ministri Pelayanan Marketplace tetap menekankan pengajaran teologi sambil memberikan ilmu praktis. Mahasiswa juga dapat mengambil mata kuliah dari prodi magister lain tanpa biaya tambahan.",
              },
              {
                title:
                  "Saya sudah memiliki gelar Master Teologi tapi belum menyelesaikan tesis",
                body: "Program Magister Teologi akan memperdalam pemahaman teologis dan meningkatkan keterampilan penelitian, yang dapat memfasilitasi masuk ke program doktoral.",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="rounded-lg border-l-4 border-sttb-red bg-white p-8 shadow-lg"
              >
                <h3 className="mb-4 font-body text-lg font-bold text-sttb-navy-dark">
                  {card.title}
                </h3>
                <p className="font-body text-[15px] leading-[1.7] text-gray-600">
                  {card.body}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="flex flex-col items-center justify-between gap-6 rounded-lg bg-sttb-navy p-8 lg:flex-row lg:p-10">
            <p className="font-body text-xl font-bold text-white">
              Masih ragu memilih program S2?
            </p>
            <Link
              href={ROUTES.admisi.infoPersyaratan}
              className="rounded-lg border-2 border-white bg-transparent px-8 py-4 font-body text-base font-bold text-white transition-all hover:bg-white hover:text-sttb-navy"
            >
              Hubungi Admisi →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6 — CLOSING CTA */}
      <section className="bg-sttb-navy-dark py-24 lg:py-32">
        <div className="mx-auto max-w-[900px] px-6 text-center">
          <h2 className="mb-6 font-display text-[clamp(2.5rem,6vw,3.5rem)] italic text-white">
            Siap Memulai Perjalanan Anda?
          </h2>
          <p className="mx-auto mb-12 max-w-[640px] font-body text-base leading-relaxed text-white">
            Tim admisi STTB siap membantu Anda menemukan program studi yang
            paling sesuai dengan panggilan dan tujuan pelayanan Anda.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={ROUTES.admisi.infoPersyaratan}
              className="rounded-lg bg-sttb-red px-10 py-5 font-body text-base font-bold text-white shadow-lg transition-all hover:bg-sttb-red-hover hover:shadow-xl"
            >
              Daftar Sekarang →
            </Link>
            <Link
              href={ROUTES.admisi.infoPersyaratan}
              className="rounded-lg border-2 border-white bg-transparent px-10 py-5 font-body text-base font-bold text-white transition-all hover:bg-white hover:text-sttb-navy-dark"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
