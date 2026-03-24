"use client";

import Link from "next/link";
import Image from "next/image";
import { Play, BookOpen, Users, Building, ArrowRight } from "lucide-react";

export function CampusTour() {
  const facilities = [
    {
      icon: BookOpen,
      title: "Perpustakaan Modern",
      description: "Koleksi 10,000+ buku teologi dan jurnal internasional",
      image:
        "https://images.unsplash.com/photo-1763890965405-a376a73dc8ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaWJyYXJ5JTIwc3R1ZHklMjBzcGFjZSUyMHN0dWRlbnRzfGVufDF8fHx8MTc3MzA5OTI3OXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Users,
      title: "Ruang Kelas Interaktif",
      description: "Fasilitas multimedia untuk pembelajaran optimal",
      image:
        "https://images.unsplash.com/photo-1757192420329-39acf20a12b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc3Jvb20lMjBsZWN0dXJlJTIwaGFsbCUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NzMwOTkyODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Building,
      title: "Kampus Strategis",
      description: "Lokasi di pusat kota Bandung yang mudah diakses",
      image:
        "https://images.unsplash.com/photo-1565902608227-5b6c311817a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwYnVpbGRpbmclMjBleHRlcmlvciUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzMwOTkyODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Header with Video Thumbnail */}
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          {/* Left - Video */}
          <div className="lg:col-span-7 animate-in fade-in slide-in-from-left-12 duration-700">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
              <div className="aspect-video relative">
                <Image
                  src="https://images.unsplash.com/photo-1565902608227-5b6c311817a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwYnVpbGRpbmclMjBleHRlcmlvciUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzMwOTkyODB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="STTB Campus Tour"
                  fill
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(0, 39, 107, 0.7) 0%, rgba(196, 30, 58, 0.6) 100%)",
                  }}
                />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center transition-all group-hover:scale-110 group-hover:shadow-2xl"
                    style={{
                      background: "var(--red-main)",
                    }}
                  >
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                </div>
              </div>

              {/* Overlay Text */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div
                  className="inline-block px-3 py-1 rounded-full mb-3"
                  style={{
                    background: "rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <span
                    className="text-white text-xs tracking-wider uppercase font-body font-semibold"
                    style={{
                      letterSpacing: "0.08em",
                    }}
                  >
                    Campus Tour
                  </span>
                </div>
                <h3
                  className="text-white font-heading font-semibold"
                  style={{
                    fontSize: "28px",
                  }}
                >
                  Lihat Kehidupan Kampus STTB
                </h3>
              </div>
            </div>
          </div>

          {/* Right - Text */}
          <div className="lg:col-span-5 flex flex-col justify-center animate-in fade-in slide-in-from-right-12 duration-700 delay-200">
            <div
              className="inline-block px-4 py-1.5 rounded-full mb-4 self-start"
              style={{
                background: "var(--blue-pale)",
                color: "var(--blue-main)",
              }}
            >
              <span
                className="text-xs tracking-widest uppercase font-body font-semibold"
                style={{
                  letterSpacing: "0.1em",
                }}
              >
                Fasilitas Kampus
              </span>
            </div>

            <h2
              className="mb-6 font-heading font-semibold"
              style={{
                fontSize: "clamp(32px, 5vw, 44px)",
                color: "var(--gray-900)",
                lineHeight: 1.2,
              }}
            >
              Lingkungan Belajar yang{" "}
              <span className="italic" style={{ color: "var(--red-main)" }}>
                Mendukung
              </span>
            </h2>

            <p
              className="text-lg leading-relaxed font-body"
              style={{
                color: "var(--gray-500)",
                lineHeight: 1.7,
              }}
            >
              STTB menyediakan fasilitas lengkap yang dirancang untuk mendukung
              pembelajaran teologi berkualitas tinggi dan kehidupan rohani yang
              transformatif.
            </p>
          </div>
        </div>

        {/* Facility Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <div
                key={facility.title}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-in fade-in zoom-in-95 duration-700"
                style={{
                  boxShadow: "0 4px 16px rgba(0, 39, 107, 0.08)",
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Background Image */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent 20%, rgba(0,39,107,0.85) 100%)",
                    }}
                  />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{
                      background: "var(--red-main)",
                    }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3
                    className="text-white mb-2 font-body font-semibold"
                    style={{
                      fontSize: "20px",
                    }}
                  >
                    {facility.title}
                  </h3>

                  <p className="text-white/80 text-sm font-body">
                    {facility.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* See More Link */}
        <div className="mt-12 text-center animate-in fade-in duration-700 delay-300">
          <Link href="/kehidupan-kampus/fasilitas">
            <button
              className="px-8 py-4 rounded-lg text-white flex items-center gap-2 mx-auto transition-all hover:shadow-2xl hover:gap-4 group font-body font-semibold"
              style={{
                background: "var(--blue-main)",
              }}
            >
              Lihat Selengkapnya
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
