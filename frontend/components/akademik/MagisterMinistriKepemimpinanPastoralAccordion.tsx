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
    category: "Fondasi Biblika",
    courses: [
      {
        id: "biblika-1",
        title: "Hermeneutika Advanced (3 SKS)",
        content:
          "Studi tentang prinsip-prinsip penafsiran Alkitab dan penerapan praktis dalam hidup keseharian, sesuai dengan konteks literatur dan <em>historical-grammatical</em> tiap bagian teks yang dipelajari dan implikasinya dalam pelayanan penggembalaan serta kepemimpinan Kristen.",
      },
      {
        id: "biblika-2",
        title: "Revisit Fondasi Biblika: Metanarasi (3 SKS)",
        content:
          "Mata kuliah ini mengajak mahasiswa menelusuri metanarasi Alkitab, dengan penekanan pada kisah penciptaan, kejatuhan manusia, penebusan melalui karya salib Kristus, dan pemulihan seluruh ciptaan. Mahasiswa akan diajak memahami rencana Allah dalam sejarah penebusan sebagai satu kesatuan narasi yang berpuncak pada karya keselamatan di dalam Yesus Kristus.",
      },
      {
        id: "biblika-3",
        title: "Revisit Fondasi Sistematika: Teologi Reformed (3 SKS)",
        content:
          "Mata kuliah ini membekali mahasiswa dengan pemahaman mendasar tentang kerangka teologi Reformed secara sistematis, mencakup doktrin Allah, manusia, dosa, keselamatan, gereja, dan akhir zaman. Mahasiswa diajak untuk meninjau kembali fondasi-fondasi iman Kristen yang berpusat pada otoritas Alkitab, kedaulatan Allah, dan anugerah keselamatan di dalam Kristus.",
      },
    ],
  },
  {
    category: "Mata Kuliah Inti",
    courses: [
      {
        id: "inti-1",
        title: "Spiritualitas Pemimpin Gereja (3 SKS)",
        content:
          "Menekankan perjalanan dan transformasi spiritualitas pemimpin gereja (<em>spiritual journey and renewal</em>) beserta implikasinya dalam konteks pelayanan gereja, sekolah dan keluarga. Studi ini mengarahkan lebih pada pembentukan kedewasaan spiritual yang utuh dan bagaimana mengalami pembaharuan spiritual secara berkelanjutan.",
      },
      {
        id: "inti-2",
        title: "Pemuridan Intensional Gereja (3 SKS)",
        content:
          "Mata kuliah ini mempelajari fondasi Alkitab pelayanan pemuridan intensional, prinsip pembimbingan pemuridan intensional melalui kelompok kecil, kurikulum pelayanan pemuridan intensional di gereja.",
      },
      {
        id: "inti-3",
        title: "Misi Integral Gereja (3 SKS)",
        content:
          "Mata kuliah Misi Integral dimaksudkan agar peserta kuliah memiliki kerangka teologis yang solid untuk dapat mengembangkan misi integral dalam pelayanan gereja di tengah masyarakat dengan memberdayakan segenap potensi yang dimiliki oleh jemaat dalam kehidupan sehari-hari di dunia pelayanan.",
      },
      {
        id: "inti-4",
        title: "Kepemimpinan Transformasional Gereja (3 SKS)",
        content:
          "Mata kuliah ini merupakan studi isu-isu dan prinsip-prinsip kepemimpinan Kristen berdasarkan teologi-biblika guna menghasilkan pemimpin transformasional dalam mengeksplorasi, menganalisa dan merespon tantangan kepemimpinan di konteks pelayanan penggembalaan masa kini. Kuliah ini membentuk mahasiswa menjadi pemimpin Kristen yang memiliki kemampuan dan keterampilan bertindak sebagai pemimpin yang responsif dan transformatif. Mahasiswa dibekali teori dan hasil penelitian terkini beserta implikasinya dalam kepemimpinan di gereja dan <em>parachurch</em>, serta analisis perjalanan formasi kepemimpinan berkelanjutan untuk menjadi pemimpin yang efektif.",
      },
      {
        id: "inti-5",
        title: "Pembinaan Spiritualitas Tiap Fase Kehidupan (3 SKS)",
        content:
          "Mata kuliah ini membahas pembinaan spiritualitas dalam setiap fase kehidupan, dari masa kanak-kanak, remaja, dewasa, hingga usia lanjut, dalam terang iman Kristen. Mahasiswa akan mengeksplorasi dinamika perkembangan rohani, kebutuhan spiritual di masing-masing tiap tahap, serta pendekatan pembinaan yang sesuai.",
      },
    ],
  },
  {
    category: "Mata Kuliah Konsentrasi",
    courses: [
      {
        id: "konsentrasi-1",
        title: "Teologi Pastoral (3 SKS)",
        content:
          "Mata kuliah ini mengkaji dasar-dasar teologis dari pelayanan pastoral dalam konteks gereja dan kehidupan jemaat. Mahasiswa akan diajak memahami hakikat panggilan pastoral, karakter gembala sebagai pelayan yang setia dan bertanggung jawab (<em>stewardship</em>), serta pentingnya integrasi antara refleksi teologis dan praktik pelayanan sehari-hari.",
      },
      {
        id: "konsentrasi-2",
        title: "Khotbah Ekspositori Advanced (3 SKS)",
        content:
          "Mata kuliah ini dirancang untuk mempelajari ilmu pembentukan khotbah ekspositori melalui pemahaman teori persiapan, penggalian teks, struktur khotbah yang efektif dan cara penyampaian pada konteks kontemporer. Mahasiswa diharapkan mampu menganalisa khotbah secara ekspositori dan membentuk khotbah ekspositori. Mahasiswa diberi tugas dan kesempatan untuk menyampaikan secara langsung khotbah di kelas secara terbuka.",
      },
      {
        id: "konsentrasi-3",
        title: "Ibadah Transformatif (3 SKS)",
        content:
          "Mata kuliah ini membahas prinsip, dasar dan isu terkait ibadah gereja yang meliputi sejarah liturgi, dasar biblika dan prinsip-prinsip merancang liturgi ibadah yang transformatif baik <em>onsite</em> maupun <em>online</em> dalam konteks pelayanan gereja yang semakin kompleks dan berkembang. Kelas ini disertai praktik merancang liturgi ibadah gerejawi berdasarkan teori dan langkah efektif agar mahasiswa mampu menciptakan liturgi ibadah kontemporer.",
      },
    ],
  },
  {
    category: "Mata Kuliah Pilihan (Elektif)",
    courses: [
      {
        id: "elektif-1",
        title: "Perintisan dan Pertumbuhan Gereja (3 SKS)",
        content:
          "Mata kuliah ini membahas prinsip-prinsip teologis dan praktis dalam perintisan serta pertumbuhan gereja, baik dalam konteks lokal maupun lintas budaya. Mahasiswa akan mempelajari dasar biblika, strategi misi, dinamika komunitas, serta faktor-faktor yang mendukung pertumbuhan gereja yang sehat dan berkelanjutan.",
      },
      {
        id: "elektif-2",
        title: "Manajemen Perubahan dan Konflik (3 SKS)",
        content:
          "Mata kuliah Manajemen Perubahan dan Konflik bertujuan untuk memberikan pemahaman mendalam tentang konsep, teori, dan praktik kepemimpinan serta manajemen perubahan dalam organisasi. Mahasiswa akan mempelajari bagaimana seorang pemimpin dapat mengarahkan timnya dan mengelola perubahan yang terjadi untuk mencapai tujuan organisasi secara efektif.",
      },
    ],
  },
  {
    category: "Tugas Akhir & Mentoring",
    courses: [
      {
        id: "akhir-1",
        title: "Mentoring Pastoral (3 SKS)",
        content:
          "Mata kuliah ini bertujuan membentuk kehidupan rohani dan karakter pelayanan mahasiswa melalui proses pendampingan (mentoring) yang terarah dan berkelanjutan. Mahasiswa akan dibimbing secara pribadi oleh satu dosen pembimbing dalam pertemuan bulanan (satu kali setiap bulan), dengan fokus pada pertumbuhan iman, pembentukan karakter, refleksi panggilan, dan integrasi antara kehidupan pribadi dan pelayanan.",
      },
      {
        id: "akhir-2",
        title: "Tugas Akhir (6 SKS)",
        content:
          "Sebuah tugas akhir dalam salah satu area studi yang menjadi ketertarikan mahasiswa, khususnya yang dianggap aktual untuk pergumulan dunia kepemimpinan Kristen di Indonesia masa kini, di bawah bimbingan seorang dosen pembimbing dengan memanfaatkan ilmu yang diperoleh selama studi. Tugas akhir dapat berupa penelitian proyek kreatif.",
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

export function MagisterMinistriKepemimpinanPastoralAccordion() {
  const [openAccordion, setOpenAccordion] = useState<string | null>("biblika-1");

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
