import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle, Phone, Mail } from "lucide-react";
import { ProsedurSidebar } from "./ProsedurSidebar";

export const metadata: Metadata = {
  title: "Prosedur Admisi — STTB Bandung",
  description:
    "Panduan lengkap 5 tahap prosedur pendaftaran mahasiswa baru di Sekolah Tinggi Teologi Bandung.",
};

const OVERVIEW_STEPS = [
  { num: "1", label: "Memperoleh Form" },
  { num: "2", label: "Isi Form & Berkas" },
  { num: "3", label: "Bayar Biaya" },
  { num: "4", label: "Ikuti Tes" },
  { num: "5", label: "Pengumuman" },
];

const FORMULIR_ITEMS = [
  "Form Pendaftaran",
  "Form Kesaksian A (pertobatan pribadi)",
  "Form Kesaksian B (panggilan pelayanan)",
  "Form Data Kesehatan 1 & 2",
  "Form Data Keluarga",
  "Form Konfirmasi Dukungan Pembiayaan Studi",
  "Form Persetujuan 1 & 2",
  "Form Rekomendasi 1 (gembala/pembina rohani)",
  "Form Rekomendasi 2 (teman/rekan kerja)",
  "Form Rekomendasi 3 (guru/dosen/atasan)",
];

const DOKUMEN_ITEMS = [
  "Fotocopy Akte Kelahiran",
  "Fotocopy KTP (atau kartu pelajar)",
  "Pasfoto berwarna ukuran 4x6",
  "Fotocopy Surat Kelulusan/Ijazah",
  "Fotocopy Raport/Transkrip (dilegalisir)",
  "Fotocopy Surat Baptis & Surat Sidi",
  "Fotocopy Kartu BPJS atau KIS",
  "Book Review/Paper Akademik (khusus S2)",
];

const TEST_ITEMS = [
  { num: "01", title: "Psikotes Tahap 1", desc: "Pengisian Form Online" },
  { num: "02", title: "Psikotes Tahap 2", desc: "Tes Bersama via Zoom" },
  { num: "03", title: "Psikotes Tahap 3", desc: "Wawancara dengan Psikolog" },
  {
    num: "04",
    title: "Tes Tertulis",
    desc: "Teologi · Bhs Indonesia · Bhs Inggris",
  },
  { num: "05", title: "Wawancara", desc: "dengan Dosen STTB" },
];

const TAHAP5_CARDS = [
  {
    icon: "📬",
    title: "Pengumuman",
    desc: "Dalam 2-3 minggu setelah tes terakhir, pendaftar menerima pemberitahuan hasil via email dan WhatsApp.",
  },
  {
    icon: "📝",
    title: "Konfirmasi",
    desc: "Calon mahasiswa yang diterima wajib mengisi dan mengembalikan formulir konfirmasi kesediaan menjadi mahasiswa via email.",
  },
  {
    icon: "🎓",
    title: "Registrasi",
    desc: "Mahasiswa baru menyelesaikan pembayaran uang kuliah dan administrasi pertama, lalu mengikuti proses orientasi kampus.",
  },
];

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <div className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-sttb-red">
        <CheckCircle className="h-3 w-3 text-white" />
      </div>
      <span className="font-body text-sm text-sttb-navy-dark">{text}</span>
    </li>
  );
}

export default function ProsedurAdmisiPage() {
  return (
    <main>
      {/* SECTION 1 — HERO + OVERVIEW BAR */}
      <section className="relative overflow-hidden">
        {/* Hero */}
        <div className="grid bg-sttb-navy-dark lg:grid-cols-[55%_45%]">
          {/* Left */}
          <div className="relative px-8 py-20 lg:px-16 lg:py-28 xl:px-24">
            <p className="mb-8 font-body text-xs font-bold uppercase tracking-[0.15em] text-sttb-red">
              ADMISI STTB
            </p>
            <h1 className="mb-8">
              <span className="mb-2 block font-display text-[72px] font-normal italic leading-[1.1] text-white">
                PROSEDUR
              </span>
              <span className="block font-heading text-[88px] font-bold leading-none text-white">
                ADMISI
              </span>
            </h1>
            <p className="mb-10 max-w-xl font-body text-[15px] leading-[1.7] text-white">
              Ikuti 5 tahap berikut untuk menyelesaikan proses pendaftaran
              mahasiswa baru di STTB Bandung.
            </p>
            <a
              href="https://sis.sttb.ac.id/pmb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-sttb-red px-10 py-5 font-body text-base font-bold text-white shadow-lg transition-all hover:bg-sttb-red-hover hover:shadow-xl"
            >
              Mulai Pendaftaran →
            </a>
          </div>

          {/* Red vertical accent */}
          <div className="absolute left-[55%] top-1/2 hidden h-[60px] w-1 -translate-y-1/2 bg-sttb-red lg:block" />

          {/* Right — Image */}
          <div className="relative overflow-hidden bg-sttb-navy">
            <Image
              src="/images/prosedur-admisi.png"
              alt="STTB Admissions"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Overview Bar */}
        <div className="overflow-x-auto bg-sttb-red py-8">
          <div className="mx-auto max-w-5xl px-6">
            <div className="flex items-center justify-center gap-6">
              {OVERVIEW_STEPS.map((step, idx) => (
                <div key={step.num} className="flex items-center gap-6">
                  <div className="flex flex-col items-center">
                    <div className="mb-2 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white">
                      <span className="font-body text-base font-bold text-sttb-red">
                        {step.num}
                      </span>
                    </div>
                    <p className="flex min-h-[28px] max-w-[90px] items-center justify-center text-center font-body text-[11px] font-bold text-white">
                      {step.label}
                    </p>
                  </div>
                  {idx < 4 && <span className="text-2xl text-white/50">›</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — DETAIL 5 TAHAP */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[28%_72%]">
            {/* Sticky Sidebar */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <ProsedurSidebar />
            </div>

            {/* Content Area */}
            <div>
              {/* TAHAP 1 */}
              <div id="tahap1" className="bg-white px-8 py-16 lg:px-12">
                <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.12em] text-sttb-red">
                  TAHAP 1
                </p>
                <h3 className="mb-6 font-heading text-[clamp(1.5rem,4vw,2.25rem)] font-bold text-sttb-navy-dark">
                  Memperoleh Formulir Pendaftaran
                </h3>
                <p className="mb-8 font-body text-[15px] leading-[1.7] text-sttb-navy-dark">
                  Lakukan pendaftaran awal ke sistem admisi online melalui
                  sis.sttb.ac.id/pmb
                </p>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-lg border-l-4 border-sttb-navy-dark bg-white p-6 shadow-[0_4px_16px_rgba(0,39,107,0.08)]">
                    <p className="font-body text-sm leading-[1.7] text-sttb-navy-dark">
                      Setelah mengisi data, maka formulir dapat diunduh di
                      halaman situs berikutnya. Foto yang dilampirkan harus
                      berbentuk format JPEG dan ukuran tidak lebih dari 400kb.
                      Hindari tanda baca dalam teks yang diketik.
                    </p>
                  </div>
                  <div className="rounded-lg border-l-4 border-sttb-navy-dark bg-white p-6 shadow-[0_4px_16px_rgba(0,39,107,0.08)]">
                    <p className="mb-4 font-body text-sm font-semibold text-sttb-navy-dark">
                      Form juga dapat diperoleh melalui:
                    </p>
                    <div className="mb-3 space-y-2">
                      <p className="font-body text-sm text-sttb-navy-dark">
                        ✉ admisi@sttb.ac.id
                      </p>
                      <p className="font-body text-sm text-sttb-navy-dark">
                        📱 WA: 0815 7336 0009
                      </p>
                    </div>
                    <p className="font-body text-[13px] leading-[1.6] text-[#6B7A99]">
                      Pengiriman form tidak dipungut biaya. Form tersedia dalam
                      bentuk hardcopy (pos) atau softcopy (WA/email).
                    </p>
                  </div>
                </div>
              </div>

              {/* TAHAP 2 */}
              <div id="tahap2" className="bg-sttb-offwhite px-8 py-16 lg:px-12">
                <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.12em] text-sttb-red">
                  TAHAP 2
                </p>
                <h3 className="mb-6 font-heading text-[clamp(1.5rem,4vw,2.25rem)] font-bold text-sttb-navy-dark">
                  Mengisi Form & Mempersiapkan Berkas
                </h3>
                <p className="mb-8 font-body text-[15px] leading-[1.7] text-sttb-navy-dark">
                  Siapkan seluruh dokumen berikut sebelum batas waktu pengiriman
                  berkas.
                </p>

                <div className="mb-8 grid gap-6 md:grid-cols-2">
                  {/* Formulir */}
                  <div>
                    <div className="rounded-t-lg bg-sttb-navy-dark px-5 py-3">
                      <p className="font-body text-[13px] font-bold text-white">
                        📋 FORMULIR YANG HARUS DIISI
                      </p>
                    </div>
                    <div className="rounded-b-lg bg-white p-6 shadow-[0_4px_16px_rgba(0,39,107,0.08)]">
                      <ul className="space-y-3">
                        {FORMULIR_ITEMS.map((item) => (
                          <CheckItem key={item} text={item} />
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Dokumen */}
                  <div>
                    <div className="rounded-t-lg bg-sttb-red px-5 py-3">
                      <p className="font-body text-[13px] font-bold text-white">
                        📁 DOKUMEN YANG DILAMPIRKAN
                      </p>
                    </div>
                    <div className="rounded-b-lg bg-white p-6 shadow-[0_4px_16px_rgba(0,39,107,0.08)]">
                      <ul className="space-y-3">
                        {DOKUMEN_ITEMS.map((item) => (
                          <CheckItem key={item} text={item} />
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-6 rounded-lg bg-sttb-navy-dark p-6">
                  <p className="font-body text-sm leading-[1.7] text-white">
                    Form dapat diisi secara digital — tidak perlu dicetak. Tanda
                    tangan tetap wajib dicantumkan secara digital.
                  </p>
                </div>

                <div className="rounded-lg border-l-4 border-sttb-navy-dark bg-sttb-offwhite p-6 shadow-[0_4px_16px_rgba(0,39,107,0.08)]">
                  <p className="mb-3 font-body text-sm font-bold text-sttb-navy-dark">
                    Kirimkan berkas ke:
                  </p>
                  <p className="mb-4 font-body text-sm leading-[1.7] text-sttb-navy-dark">
                    <strong>Bagian Admisi — Kantor STT Bandung</strong>
                    <br />
                    Jl. Dr. Djunjunan 105, Kelurahan Cicendo
                    <br />
                    Kecamatan Andir, Bandung, Jawa Barat 40173
                  </p>
                  <p className="font-body text-sm leading-[1.7] text-sttb-navy-dark">
                    Hardcopy via pos ATAU softcopy via:
                    <br />✉ admisi@sttb.ac.id | 📱 WA: 0815 7336 0009
                  </p>
                </div>
              </div>

              {/* TAHAP 3 */}
              <div id="tahap3" className="bg-white px-8 py-16 lg:px-12">
                <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.12em] text-sttb-red">
                  TAHAP 3
                </p>
                <h3 className="mb-8 font-heading text-[clamp(1.5rem,4vw,2.25rem)] font-bold text-sttb-navy-dark">
                  Membayar Biaya Pendaftaran &amp; Tes Masuk
                </h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-lg bg-sttb-navy-dark p-6">
                    <p className="mb-4 font-body text-[15px] font-bold text-white">
                      💳 Transfer biaya formulir sebesar Rp500.000,-
                    </p>
                    <p className="mb-4 font-body text-sm leading-[1.7] text-white">
                      ke rekening BCA an. Yayasan STT Bandung
                      <br />
                      No. Rek: <strong>282 300 5555</strong>
                    </p>
                    <p className="font-body text-sm leading-[1.7] text-white">
                      Kirimkan bukti transfer via:
                      <br />
                      sttb.ac.id/konfirmasi
                      <br />
                      atau WA: 0815 7336 0009
                    </p>
                  </div>
                  <div className="rounded-lg bg-sttb-red p-6">
                    <p className="mb-4 font-body text-[15px] font-bold text-white">
                      ⚠️ PERHATIAN
                    </p>
                    <p className="font-body text-sm leading-[1.7] text-white">
                      Biaya pendaftaran tidak dapat dikembalikan. Berkas yang
                      tidak disertai bukti pembayaran tidak akan diproses untuk
                      tes masuk.
                    </p>
                  </div>
                </div>
              </div>

              {/* TAHAP 4 */}
              <div id="tahap4" className="bg-sttb-offwhite px-8 py-16 lg:px-12">
                <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.12em] text-sttb-red">
                  TAHAP 4
                </p>
                <h3 className="mb-6 font-heading text-[clamp(1.5rem,4vw,2.25rem)] font-bold text-sttb-navy-dark">
                  Mengikuti Tes Seleksi Penerimaan
                </h3>
                <p className="mb-8 font-body text-[15px] leading-[1.7] text-sttb-navy-dark">
                  Setelah seleksi dokumen, surat panggilan tes akan dikirim via
                  email dan WhatsApp.
                </p>
                <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-5">
                  {TEST_ITEMS.map((test) => (
                    <div
                      key={test.num}
                      className="rounded-lg border-t-[3px] border-sttb-red bg-white p-4 shadow-[0_4px_16px_rgba(0,39,107,0.08)]"
                    >
                      <p className="mb-2 font-body text-xl font-bold text-sttb-red">
                        {test.num}
                      </p>
                      <h4 className="mb-2 font-body text-sm font-bold text-sttb-navy-dark">
                        {test.title}
                      </h4>
                      <p className="font-body text-xs leading-[1.5] text-[#6B7A99]">
                        {test.desc}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="font-body text-[13px] italic leading-[1.7] text-[#6B7A99]">
                  Wawancara memiliki bobot penilaian terbesar untuk mengukur
                  keseriusan panggilan dan rencana pelayanan calon mahasiswa.
                </p>
              </div>

              {/* TAHAP 5 */}
              <div id="tahap5" className="bg-white px-8 py-16 lg:px-12">
                <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.12em] text-sttb-red">
                  TAHAP 5
                </p>
                <h3 className="mb-8 font-heading text-[clamp(1.5rem,4vw,2.25rem)] font-bold text-sttb-navy-dark">
                  Pengumuman Penerimaan &amp; Konfirmasi MABA
                </h3>
                <div className="grid gap-6 md:grid-cols-3">
                  {TAHAP5_CARDS.map((card) => (
                    <div
                      key={card.title}
                      className="rounded-lg border-l-4 border-sttb-navy-dark bg-white p-6 shadow-[0_4px_16px_rgba(0,39,107,0.08)]"
                    >
                      <p className="mb-3 text-2xl">{card.icon}</p>
                      <h4 className="mb-3 font-body text-base font-bold text-sttb-navy-dark">
                        {card.title}
                      </h4>
                      <p className="font-body text-sm leading-[1.7] text-[#6B7A99]">
                        {card.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — CTA */}
      <section className="bg-sttb-navy-dark py-24 text-center lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-16">
          <p className="mb-6 font-body text-[13px] font-bold uppercase tracking-[0.12em] text-white">
            SIAP MEMULAI?
          </p>
          <h2 className="mb-6 font-heading text-[clamp(2rem,5vw,3rem)] font-bold italic text-white">
            Mulai Perjalanan Panggilan Anda
          </h2>
          <p className="mx-auto mb-10 max-w-[600px] font-body text-[15px] leading-[1.7] text-white">
            Tim admisi STTB siap membantu Anda di setiap tahap pendaftaran.
            Jangan ragu untuk menghubungi kami.
          </p>
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://sis.sttb.ac.id/pmb"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-sttb-red px-10 py-5 font-body text-base font-bold text-white shadow-lg transition-all hover:bg-sttb-red-hover hover:shadow-xl"
            >
              Daftar Online →
            </a>
            <a
              href="mailto:admisi@sttb.ac.id"
              className="rounded-lg border-2 border-white bg-transparent px-10 py-5 font-body text-base font-bold text-white transition-colors hover:bg-white/10"
            >
              Hubungi Admisi
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-white" />
              <span className="font-body text-[13px] text-white">
                0815 7336 0009
              </span>
            </div>
            <span className="text-white/50">|</span>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-white" />
              <span className="font-body text-[13px] text-white">
                admisi@sttb.ac.id
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
