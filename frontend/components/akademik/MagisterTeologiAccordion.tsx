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
    category: "Mata Kuliah Inti",
    courses: [
      {
        id: "inti-1",
        title:
          "Pandangan Reformed tentang Peran Gereja Dalam Transformasi Masyarakat (3 SKS)",
        content:
          "Kuliah ini bertujuan untuk membekali mahasiswa dengan pemahaman mendalam tentang bagaimana prinsip-prinsip Teologi Reformed dapat diaplikasikan dalam transformasi sosial, ekonomi, dan budaya masyarakat. Dengan menggabungkan teori, studi sejarah, dan aplikasi praktis, mahasiswa diharapkan mampu mengembangkan strategi pelayanan gereja yang efektif dan relevan untuk konteks masyarakat modern. Mata kuliah ini bertujuan untuk mempersiapkan pemimpin gereja yang mampu membawa dampak positif dan transformatif di tengah masyarakat.",
      },
      {
        id: "inti-2",
        title: "Gereja Perkotaan (3 SKS)",
        content:
          "Mata kuliah Gereja Perkotaan mengkaji peran, tantangan, dan peluang gereja dalam konteks perkotaan. Mata kuliah ini akan membahas dinamika sosial, ekonomi, dan budaya kota serta bagaimana gereja dapat merespons secara efektif. Fokus utama adalah pada pengembangan strategi misi dan pelayanan yang relevan dengan kebutuhan masyarakat perkotaan serta peran gereja dalam transformasi sosial dan spiritual di kota.",
      },
      {
        id: "inti-3",
        title: "Sosiologi dan Misi Perkotaan (3 SKS)",
        content:
          "Mata kuliah ini bertujuan untuk membekali mahasiswa dengan pemahaman mendalam tentang naratif besar Alkitab dan relevansinya untuk misi di lingkungan perkotaan. Dengan menggabungkan refleksi teologis dan aplikasi praktis, mahasiswa diharapkan mampu merancang dan menerapkan strategi misi yang efektif dan transformatif dalam konteks perkotaan modern.",
      },
      {
        id: "inti-4",
        title:
          "Sejarah Gereja dalam Perspektif Transformasi Sosial Budaya (3 SKS)",
        content:
          "Mata kuliah ini membahas perjalanan sejarah gereja dari masa awal hingga kontemporer dengan menyoroti peran dan dampaknya dalam perubahan sosial dan budaya. Mahasiswa diajak untuk melihat bagaimana gereja merespons dan turut membentuk dinamika masyarakat dalam berbagai konteks sejarah, serta merefleksikan relevansinya bagi misi gereja masa kini.",
      },
      {
        id: "inti-5",
        title: "Kehidupan Spiritual Seorang Gembala (3 SKS)",
        content:
          "Mata kuliah ini bertujuan untuk membekali pemimpin gereja dengan keterampilan dan kebiasaan spiritual yang diperlukan untuk melayani secara efektif dalam konteks perkotaan. Dengan memahami tantangan dan dinamika khusus perkotaan, serta mengembangkan strategi praktis untuk menjaga kesehatan rohani, emosional, dan fisik, mahasiswa diharapkan mampu menjadi gembala yang kuat dan berpengaruh dalam pelayanan mereka.",
      },
    ],
  },
  {
    category: "Mata Kuliah Konsentrasi",
    courses: [
      {
        id: "konsentrasi-1",
        title: "Homiletika Lanjutan (3 SKS)",
        content:
          "Kuliah ini memberikan mahasiswa dengan pemahaman teoritis dan keterampilan praktis agar mahasiswa dapat berkhotbah dengan struktur dengan jelas, disajikan dengan baik dan relevan dari genre Alkitab yang berbeda. Dengan membahas berbagai masalah homiletik, kuliah ini berusaha untuk menekankan pentingnya pelayanan khotbah yang alkitabiah. Melalui kelas ini mahasiswa akan memiliki kesempatan untuk praktek khotbah dan dievaluasi oleh dosen dan rekan mahasiswa lainnya.",
      },
      {
        id: "konsentrasi-2",
        title: "Pengembangan Gereja (3 SKS)",
        content:
          "Bertujuan untuk membekali mahasiswa dengan pemahaman dan keterampilan yang diperlukan untuk mengembangkan gereja yang relevan dan efektif di lingkungan perkotaan. Dengan menggabungkan teori, studi kasus, dan praktikum lapangan, mahasiswa diharapkan mampu merancang dan mengimplementasikan strategi pengembangan gereja yang kontekstual dan berdampak positif bagi transformasi sosial dan spiritual di kota.",
      },
      {
        id: "konsentrasi-3",
        title: "Kepemimpinan dan Manajemen Perubahan (3 SKS)",
        content:
          "Mata kuliah Kepemimpinan dan Manajemen Perubahan bertujuan untuk memberikan pemahaman mendalam tentang konsep, teori, dan praktik kepemimpinan serta manajemen perubahan dalam organisasi. Mahasiswa akan mempelajari bagaimana seorang pemimpin dapat mengarahkan timnya dan mengelola perubahan yang terjadi untuk mencapai tujuan organisasi secara efektif.",
      },
      {
        id: "konsentrasi-4",
        title: "Isu-Isu Kontemporer Etika Kristen (3 SKS)",
        content:
          "Mata kuliah Etika Kristen Kontemporer bertujuan untuk memberikan pemahaman mendalam tentang prinsip-prinsip etika Kristen dan bagaimana prinsip-prinsip tersebut diterapkan dalam konteks isu-isu kontemporer. Mata kuliah ini membahas berbagai topik etika yang relevan dengan tantangan dan dinamika sosial saat ini, dengan fokus khusus pada penerapan nilai-nilai Kristen dalam pengambilan keputusan etis.",
      },
      {
        id: "konsentrasi-5",
        title: "Pelayanan Antar Generasi (3 SKS)",
        content:
          "Mata kuliah ini bertujuan untuk memberikan pemahaman yang mendalam tentang bagaimana membangun hubungan yang kuat dan inklusif antar generasi dalam konteks pelayanan gerejawi dan masyarakat. Dengan merancang dan melaksanakan program-program pelayanan antar generasi yang efektif, mahasiswa diharapkan dapat menjadi agen perubahan yang mempromosikan solidaritas, pengertian, dan kerjasama lintas generasi dalam gereja dan masyarakat.",
      },
      {
        id: "konsentrasi-6",
        title: "Konseling Pastoral (3 SKS)",
        content:
          "Mata kuliah ini bertujuan untuk mempersiapkan mahasiswa dengan pengetahuan, keterampilan, dan pemahaman etika yang diperlukan untuk melakukan konseling pastoral efektif dalam konteks pelayanan gereja dan masyarakat. Dengan memahami teori-teori konseling, mengembangkan keterampilan praktis, dan mempertimbangkan nilai-nilai agama, mahasiswa diharapkan dapat menjadi konselor pastoral yang kompeten dan berdedikasi dalam membantu individu mengatasi masalah dan krisis kehidupan mereka.",
      },
    ],
  },
  {
    category: "Mata Kuliah Elektif",
    courses: [
      {
        id: "elektif-1",
        title: "Elektif 1: Pelayanan Kategorial (3 SKS)",
        content:
          "Mahasiswa dapat memilih salah satu mata kuliah pelayanan kategorial yang ditawarkan di program studi lain.",
      },
      {
        id: "elektif-2",
        title: "Elektif 2: Pelayanan Kategorial (3 SKS)",
        content:
          "Mahasiswa dapat memilih salah satu mata kuliah pelayanan kategorial yang ditawarkan di program studi lain.",
      },
    ],
  },
  {
    category: "Penelitian & Tugas Akhir",
    courses: [
      {
        id: "penelitian-1",
        title: "Penulisan Akademik (3 SKS)",
        content:
          "Mata kuliah ini bertujuan untuk membekali mahasiswa dengan keterampilan penulisan akademik yang efektif dan mempersiapkan mereka untuk menghasilkan karya tulis yang berkualitas tinggi dalam konteks akademik dan profesional. Dengan memahami prinsip-prinsip dasar penulisan akademik, mahasiswa diharapkan dapat menjadi penulis yang kompeten dan dapat berkontribusi dalam diskusi ilmiah dan intelektual di berbagai bidang studi.",
      },
      {
        id: "penelitian-2",
        title: "Riset Praktis Dalam Pelayanan Pastoral (Kualitatif) (3 SKS)",
        content:
          "Mata kuliah ini bertujuan untuk mempersiapkan mahasiswa dengan keterampilan dan pengetahuan dalam melakukan penelitian kualitatif yang relevan dan berdampak dalam konteks pelayanan pastoral. Dengan memahami prinsip-prinsip dasar dan menerapkan metodologi penelitian kualitatif, mahasiswa diharapkan dapat menjadi praktisi pastoral yang lebih terampil dalam memahami dan merespons kebutuhan individu dan komunitas gerejawi mereka.",
      },
      {
        id: "penelitian-3",
        title: "Praktik Pelayanan Weekend (3 SKS)",
        content:
          "Mata kuliah ini bertujuan untuk memberikan pengalaman praktis kepada mahasiswa dalam konteks pelayanan gerejawi selama akhir pekan. Dengan terlibat langsung dalam berbagai kegiatan gerejawi, mahasiswa diharapkan dapat memperluas pemahaman mereka tentang dinamika gereja dan mengembangkan keterampilan pelayanan yang diperlukan untuk bekerja dalam lingkungan gerejawi.",
      },
      {
        id: "penelitian-4",
        title: "Praktik Pelayanan 6 Bulan / Tugas Akhir Penelitian (6 SKS)",
        content:
          "Mata kuliah Praktek Pelayanan 6 Bulan/Tugas Akhir Penelitian adalah bagian integral dari program studi yang dirancang untuk memberikan pengalaman praktis atau penelitian yang mendalam kepada mahasiswa dalam bidang pelayanan mereka. Selama periode enam bulan, mahasiswa akan terlibat dalam kegiatan praktikum pelayanan di lapangan atau melakukan penelitian independen untuk menyusun tugas akhir mereka di bawah bimbingan seorang pembimbing.",
      },
    ],
  },
  {
    category: "Mentoring (Per Semester)",
    courses: [
      {
        id: "mentoring-1",
        title: "Mentoring Akademik (1 SKS)",
        content:
          "Mata kuliah ini diadakan setiap awal semester untuk memberikan mahasiswa gambaran mengenai kegiatan perkuliahan di semester tersebut.",
      },
      {
        id: "mentoring-2",
        title: "Mentoring Spiritual I-Learn (1 SKS)",
        content:
          "Mata kuliah ini dibuat dalam bentuk persekutuan mahasiswa dan akan dilaksanakan sebanyak dua kali setiap semesternya.",
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
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </div>
  );
}

export function MagisterTeologiAccordion() {
  const [openAccordion, setOpenAccordion] = useState<string | null>("inti-1");

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
