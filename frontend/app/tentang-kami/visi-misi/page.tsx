const visiPillars = [
  {
    number: "01",
    title: "Pastor-Scholar",
    description:
      "Memiliki jiwa gembala (kepemimpinan yang melayani di gereja, dunia pendidikan, maupun profesi lain) dan sekaligus pembelajar (semangat untuk terus belajar, daya nalar kritis seorang intelektual Kristen, dan kemampuan berkontribusi terhadap dunia ilmu pengetahuan dari perspektif Kristen)",
  },
  {
    number: "02",
    title: "Berita Injil yang Utuh",
    description:
      "Kuasa Injil yang mampu mentransformasi seluruh aspek hidup manusia dan seluruh ciptaan yang sudah jatuh dalam dosa (total depravity), yang kesempurnaannya baru akan terjadi setelah kedatangan Kristus yang kedua, namun cicipan awalnya sudah bisa dirasakan hari ini.",
  },
  {
    number: "03",
    title: "Seluruh Umat Allah",
    description:
      "Kuasa penebusan Kristus dinyatakan melalui hidup setiap pengikut Kristus, di tengah keluarga, gereja, dan masyarakat.",
  },
  {
    number: "04",
    title: "Masyarakat Urban",
    description:
      "Mahasiswa STTB dipersiapkan dengan fokus melayani masyarakat di perkotaan, tanpa menutup kemungkinan tuntunan lain yang Tuhan berikan kepada mereka di tempat lain.",
  },
];

const misiPoints = [
  {
    number: "1",
    text: "Mempersiapkan pastor-scholar yang transformatif untuk melayani dalam konteks urban.",
  },
  {
    number: "2",
    text: "Memberdayakan seluruh umat Allah untuk menghadirkan Injil seutuhnya di tengah konteks masyarakat urban melalui penelitian dan pendidikan non-formal.",
  },
  {
    number: "3",
    text: "Mengembangkan tim dosen, struktur organisasi dan keuangan, serta kemitraan untuk mendukung pencapaian visi STTB.",
  },
];

const coreValues = [
  {
    title: "CHRIST CENTERED",
    points: [
      "Rencana keselamatan Allah atas seisi dunia yang berpusat di dalam karya penebusan Kristus.",
      "Mandat budaya dan mandat Injil dalam kerangka metanarasi Alkitab: Penciptaan\u2013Kejatuhan\u2013Penebusan\u2013Penggenapan.",
    ],
  },
  {
    title: "TEKS \u2013 KONTEKS",
    points: [
      "Setia kepada teks: Firman Tuhan dan warisan iman Bapa-Bapa Gereja",
      "Responsif terhadap konteks: sosial dan generasional",
    ],
  },
  {
    title: "PENATALAYANAN",
    points: [
      "Integritas (kejujuran, transparansi, akuntabilitas \u2013 waktu, uang, relasi)",
      "Dedikasi (melayani dan mengupayakan yang terbaik bagi sesama)",
      "Kompetensi (kecakapan akademik, pelayanan, dan penelitian)",
    ],
  },
  {
    title: "TRANSFORMATIF",
    points: [
      "Karya penebusan Kristus yang transformatif dialami oleh semua stakeholder STTB (mahasiswa, dosen, staf, karyawan, yayasan, mitra pelayanan, gereja, dan masyarakat)",
    ],
  },
];

export default function VisiMisiPage() {
  return (
    <div className="min-h-screen font-sans">
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-[#00276B] to-[#003F8A]">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <p className="text-[#C41E3A] text-sm font-bold tracking-[0.2em] uppercase mb-4">
                TENTANG KAMI
              </p>
              <h1
                className="text-6xl lg:text-8xl font-bold text-white mb-6 leading-[0.95]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Visi &amp; Misi
                <br />
                <span className="text-[#93C5FD]">STTB</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Menjadi institusi pendidikan teologi yang mempersiapkan
                pastor-scholar yang transformatif dan memberdayakan seluruh umat
                Allah untuk menghadirkan Injil seutuhnya di tengah konteks
                masyarakat urban.
              </p>
            </div>
          </div>
        </section>

        {/* Visi Section */}
        <section className="py-32 bg-white overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="mb-24">
              <p className="text-[#C41E3A] text-sm font-bold tracking-[0.2em] uppercase mb-4">
                VISI KAMI
              </p>
              <h2
                className="text-6xl lg:text-7xl font-bold text-[#00276B]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Empat Pilar
                <br />
                <span className="text-[#C41E3A]">Transformasi</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
              {visiPillars.map((pillar, index) => {
                const isAlternate = index % 2 === 1;
                return (
                  <div
                    key={index}
                    className={`relative overflow-hidden border rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl ${
                      isAlternate
                        ? "bg-[#E8F0FB] border-[#0056B3]/20"
                        : "bg-white border-gray-200"
                    }`}
                  >
                    {/* Watermark number */}
                    <div
                      className="absolute top-0 right-0 text-[14rem] lg:text-[18rem] font-bold leading-none pointer-events-none select-none opacity-[0.04] text-[#00276B]"
                      style={{
                        fontFamily: "var(--font-display)",
                        transform: "translate(20%, -20%)",
                      }}
                    >
                      {pillar.number}
                    </div>

                    <div className="relative p-8 lg:p-10">
                      <div className="w-16 h-1 bg-[#C41E3A] mb-6" />
                      <h3
                        className="text-3xl lg:text-4xl font-bold text-[#00276B] mb-4"
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        {pillar.title}
                      </h3>
                      <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Misi Section */}
        <section className="py-32 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="mb-24">
              <p className="text-[#C41E3A] text-sm font-bold tracking-[0.2em] uppercase mb-4">
                MISI KAMI
              </p>
              <h2
                className="text-6xl lg:text-7xl font-bold text-[#00276B]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Tiga Komitmen
                <br />
                <span className="text-[#003F8A]">Strategis</span>
              </h2>
            </div>

            <div className="space-y-20">
              {misiPoints.map((point, index) => (
                <div
                  key={index}
                  className="grid lg:grid-cols-12 gap-12 items-start"
                >
                  <div className="lg:col-span-2">
                    <div
                      className="text-[10rem] lg:text-[14rem] font-bold leading-none text-[#C41E3A] opacity-20"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {point.number}
                    </div>
                  </div>

                  <div className="lg:col-span-10 lg:pt-12">
                    <div className="relative">
                      <div className="absolute -top-6 left-0 w-32 h-1 bg-[#C41E3A]" />
                      <p
                        className="text-3xl lg:text-4xl font-bold text-[#00276B] leading-snug"
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        {point.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-32 bg-gradient-to-br from-[#00276B] to-[#003F8A]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="mb-20 text-center">
              <p className="text-[#C41E3A] text-sm font-bold tracking-[0.2em] uppercase mb-4">
                NILAI-NILAI INTI
              </p>
              <h2
                className="text-6xl lg:text-7xl font-bold text-white"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Core Values
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => (
                <div key={index} className="relative">
                  <div className="w-full h-1 bg-[#C41E3A] mb-8" />
                  <h3
                    className="text-2xl font-bold text-white mb-6 leading-tight"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {value.title}
                  </h3>
                  <ul className="space-y-4">
                    {value.points.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className="text-white/90 leading-relaxed flex items-start gap-3"
                      >
                        <span className="text-[#C41E3A] mt-1 flex-shrink-0">
                          &bull;
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing Statement Section */}
        <section className="py-32 bg-white">
          <div className="max-w-[900px] mx-auto px-6 lg:px-12 text-center">
            <div
              className="text-5xl lg:text-6xl font-bold text-[#00276B] leading-tight mb-8"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Visi dan Misi yang{" "}
              <span className="text-[#C41E3A]">Mengubah</span> dan{" "}
              <span className="text-[#C41E3A]">Memberdayakan</span>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              Setiap elemen dari visi, misi, dan nilai-nilai inti kami dirancang
              untuk membentuk pemimpin rohani yang tidak hanya memahami teologi
              secara mendalam, tetapi juga mampu menerapkannya dalam kehidupan
              nyata untuk transformasi gereja dan masyarakat.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
