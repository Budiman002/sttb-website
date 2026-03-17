import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookOpen, Globe } from "lucide-react";
import { getPerpustakaanDetail, getPerpustakaanList } from "@/lib/api";
import { BackButton } from "@/components/shared/BackButton";
import type { Metadata } from "next";
import type { PerpustakaanListItem } from "@/types/api";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1630197158266-bfe9ce8ed653?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

function getEmbedUrl(url: string): string {
  const match = url.match(/\/file\/d\/([^/]+)/);
  if (match) return `https://drive.google.com/file/d/${match[1]}/preview`;
  return url;
}

export async function generateStaticParams() {
  try {
    const data = await getPerpustakaanList(1, 100);
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
    const data = await getPerpustakaanDetail(slug);
    return { title: `${data.judul} — Perpustakaan STTB Bandung` };
  } catch {
    return { title: "Perpustakaan — STTB Bandung" };
  }
}

export default async function PerpustakaanDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let data;
  try {
    data = await getPerpustakaanDetail(slug);
  } catch {
    notFound();
  }

  let relatedBooks: PerpustakaanListItem[] = [];
  try {
    const list = await getPerpustakaanList(1, 5);
    relatedBooks = list.items
      .filter((item) => item.slug !== slug)
      .slice(0, 4);
  } catch {
    relatedBooks = [];
  }

  const bookImageSrc = data.thumbnailUrl ?? FALLBACK_IMAGE;

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
                href="/jelajahi/perpustakaan"
                style={{ color: "rgba(255, 255, 255, 0.5)" }}
              >
                Perpustakaan
              </Link>
            </p>
          </nav>

          {/* Category Badge + Year */}
          <div className="flex justify-center items-center gap-2 mb-4">
            <span
              className="inline-block rounded-full px-4 py-1"
              style={{
                background: "#6B7280",
                fontFamily: "var(--font-sans)",
                fontSize: "10px",
                fontWeight: 700,
                color: "#FFFFFF",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              {data.kategori.toUpperCase()}
            </span>
            {data.tahun && (
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  color: "rgba(255, 255, 255, 0.5)",
                }}
              >
                • {data.tahun}
              </span>
            )}
          </div>

          {/* Title */}
          <h1
            className="mb-5"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 52px)",
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.2,
            }}
          >
            {data.judul}
          </h1>

          {/* Author Row */}
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
              {data.penulis
                .split(" ")
                .slice(0, 2)
                .map((w) => w[0])
                .join("")
                .toUpperCase()}
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
                {data.penulis}
              </p>
              {data.penerbit && (
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "12px",
                    color: "rgba(255, 255, 255, 0.6)",
                  }}
                >
                  {data.penerbit}
                </p>
              )}
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

          {/* Meta Pills */}
          <div className="flex justify-center items-center gap-3 flex-wrap">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: "rgba(0, 0, 0, 0.3)",
                fontFamily: "var(--font-sans)",
                fontSize: "13px",
                color: "#FFFFFF",
              }}
            >
              <BookOpen className="w-4 h-4" />
              <span>{data.kategori}</span>
            </div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: "rgba(0, 0, 0, 0.3)",
                fontFamily: "var(--font-sans)",
                fontSize: "13px",
                color: "#FFFFFF",
              }}
            >
              <Globe className="w-4 h-4" />
              <span>Bahasa Indonesia</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — PDF VIEWER */}
      <section className="pb-10" style={{ background: "#FFFFFF" }}>
        <div
          className="max-w-[900px] mx-auto px-6"
          style={{ marginTop: "-40px" }}
        >
          {data.fileUrl ? (
            /* Document Viewer - Google Drive Embed */
            <div
              className="rounded-xl overflow-hidden"
              style={{ boxShadow: "0 8px 32px rgba(0, 39, 107, 0.15)" }}
            >
              <div
                className="relative"
                style={{
                  background: "#003F8A",
                  aspectRatio: "3/4",
                }}
              >
                <iframe
                  src={getEmbedUrl(data.fileUrl)}
                  className="w-full h-full"
                  style={{ border: "none" }}
                  allow="autoplay"
                  title={data.judul}
                />
              </div>
              {/* Open in new tab link */}
              <div
                className="text-center py-3"
                style={{
                  background: "#F3F4F6",
                  borderTop: "1px solid #E5E7EB",
                }}
              >
                <a
                  href={data.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#00276B",
                  }}
                >
                  Buka dokumen lengkap →
                </a>
              </div>
            </div>
          ) : (
            /* Placeholder when no file URL */
            <div
              className="rounded-xl overflow-hidden"
              style={{ boxShadow: "0 8px 32px rgba(0, 39, 107, 0.15)" }}
            >
              <div
                className="relative flex items-center justify-center"
                style={{
                  background: "#003F8A",
                  aspectRatio: "3/4",
                }}
              >
                {/* Book cover as background */}
                <Image
                  src={bookImageSrc}
                  alt={data.judul}
                  fill
                  className="object-cover opacity-20"
                  sizes="(max-width: 900px) 100vw, 900px"
                />

                {/* Simulated PDF Page */}
                <div
                  className="relative bg-white rounded z-10"
                  style={{
                    width: "60%",
                    height: "70%",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                    padding: "40px 30px",
                  }}
                >
                  <div className="space-y-6">
                    {[1, 2, 3].map((block) => (
                      <div key={block} className="space-y-1.5">
                        {[1, 2, 3, 4, 5].map((line) => (
                          <div
                            key={line}
                            style={{
                              height: "8px",
                              background: "#D1D5DB",
                              borderRadius: "2px",
                              width: line === 5 ? "70%" : "100%",
                            }}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 3 — DESKRIPSI KOLEKSI */}
      <section className="py-12" style={{ background: "#FFFFFF" }}>
        <div className="max-w-[680px] mx-auto px-12">
          <h2
            className="mb-3"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "28px",
              fontWeight: 700,
              color: "#00276B",
            }}
          >
            Tentang Koleksi Ini
          </h2>

          <div
            className="mb-6"
            style={{
              width: "40px",
              height: "3px",
              background: "#C41E3A",
            }}
          />

          <div
            className="prose-content mb-8"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "16px",
              color: "#374151",
              lineHeight: 1.9,
            }}
            dangerouslySetInnerHTML={{ __html: data.deskripsi ?? "" }}
          />

          {/* Detail Grid */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { label: "PENULIS", value: data.penulis },
              {
                label: "TAHUN TERBIT",
                value: data.tahun ? String(data.tahun) : "—",
              },
              { label: "PENERBIT", value: data.penerbit ?? "—" },
              { label: "ISBN", value: data.isbn ?? "—" },
            ].map((item) => (
              <div key={item.label}>
                <p
                  className="mb-2"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "11px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    color: "#C41E3A",
                    letterSpacing: "0.08em",
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#00276B",
                  }}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — CTA AKSES */}
      <section className="py-12 text-center" style={{ background: "#F8F7F4" }}>
        <div className="max-w-[480px] mx-auto px-6">
          <h3
            className="mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "24px",
              fontWeight: 700,
              color: "#00276B",
            }}
          >
            Ingin Akses Koleksi Lengkap?
          </h3>

          <p
            className="mb-6"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "15px",
              color: "#6B7280",
              lineHeight: 1.7,
            }}
          >
            Koleksi perpustakaan digital tersedia penuh untuk mahasiswa dan
            alumni STTB yang terdaftar.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
            <button
              className="px-8 py-3.5 rounded-lg transition-all hover:bg-[#003F8A]"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "14px",
                fontWeight: 600,
                color: "#FFFFFF",
                background: "#00276B",
                cursor: "pointer",
              }}
            >
              Masuk dengan Akun STTB
            </button>
            <button
              className="px-8 py-3.5 rounded-lg transition-all hover:bg-[#00276B] hover:text-white"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "14px",
                fontWeight: 600,
                color: "#00276B",
                background: "#FFFFFF",
                border: "1px solid #00276B",
                cursor: "pointer",
              }}
            >
              Hubungi Perpustakaan
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 5 — KOLEKSI LAINNYA */}
      {relatedBooks.length > 0 && (
        <section className="py-16" style={{ background: "#FFFFFF" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
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
                Koleksi Lainnya
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {relatedBooks.map((card) => (
                <div
                  key={card.slug}
                  className="bg-white rounded-lg overflow-hidden"
                  style={{
                    boxShadow: "0 4px 16px rgba(0, 39, 107, 0.08)",
                  }}
                >
                  <div
                    className="relative overflow-hidden"
                    style={{ aspectRatio: "3/4" }}
                  >
                    <Image
                      src={card.thumbnailUrl ?? FALLBACK_IMAGE}
                      alt={card.judul}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1400px) 33vw, 25vw"
                    />

                    <div
                      className="absolute top-3 right-3 px-2.5 py-1 rounded-full"
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

                  <div className="p-4">
                    <h3
                      className="mb-2"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "15px",
                        fontWeight: 700,
                        color: "#00276B",
                        lineHeight: 1.4,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {card.judul}
                    </h3>

                    <p
                      className="mb-1"
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "13px",
                        color: "#6B7280",
                      }}
                    >
                      {card.penulis}
                    </p>

                    <p
                      className="mb-3"
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "12px",
                        color: "#9CA3AF",
                      }}
                    >
                      {card.tahun ?? "—"}
                    </p>

                    <Link
                      href={`/jelajahi/perpustakaan/${card.slug}`}
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "#C41E3A",
                      }}
                    >
                      Lihat Detail →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 6 — BACK NAVIGATION */}
      <BackButton label="Kembali ke Perpustakaan" />
    </main>
  );
}
