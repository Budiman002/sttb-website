import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Facebook, MessageCircle, Share2 } from "lucide-react";
import { getBeritaDetail, getBeritaList } from "@/lib/api";
import { formatDate } from "@/lib/utils";
import { BackButton } from "@/components/shared/BackButton";
import type { Metadata } from "next";
import type { BeritaListItem } from "@/types/api";

const FALLBACK_IMAGE =
  "/images/jelajahi-berita/Grand%20Templeton%20untuk%20Proyek%20ECLAS%20International.png";

export async function generateStaticParams() {
  try {
    const data = await getBeritaList(1, 100);
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
    const data = await getBeritaDetail(slug);
    return { title: `${data.judul} — STTB Bandung` };
  } catch {
    return { title: "Berita — STTB Bandung" };
  }
}

export default async function BeritaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let data;
  try {
    data = await getBeritaDetail(slug);
  } catch {
    notFound();
  }

  let relatedArticles: BeritaListItem[] = [];
  try {
    const list = await getBeritaList(1, 4);
    relatedArticles = list.items
      .filter((item) => item.slug !== slug)
      .slice(0, 3);
  } catch {
    relatedArticles = [];
  }

  return (
    <div className="min-h-screen" style={{ fontFamily: "var(--font-sans)" }}>
      <main>
        {/* SECTION 1 — ARTICLE HERO */}
        <section
          className="relative overflow-hidden pt-8 pb-24"
          style={{ background: "#00276B" }}
        >
          <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
            <nav className="mb-12">
              <p
                className="text-xs"
                style={{
                  fontFamily: "var(--font-sans)",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>{" "}
                &rsaquo;{" "}
                <Link
                  href="/jelajahi/berita"
                  className="hover:text-white transition-colors"
                >
                  Berita
                </Link>{" "}
                &rsaquo; {data.kategori}
              </p>
            </nav>

            <div className="max-w-[800px] mx-auto text-center">
              <div className="flex justify-center mb-4">
                <span
                  className="inline-block rounded-full px-4 py-1 text-xs font-bold text-white uppercase"
                  style={{
                    background: "#C41E3A",
                    fontFamily: "var(--font-sans)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {data.kategori}
                </span>
              </div>

              <p
                className="mb-8 text-sm"
                style={{
                  fontFamily: "var(--font-sans)",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                {formatDate(data.tanggalPublish)}
              </p>

              <h1
                className="mb-6 text-white"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 5vw, 3rem)",
                  fontWeight: 700,
                  lineHeight: 1.2,
                }}
              >
                {data.judul}
              </h1>

              <p
                className="mx-auto mb-16"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "17px",
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: 1.6,
                  maxWidth: "700px",
                }}
              >
                {data.excerpt}
              </p>
            </div>

            <div
              className="relative mx-auto"
              style={{ maxWidth: "1200px", transform: "translateY(40px)" }}
            >
              <div
                className="relative rounded-xl overflow-hidden"
                style={{
                  aspectRatio: "21/9",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                }}
              >
                <Image
                  src={data.thumbnailUrl ?? FALLBACK_IMAGE}
                  alt={data.judul}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — ARTICLE BODY */}
        <section className="pt-24 pb-16" style={{ background: "#F8F7F4" }}>
          <div className="max-w-[720px] mx-auto px-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div
                  className="rounded-full flex-shrink-0"
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "#00276B",
                  }}
                />
                <p
                  className="text-sm"
                  style={{ fontFamily: "var(--font-sans)", color: "#00276B" }}
                >
                  Ditulis oleh <strong>{data.penulis}</strong>
                </p>
              </div>

              <div className="flex items-center gap-2">
                {[Share2, Facebook, MessageCircle].map((Icon, idx) => (
                  <button
                    key={idx}
                    className="rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                    style={{
                      width: "32px",
                      height: "32px",
                      background: "#00276B",
                    }}
                    aria-label="Share"
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-10 h-0.5 bg-[#C41E3A]" />

            <div
              className="prose prose-lg max-w-none mb-12"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "16px",
                color: "#1F2937",
                lineHeight: 1.8,
              }}
              dangerouslySetInnerHTML={{ __html: data.konten }}
            />

            <div className="mb-8 h-px bg-gray-200" />

            <div className="flex flex-wrap items-center gap-3">
              <span
                className="text-sm text-gray-500"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Topik:
              </span>
              {[data.kategori, "STTB"].map((tag, idx) => (
                <span
                  key={idx}
                  className="rounded-full px-4 py-1 text-sm border border-[#00276B] text-[#00276B] bg-white"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 — ARTIKEL TERKAIT */}
        {relatedArticles.length === 3 && (
          <section className="py-16 lg:py-20 bg-white">
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
                  BACA JUGA
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2rem, 5vw, 3rem)",
                    fontWeight: 700,
                    color: "#00276B",
                  }}
                >
                  Artikel Terkait
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedArticles.map((card) => (
                  <div
                    key={card.slug}
                    className="bg-white rounded-lg overflow-hidden"
                    style={{ boxShadow: "0 4px 16px rgba(0,39,107,0.08)" }}
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={card.thumbnailUrl ?? FALLBACK_IMAGE}
                        alt={card.judul}
                        fill
                        className="object-cover"
                      />
                      <div
                        className="absolute bottom-4 left-4 px-3 py-1 rounded-md text-white text-xs font-bold uppercase"
                        style={{
                          background: "#C41E3A",
                          fontFamily: "var(--font-sans)",
                          letterSpacing: "0.08em",
                        }}
                      >
                        {card.kategori}
                      </div>
                    </div>
                    <div className="p-5">
                      <p
                        className="mb-2 text-xs text-gray-500"
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        {formatDate(card.tanggalPublish)}
                      </p>
                      <h3
                        className="mb-3 line-clamp-2"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "18px",
                          fontWeight: 700,
                          color: "#00276B",
                          lineHeight: 1.3,
                        }}
                      >
                        {card.judul}
                      </h3>
                      <p
                        className="mb-4 text-sm text-gray-500 leading-relaxed line-clamp-2"
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        {card.excerpt}
                      </p>
                      <Link
                        href={`/jelajahi/berita/${card.slug}`}
                        className="text-xs font-semibold"
                        style={{
                          fontFamily: "var(--font-sans)",
                          color: "#C41E3A",
                        }}
                      >
                        Baca Selengkapnya &rarr;
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* SECTION 4 — BACK NAVIGATION */}
        <BackButton label="Kembali ke Berita" bgSection="#F8F7F4" />
      </main>
    </div>
  );
}
