"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  DollarSign,
  User,
  Twitter,
  Facebook,
  MessageCircle,
  AlertCircle,
} from "lucide-react";

// Same image used for the featured (Unggulan) card on the kegiatan listing page
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1662151820001-0c8d949304a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JzaGlwJTIwY2h1cmNoJTIwc2VydmljZXxlbnwxfHx8fDE3NzMyODQ4ODl8MA&ixlib=rb-4.1.0&q=80&w=1080";

type RelatedEvent = {
  status: string;
  statusColor: string;
  category: string;
  date: string;
  time: string;
  location: string;
  title: string;
  image: string;
};

const relatedEvents: RelatedEvent[] = [
  {
    status: "UPCOMING",
    statusColor: "#0056B3",
    category: "AKADEMIK",
    date: "15 April — 30 Juni 2026",
    time: "Rabu, 19.00 – 21.00 WIB",
    location: "Zoom",
    title: "Kelas Sit In Magister Teologi Pelayanan Pastoral",
    image:
      "https://images.unsplash.com/photo-1561089489-f13d5e730d72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVvbG9neSUyMGNsYXNzcm9vbSUyMGxlY3R1cmV8ZW58MXx8fHwxNzczMjg1NDI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    status: "UPCOMING",
    statusColor: "#0056B3",
    category: "KOMUNITAS",
    date: "20 April 2026",
    time: "09.00 – 12.00 WIB",
    location: "Kampus STTB",
    title: "Open House Penerimaan Mahasiswa Baru 2026–2027",
    image:
      "https://images.unsplash.com/photo-1758270704787-615782711641?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNhbXB1cyUyMGRpc2N1c3Npb258ZW58MXx8fHwxNzczMjg1NDI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    status: "UPCOMING",
    statusColor: "#0056B3",
    category: "KOMUNITAS",
    date: "5 Mei 2026",
    time: "18.00 – 20.00 WIB",
    location: "Zoom",
    title: "Bincang Rame: Menemukan Panggilan Hidupmu",
    image:
      "https://images.unsplash.com/photo-1477569914486-b9955238cae0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW1pbmFyJTIwcGVvcGxlJTIwdGFsa2luZ3xlbnwxfHx8fDE3NzMyODU0MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export default function KegiatanDetailPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen" style={{ fontFamily: "var(--font-sans)" }}>
      {/* SECTION 1 — EVENT HERO BANNER */}
      <section
        className="relative overflow-hidden py-16 lg:py-20"
        style={{ background: "#00276B" }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "12px",
                color: "rgba(255, 255, 255, 0.6)",
              }}
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              {" › "}
              <Link
                href="/jelajahi/kegiatan"
                className="hover:text-white transition-colors"
              >
                Kegiatan
              </Link>
              {" › Akademik"}
            </p>
          </nav>

          {/* Featured Card */}
          <div
            className="bg-white rounded-xl overflow-hidden grid lg:grid-cols-2"
            style={{ boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)" }}
          >
            {/* Left: Image */}
            <div className="relative aspect-video lg:aspect-auto lg:min-h-[400px]">
              <Image
                src={HERO_IMAGE}
                alt="Kelas Sit In Magister Pendidikan Kristen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Detail Badge */}
              <div
                className="absolute top-4 left-4 px-4 py-2 rounded-md"
                style={{
                  background: "#C41E3A",
                  fontFamily: "var(--font-sans)",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                DETAIL KEGIATAN
              </div>
              {/* Status Badge */}
              <div
                className="absolute top-4 right-4 px-4 py-2 rounded-md"
                style={{
                  background: "#16A34A",
                  fontFamily: "var(--font-sans)",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                ONGOING
              </div>
            </div>

            {/* Right: Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              {/* Category Pill */}
              <div className="mb-6">
                <span
                  className="inline-block rounded-full px-4 py-1"
                  style={{
                    background: "#E8F0FB",
                    fontFamily: "var(--font-sans)",
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "#003F8A",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  AKADEMIK
                </span>
              </div>

              {/* Event Meta */}
              <div className="space-y-2 mb-6">
                {[
                  { Icon: Calendar, text: "9 Januari — 18 Mei 2026" },
                  { Icon: Clock, text: "Jumat–Sabtu, 16.00 – 21.00 WIB" },
                  { Icon: MapPin, text: "Onsite & Zoom" },
                ].map(({ Icon, text }, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Icon
                      className="w-4 h-4 flex-shrink-0 mt-0.5"
                      style={{ color: "#6B7280" }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "13px",
                        color: "#6B7280",
                      }}
                    >
                      {text}
                    </span>
                  </div>
                ))}
              </div>

              <h1
                className="mb-4"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                  fontWeight: 700,
                  color: "#00276B",
                  lineHeight: 1.2,
                }}
              >
                Kelas Sit In Magister Pendidikan Kristen
              </h1>

              <p
                className="mb-8"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "15px",
                  color: "#6B7280",
                  lineHeight: 1.7,
                }}
              >
                Kuliah ini akan membantu mahasiswa untuk dapat melakukan riset
                literatur yang baik bagi penulisan tugas paper dan tugas akhir
                serta menuliskannya dengan terstruktur sehingga dapat
                dipublikasikan dalam publikasi ilmiah.
              </p>

              <div>
                <button
                  className="px-8 py-3 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "14px",
                    color: "#FFFFFF",
                    background: "#C41E3A",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#E63950")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#C41E3A")
                  }
                >
                  Daftar Sekarang →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — EVENT BODY */}
      <section className="pt-20 pb-16" style={{ background: "#F8F7F4" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-[65%_35%] gap-12">
            {/* Left Content */}
            <div className="pr-0 lg:pr-12">
              <h3
                className="mb-6"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#00276B",
                }}
              >
                Tentang Kegiatan Ini
              </h3>

              <p
                className="mb-8"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "16px",
                  color: "#1F2937",
                  lineHeight: 1.8,
                }}
              >
                Kuliah ini akan membantu mahasiswa untuk dapat melakukan riset
                literatur yang baik bagi penulisan tugas paper dan tugas akhir
                serta menuliskannya dengan terstruktur sehingga dapat
                dipublikasikan dalam publikasi ilmiah.
              </p>

              {/* Red Divider */}
              <div
                className="mb-8"
                style={{ width: "40px", height: "2px", background: "#C41E3A" }}
              />

              <h3
                className="mb-6"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#00276B",
                }}
              >
                Dosen Pengajar
              </h3>

              {/* Instructor Card */}
              <div
                className="bg-white rounded-lg p-6 flex gap-5"
                style={{ boxShadow: "0 4px 16px rgba(0, 39, 107, 0.08)" }}
              >
                {/* Avatar */}
                <div
                  className="rounded-full flex-shrink-0 flex items-center justify-center"
                  style={{
                    width: "64px",
                    height: "64px",
                    background: "#00276B",
                  }}
                >
                  <User className="w-7 h-7" style={{ color: "#FFFFFF" }} />
                </div>

                <div>
                  <h4
                    className="mb-1"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#00276B",
                    }}
                  >
                    Dwi Maria Handayani, Ph.D.
                  </h4>
                  <p
                    className="mb-3"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "13px",
                      color: "#C41E3A",
                      fontWeight: 600,
                    }}
                  >
                    Ketua Program Studi Magister Teologi
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "14px",
                      color: "#6B7280",
                      lineHeight: 1.6,
                    }}
                  >
                    Memperoleh gelar doktoral dalam bidang Perjanjian Lama dari
                    Asia Graduate School of Theology, Filipina.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div>
              <div
                className="bg-white rounded-lg p-6 sticky top-32"
                style={{ boxShadow: "0 4px 16px rgba(0, 39, 107, 0.08)" }}
              >
                <p
                  className="mb-6 uppercase font-bold"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "13px",
                    color: "#C41E3A",
                    letterSpacing: "0.12em",
                  }}
                >
                  DETAIL KEGIATAN
                </p>

                {/* Info Rows */}
                <div className="space-y-4 mb-6">
                  {[
                    {
                      Icon: Calendar,
                      label: "Tanggal",
                      value: "9 Jan — 18 Mei 2026",
                    },
                    {
                      Icon: Clock,
                      label: "Waktu",
                      value: "Jumat–Sabtu, 16.00–21.00 WIB",
                    },
                    { Icon: MapPin, label: "Lokasi", value: "Onsite & Zoom" },
                    {
                      Icon: DollarSign,
                      label: "Kontribusi",
                      value: "Rp500.000 / mata kuliah",
                    },
                    { Icon: User, label: "Kategori", value: "Kelas Audit" },
                  ].map(({ Icon, label, value }, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Icon
                        className="w-4 h-4 flex-shrink-0 mt-0.5"
                        style={{ color: "#00276B" }}
                      />
                      <div>
                        <p
                          className="mb-1"
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "12px",
                            color: "#6B7280",
                          }}
                        >
                          {label}
                        </p>
                        <p
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "14px",
                            fontWeight: 600,
                            color: "#00276B",
                          }}
                        >
                          {value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div
                  className="mb-6"
                  style={{ height: "1px", background: "#E5E7EB" }}
                />

                {/* CTA Buttons */}
                <div className="space-y-3 mb-6">
                  <button
                    className="w-full px-6 py-3 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "14px",
                      color: "#FFFFFF",
                      background: "#C41E3A",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "#E63950")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "#C41E3A")
                    }
                  >
                    Daftar Sekarang →
                  </button>
                  <button
                    className="w-full px-6 py-3 rounded-lg font-bold transition-all"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "14px",
                      color: "#00276B",
                      border: "2px solid #00276B",
                      background: "transparent",
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
                    Hubungi Panitia
                  </button>
                </div>

                {/* Divider */}
                <div
                  className="mb-6"
                  style={{ height: "1px", background: "#E5E7EB" }}
                />

                {/* Registration Deadline */}
                <div className="flex items-start gap-2 mb-6">
                  <AlertCircle
                    className="w-4 h-4 flex-shrink-0 mt-0.5"
                    style={{ color: "#6B7280" }}
                  />
                  <p
                    className="italic"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "12px",
                      color: "#6B7280",
                      lineHeight: 1.5,
                    }}
                  >
                    Batas pendaftaran: 2 Januari 2026
                  </p>
                </div>

                {/* Social Share */}
                <div className="text-center">
                  <p
                    className="mb-3"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "13px",
                      color: "#6B7280",
                    }}
                  >
                    Bagikan:
                  </p>
                  <div className="flex justify-center items-center gap-2">
                    {[Twitter, Facebook, MessageCircle].map((Icon, idx) => (
                      <button
                        key={idx}
                        className="rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                        style={{
                          width: "32px",
                          height: "32px",
                          background: "#00276B",
                          cursor: "pointer",
                        }}
                      >
                        <Icon
                          className="w-4 h-4"
                          style={{ color: "#FFFFFF" }}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — KEGIATAN LAINNYA */}
      <section className="py-16 lg:py-20" style={{ background: "#FFFFFF" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="mb-12">
            <p
              className="uppercase font-bold mb-4"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "13px",
                color: "#C41E3A",
                letterSpacing: "0.12em",
              }}
            >
              JANGAN LEWATKAN
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 700,
                color: "#00276B",
              }}
            >
              Kegiatan Lainnya
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedEvents.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg overflow-hidden"
                style={{ boxShadow: "0 4px 16px rgba(0, 39, 107, 0.08)" }}
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div
                    className="absolute top-4 right-4 px-3 py-1 rounded-md"
                    style={{
                      background: card.statusColor,
                      fontFamily: "var(--font-sans)",
                      fontSize: "10px",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {card.status}
                  </div>
                  <div
                    className="absolute bottom-4 left-4 px-3 py-1 rounded-md"
                    style={{
                      background: "#C41E3A",
                      fontFamily: "var(--font-sans)",
                      fontSize: "10px",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {card.category}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5">
                  <div className="space-y-2 mb-4">
                    {[
                      { Icon: Calendar, text: card.date },
                      { Icon: Clock, text: card.time },
                      { Icon: MapPin, text: card.location },
                    ].map(({ Icon, text }, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Icon
                          className="w-3 h-3 flex-shrink-0 mt-0.5"
                          style={{ color: "#6B7280" }}
                        />
                        <span
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "12px",
                            color: "#6B7280",
                          }}
                        >
                          {text}
                        </span>
                      </div>
                    ))}
                  </div>

                  <h3
                    className="mb-4"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#00276B",
                      lineHeight: 1.3,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {card.title}
                  </h3>

                  <a
                    href="#"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#C41E3A",
                    }}
                  >
                    Lihat Detail →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — BACK NAVIGATION */}
      <section className="py-8 text-center" style={{ background: "#F8F7F4" }}>
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 px-8 py-3 rounded-lg transition-all"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "14px",
            fontWeight: 600,
            color: "#00276B",
            border: "1px solid #00276B",
            background: "transparent",
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
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Kegiatan
        </button>
      </section>
    </main>
  );
}
