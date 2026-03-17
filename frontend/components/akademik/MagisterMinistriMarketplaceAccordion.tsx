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
        title: "Fondasi Perjanjian Lama (3 SKS)",
        content:
          "Studi kitab-kitab Perjanjian Lama dengan perhatian khusus atas latar belakang sejarah dan budaya, penulis, pembaca pertama, dan tema-tema utama kitab-kitab Perjanjian Lama, sebagai landasan bagi pengembangan sudut pandang Alkitabiah (biblical worldview) dalam menyikapi berbagai tantangan dalam kehidupan Kristen konteks dunia kerja.",
      },
      {
        id: "biblika-2",
        title: "Fondasi Perjanjian Baru (3 SKS)",
        content:
          "Studi kitab-kitab Perjanjian Baru dengan perhatian khusus atas latar belakang sejarah dan budaya, penulis, pembaca pertama, tema utama, dan teologi dari kitab-kitab Perjanjian Baru, sebagai landasan bagi pengembangan sudut pandang Alkitabiah (<em>biblical worldview</em>) dalam menyikapi berbagai tantangan dalam kehidupan Kristen konteks dunia kerja.",
      },
      {
        id: "biblika-3",
        title: "Hermeneutika (3 SKS)",
        content:
          "Studi tentang prinsip-prinsip penafsiran Alkitab yang mencakup: <ol><li>Motivasi dan wawasan dalam mempelajari Alkitab</li><li>Prinsip-prinsip mempelajari Alkitab secara induktif dengan metode K.O.M.A. (Konteks, Observasi, Makna, Aplikasi)</li><li>Latihan keterampilan mempelajari Alkitab dengan metode K.O.M.A. dalam berbagai genre Alkitab.</li></ol>Melaluinya diharapkan mahasiswa memiliki perspektif <em>biblical-contextual</em> sebagai bekal dalam keterlibatan misi dunia kerja.",
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
          "Mata kuliah ini merupakan pengantar kepada teologi sistematika yang mempelajari intisari dan doktrin dasar kekristenan dalam kerangka metanarasi Alkitab tentang penciptaan yang mencakup: Doktrin Allah, dan Alkitab; serta implikasi doktrin-doktrin tersebut dalam konteks dunia kerja masa kini.",
      },
      {
        id: "sistematika-2",
        title: "Kristus dan Keselamatan (3 SKS)",
        content:
          "Mata kuliah ini membahas teologi sistematika yang mempelajari intisari dan doktrin dasar kekristenan dalam kerangka metanarasi Alkitab tentang karya keselamatan yang mencakup: Doktrin manusia, Dosa dan Keselamatan; serta implikasi doktrin-doktrin tersebut dalam konteks dunia kerja masa kini.",
      },
      {
        id: "sistematika-3",
        title: "Roh Kudus dan Gereja (3 SKS)",
        content:
          "Mata kuliah ini membahas teologi sistematika yang mempelajari intisari dan doktrin dasar kekristenan dalam kerangka metanarasi Alkitab yang mencakup: Doktrin Roh Kudus, Gereja dan Akhir Zaman; serta implikasi doktrin-doktrin tersebut dalam konteks dunia kerja masa kini.",
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
        title: "Spiritualitas Dunia Kerja (3 SKS)",
        content:
          "Mata kuliah ini dimaksudkan agar peserta kuliah memiliki kerangka teologis mengenai spiritualitas Kristen yang dapat diterapkan dalam keseharian di dunia kerja sebagai bagian dari pekerjaan Allah di tengah dunia. Materi pembelajaran meliputi tiga arah spiritualitas Kristen yang mempengaruhi perjalanan transformasional seseorang untuk ia hidup menjadi seperti Kristus serta implementasinya dalam dunia kerja.",
      },
      {
        id: "inti-2",
        title: "Pemuridan Dunia Kerja (3 SKS)",
        content:
          "Mata kuliah ini membekali mahasiswa dalam tiga bagian, yaitu: <ol><li>Fondasi Alkitab dan Esensi Pemuridan</li><li>Materi dan Model Pemuridan Bagi Dunia Kerja</li><li>Proses dan Keterampilan Mentoring</li></ol>Pembelajaran ini bertujuan agar mahasiswa berperan aktif untuk melakukan pemuridan, mentoring di dunia kerja dan gereja.",
      },
      {
        id: "inti-3",
        title: "Misi Integral Dunia Kerja (3 SKS)",
        content:
          "Gereja di perkotaan seringkali memikirkan pelayanan misi jauh ke luar pulau atau di daerah terpencil. Sedangkan di kota sendiri ada begitu banyak peluang dan kesempatan untuk menjalankan misi. Kuliah ini dirancang untuk memperkenalkan dasar biblika bagi misi integral dunia kerja perkotaan. Selain itu diperkenalkan juga tren dalam riset misi konteks urban yang akan diimplementasikan dalam dunia kerja dan gereja.",
      },
      {
        id: "inti-4",
        title: "Kepemimpinan Transformasional Dunia Kerja (3 SKS)",
        content:
          "Mata kuliah ini merupakan studi isu-isu dan prinsip-prinsip kepemimpinan Kristen berdasarkan teologi-biblika guna menghasilkan pemimpin transformasional dalam mengeksplorasi, menganalisa dan merespon tantangan kepemimpinan di konteks dunia kerja perkotaan. Melalui kuliah ini juga mahasiswa akan dibentuk menjadi pemimpin Kristen yang memiliki kemampuan dan keterampilan bertindak sebagai pemimpin yang responsif dan transformatif. Mahasiswa dibekali teori dan hasil penelitian terkini beserta implikasinya dalam kepemimpinan di dalam segala aspek untuk menjadi pemimpin yang efektif.",
      },
    ],
  },
  {
    category: "Mata Kuliah Konsentrasi",
    courses: [
      {
        id: "konsentrasi-1",
        title: "Teologi Kerja (3 SKS)",
        content:
          "Mata kuliah Teologi Kerja dalam konteks profesional dimaksudkan agar peserta kuliah memiliki kerangka teologis yang solid untuk dapat menghayati pekerjaan sehari-hari sebagai profesional atau pengusaha Kristen sebagai bagian dari pekerjaan Allah di tengah dunia. Materi pembelajaran meliputi teologi kerja dan misi umat Allah melalui dunia kerja.",
      },
      {
        id: "konsentrasi-2",
        title: "Etika Kerja (3 SKS)",
        content:
          "Mata kuliah ini terdiri dari dua bagian. Bagian pertama akan membahas beberapa konsep dasar di dalam etika, dengan sorotan khusus pada dunia kerja, dimaksudkan agar para peserta kuliah memiliki kerangka berpikir yang holistik untuk bersikap dan mengambil keputusan etis yang bertanggung jawab sebagai seorang murid Kristus di konteks pekerjaannya. Bagian kedua bersifat aplikatif yang akan menyoroti beberapa isu etis di dunia kerja dan meninjaunya berdasarkan kerangka berpikir <em>biblical-contextual</em>.",
      },
    ],
  },
  {
    category: "Mata Kuliah Pilihan (Elektif)",
    courses: [
      {
        id: "elektif-0",
        title: "Pilih 2 Mata Kuliah (Tiap mata kuliah berbobot 3 SKS)",
        content:
          "Mahasiswa diwajibkan memilih dua mata kuliah dari daftar di bawah ini.",
      },
      {
        id: "elektif-1",
        title: "Kesehatan Mental Dalam Dunia Kerja (3 SKS)",
        content:
          "Mata kuliah ini membahas pentingnya kesehatan mental dalam konteks dunia kerja yang dinamis dan penuh tekanan. Mahasiswa akan mempelajari faktor-faktor yang memengaruhi kesejahteraan psikologis di tempat kerja, seperti stres, burnout, konflik relasi, serta keseimbangan antara kehidupan pribadi dan profesional.",
      },
      {
        id: "elektif-2",
        title: "Konseling Dasar Untuk Dunia Kerja (3 SKS)",
        content:
          "Mata kuliah ini mempelajari tentang konseling dasar untuk menangani persoalan-persoalan yang umum terjadi di dunia kerja yang berkaitan dengan hal-hal psikologis. Mahasiswa dibekali keterampilan dasar dalam melakukan konseling, diawali dari mengenal diri, lalu menumbuhkan kehidupan diri sendiri yang sehat secara emosi dan spiritual.",
      },
      {
        id: "elektif-3",
        title: "Isu-Isu Kontemporer Dalam Dunia Kerja (3 SKS)",
        content:
          "Mata kuliah ini membahas topik-topik aktual dalam dunia kerja. Tujuannya untuk memberikan dasar analisis teologis terhadap berbagai isu yang ada, diharapkan lahirnya paradigma dan respon yang tepat untuk menyikapi isu dunia kerja tersebut.",
      },
      {
        id: "elektif-4",
        title: "Perspektif Misi Dunia (3 SKS)",
        content:
          "Mata kuliah pilihan ini diintegrasikan dari <em>Perspectives Study Program</em> (PSP) yang merupakan bagian dari pelayanan <em>Mission Ventures</em>. Kurikulum pemuridan dalam 15 pelajaran ini dirancang untuk membentuk wawasan dunia Kristen (<em>Christian worldview</em>) yang mengarahkan orang percaya untuk melihat bagaimana mereka terhubung dan berperan secara strategis dalam rencana dan tujuan global Tuhan bagi dunia ini.",
      },
      {
        id: "elektif-5",
        title: "Mata Kuliah Di Prodi S2 Lain (3 SKS)",
        content:
          "Mengambil mata kuliah yang ditawarkan pada program studi magister lain di STT Bandung.",
      },
    ],
  },
  {
    category: "Tugas Akhir & Mentoring",
    courses: [
      {
        id: "akhir-1",
        title: "Mentoring Profesi (3 SKS)",
        content:
          "Program ini dikembangkan dengan pendekatan mentoring dunia kerja, setiap mahasiswa akan dimentoring secara langsung oleh profesional, pebisnis Kristen yang terpilih. Tujuannya untuk membentuk sebuah cara pandang Kristen yang aplikatif dalam pekerjaannya yang sedang dijalani, mengintegrasikan pembelajaran akademis dengan dunia nyata. Mentor akan mendampingi setiap <em>mentee</em> selama 1-2 semester, bertemu setiap bulan melalui online atau onsite.",
      },
      {
        id: "akhir-2",
        title: "Proyek Tugas Akhir (6 SKS)",
        content:
          "Tugas akhir bersifat aplikatif yang diimplementasikan langsung dalam konteks dunia kerja atau pelayanan marketplace mahasiswa.",
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

export function MagisterMinistriMarketplaceAccordion() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(
    "biblika-1",
  );

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="space-y-12">
      {COURSE_CATEGORIES.map((category, categoryIdx) => (
        <div key={categoryIdx}>
          <h3
            className="mb-6 pb-3 border-b-2"
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
            className="rounded-xl overflow-hidden"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E8ECF2",
              boxShadow: "0 2px 12px rgba(0,39,107,0.06)",
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
