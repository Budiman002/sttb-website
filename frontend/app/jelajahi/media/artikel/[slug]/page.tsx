import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, Twitter, Facebook, MessageCircle } from "lucide-react";
import { notFound } from "next/navigation";
import { getMediaArtikelDetail, getMediaList } from "@/lib/api";
import { BackButton } from "@/components/shared/BackButton";
import { formatDate } from "@/lib/utils";
import type { MediaArtikelDetail } from "@/types/api";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1736066330610-c102cab4e942?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc3Jvb20lMjBsZWN0dXJlJTIwdGVhY2hpbmd8ZW58MXx8fHwxNzczMjkwODkwfDA&ixlib=rb-4.1.0&q=80&w=1080";

const relatedArticles = [
  {
    category: "MONOGRAF",
    date: "Agustus 2024",
    title: "Buku Penulisan Ilmiah Bidang Teologi",
    excerpt:
      "Panduan penulisan untuk bidang studi teologi dari perspektif akademis...",
    image:
      "https://images.unsplash.com/photo-1626118711692-716dae857f6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMHdyaXRpbmclMjBib29rc3xlbnwxfHx8fDE3NzMyOTA4ODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    slug: "buku-penulisan-ilmiah-bidang-teologi",
  },
  {
    category: "MONOGRAF",
    date: "Juli 2024",
    title: "Buku Misi Allah dan Tugas Gereja",
    excerpt:
      "Memahami misi Allah dalam konteks tugas dan panggilan gereja masa kini...",
    image:
      "https://images.unsplash.com/photo-1626118711692-716dae857f6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMHdyaXRpbmclMjBib29rc3xlbnwxfHx8fDE3NzMyOTA4ODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    slug: "buku-misi-allah-dan-tugas-gereja",
  },
  {
    category: "BULETIN",
    date: "Agustus 2024",
    title: "Buletin STTB #56 Agustus 2024",
    excerpt:
      "Edisi terbaru buletin STTB membahas perkembangan terkini kampus...",
    image:
      "https://images.unsplash.com/photo-1693011142814-aa33d7d1535c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNhbXB1cyUyMGxpZmV8ZW58MXx8fHwxNzczMjkwODkwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    slug: "buletin-sttb-56-agustus-2024",
  },
];

export async function generateStaticParams() {
  try {
    const data = await getMediaList(1, 100, "artikel");
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
    const data = await getMediaArtikelDetail(slug);
    return {
      title: `${data.judul} — Media STTB Bandung`,
      description: data.excerpt,
    };
  } catch {
    return { title: "Artikel — STTB Bandung" };
  }
}

export default async function ArtikelDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let data: MediaArtikelDetail | undefined;
  try {
    data = await getMediaArtikelDetail(slug);
  } catch {
    notFound();
  }
  if (!data) notFound();

  const heroImage = data.thumbnailUrl ?? FALLBACK_IMAGE;
  const nameParts = data.penulis
    .replace(/[^a-zA-Z ]/g, " ")
    .split(" ")
    .filter(Boolean);
  const initials = (
    (nameParts[0]?.[0] ?? "") + (nameParts[1]?.[0] ?? "")
  ).toUpperCase();

  return (
    <main className="min-h-screen" style={{ fontFamily: "var(--font-sans)" }}>
      {/* SECTION 1 — ARTICLE HERO */}
      <section className="pt-20 pb-12" style={{ background: "#F8F7F4" }}>
        <div className="max-w-[680px] mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "12px",
                color: "#6B7280",
              }}
            >
              <Link href="/" style={{ color: "#6B7280" }}>
                Home
              </Link>{" "}
              ›{" "}
              <Link href="/jelajahi/media" style={{ color: "#6B7280" }}>
                Media
              </Link>{" "}
              › Artikel
            </p>
          </nav>

          {/* Category + Date Row */}
          <div className="flex justify-center items-center gap-2 mb-6">
            <span
              className="inline-block rounded-full px-4 py-1"
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
              {data.kategori}
            </span>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "13px",
                color: "#6B7280",
              }}
            >
              • {formatDate(data.tanggalPublish)}
            </span>
          </div>

          {/* Article Title */}
          <h1
            className="mb-10 text-center"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "44px",
              fontWeight: 700,
              color: "#00276B",
              lineHeight: 1.3,
            }}
          >
            {data.judul}
          </h1>

          {/* Author Row */}
          <div className="flex flex-col items-center mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div
                className="rounded-full flex-shrink-0 flex items-center justify-center"
                style={{
                  width: "40px",
                  height: "40px",
                  background: "#00276B",
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                }}
              >
                {initials}
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#00276B",
                  }}
                >
                  Oleh {data.penulis}
                </p>
              </div>
            </div>
          </div>

          {/* Red Divider */}
          <div className="flex justify-center mb-6">
            <div
              style={{
                width: "60px",
                height: "2px",
                background: "#C41E3A",
              }}
            />
          </div>

          {/* Reading Time */}
          <div className="flex justify-center items-center gap-2">
            <Clock className="w-3 h-3" style={{ color: "#6B7280" }} />
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "12px",
                color: "#6B7280",
              }}
            >
              Estimasi baca: 5 menit
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — FEATURED VISUAL */}
      <section className="py-12" style={{ background: "#FFFFFF" }}>
        <div className="max-w-[800px] mx-auto px-12">
          {/* Featured Image */}
          <div
            className="relative rounded-lg overflow-hidden mb-4"
            style={{ aspectRatio: "16/9" }}
          >
            <Image
              src={heroImage}
              alt={data.judul}
              fill
              className="object-cover"
              sizes="(max-width: 800px) 100vw, 800px"
              priority
            />
          </div>
        </div>
      </section>

      {/* SECTION 3 — ARTICLE BODY */}
      <section className="py-12" style={{ background: "#FFFFFF" }}>
        <div className="max-w-[680px] mx-auto px-6">
          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none mb-12"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "18px",
              color: "#1F2937",
              lineHeight: 1.9,
            }}
            dangerouslySetInnerHTML={{ __html: data.konten }}
          />

          {/* Tags Row */}
          <div className="flex flex-wrap items-center gap-3 mt-12">
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "13px",
                color: "#6B7280",
              }}
            >
              Topik:
            </span>
            {[data.kategori, "Akademik", "Teologi"].map((tag, idx) => (
              <span
                key={idx}
                className="rounded-full px-4 py-1"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  color: "#00276B",
                  border: "1px solid #00276B",
                  background: "#FFFFFF",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Gray Divider */}
          <div
            className="my-8"
            style={{
              height: "1px",
              background: "#E5E7EB",
            }}
          />

          {/* Social Share Row */}
          <div className="flex flex-wrap items-center gap-4">
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "13px",
                color: "#6B7280",
              }}
            >
              Bagikan artikel ini:
            </span>
            <div className="flex items-center gap-2">
              {[
                { Icon: Twitter },
                { Icon: Facebook },
                { Icon: MessageCircle },
              ].map((item, idx) => (
                <button
                  key={idx}
                  className="rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                  style={{
                    width: "36px",
                    height: "36px",
                    background: "#00276B",
                    cursor: "pointer",
                  }}
                >
                  <item.Icon className="w-4 h-4" style={{ color: "#FFFFFF" }} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — ARTIKEL TERKAIT */}
      <section className="py-16 lg:py-20" style={{ background: "#F8F7F4" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          {/* Section Header */}
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

          {/* 3-Column Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedArticles.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg overflow-hidden"
                style={{
                  boxShadow: "0 4px 16px rgba(0, 39, 107, 0.08)",
                }}
              >
                {/* Image Area */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Category Badge */}
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
                  <p
                    className="mb-2"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "12px",
                      color: "#6B7280",
                    }}
                  >
                    {card.date}
                  </p>
                  <h3
                    className="mb-3"
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
                  <p
                    className="mb-4"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "14px",
                      color: "#6B7280",
                      lineHeight: 1.6,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {card.excerpt}
                  </p>
                  <Link
                    href={`/jelajahi/media/artikel/${card.slug}`}
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#C41E3A",
                    }}
                  >
                    Baca Selengkapnya →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — BACK NAVIGATION */}
      <BackButton label="Kembali ke Media" bgSection="#FFFFFF" />
    </main>
  );
}
