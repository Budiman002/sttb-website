"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { ROUTES } from "@/constants/routes";

const EXTERNAL_LINKS = {
  perpustakaanDigital: "https://perpustakaan-digital.sttb.ac.id",
  jurnalTransformasi: "https://jurnal.sttb.ac.id",
  podcast: "https://podcast.sttb.ac.id",
  buletin: "https://buletin.sttb.ac.id",
  elearning: "https://elearning.sttb.ac.id",
  kalenderAkademik: "https://akademik.sttb.ac.id/kalender",
  facebook: "https://facebook.com/sttbbandung",
  instagram: "https://instagram.com/sttbbandung",
  youtube: "https://youtube.com/@sttbbandung",
  whatsapp: "https://wa.me/6281273386069",
};

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
    console.log("Subscribe:", { email });
    setEmail("");
  };

  return (
    <footer className="bg-[#00276B] text-white">
      {/* Section Atas — Tetap Terhubung */}
      <div className="w-full px-6 py-12">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            {/* Kiri */}
            <div className="max-w-lg">
              <h2 className="mb-3 font-heading text-3xl font-bold leading-tight text-white md:text-4xl">
                Tetap <em className="not-italic text-sttb-red">Terhubung</em>
              </h2>
              <p className="font-body text-base text-white/70">
                Dapatkan update terbaru tentang program, acara, dan artikel
                teologi dari STTB.
              </p>
            </div>

            {/* Kanan — Subscribe */}
            <form
              onSubmit={handleSubscribe}
              className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                placeholder="Masukkan email Anda"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 rounded-lg border border-white/20 bg-white/10 px-4 py-3 font-body text-sm text-white placeholder-white/50 transition-colors focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <button
                type="submit"
                className="rounded-lg bg-sttb-red px-6 py-3 font-body text-sm font-semibold text-white transition-colors hover:bg-sttb-red-hover"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Section Tengah — 4 Kolom */}
      <div className="border-t border-white/10 px-6 py-12">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            {/* Kolom 1 — Logo & Social */}
            <div className="col-span-2 md:col-span-1">
              <Link href={ROUTES.home} className="mb-4 inline-block">
                <img
                  src="/images/sttb-logo.svg"
                  alt="STTB Bandung"
                  className="h-20 w-20"
                />
              </Link>
              <p className="mb-6 font-body text-sm leading-relaxed text-white/70">
                Menghasilkan pastor-scholar yang berdampak dalam konteks
                pelayanan urban.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href={EXTERNAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 transition-colors hover:text-sttb-red"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href={EXTERNAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 transition-colors hover:text-sttb-red"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href={EXTERNAL_LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 transition-colors hover:text-sttb-red"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Kolom 2 — Tentang Kami */}
            <div>
              <h3 className="mb-4 font-body text-sm font-semibold uppercase tracking-wider text-white">
                Tentang Kami
              </h3>
              <ul className="space-y-2 font-body text-sm">
                <li>
                  <Link
                    href={ROUTES.tentangKami.visiMisi}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    Visi &amp; Misi
                  </Link>
                </li>
                <li>
                  <Link
                    href={ROUTES.tentangKami.sejarah}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    Sejarah
                  </Link>
                </li>
                <li>
                  <Link
                    href={ROUTES.tentangKami.dewanDosen}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    Kepemimpinan
                  </Link>
                </li>
                <li>
                  <Link
                    href={ROUTES.tentangKami.pengakuanIman}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    Akreditasi
                  </Link>
                </li>
              </ul>
            </div>

            {/* Kolom 3 — Program Studi */}
            <div>
              <h3 className="mb-4 font-body text-sm font-semibold uppercase tracking-wider text-white">
                Program Studi
              </h3>
              <ul className="space-y-2 font-body text-sm">
                <li>
                  <Link
                    href={ROUTES.akademik.sarjanaTeologi}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    Sarjana Teologi
                  </Link>
                </li>
                <li>
                  <Link
                    href={ROUTES.akademik.sarjanaPendidikanKristen}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    Sarjana Pendidikan Kristen
                  </Link>
                </li>
                <li>
                  <Link
                    href={
                      ROUTES.akademik
                        .magisterTeologiPelayananPastoralGerejaUrban
                    }
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    Magister Teologi
                  </Link>
                </li>
                <li>
                  <Link
                    href={ROUTES.akademik.magisterPendidikanKristen}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    Magister Pendidikan Kristen
                  </Link>
                </li>
                <li>
                  <Link
                    href={ROUTES.akademik.magisterMinistriMarketplace}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    Magister Ministri
                  </Link>
                </li>
              </ul>
            </div>

            {/* Kolom 4 — Akademik */}
            <div>
              <h3 className="mb-4 font-body text-sm font-semibold uppercase tracking-wider text-white">
                Akademik
              </h3>
              <ul className="space-y-2 font-body text-sm">
                <li>
                  <a
                    href={EXTERNAL_LINKS.kalenderAkademik}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    Kalender Akademik
                  </a>
                </li>
                <li>
                  <a
                    href={EXTERNAL_LINKS.perpustakaanDigital}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    Perpustakaan Digital
                  </a>
                </li>
                <li>
                  <a
                    href={EXTERNAL_LINKS.jurnalTransformasi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    Jurnal Transformasi
                  </a>
                </li>
                <li>
                  <a
                    href={EXTERNAL_LINKS.elearning}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    E-Learning
                  </a>
                </li>
              </ul>
            </div>

            {/* Kolom 5 — Lainnya */}
            <div>
              <h3 className="mb-4 font-body text-sm font-semibold uppercase tracking-wider text-white">
                Lainnya
              </h3>
              <ul className="space-y-2 font-body text-sm">
                <li>
                  <Link
                    href={ROUTES.jelajahi.berita.list}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    Berita &amp; Artikel
                  </Link>
                </li>
                <li>
                  <Link
                    href={ROUTES.jelajahi.kegiatan.list}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    Acara
                  </Link>
                </li>
                <li>
                  <Link
                    href={ROUTES.jelajahi.perpustakaan.list}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    Alumni
                  </Link>
                </li>
                <li>
                  <a
                    href={EXTERNAL_LINKS.podcast}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    Podcast
                  </a>
                </li>
                <li>
                  <a
                    href={EXTERNAL_LINKS.buletin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    Buletin
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Section Bawah — Bottom Bar */}
      <div className="bg-[#001A4D] px-6 py-10">
        <div className="container mx-auto max-w-7xl">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Alamat */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sttb-red">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="mb-1 font-body text-sm font-semibold text-white">
                  Alamat
                </p>
                <p className="font-body text-sm leading-relaxed text-white/70">
                  Jl. Dr. Djunjunan No. 105
                  <br />
                  Bandung 40173, Indonesia
                </p>
              </div>
            </div>

            {/* Telepon & WA */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sttb-red">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="mb-1 font-body text-sm font-semibold text-white">
                  Telepon
                </p>
                <a
                  href="tel:+622260164540"
                  className="block font-body text-sm text-white/70 transition-colors hover:text-white"
                >
                  (+62) 22 601-6454
                </a>
                <a
                  href={EXTERNAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-body text-sm text-white/70 transition-colors hover:text-white"
                >
                  WA: (+62) 812 7338-6069
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sttb-red">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="mb-1 font-body text-sm font-semibold text-white">
                  Email
                </p>
                <a
                  href="mailto:office@sttb.ac.id"
                  className="font-body text-sm text-white/70 transition-colors hover:text-white"
                >
                  office@sttb.ac.id
                </a>
              </div>
            </div>
          </div>

          {/* Divider & Copyright */}
          <div className="mt-10 border-t border-white/10 pt-6">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="font-body text-sm text-white/50">
                © 2026 Sekolah Tinggi Teologi Bandung. All Rights Reserved.
              </p>
              <div className="flex gap-6">
                <a
                  href="#"
                  className="font-body text-sm text-white/50 transition-colors hover:text-white"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="font-body text-sm text-white/50 transition-colors hover:text-white"
                >
                  Terms of Use
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
