import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  MapPin,
  User,
  Twitter,
  Facebook,
  MessageCircle,
  AlertCircle,
} from "lucide-react";
import { getKegiatanDetail, getKegiatanList } from "@/lib/api";
import { BackButton } from "@/components/shared/BackButton";
import type { Metadata } from "next";
import type { KegiatanListItem } from "@/types/api";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1662151820001-0c8d949304a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

function getStatusColor(status: string): string {
  switch (status.toUpperCase()) {
    case "UPCOMING":
      return "#0056B3";
    case "ONGOING":
      return "#16A34A";
    default:
      return "#6B7280";
  }
}

function formatDateRange(mulai: string, selesai: string | null): string {
  const start = new Date(mulai).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  if (!selesai) return start;
  const end = new Date(selesai).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return `${start} — ${end}`;
}

export async function generateStaticParams() {
  try {
    const data = await getKegiatanList(1, 100);
    return data.items.map((item) => ({ slug: item.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const data = await getKegiatanDetail(slug);
    return { title: `${data.judul} — STTB Bandung` };
  } catch {
    return { title: "Kegiatan — STTB Bandung" };
  }
}

export default async function KegiatanDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let data;
  try {
    data = await getKegiatanDetail(slug);
  } catch {
    notFound();
  }

  let relatedEvents: KegiatanListItem[] = [];
  try {
    const list = await getKegiatanList(1, 4);
    relatedEvents = list.items
      .filter((item) => item.slug !== slug)
      .slice(0, 3);
  } catch {
    relatedEvents = [];
  }

  const dateRange = formatDateRange(data.tanggalMulai, data.tanggalSelesai);
  const statusColor = getStatusColor(data.status);

  return (
    <main className="min-h-screen" style={{ fontFamily: "var(--font-sans)" }}>
      {/* SECTION 1 — EVENT HERO BANNER */}
      <section
        className="relative overflow-hidden py-16 lg:py-20"
        style={{ background: "#00276B" }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
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
              {" › "}
              {data.kategori}
            </p>
          </nav>

          <div
            className="bg-white rounded-xl overflow-hidden grid lg:grid-cols-2"
            style={{ boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)" }}
          >
            <div className="relative aspect-video lg:aspect-auto lg:min-h-[400px]">
              <Image
                src={data.thumbnailUrl ?? FALLBACK_IMAGE}
                alt={data.judul}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
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
              <div
                className="absolute top-4 right-4 px-4 py-2 rounded-md"
                style={{
                  background: statusColor,
                  fontFamily: "var(--font-sans)",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                {data.status}
              </div>
            </div>

            <div className="p-8 lg:p-12 flex flex-col justify-center">
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
                  {data.kategori}
                </span>
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex items-start gap-2">
                  <Calendar
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
                    {dateRange}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin
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
                    {data.lokasi}
                  </span>
                </div>
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
                {data.judul}
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
                {data.deskripsi}
              </p>

              <div>
                <button
                  className="px-8 py-3 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2 hover:bg-[#E63950]"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "14px",
                    color: "#FFFFFF",
                    background: "#C41E3A",
                    cursor: "pointer",
                  }}
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

              <div
                className="mb-8"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "16px",
                  color: "#1F2937",
                  lineHeight: 1.8,
                }}
                dangerouslySetInnerHTML={{ __html: data.deskripsi ?? "" }}
              />

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

              <div
                className="bg-white rounded-lg p-6 flex gap-5"
                style={{ boxShadow: "0 4px 16px rgba(0, 39, 107, 0.08)" }}
              >
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
                    Tim Dosen STTB
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
                    Dosen Program Studi STTB Bandung
                  </p>
                </div>
              </div>
            </div>

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

                <div className="space-y-4 mb-6">
                  {[
                    { Icon: Calendar, label: "Tanggal", value: dateRange },
                    { Icon: MapPin, label: "Lokasi", value: data.lokasi },
                    { Icon: User, label: "Kategori", value: data.kategori },
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

                <div
                  className="mb-6"
                  style={{ height: "1px", background: "#E5E7EB" }}
                />

                <div className="space-y-3 mb-6">
                  <button
                    className="w-full px-6 py-3 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl hover:bg-[#E63950]"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "14px",
                      color: "#FFFFFF",
                      background: "#C41E3A",
                      cursor: "pointer",
                    }}
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
                  >
                    Hubungi Panitia
                  </button>
                </div>

                <div
                  className="mb-6"
                  style={{ height: "1px", background: "#E5E7EB" }}
                />

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
                    Hubungi kami untuk informasi pendaftaran lebih lanjut.
                  </p>
                </div>

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
      {relatedEvents.length > 0 && (
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
              {relatedEvents.map((card) => {
                const cardDateRange = formatDateRange(
                  card.tanggalMulai,
                  card.tanggalSelesai,
                );
                const cardStatusColor = getStatusColor(card.status);

                return (
                  <div
                    key={card.slug}
                    className="bg-white rounded-lg overflow-hidden"
                    style={{ boxShadow: "0 4px 16px rgba(0, 39, 107, 0.08)" }}
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={card.thumbnailUrl ?? FALLBACK_IMAGE}
                        alt={card.judul}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div
                        className="absolute top-4 right-4 px-3 py-1 rounded-md"
                        style={{
                          background: cardStatusColor,
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
                        {card.kategori}
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="space-y-2 mb-4">
                        {[
                          { Icon: Calendar, text: cardDateRange },
                          { Icon: MapPin, text: card.lokasi },
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
                        {card.judul}
                      </h3>
                      <Link
                        href={`/jelajahi/kegiatan/${card.slug}`}
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "13px",
                          fontWeight: 600,
                          color: "#C41E3A",
                        }}
                      >
                        Lihat Detail →
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 4 — BACK NAVIGATION */}
      <BackButton label="Kembali ke Kegiatan" bgSection="#F8F7F4" />
    </main>
  );
}
