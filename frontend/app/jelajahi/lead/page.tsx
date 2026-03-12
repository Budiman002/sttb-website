"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useState } from "react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1765438863789-1396d28db24b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFkZXJzaGlwJTIwdHJhaW5pbmclMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NzMyOTM5OTR8MA&ixlib=rb-4.1.0&q=80&w=1080";

const upcomingEvents = [
  {
    date: "15 MAR",
    title: "Kelas Sit In: Magister Pendidikan Kristen",
    duration: "2 jam",
    format: "Online via Zoom",
  },
  {
    date: "18 MAR",
    title: "Seminar Teologi Kota: Gereja & Urban",
    duration: "3 jam",
    format: "Offline - Kampus STTB",
  },
  {
    date: "22 MAR",
    title: "Workshop Kepemimpinan Pastoral",
    duration: "1 hari",
    format: "Offline - Kampus STTB",
  },
];

const pillars = [
  {
    bg: "#003F8A",
    labelColor: "#C41E3A",
    label: "01 — LEARNING",
    watermark: "L",
    title: "Pembelajaran",
    description:
      "Menyediakan akses bagi semua orang percaya untuk bertumbuh dalam iman melalui kelas reguler, seminar publik, dan pendidikan Kristen.",
  },
  {
    bg: "#C41E3A",
    labelColor: "#FFFFFF",
    label: "02 — EQUIPPING",
    watermark: "E",
    title: "Perlengkapan",
    description:
      "Menyelenggarakan kursus sertifikat, pelatihan pastoral, dan klinik dalam berbagai bidang untuk memperlengkapi tubuh Kristus melayani dengan lebih efektif.",
  },
  {
    bg: "#00276B",
    labelColor: "#C41E3A",
    label: "03 — DEVELOPMENT",
    watermark: "D",
    title: "Pengembangan",
    description:
      "Membangun kapasitas pemimpin Kristen melalui program mentoring, coaching, dan pengembangan kepemimpinan berbasis nilai-nilai Injil.",
  },
];

export default function JelajahiLeadPage() {
  const [currentMonth] = useState("MARCH 2026");
  const today = 12;

  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
  const eventDays = [15, 18, 22];

  return (
    <main className="min-h-screen" style={{ fontFamily: "var(--font-sans)" }}>
      {/* SECTION 1 — HERO */}
      <section
        className="relative overflow-hidden py-20"
        style={{ background: "#00276B" }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-[60%_40%] gap-8 items-center">
            {/* Left Column */}
            <div className="relative">
              {/* Red vertical bar accent */}
              <div
                className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:block"
                style={{
                  width: "4px",
                  height: "60px",
                  background: "#C41E3A",
                }}
              />

              <p
                className="uppercase mb-6"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#C41E3A",
                  letterSpacing: "0.15em",
                }}
              >
                JELAJAHI STTB
              </p>

              <div className="mb-6">
                <h1
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    fontSize: "clamp(3.5rem, 8vw, 5rem)",
                    fontWeight: 400,
                    color: "#FFFFFF",
                    lineHeight: 1.1,
                    marginBottom: "8px",
                  }}
                >
                  L.E.A.D.
                </h1>
                <h1
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(3.5rem, 9vw, 5.5rem)",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    lineHeight: 1.1,
                  }}
                >
                  CENTER
                </h1>
              </div>

              <p
                className="mb-8"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "15px",
                  color: "#FFFFFF",
                  lineHeight: 1.7,
                  maxWidth: "420px",
                }}
              >
                Learning, Equipping, And Development — pusat pendidikan dan
                pelatihan nonformal Sekolah Tinggi Teologi Bandung.
              </p>

              <button
                className="px-7 py-3 rounded-lg transition-all"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#FFFFFF",
                  background: "#C41E3A",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#A01830";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#C41E3A";
                }}
              >
                Pelajari Program →
              </button>
            </div>

            {/* Right Column — Hero Image */}
            <div
              className="relative rounded-lg overflow-hidden"
              style={{ aspectRatio: "16/9" }}
            >
              <Image
                src={HERO_IMAGE}
                alt="LEAD Center Training"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — TENTANG LEAD */}
      <section className="py-20" style={{ background: "#FFFFFF" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-[55%_45%] gap-12 items-start">
            {/* Left Column */}
            <div>
              <p
                className="uppercase font-bold mb-4"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "12px",
                  color: "#C41E3A",
                  letterSpacing: "0.12em",
                }}
              >
                TENTANG KAMI
              </p>

              <h2
                className="mb-8"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "40px",
                  fontWeight: 700,
                  color: "#00276B",
                }}
              >
                Apa itu LEAD Center?
              </h2>

              <div className="space-y-5">
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "16px",
                    color: "#374151",
                    lineHeight: 1.9,
                  }}
                >
                  LEAD Center adalah pusat pendidikan nonformal STTB yang
                  berfokus pada tiga pilar utama: Learning (pembelajaran),
                  Equipping (perlengkapan), dan Development (pengembangan diri).
                </p>

                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "16px",
                    color: "#374151",
                    lineHeight: 1.9,
                  }}
                >
                  LEAD hadir untuk menjangkau semua orang percaya — bukan hanya
                  yang menempuh studi formal — agar dapat melayani dengan
                  maksimal sesuai panggilan Tuhan.
                </p>
              </div>
            </div>

            {/* Right Column — Quote Block */}
            <div className="rounded-2xl p-10" style={{ background: "#003F8A" }}>
              <blockquote
                className="mb-6"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontSize: "22px",
                  color: "#FFFFFF",
                  lineHeight: 1.7,
                }}
              >
                &ldquo;Gereja adalah garam dunia, terang dunia (Mat 5:13-16) —
                dipanggil untuk berdampak di setiap sudut kehidupan.&rdquo;
              </blockquote>

              <div
                style={{
                  width: "40px",
                  height: "2px",
                  background: "#C41E3A",
                  marginBottom: "12px",
                }}
              />

              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  color: "#FFFFFF",
                }}
              >
                Visi LEAD Center
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — TIGA PILAR LAYANAN */}
      <section className="py-20" style={{ background: "#F8F7F4" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p
              className="uppercase font-bold mb-4"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "12px",
                color: "#C41E3A",
                letterSpacing: "0.12em",
              }}
            >
              LAYANAN
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 700,
                color: "#00276B",
              }}
            >
              Tiga Pilar LEAD Center
            </h2>
          </div>

          {/* Three Cards */}
          <div className="grid lg:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.label}
                className="rounded-2xl p-10 relative overflow-hidden"
                style={{ background: pillar.bg, minHeight: "380px" }}
              >
                {/* Watermark */}
                <div
                  className="absolute top-4 right-4"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "120px",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    opacity: 0.1,
                    lineHeight: 1,
                  }}
                >
                  {pillar.watermark}
                </div>

                <div className="relative z-10">
                  <p
                    className="uppercase mb-4"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "11px",
                      fontWeight: 700,
                      color: pillar.labelColor,
                      letterSpacing: "0.12em",
                    }}
                  >
                    {pillar.label}
                  </p>

                  <h3
                    className="mb-4"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "24px",
                      fontWeight: 700,
                      color: "#FFFFFF",
                    }}
                  >
                    {pillar.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "14px",
                      color: "rgba(255, 255, 255, 0.8)",
                      lineHeight: 1.7,
                    }}
                  >
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — VIDEO UNGGULAN */}
      <section className="py-20" style={{ background: "#FFFFFF" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          {/* Section Header */}
          <div className="mb-12">
            <p
              className="uppercase font-bold mb-4"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "12px",
                color: "#C41E3A",
                letterSpacing: "0.12em",
              }}
            >
              LEAD VIDEO
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 700,
                color: "#00276B",
              }}
            >
              City TransForMission
            </h2>
          </div>

          <div className="grid lg:grid-cols-[60%_40%] gap-12">
            {/* Left Column — Video */}
            <div className="relative">
              <div
                className="rounded-xl overflow-hidden relative"
                style={{ aspectRatio: "16/9", background: "#003F8A" }}
              >
                {/* Simulated video background */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(2rem, 6vw, 4rem)",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      opacity: 0.15,
                      letterSpacing: "0.1em",
                    }}
                  >
                    LEAD
                  </div>
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="rounded-full flex items-center justify-center"
                    style={{
                      width: "72px",
                      height: "72px",
                      background: "#FFFFFF",
                    }}
                  >
                    <Play
                      style={{
                        width: "24px",
                        height: "24px",
                        color: "#C41E3A",
                        fill: "#C41E3A",
                      }}
                    />
                  </div>
                </div>

                {/* Duration Pill */}
                <div
                  className="absolute bottom-4 left-4 px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(0, 0, 0, 0.7)",
                    fontFamily: "var(--font-sans)",
                    fontSize: "12px",
                    color: "#FFFFFF",
                    fontWeight: 600,
                  }}
                >
                  18:24
                </div>
              </div>
            </div>

            {/* Right Column — Video Info */}
            <div>
              <div
                className="inline-block px-3 py-1 rounded-full mb-4"
                style={{
                  background: "#C41E3A",
                  fontFamily: "var(--font-sans)",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                SERIES TERBARU
              </div>

              <h3
                className="mb-4"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#00276B",
                  lineHeight: 1.4,
                }}
              >
                City TransForMission #2: Fokus Strategis Misi Urban
              </h3>

              <p
                className="mb-6"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "15px",
                  color: "#6B7280",
                  lineHeight: 1.8,
                }}
              >
                Seri video pelayanan STTB yang membahas strategi misi
                kontekstual di kawasan urban. Dipresentasikan oleh dosen dan
                praktisi misi STTB Bandung.
              </p>

              <p
                className="mb-6"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  color: "#9CA3AF",
                }}
              >
                L.E.A.D. Center • 18 menit • 2023
              </p>

              <button
                className="px-7 py-3 rounded-lg transition-all"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#00276B",
                  background: "transparent",
                  border: "1px solid #00276B",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#00276B";
                  e.currentTarget.style.color = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#00276B";
                }}
              >
                Lihat Semua Video →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — KALENDER PROGRAM */}
      <section className="py-20" style={{ background: "#F8F7F4" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          {/* Section Header */}
          <div className="mb-12">
            <p
              className="uppercase font-bold mb-4"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "12px",
                color: "#C41E3A",
                letterSpacing: "0.12em",
              }}
            >
              JADWAL
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 700,
                color: "#00276B",
              }}
            >
              Program Bulan Ini
            </h2>
          </div>

          <div className="grid lg:grid-cols-[65%_35%] gap-8">
            {/* Left Column — Calendar */}
            <div
              className="bg-white rounded-xl p-8"
              style={{ boxShadow: "0 4px 16px rgba(0, 39, 107, 0.08)" }}
            >
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-6">
                <button
                  style={{
                    width: "32px",
                    height: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <ChevronLeft
                    style={{ width: "20px", height: "20px", color: "#00276B" }}
                  />
                </button>

                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#00276B",
                  }}
                >
                  {currentMonth}
                </h3>

                <button
                  style={{
                    width: "32px",
                    height: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <ChevronRight
                    style={{ width: "20px", height: "20px", color: "#00276B" }}
                  />
                </button>
              </div>

              {/* Day Headers */}
              <div className="grid grid-cols-7 gap-2 mb-4">
                {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map(
                  (day) => (
                    <div
                      key={day}
                      className="text-center"
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "#00276B",
                        padding: "8px 0",
                      }}
                    >
                      {day}
                    </div>
                  ),
                )}
              </div>

              {/* Calendar Days */}
              <div className="grid grid-cols-7 gap-2">
                {daysInMonth.map((day) => {
                  const isToday = day === today;
                  const hasEvent = eventDays.includes(day);

                  return (
                    <div
                      key={day}
                      className="relative flex flex-col items-center justify-center"
                      style={{ aspectRatio: "1/1" }}
                    >
                      <div
                        className="flex items-center justify-center"
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "8px",
                          background: isToday ? "#00276B" : "transparent",
                          fontFamily: "var(--font-sans)",
                          fontSize: "14px",
                          fontWeight: isToday ? 700 : 400,
                          color: isToday ? "#FFFFFF" : "#1A2340",
                        }}
                      >
                        {day}
                      </div>
                      {hasEvent && (
                        <div
                          style={{
                            position: "absolute",
                            bottom: "4px",
                            width: "4px",
                            height: "4px",
                            borderRadius: "50%",
                            background: isToday ? "#FFFFFF" : "#C41E3A",
                          }}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column — Upcoming Events */}
            <div>
              <h3
                className="mb-6"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#00276B",
                }}
              >
                Kegiatan Mendatang
              </h3>

              <div className="space-y-4">
                {upcomingEvents.map((event, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-lg p-4"
                    style={{
                      borderLeft: "4px solid #C41E3A",
                    }}
                  >
                    <div
                      className="inline-block px-2 py-1 rounded mb-2"
                      style={{
                        background: "#C41E3A",
                        fontFamily: "var(--font-sans)",
                        fontSize: "10px",
                        fontWeight: 700,
                        color: "#FFFFFF",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {event.date}
                    </div>

                    <h4
                      className="mb-2"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "15px",
                        fontWeight: 700,
                        color: "#00276B",
                        lineHeight: 1.4,
                      }}
                    >
                      {event.title}
                    </h4>

                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "12px",
                        color: "#6B7280",
                      }}
                    >
                      {event.duration} • {event.format}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — CTA */}
      <section className="py-20 text-center" style={{ background: "#00276B" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <h2
            className="mb-6"
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "40px",
              fontWeight: 700,
              color: "#FFFFFF",
            }}
          >
            Siap Bergabung dengan LEAD?
          </h2>

          <p
            className="mb-8"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "15px",
              color: "rgba(255, 255, 255, 0.8)",
              lineHeight: 1.7,
              maxWidth: "560px",
              margin: "0 auto 32px",
            }}
          >
            Daftarkan diri Anda untuk program LEAD berikutnya dan mulai
            perjalanan pengembangan pelayanan Anda.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button
              className="px-7 py-3 rounded-lg transition-all"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "14px",
                fontWeight: 600,
                color: "#FFFFFF",
                background: "#C41E3A",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#A01830";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#C41E3A";
              }}
            >
              Daftar Program →
            </button>

            <button
              className="px-7 py-3 rounded-lg transition-all"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "14px",
                fontWeight: 600,
                color: "#FFFFFF",
                background: "transparent",
                border: "1px solid #FFFFFF",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              Hubungi LEAD Center
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
