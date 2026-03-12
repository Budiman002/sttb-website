"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Users,
  Trophy,
  BookOpen,
  Award,
  Calendar,
  Heart,
  PartyPopper,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const heroImage =
  "/images/senat/Image%20(STTB%20Senat%20Students%20Group%20Photo).png";
const senatLogo = "/images/sttb-logo.svg";

const activityImages = [
  "/images/senat/Image%20(Senat%20activity%201).png",
  "/images/senat/Image%20(Senat%20activity%202).png",
  "/images/senat/Image%20(Senat%20activity%203).png",
  "/images/senat/Image%20(Senat%20activity%204).png",
  "/images/senat/Image%20(Senat%20activity%205).png",
  "/images/senat/Image%20(Senat%20activity%206).png",
  "/images/senat/Image%20(Senat%20activity%207).png",
  "/images/senat/Image%20(Senat%20activity%208).png",
];

const trainingImages = [
  "/images/senat/Image%20(Training%20Group%20activity%201).png",
  "/images/senat/Image%20(Training%20Group%20activity%202).png",
  "/images/senat/Image%20(Training%20Group%20activity%203).png",
];

const pembinaanImages = [
  "/images/senat/Image%20(Pembinaan%20%26%20Pelayanan%20activity%201).png",
  "/images/senat/Image%20(Pembinaan%20%26%20Pelayanan%20activity%202).png",
];

const perayaanImages = [
  "/images/senat/Image%20(Perayaan%20%26%20Peringatan%20activity%201).png",
  "/images/senat/Image%20(Perayaan%20%26%20Peringatan%20activity%202).png",
];

const kehidupanImages = [
  "/images/senat/Image%20(Kehidupan%20Kampus%20activity%201).png",
  "/images/senat/Image%20(Kehidupan%20Kampus%20activity%202).png",
];

const pembinaanMahasiswaImages = [
  "/images/senat/Image%20(Pembinaan%20Mahasiswa%20activity%201).png",
  "/images/senat/Image%20(Pembinaan%20Mahasiswa%20activity%202).png",
  "/images/senat/Image%20(Pembinaan%20Mahasiswa%20activity%203).png",
];

const ZoomOverlay = () => (
  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 text-[#00276B]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
          />
        </svg>
      </div>
    </div>
  </div>
);

export default function SenatPage() {
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (images: string[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = () =>
    setLightboxIndex((prev) => (prev + 1) % lightboxImages.length);

  const prevImage = () =>
    setLightboxIndex((prev) =>
      prev === 0 ? lightboxImages.length - 1 : prev - 1,
    );

  return (
    <div className="min-h-screen font-sans">
      <main>
        {/* Hero Section */}
        <section className="relative py-32 lg:py-40 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt="STTB Senat Students Group Photo"
              fill
              className="object-cover object-center"
              priority
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,39,107,0.92) 0%, rgba(0,63,138,0.88) 60%, rgba(0,86,179,0.84) 100%)",
              }}
            />
          </div>

          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <div className="relative h-20 w-20">
                <Image
                  src={senatLogo}
                  alt="STTB Senat Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* SENAT label */}
            <div className="text-center mb-8">
              <h1 className="text-2xl lg:text-3xl font-bold text-white tracking-[0.15em]">
                SENAT
              </h1>
            </div>

            {/* Tagline */}
            <div className="text-center mb-16">
              <p
                className="text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Students Today,
              </p>
              <p
                className="text-5xl lg:text-7xl font-bold text-white mb-12"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Leaders Tomorrow!
              </p>
            </div>

            {/* Description Cards */}
            <div className="max-w-6xl mx-auto space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-10 border border-white/20 flex flex-col items-center justify-center">
                <p className="text-white text-center leading-relaxed text-xl mb-6">
                  <span className="text-white/90">
                    Senat mahasiswa adalah suatu{" "}
                  </span>
                  <span className="font-semibold text-[#E63950]">
                    wadah untuk mengasah kepemimpinan
                  </span>
                  <span className="text-white/90">
                    {" "}
                    di dalam dan melalui Jama, dan peran sebagai warga dan
                    kepemimpinan mahasiswa dalam dunia rohani dan akademis.
                    Senat merupakan sarana dalam{" "}
                  </span>
                  <span className="font-semibold text-[#E63950]">
                    proses formasi
                  </span>
                  <span className="text-white/90">
                    {" "}
                    karena memberdayakan, menyelenggarakan sarana pembelajaran,
                    kemampuan bekerja mandiri dan bersama serta membentuk jiwa
                    untuk memperjuangkan suasana belajar dan bertumbuh yang
                    semakin kondusif.
                  </span>
                </p>
                <div className="w-16 h-0.5 bg-white/30" />
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 flex flex-col items-center justify-center">
                  <p className="text-white text-center leading-relaxed text-lg mb-6">
                    <span className="text-white/90">Ladang sangat </span>
                    <span className="font-semibold text-[#E63950]">
                      luas dan siap dituai
                    </span>
                    <span className="text-white/90">
                      , namun penuai sangat{" "}
                    </span>
                    <span className="font-semibold text-[#E63950]">
                      sedikit dan tidak siap
                    </span>
                    <span className="text-white/90">.</span>
                  </p>
                  <div className="w-16 h-0.5 bg-white/30" />
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 flex flex-col items-center justify-center">
                  <p className="text-white text-center leading-relaxed text-lg mb-6">
                    <span className="text-white/90">
                      Signifikansi dari vigensi{" "}
                    </span>
                    <span className="font-semibold text-[#E63950]">
                      kepemimpinan Kristen
                    </span>
                    <span className="text-white/90">
                      {" "}
                      dalam menjawab kebutuhan akan pemimpin bagi sekolah,
                      gereja, keluarga, lembaga pelayanan, dan lainnya misi.
                      Ladang sangat{" "}
                    </span>
                    <span className="font-semibold text-[#E63950]">
                      luas dan siap dituai
                    </span>
                    <span className="text-white/90">
                      , namun penuai sangat{" "}
                    </span>
                    <span className="font-semibold text-[#E63950]">
                      sedikit dan tidak siap
                    </span>
                    <span className="text-white/90">.</span>
                  </p>
                  <div className="w-16 h-0.5 bg-white/30" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Kegiatan Senat Section */}
        <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-[#FEE2E2] rounded-full mb-6">
                <p className="text-[#C41E3A] text-sm font-bold tracking-[0.2em] uppercase">
                  Kegiatan Senat
                </p>
              </div>
              <h2
                className="text-4xl lg:text-5xl font-bold text-[#00276B] mb-6"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Program &amp; Aktivitas
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                Berbagai kegiatan yang diselenggarakan Senat Mahasiswa untuk
                membangun kepemimpinan dan komunitas
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {activityImages.map((src, idx) => (
                <div
                  key={idx}
                  className="aspect-[4/3] relative rounded-xl overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300"
                  onClick={() => openLightbox(activityImages, idx)}
                >
                  <Image
                    src={src}
                    alt={`Senat activity ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                  <ZoomOverlay />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Group Section */}
        <section
          className="relative py-24 lg:py-32 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #00276B 0%, #003F8A 100%)",
          }}
        >
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="w-16 h-1 bg-[#C41E3A] mb-6" />
                <h2
                  className="text-4xl lg:text-5xl font-bold text-white mb-8"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Training Group
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      icon: Users,
                      label: "Training Group Media & MLM",
                      index: 0,
                    },
                    {
                      icon: Trophy,
                      label: "Training Group Panggung Boneka",
                      index: 1,
                    },
                    {
                      icon: BookOpen,
                      label: "Training Group Mipon Ibadah",
                      index: 2,
                    },
                  ].map((item) => (
                    <button
                      key={item.index}
                      onClick={() => openLightbox(trainingImages, item.index)}
                      className="w-full flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20 hover:bg-white/15 transition-colors cursor-pointer"
                    >
                      <item.icon className="w-6 h-6 text-[#C41E3A] shrink-0" />
                      <span className="text-lg text-white font-medium text-left">
                        {item.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Photo Grid */}
              <div className="grid grid-cols-3 gap-4">
                {trainingImages.map((src, idx) => (
                  <div
                    key={idx}
                    className="aspect-square relative rounded-xl overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300"
                    onClick={() => openLightbox(trainingImages, idx)}
                  >
                    <Image
                      src={src}
                      alt={`Training Group ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                    <ZoomOverlay />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pembinaan & Pelayanan Section */}
        <section className="relative py-24 lg:py-32 bg-[#E8F0FB] overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Photo Grid */}
              <div className="grid grid-cols-2 gap-4">
                {pembinaanImages.map((src, idx) => (
                  <div
                    key={idx}
                    className="aspect-square relative rounded-xl overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300"
                    onClick={() => openLightbox(pembinaanImages, idx)}
                  >
                    <Image
                      src={src}
                      alt={`Pembinaan & Pelayanan ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                    <ZoomOverlay />
                  </div>
                ))}
              </div>

              {/* Right Content */}
              <div>
                <div className="w-16 h-1 bg-[#C41E3A] mb-6" />
                <h2
                  className="text-4xl lg:text-5xl font-bold text-[#00276B] mb-8"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Pembinaan &amp; Pelayanan
                </h2>
                <div className="space-y-4">
                  {[
                    "Parneran Buku",
                    "Pelatihan Diksakarya",
                    "Pelayanan Gereja",
                    "Pelayanan Masyarakat",
                  ].map((label, idx) => (
                    <div
                      key={idx}
                      className="relative bg-[#EBF3FD] rounded-xl px-6 py-5"
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl bg-[#003F8A]" />
                      <p className="text-base font-bold text-center text-[#003F8A]">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Perayaan & Peringatan Section */}
        <section
          className="relative py-24 lg:py-32 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #8B2C5F 0%, #A53472 100%)",
          }}
        >
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <div className="w-24 h-1 bg-white mx-auto mb-6" />
              <h2
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Perayaan &amp; Peringatan
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { icon: Award, label: "Upacara HUT RI", color: "#C41E3A" },
                { icon: PartyPopper, label: "Malam Budaya", color: "#E63950" },
                { icon: Calendar, label: "Hari Reformasi", color: "#C41E3A" },
                { icon: Heart, label: "Hari Natal / Paskah", color: "#E63950" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                    style={{ background: item.color }}
                  >
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.label}</h3>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-4 max-w-2xl w-full">
                {perayaanImages.map((src, idx) => (
                  <div
                    key={idx}
                    className="aspect-[4/3] relative rounded-xl overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300"
                    onClick={() => openLightbox(perayaanImages, idx)}
                  >
                    <Image
                      src={src}
                      alt={`Perayaan & Peringatan ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                    <ZoomOverlay />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Kehidupan Kampus Section */}
        <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <div className="w-16 h-1 bg-[#C41E3A] mb-6 mx-auto" />
              <h2
                className="text-4xl lg:text-5xl font-bold text-[#00276B] mb-12"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Kehidupan Kampus
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
                {[
                  "Orientasi Mahasiswa Baru",
                  "Pemilihan Senat",
                  "Wisuda & Dies Natalis STTB",
                  "Games/Sport Day",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#003F8A]"
                  >
                    <p className="text-base font-bold text-[#00276B]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              <div
                className="aspect-[16/9] relative rounded-xl overflow-hidden cursor-pointer group hover:scale-[1.02] transition-transform duration-300"
                onClick={() => openLightbox(kehidupanImages, 0)}
              >
                <Image
                  src={kehidupanImages[0]}
                  alt="Kehidupan Kampus 1"
                  fill
                  className="object-cover"
                />
                <ZoomOverlay />
              </div>
              <div className="max-w-md mx-auto w-full">
                <div
                  className="aspect-square relative rounded-xl overflow-hidden cursor-pointer group hover:scale-[1.02] transition-transform duration-300"
                  onClick={() => openLightbox(kehidupanImages, 1)}
                >
                  <Image
                    src={kehidupanImages[1]}
                    alt="Kehidupan Kampus 2"
                    fill
                    className="object-cover"
                  />
                  <ZoomOverlay />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pembinaan Mahasiswa CTA Section */}
        <section className="relative py-20 overflow-hidden bg-[#C41E3A]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
            <h2
              className="text-3xl lg:text-4xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Pembinaan Mahasiswa
            </h2>
            <p className="text-lg lg:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Bergabunglah dengan Senat Mahasiswa STTB dan kembangkan
              kepemimpinan Anda
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {pembinaanMahasiswaImages.map((src, idx) => (
                <div
                  key={idx}
                  className="aspect-square relative rounded-xl overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300"
                  onClick={() => openLightbox(pembinaanMahasiswaImages, idx)}
                >
                  <Image
                    src={src}
                    alt={`Pembinaan Mahasiswa ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                  <ZoomOverlay />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      {lightboxOpen && lightboxImages.length > 0 && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
            onClick={closeLightbox}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Prev */}
          {lightboxImages.length > 1 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Next */}
          {lightboxImages.length > 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          {/* Image */}
          <div
            className="relative w-full max-w-4xl mx-16"
            style={{ height: "80vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImages[lightboxIndex]}
              alt="Lightbox image"
              fill
              className="object-contain"
            />
          </div>

          {/* Dots */}
          {lightboxImages.length > 1 && (
            <div className="absolute bottom-5 flex gap-2">
              {lightboxImages.map((_, i) => (
                <button
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === lightboxIndex ? "bg-white" : "bg-white/40"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex(i);
                  }}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
