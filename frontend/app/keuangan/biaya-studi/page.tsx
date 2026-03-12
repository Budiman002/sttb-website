"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const programs = [
  { id: "sth", label: "S.Th.", fullName: "Sarjana Teologi" },
  { id: "spdk", label: "S.Pd.K.", fullName: "Sarjana Pendidikan Kristen" },
  { id: "mth", label: "M.Th.", fullName: "Magister Teologi" },
  { id: "mpdk", label: "M.Pd.K.", fullName: "Magister Pendidikan Kristen" },
  { id: "mmin", label: "M.Min.", fullName: "Magister Ministri" },
];

const pricingData = {
  sth: {
    items: [
      { label: "Biaya Pendaftaran", amount: "Rp 500.000" },
      { label: "Biaya Registrasi Awal", amount: "Rp 5.000.000" },
      { label: "SPP per Semester", amount: "Rp 5.000.000" },
      { label: "Biaya Asrama per Semester", amount: "Rp 2.000.000" },
      { label: "Biaya Makan per Semester", amount: "Rp 3.600.000" },
      { label: "Biaya Praktik Pelayanan", amount: "Rp 2.000.000" },
    ],
    notes: [
      "Biaya pendaftaran dibayarkan saat mendaftar dan tidak dapat dikembalikan",
      "Biaya registrasi awal dibayarkan saat registrasi mahasiswa baru",
      "SPP, biaya asrama, dan biaya makan dibayarkan setiap awal semester",
      "Biaya praktik pelayanan dibayarkan pada semester 7 atau 8",
      "Biaya tidak termasuk buku, fotokopi, dan keperluan pribadi",
    ],
  },
  spdk: {
    items: [
      { label: "Biaya Pendaftaran", amount: "Rp 500.000" },
      { label: "Biaya Registrasi Awal", amount: "Rp 5.000.000" },
      { label: "SPP per Semester", amount: "Rp 5.000.000" },
      { label: "Biaya Asrama per Semester", amount: "Rp 2.000.000" },
      { label: "Biaya Makan per Semester", amount: "Rp 3.600.000" },
      { label: "Biaya Praktik Pelayanan", amount: "Rp 2.000.000" },
    ],
    notes: [
      "Biaya pendaftaran dibayarkan saat mendaftar dan tidak dapat dikembalikan",
      "Biaya registrasi awal dibayarkan saat registrasi mahasiswa baru",
      "SPP, biaya asrama, dan biaya makan dibayarkan setiap awal semester",
      "Biaya praktik pelayanan dibayarkan pada semester 7 atau 8",
      "Biaya tidak termasuk buku, fotokopi, dan keperluan pribadi",
    ],
  },
  mth: {
    items: [
      { label: "Biaya Pendaftaran", amount: "Rp 500.000" },
      { label: "Biaya Registrasi Awal", amount: "Rp 7.500.000" },
      { label: "SPP per Semester", amount: "Rp 7.500.000" },
      { label: "Biaya Asrama per Semester", amount: "Rp 2.500.000" },
      { label: "Biaya Makan per Semester", amount: "Rp 3.600.000" },
      { label: "Biaya Tesis", amount: "Rp 3.000.000" },
    ],
    notes: [
      "Biaya pendaftaran dibayarkan saat mendaftar dan tidak dapat dikembalikan",
      "Biaya registrasi awal dibayarkan saat registrasi mahasiswa baru",
      "SPP, biaya asrama, dan biaya makan dibayarkan setiap awal semester",
      "Biaya tesis dibayarkan pada semester 4 atau 5",
      "Biaya tidak termasuk buku, fotokopi, dan keperluan pribadi",
    ],
  },
  mpdk: {
    items: [
      { label: "Biaya Pendaftaran", amount: "Rp 500.000" },
      { label: "Biaya Registrasi Awal", amount: "Rp 7.500.000" },
      { label: "SPP per Semester", amount: "Rp 7.500.000" },
      { label: "Biaya Asrama per Semester", amount: "Rp 2.500.000" },
      { label: "Biaya Makan per Semester", amount: "Rp 3.600.000" },
      { label: "Biaya Tesis", amount: "Rp 3.000.000" },
    ],
    notes: [
      "Biaya pendaftaran dibayarkan saat mendaftar dan tidak dapat dikembalikan",
      "Biaya registrasi awal dibayarkan saat registrasi mahasiswa baru",
      "SPP, biaya asrama, dan biaya makan dibayarkan setiap awal semester",
      "Biaya tesis dibayarkan pada semester 4 atau 5",
      "Biaya tidak termasuk buku, fotokopi, dan keperluan pribadi",
    ],
  },
  mmin: {
    items: [
      { label: "Biaya Pendaftaran", amount: "Rp 500.000" },
      { label: "Biaya Registrasi Awal", amount: "Rp 5.000.000" },
      { label: "SPP per Semester", amount: "Rp 5.000.000" },
      { label: "Biaya Tesis", amount: "Rp 2.000.000" },
    ],
    notes: [
      "Biaya pendaftaran dibayarkan saat mendaftar dan tidak dapat dikembalikan",
      "Biaya registrasi awal dibayarkan saat registrasi mahasiswa baru",
      "SPP dibayarkan setiap awal semester",
      "Biaya tesis dibayarkan pada semester akhir",
      "Program M.Min. tidak menyediakan fasilitas asrama",
      "Biaya tidak termasuk buku, fotokopi, dan keperluan pribadi",
    ],
  },
};

export default function BiayaStudiPage() {
  const [activeTab, setActiveTab] = useState("sth");

  const currentProgram = programs.find((p) => p.id === activeTab);
  const currentPricing = pricingData[activeTab as keyof typeof pricingData];

  return (
    <div className="min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #00276B 0%, #003F8A 60%, #0056B3 100%)",
          }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-[#C41E3A] text-sm font-bold tracking-[0.2em] uppercase mb-4">
              KEUANGAN
            </p>
            <h1 className="text-6xl lg:text-8xl font-bold text-white mb-8 leading-[0.95] font-serif">
              Biaya Studi
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
              Investasi untuk pendidikan teologi berkualitas yang akan
              mempersiapkan Anda menjadi pelayan Tuhan yang berdampak.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="relative py-16 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Tab Navigation */}
          <div className="mb-12 border-b border-gray-200">
            <div className="flex overflow-x-auto gap-2 pb-0 no-scrollbar">
              {programs.map((program) => (
                <button
                  key={program.id}
                  onClick={() => setActiveTab(program.id)}
                  className={`px-8 py-4 font-bold text-base whitespace-nowrap transition-all duration-300 border-b-4 ${
                    activeTab === program.id
                      ? "border-[#C41E3A] text-[#1A2340]"
                      : "border-transparent text-gray-500 hover:text-[#00276B] hover:border-gray-300"
                  }`}
                >
                  {program.label}
                </button>
              ))}
            </div>
          </div>

          {/* Program Content */}
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Left: Program Info */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <div className="w-16 h-1 bg-[#C41E3A] mb-6" />
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-serif text-[#1A2340]">
                  {currentProgram?.fullName}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Rincian biaya pendidikan untuk program{" "}
                  {currentProgram?.fullName} di STTB.
                </p>
                <div className="inline-flex items-center justify-center w-full px-6 py-4 bg-[#C41E3A] text-white rounded-lg shadow-lg font-bold text-base pointer-events-none cursor-default">
                  Info Selengkapnya
                </div>
              </div>
            </div>

            {/* Right: Pricing Table */}
            <div className="lg:col-span-2">
              {/* Pricing Cards */}
              <div className="space-y-4 mb-12">
                {currentPricing?.items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-xl px-8 py-6 flex items-center justify-between border-l-4 border-[#003F8A] hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#003F8A] flex items-center justify-center flex-shrink-0">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-lg font-bold text-gray-800">
                        {item.label}
                      </p>
                    </div>
                    <p className="text-2xl font-bold font-serif text-[#1A2340]">
                      {item.amount}
                    </p>
                  </div>
                ))}
              </div>

              {/* Notes Section */}
              <div className="bg-blue-50 rounded-2xl p-8 lg:p-10 border-l-4 border-[#C41E3A]">
                <h3 className="text-2xl font-bold mb-6 font-serif text-[#1A2340]">
                  Catatan Penting
                </h3>
                <ul className="space-y-4">
                  {currentPricing?.notes.map((note, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#C41E3A] flex items-center justify-center mt-0.5">
                        <span className="text-white text-xs font-bold">
                          {index + 1}
                        </span>
                      </div>
                      <p className="text-base text-gray-700 leading-relaxed">
                        {note}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-20 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1A2340 0%, #00276B 100%)",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 font-serif">
            Siap Memulai Perjalanan Studi Anda?
          </h2>
          <p className="text-lg lg:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Hubungi tim admisi kami untuk informasi lebih lanjut tentang
            beasiswa dan bantuan keuangan yang tersedia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="inline-flex items-center justify-center px-8 py-4 bg-[#C41E3A] text-white rounded-lg shadow-lg font-bold text-base pointer-events-none cursor-default">
              Daftar Sekarang
            </div>
            <div className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1A2340] rounded-lg shadow-lg font-bold text-base pointer-events-none cursor-default">
              Lihat Info Beasiswa
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
