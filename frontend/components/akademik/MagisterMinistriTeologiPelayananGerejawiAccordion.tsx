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
        title: "Fondasi PL: Taurat (3 SKS)",
        content:
          "Studi kitab-kitab Taurat (Kejadian–Ulangan) dengan perhatian khusus atas latar belakang sejarah dan budaya, penulis, pembaca pertama, dan tema-tema utama—khususnya tema perjanjian, hukum, dan kekudusan—sebagai landasan bagi pengembangan sudut pandang Alkitabiah dalam memberitakan dan mengajarkan firman Tuhan dalam konteks pelayanan gereja.",
      },
      {
        id: "biblika-2",
        title: "Fondasi PB: Injil (3 SKS)",
        content:
          "Studi keempat Injil Perjanjian Baru dengan perhatian khusus atas latar belakang sejarah dan budaya, keunikan tiap Injil, serta tema-tema sentral seperti Kerajaan Allah, Yesus sebagai Mesias, dan implikasi pengikutan Kristus bagi kehidupan murid dan pelayanan gereja masa kini.",
      },
      {
        id: "biblika-3",
        title: "Hermeneutika (3 SKS)",
        content:
          "Studi tentang prinsip-prinsip penafsiran Alkitab yang mencakup: <ol><li>Motivasi dan wawasan dalam mempelajari Alkitab</li><li>Prinsip-prinsip mempelajari Alkitab secara induktif dengan metode K.O.M.A. (Konteks, Observasi, Makna, Aplikasi)</li><li>Latihan keterampilan mempelajari Alkitab dengan metode K.O.M.A. dalam berbagai genre Alkitab.</li></ol>Melaluinya diharapkan mahasiswa memiliki perspektif <em>biblical-contextual</em> sebagai bekal dalam pelayanan gerejawi yang efektif.",
      },
    ],
  },
  {
    category: "Fondasi Sistematika - Historika",
    courses: [
      {
        id: "sistematika-1",
        title: "Allah, Alkitab dan Penciptaan (3 SKS)",
        content:
          "Mata kuliah ini merupakan pengantar kepada teologi sistematika yang mempelajari intisari dan doktrin dasar kekristenan dalam kerangka metanarasi Alkitab tentang penciptaan yang mencakup: Doktrin Allah, dan Alkitab; serta implikasi doktrin-doktrin tersebut dalam konteks pelayanan gerejawi masa kini.",
      },
      {
        id: "sistematika-2",
        title: "Kristus dan Keselamatan (3 SKS)",
        content:
          "Mata kuliah ini membahas teologi sistematika yang mempelajari intisari dan doktrin dasar kekristenan dalam kerangka metanarasi Alkitab tentang karya keselamatan yang mencakup: Doktrin manusia, Dosa dan Keselamatan; serta implikasi doktrin-doktrin tersebut dalam konteks pelayanan gerejawi masa kini.",
      },
      {
        id: "sistematika-3",
        title: "Roh Kudus dan Gereja (3 SKS)",
        content:
          "Mata kuliah ini membahas teologi sistematika yang mempelajari intisari dan doktrin dasar kekristenan dalam kerangka metanarasi Alkitab yang mencakup: Doktrin Roh Kudus, Gereja dan Akhir Zaman; serta implikasi doktrin-doktrin tersebut dalam konteks pelayanan gerejawi masa kini.",
      },
      {
        id: "sistematika-4",
        title: "Gereja dalam Konteks Sosio-Historis (3 SKS)",
        content:
          "Perkuliahan ini membahas tentang gereja yang memiliki peran yang sangat penting dalam sejarah kehidupan umat manusia. Perannya di tengah masyarakat sangat signifikan, bukan hanya secara keagamaan atau konsep etika moral, tetapi juga menyangkut sosial, politik, ekonomi, pendidikan dan lainnya. Kuliah ini akan mempelajari sejarah gereja dalam konteks sosial kemasyarakatan dengan melihat bagaimana perubahan masyarakat mengarahkan gerak gereja dan bagaimana gereja memberi kontribusi terhadap peradaban dunia.",
      },
    ],
  },
  {
    category: "Mata Kuliah Inti",
    courses: [
      {
        id: "inti-1",
        title: "Transformasi Spiritualitas Pelayan Gereja (3 SKS)",
        content:
          "Menekankan perjalanan dan transformasi spiritualitas pelayan gereja (<em>spiritual journey and renewal</em>) beserta implikasinya dalam konteks pelayanan gereja. Studi ini mengarahkan pada pembentukan kedewasaan spiritual yang utuh dan bagaimana mengalami pembaharuan spiritual secara berkelanjutan sebagai fondasi pelayanan yang tulus dan efektif.",
      },
      {
        id: "inti-2",
        title: "Pemuridan Intensional (2 SKS)",
        content:
          "Mata kuliah ini mempelajari fondasi Alkitab pelayanan pemuridan intensional, prinsip pembimbingan pemuridan intensional melalui kelompok kecil, serta kurikulum pelayanan pemuridan intensional di gereja, agar mahasiswa mampu merancang dan memimpin program pemuridan yang transformatif.",
      },
      {
        id: "inti-3",
        title: "Misi Integral Gereja (3 SKS)",
        content:
          "Mata kuliah Misi Integral dimaksudkan agar peserta kuliah memiliki kerangka teologis yang solid untuk dapat mengembangkan misi integral dalam pelayanan gereja di tengah masyarakat dengan memberdayakan segenap potensi yang dimiliki oleh jemaat dalam kehidupan sehari-hari di dunia pelayanan.",
      },
      {
        id: "inti-4",
        title: "Kepemimpinan Transformasional Pelayan Gereja (3 SKS)",
        content:
          "Mata kuliah ini merupakan studi isu-isu dan prinsip-prinsip kepemimpinan Kristen berdasarkan teologi-biblika guna menghasilkan pemimpin transformasional dalam mengeksplorasi, menganalisa dan merespon tantangan kepemimpinan di konteks pelayanan penggembalaan masa kini. Mahasiswa dibekali teori dan hasil penelitian terkini beserta implikasinya dalam kepemimpinan di gereja, serta analisis perjalanan formasi kepemimpinan berkelanjutan untuk menjadi pelayan yang efektif.",
      },
    ],
  },
  {
    category: "Mata Kuliah Konsentrasi",
    courses: [
      {
        id: "konsentrasi-1",
        title: "PL: Kajian Sejarah (3 SKS)",
        content:
          "Mata kuliah ini mengkaji kitab-kitab sejarah Perjanjian Lama (Yosua–Ester) dengan menelusuri perjalanan umat Allah dalam sejarah penebusan, termasuk tema kepemimpinan, ketaatan, kesetiaan perjanjian, dan kegagalan Israel. Mahasiswa diajak memahami relevansi kisah-kisah historis PL bagi pelayanan gereja dan kepemimpinan Kristen masa kini.",
      },
      {
        id: "konsentrasi-2",
        title: "PL: Puisi dan Sastra Nabi (3 SKS)",
        content:
          "Studi mendalam atas kitab-kitab syair (Ayub, Mazmur, Amsal, Pengkhotbah, Kidung Agung) dan kitab-kitab nabi (Yesaya–Maleakhi) dengan perhatian atas genre sastra, konteks historis, dan teologi nubuatan. Mahasiswa akan belajar mengeksplorasi dan mengkhotbahkan teks-teks PL yang kaya corak ini dalam pelayanan gereja.",
      },
      {
        id: "konsentrasi-3",
        title: "PB: Surat-Surat Paulus (3 SKS)",
        content:
          "Studi surat-surat Paulus dengan perhatian khusus atas latar belakang penulisan, teologi Pauline, dan tema-tema utama seperti anugerah, pembenaran, gereja, dan etika Kristen. Mahasiswa diharapkan mampu menafsirkan dan mengajarkan surat-surat Paulus secara kontekstual dalam pelayanan penggembalaan.",
      },
      {
        id: "konsentrasi-4",
        title: "PB: Surat Umum dan Wahyu (3 SKS)",
        content:
          "Studi surat-surat umum (Ibrani, Yakobus, 1–2 Petrus, 1–3 Yohanes, Yudas) dan Kitab Wahyu dengan perhatian atas genre, konteks penganiayaan, teologi pengharapan eskatologis, dan implikasinya bagi ketahanan iman jemaat serta pelayanan gereja di tengah tantangan zaman.",
      },
      {
        id: "konsentrasi-5",
        title: "Homiletika (3 SKS)",
        content:
          "Mata kuliah ini dirancang untuk mempelajari ilmu pembentukan khotbah ekspositori melalui pemahaman teori persiapan, penggalian teks, struktur khotbah yang efektif, dan cara penyampaian pada konteks kontemporer. Mahasiswa diharapkan mampu menganalisa dan membentuk khotbah ekspositori, serta diberi kesempatan untuk menyampaikannya secara langsung di kelas.",
      },
      {
        id: "konsentrasi-6",
        title: "Teologi dan Praktik Ibadah (3 SKS)",
        content:
          "Mata kuliah ini membahas prinsip, dasar dan isu terkait ibadah gereja yang meliputi sejarah liturgi, dasar biblika dan prinsip-prinsip merancang liturgi ibadah yang transformatif baik <em>onsite</em> maupun <em>online</em>. Kelas ini disertai praktik merancang liturgi ibadah gerejawi berdasarkan teori dan langkah efektif agar mahasiswa mampu menciptakan ibadah yang membangun jemaat.",
      },
      {
        id: "konsentrasi-7",
        title: "Bahasa Ibrani (2 SKS)",
        content:
          "Pengantar bahasa Ibrani Alkitabiah yang membekali mahasiswa dengan kemampuan membaca dan memahami teks Perjanjian Lama dalam bahasa aslinya. Mahasiswa akan mempelajari dasar-dasar tata bahasa Ibrani, sistem alfabet, vokal, dan morfologi dasar, sebagai bekal untuk studi eksegesis PL yang lebih mendalam.",
      },
      {
        id: "konsentrasi-8",
        title: "Bahasa Yunani (2 SKS)",
        content:
          "Pengantar bahasa Yunani Koine Alkitabiah yang membekali mahasiswa dengan kemampuan membaca dan memahami teks Perjanjian Baru dalam bahasa aslinya. Mahasiswa akan mempelajari dasar-dasar tata bahasa Yunani, alfabet, morfologi, dan sintaks dasar, sebagai bekal untuk studi eksegesis PB yang lebih mendalam.",
      },
    ],
  },
  {
    category: "Tugas Akhir & Mentoring",
    courses: [
      {
        id: "akhir-1",
        title: "Mentoring Akademik (1 SKS)",
        content:
          "Mata kuliah ini bertujuan membentuk kehidupan rohani dan karakter pelayanan mahasiswa melalui proses pendampingan akademik yang terarah. Mahasiswa akan dibimbing secara pribadi oleh dosen pembimbing dalam pertemuan bulanan, dengan fokus pada pertumbuhan iman, pembentukan karakter pelayan, refleksi panggilan, dan integrasi antara kehidupan pribadi dan pelayanan gerejawi.",
      },
      {
        id: "akhir-2",
        title: "Penulisan Akademik (3 SKS)",
        content:
          "Mata kuliah ini membekali mahasiswa dengan keterampilan penulisan karya ilmiah teologis yang memenuhi standar akademik. Mahasiswa akan dibimbing dalam proses penelitian, penyusunan argumen teologis yang koheren, penggunaan sumber primer dan sekunder, serta penulisan dengan metodologi yang tepat sebagai persiapan untuk menyelesaikan tugas akhir.",
      },
      {
        id: "akhir-3",
        title: "Praktik Pelayanan (6 SKS)",
        content:
          "Sebuah proyek pelayanan yang diimplementasikan langsung dalam konteks gereja atau lembaga pelayanan mahasiswa. Mahasiswa merancang dan menjalankan suatu program atau inisiatif pelayanan yang konkret, di bawah bimbingan dosen pembimbing, dengan memanfaatkan ilmu teologis dan keterampilan pelayanan yang diperoleh selama studi.",
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
    <div
      className="border-b last:border-b-0"
      style={{ borderColor: "#E8ECF2" }}
    >
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

export function MagisterMinistriTeologiPelayananGerejawiAccordion() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(
    "biblika-1",
  );

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
