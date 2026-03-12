"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

export default function AdmisiPendaftaranOnlinePage() {
  const [showOnlineForm, setShowOnlineForm] = useState(false);
  const [showManualForm, setShowManualForm] = useState(false);

  return (
    <div className="min-h-screen font-sans">
      <main>
        {/* SECTION 1 — HERO */}
        <section className="relative overflow-hidden">
          <div className="grid lg:grid-cols-2 min-h-[75vh]">
            {/* Left Column — Content */}
            <div className="relative flex items-center px-8 lg:px-16 xl:px-24 py-20 bg-[#F8F7F4]">
              <div className="max-w-2xl">
                <p className="uppercase font-bold mb-6 text-xs text-[#C41E3A] tracking-[0.15em]">
                  PORTAL ADMISI STTB
                </p>

                <h1 className="mb-8">
                  <span
                    className="block mb-2 italic text-[#00276B] leading-tight"
                    style={{
                      fontFamily: "Playfair Display, serif",
                      fontSize: "clamp(3rem, 6vw, 4.5rem)",
                      fontWeight: 400,
                    }}
                  >
                    Pendaftaran
                  </span>
                  <span
                    className="block font-serif font-bold text-[#00276B] leading-tight"
                    style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
                  >
                    MAHASISWA BARU
                  </span>
                </h1>

                <p
                  className="mb-10 text-base text-[#1A2340] leading-relaxed"
                  style={{ maxWidth: "540px" }}
                >
                  Sistem pendaftaran mahasiswa baru STTB. Pilih metode
                  pendaftaran yang sesuai dengan kebutuhan Anda—online untuk
                  kemudahan akses atau manual untuk pendampingan personal.
                </p>

                <button
                  className="px-8 py-3 rounded-lg font-semibold text-sm text-[#003F8A] border-2 border-[#003F8A] bg-transparent transition-all"
                  onClick={() =>
                    alert("Login akan terhubung ke sistem eksternal")
                  }
                >
                  Login ke Akun Anda →
                </button>
              </div>
            </div>

            {/* Right Column — Hero Image */}
            <div className="relative overflow-hidden min-h-[400px]">
              <Image
                src="/images/pendaftaran-online.png"
                alt="Pendaftaran Online STTB"
                fill
                className="object-cover object-center"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, rgba(0, 39, 107, 0.15) 0%, transparent 40%)",
                }}
              />
            </div>
          </div>
        </section>

        {/* SECTION 2 — REGISTRATION OPTIONS */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-16">
            {/* Section Header */}
            <div className="text-center mb-16">
              <p className="uppercase font-bold mb-4 text-[13px] text-[#C41E3A] tracking-[0.12em]">
                PILIH METODE PENDAFTARAN
              </p>
              <h2
                className="mb-4 font-serif font-bold text-[#00276B]"
                style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)" }}
              >
                Dua Jalur, Satu Tujuan
              </h2>
              <p
                className="mx-auto text-[15px] text-[#6B7A99] leading-relaxed"
                style={{ maxWidth: "640px" }}
              >
                Kami menyediakan dua jalur pendaftaran untuk memberikan
                fleksibilitas dan kenyamanan bagi calon mahasiswa.
              </p>
            </div>

            {/* Two Registration Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Card 1 — Online Registration */}
              <div className="relative overflow-hidden rounded-2xl transition-all hover:shadow-2xl bg-white border-2 border-[#E8ECF2] shadow-[0_4px_16px_rgba(0,39,107,0.08)]">
                <div className="p-8 lg:p-10">
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6"
                    style={{
                      background:
                        "linear-gradient(135deg, #C41E3A 0%, #E63950 100%)",
                    }}
                  >
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>

                  <h3 className="mb-3 font-serif font-bold text-[28px] text-[#00276B]">
                    Pendaftaran Online
                  </h3>

                  <p className="mb-6 text-sm text-[#6B7A99] leading-relaxed">
                    Lengkapi formulir pendaftaran secara digital dari mana saja,
                    kapan saja. Proses lebih cepat dan efisien.
                  </p>

                  <ul className="mb-8 space-y-3">
                    {[
                      "Akses 24/7 dari mana saja",
                      "Simpan progress dan lanjutkan nanti",
                      "Upload dokumen langsung",
                      "Notifikasi otomatis via email",
                    ].map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm text-[#1A2340]"
                      >
                        <svg
                          className="w-5 h-5 mr-3 flex-shrink-0 text-[#C41E3A]"
                          style={{ marginTop: "2px" }}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setShowOnlineForm(true)}
                    className="w-full px-8 py-4 rounded-lg font-bold text-base text-white transition-all shadow-md hover:shadow-xl"
                    style={{
                      background: "linear-gradient(90deg, #C41E3A, #E63950)",
                    }}
                  >
                    Mulai Pendaftaran Online →
                  </button>
                </div>
              </div>

              {/* Card 2 — Manual Registration */}
              <div className="relative overflow-hidden rounded-2xl transition-all hover:shadow-2xl bg-white border-2 border-[#E8ECF2] shadow-[0_4px_16px_rgba(0,39,107,0.08)]">
                <div className="p-8 lg:p-10">
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6"
                    style={{
                      background:
                        "linear-gradient(135deg, #003F8A 0%, #0056B3 100%)",
                    }}
                  >
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>

                  <h3 className="mb-3 font-serif font-bold text-[28px] text-[#00276B]">
                    Pendaftaran Manual
                  </h3>

                  <p className="mb-6 text-sm text-[#6B7A99] leading-relaxed">
                    Kunjungi kampus untuk pendampingan langsung dari tim admisi.
                    Ideal untuk konsultasi dan bantuan pengisian formulir.
                  </p>

                  <ul className="mb-8 space-y-3">
                    {[
                      "Pendampingan personal dari staf",
                      "Konsultasi langsung tentang program",
                      "Verifikasi dokumen on-the-spot",
                      "Jawaban langsung untuk pertanyaan",
                    ].map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm text-[#1A2340]"
                      >
                        <svg
                          className="w-5 h-5 mr-3 flex-shrink-0 text-[#003F8A]"
                          style={{ marginTop: "2px" }}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setShowManualForm(true)}
                    className="w-full px-8 py-4 rounded-lg font-bold text-base text-[#003F8A] border-2 border-[#003F8A] bg-transparent transition-all"
                  >
                    Jadwalkan Kunjungan →
                  </button>
                </div>
              </div>
            </div>

            {/* Information Buttons Grid */}
            <div className="border-t-2 border-[#E8ECF2] pt-12">
              <p className="text-center uppercase font-bold mb-8 text-xs text-[#6B7A99] tracking-[0.12em]">
                INFORMASI PENDUKUNG
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    title: "Jadwal Admisi",
                    desc: "Lihat timeline lengkap",
                    link: "/admisi/jadwal-pendaftaran",
                  },
                  {
                    title: "Prosedur Admisi",
                    desc: "Panduan step-by-step",
                    link: "/admisi/prosedur-admisi",
                  },
                  {
                    title: "Petunjuk Pengisian Form",
                    desc: "Tutorial lengkap",
                    link: "#",
                  },
                  {
                    title: "Informasi Prodi",
                    desc: "Program studi tersedia",
                    link: "#",
                  },
                ].map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.link}
                    className="block p-6 rounded-xl transition-all hover:shadow-lg bg-[#00276B]"
                  >
                    <h4 className="mb-2 text-base font-bold text-white">
                      {item.title}
                    </h4>
                    <p className="text-[13px] text-[#9AA3B5]">{item.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — CONTACT SUPPORT */}
        <section className="py-16 lg:py-20 text-center bg-[#F5F7FA]">
          <div className="max-w-3xl mx-auto px-6 lg:px-16">
            <h3
              className="mb-4 font-serif font-bold text-[#00276B]"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
            >
              Butuh Bantuan?
            </h3>
            <p className="mb-8 text-[15px] text-[#6B7A99] leading-relaxed">
              Tim Admisi STTB siap membantu Anda. Hubungi kami melalui WhatsApp,
              email, atau kunjungi kampus untuk konsultasi langsung.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/6281573360009"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-lg font-semibold text-[15px] text-white transition-all shadow-md hover:shadow-lg"
                style={{ background: "#25D366" }}
              >
                WhatsApp Admisi
              </a>
              <a
                href="mailto:admisi@sttb.ac.id"
                className="px-8 py-4 rounded-lg font-semibold text-[15px] text-[#003F8A] border-2 border-[#003F8A] bg-transparent transition-all"
              >
                Email Admisi
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 4 — CAMPUS LOCATION & CONTACT */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column — Logo */}
              <div className="flex justify-center lg:justify-end">
                <Image
                  src="/images/image (STTB Logo).png"
                  alt="STTB Logo"
                  width={256}
                  height={256}
                  className="w-64 h-auto"
                  style={{
                    filter: "drop-shadow(0 4px 16px rgba(0, 39, 107, 0.1))",
                  }}
                />
              </div>

              {/* Right Column — Contact Information */}
              <div>
                <h3
                  className="mb-6 font-serif font-bold text-[#00276B]"
                  style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)" }}
                >
                  Kunjungi Kampus Kami
                </h3>

                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mr-4 bg-[#E8F0FB]">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="#003F8A"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[15px] font-semibold text-[#1A2340] mb-1">
                        Alamat
                      </p>
                      <p className="text-sm text-[#6B7A99] leading-relaxed">
                        Jalan Dr. Junjunan No. 105
                        <br />
                        Kodepos: 40173
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mr-4 bg-[#E8F0FB]">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="#003F8A"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[15px] font-semibold text-[#1A2340] mb-1">
                        Telepon
                      </p>
                      <p className="text-sm text-[#6B7A99]">022-6016454</p>
                    </div>
                  </div>

                  {/* Fax */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mr-4 bg-[#E8F0FB]">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="#003F8A"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[15px] font-semibold text-[#1A2340] mb-1">
                        Fax
                      </p>
                      <p className="text-sm text-[#6B7A99]">022-6077921</p>
                    </div>
                  </div>

                  {/* Website */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mr-4 bg-[#E8F0FB]">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="#003F8A"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[15px] font-semibold text-[#1A2340] mb-1">
                        Website
                      </p>
                      <a
                        href="https://sttb.ac.id"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#003F8A] font-semibold"
                      >
                        sttb.ac.id →
                      </a>
                    </div>
                  </div>
                </div>

                <a
                  href="https://maps.app.goo.gl/WC5B2P65oywUBhuQ8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-8 px-8 py-4 rounded-lg font-bold text-[15px] text-white transition-all shadow-md hover:shadow-xl"
                  style={{
                    background: "linear-gradient(90deg, #C41E3A, #E63950)",
                  }}
                >
                  Lihat di Google Maps →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* MODAL — ONLINE REGISTRATION FORM */}
      {showOnlineForm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0, 0, 0, 0.7)" }}
          onClick={() => setShowOnlineForm(false)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowOnlineForm(false)}
              className="absolute top-6 right-6 p-2 rounded-lg transition-all hover:bg-gray-100 text-[#6B7A99]"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-8 lg:p-12">
              <h2 className="mb-3 font-serif font-bold text-[32px] text-[#00276B]">
                Formulir Pendaftaran Online
              </h2>
              <p className="mb-8 text-sm text-[#6B7A99] leading-relaxed">
                Lengkapi data diri Anda dengan teliti. Semua field yang ditandai
                dengan (*) wajib diisi.
              </p>

              <form className="space-y-6">
                <div>
                  <h3 className="mb-4 text-base font-bold text-[#00276B]">
                    Data Pribadi
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block mb-2 text-sm font-semibold text-[#1A2340]">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg text-sm border border-[#E8ECF2] outline-none transition-all"
                        placeholder="Masukkan nama lengkap sesuai KTP"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block mb-2 text-sm font-semibold text-[#1A2340]">
                          Email *
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 rounded-lg text-sm border border-[#E8ECF2] outline-none transition-all"
                          placeholder="email@example.com"
                        />
                      </div>

                      <div>
                        <label className="block mb-2 text-sm font-semibold text-[#1A2340]">
                          No. WhatsApp *
                        </label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 rounded-lg text-sm border border-[#E8ECF2] outline-none transition-all"
                          placeholder="08123456789"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-semibold text-[#1A2340]">
                        Program Studi yang Diminati *
                      </label>
                      <select className="w-full px-4 py-3 rounded-lg text-sm border border-[#E8ECF2] outline-none transition-all">
                        <option>Pilih Program Studi</option>
                        <option>Sarjana Teologi (S.Th.)</option>
                        <option>Sarjana Pendidikan Kristen (S.Pd.K.)</option>
                        <option>Magister Teologi (M.Th.)</option>
                        <option>Magister Pendidikan Kristen (M.Pd.K.)</option>
                        <option>Magister Ministri</option>
                      </select>
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-semibold text-[#1A2340]">
                        Gelombang Pendaftaran *
                      </label>
                      <select className="w-full px-4 py-3 rounded-lg text-sm border border-[#E8ECF2] outline-none transition-all">
                        <option>Pilih Gelombang</option>
                        <option>Gelombang I - Oktober 2025</option>
                        <option>Gelombang II - Februari 2026</option>
                        <option>Gelombang III - April 2026</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-[#E8F0FB] border border-[#0056B3]">
                  <p className="text-sm text-[#00276B] leading-relaxed">
                    <strong>Catatan:</strong> Formulir ini akan terhubung ke
                    sistem eksternal. Untuk saat ini, ini adalah tampilan
                    placeholder untuk demonstrasi alur pendaftaran.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    alert("Formulir akan terhubung ke sistem eksternal")
                  }
                  className="w-full px-8 py-4 rounded-lg font-bold text-base text-white transition-all shadow-md hover:shadow-xl"
                  style={{
                    background: "linear-gradient(90deg, #C41E3A, #E63950)",
                  }}
                >
                  Lanjutkan ke Sistem Pendaftaran →
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* MODAL — MANUAL REGISTRATION FORM */}
      {showManualForm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0, 0, 0, 0.7)" }}
          onClick={() => setShowManualForm(false)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowManualForm(false)}
              className="absolute top-6 right-6 p-2 rounded-lg transition-all hover:bg-gray-100 text-[#6B7A99]"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-8 lg:p-12">
              <h2 className="mb-3 font-serif font-bold text-[32px] text-[#00276B]">
                Jadwalkan Kunjungan
              </h2>
              <p className="mb-8 text-sm text-[#6B7A99] leading-relaxed">
                Isi formulir di bawah ini untuk menjadwalkan kunjungan Anda ke
                kampus STTB. Tim kami akan menghubungi Anda untuk konfirmasi.
              </p>

              <form className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block mb-2 text-sm font-semibold text-[#1A2340]">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg text-sm border border-[#E8ECF2] outline-none transition-all"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2 text-sm font-semibold text-[#1A2340]">
                        No. WhatsApp *
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-lg text-sm border border-[#E8ECF2] outline-none transition-all"
                        placeholder="08123456789"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-semibold text-[#1A2340]">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-lg text-sm border border-[#E8ECF2] outline-none transition-all"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-semibold text-[#1A2340]">
                      Tanggal Kunjungan yang Diinginkan *
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 rounded-lg text-sm border border-[#E8ECF2] outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-semibold text-[#1A2340]">
                      Waktu Kunjungan *
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg text-sm border border-[#E8ECF2] outline-none transition-all">
                      <option>Pilih Waktu</option>
                      <option>09:00 - 11:00</option>
                      <option>11:00 - 13:00</option>
                      <option>13:00 - 15:00</option>
                      <option>15:00 - 17:00</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-semibold text-[#1A2340]">
                      Keperluan Kunjungan
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg text-sm border border-[#E8ECF2] outline-none transition-all resize-y"
                      placeholder="Ceritakan kebutuhan atau pertanyaan yang ingin Anda diskusikan..."
                    />
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-[#E8F0FB] border border-[#0056B3]">
                  <p className="text-sm text-[#00276B] leading-relaxed">
                    <strong>Catatan:</strong> Formulir ini akan terhubung ke
                    sistem penjadwalan eksternal. Tim admisi akan menghubungi
                    Anda dalam 1x24 jam untuk konfirmasi jadwal.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    alert("Formulir akan terhubung ke sistem eksternal")
                  }
                  className="w-full px-8 py-4 rounded-lg font-bold text-base text-[#003F8A] border-2 border-[#003F8A] bg-transparent transition-all"
                >
                  Kirim Permintaan Kunjungan →
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
