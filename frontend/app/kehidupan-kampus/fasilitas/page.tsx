"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, X } from "lucide-react";

type FacilityCategory =
  | "Semua"
  | "Ruang Akademik"
  | "Perpustakaan"
  | "Kehidupan Mahasiswa"
  | "Olahraga & Rekreasi";

interface Facility {
  id: number;
  name: string;
  category: FacilityCategory;
  description: string;
  photo: string;
  featured?: boolean;
}

const pillars = [
  {
    title: "Belajar Bersama",
    description:
      "Sebagai sekolah kampus perguruan tinggi, STTB menyediakan fasilitas yang optimal dan beragam seperti: ruang kelas berteknologi modern, ruang konferensi dan hubungan antar-lembaga, studio audio-visual beserta peralatan yang memadai sebagai media persiapan untuk STTB maupun untuk belajar para mahasiswa.",
  },
  {
    title: "Bertumbuh Bersama",
    description:
      "Pembinaan di STTB tidak hanya mencakup ranah akademik, melainkan pembentukan karakter pribadi pelayan Tuhan secara utuh. Fasilitas yang tersedia mendukung pembentukan komunitas mahasiswa, seperti ruang konseling, bimbingan kelompok, beberapa tempat untuk pertemuan non-formal dengan sesama teman, serta fasilitas di luar kampus berupa rumah retret (Rumah Doa Bethel)",
  },
  {
    title: "Hidup Bersama",
    description:
      "Pendidikan di STTB dilengkapi dengan sarana residensial penuh yang menyimpang masa studi, mahasiswa bisa tinggal di kompleks kampus. Fasilitas asrama meliputi: kamar mahasiswa pria/wanita yang terpisah, ruang bersama, meja makan, berbagai sarana olahraga (jogging, basket, bola voli), bulu tangkis, futsal, tenis meja, renang.",
  },
];

const facilities: Facility[] = [
  {
    id: 1,
    name: "Ruang Kelas Utama",
    category: "Ruang Akademik",
    description: "Ruang kelas modern dengan teknologi pembelajaran terkini",
    photo: "/images/fasilitas/Ruang kelas.png",
    featured: true,
  },
  {
    id: 2,
    name: "Ruang Seminar",
    category: "Ruang Akademik",
    description: "Fasilitas seminar untuk diskusi dan presentasi akademik",
    photo: "/images/fasilitas/Ruang seminar.png",
    featured: false,
  },
  {
    id: 3,
    name: "Ruang Konferensi",
    category: "Ruang Akademik",
    description: "Ruang konferensi untuk pertemuan dan hubungan antar-lembaga",
    photo: "/images/fasilitas/Ruang Konferensi.png",
    featured: false,
  },
  {
    id: 4,
    name: "Perpustakaan Utama",
    category: "Perpustakaan",
    description: "Koleksi lengkap buku teologi dan sumber referensi akademik",
    photo: "/images/fasilitas/PerpustakaanUtama.png",
    featured: true,
  },
  {
    id: 5,
    name: "Ruang Baca",
    category: "Perpustakaan",
    description: "Area tenang untuk membaca dan studi mandiri",
    photo: "/images/fasilitas/RuangBaca.png",
    featured: false,
  },
  {
    id: 6,
    name: "Perpustakaan Digital",
    category: "Perpustakaan",
    description: "Akses digital ke jurnal dan database akademik",
    photo: "/images/fasilitas/PerpustakaanDigital.png",
    featured: false,
  },
  {
    id: 7,
    name: "Ruang Konseling",
    category: "Kehidupan Mahasiswa",
    description: "Layanan bimbingan dan konseling pribadi mahasiswa",
    photo: "/images/fasilitas/RuangKonseling.png",
    featured: false,
  },
  {
    id: 8,
    name: "Lounge Mahasiswa",
    category: "Kehidupan Mahasiswa",
    description: "Ruang bersantai dan berinteraksi dengan sesama mahasiswa",
    photo: "/images/fasilitas/LoungeMahasiswa.png",
    featured: true,
  },
  {
    id: 9,
    name: "Staff & Resepsionis",
    category: "Kehidupan Mahasiswa",
    description: "Layanan administrasi dan resepsionis kampus",
    photo: "/images/fasilitas/Recepcionist.png",
    featured: false,
  },
  {
    id: 13,
    name: "Ruang Acara",
    category: "Kehidupan Mahasiswa",
    description: "Ruang acara untuk berbagai kegiatan mahasiswa",
    photo: "/images/fasilitas/RuangAcara.png",
    featured: false,
  },
  {
    id: 14,
    name: "Ruang Rekreasi",
    category: "Olahraga & Rekreasi",
    description: "Ruang game untuk hiburan dan interaksi sosial",
    photo: "/images/fasilitas/RuangRekreasi.png",
    featured: false,
  },
  {
    id: 15,
    name: "Studio Audio-Visual",
    category: "Ruang Akademik",
    description: "Studio audio-visual untuk persiapan dan presentasi",
    photo: "/images/fasilitas/StudioAudioVisual.png",
    featured: false,
  },
  {
    id: 16,
    name: "Asrama",
    category: "Kehidupan Mahasiswa",
    description: "Asrama mahasiswa dengan kamar pribadi dan ruang bersama",
    photo: "/images/fasilitas/Asrama.png",
    featured: false,
  },
  {
    id: 17,
    name: "Ruang Kelas Modern",
    category: "Ruang Akademik",
    description: "Ruang kelas modern dengan teknologi terkini",
    photo: "/images/fasilitas/RuangKelasModern.png",
    featured: false,
  },
  {
    id: 18,
    name: "Studio Podcast",
    category: "Ruang Akademik",
    description: "Studio podcast untuk produksi konten audio",
    photo: "/images/fasilitas/StudioPodcast.png",
    featured: false,
  },
  {
    id: 19,
    name: "Ruang Makan",
    category: "Kehidupan Mahasiswa",
    description: "Ruang makan dengan menu sehat dan bergizi",
    photo: "/images/fasilitas/Cafetaria.png",
    featured: false,
  },
  {
    id: 20,
    name: "Kafe Luar",
    category: "Kehidupan Mahasiswa",
    description: "Kafe luar untuk santai dan berinteraksi",
    photo: "/images/fasilitas/kafeLuar.png",
    featured: false,
  },
  {
    id: 21,
    name: "Area Studi",
    category: "Kehidupan Mahasiswa",
    description: "Area studi tenang untuk belajar dan mengerjakan tugas",
    photo: "/images/fasilitas/LoungeKantin.png",
    featured: false,
  },
];

const categories: FacilityCategory[] = [
  "Semua",
  "Ruang Akademik",
  "Perpustakaan",
  "Kehidupan Mahasiswa",
  "Olahraga & Rekreasi",
];

export default function FasilitasPage() {
  const [activeCategory, setActiveCategory] =
    useState<FacilityCategory>("Semua");
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(
    null,
  );

  const filteredFacilities =
    activeCategory === "Semua"
      ? facilities
      : facilities.filter((f) => f.category === activeCategory);

  return (
    <div className="min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#1A2340] to-[#00276B]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-[#C41E3A] text-sm font-bold tracking-[0.2em] uppercase mb-4">
              KEHIDUPAN KAMPUS
            </p>
            <h1 className="text-6xl lg:text-8xl font-bold text-white mb-8 leading-[0.95] font-serif">
              Fasilitas STTB
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
              STTB merupakan sekolah Alkitab yang membentuk dan memperlengkapi
              para pelayan Tuhan bagi pelayanan di dalam tubuh Kristus dan di
              tengah dunia.
            </p>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 lg:p-10 border-t-4 border-[#C41E3A] shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <h3 className="text-2xl lg:text-3xl font-bold mb-6 font-serif text-[#1A2340]">
                  {pillar.title}
                </h3>
                <p className="text-base lg:text-lg leading-relaxed text-gray-700">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="w-24 h-1 bg-[#C41E3A] mx-auto mb-6" />
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-serif text-[#1A2340]">
              Galeri Fasilitas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Jelajahi berbagai fasilitas yang mendukung pembelajaran dan
              kehidupan kampus di STTB
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#C41E3A] text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-[#00276B] hover:text-white border border-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFacilities.map((facility) => (
              <div
                key={facility.id}
                className={`group relative overflow-hidden rounded-xl shadow-lg cursor-pointer ${
                  facility.featured ? "lg:col-span-2" : ""
                }`}
                onClick={() => setSelectedFacility(facility)}
              >
                {/* Photo */}
                <div
                  className={`relative overflow-hidden bg-gray-200 ${
                    facility.featured ? "aspect-[2/1]" : "aspect-square"
                  }`}
                >
                  <Image
                    src={facility.photo}
                    alt={facility.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Permanent Label Bar */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1A2340] to-transparent px-6 py-4">
                    <p className="text-white font-bold text-lg font-serif">
                      {facility.name}
                    </p>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#1A2340]/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-8 text-center">
                    <p className="text-xs uppercase tracking-[0.15em] mb-3 text-[#C41E3A]">
                      {facility.category}
                    </p>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-serif">
                      {facility.name}
                    </h3>
                    <p className="text-white/80 text-sm lg:text-base mb-6 leading-relaxed">
                      {facility.description}
                    </p>
                    <span className="inline-flex items-center gap-2 px-6 py-3 bg-[#C41E3A] text-white rounded-lg font-semibold">
                      Lihat Detail
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedFacility && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedFacility(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-[#C41E3A] transition-colors"
            onClick={() => setSelectedFacility(null)}
          >
            <X className="w-8 h-8" />
          </button>

          <div
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={selectedFacility.photo}
                alt={selectedFacility.name}
                fill
                className="object-contain"
              />
            </div>
            <div className="mt-6 text-center">
              <p className="text-xs uppercase tracking-[0.15em] mb-2 text-[#C41E3A]">
                {selectedFacility.category}
              </p>
              <h3 className="text-3xl font-bold text-white mb-3 font-serif">
                {selectedFacility.name}
              </h3>
              <p className="text-white/80 text-lg">
                {selectedFacility.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
