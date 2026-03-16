"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface Course {
  id: string;
  title: string;
  content: string;
}

interface CourseCategory {
  category: string;
  courses: Course[];
}

const COURSE_CATEGORIES: CourseCategory[] = [
  {
    category: "Mata Kuliah Fondasi",
    courses: [
      {
        id: "fondasi-1",
        title: "Fondasi Teologi Sistematika (3 SKS)",
        content:
          "Mata kuliah ini merupakan pengantar kepada Teologi Sistematika yang mempelajari intisari dan doktrin-doktrin dasar kekristenan yang mencakup: Doktrin Allah, Kristus, Roh Kudus, Alkitab dan Pewahyuan, Manusia dan Dosa, Keselamatan, serta implikasi doktrin-doktrin tersebut dalam pendidikan Kristen.",
      },
      {
        id: "fondasi-2",
        title: "Fondasi Perjanjian Lama (3 SKS)",
        content:
          "Studi kitab-kitab PL, dengan perhatian khusus atas latar belakang sejarah dan budaya, penulis, pembaca pertama, dan tema-tema utama kitab-kitab PL, sebagai landasan bagi pengembangan sudut pandang Alkitabiah (<em>biblical worldview</em>) dalam menyikapi berbagai tantangan dalam kehidupan Kristen di masa kini.",
      },
      {
        id: "fondasi-3",
        title: "Fondasi Perjanjian Baru (3 SKS)",
        content:
          "Studi kitab-kitab PB, dengan perhatian khusus atas latar belakang sejarah dan budaya, penulis, pembaca pertama, tema utama, dan teologi dari kitab-kitab PB, sebagai landasan bagi pengembangan sudut pandang Alkitabiah (<em>biblical worldview</em>) dalam menyikapi berbagai tantangan dalam kehidupan Kristen di masa kini.",
      },
      {
        id: "fondasi-4",
        title: "Hermeneutika (3 SKS)",
        content:
          "Studi tentang prinsip-prinsip penafsiran Alkitab dan penerapan praktis dalam hidup keseharian, sesuai dengan konteks literatur dan <em>historical-grammatical</em> tiap bagian teks yang dipelajari.",
      },
    ],
  },
  {
    category: "Mata Kuliah Inti",
    courses: [
      {
        id: "inti-1",
        title: "Teologi Natur Manusia (3 SKS)",
        content:
          "Mengupas natur manusia dari dimensi struktural dan fungsionalnya dengan menerapkan pendekatan integratif antara teologi dengan ilmu-ilmu pengetahuan lainnya, agar memahami kapasitas, kompleksitas dan inter-relasi antar setiap aspek kehidupan manusia. Pemahaman ini berimplikasi pada signifikansi hubungan mengenal dan dikenal antara pendidik dengan peserta didik sebagai manusia pembelajar yang ditransformasi untuk menjadi serupa gambar Allah yang mulia.",
      },
      {
        id: "inti-2",
        title: "Sejarah, Filosofi dan Teologi Pendidikan Kristen (3 SKS)",
        content:
          "Mempelajari perkembangan sejarah pendidikan Kristen mulai dari awal mula pendidikan Yahudi sebagai akar pendidikan Kristen hingga pendidikan zaman modern sekarang ini. Pembahasan mencakup karakteristik dan pergumulan dari setiap zaman yang ditandai dengan munculnya para tokoh pendidikan Kristen beserta dengan filosofi dan teologi di dalamnya. Perhatian khusus diberikan untuk perkembangan pendidikan Kristen dalam konteks keluarga, gereja, dan sekolah.",
      },
      {
        id: "inti-3",
        title: "Psikologi Perkembangan dan Pendidikan (3 SKS)",
        content:
          "Mempelajari teori-teori utama perkembangan dan perilaku dari aspek kognitif, sosial emosional, moral, religius, serta implikasinya dalam praktik pendidikan Kristen.",
      },
      {
        id: "inti-4",
        title: "Transformasi Spiritualitas Pendidikan (3 SKS)",
        content:
          "Mempelajari teori-teori utama perkembangan dan perilaku dari aspek kognitif, sosial emosional, moral, religius, serta implikasinya dalam praktik pendidikan Kristen.",
      },
      {
        id: "inti-5",
        title: "Pendidikan Berbasis Keluarga (3 SKS)",
        content:
          "Mempelajari prinsip-prinsip biblika/teologis pernikahan dan keluarga Kristen, pentingnya pendidikan berbasis keluarga serta kolaborasinya dengan sekolah dan gereja dalam membentuk kehidupan anak yang berdampak bagi pertumbuhannya yang utuh.",
      },
      {
        id: "inti-6",
        title: "Mentoring Perjalanan Studi (1 SKS)",
        content:
          "Peserta didik akan dipandu untuk merekap, mengevaluasi, dan merencanakan pembelajaran pribadi mulai dari semester pertama sampai menyelesaikan semua mata kuliah dan siap masuk ke dalam tugas akhir. Portofolio tersebut bertujuan seperti peta perjalanan studi untuk mendokumentasikan perkembangan proses pembelajaran yang dijalani dalam mencapai tujuan yang diharapkan.",
      },
    ],
  },
  {
    category: "Konsentrasi: Desain Kurikulum & Pembelajaran",
    courses: [
      {
        id: "kurikulum-1",
        title: "Desain dan Pengembangan Kurikulum (3 SKS)",
        content:
          "Mempelajari tentang prinsip-prinsip dan proses pengembangan kurikulum dalam ranah pendidikan formal, non-formal, dan informal agar dapat mengembangkan keterampilan merancang kurikulum yang berwawasan Alkitabiah. Kelas ini disertai praktik merancang tujuan pembelajaran yang terukur yang berpusat pada peserta didik agar mampu menjadi pembelajar seumur hidup yang kritis dan kreatif. Aplikasi teknologi digital (AI) akan menjadi bagian pendukung dalam merancang tujuan pembelajaran tersebut.",
      },
      {
        id: "kurikulum-2",
        title: "Evaluasi Pembelajaran (3 SKS)",
        content:
          "Mata kuliah ini akan mempelajari asesmen dalam pendidikan Kristen untuk mengumpulkan informasi dan bukti-bukti yang cukup guna mengukur ketercapaian dari tujuan pembelajaran (<em>learning outcomes</em>) yang ditetapkan. Mata kuliah ini akan memberikan kesempatan kepada mahasiswa untuk merancang penilaian formatif dan sumatif yang berdiferensiasi, serta menyusun portofolio peserta didik.",
      },
      {
        id: "kurikulum-3",
        title: "Desain Strategi dan Media Pendidikan (3 SKS)",
        content:
          "Membahas beberapa model dan strategi pembelajaran yang melibatkan pendekatan mengajar berdiferensiasi. Mata kuliah ini didesain untuk memberikan pengalaman belajar kepada mahasiswa dalam merancang kegiatan belajar yang relevan dengan konteks peserta didik, terkini, serta menantang dan bermakna.",
      },
    ],
  },
  {
    category: "Konsentrasi: Kepemimpinan Pendidikan",
    courses: [
      {
        id: "pimpinan-1",
        title: "Fondasi Kepemimpinan Pendidikan Kristen (3 SKS)",
        content:
          "Memperlengkapi pemimpin pendidik Kristen dengan pengetahuan, keterampilan, serta kemampuan bersikap dan bertindak untuk menjadi pemimpin yang responsif dan transformatif. Kelas ini mencakup fondasi biblika/teologis kepemimpinan Kristen, teori dan hasil penelitian terkini beserta implikasinya dalam kepemimpinan di sekolah, gereja, dan <em>parachurch</em>, serta analisis perjalanan formasi kepemimpinan yang memerlukan pengembangan lanjut untuk menjadi pemimpin yang lebih baik.",
      },
      {
        id: "pimpinan-2",
        title: "Manajemen Pendidikan Berjiwa Wirausaha (3 SKS)",
        content:
          "Memperlengkapi pemimpin pendidik Kristen dengan kemampuan perencanaan strategis, koordinasi, dan implementasi praktis yang mengintegrasikan berbagai aspek sumber daya secara optimal untuk memberi dampak positif serta keberlangsungan hidup jangka panjang sesuai visi misi institusi.",
      },
      {
        id: "pimpinan-3",
        title: "Sumber Daya Manusia yang Berdaya-kembang (3 SKS)",
        content:
          "Memperlengkapi pemimpin pendidik Kristen dengan kemampuan supervisi, mentoring, dan asesmen untuk dapat memberikan intervensi serta merencanakan pengembangan profesional yang berdiferensiasi bagi para pekerja dalam konteks sekolah, gereja, dan <em>parachurch</em>.",
      },
    ],
  },
  {
    category: "Mata Kuliah Pilihan (Elektif)",
    courses: [
      {
        id: "elektif-1",
        title: "Mata Kuliah Elektif 1 & 2 (6 SKS)",
        content:
          "Peserta didik dapat memilih salah satu mata kuliah integratif dengan mengikuti kuliah di prodi lain (pada jenjang magister) sesuai dengan minat yang akan memperkaya wawasan dan mengembangkan kompetensinya sebagai pendidik Kristen. Mahasiswa juga dapat mengambil matakuliah Isu-Isu Kontemporer di program studi Magister Pendidikan yang diadakan sesuai kebutuhan yang relevan dengan konteks pendidikan Kristen di Indonesia.",
      },
    ],
  },
  {
    category: "Mata Kuliah Penelitian & Tugas Akhir",
    courses: [
      {
        id: "penelitian-1",
        title: "Penulisan Akademik (3 SKS)",
        content:
          "Kuliah ini akan membantu mahasiswa untuk dapat melakukan riset literatur yang baik bagi penulisan tugas paper dan tugas akhir serta menuliskannya dengan terstruktur sehingga dapat dipublikasikan dalam publikasi ilmiah.",
      },
      {
        id: "penelitian-2",
        title: "Metodologi Penelitian Kualitatif / Proyek Kreatif (3 SKS)",
        content:
          "<strong>a. Metodologi Penelitian Kualitatif:</strong> Menolong peserta didik untuk memahami landasan teoritis dan memperoleh keterampilan praktis dalam melakukan riset ilmiah dengan pendekatan kualitatif dalam konteks pendidikan Kristen.<br/><br/><strong>b. Metodologi Penelitian Proyek Kreatif:</strong> Memperlengkapi peserta didik untuk berpikir kritis, inovatif, realistis, dan analitis dalam memilih dan merancang tugas akhir berbasis proyek yang relevan.",
      },
      {
        id: "penelitian-3",
        title: "Proposal (3 SKS)",
        content:
          "Proposal tugas akhir dalam salah satu area studi yang menjadi ketertarikan mahasiswa, khususnya yang dianggap aktual untuk pergumulan dunia pendidikan Kristen di Indonesia, di bawah bimbingan seorang dosen pembimbing. Proposal dapat berupa penelitian kuantitatif, kualitatif, tindakan kelas, proyek kreatif, prototipe, dsb.",
      },
      {
        id: "penelitian-4",
        title: "Tugas Akhir (8 SKS)",
        content:
          "Sebuah tugas akhir dalam salah satu area studi yang menjadi ketertarikan mahasiswa di bawah bimbingan seorang dosen pembimbing dengan memanfaatkan ilmu yang diperoleh selama studi. Tugas akhir dapat berupa penelitian kuantitatif, kualitatif, penelitian tindakan kelas, proyek kreatif, prototipe, atau bentuk tugas akhir lainnya.",
      },
    ],
  },
];

function AccordionItem({
  id,
  title,
  content,
  isOpen,
  onToggle,
}: {
  id: string;
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b last:border-b-0" style={{ borderColor: "#E8ECF2" }}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 px-6 text-left transition-all hover:bg-gray-50"
        style={{
          fontFamily: "Plus Jakarta Sans, sans-serif",
          fontSize: "16px",
          fontWeight: 700,
          color: isOpen ? "#00276B" : "#1A2340",
        }}
      >
        <span className="pr-4">{title}</span>
        <div className="flex-shrink-0 ml-4">
          {isOpen ? (
            <Minus className="w-5 h-5" style={{ color: "#C41E3A" }} />
          ) : (
            <Plus className="w-5 h-5" style={{ color: "#00276B" }} />
          )}
        </div>
      </button>
      {isOpen && (
        <div
          className="px-6 pb-6"
          style={{
            fontFamily: "Plus Jakarta Sans, sans-serif",
            fontSize: "15px",
            color: "#6B7A99",
            lineHeight: 1.75,
          }}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </div>
  );
}

export function MagisterPendidikanKristenAccordion() {
  const [openAccordion, setOpenAccordion] = useState<string | null>("fondasi-1");

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="space-y-16">
      {COURSE_CATEGORIES.map((category, categoryIdx) => (
        <div key={categoryIdx}>
          <h3
            className="mb-6 pb-4 border-b-2"
            style={{
              fontFamily: "DM Serif Display, serif",
              fontSize: "26px",
              fontWeight: 700,
              color: "#00276B",
              borderColor: "#E8ECF2",
            }}
          >
            {category.category}
          </h3>
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E8ECF2",
              boxShadow: "0 4px 20px rgba(0,39,107,0.04)",
            }}
          >
            {category.courses.map((course) => (
              <AccordionItem
                key={course.id}
                id={course.id}
                title={course.title}
                content={course.content}
                isOpen={openAccordion === course.id}
                onToggle={() => toggleAccordion(course.id)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
