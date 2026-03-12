import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";

export const metadata: Metadata = {
  title: "Jadwal Pendaftaran — STTB Bandung",
  description:
    "Informasi lengkap jadwal pendaftaran mahasiswa baru tiga gelombang di Sekolah Tinggi Teologi Bandung.",
};

const DEADLINE_PILLS = [
  { label: "GELOMBANG I", date: "13 Oktober 2025" },
  { label: "GELOMBANG II", date: "2 Februari 2026" },
  { label: "GELOMBANG III", date: "27 April 2026" },
];

type MetodeColor = "red" | "navy";

interface ScheduleRow {
  no: number;
  aktivitas: string;
  gel1: string;
  gel2: string;
  gel3: string;
  metode: string;
  metodeColor: MetodeColor;
}

const SCHEDULE_ROWS: ScheduleRow[] = [
  {
    no: 1,
    aktivitas: "Pengembalian Formulir Pendaftaran",
    gel1: "Oktober, minggu ketiga (Senin)",
    gel2: "Maret, minggu ketiga (Senin)",
    gel3: "Mei, minggu ketiga (Senin)",
    metode: "Pos / E-mail",
    metodeColor: "navy",
  },
  {
    no: 2,
    aktivitas: "Seleksi Dokumen Pendaftaran",
    gel1: "Oktober, minggu ketiga (Selasa)",
    gel2: "Maret, minggu ketiga (Selasa)",
    gel3: "Mei, minggu ketiga (Selasa)",
    metode: "Onsite",
    metodeColor: "red",
  },
  {
    no: 3,
    aktivitas: "Panggilan Tes",
    gel1: "Oktober, minggu ketiga (Rabu)",
    gel2: "Maret, minggu ketiga (Rabu)",
    gel3: "Mei, minggu ketiga (Rabu)",
    metode: "WA & Email",
    metodeColor: "navy",
  },
  {
    no: 4,
    aktivitas: "Psikotes Online Tahap 1 — Pengisian Form",
    gel1: "Oktober, minggu ketiga (Jumat–Sabtu)",
    gel2: "Maret, minggu ketiga (Jumat–Sabtu)",
    gel3: "Mei, minggu ketiga (Jumat–Sabtu)",
    metode: "Website",
    metodeColor: "navy",
  },
  {
    no: 5,
    aktivitas: "Psikotes Online Tahap 2 — Tes Bersama",
    gel1: "Oktober, minggu keempat (Senin)",
    gel2: "Maret, minggu keempat (Senin)",
    gel3: "Mei, minggu keempat (Senin)",
    metode: "Zoom & Website",
    metodeColor: "navy",
  },
  {
    no: 6,
    aktivitas:
      "Tes Tertulis Online (Tes Pemahaman Teologi, Bahasa Indonesia, Bahasa Inggris)",
    gel1: "Oktober, minggu keempat (Selasa)",
    gel2: "Maret, minggu keempat (Selasa)",
    gel3: "Mei, minggu keempat (Selasa)",
    metode: "Zoom & Website",
    metodeColor: "navy",
  },
  {
    no: 7,
    aktivitas: "Psikotes Online Tahap 3 — Wawancara Psikolog",
    gel1: "Oktober, minggu ketiga (Senin)",
    gel2: "April, minggu pertama (Senin–Kamis)",
    gel3: "Juni, minggu pertama (Senin–Kamis)",
    metode: "Zoom",
    metodeColor: "navy",
  },
  {
    no: 8,
    aktivitas: "Wawancara dengan Dosen STTB",
    gel1: "November, minggu ketiga (Senin)",
    gel2: "April, minggu ketiga (Senin)",
    gel3: "Juni, minggu ketiga (Senin)",
    metode: "Zoom",
    metodeColor: "navy",
  },
  {
    no: 9,
    aktivitas: "Pengumuman Hasil Penerimaan Mahasiswa Baru",
    gel1: "November, minggu keempat (Rabu–Jumat)",
    gel2: "April, minggu keempat (Rabu–Jumat)",
    gel3: "Juni, minggu keempat (Rabu–Jumat)",
    metode: "WA & Email",
    metodeColor: "navy",
  },
];

export default function JadwalPendaftaranPage() {
  return (
    <main>
      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden">
        <div className="grid min-h-[85vh] lg:grid-cols-2">
          {/* Left Column */}
          <div className="relative flex items-center bg-sttb-offwhite px-8 py-20 lg:px-16 xl:px-24">
            <div className="max-w-2xl">
              <p className="mb-8 font-body text-xs font-bold uppercase tracking-[0.15em] text-sttb-red">
                ADMISI STTB
              </p>

              <h1 className="mb-12">
                <span className="mb-2 block font-display text-[72px] font-normal italic leading-[1.1] text-sttb-navy-dark">
                  JADWAL
                </span>
                <span className="block font-heading text-[64px] font-bold leading-[1.1] text-sttb-navy-dark">
                  PENDAFTARAN
                </span>
              </h1>

              {/* Deadline Pills */}
              <div className="mb-10 flex flex-wrap gap-4">
                {DEADLINE_PILLS.map((pill) => (
                  <div
                    key={pill.label}
                    className="rounded-lg bg-white px-5 py-3 shadow-[0_4px_16px_rgba(0,39,107,0.08)] [border-left:4px_solid_theme(colors.sttb-red)]"
                  >
                    <p className="mb-1 font-body text-[11px] font-bold uppercase tracking-[0.08em] text-sttb-red">
                      {pill.label}
                    </p>
                    <p className="font-body text-lg font-bold text-sttb-navy-dark">
                      {pill.date}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href={ROUTES.admisi.prosedurAdmisi}
                className="inline-block rounded-lg bg-sttb-red px-10 py-5 font-body text-base font-bold text-white shadow-lg transition-all hover:bg-sttb-red-hover hover:shadow-xl"
              >
                Daftar Sekarang →
              </Link>
            </div>
          </div>

          {/* Right Column — Photo */}
          <div className="relative overflow-hidden">
            <Image
              src="/images/jadwal-pendaftaran.png"
              alt="Students in STTB lobby"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-sttb-navy-dark/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* SECTION 2 — AKTIVITAS PENERIMAAN MAHASISWA BARU */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
          {/* Section Header */}
          <div className="mb-12">
            <p className="mb-4 font-body text-[13px] font-bold uppercase tracking-[0.12em] text-sttb-red">
              DETAIL JADWAL
            </p>
            <h2 className="mb-4 font-heading text-[clamp(2rem,5vw,3rem)] font-bold text-sttb-navy-dark">
              Aktivitas Penerimaan Mahasiswa Baru
            </h2>
            <p className="max-w-[720px] font-body text-[15px] text-sttb-navy-dark">
              Setiap gelombang menjalani 9 tahapan aktivitas yang sama — hanya
              berbeda pada bulan pelaksanaannya.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border-b border-gray-200 bg-sttb-navy-dark px-4 py-4 text-center font-body text-[13px] font-bold uppercase text-white">
                    No
                  </th>
                  <th className="border-b border-gray-200 bg-sttb-navy-dark px-4 py-4 text-center font-body text-[13px] font-bold uppercase text-white">
                    Aktivitas
                  </th>
                  <th className="border-b border-gray-200 bg-sttb-red px-4 py-4 text-center font-body text-[13px] font-bold uppercase text-white">
                    Gelombang I
                  </th>
                  <th className="border-b border-gray-200 bg-sttb-navy px-4 py-4 text-center font-body text-[13px] font-bold uppercase text-white">
                    Gelombang II
                  </th>
                  <th className="border-b border-gray-200 bg-sttb-navy-dark px-4 py-4 text-center font-body text-[13px] font-bold uppercase text-white">
                    Gelombang III
                  </th>
                  <th className="border-b border-gray-200 bg-sttb-navy-dark px-4 py-4 text-center font-body text-[13px] font-bold uppercase text-white">
                    Metode
                  </th>
                </tr>
              </thead>
              <tbody>
                {SCHEDULE_ROWS.map((row, idx) => (
                  <tr
                    key={row.no}
                    className={`border-b border-gray-200 ${idx % 2 === 0 ? "bg-white" : "bg-sttb-offwhite"}`}
                  >
                    <td className="px-4 py-4 font-body text-sm font-semibold text-sttb-navy-dark">
                      {row.no}
                    </td>
                    <td className="px-4 py-4 font-body text-sm text-sttb-navy-dark">
                      {row.aktivitas}
                    </td>
                    <td className="px-4 py-4 font-body text-sm text-sttb-navy-dark">
                      {row.gel1}
                    </td>
                    <td className="px-4 py-4 font-body text-sm text-sttb-navy-dark">
                      {row.gel2}
                    </td>
                    <td className="px-4 py-4 font-body text-sm text-sttb-navy-dark">
                      {row.gel3}
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span
                        className={`inline-block rounded-full px-3 py-1 font-body text-xs font-semibold text-white ${row.metodeColor === "red" ? "bg-sttb-red" : "bg-sttb-navy-dark"}`}
                      >
                        {row.metode}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-8 font-body text-[13px] italic text-gray-500">
            * Jadwal dapat berubah sewaktu-waktu. Konfirmasi jadwal terkini
            melalui admisi@sttb.ac.id atau 0815 7336 0009.
          </p>
        </div>
      </section>

      {/* SECTION 3 — CTA PENDAFTARAN */}
      <section className="bg-sttb-navy-dark py-24 text-center lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-16">
          <p className="mb-6 font-body text-[13px] font-bold uppercase tracking-[0.12em] text-white">
            SIAP MENDAFTAR?
          </p>
          <h2 className="mb-6 font-heading text-[clamp(2rem,5vw,3rem)] font-bold italic text-white">
            Mulai Perjalanan Panggilan Anda
          </h2>
          <p className="mx-auto mb-10 max-w-[600px] font-body text-[15px] leading-[1.7] text-white">
            Daftarkan diri Anda sekarang dan jadilah bagian dari komunitas
            pelayan Tuhan yang dipersiapkan dengan sepenuh hati di STTB.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={ROUTES.admisi.prosedurAdmisi}
              className="rounded-lg bg-sttb-red px-10 py-5 font-body text-base font-bold text-white shadow-lg transition-all hover:bg-sttb-red-hover hover:shadow-xl"
            >
              Daftar Online →
            </Link>
            <a
              href="mailto:admisi@sttb.ac.id"
              className="rounded-lg border-2 border-white bg-transparent px-10 py-5 font-body text-base font-bold text-white transition-colors hover:bg-white/10"
            >
              Hubungi Admisi
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
