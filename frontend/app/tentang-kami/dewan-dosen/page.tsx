"use client";

import { useState } from "react";
import Image from "next/image";

const wakilKetua = [
  {
    name: "Tan Giok Lie",
    role: "Wakil Ketua I Akademik (Dosen Pendidikan)",
    credentials: [
      "Ed.D. Biola University Talbot School of Theology, USA",
      "M.A. Institut Alkitab Tiranus Bandung",
      "S.S. Universitas Kristen Maranatha Bandung",
    ],
    photo: "/images/dosen/Tan%20Giok%20Lie.png",
  },
  {
    name: "Wemmy Prayogo",
    role: "Wakil Ketua II Adm. & Keuangan (Dosen Pendidikan)",
    credentials: [
      "M.Ed. Monash University Australia",
      "S.Pd. Universitas Kristen Satya Wacana Salatiga",
    ],
    photo: "/images/dosen/Wemmy%20Prayogo.png",
  },
  {
    name: "Johan Setiawan",
    role: "Wakil Ketua III Kemahasiswaan (Dosen Biblika & Praktika)",
    credentials: [
      "M.Th. Sekolah Tinggi Teologi Bandung",
      "M.C.M. Discipleship Training Centre (DTC) Singapore",
      "S.Psi. Universitas Gadjah Mada Yogyakarta",
    ],
    photo: "/images/dosen/Johan%20Setiawan.png",
  },
];

const kaprodi = [
  {
    name: "Ferry Herlianto",
    role: "Ketua Program Studi S.Pd. (Dosen Pendidikan & Praktika)",
    credentials: ["M.Th. STA Tiranus", "S.Th. STT Tawangmangu"],
    photo: "/images/dosen/Ferry%20Herlianto.png",
  },
  {
    name: "Dwi Maria Handayani",
    role: "Ketua Program Studi M.Th. (Dosen Biblika & Praktika)",
    credentials: [
      "Ph.D. AGST Manila, Philippines",
      "M.Th. International Theological Seminary USA",
      "M.A. Sekolah Tinggi Teologi Bandung",
    ],
    photo: "/images/dosen/Dwi%20Maria%20Handayani.png",
  },
  {
    name: "Sarinah Lo",
    role: "Ketua Program Studi M.Pd.K (Dosen Pendidikan)",
    credentials: [
      "Ph.D. TEDS (Trinity Evangelical Divinity School)",
      "M.Ed. Calvin College USA",
      "M.A. Singapore Bible College",
    ],
    photo: "/images/dosen/Sarinah%20Lo.png",
  },
  {
    name: "Heriyanto",
    role: "Ketua Program Studi M.Min. (Dosen Biblika & Praktika)",
    credentials: [],
    photo: "/images/dosen/Heriyanto.png",
  },
  {
    name: "Kristian Kusumawardana",
    role: "Ketua Program Studi M.Th.",
    credentials: [],
    photo: "/images/dosen/Kristian%20Kusumawardana.png",
  },
];

const jajaranDosen = [
  {
    name: "Joseph Tong",
    specialization: "Dosen Filsafat, Sistematika & Praktika",
    photo: "/images/dosen/Joseph%20Tong.png",
    credentials: [
      "Ph.D. University of Southern California USA",
      "M.BA. Graduate Theological Foundation Indiana",
      "M.Th. Calvin Theological Seminary USA",
      "B.A. Calvin College USA",
      "B.Th. Seminari Alkitab Asia Tenggara Malang",
    ],
  },
  {
    name: "Herlise Y Sagala",
    specialization: "Dosen Biblika & Praktika",
    photo: "/images/dosen/Herlise%20Y%20Sagala.png",
    credentials: [
      "D.Th. Institut Injili Indonesia Batu Malang",
      "D.Min. Institut Injili Indonesia Batu Malang",
      "M.Th. International Theological Seminary USA",
      "M.Div. Institut Injili Indonesia Batu Malang",
      "S.Th. Institut Injili Indonesia Batu Malang",
      "B.A. Universitas 17 Agustus 1945 Medan",
    ],
  },
  {
    name: "Agus Gunawan",
    specialization: "Dosen Teologi, Praktika & Pendidikan",
    photo: "/images/dosen/Agus%20Gunawan.png",
    credentials: [
      "Ph.D. Biola University USA",
      "M.Th. International Theological Seminary USA",
      "M.Th. Trinity Theological College Singapore",
      "S.Th. SAAT Malang",
    ],
  },
  {
    name: "Chandra Koewoso",
    specialization: "Dosen Biblika & Praktika",
    photo: "/images/dosen/Chandra%20Koewoso.png",
    credentials: [
      "D.Min. Singapore Bible College Singapore",
      "M.Div. Singapore Bible College",
      "M.M. Universitas Tarumanagara Jakarta",
      "S.T. Universitas Tarumanagara Jakarta",
    ],
  },
  {
    name: "Budiyanto Santosa",
    specialization: "Dosen Pendidikan & Biblika",
    photo: "/images/dosen/Budiyanto%20Santosa.png",
    credentials: [
      "D.Min. Gordon Conwell Theological Seminary USA",
      "M.Th. Trinity Theological Seminary Singapore",
      "S.Th. Sekolah Tinggi Teologi SAAT Malang",
      "S.Pd. Universitas Katolik Indonesia Atmajaya Jakarta",
    ],
  },
  {
    name: "Philip Djung",
    specialization: "Dosen Sistematika",
    photo: "/images/dosen/Philip%20Djung.png",
    credentials: [
      "Ph.D. Calvin Theological Seminary USA",
      "M.Th. Calvin Theological Seminary USA",
      "M.Div. Singapore Bible College Singapore",
      "S.T. Universitas Tanjungpura Pontianak",
    ],
  },
  {
    name: "Doroti Tunggal Widjaja",
    specialization: "Dosen Biblika",
    photo: "/images/dosen/Doroti%20Tunggal%20widjaja.png",
    credentials: [
      "M.Th. International Theological Seminary USA",
      "M.A. International Theological Seminary USA",
      "B.Th. Sekolah Tinggi Teologi SAAT Malang",
    ],
  },
  {
    name: "Amy Iwani",
    specialization: "Dosen Pendidikan",
    photo: "/images/dosen/Amy%20Iwani.png",
    credentials: [
      "Ph.D. Columbia International University USA",
      "M.Ed. University of Southern Queensland Australia",
      "S.T. Institut Teknologi Nasional Malang Indonesia",
    ],
  },
  {
    name: "Grace Emilia",
    specialization: "Dosen Praktika",
    photo: "/images/dosen/Grace%20Emilia.png",
    credentials: [
      "S.S. Universitas Maranatha Bandung",
      "M.A. Sekolah Tinggi Teologi Bandung",
      "M.Div. Sekolah Tinggi Teologi Bandung",
      "M.Th. Tyndale University College & Seminary Toronto",
    ],
  },
  {
    name: "Winarsih",
    specialization: "Dosen Konseling (Praktika)",
    photo: "/images/dosen/Winarsih.png",
    credentials: [
      "M.Th. Sekolah Tinggi Teologi SAAT Malang",
      "S.Si. Universitas Sebelas Maret Surakarta",
    ],
  },
];

export default function DewanDosenPage() {
  const VISIBLE = 5;
  const total = jajaranDosen.length;
  const maxIndex = total - VISIBLE;
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(maxIndex, c + 1));

  return (
    <div className="min-h-screen" style={{ fontFamily: "var(--font-sans)" }}>
      <main>
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-[#00276B] to-[#003F8A]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <p
                className="text-[#C41E3A] text-sm font-bold tracking-[0.2em] uppercase mb-4"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                DEWAN PENGAJAR
              </p>
              <h1
                className="text-6xl lg:text-8xl font-bold text-white mb-8 leading-[0.95]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Dosen STTB
              </h1>
              <p
                className="text-xl lg:text-2xl text-white/90 leading-relaxed"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Para pengajar yang membentuk pastor-scholar berdampak di tengah
                konteks pelayanan urban
              </p>
            </div>
          </div>
        </section>

        {/* Ketua Section */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="mb-16">
              <div className="w-24 h-1 bg-[#C41E3A] mb-6" />
              <h2
                className="text-4xl lg:text-5xl font-bold"
                style={{ fontFamily: "var(--font-serif)", color: "#00276B" }}
              >
                Ketua
              </h2>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Large Photo */}
              <div className="lg:col-span-5">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group aspect-[3/4]">
                  <Image
                    src="/images/dosen/Sutrisna%20Harjanto.png"
                    alt="Sutrisna Harjanto"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#003F8A]/0 group-hover:bg-[#003F8A]/10 transition-all duration-500" />
                </div>
              </div>

              {/* Credentials */}
              <div className="lg:col-span-7">
                <h3
                  className="text-5xl lg:text-6xl font-bold mb-4"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "#00276B",
                  }}
                >
                  Sutrisna Harjanto
                </h3>
                <p
                  className="text-xl lg:text-2xl font-bold mb-8"
                  style={{ fontFamily: "var(--font-sans)", color: "#C41E3A" }}
                >
                  Ketua &mdash; Dosen Pendidikan, Biblika, Marketplace
                </p>
                <div className="space-y-3">
                  <p
                    className="text-lg text-gray-700 leading-relaxed"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    Ph.D. Trinity International University, Illinois USA
                  </p>
                  <p
                    className="text-lg text-gray-700 leading-relaxed"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    M.Div. Trinity Theological College, Singapore
                  </p>
                  <p
                    className="text-lg text-gray-700 leading-relaxed"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    S.Farm. Universitas Padjajaran, Bandung
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wakil Ketua Section */}
        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="mb-16">
              <div className="w-24 h-1 bg-[#C41E3A] mb-6" />
              <h2
                className="text-4xl lg:text-5xl font-bold"
                style={{ fontFamily: "var(--font-serif)", color: "#00276B" }}
              >
                Wakil Ketua
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {wakilKetua.map((person, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group"
                >
                  <div className="relative overflow-hidden aspect-square">
                    <Image
                      src={person.photo}
                      alt={person.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#003F8A]/0 group-hover:bg-[#003F8A]/10 transition-all duration-500" />
                  </div>

                  <div className="p-6">
                    <h3
                      className="text-2xl font-bold mb-2"
                      style={{
                        fontFamily: "var(--font-serif)",
                        color: "#00276B",
                      }}
                    >
                      {person.name}
                    </h3>
                    <p
                      className="text-sm font-bold mb-4"
                      style={{
                        fontFamily: "var(--font-sans)",
                        color: "#C41E3A",
                      }}
                    >
                      {person.role}
                    </p>
                    <div className="space-y-2">
                      {person.credentials.map((credential, idx) => (
                        <p
                          key={idx}
                          className="text-sm text-gray-600"
                          style={{ fontFamily: "var(--font-sans)" }}
                        >
                          {credential}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ketua Program Studi Section */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="mb-16">
              <div className="w-24 h-1 bg-[#C41E3A] mb-6" />
              <h2
                className="text-4xl lg:text-5xl font-bold"
                style={{ fontFamily: "var(--font-serif)", color: "#00276B" }}
              >
                Ketua Program Studi
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {kaprodi.map((person, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
                >
                  <div className="relative overflow-hidden aspect-square">
                    <Image
                      src={person.photo}
                      alt={person.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#003F8A]/0 group-hover:bg-[#003F8A]/10 transition-all duration-500" />
                  </div>

                  <div className="p-4">
                    <h3
                      className="text-lg font-bold mb-2"
                      style={{
                        fontFamily: "var(--font-serif)",
                        color: "#00276B",
                      }}
                    >
                      {person.name}
                    </h3>
                    <p
                      className="text-xs font-bold mb-3"
                      style={{
                        fontFamily: "var(--font-sans)",
                        color: "#C41E3A",
                      }}
                    >
                      {person.role}
                    </p>
                    {person.credentials.length > 0 && (
                      <div className="space-y-1">
                        {person.credentials.map((credential, idx) => (
                          <p
                            key={idx}
                            className="text-xs text-gray-600"
                            style={{ fontFamily: "var(--font-sans)" }}
                          >
                            {credential}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Jajaran Dosen Section */}
        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="mb-16">
              <div className="w-24 h-1 bg-[#C41E3A] mb-6" />
              <h2
                className="text-4xl lg:text-5xl font-bold"
                style={{ fontFamily: "var(--font-serif)", color: "#00276B" }}
              >
                Jajaran Dosen
              </h2>
            </div>

            {/* Carousel */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  width: `${(total / VISIBLE) * 100}%`,
                  transform: `translateX(-${current * (100 / total)}%)`,
                }}
              >
                {jajaranDosen.map((person, index) => (
                  <div
                    key={index}
                    style={{ width: `${100 / total}%` }}
                    className="px-3"
                  >
                    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group h-full">
                      <div className="relative overflow-hidden aspect-square">
                        <Image
                          src={person.photo}
                          alt={person.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-[#003F8A]/0 group-hover:bg-[#003F8A]/10 transition-all duration-500" />
                      </div>

                      <div className="p-4">
                        <h3
                          className="text-base font-bold mb-1"
                          style={{
                            fontFamily: "var(--font-serif)",
                            color: "#00276B",
                          }}
                        >
                          {person.name}
                        </h3>
                        <p
                          className="text-xs font-bold mb-3"
                          style={{
                            fontFamily: "var(--font-sans)",
                            color: "#C41E3A",
                          }}
                        >
                          {person.specialization}
                        </p>
                        <div className="space-y-1">
                          {person.credentials.map((cred, idx) => (
                            <p
                              key={idx}
                              className="text-xs text-gray-600"
                              style={{ fontFamily: "var(--font-sans)" }}
                            >
                              {cred}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots + Arrows */}
            <div className="flex items-center justify-center gap-6 mt-10">
              <button
                onClick={prev}
                disabled={current === 0}
                className="w-8 h-8 rounded-full border-2 border-[#003F8A] flex items-center justify-center text-[#003F8A] disabled:opacity-30 hover:bg-[#003F8A] hover:text-white transition-colors duration-200"
                aria-label="Previous"
              >
                &#8592;
              </button>

              <div className="flex gap-2">
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`rounded-full transition-all duration-200 ${
                      i === current
                        ? "w-4 h-4 bg-[#C41E3A]"
                        : "w-3 h-3 bg-[#003F8A] opacity-40 hover:opacity-70"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                disabled={current === maxIndex}
                className="w-8 h-8 rounded-full border-2 border-[#003F8A] flex items-center justify-center text-[#003F8A] disabled:opacity-30 hover:bg-[#003F8A] hover:text-white transition-colors duration-200"
                aria-label="Next"
              >
                &#8594;
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
