import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, Play } from "lucide-react";
import { notFound } from "next/navigation";
import { getMediaVideoDetail, getMediaList } from "@/lib/api";
import { BackButton } from "@/components/shared/BackButton";
import { formatDate } from "@/lib/utils";
import type { MediaVideoDetail, MediaListItem } from "@/types/api";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1697057406467-60340e993e6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGNpdHklMjBtaXNzaW9ufGVufDF8fHx8MTc3MzI5MDg4Nnww&ixlib=rb-4.1.0&q=80&w=1080";

function getYoutubeEmbedUrl(url: string): string {
  const watchMatch = url.match(/[?&]v=([^&]+)/);
  if (watchMatch) return `https://www.youtube.com/embed/${watchMatch[1]}`;
  const shortMatch = url.match(/youtu\.be\/([^?]+)/);
  if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}`;
  if (url.includes("/embed/")) return url;
  return url;
}

export async function generateStaticParams() {
  try {
    const data = await getMediaList(1, 100, "video");
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
    const data = await getMediaVideoDetail(slug);
    return {
      title: `${data.judul} — Media STTB Bandung`,
      description: data.deskripsi.slice(0, 160),
    };
  } catch {
    return { title: "Video — STTB Bandung" };
  }
}

export default async function VideoDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let data: MediaVideoDetail | undefined;
  try {
    data = await getMediaVideoDetail(slug);
  } catch {
    notFound();
  }
  if (!data) notFound();

  let relatedVideos: MediaListItem[] = [];
  try {
    const relatedData = await getMediaList(1, 9, "video");
    relatedVideos = relatedData.items
      .filter((item) => item.slug !== slug)
      .slice(0, 3);
  } catch {
    // keep empty on error
  }

  const heroImage = data.thumbnailUrl ?? FALLBACK_IMAGE;
  const durasi = data.durasi ?? "—";

  return (
    <main className="min-h-screen" style={{ fontFamily: "var(--font-sans)" }}>
      {/* SECTION 1 — HERO */}
      <section className="py-20" style={{ background: "#00276B" }}>
        <div className="max-w-[800px] mx-auto px-12 text-center">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "13px",
                color: "rgba(255, 255, 255, 0.5)",
              }}
            >
              <Link href="/" style={{ color: "rgba(255, 255, 255, 0.5)" }}>
                Home
              </Link>{" "}
              ›{" "}
              <Link
                href="/jelajahi/media"
                style={{ color: "rgba(255, 255, 255, 0.5)" }}
              >
                Media
              </Link>{" "}
              › Video
            </p>
          </nav>

          {/* Badge + Date Row */}
          <div className="flex justify-center items-center gap-2 mb-4">
            <span
              className="inline-block rounded-full px-4 py-1"
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
              VIDEO • {data.kategori}
            </span>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "13px",
                color: "rgba(255, 255, 255, 0.5)",
              }}
            >
              • {data.tanggalPublish ? formatDate(data.tanggalPublish) : "—"}
            </span>
          </div>

          {/* Title */}
          <h1
            className="mb-6"
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "clamp(2rem, 5vw, 56px)",
              fontWeight: 400,
              color: "#FFFFFF",
              lineHeight: 1.2,
            }}
          >
            {data.judul}
          </h1>

          {/* Author Row — generic placeholder, no penulis in API */}
          <div className="flex justify-center items-center gap-3 mb-4">
            <div
              className="rounded-full flex items-center justify-center flex-shrink-0"
              style={{
                width: "40px",
                height: "40px",
                background: "#00276B",
                border: "2px solid #FFFFFF",
                fontFamily: "var(--font-sans)",
                fontSize: "14px",
                fontWeight: 700,
                color: "#FFFFFF",
              }}
            >
              ST
            </div>
            <div className="text-left">
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                }}
              >
                Tim STTB Bandung
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "12px",
                  color: "rgba(255, 255, 255, 0.6)",
                }}
              >
                Sekolah Tinggi Teologi Bandung
              </p>
            </div>
          </div>

          {/* Red Divider */}
          <div className="flex justify-center mb-4">
            <div
              style={{
                width: "40px",
                height: "2px",
                background: "#C41E3A",
              }}
            />
          </div>

          {/* Duration Pill */}
          <div className="flex justify-center">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: "rgba(0, 0, 0, 0.3)",
                fontFamily: "var(--font-sans)",
                fontSize: "13px",
                color: "#FFFFFF",
              }}
            >
              <Clock className="w-4 h-4" />
              <span>Durasi: {durasi}</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — VIDEO EMBED AREA */}
      <section className="pb-10" style={{ background: "#FFFFFF" }}>
        <div
          className="max-w-[900px] mx-auto px-6"
          style={{ marginTop: "-40px" }}
        >
          {/* Video Player */}
          <div className="relative rounded-lg overflow-hidden mb-5 aspect-video">
            {data.videoUrl ? (
              <iframe
                src={getYoutubeEmbedUrl(data.videoUrl)}
                title={data.judul}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
                allowFullScreen
                className="w-full h-full"
              />
            ) : (
              <>
                <Image
                  src={heroImage}
                  alt={data.judul}
                  fill
                  className="object-cover"
                  sizes="(max-width: 900px) 100vw, 900px"
                  priority
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "rgba(0, 0, 0, 0.35)" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="rounded-full flex items-center justify-center bg-white"
                    style={{
                      width: "72px",
                      height: "72px",
                      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    <Play
                      className="ml-1"
                      style={{
                        width: "28px",
                        height: "28px",
                        fill: "#C41E3A",
                        color: "#C41E3A",
                      }}
                    />
                  </div>
                </div>
              </>
            )}

            {/* Duration Overlay Bottom-Left */}
            {data.durasi && (
              <div
                className="absolute bottom-4 left-4 px-3 py-1 rounded"
                style={{
                  background: "rgba(0, 0, 0, 0.7)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#FFFFFF",
                }}
              >
                {data.durasi}
              </div>
            )}
          </div>

          {/* Video Title Below Player */}
          <h2
            className="mb-2"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "20px",
              fontWeight: 700,
              color: "#00276B",
            }}
          >
            {data.judul}
          </h2>

          {/* Meta Row */}
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "13px",
              color: "#6B7280",
            }}
          >
            {data.tanggalPublish ? formatDate(data.tanggalPublish) : "—"} •{" "}
            {durasi} • {data.kategori}
          </p>
        </div>
      </section>

      {/* SECTION 3 — DESKRIPSI */}
      <section className="py-10" style={{ background: "#FFFFFF" }}>
        <div className="max-w-[680px] mx-auto px-12">
          {/* Section Heading */}
          <h2
            className="mb-3"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "28px",
              fontWeight: 700,
              color: "#00276B",
            }}
          >
            Tentang Video Ini
          </h2>

          {/* Red Accent Underline */}
          <div
            className="mb-6"
            style={{
              width: "40px",
              height: "3px",
              background: "#C41E3A",
            }}
          />

          {/* Description */}
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "16px",
              color: "#374151",
              lineHeight: 1.9,
            }}
            dangerouslySetInnerHTML={{ __html: data.deskripsi ?? "" }}
          />
        </div>
      </section>

      {/* SECTION 4 — VIDEO LAINNYA */}
      {relatedVideos.length > 0 && (
        <section className="py-16" style={{ background: "#F8F7F4" }}>
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
                TERKAIT
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 5vw, 3rem)",
                  fontWeight: 700,
                  color: "#00276B",
                }}
              >
                Video Lainnya
              </h2>
            </div>

            {/* 3-Column Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedVideos.map((card) => (
                <div
                  key={card.id}
                  className="bg-white rounded-lg overflow-hidden"
                  style={{
                    boxShadow: "0 4px 16px rgba(0, 39, 107, 0.08)",
                  }}
                >
                  {/* Image Area */}
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={card.thumbnailUrl ?? FALLBACK_IMAGE}
                      alt={card.judul}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="rounded-full flex items-center justify-center bg-white"
                        style={{ width: "48px", height: "48px" }}
                      >
                        <Play
                          className="ml-1"
                          style={{
                            width: "16px",
                            height: "16px",
                            fill: "#C41E3A",
                            color: "#C41E3A",
                          }}
                        />
                      </div>
                    </div>

                    {/* Type Badge (Top-Left) */}
                    <div
                      className="absolute top-4 left-4 px-3 py-1 rounded-full"
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "10px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        background: "#C41E3A",
                        color: "#FFFFFF",
                      }}
                    >
                      VIDEO
                    </div>

                    {/* Category Badge (Bottom-Left) */}
                    <div
                      className="absolute bottom-4 left-4 px-3 py-1 rounded-md"
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "10px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        background: "#00276B",
                        color: "#FFFFFF",
                      }}
                    >
                      {card.kategori}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5">
                    <h3
                      className="mb-4"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "16px",
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

                    <div>
                      <Link
                        href={`/jelajahi/media/video/${card.slug}`}
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "13px",
                          fontWeight: 600,
                          color: "#C41E3A",
                        }}
                      >
                        Tonton Sekarang →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 5 — BACK NAVIGATION */}
      <BackButton label="Kembali ke Media" bgSection="#FFFFFF" />
    </main>
  );
}
