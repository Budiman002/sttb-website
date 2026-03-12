"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "Apakah STTB memiliki program beasiswa?",
    answer: "Ya, STTB memiliki 5 (lima) jenis beasiswa.",
  },
  {
    question: "Bagaimana saya dapat berpartisipasi mendukung program ini?",
    answer:
      "STTB sangat mengharapkan dukungan Bapak/Ibu untuk pengadaan beasiswa bagi mahasiswa S1 dan S2. Bapak/Ibu dapat mengisi form yang telah kami sediakan. Setelah form kami terima, unit beasiswa akan menghubungi Bapak/Ibu untuk menindaklanjutinya.",
  },
  {
    question: "Apakah STTB akan menyediakan laporan beasiswa bagi sponsor?",
    answer:
      "Ya, STTB akan menyediakan laporan tahunan kepada Bapak/Ibu sponsor beasiswa.",
  },
  {
    question: "Berapa dana untuk berpartisipasi dalam program beasiswa?",
    answer:
      "Kami menyediakan gambaran besaran dana untuk setiap jenis beasiswa. Untuk info lengkap hubungi: beasiswa@sttb.ac.id",
  },
  {
    question: "Bagaimana cara memberikan dana sponsor beasiswa?",
    answer:
      "Bapak/Ibu dapat melakukan transfer dana ke rekening STTB yang tertera di form pemberian sponsor beasiswa.",
  },
];

export default function DukungSttbPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen font-sans">
      {/* SECTION 1 — HERO */}
      <section className="relative h-[85vh] overflow-hidden bg-white">
        {/* Background Image with Low Opacity */}
        <div className="absolute inset-0">
          <Image
            src="/images/Image (Students) jumping.png"
            alt=""
            fill
            className="object-cover"
            style={{ opacity: 0.18, objectPosition: "center" }}
            priority
          />
        </div>

        {/* Content */}
        <div className="max-w-[1600px] mx-auto h-full relative z-10">
          <div className="h-full flex items-center justify-center">
            <div className="text-center px-8 lg:px-16 xl:px-24 py-16">
              <h1 className="mb-8">
                <div
                  className="leading-none mb-2 text-[#00276B]"
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontStyle: "italic",
                    fontSize: "80px",
                    fontWeight: 400,
                  }}
                >
                  DUKUNG
                </div>
                <div
                  className="leading-none text-[#C41E3A]"
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "100px",
                    fontWeight: 800,
                  }}
                >
                  STTB
                </div>
              </h1>

              <p className="text-2xl mb-12 max-w-2xl mx-auto leading-relaxed text-[#00276B]">
                Bersama kita mempersiapkan pelayan Tuhan bagi generasi
                berikutnya.
              </p>

              <button className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-[#C41E3A] text-white font-bold text-lg shadow-lg transition-all hover:shadow-xl">
                Cara Berdonasi <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — IMPACT STATEMENT */}
      <section className="py-20 bg-[#F8F7F4]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-0">
            {/* Stat 1 */}
            <div className="text-center py-12 border-r border-[#C41E3A]/20">
              <div
                className="text-7xl lg:text-8xl font-bold mb-4 text-[#C41E3A]"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                2
              </div>
              <p className="text-lg font-semibold text-[#00276B]">
                Jenis Beasiswa Tersedia
              </p>
            </div>

            {/* Stat 2 */}
            <div className="text-center py-12 border-r border-[#C41E3A]/20">
              <div
                className="text-5xl lg:text-6xl font-bold mb-4 text-[#C41E3A]"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                S1 &amp; S2
              </div>
              <p className="text-lg font-semibold text-[#00276B]">
                Jenjang Penerima Manfaat
              </p>
            </div>

            {/* Stat 3 */}
            <div className="text-center py-12">
              <div
                className="text-7xl lg:text-8xl font-bold mb-4 text-[#C41E3A]"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                100%
              </div>
              <p className="text-lg font-semibold text-[#00276B]">
                Laporan Tahunan untuk Sponsor
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — KONTRIBUSI ANDA */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — Text Block */}
            <div>
              <p className="text-sm font-bold tracking-[0.2em] uppercase mb-6 text-[#C41E3A]">
                MENGAPA INI PENTING
              </p>

              <h2 className="text-5xl lg:text-6xl font-bold mb-8 font-serif text-[#00276B]">
                Kontribusi Anda Mengubah Hidup
              </h2>

              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-[#6B7A99]">
                  Dengan mendukung STTB, Bapak/Ibu turut mempersiapkan dan
                  mendidik pelayan-pelayan Tuhan yang dibutuhkan untuk menjawab
                  tantangan zaman — menjadi berkat bagi gereja dan masyarakat
                  luas.
                </p>

                <p className="text-lg leading-relaxed text-[#6B7A99]">
                  Sebagai lembaga pendidikan teologi yang telah dipercaya sejak
                  1952, STTB berkomitmen untuk menghasilkan pastor-scholar yang
                  berdampak dalam konteks pelayanan urban. Setiap kontribusi
                  Anda langsung mendukung mahasiswa terpilih untuk menyelesaikan
                  studi mereka dengan keunggulan.
                </p>

                <div className="w-16 h-1 bg-[#C41E3A] mt-8" />
              </div>
            </div>

            {/* Right — Photo with Red Accent */}
            <div className="relative">
              <div className="absolute left-0 top-0 h-full w-1.5 bg-[#C41E3A] z-10" />
              <Image
                src="/images/Image (Students in group discussion).png"
                alt="Students in group discussion"
                width={700}
                height={500}
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — PRIORITAS PENGGUNAAN DONASI */}
      <section className="py-24 bg-[#003F8A]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Section Title */}
          <div className="text-center mb-16">
            <p className="text-sm font-bold tracking-[0.2em] uppercase mb-4 text-[#C41E3A]">
              DAMPAK NYATA
            </p>
            <h2 className="text-5xl lg:text-6xl font-bold text-white font-serif">
              Prioritas Penggunaan Donasi
            </h2>
          </div>

          {/* Three Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 — Program Beasiswa */}
            <div className="relative bg-[#00276B] rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-[#C41E3A] text-white text-xs font-bold tracking-wider z-10">
                BEASISWA
              </div>
              <div className="h-64 overflow-hidden relative">
                <Image
                  src="/images/Image (Students) jumping.png"
                  alt="Student group"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 font-serif">
                  Program Beasiswa
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Mendukung mahasiswa S1 &amp; S2 yang terpanggil namun terbatas
                  secara finansial.
                </p>
              </div>
            </div>

            {/* Card 2 — Pengembangan Akademik */}
            <div className="relative bg-[#00276B] rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-[#C41E3A] text-white text-xs font-bold tracking-wider z-10">
                PENDIDIKAN
              </div>
              <div className="h-64 overflow-hidden relative">
                <Image
                  src="/images/Image (Student in library).png"
                  alt="Library student"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center 20%" }}
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 font-serif">
                  Pengembangan Akademik
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Meningkatkan kualitas pendidikan teologi melalui riset dan
                  sumber daya pengajaran.
                </p>
              </div>
            </div>

            {/* Card 3 — Fasilitas Kampus */}
            <div className="relative bg-[#00276B] rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-[#C41E3A] text-white text-xs font-bold tracking-wider z-10">
                FASILITAS
              </div>
              <div className="h-64 overflow-hidden relative">
                <Image
                  src="/images/Image (Classroom).png"
                  alt="Classroom"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 font-serif">
                  Fasilitas Kampus
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Memelihara dan mengembangkan lingkungan belajar yang kondusif
                  bagi pembentukan karakter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — KESEDIAAN MENDUKUNG (FAQ) */}
      <section className="py-24 bg-[#F8F7F4]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Left — Header */}
            <div className="lg:col-span-5">
              <p className="text-sm font-bold tracking-[0.2em] uppercase mb-4 text-[#C41E3A]">
                PERTANYAAN UMUM
              </p>

              <h2 className="text-5xl lg:text-6xl font-bold mb-8 font-serif text-[#00276B]">
                Kesediaan Mendukung
              </h2>

              <p className="text-lg leading-relaxed text-[#6B7A99]">
                Berikut adalah jawaban atas pertanyaan umum seputar program
                dukungan beasiswa STTB. Jika Anda memiliki pertanyaan lebih
                lanjut, jangan ragu untuk menghubungi kami.
              </p>
            </div>

            {/* Right — Accordion FAQ */}
            <div className="lg:col-span-7">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl border border-[#E8ECF2] overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                    >
                      <p className="text-lg font-bold flex-1 text-[#00276B]">
                        {faq.question}
                      </p>
                      <div
                        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                        style={{
                          background: openFaq === index ? "#C41E3A" : "#E8ECF2",
                        }}
                      >
                        {openFaq === index ? (
                          <Minus className="w-4 h-4 text-white" />
                        ) : (
                          <Plus className="w-4 h-4 text-[#C41E3A]" />
                        )}
                      </div>
                    </button>

                    {openFaq === index && (
                      <div className="px-6 pb-5">
                        <p className="text-base leading-relaxed text-[#6B7A99]">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — FORMULIR DUKUNGAN */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Left — Info & Bank Details */}
            <div className="lg:col-span-5">
              <p className="text-sm font-bold tracking-[0.2em] uppercase mb-4 text-[#C41E3A]">
                LANGKAH SELANJUTNYA
              </p>

              <h2 className="text-5xl lg:text-6xl font-bold mb-8 font-serif text-[#00276B]">
                Formulir Dukungan
              </h2>

              <p className="text-lg leading-relaxed mb-12 text-[#6B7A99]">
                Lengkapi form berikut untuk memulai proses dukungan. Setelah
                kami menerima informasi Anda, tim beasiswa akan menghubungi
                untuk tindak lanjut.
              </p>

              {/* Bank Transfer Card */}
              <div className="p-8 rounded-2xl mb-8 bg-[#00276B]">
                <p className="text-sm font-bold tracking-wider uppercase text-white/70 mb-4">
                  TRANSFER KE REKENING STTB
                </p>
                <div className="space-y-3 text-white mb-6">
                  <p className="text-xl font-bold">BCA Surya Semesthi</p>
                  <p className="text-2xl font-bold font-serif text-[#C41E3A]">
                    262 308 9066
                  </p>
                  <p className="text-base">Yayasan STT Bandung</p>
                </div>

                <div className="pt-4 border-t border-white/20">
                  <p className="text-sm font-semibold text-white/70 mb-1">
                    Email:
                  </p>
                  <p className="text-lg font-bold text-white">
                    keuangan@sttb.ac.id
                  </p>
                </div>
              </div>

              {/* STTB Logo */}
              <div className="p-6 border-2 border-[#E8ECF2] rounded-2xl flex items-center justify-center">
                <Image
                  src="/images/Image (STTB Logo).png"
                  alt="STTB Official Logo"
                  width={200}
                  height={80}
                  className="h-20 w-auto object-contain"
                />
              </div>
            </div>

            {/* Right — Form Card */}
            <div className="lg:col-span-7">
              <div className="p-8 lg:p-12 rounded-2xl shadow-xl border border-[#E8ECF2] bg-white">
                <div className="mb-8">
                  <p className="text-sm font-bold tracking-wider uppercase mb-2 text-[#C41E3A]">
                    STEP 1 OF 2
                  </p>
                  <h3 className="text-3xl font-bold font-serif text-[#00276B]">
                    Informasi Kontak
                  </h3>
                </div>

                <form className="space-y-6">
                  {/* Nama */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-[#00276B]">
                      Nama Bapak/Ibu
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-[#E8ECF2] focus:outline-none focus:ring-2 focus:ring-[#0056B3] transition-all"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-[#00276B]">
                      Alamat Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-[#E8ECF2] focus:outline-none focus:ring-2 focus:ring-[#0056B3] transition-all"
                      placeholder="email@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-[#00276B]">
                      No. Handphone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-[#E8ECF2] focus:outline-none focus:ring-2 focus:ring-[#0056B3] transition-all"
                      placeholder="08xx xxxx xxxx"
                    />
                  </div>

                  {/* Dropdown */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-[#00276B]">
                      Jenis Beasiswa yang Ingin Didukung
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-[#E8ECF2] focus:outline-none focus:ring-2 focus:ring-[#0056B3] transition-all">
                      <option>Pilih jenis beasiswa</option>
                      <option>Pastor Scholar (S1)</option>
                      <option>Formatio (S1)</option>
                      <option>Transformative Leadership (S1 &amp; S2)</option>
                      <option>Semua Jenis Beasiswa</option>
                    </select>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-lg bg-[#C41E3A] text-white font-bold text-lg shadow-lg transition-all hover:shadow-xl flex items-center justify-center gap-3"
                  >
                    Selanjutnya <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
