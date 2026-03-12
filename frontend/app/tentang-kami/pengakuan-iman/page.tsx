const articles = [
  {
    number: "01",
    text: "bahwa Alkitab secara keseluruhan, Perjanjian Lama dan Perjanjian Baru, adalah firman Allah yang diwahyukan dan diilhamkan tanpa kesalahan. Oleh karena itu, Alkitab adalah sumber otoritas tertinggi bagi iman dan kehidupan orang percaya di segala abad dan tempat.",
  },
  {
    number: "02",
    text: "bahwa Allah adalah Esa dan kekal, Mahakudus, dan penuh rahmat. Ia adalah pencipta, penguasa, dan pemelihara alam semesta beserta segala isinya, Tritunggal sebagai Bapa, Anak, dan Roh Kudus. Masing-masing adalah Pribadi yang tidak diciptakan, sehakekat, dan setara dalam kuasa dan kemuliaan. Ia berdaulat baik dalam keselamatan maupun dalam penghakiman umat manusia.",
  },
  {
    number: "03",
    text: "bahwa manusia, laki-laki dan perempuan, telah diciptakan oleh Allah menurut gambar-Nya, yang telah dimahkotai-Nya dengan kemuliaan serta mandat untuk memenuhi bumi, mengelola dan memelihara seluruh ciptaan-Nya. Tetapi manusia telah jatuh ke dalam dosa, terpisah dari Allah, dan kehilangan kemampuan untuk hidup sesuai dengan citranya sebagai ciptaan Allah, sehingga tidak mampu menyelamatkan dirinya sendiri.",
  },
  {
    number: "04",
    text: "bahwa Yesus Kristus adalah Anak Tunggal Allah, Allah sejati dan Manusia sejati, penebus dan satu-satunya jalan keselamatan bagi seluruh umat manusia. Ia dikandung dari Roh Kudus, lahir dari anak dara Maria, hidup tanpa dosa, sempurna dalam pengorbanan dan kasih. Ia mati di atas kayu salib, bangkit kembali dari antara orang mati dalam tubuh kebangkitan yang nyata, naik ke sorga, duduk di sebelah kanan Allah Bapa, menjadi Imam Besar Agung bagi orang percaya, dan pengantara tunggal antara Allah dan manusia, serta Raja di atas segala raja.",
  },
  {
    number: "05",
    text: "bahwa Roh Kudus adalah Allah yang hidup, yang menginsafkan manusia akan dosa, kebenaran, dan penghakiman. Ia melahirbarukan orang berdosa yang percaya, mendiami, menguduskan, dan memberi kuasa serta karunia-karunia kepada setiap orang percaya menurut kehendak-Nya demi kesaksian, persekutuan, dan pelayanan untuk pembangunan tubuh Kristus.",
  },
  {
    number: "06",
    text: "bahwa manusia hanya dapat diselamatkan oleh kasih karunia melalui penebusan oleh Tuhan Yesus Kristus dan dibenarkan melalui iman, tanpa jasa, usaha, ataupun kesalehan dari pihak manusia. Melalui penyelamatan Allah dalam Kristus, gambar Allah pada manusia dipulihkan sehingga manusia dimampukan untuk menjalani kehidupan yang penuh tanggung jawab dalam pengabdian dan kasih di hadapan Allah dan manusia.",
  },
  {
    number: "07",
    text: "bahwa Gereja selaku garam dan terang dunia adalah himpunan semua orang percaya dari segala abad dan bangsa. Ia adalah tubuh Kristus yang kudus dan Am, dengan Kristus sebagai Kepalanya. Gereja memberitakan Kerajaan Allah melalui kebaktian, pengajaran, sakramen baptisan dan perjamuan kudus, serta pemberitaan Injil dan misi umat Allah seutuhnya di tengah dunia.",
  },
  {
    number: "08",
    text: "bahwa kepastian kedatangan kembali Yesus Kristus secara nyata dan pribadi akan terjadi pada akhir zaman untuk menjemput umat-Nya untuk menghakimi seluruh umat manusia, baik yang hidup maupun yang mati. Pada kedatangan-Nya kedua kali itulah setiap orang mati akan dibangkitkan, orang percaya masuk ke dalam kehidupan yang kekal, orang yang tidak percaya masuk ke dalam kebinasaan yang kekal.",
  },
];

export default function PengakuanImanPage() {
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
                Pengakuan Iman STTB
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                Fondasi teologis Reformed yang kami pegang sebagai institusi dan
                komunitas akademik
              </p>
            </div>
          </div>
        </section>

        {/* Articles of Faith */}
        <div className="relative">
          {articles.map((article, index) => {
            const isEven = index % 2 === 0;
            return (
              <section
                key={index}
                className={`relative py-24 lg:py-32 overflow-hidden ${
                  isEven ? "bg-white" : "bg-gray-50"
                }`}
              >
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                  <div className="relative">
                    {/* Watermark number */}
                    <div
                      className="absolute top-0 left-0 text-[20rem] lg:text-[28rem] font-bold leading-none pointer-events-none select-none opacity-[0.03] text-[#00276B]"
                      style={{
                        fontFamily: "var(--font-display)",
                        transform: "translateY(-30%)",
                      }}
                    >
                      {article.number}
                    </div>

                    <div className="relative grid lg:grid-cols-12 gap-12 items-start">
                      {/* Article Number */}
                      <div
                        className={`lg:col-span-3 ${
                          isEven
                            ? "lg:text-left"
                            : "lg:text-right lg:col-start-10"
                        }`}
                      >
                        <div
                          className="text-[8rem] lg:text-[10rem] font-bold leading-none text-[#93C5FD] opacity-40"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {article.number}
                        </div>
                      </div>

                      {/* Article Text */}
                      <div className="lg:col-span-9 lg:col-start-1">
                        <div
                          className={`max-w-3xl ${isEven ? "ml-auto" : "mr-auto"}`}
                        >
                          <p className="text-[#C41E3A] text-sm font-bold tracking-[0.2em] uppercase mb-8">
                            KAMI PERCAYA
                          </p>
                          <p
                            className="text-2xl lg:text-3xl leading-relaxed text-gray-800"
                            style={{ fontFamily: "var(--font-serif)" }}
                          >
                            {article.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Closing Motto Section */}
        <section className="relative py-32 lg:py-40 bg-gradient-to-br from-[#00276B] to-[#003F8A] overflow-hidden">
          {/* Cross watermark */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
            <div
              className="text-[25rem] font-bold leading-none text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              &#10013;
            </div>
          </div>

          <div className="relative max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
            <div className="w-32 h-1 bg-[#C41E3A] mx-auto mb-12" />

            <h2
              className="text-5xl lg:text-7xl font-bold text-white mb-6 italic leading-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Domino Optimo Maximo
            </h2>

            <div className="space-y-2">
              {["To The Lord", "The Best", "The Greatest"].map((line, i) => (
                <p
                  key={i}
                  className="text-3xl lg:text-4xl font-bold text-white/90 tracking-wide"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {line}
                </p>
              ))}
            </div>

            <div className="w-32 h-1 bg-[#C41E3A] mx-auto mt-12" />
          </div>
        </section>
      </main>
    </div>
  );
}
