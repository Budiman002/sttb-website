"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Target, Eye } from "lucide-react";

export function AboutSection() {
  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "var(--blue-dark)" }}
    >
      {/* Decorative Gradient Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, var(--gray-900) 0%, var(--blue-dark) 100%)",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left Side - Large Typography Statement */}
          <div className="lg:col-span-7 animate-in fade-in slide-in-from-left-12 duration-700">
            <div>
              <div
                className="text-xs tracking-widest uppercase mb-6 text-white/60 font-body font-semibold"
                style={{
                  letterSpacing: "0.1em",
                }}
              >
                Sekilas Tentang STTB
              </div>

              <h2
                className="text-white mb-8 leading-tight font-display font-bold"
                style={{
                  fontSize: "clamp(36px, 6vw, 64px)",
                }}
              >
                Menjadi Institusi Teologi{" "}
                <span className="italic" style={{ color: "var(--red-light)" }}>
                  Terkemuka
                </span>{" "}
                di Indonesia
              </h2>

              <div className="space-y-6 mb-10">
                {/* Vision */}
                <div className="flex gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(230, 57, 80, 0.2)" }}
                  >
                    <Eye
                      className="w-6 h-6"
                      style={{ color: "var(--red-light)" }}
                    />
                  </div>
                  <div>
                    <h3
                      className="text-white mb-2 font-body font-semibold"
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      Visi
                    </h3>
                    <p
                      className="text-white/80 leading-relaxed font-body"
                      style={{
                        fontSize: "16px",
                        lineHeight: 1.7,
                      }}
                    >
                      Menjadi institusi pendidikan teologi yang menyiapkan{" "}
                      <span className="text-white font-semibold italic">
                        pastor–scholar
                      </span>{" "}
                      yang crossdimensional dan transformatif bagi masyarakat
                      luas dengan berpegang pada iman Kristen yang sejati dan
                      tanpa cela.
                    </p>
                  </div>
                </div>

                {/* Mission */}
                <div className="flex gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(0, 86, 179, 0.2)" }}
                  >
                    <Target
                      className="w-6 h-6"
                      style={{ color: "var(--blue-light)" }}
                    />
                  </div>
                  <div>
                    <h3
                      className="text-white mb-2 font-body font-semibold"
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      Misi
                    </h3>
                    <p
                      className="text-white/80 leading-relaxed font-body"
                      style={{
                        fontSize: "16px",
                        lineHeight: 1.7,
                      }}
                    >
                      Menyelenggarakan pendidikan teologi yang berkualitas
                      tinggi dengan mengintegrasikan ajaran teologi biblika
                      dengan realitas konteks Indonesia, serta membekali
                      mahasiswa untuk menjadi pemimpin gereja yang visioner dan
                      transformatif.
                    </p>
                  </div>
                </div>
              </div>

              <Link href="/tentang-kami/visi-misi">
                <button
                  className="px-8 py-4 rounded-lg text-white flex items-center gap-2 transition-all hover:gap-4 group font-body font-semibold"
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  Baca Selengkapnya
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
            </div>
          </div>

          {/* Right Side - Image & Stats */}
          <div className="lg:col-span-5 animate-in fade-in slide-in-from-right-12 duration-700 delay-200">
            <div className="space-y-6">
              {/* Campus Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1732115234692-3ee71d5363af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmclMjBCYW5kdW5nfGVufDF8fHx8MTc3MzA5OTA1NXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="STTB Campus building"
                  width={500}
                  height={375}
                  className="w-full aspect-[4/3] object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 50%, rgba(0,39,107,0.6) 100%)",
                  }}
                />
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { number: "5+", label: "Program Studi" },
                  { number: "50+", label: "Dosen Berkualitas" },
                  { number: "500+", label: "Alumni Aktif" },
                ].map((stat, index) => (
                  <div
                    key={stat.label}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10 animate-in fade-in zoom-in-95 duration-500"
                    style={{
                      animationDelay: `${400 + index * 100}ms`,
                    }}
                  >
                    <div
                      className="text-3xl mb-1 font-display font-bold"
                      style={{
                        color: "var(--red-light)",
                      }}
                    >
                      {stat.number}
                    </div>
                    <div className="text-white/80 text-xs font-body font-semibold">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Pastor-Scholar Quote */}
        <div className="mt-20 pt-12 border-t border-white/10 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-400">
          <div className="max-w-4xl">
            <p
              className="text-white/90 mb-6 leading-relaxed italic font-display"
              style={{
                fontSize: "clamp(20px, 3vw, 28px)",
                lineHeight: 1.6,
              }}
            >
              "Kami melatih para pemimpin gereja yang tidak hanya memahami
              Firman Tuhan secara mendalam, tetapi juga mampu
              mengkontekstualisasikannya dalam realitas Indonesia modern —
              menghasilkan gereja yang relevan, tangguh, dan berdampak."
            </p>
            <div className="text-white/60 text-sm font-body font-semibold">
              — Kepemimpinan STTB
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
