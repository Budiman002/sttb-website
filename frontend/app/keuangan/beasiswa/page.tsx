"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Download, Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Apakah STTB menyediakan beasiswa bagi mahasiswa?",
    answer: "Ya, STTB menyediakan beasiswa bagi mahasiswa S1 dan S2.",
  },
  {
    question: "Apa saja jenis beasiswa yang STTB tawarkan?",
    answer:
      "Ada 3 jenis beasiswa: Pastor Scholar, Formatio, dan Transformative Leadership.",
  },
  {
    question: "Siapa saja yang bisa mendapatkan beasiswa?",
    answer:
      "Mahasiswa aktif penuh waktu yang memenuhi syarat dan lolos proses seleksi.",
  },
  {
    question: "Apa syarat dan ketentuannya?",
    answer:
      "Syarat berbeda untuk setiap jenis beasiswa. Penjelasan lengkap ada di masing-masing jenis.",
  },
  {
    question: "Bagaimana cara mendaftar aplikasi beasiswa?",
    answer:
      "Unduh form aplikasi di www.sttb.ac.id, lengkapi syarat yang ditentukan, lalu kirimkan kembali.",
  },
  {
    question: "Kapan saya bisa mengirim aplikasi beasiswa?",
    answer:
      "Selambat-lambatnya 3 minggu sebelum periode pendaftaran ditutup. Cek jadwal setiap tahun ajaran.",
  },
  {
    question: "Apakah saya bisa kehilangan beasiswa selama studi?",
    answer:
      "Bisa, jika evaluasi semester tidak memenuhi syarat yang ditentukan.",
  },
  {
    question: "Bisakah penerima beasiswa mengajukan jenis lain?",
    answer:
      "Tidak, penerima beasiswa tidak dapat mengajukan jenis beasiswa lain di periode berikutnya.",
  },
  {
    question: "Jika tidak lolos, bisakah mendaftar lagi?",
    answer: "Ya, bisa mengajukan kembali di periode berikutnya.",
  },
];

function generateMockPdf(title: string): string {
  return `%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj
2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>
endobj
3 0 obj
<<
/Type /Page
/Parent 2 0 R
/Resources <<
/Font <<
/F1 <<
/Type /Font
/Subtype /Type1
/BaseFont /Helvetica
>>
>>
>>
/MediaBox [0 0 612 792]
/Contents 4 0 R
>>
endobj
4 0 obj
<<
/Length 109
>>
stream
BT
/F1 24 Tf
100 700 Td
(${title}) Tj
0 -30 Td
/F1 12 Tf
(Sekolah Tinggi Teologi Bandung) Tj
ET
endstream
endobj
xref
0 5
0000000000 65535 f
0000000009 00000 n
0000000058 00000 n
0000000115 00000 n
0000000317 00000 n
trailer
<<
/Size 5
/Root 1 0 R
>>
startxref
476
%%EOF`;
}

function triggerDownload(filename: string, content: string) {
  const blob = new Blob([content], { type: "application/pdf" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}

export default function BeasiswaSTTBPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleDownloadS1 = () => {
    triggerDownload(
      "Form_Beasiswa_S1_STTB.pdf",
      generateMockPdf("FORMULIR BEASISWA S1 - STTB"),
    );
  };

  const handleDownloadS2 = () => {
    triggerDownload(
      "Form_Beasiswa_S2_STTB.pdf",
      generateMockPdf("FORMULIR BEASISWA S2 - STTB"),
    );
  };

  return (
    <div className="min-h-screen font-sans">
      {/* HERO — SPLIT SCREEN WITH DIAGONAL CUT */}
      <section className="relative h-[85vh] overflow-hidden">
        {/* Label */}
        <div className="absolute top-12 left-6 lg:left-12 z-20">
          <p className="text-[#C41E3A] text-sm font-bold tracking-[0.2em] uppercase">
            KEUANGAN
          </p>
        </div>

        {/* Left Half — Off White */}
        <div className="absolute inset-0 w-[60%] bg-[#F5F7FA]" />

        {/* Right Half — Deep Navy with Quote */}
        <div className="absolute inset-0 left-[60%] bg-[#00276B]">
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="max-w-md px-8 text-center">
              <div className="w-24 h-0.5 bg-[#C41E3A] mx-auto mb-6" />
              <p
                className="text-white mb-6 italic"
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "32px",
                  lineHeight: "1.4",
                  fontWeight: 400,
                }}
              >
                &ldquo;Bagi mereka yang terpanggil, STTB hadir untuk memastikan
                panggilan itu terwujud.&rdquo;
              </p>
              <div className="w-24 h-0.5 bg-[#C41E3A] mx-auto" />
            </div>
          </div>
        </div>

        {/* Diagonal Cut Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(115deg, transparent 59%, #00276B 59.1%)",
          }}
        />

        {/* Content Layer */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 lg:px-16 xl:px-24 z-10">
          <h1
            className="font-bold leading-[0.85] tracking-tight text-[#C41E3A]"
            style={{
              fontFamily: "DM Serif Display, serif",
              fontSize: "clamp(6rem, 12vw, 12rem)",
            }}
          >
            BEASISWA
          </h1>
          <p
            className="text-3xl lg:text-4xl xl:text-5xl font-bold mt-8 max-w-xl leading-tight text-[#00276B]"
            style={{ fontFamily: "DM Serif Display, serif" }}
          >
            Membuka Jalan Bagi Mereka yang Terpanggil
          </p>
        </div>
      </section>

      {/* CHAPTER 01 — PASTOR SCHOLAR */}
      <section className="relative py-0 overflow-hidden bg-[#00276B]">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold opacity-[0.03] select-none pointer-events-none text-white"
          style={{
            fontFamily: "DM Serif Display, serif",
            fontSize: "28rem",
          }}
        >
          01
        </div>

        <div className="relative max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-5 gap-0">
            {/* Image */}
            <div className="relative lg:col-span-2 min-h-[400px]">
              <Image
                src="/images/Image (Students) jumping.png"
                alt="Students"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="lg:col-span-3 px-8 py-16 lg:px-20 lg:py-24">
              <p className="text-[#C41E3A] text-sm font-bold tracking-[0.2em] uppercase mb-4">
                BEASISWA S1
              </p>
              <h2
                className="text-5xl lg:text-7xl font-bold text-white mb-12"
                style={{ fontFamily: "DM Serif Display, serif" }}
              >
                PASTOR SCHOLAR
              </h2>

              <div className="space-y-4 mb-12">
                {[
                  "Diperuntukkan bagi mahasiswa S1 yang menjadikan STTB sebagai pilihan pertama",
                  "Beasiswa meliputi biaya pendidikan dari semester 1",
                  "Prestasi menonjol di SMA (rata-rata rapor min. 8.0)",
                  "Memiliki panggilan yang jelas dan rekomendasi kuat",
                  "Minimal IPK 2.75 semester 1, min. IPK 3.0 semester 2–4",
                  "Bersedia 15 jam/bulan membantu kegiatan administrasi",
                  "Ikatan dinas 0.5 N (setara 2 tahun) setelah lulus",
                  "Evaluasi kelanjutan beasiswa per semester",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1 bg-[#C41E3A]">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-lg text-white/90 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="inline-flex items-center justify-center px-8 py-4 bg-[#C41E3A] text-white rounded-lg shadow-lg font-bold text-base pointer-events-none cursor-default gap-2">
                Unduh Form Beasiswa S1 <span>→</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 02 — FORMATIO */}
      <section className="relative py-0 overflow-hidden bg-white">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold opacity-[0.04] select-none pointer-events-none text-[#00276B]"
          style={{
            fontFamily: "DM Serif Display, serif",
            fontSize: "28rem",
          }}
        >
          02
        </div>

        <div className="relative max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-5 gap-0">
            {/* Content */}
            <div className="lg:col-span-3 px-8 py-16 lg:px-20 lg:py-24 order-2 lg:order-1">
              <p className="text-[#C41E3A] text-sm font-bold tracking-[0.2em] uppercase mb-4">
                BEASISWA S1
              </p>
              <h2
                className="text-5xl lg:text-7xl font-bold text-[#00276B] mb-12"
                style={{ fontFamily: "DM Serif Display, serif" }}
              >
                FORMATIO
              </h2>

              <div className="space-y-4 mb-12">
                {[
                  "Berlaku dari tahun kedua atau semester 2",
                  "Prestasi belajar baik, lolos seleksi dan wawancara",
                  "Bersedia 15 jam/bulan untuk kegiatan administrasi",
                  "Ikatan dinas 0.5 N",
                  "Evaluasi kelanjutan beasiswa per semester",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1 bg-[#C41E3A]">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-lg text-[#374151] leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#00276B] text-[#00276B] rounded-lg font-bold text-base pointer-events-none cursor-default gap-2">
                Unduh Form Beasiswa S1 <span>→</span>
              </div>
            </div>

            {/* Image */}
            <div className="relative lg:col-span-2 min-h-[400px] order-1 lg:order-2">
              <Image
                src="/images/Image (Student in library).png"
                alt="Student in library"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 03 — TRANSFORMATIVE LEADERSHIP */}
      <section className="relative py-0 overflow-hidden bg-[#1A2340]">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold opacity-[0.03] select-none pointer-events-none text-white"
          style={{
            fontFamily: "DM Serif Display, serif",
            fontSize: "28rem",
          }}
        >
          03
        </div>

        <div className="relative max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-5 gap-0">
            {/* Image */}
            <div className="relative lg:col-span-2 min-h-[400px]">
              <Image
                src="/images/Image (Graduation).png"
                alt="Graduation"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="lg:col-span-3 px-8 py-16 lg:px-20 lg:py-24">
              <p className="text-[#C41E3A] text-sm font-bold tracking-[0.2em] uppercase mb-4">
                BEASISWA S1 – S2
              </p>
              <h2
                className="text-5xl lg:text-7xl font-bold text-white mb-12 leading-tight"
                style={{ fontFamily: "DM Serif Display, serif" }}
              >
                TRANSFORMATIVE LEADERSHIP
              </h2>

              <div className="space-y-4 mb-12">
                {[
                  "Untuk mahasiswa S2 berprestasi akademik dan non-akademik",
                  "Memiliki integritas dan panggilan yang jelas",
                  "Meliputi maksimal 50% total biaya pendidikan",
                  "Surat keterangan pelayanan 10 jam di lembaga domisili",
                  "Bersedia menjadi panitia dan koordinator kelas STTB",
                  "Tidak diberlakukan ikatan dinas",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1 bg-[#C41E3A]">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-lg text-white/90 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="inline-flex items-center justify-center px-8 py-4 bg-[#C41E3A] text-white rounded-lg shadow-lg font-bold text-base pointer-events-none cursor-default gap-2">
                Unduh Form Beasiswa S2 <span>→</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-[#FAF8F5]">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold opacity-[0.02] select-none pointer-events-none text-[#00276B]"
          style={{
            fontFamily: "DM Serif Display, serif",
            fontSize: "clamp(18rem, 24vw, 24rem)",
          }}
        >
          FAQ
        </div>

        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[#C41E3A] text-sm font-bold tracking-[0.2em] uppercase mb-4">
              PERTANYAAN UMUM
            </p>
            <h2
              className="text-4xl lg:text-6xl font-bold text-[#00276B]"
              style={{ fontFamily: "DM Serif Display, serif" }}
            >
              FAQ Calon Penerima Beasiswa
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-[#F3F4F6] overflow-hidden transition-all hover:shadow-md"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 flex items-center justify-between gap-6 text-left"
                >
                  <div className="flex items-center gap-6 flex-1">
                    <span
                      className="text-3xl font-bold flex-shrink-0 text-[#C41E3A]"
                      style={{ fontFamily: "DM Serif Display, serif" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-lg lg:text-xl font-bold text-[#00276B]">
                      {faq.question}
                    </p>
                  </div>
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      background: openFaq === index ? "#C41E3A" : "#F3F4F6",
                      transform:
                        openFaq === index ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    {openFaq === index ? (
                      <Minus className="w-5 h-5 text-white" />
                    ) : (
                      <Plus className="w-5 h-5 text-[#C41E3A]" />
                    )}
                  </div>
                </button>

                <div
                  style={{
                    maxHeight: openFaq === index ? "500px" : "0px",
                    opacity: openFaq === index ? 1 : 0,
                    overflow: "hidden",
                    transition:
                      "max-height 0.4s ease-in-out, opacity 0.3s ease-in-out",
                  }}
                >
                  <div className="px-8 pb-6 pl-24">
                    <p className="text-base lg:text-lg leading-relaxed text-[#4B5563]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SYARAT & FORMULIR SECTION */}
      <section className="py-20 lg:py-32 bg-[#F5F7FA]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Syarat & Ketentuan */}
            <div>
              <div className="w-16 h-1 bg-[#C41E3A] mb-6" />
              <h2
                className="text-4xl lg:text-5xl font-bold text-[#00276B] mb-8"
                style={{ fontFamily: "DM Serif Display, serif" }}
              >
                Syarat & Ketentuan Beasiswa
              </h2>

              <div className="space-y-6">
                {[
                  {
                    num: "01",
                    text: "Beasiswa STTB hanya untuk mahasiswa aktif penuh waktu yang terdaftar resmi",
                  },
                  {
                    num: "02",
                    text: "Setiap jenis beasiswa memiliki persyaratan khusus yang harus dipenuhi",
                  },
                  {
                    num: "03",
                    text: "Penerima beasiswa wajib menjaga integritas akademik dan spiritual",
                  },
                  {
                    num: "04",
                    text: "Evaluasi berkala dilakukan setiap semester untuk memastikan kelayakan",
                  },
                  {
                    num: "05",
                    text: "Beasiswa dapat dicabut jika syarat tidak terpenuhi atau pelanggaran terjadi",
                  },
                  {
                    num: "06",
                    text: "Penerima tidak dapat mengajukan lebih dari satu jenis beasiswa bersamaan",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-[#00276B]">
                      <span className="text-white font-bold text-sm">
                        {item.num}
                      </span>
                    </div>
                    <p className="text-base lg:text-lg leading-relaxed text-[#4B5563] pt-2">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Download Forms */}
            <div>
              <div className="w-16 h-1 bg-[#C41E3A] mb-6" />
              <h2
                className="text-4xl lg:text-5xl font-bold text-[#00276B] mb-8"
                style={{ fontFamily: "DM Serif Display, serif" }}
              >
                Formulir Pengajuan
              </h2>

              <p className="text-lg mb-12 leading-relaxed text-[#6B7A99]">
                Unduh formulir yang sesuai dengan program studi Anda, lengkapi
                dengan dokumen pendukung, dan kirimkan sebelum batas waktu.
              </p>

              <div className="space-y-6">
                {/* Form S1 Card */}
                <button
                  onClick={handleDownloadS1}
                  className="relative p-8 rounded-2xl overflow-hidden w-full text-left transition-transform hover:scale-[1.02] active:scale-[0.98] bg-[#1A2340]"
                >
                  <p className="text-sm font-bold tracking-[0.15em] uppercase text-white/70 mb-2">
                    UNTUK PROGRAM SARJANA
                  </p>
                  <h3
                    className="text-3xl font-bold text-white mb-6"
                    style={{ fontFamily: "DM Serif Display, serif" }}
                  >
                    Form Beasiswa S1
                  </h3>
                  <div className="flex items-center gap-3 text-white font-bold">
                    <Download className="w-5 h-5" />
                    <span>Unduh Formulir →</span>
                  </div>
                </button>

                {/* Form S2 Card */}
                <button
                  onClick={handleDownloadS2}
                  className="relative p-8 rounded-2xl overflow-hidden w-full text-left transition-transform hover:scale-[1.02] active:scale-[0.98] bg-[#C41E3A]"
                >
                  <p className="text-sm font-bold tracking-[0.15em] uppercase text-white/80 mb-2">
                    UNTUK PROGRAM MAGISTER
                  </p>
                  <h3
                    className="text-3xl font-bold text-white mb-6"
                    style={{ fontFamily: "DM Serif Display, serif" }}
                  >
                    Form Beasiswa S2
                  </h3>
                  <div className="flex items-center gap-3 text-white font-bold">
                    <Download className="w-5 h-5" />
                    <span>Unduh Formulir →</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA SECTION */}
      <section
        className="relative py-20 lg:py-24 overflow-hidden"
        style={{
          background: "linear-gradient(90deg, #C41E3A 0%, #E63950 100%)",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
          <h2
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "DM Serif Display, serif" }}
          >
            Tertarik Mendukung Beasiswa STTB?
          </h2>
          <p className="text-lg lg:text-2xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed">
            Setiap kontribusi membantu mewujudkan panggilan para calon
            pastor-scholar yang akan melayani dengan keunggulan.
          </p>
          <Link
            href="/keuangan/dukung-sttb"
            className="inline-flex items-center justify-center px-10 py-5 bg-white rounded-lg shadow-xl font-bold text-lg gap-2 transition-transform hover:scale-105 active:scale-95 text-[#00276B]"
          >
            Dukung STTB <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
