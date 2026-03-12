const dewanPembina = [
  "Pdt. Agus Gunawan, Ph.D.",
  "Pnt. Subianto Tjandra",
  "Pdt. Budiyanto Santosa, D.Min.",
];

const dewanPengurus = [
  { role: "Ketua", name: "Pnts. Benny Soenarjo" },
  { role: "Wakil Ketua", name: "Pnts. Ginawan Chondro" },
  { role: "Sekretaris", name: "Pnt. Arif Subagyo" },
  { role: "Bendahara", name: "Pnt. Widianto Tjandradipura" },
];

const anggota = [
  "Pnts. Agus Tjandra",
  "Ev. Doroti Tunggal Widjaja, M.Th.",
  "Bp. Eddy Samuel Affendie",
  "Pnts. Edi Sukamto Josana",
  "Bp. Herjanto Gunawan",
  "Pnts. Joseph Koshan",
  "Pnt. Suwito Kwee",
];

export default function YayasanPage() {
  return (
    <div className="min-h-screen font-sans">
      <main>
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-[#00276B] to-[#003F8A]">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <p className="text-[#C41E3A] text-sm font-bold tracking-[0.2em] uppercase mb-4">
                TENTANG KAMI
              </p>
              <h1
                className="text-6xl lg:text-8xl font-bold text-white mb-8 leading-[0.95]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Yayasan STTB
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                Struktur kepemimpinan dan tata kelola institusi Sekolah Tinggi
                Teologi Bandung
              </p>
            </div>
          </div>
        </section>

        {/* Organizational Structure */}
        <section className="py-32 bg-white">
          <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-20">
              <div className="w-24 h-1 bg-[#C41E3A] mx-auto mb-6" />
              <h2
                className="text-4xl lg:text-5xl font-bold text-[#00276B]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Struktur Organisasi
              </h2>
            </div>

            {/* Tier 1: Dewan Pembina */}
            <div className="flex flex-col items-center mb-0">
              <div className="w-full max-w-2xl">
                <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#00276B] to-[#003F8A]">
                  <div className="px-8 py-6 border-b border-white/20">
                    <p className="text-[#C41E3A] text-xs font-bold tracking-[0.2em] uppercase mb-2">
                      TINGKAT PEMBINAAN
                    </p>
                    <h3
                      className="text-3xl lg:text-4xl font-bold text-white"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      Dewan Pembina
                    </h3>
                  </div>
                  <div className="px-8 py-8 space-y-4">
                    {dewanPembina.map((member, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20 hover:bg-white/15 transition-colors"
                      >
                        <div className="w-2 h-2 rounded-full flex-shrink-0 bg-[#C41E3A]" />
                        <p className="text-white text-lg font-medium">
                          {member}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Connector */}
              <div className="flex flex-col items-center my-8">
                <div className="w-0.5 h-12 bg-[#C41E3A]" />
                <div className="w-4 h-4 rounded-full border-4 border-[#C41E3A] bg-white" />
                <div className="w-0.5 h-12 bg-[#C41E3A]" />
              </div>
            </div>

            {/* Tier 2: Dewan Pengurus */}
            <div className="flex flex-col items-center mb-0">
              <div className="w-full max-w-3xl">
                <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border-2 border-[#003F8A]">
                  <div className="px-8 py-6 bg-[#003F8A]">
                    <p className="text-[#C41E3A] text-xs font-bold tracking-[0.2em] uppercase mb-2">
                      TINGKAT PENGURUSAN
                    </p>
                    <h3
                      className="text-3xl lg:text-4xl font-bold text-white"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      Dewan Pengurus
                    </h3>
                  </div>
                  <div className="px-8 py-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      {dewanPengurus.map((member, index) => (
                        <div
                          key={index}
                          className="bg-gray-50 rounded-lg px-6 py-6 border-l-4 border-[#C41E3A] hover:shadow-lg transition-all"
                        >
                          <p className="text-xs font-bold tracking-[0.15em] uppercase mb-2 text-[#C41E3A]">
                            {member.role}
                          </p>
                          <p
                            className="text-lg font-bold text-[#00276B]"
                            style={{ fontFamily: "var(--font-serif)" }}
                          >
                            {member.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Connector */}
              <div className="flex flex-col items-center my-8">
                <div className="w-0.5 h-12 bg-[#C41E3A]" />
                <div className="w-4 h-4 rounded-full border-4 border-[#C41E3A] bg-white" />
                <div className="w-0.5 h-12 bg-[#C41E3A]" />
              </div>
            </div>

            {/* Tier 3: Anggota */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-4xl">
                <div className="bg-[#E8F0FB] rounded-2xl overflow-hidden shadow-xl border border-[#93C5FD]/30">
                  <div className="px-8 py-6 bg-[#93C5FD]/20 border-b border-[#93C5FD]/30">
                    <p className="text-[#C41E3A] text-xs font-bold tracking-[0.2em] uppercase mb-2">
                      TINGKAT KEANGGOTAAN
                    </p>
                    <h3
                      className="text-3xl lg:text-4xl font-bold text-[#00276B]"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      Anggota
                    </h3>
                  </div>
                  <div className="px-8 py-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {anggota.map((member, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-lg px-5 py-4 shadow-md hover:shadow-lg transition-all border border-gray-200 group hover:border-[#003F8A]"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full flex-shrink-0 mt-2 bg-[#C41E3A] group-hover:scale-125 transition-transform" />
                            <p className="text-base font-medium leading-snug text-gray-800">
                              {member}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Statement */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-[900px] mx-auto px-6 lg:px-12 text-center">
            <div className="w-24 h-1 bg-[#C41E3A] mx-auto mb-8" />
            <p
              className="text-2xl lg:text-3xl leading-relaxed text-gray-700"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Yayasan STTB berkomitmen untuk memastikan tata kelola yang
              transparan, akuntabel, dan berintegritas dalam menjalankan visi
              dan misi institusi.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
