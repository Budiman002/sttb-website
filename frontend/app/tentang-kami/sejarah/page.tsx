import Image from "next/image";

const GALLERY_IMAGES = [
  {
    src: "/images/sejarah/ImageWithFallback.png",
    alt: "Perkembangan Awal",
    caption: "Perkembangan Awal",
  },
  {
    src: "/images/sejarah/ImageWithFallback-1.png",
    alt: "Kegiatan Kampus STTB",
    caption: "Kegiatan Kampus STTB",
  },
  {
    src: "/images/sejarah/ImageWithFallback-2.png",
    alt: "Wisuda Angkatan Pertama",
    caption: "Wisuda Angkatan Pertama",
  },
];

const timelineData = [
  {
    year: "1992",
    period: "1992 – 1998",
    title: "Awal Berdiri",
    description:
      "Pdt. Zadik Hartadi Tong dan Pdt. Dorothy I. Marx mendirikan STTB untuk menghasilkan Pastor-Scholar Reformed di Indonesia. Perpustakaan dan Jurnal Teologi STULOS dihadirkan sejak awal sebagai komitmen kualitas akademis.",
  },
  {
    year: "1999",
    period: "1999 – 2005",
    title: "Pergantian Kepemimpinan",
    description:
      "Ibu Dorothy I. Marx menjabat sebagai Rektor dan membuka program M.A. dan M.Th. untuk memperlengkapi kaum awam dan hamba Tuhan. STTB juga menyelenggarakan CYLF (Christian Youth Leadership Forum) secara nasional.",
  },
  {
    year: "2006",
    period: "2006 – 2010",
    title: "Peningkatan Kualifikasi",
    description:
      "Pdt. Joseph Tong meningkatkan kualifikasi dosen dengan mengutus mereka studi lanjut ke USA. STTB membuka program studi berbahasa Mandarin sebagai kontribusi misi di Tiongkok.",
  },
  {
    year: "2011",
    period: "2011 – 2016",
    title: "Perkembangan Signifikan",
    description:
      "Gedung baru berlantai tujuh selesai dibangun untuk kelas, kantor, dan perpustakaan. Program S.Pe.K. dan M.Min. dibuka, serta akreditasi BAN-PT dan ATA mulai diraih pada periode ini.",
  },
  {
    year: "2017",
    period: "2017 – kini",
    title: "Pembenahan Kualitas",
    description:
      "Sutrisna Harjanto Ph.D. menjabat sebagai Ketua sejak 2019. LEAD Center dikembangkan dengan modul Vocatio dan Perspectives. Jaringan global diperluas melalui kolaborasi gereja nasional dan internasional.",
  },
];

const logoSymbols = [
  {
    src: "/images/sejarah/Image (Api).png",
    label: "Api",
    description:
      "di atas logo menggambarkan penyertaan dan pemenuhan dari Allah Roh Kudus yang menjadi sumber hikmat, kuasa, dan kasih serta merupakan syarat mutlak bagi pelayan Tuhan.",
  },
  {
    src: "/images/sejarah/Image (Alkitab).png",
    label: "Alkitab",
    description:
      "adalah satu-satunya sumber pengetahuan yang benar tentang Allah dan dasar bagi panggilan serta pelayanan (Sola Scriptura).",
  },
  {
    src: "/images/sejarah/Image (Salib & Mahkota).png",
    label: "Salib & Mahkota",
    description:
      "melambangkan panggilan untuk berpegang kepada kebenaran dan merajakan Kristus.",
  },
  {
    src: "/images/sejarah/Image (Tongkat Gembala).png",
    label: "Tongkat Gembala",
    description: "melambangkan panggilan Tuhan untuk menggembalakan umat-Nya.",
  },
];

const founders = [
  {
    image: "/images/sejarah/ImageWithFallback-3.png",
    name: "Pdt. DR. Caleb Tong, S.Mus",
    role: "Ketua Yayasan STT Bandung",
  },
  {
    image: "/images/sejarah/ImageWithFallback-4.png",
    name: "Rev. Dr. Joseph Tong, Ph.D",
    role: "Pendiri & Rektor Pertama",
  },
  {
    image: "/images/sejarah/ImageWithFallback-5.png",
    name: "Ibu Dorothy I. Marx, S.Mus",
    role: "Rektor & Pendiri",
  },
];

export default function SejarahPage() {
  return (
    <main className="min-h-screen" style={{ fontFamily: "var(--font-sans)" }}>
      {/* SECTION 1 — HERO */}
      <section className="py-20" style={{ background: "#00276B" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <p
            className="uppercase mb-6"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "12px",
              fontWeight: 700,
              color: "#C41E3A",
              letterSpacing: "0.15em",
            }}
          >
            TENTANG KAMI
          </p>

          <div className="mb-6">
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "clamp(3.5rem, 8vw, 4.5rem)",
                fontWeight: 400,
                color: "#FFFFFF",
                lineHeight: 1.1,
                marginBottom: "8px",
              }}
            >
              Sejarah
            </h1>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(4rem, 9vw, 5rem)",
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.1,
              }}
            >
              STTB
            </h1>
          </div>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "15px",
              color: "rgba(255, 255, 255, 0.7)",
              lineHeight: 1.7,
              maxWidth: "520px",
            }}
          >
            Perjalanan lebih dari tiga dekade dalam menghasilkan pastor-scholar
            yang berdampak bagi Indonesia dan dunia.
          </p>
        </div>
      </section>

      {/* SECTION 2 — HORIZONTAL TIMELINE */}
      <section className="py-20" style={{ background: "#FFFFFF" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p
              className="uppercase font-bold mb-4"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "12px",
                color: "#C41E3A",
                letterSpacing: "0.12em",
              }}
            >
              PERJALANAN KAMI
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "40px",
                fontWeight: 700,
                color: "#00276B",
              }}
            >
              Sejarah Perkembangan
            </h2>
          </div>

          {/* Horizontal Timeline Bar — desktop only */}
          <div className="mb-16 hidden lg:block">
            <div className="relative max-w-[1200px] mx-auto">
              {/* Red Line */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "0",
                  right: "0",
                  height: "2px",
                  background: "#C41E3A",
                }}
              />

              {/* Timeline Dots */}
              <div className="relative flex justify-between">
                {timelineData.map((item) => (
                  <div key={item.year} className="flex flex-col items-center">
                    {/* Year Label Above */}
                    <p
                      className="mb-3"
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "14px",
                        fontWeight: 700,
                        color: "#00276B",
                      }}
                    >
                      {item.year}
                    </p>

                    {/* Dot */}
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        borderRadius: "50%",
                        background: "#00276B",
                        border: "3px solid #C41E3A",
                      }}
                    />

                    {/* Title Below */}
                    <p
                      className="mt-3 text-center"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "14px",
                        fontWeight: 700,
                        color: "#00276B",
                        maxWidth: "120px",
                      }}
                    >
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-6 mt-12">
            {timelineData.map((item) => (
              <div
                key={item.year}
                className="bg-white rounded-xl p-6"
                style={{ border: "1px solid #E5E7EB" }}
              >
                {/* Year */}
                <div
                  className="mb-4"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "28px",
                    fontWeight: 700,
                    color: "#C41E3A",
                  }}
                >
                  {item.year}
                </div>

                {/* Title */}
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#00276B",
                    lineHeight: 1.4,
                  }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="mb-4"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "13px",
                    color: "#6B7280",
                    lineHeight: 1.7,
                  }}
                >
                  {item.description}
                </p>

                {/* Period Badge */}
                <div
                  className="inline-block px-3 py-1 rounded-full"
                  style={{
                    background: "#C41E3A",
                    fontFamily: "var(--font-sans)",
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "#FFFFFF",
                  }}
                >
                  {item.period}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — GALERI SEJARAH */}
      <section className="py-20" style={{ background: "#F8F7F4" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          {/* Section Header */}
          <div className="mb-12">
            <p
              className="uppercase font-bold mb-4"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "12px",
                color: "#C41E3A",
                letterSpacing: "0.12em",
              }}
            >
              GALERI
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 700,
                color: "#00276B",
              }}
            >
              Galeri Sejarah
            </h2>
          </div>

          {/* Images Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {GALLERY_IMAGES.map((img) => (
              <div key={img.alt}>
                <div
                  className="relative rounded-xl overflow-hidden mb-4"
                  style={{ aspectRatio: "4/3" }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <p
                  className="text-center"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "13px",
                    color: "#6B7280",
                  }}
                >
                  {img.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — ARTI LOGO */}
      <section className="py-20" style={{ background: "#FFFFFF" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-[55%_45%] gap-12 items-start">
            {/* Left Column */}
            <div>
              <p
                className="uppercase font-bold mb-4"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "12px",
                  color: "#C41E3A",
                  letterSpacing: "0.12em",
                }}
              >
                IDENTITAS
              </p>
              <h2
                className="mb-10"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 5vw, 3rem)",
                  fontWeight: 700,
                  color: "#00276B",
                }}
              >
                Arti Logo STTB
              </h2>

              {/* 2×2 Grid */}
              <div className="grid grid-cols-2 gap-6">
                {logoSymbols.map(({ src, label, description }) => (
                  <div key={label}>
                    <div className="mb-3">
                      <Image
                        src={src}
                        alt={label}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <h3
                      className="mb-2"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "14px",
                        fontWeight: 700,
                        color: "#00276B",
                      }}
                    >
                      {label}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "13px",
                        color: "#6B7280",
                        lineHeight: 1.7,
                      }}
                    >
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column — Logo Display */}
            <div
              className="rounded-2xl p-12 flex items-center justify-center"
              style={{ background: "#003F8A" }}
            >
              <div
                className="relative w-full"
                style={{ maxWidth: "280px", aspectRatio: "1/1" }}
              >
                <Image
                  src="/images/sejarah/Image (Logo STTB).png"
                  alt="Logo STTB"
                  fill
                  className="object-contain"
                  sizes="280px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — PENDIRI */}
      <section className="py-20" style={{ background: "#F8F7F4" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p
              className="uppercase font-bold mb-4"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "12px",
                color: "#C41E3A",
                letterSpacing: "0.12em",
              }}
            >
              PARA PENDIRI
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 700,
                color: "#00276B",
              }}
            >
              Pendiri STTB
            </h2>
          </div>

          {/* Founders Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="bg-white rounded-xl p-8 text-center"
              >
                {/* Photo Circle */}
                <div
                  className="mx-auto mb-6 rounded-full overflow-hidden relative"
                  style={{
                    width: "120px",
                    height: "120px",
                  }}
                >
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover"
                    sizes="120px"
                  />
                </div>

                {/* Name */}
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#00276B",
                  }}
                >
                  {founder.name}
                </h3>

                {/* Role */}
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "13px",
                    color: "#6B7280",
                  }}
                >
                  {founder.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
