"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Church, Users, Heart, BookOpen } from "lucide-react";

const sections = [
  { id: "komunitas", label: "Kehidupan Komunitas" },
  { id: "kapel", label: "Kapel & Forum" },
  { id: "pastoral", label: "Kelompok Pastoral" },
  { id: "pemuridan", label: "Kelompok Pemuridan" },
  { id: "formasi", label: "Formasi Spiritual" },
  { id: "praktik", label: "Praktik Pelayanan" },
];

export default function PembinaanPage() {
  const [activeSection, setActiveSection] = useState("komunitas");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 160;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #00276B 0%, #003F8A 60%, #0056B3 100%)",
          }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-[#C41E3A] text-sm font-bold tracking-[0.2em] uppercase mb-4">
              KEHIDUPAN KAMPUS
            </p>
            <h1 className="text-6xl lg:text-8xl font-bold text-white mb-8 leading-[0.95] font-serif">
              Pembinaan Mahasiswa
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
              Sepanjang masa studi, mahasiswa akan hidup bersama, belajar
              bersama, bertumbuh bersama dalam komunitas.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-20 z-40 bg-white shadow-md border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex overflow-x-auto gap-2 py-4 no-scrollbar">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-5 py-2.5 rounded-full whitespace-nowrap font-medium transition-all duration-300 text-sm ${
                  activeSection === section.id
                    ? "bg-[#C41E3A] text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Section 1: Kehidupan Komunitas */}
      <section
        id="komunitas"
        className="relative py-24 lg:py-32 bg-white overflow-hidden"
      >
        <div className="absolute top-12 right-12 text-[180px] font-bold opacity-[0.03] pointer-events-none select-none font-serif text-[#1A2340]">
          01
        </div>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Photo Left */}
            <div className="relative">
              <div className="aspect-[3/2] rounded-2xl overflow-hidden shadow-2xl relative">
                <Image
                  src="/images/Image (Students in group discussion).png"
                  alt="Kehidupan Komunitas"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Text Right */}
            <div>
              <div className="w-16 h-1 bg-[#C41E3A] mb-6" />
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 font-serif text-[#1A2340]">
                Kehidupan Komunitas
              </h2>
              <p className="text-lg lg:text-xl leading-relaxed mb-6 text-gray-700">
                Sebagai bagian dari komunitas, setiap mahasiswa perlu belajar
                saling mengasihi, saling menolong, dan saling menjaga dalam
                mengelola dan membentuk kehidupan kampus dan asrama yang
                kondusif.
              </p>
              <p className="text-lg lg:text-xl leading-relaxed text-gray-700">
                Semua mahasiswa penuh waktu dalam program S.Th., S.Pd.K., dan
                M.Th. matrikulasi yang belum menikah wajib tinggal di dalam
                asrama.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Kapel & Forum Pembinaan */}
      <section
        id="kapel"
        className="relative py-24 lg:py-32 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1A2340 0%, #00276B 100%)",
        }}
      >
        <div className="absolute top-12 left-12 text-[180px] font-bold opacity-[0.08] pointer-events-none select-none text-white font-serif">
          02
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="w-24 h-1 bg-[#C41E3A] mx-auto mb-6" />
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-serif">
              Kapel & Forum Pembinaan
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
            {/* Left: Kapel Formats */}
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8 font-serif">
                Format Ibadah Kapel
              </h3>
              <div className="space-y-4">
                {[
                  { icon: Church, label: "Ibadah Liturgis" },
                  { icon: Heart, label: "Ibadah Kontemporer" },
                  { icon: BookOpen, label: "Ibadah Kontemplatif" },
                  { icon: Users, label: "Persekutuan Doa Misi" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20 hover:bg-white/15 transition-colors"
                  >
                    <item.icon className="w-6 h-6 text-[#C41E3A]" />
                    <span className="text-lg text-white font-medium">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Forum Pembinaan */}
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8 font-serif">
                Forum Pembinaan
              </h3>
              <div className="space-y-5">
                {[
                  "Orientasi & retreat awal studi bagi mahasiswa baru",
                  "Pembinaan lanjutan setelah tahun pertama",
                  "Seminar, kuliah umum, simposium, diskusi panel",
                  "Pemerlengkapan misi (sebelum & sesudah mission trip)",
                  "Retreat akhir studi & persiapan praktik pelayanan",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C41E3A] flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-white/90 text-base lg:text-lg leading-relaxed pt-0.5">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pull Quote */}
          <div className="max-w-3xl mx-auto">
            <blockquote className="border-l-4 border-[#C41E3A] pl-8 py-4">
              <p className="text-2xl lg:text-3xl text-white italic leading-relaxed font-serif">
                &ldquo;Kapel merupakan kegiatan penting dalam kehidupan kampus
                secara komunitas dan wajib diikuti.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Section 3: Kelompok Pastoral */}
      <section
        id="pastoral"
        className="relative py-24 lg:py-32 bg-gray-50 overflow-hidden"
      >
        <div className="absolute top-12 right-12 text-[180px] font-bold opacity-[0.03] pointer-events-none select-none font-serif text-[#1A2340]">
          03
        </div>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Left */}
            <div>
              <div className="w-16 h-1 bg-[#C41E3A] mb-6" />
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 font-serif text-[#1A2340]">
                Kelompok Pastoral
              </h2>
              <p className="text-lg lg:text-xl leading-relaxed mb-6 text-gray-700">
                Kelompok pastoral merupakan sarana penting di kampus untuk
                belajar saling melayani dan mendukung satu sama lain dalam
                kehidupan kampus. Kelompok pastoral terdiri dari beberapa
                mahasiswa yang ditempatkan bersama dengan seorang pembimbing
                pastoral yang membimbing dan memperhatikan pertumbuhan rohani
                setiap mahasiswa.
              </p>
              <p className="text-lg lg:text-xl leading-relaxed mb-8 text-gray-700">
                Pembimbing pastoral akan melakukan percakapan pastoral minimal
                1x dalam semester.
              </p>

              {/* Formasi Badges */}
              <div className="flex flex-wrap gap-3">
                {[
                  "Formasi Pengajaran",
                  "Formasi Spiritual",
                  "Formasi Karakter",
                  "Formasi Pelayanan",
                ].map((badge, index) => (
                  <div
                    key={index}
                    className="px-5 py-2.5 bg-white rounded-full border-2 border-[#003F8A] shadow-md"
                  >
                    <span className="text-sm font-bold text-[#1A2340]">
                      {badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo Right */}
            <div className="relative">
              <div className="aspect-[3/2] rounded-2xl overflow-hidden shadow-2xl relative">
                <Image
                  src="/images/Image (Kelompok Pastoral).png"
                  alt="Kelompok Pastoral"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Kelompok Pemuridan */}
      <section
        id="pemuridan"
        className="relative py-24 lg:py-32 bg-gray-900 overflow-hidden"
      >
        <div className="absolute top-12 left-12 text-[180px] font-bold opacity-[0.05] pointer-events-none select-none text-white font-serif">
          04
        </div>
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* Text Left (3 columns) */}
            <div className="lg:col-span-3">
              <div className="w-16 h-1 bg-[#C41E3A] mb-6" />
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 font-serif">
                Kelompok Pemuridan
              </h2>
              <p className="text-2xl lg:text-3xl font-bold text-white leading-tight mb-8">
                KELOMPOK PEMURIDAN MERUPAKAN SARANA UNTUK MENOLONG MAHASISWA
                BELAJAR DAN BERTUMBUH BERSAMA MENGENAL DASAR-DASAR PERTUMBUHAN
                IMAN KRISTEN UNTUK MENJADI MURID KRISTUS, DI MANA PRIA BERADA
                DAN DIUTUS.
              </p>
              <p className="text-lg lg:text-xl text-white/80 leading-relaxed">
                Kelompok pemuridan dipimpin oleh pembina pemuridan yang
                merupakan salah satu anggota staf atau dosen di STTB maupun
                pelayan yang diutus dari gereja.
              </p>
            </div>

            {/* Photo Right (2 columns) */}
            <div className="lg:col-span-2">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative">
                <Image
                  src="/images/Image (Kelompok Pemuridan).png"
                  alt="Kelompok Pemuridan"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Formasi */}
      <section
        id="formasi"
        className="relative py-24 lg:py-32 bg-white overflow-hidden"
      >
        <div className="absolute top-12 right-12 text-[180px] font-bold opacity-[0.03] pointer-events-none select-none font-serif text-[#1A2340]">
          05
        </div>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="w-24 h-1 bg-[#C41E3A] mx-auto mb-6" />
            <h2 className="text-4xl lg:text-5xl font-bold font-serif text-[#1A2340]">
              Formasi Mahasiswa
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Formasi Spiritual */}
            <div className="bg-[#E8F0FB] rounded-2xl p-10 lg:p-12 border-l-4 border-[#003F8A]">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6 font-serif text-[#1A2340]">
                Formasi Spiritual
              </h3>
              <p className="text-lg lg:text-xl leading-relaxed text-gray-700">
                Formasi rohani merupakan usaha sadar dan terencana untuk
                menolong mahasiswa STTB bertumbuh dalam kehidupan rohani mereka.
                Formasi spiritual merupakan program terpadu yang mencakup
                disiplin rohani individu, disiplin rohani bersama dalam
                komunitas, dan pembinaan spiritual secara terstruktur.
              </p>
            </div>

            {/* Formasi Misional */}
            <div className="bg-gray-50 rounded-2xl p-10 lg:p-12 border-l-4 border-[#C41E3A]">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6 font-serif text-[#1A2340]">
                Formasi Misional
              </h3>
              <p className="text-lg lg:text-xl leading-relaxed text-gray-700">
                Formasi misional merupakan usaha yang mengintegrasikan wawasan
                misi, kepekaan konteks, dan pengalaman langsung di lapangan ke
                dalam kehidupan mahasiswa. Formasi ini mencakup mission trip ke
                berbagai konteks pelayanan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Praktik Pelayanan */}
      <section
        id="praktik"
        className="relative py-24 lg:py-32 bg-gray-50 overflow-hidden"
      >
        <div className="absolute top-12 left-12 text-[180px] font-bold opacity-[0.03] pointer-events-none select-none font-serif text-[#1A2340]">
          06
        </div>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-16">
            <div className="w-16 h-1 bg-[#C41E3A] mb-6" />
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 font-serif text-[#1A2340]">
              Praktik Pelayanan
            </h2>
            <p className="text-lg lg:text-2xl leading-relaxed text-gray-700">
              Praktik pelayanan merupakan bagian dari kurikulum yang menempatkan
              mahasiswa di konteks pelayanan nyata selama 6 bulan di akhir masa
              studi mereka.
            </p>
          </div>

          {/* Program Cards */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {[
              {
                title: "Mission Education & Exposure Training",
                subtitle: "MEET",
                description:
                  "Program pemaparan langsung ke konteks misi lintas budaya",
              },
              {
                title: "Western Education & Business Training",
                subtitle: "WEBT",
                description: "Pelatihan pelayanan di konteks Barat dan bisnis",
              },
              {
                title: "Profil Prosesus Lanjut/Formal",
                subtitle: "PPL/F",
                description:
                  "Program studi lanjut dan pendidikan formal teologi",
              },
              {
                title: "Praktik Pelayanan Gerejawi",
                subtitle: "PPG",
                description: "Pelayanan langsung di gereja lokal dan komunitas",
              },
            ].map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-t-4 border-[#003F8A] group hover:scale-[1.02]"
              >
                <div className="text-xs uppercase tracking-[0.15em] font-bold mb-3 text-[#C41E3A]">
                  {program.subtitle}
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-4 font-serif text-[#1A2340]">
                  {program.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {program.description}
                </p>
              </div>
            ))}
          </div>

          {/* Quote Banner */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-10">
            <div
              className="aspect-[21/9] flex items-center"
              style={{
                background: "linear-gradient(135deg, #00276B 0%, #003F8A 100%)",
              }}
            >
              <div className="max-w-xl px-12">
                <p className="text-3xl lg:text-4xl font-bold text-white italic leading-tight font-serif">
                  &ldquo;Pengalaman pelayanan nyata yang mengubah hidup&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/keuangan/biaya-studi"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#C41E3A] text-white rounded-lg hover:bg-[#9a1829] transition-colors shadow-lg font-semibold"
            >
              Lihat Program & Biaya Akademik
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
