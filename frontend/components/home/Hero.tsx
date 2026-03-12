"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-cover bg-center">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1595315342809-fa10945ed07c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwdGhlb2xvZ3klMjBib29rcyUyMGxpYnJhcnl8ZW58MXx8fHwxNzczMDQ3NTEzfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Students studying theology"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(0, 39, 107, 0.92) 0%, rgba(0, 63, 138, 0.88) 60%, rgba(0, 86, 179, 0.82) 100%)",
          }}
        />
      </div>

      {/* Decorative Geometric Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-10 pointer-events-none">
        <div
          className="absolute top-20 right-20 w-64 h-64 rotate-45"
          style={{ background: "var(--red-main)" }}
        />
        <div
          className="absolute top-40 right-40 w-48 h-48 rotate-12"
          style={{ background: "var(--blue-light)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-12 py-32 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content - Asymmetric Layout */}
          <div className="lg:col-span-7 animate-in fade-in zoom-in-95 duration-700">
            {/* Label */}
            <div
              className="inline-block px-4 py-2 rounded-full mb-6"
              style={{
                background: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(10px)",
              }}
            >
              <span
                className="text-white text-sm tracking-wider uppercase font-body font-semibold"
                style={{
                  letterSpacing: "0.08em",
                }}
              >
                Sekolah Tinggi Teologi Bandung
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className="text-white mb-6 leading-[1.1] font-display font-bold"
              style={{
                fontSize: "clamp(48px, 7vw, 80px)",
              }}
            >
              Sekolah Tinggi
              <br />
              <span className="italic">Teologi</span>
              <br />
              Bandung
            </h1>

            {/* Tagline */}
            <p
              className="text-white/90 mb-4 text-xl italic font-display"
              style={{
                maxWidth: "600px",
              }}
            >
              "To The Lord, The Best, The Greatest"
            </p>

            {/* Description */}
            <p
              className="text-white/80 mb-10 leading-relaxed font-body"
              style={{
                fontSize: "18px",
                maxWidth: "540px",
                lineHeight: 1.7,
              }}
            >
              Menghasilkan pastor–scholar yang berdampak dalam konteks pelayanan
              urban — berpendidikan teologi yang mendalam, bertumbuh secara
              rohani, dan siap melayani dengan keunggulan.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="/admisi">
                <button
                  className="px-8 py-4 rounded-lg text-white flex items-center gap-2 transition-all hover:shadow-2xl hover:scale-105 font-body font-semibold"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--red-main), var(--red-light))",
                  }}
                >
                  Daftar Sekarang
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link href="/jelajahi">
                <button className="px-8 py-4 rounded-lg text-white border-2 border-white/30 backdrop-blur-sm transition-all hover:bg-white/10 font-body font-semibold">
                  Jelajahi Program
                </button>
              </Link>
            </div>
          </div>

          {/* Right Content - Image Card */}
          <div className="lg:col-span-5 animate-in fade-in slide-in-from-right-12 duration-700 delay-200">
            <div className="relative">
              <div
                className="rounded-2xl overflow-hidden shadow-2xl"
                style={{ transform: "translateY(-20px)" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1758270705518-b61b40527e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwZ3JvdXAlMjBzdHVkZW50cyUyMGRpc2N1c3Npb258ZW58MXx8fHwxNzczMDk5MDU2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Campus life with diverse students"
                  width={500}
                  height={625}
                  className="w-full aspect-[4/5] object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 40%, rgba(0,39,107,0.7) 100%)",
                  }}
                />
              </div>

              {/* Floating Stats Card */}
              <div
                className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-2xl"
                style={{ maxWidth: "240px" }}
              >
                <div
                  className="text-6xl mb-2 font-display font-bold"
                  style={{
                    color: "var(--red-main)",
                  }}
                >
                  50+
                </div>
                <p
                  className="text-sm font-body font-semibold"
                  style={{
                    color: "var(--gray-800)",
                  }}
                >
                  Tahun Melayani Pendidikan Teologi di Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
