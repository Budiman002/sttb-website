import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Phone, Mail } from "lucide-react";
import { ROUTES } from "@/constants/routes";

export const metadata: Metadata = {
  title: "Informasi Persyaratan Admisi — STTB Bandung",
  description:
    "Informasi lengkap persyaratan pendaftaran untuk program S1 dan S2 di Sekolah Tinggi Teologi Bandung.",
};

const S1_REQUIREMENTS: { title: string; items: string[] }[] = [
  {
    title: "Sarjana Teologi (S.Th.)",
    items: [
      "Minimal lulusan SMA/sederajat",
      "Pengalaman pelayanan gerejawi/lembaga Kristen min. 2 tahun",
      "Memiliki panggilan jelas sebagai hamba Tuhan penuh waktu",
      "Kemampuan dasar Bahasa Inggris (membaca & memahami teks)",
      "Memenuhi seluruh prosedur pendaftaran STTB",
    ],
  },
  {
    title: "Sarjana Pendidikan Kristen (S.Pd.K.)",
    items: [
      "Minimal lulusan SMA/sederajat",
      "Pengalaman pelayanan gerejawi/lembaga Kristen min. 2 tahun",
      "Memiliki panggilan jelas sebagai pendidik Kristen penuh waktu",
      "Kemampuan dasar Bahasa Inggris (membaca & memahami teks)",
      "Memenuhi seluruh prosedur pendaftaran STTB",
    ],
  },
];

const S2_REQUIREMENTS: { title: string; items: string[] }[] = [
  {
    title: "Magister Pendidikan Kristen (M.Pd.)",
    items: [
      "Lulus program S1 (semua jurusan)",
      "Pengalaman pelayanan di sekolah/gereja min. 2 tahun",
      "Kemampuan dasar Bahasa Inggris (membaca & memahami teks)",
      "Menyerahkan book review saat mendaftar",
      "Memenuhi seluruh prosedur pendaftaran STTB",
    ],
  },
  {
    title: "Magister Ministri Marketplace (M.Min.)",
    items: [
      "Lulusan S1 Teologi/Umum",
      "Pengalaman bekerja minimal 2 tahun",
      "Pengalaman pelayanan di gereja/lembaga min. 1 tahun",
      "Menyerahkan book review saat mendaftar",
      "Memenuhi seluruh prosedur pendaftaran STTB",
    ],
  },
];

function RequirementCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg bg-white p-7 shadow-[0_4px_16px_rgba(0,39,107,0.08)] [border-top:4px_solid_theme(colors.sttb-red)]">
      <h3 className="mb-6 font-body text-xl font-bold text-sttb-navy-dark">
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sttb-red">
              <CheckCircle className="h-3 w-3 text-white" />
            </div>
            <span className="font-body text-[15px] text-sttb-navy-dark">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function InfoPersyaratanPage() {
  return (
    <main>
      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden">
        <div className="grid min-h-[85vh] lg:grid-cols-[55%_45%]">
          {/* Left Column */}
          <div className="relative flex items-center bg-sttb-offwhite px-8 py-20 lg:px-16 xl:px-24">
            <div className="max-w-2xl">
              <p className="mb-8 font-body text-xs font-bold uppercase tracking-[0.15em] text-sttb-red">
                ADMISI STTB
              </p>

              <h1 className="mb-10">
                <span className="block font-display text-[72px] font-normal italic leading-[1.1] text-sttb-navy-dark">
                  INFORMASI
                </span>
                <span className="block font-heading text-[88px] font-bold leading-none text-sttb-navy-dark">
                  PERSYARATAN
                </span>
              </h1>

              <div className="mb-8 flex flex-wrap gap-4">
                <span className="rounded-lg bg-sttb-navy-dark px-6 py-3 font-body text-[15px] font-bold text-white">
                  S1 — Lulusan SMA/Sederajat
                </span>
                <span className="rounded-lg bg-sttb-red px-6 py-3 font-body text-[15px] font-bold text-white">
                  S2 — Lulusan S1
                </span>
              </div>

              <p className="font-body text-sm italic text-sttb-navy-dark max-w-[540px]">
                Lulusan dari institusi yang diakui pemerintah. Gelar
                internasional (B.A., M.A.) dipertimbangkan kasus per kasus.
              </p>
            </div>
          </div>

          {/* Right Column — Bible Image */}
          <div className="relative overflow-hidden">
            <Image
              src="/images/hand-bibble.png"
              alt="Hands praying over open Bible"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-sttb-navy-dark/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* SECTION 2 — PERSYARATAN PER PROGRAM STUDI */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
          {/* Section Header */}
          <div className="mb-16">
            <p className="mb-4 font-body text-[13px] font-bold uppercase tracking-[0.12em] text-sttb-red">
              DETAIL PERSYARATAN
            </p>
            <h2 className="font-heading text-[clamp(2rem,5vw,3rem)] font-bold text-sttb-navy-dark">
              Persyaratan per Program Studi
            </h2>
          </div>

          {/* S1 */}
          <div className="mb-8 flex h-12 items-center rounded-lg bg-sttb-red px-8">
            <p className="font-body text-base font-bold text-white">
              S1 — JENJANG SARJANA
            </p>
          </div>
          <div className="mb-16 grid gap-8 md:grid-cols-2">
            {S1_REQUIREMENTS.map((req) => (
              <RequirementCard key={req.title} {...req} />
            ))}
          </div>

          {/* S2 */}
          <div className="mb-8 flex h-12 items-center rounded-lg bg-sttb-navy-dark px-8">
            <p className="font-body text-base font-bold text-white">
              S2 — JENJANG MAGISTER
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {S2_REQUIREMENTS.map((req) => (
              <RequirementCard key={req.title} {...req} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — BANTUAN & CTA */}
      <section className="bg-sttb-navy-dark py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left */}
            <div>
              <p className="mb-6 font-body text-[13px] font-bold uppercase tracking-[0.12em] text-white">
                BUTUH INFORMASI LEBIH LANJUT?
              </p>
              <h2 className="mb-6 font-heading text-[clamp(2rem,5vw,3rem)] font-bold text-white">
                Kami Siap Membantu
              </h2>
              <p className="mb-8 max-w-[540px] font-body text-[15px] leading-[1.7] text-white">
                Hubungi tim admisi STTB untuk pertanyaan seputar persyaratan,
                beasiswa, atau proses pendaftaran.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-white" />
                  <span className="font-body text-base text-white">
                    0815 7336 0009
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-white" />
                  <a
                    href="mailto:admisi@sttb.ac.id"
                    className="font-body text-base text-white transition-colors hover:text-white/80"
                  >
                    admisi@sttb.ac.id
                  </a>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col items-center gap-4 lg:items-end">
              <div className="flex w-full max-w-sm flex-col gap-4">
                <Link
                  href={ROUTES.admisi.prosedurAdmisi}
                  className="rounded-lg bg-sttb-red px-10 py-5 text-center font-body text-base font-bold text-white shadow-lg transition-all hover:bg-sttb-red-hover hover:shadow-xl"
                >
                  Daftar Online →
                </Link>
                <Link
                  href={ROUTES.admisi.jadwalPendaftaran}
                  className="rounded-lg border-2 border-white bg-transparent px-10 py-5 text-center font-body text-base font-bold text-white transition-colors hover:bg-white/10"
                >
                  Lihat Jadwal Admisi
                </Link>
              </div>

              <p className="mt-2 max-w-[320px] text-center font-body text-xs text-white lg:text-right">
                Informasi beasiswa S1 &amp; S2:{" "}
                <a
                  href="mailto:beasiswa@sttb.ac.id"
                  className="underline underline-offset-2 hover:text-white/80"
                >
                  beasiswa@sttb.ac.id
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
