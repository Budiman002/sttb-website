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
    category: "Mata Kuliah Umum",
    courses: [
      {
        id: "umum-1",
        title: "Pancasila dan Kewarganegaraan (2 SKS)",
        content:
          "Mata kuliah ini membentuk pemikiran kebangsaan yang didorong iman Kristen dalam bidang kewiraan dan membahas Pancasila sebagai falsafah hidup, asas kehidupan, bermasyarakat, berbangsa dan bernegara. Selain itu, dibahas pula Pancasila sebagai ideologi negara Indonesia, hubungannya dengan pengamalan Pancasila dalam penghayatan iman Kristen dan pelayanan di Indonesia.",
      },
      {
        id: "umum-2",
        title: "Bahasa Indonesia (2 SKS)",
        content:
          "Mata kuliah ini memperlengkapi mahasiswa dengan keterampilan membaca, mencakup pengenalan ide pokok (finding main idea), skimming, scanning, summarizing, dan pada akhirnya mahasiswa diharapkan untuk dapat memahami isi sebuah teks (reading comprehension).",
      },
      {
        id: "umum-3",
        title: "Bahasa Inggris Teologi (3 SKS)",
        content:
          "Mata kuliah ini mempelajari tata bahasa Inggris dasar serta penerapannya pada bacaan dan kosa kata teologis yang sederhana, melalui penguatan empat keterampilan dasar bahasa, yaitu mendengar, berbicara, membaca dan menulis.",
      },
      {
        id: "umum-4",
        title: "Metode Berpikir (2 SKS)",
        content:
          "Mata kuliah ini mempelajari konsep dasar logika dan berpikir kritis sesuai bidang keilmuannya, sehingga mahasiswa mampu menghasilkan pemikiran kritis berupa argumentasi atau gagasan berdasarkan data atau informasi yang akurat, serta mampu mengomunikasikan pendapat atau gagasan melalui media cetak dan sosial.",
      },
      {
        id: "umum-5",
        title: "Psikologi Perkembangan Masa Hidup (2 SKS)",
        content:
          "Mata kuliah ini mempelajari konsep-konsep dasar psikologi perkembangan, termasuk di dalamnya pengertian psikologi perkembangan, pembagian rentang masa hidup dan tugas perkembangan, pengenalan teori psikologi perkembangan, kontribusi psikologi perkembangan bagi pelayanan (baik dalam konteks gereja maupun non gereja).",
      },
      {
        id: "umum-6",
        title: "Metode Penelitian dan Penulisan (3 SKS)",
        content:
          "Mata kuliah ini memberikan dasar-dasar pemahaman dan keterampilan praktis untuk melakukan penelitian khususnya penelitian literatur. Pembelajaran akan difokuskan pada beberapa hal dasar termasuk bagaimana merumuskan masalah penelitian, menggali sumber-sumber pustaka, dan melakukan kajian pustaka dalam menyusun proposal.",
      },
    ],
  },
  {
    category: "Mata Kuliah Biblika",
    courses: [
      {
        id: "biblika-1",
        title: "Pengantar Alkitab dan Teologi Biblika (3 SKS)",
        content:
          "Studi komprehensif yang mempelajari asal-usul sejarah dan perkembangan pemikiran religius yang utama dari Perjanjian Lama dan Perjanjian Baru serta hubungannya dengan periode Musa, para nabi, kitab-kitab Hikmat dan para rasul. Di dalamnya juga dibahas tentang pendekatan dan kecenderungan kekinian dalam mengartikan teologi Perjanjian Lama dan Perjanjian Baru, serta tentang hubungan antara Perjanjian Lama dan Perjanjian Baru.",
      },
      {
        id: "biblika-2",
        title: "Studi Perjanjian Lama 1: Kitab Taurat (3 SKS)",
        content:
          "Studi komprehensif terhadap kitab Kejadian sampai Ulangan. Penekanan secara khusus diberikan pada aspek historis, teologis, hermeneutis, eksegesis dan aplikasi praktis dari studi ini dalam kehidupan rohani dan pelayanan.",
      },
      {
        id: "biblika-3",
        title: "Studi Perjanjian Lama 2: Kitab Sejarah (3 SKS)",
        content:
          "Studi komprehensif terhadap kitab Hakim-Hakim sampai Ester. Penekanan secara khusus diberikan pada aspek historis, teologis, hermeneutis, eksegesis dan aplikasi praktis dari studi ini dalam kehidupan rohani dan pelayanan.",
      },
      {
        id: "biblika-4",
        title: "Studi Perjanjian Lama 3: Kitab Sastra (3 SKS)",
        content:
          "Studi komprehensif terhadap kitab Ayub, Mazmur, Amsal, Pengkhotbah, Kidung Agung. Penekanan secara khusus diberikan pada aspek historis, teologis, hermeneutis, eksegesis dan aplikasi praktis dari studi ini dalam kehidupan rohani dan pelayanan.",
      },
      {
        id: "biblika-5",
        title: "Studi Perjanjian Lama 4: Kitab Nabi-Nabi (3 SKS)",
        content:
          "Studi komprehensif terhadap kitab Nabi Besar dan Nabi Kecil. Penekanan secara khusus diberikan pada aspek historis, teologis, hermeneutis, eksegesis dan aplikasi praktis dari studi ini dalam kehidupan rohani dan pelayanan.",
      },
      {
        id: "biblika-6",
        title: "Studi Perjanjian Baru 1: Kitab Injil (3 SKS)",
        content:
          "Studi komprehensif terhadap Kitab-Kitab Injil. Penekanan diberikan pada aspek historis, teologis, eksegesis, keunikan masing-masing kitab, dan aplikasi praktis bagi kehidupan rohani dan pelayanan.",
      },
      {
        id: "biblika-7",
        title:
          "Studi Perjanjian Baru 2: Kisah Para Rasul dan Surat Paulus (3 SKS)",
        content:
          "Studi komprehensif terhadap Kitab Kisah Para Rasul dan Surat-Surat Paulus. Penekanan diberikan pada aspek historis, teologis, eksegesis, keunikan masing-masing kitab, dan aplikasi praktis bagi kehidupan rohani dan pelayanan.",
      },
      {
        id: "biblika-8",
        title: "Studi Perjanjian Baru 3: Surat-Surat Umum dan Wahyu (3 SKS)",
        content:
          "Studi komprehensif terhadap Surat-Surat Umum dan Kitab Wahyu. Penekanan diberikan pada aspek historis, teologis, eksegesis, keunikan masing-masing kitab, dan aplikasi praktis bagi kehidupan rohani dan pelayanan.",
      },
      {
        id: "biblika-9",
        title: "Bahasa Ibrani (3 SKS)",
        content:
          "Mata kuliah yang mempelajari elemen bahasa Ibrani Alkitab Perjanjian Lama dari segi pengenalan huruf, perbendaharaan kata, tata bahasa, penerjemahan dan latihan membaca, serta penekanan khusus kepada kemampuan untuk dapat menerjemahkan kitab PL dalam bahasa Ibrani untuk persiapan menafsir teks PL.",
      },
      {
        id: "biblika-10",
        title: "Bahasa Yunani (2 SKS)",
        content:
          "Mata kuliah yang mempelajari elemen bahasa Yunani Alkitab Perjanjian Baru dari segi pengenalan huruf, perbendaharaan kata, tata bahasa, penerjemahan dan latihan membaca.",
      },
      {
        id: "biblika-11",
        title: "Bahasa Yunani Lanjutan (2 SKS)",
        content:
          "Mata kuliah yang mempelajari dasar-dasar tata bahasa Yunani Alkitab dalam hal morfologi, fonologi, sintaksis, perbendaharaan kata dan latihan membaca. Penekanan secara khusus pada kemampuan untuk dapat menerjemahkan kitab Perjanjian Baru dalam bahasa Yunani untuk persiapan menafsir Perjanjian Baru.",
      },
      {
        id: "biblika-12",
        title: "Hermeneutika Biblika (3 SKS)",
        content:
          "Mata kuliah yang memperlengkapi mahasiswa dengan ilmu penafsiran Alkitab yang mencakup definisi, sejarah, prinsip, metode dan langkah-langkah dalam menafsirkan Alkitab, serta latihan menerapkan metode yang tepat dengan menggunakan bagian tertentu dari Alkitab. Interaksi dan kritik terhadap metode historis-kritis juga diberikan.",
      },
    ],
  },
  {
    category: "Mata Kuliah Teologi",
    courses: [
      {
        id: "teologi-1",
        title: "Prolegomena dan Doktrin Alkitab (3 SKS)",
        content:
          "Studi sistematis yang mempelajari pengantar teologi yang membahas mengenai pengertian teologi, metode teologia, dogmatika, penyataan Allah, dan sistem-sistem teologi, serta prinsip-prinsip Alkitab sebagai Firman Allah (bibliologi) yang mencakup doktrin-doktrin: revelasi, inspirasi, kanonisasi, translasi, interpretasi dan komunikasi termasuk isu ineransi Alkitab dari perspektif Injili Reformed.",
      },
      {
        id: "teologi-2",
        title: "Doktrin Allah, Penciptaan dan Manusia (3 SKS)",
        content:
          "Studi sistematis yang mempelajari tentang pribadi, atribut, serta karya-karya Allah, konsep-konsep ketritunggalan, providensi, keputusan (predestinasi), doktrin penciptaan, asal usul kehidupan dan alam semesta, natur manusia sebagai gambar dan rupa Allah. Termasuk argumen keberadaan Allah serta membandingkan konsep tentang Allah dari agama-agama lain dan hal-hal lain yang relevan untuk diaplikasikan dalam kehidupan rohani dan pelayanan.",
      },
      {
        id: "teologi-3",
        title: "Doktrin Kristus, Dosa dan Keselamatan (3 SKS)",
        content:
          "Studi sistematis yang mempelajari pribadi, natur dan karya Kristus, dan tentang doktrin dosa serta natur manusia akibat kejatuhan, doktrin keselamatan dalam perspektif Reformed, permasalahan kontemporer tentang kristologi dan soteriologi untuk diaplikasikan dalam kehidupan rohani dan pelayanan.",
      },
      {
        id: "teologi-4",
        title: "Doktrin Roh Kudus dan Akhir Zaman (3 SKS)",
        content:
          "Studi sistematis yang mempelajari tentang pribadi, karya dan karunia-karunia Roh Kudus, serta studi doktrinal yang mempelajari tentang akhir zaman dalam perspektif Reformed, termasuk mempelajari secara kritis pandangan-pandangan yang ada dalam sejarah eskatologi untuk diaplikasikan dalam kehidupan rohani dan pelayanan.",
      },
      {
        id: "teologi-5",
        title: "Doktrin Gereja (3 SKS)",
        content:
          "Studi sistematis yang mempelajari tentang esensi dan natur gereja, misi dan pelayanan gereja, sistem dan organisasi gereja menurut Alkitab, serta studi tentang isu-isu kontemporer gereja urban (gereja digital, sakramen virtual, misi integral gereja, dll.).",
      },
      {
        id: "teologi-6",
        title: "Etika Kristen (3 SKS)",
        content:
          "Mata kuliah yang mempelajari prinsip-prinsip dan nilai-nilai Alkitab Perjanjian Lama dan Baru sebagai dasar pemikiran dan tindakan dalam tiap aspek kehidupan manusia modern, serta memberikan solusi-solusi teologis.",
      },
      {
        id: "teologi-7",
        title: "Apologetika (2 SKS)",
        content:
          "Mata kuliah yang memperlengkapi mahasiswa untuk mengerti dan menjawab sebagian pertanyaan-pertanyaan kritis yang sering ditanyakan perihal keabsahan iman Kristen, serta menolong mahasiswa memiliki pola pikir dan pembawaan yang tepat untuk menanggapi orang yang belum percaya ketika melakukan penginjilan.",
      },
      {
        id: "teologi-8",
        title: "Teologi Reformed dan Injili (3 SKS)",
        content:
          "Mata kuliah yang memperlengkapi mahasiswa untuk mengerti sejarah dan inti teologi reformasi dengan menekankan relevansi keunikan berita Injil yang lintas waktu dan budaya.",
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
        <span>{title}</span>
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
        >
          {content}
        </div>
      )}
    </div>
  );
}

export function SarjanaTeologiAccordion() {
  const [openAccordion, setOpenAccordion] = useState<string | null>("umum-1");

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
              fontSize: "28px",
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
