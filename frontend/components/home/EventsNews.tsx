"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import type { KegiatanListItem } from "@/types/api";

interface EventsNewsProps {
  kegiatanList: KegiatanListItem[];
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function formatTime(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function EventsNews({ kegiatanList }: EventsNewsProps) {
  // Format the API data to match the component's expected structure
  const events = kegiatanList.map((kegiatan) => ({
    id: kegiatan.id,
    slug: kegiatan.slug,
    category: kegiatan.kategori,
    title: kegiatan.judul,
    date: formatDate(kegiatan.tanggalMulai),
    time: kegiatan.tanggalSelesai
      ? `${formatTime(kegiatan.tanggalMulai)} - ${formatTime(kegiatan.tanggalSelesai)}`
      : formatTime(kegiatan.tanggalMulai),
    location: kegiatan.lokasi,
    image:
      kegiatan.thumbnailUrl ||
      "https://images.unsplash.com/photo-1760420940953-3958ad9f6287?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMGNvbmZlcmVuY2UlMjBzZW1pbmFyJTIwcHJlc2VudGF0aW9ufGVufDF8fHx8MTc3MzAxNzU0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    featured: false,
  }));

  // Empty state when no events
  if (events.length === 0) {
    return (
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div>
              <div
                className="inline-block px-4 py-1.5 rounded-full mb-4"
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
                  Kegiatan & Acara
                </span>
              </div>

              <h2
                className="font-heading font-semibold"
                style={{
                  fontSize: "clamp(32px, 5vw, 48px)",
                  color: "var(--gray-900)",
                  lineHeight: 1.2,
                }}
              >
                Bergabung dalam
                <br />
                <span className="italic" style={{ color: "var(--red-main)" }}>
                  Komunitas
                </span>{" "}
                Kami
              </h2>
            </div>
          </div>

          <div
            className="text-center py-16 rounded-2xl"
            style={{
              background: "var(--blue-pale)",
              color: "var(--gray-500)",
            }}
          >
            <p className="text-lg font-body">
              Belum ada kegiatan yang tersedia saat ini. Silakan cek kembali
              nanti.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="animate-in fade-in slide-in-from-left-12 duration-700">
            <div
              className="inline-block px-4 py-1.5 rounded-full mb-4"
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
                Kegiatan & Acara
              </span>
            </div>

            <h2
              className="font-heading font-semibold"
              style={{
                fontSize: "clamp(32px, 5vw, 48px)",
                color: "var(--gray-900)",
                lineHeight: 1.2,
              }}
            >
              Bergabung dalam
              <br />
              <span className="italic" style={{ color: "var(--red-main)" }}>
                Komunitas
              </span>{" "}
              Kami
            </h2>
          </div>

          <div className="animate-in fade-in slide-in-from-right-12 duration-700 delay-200">
            <Link href="/jelajahi/kegiatan">
              <button
                className="flex items-center gap-2 px-6 py-3 rounded-lg transition-all hover:gap-4 group self-start md:self-end text-white font-body font-semibold"
                style={{
                  background: "var(--blue-main)",
                }}
              >
                Lihat Semua Acara
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        </div>

        {/* Events Grid - Asymmetric Layout */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Featured Event - Large */}
          <div className="lg:col-span-7 group cursor-pointer animate-in fade-in zoom-in-95 duration-700">
            <Link href={`/jelajahi/kegiatan/${events[0].slug}`}>
              <div className="relative h-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="aspect-[16/10] lg:aspect-auto lg:h-96 relative">
                  <Image
                    src={events[0].image}
                    alt={events[0].title}
                    fill
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent 30%, rgba(0, 39, 107, 0.95) 100%)",
                    }}
                  />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                  <div
                    className="inline-block px-3 py-1 rounded-full mb-4 text-white"
                    style={{
                      background: "var(--red-main)",
                    }}
                  >
                    <span
                      className="text-xs tracking-wider uppercase font-body font-semibold"
                      style={{
                        letterSpacing: "0.08em",
                      }}
                    >
                      {events[0].category}
                    </span>
                  </div>

                  <h3
                    className="text-white mb-4 leading-tight font-heading font-semibold"
                    style={{
                      fontSize: "clamp(24px, 3vw, 32px)",
                    }}
                  >
                    {events[0].title}
                  </h3>

                  <div className="flex flex-wrap gap-4 text-white/90 text-sm mb-4 font-body">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {events[0].date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {events[0].time}
                    </div>
                  </div>

                  <button className="text-white flex items-center gap-2 group/btn font-body font-semibold">
                    View Details
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </Link>
          </div>

          {/* Smaller Events */}
          <div className="lg:col-span-5 grid gap-6">
            {events.slice(1).map((event, index) => (
              <div
                key={event.id}
                className="group cursor-pointer animate-in fade-in zoom-in-95 duration-700"
                style={{
                  animationDelay: `${(index + 1) * 100}ms`,
                }}
              >
                <Link href={`/jelajahi/kegiatan/${event.slug}`}>
                  <div
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex gap-4 p-4"
                    style={{ boxShadow: "0 4px 16px rgba(0, 39, 107, 0.08)" }}
                  >
                    <div className="w-28 h-28 flex-shrink-0 rounded-xl overflow-hidden relative">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div
                        className="inline-block px-2 py-0.5 rounded text-xs mb-2 font-body font-semibold"
                        style={{
                          background: "var(--blue-pale)",
                          color: "var(--blue-main)",
                        }}
                      >
                        {event.category}
                      </div>

                      <h4
                        className="mb-2 line-clamp-2 font-body font-semibold"
                        style={{
                          fontSize: "16px",
                          color: "var(--gray-900)",
                        }}
                      >
                        {event.title}
                      </h4>

                      <div
                        className="text-xs flex items-center gap-1 font-body"
                        style={{
                          color: "var(--gray-500)",
                        }}
                      >
                        <Calendar className="w-3 h-3" />
                        {event.date}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
