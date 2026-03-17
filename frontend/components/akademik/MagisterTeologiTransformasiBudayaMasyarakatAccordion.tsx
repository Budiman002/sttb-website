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
          "Bertujuan untuk membekali mahasiswa dengan pemahaman mendalam tentang bagaimana prinsip-prinsip Teologi <em>Reformed</em> dapat diaplikasikan dalam transformasi sosial, ekonomi, dan budaya masyarakat. Dengan menggabungkan teori, studi sejarah, dan aplikasi praktis, mahasiswa diharapkan mampu mengembangkan strategi pelayanan gereja yang efektif dan relevan untuk konteks masyarakat modern. Mata kuliah ini bertujuan untuk mempersiapkan pemimpin gereja yang mampu membawa dampak positif dan transformatif di tengah masyarakat.",
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
          "Sejarah Gereja Dalam Perspektif Transformasi Sosial Budaya (3 SKS)",
        content:
          "Mata kuliah ini membahas perjalanan sejarah gereja dari masa awal hingga kontemporer dengan menyoroti peran dan dampaknya dalam perubahan sosial dan budaya. Mahasiswa diajak untuk melihat bagaimana gereja merespons dan turut membentuk dinamika masyarakat dalam berbagai konteks sejarah, serta merefleksikan relevansinya bagi misi gereja masa kini.",
      },
      {
        id: "inti-5",
        title: "Kehidupan Spiritual Seorang Gembala (3 SKS)",
        content:
          "Bertujuan untuk membekali pemimpin gereja dengan keterampilan dan kebiasaan spiritual yang diperlukan untuk melayani secara efektif dalam konteks perkotaan. Dengan memahami tantangan dan dinamika khusus perkotaan, serta mengembangkan strategi praktis untuk menjaga kesehatan rohani, emosional, dan fisik, mahasiswa diharapkan mampu menjadi gembala yang kuat dan berpengaruh dalam pelayanan mereka.",
      },
    ],
  },
  {
    category: "Mata Kuliah Konsentrasi",
    courses: [
      {
        id: "konsentrasi-1",
        title: "Perspektif Teologi/Biblika Tentang Kemiskinan (3 SKS)",
        content:
          "Mengeksplorasi kemiskinan dari perspektif teologi dan biblika, mengkaji bagaimana Kitab Suci dan tradisi teologi Kristen memandang kemiskinan dan tanggung jawab sosial. Mahasiswa akan mempelajari teks-teks Alkitab yang relevan, dokumen gereja, dan pemikiran teologis yang menawarkan wawasan tentang penyebab, dampak, dan solusi terhadap kemiskinan. Mata kuliah ini juga akan mempertimbangkan implikasi praktis bagi pelayanan gerejawi dan tindakan sosial.",
      },
      {
        id: "konsentrasi-2",
        title:
          "Perspektif Teologi/Biblika Tentang Dunia Kerja Dan Perekonomian (3 SKS)",
        content:
          "Mengeksplorasi pandangan teologi dan biblika tentang dunia kerja dan perekonomian, mengkaji bagaimana prinsip-prinsip Alkitab dan pemikiran teologis dapat diterapkan dalam konteks kerja dan ekonomi modern. Mahasiswa akan mempelajari teks-teks Alkitab yang relevan, dokumen gereja, dan teori-teori ekonomi dari perspektif teologi Kristen, serta bagaimana menerapkan wawasan ini dalam kehidupan profesional dan etika ekonomi.",
      },
      {
        id: "konsentrasi-3",
        title: "Perspektif Teologi/Biblika Tentang Ekologi (3 SKS)",
        content:
          "Mengeksplorasi pandangan teologi dan biblika tentang ekologi, mengkaji bagaimana prinsip-prinsip Alkitab dan pemikiran teologis dapat diterapkan dalam konteks pemeliharaan lingkungan. Mahasiswa akan mempelajari teks-teks Alkitab yang relevan, dokumen gereja, dan teori-teori ekologi dari perspektif teologi Kristen, serta bagaimana menerapkan wawasan ini dalam tindakan nyata untuk menjaga dan memelihara lingkungan.",
      },
      {
        id: "konsentrasi-4",
        title:
          "Perspektif Teologi/Biblika Tentang Keadilan Dan Kekuasaan (3 SKS)",
        content:
          "Mengeksplorasi pandangan teologi dan biblika tentang konsep keadilan dan kekuasaan, serta bagaimana prinsip-prinsip Alkitab dan pemikiran teologis dapat diterapkan dalam konteks sosial, politik, dan ekonomi modern. Mahasiswa akan mempelajari teks-teks Alkitab yang relevan, dokumen gereja, dan teori-teori keadilan dari perspektif teologi Kristen, serta bagaimana menerapkan wawasan ini dalam tindakan nyata untuk mencapai keadilan sosial dan penggunaan kekuasaan yang etis.",
      },
      {
        id: "konsentrasi-5",
        title:
          "Perspektif Teologi/Biblika Tentang Kemajemukan/Pluralisme (3 SKS)",
        content:
          "Mengeksplorasi pandangan teologi dan biblika tentang kemajemukan dan pluralisme, mengkaji bagaimana prinsip-prinsip Alkitab dan pemikiran teologis dapat diterapkan dalam konteks masyarakat yang beragam. Mahasiswa akan mempelajari teks-teks Alkitab yang relevan, dokumen gereja, dan teori-teori pluralisme dari perspektif teologi Kristen, serta bagaimana menerapkan wawasan ini dalam upaya menciptakan dialog antaragama dan toleransi.",
      },
      {
        id: "konsentrasi-6",
        title: "Pelayanan Antar Generasi (3 SKS)",
        content:
          "Bertujuan untuk memberikan pemahaman yang mendalam tentang bagaimana membangun hubungan yang kuat dan inklusif antar generasi dalam konteks pelayanan gerejawi dan masyarakat. Dengan merancang dan melaksanakan program-program pelayanan antar generasi yang efektif, mahasiswa diharapkan dapat menjadi agen perubahan yang mempromosikan solidaritas, pengertian, dan kerjasama lintas generasi dalam gereja dan masyarakat.",
      },
    ],
  },
  {
    category: "Mata Kuliah Elektif",
    courses: [
      {
        id: "elektif-1",
        title: "Elektif 1 (3 SKS)",
        content:
          "Peserta didik dapat memilih salah satu mata kuliah integratif dengan mengikuti kuliah di prodi lain (pada jenjang magister) sesuai dengan minat yang akan memperkaya wawasan dan mengembangkan kompetensinya.",
      },
      {
        id: "elektif-2",
        title: "Elektif 2 (3 SKS)",
        content:
          "Peserta didik dapat memilih salah satu mata kuliah integratif dengan mengikuti kuliah di prodi lain (pada jenjang magister) sesuai dengan minat yang akan memperkaya wawasan dan mengembangkan kompetensinya.",
      },
    ],
  },
  {
    category: "Penelitian & Tugas Akhir",
    courses: [
      {
        id: "penelitian-1",
        title: "Penulisan Ilmiah Akademik (3 SKS)",
        content:
          "Kuliah ini merupakan kuliah pengantar riset untuk membantu mahasiswa agar dapat mempublikasikan karya tulis sesuai dengan standar akademik yang seharusnya.",
      },
      {
        id: "penelitian-2",
        title: "Seminar Riset (3 SKS)",
        content:
          "Dirancang untuk membekali mahasiswa dengan kemampuan untuk menyusun, mempresentasikan, dan mengevaluasi proposal atau hasil penelitian. Mahasiswa akan mendapatkan kesempatan untuk membahas proposal penelitian, metodologi, analisis data, dan temuan penelitian mereka sendiri atau orang lain dalam suasana diskusi yang kritis dan konstruktif. Fokus mata kuliah ini adalah pada pengembangan keterampilan komunikasi ilmiah dan pemahaman yang lebih mendalam tentang proses penelitian.",
      },
      {
        id: "penelitian-3",
        title: "Proposal (3 SKS)",
        content:
          "Dirancang untuk membekali mahasiswa dengan keterampilan dan pengetahuan yang diperlukan untuk menyusun proposal penelitian yang komprehensif dan berkualitas. Mahasiswa akan mempelajari berbagai komponen proposal penelitian, metode penelitian, teknik penulisan akademik, serta etika penelitian. Mata kuliah ini juga mencakup praktik langsung dalam menulis proposal yang akan menjadi dasar bagi tugas akhir atau penelitian lapangan.",
      },
      {
        id: "penelitian-4",
        title: "Tesis (6 SKS)",
        content:
          "Mahasiswa dapat mengajukan proposal tesis apabila sudah menyelesaikan minimal 70% dari jumlah SKS yang ditetapkan. Proposal tesis harus diserahkan ke Ketua Program Studi (Kaprodi) untuk disetujui.",
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

export function MagisterTeologiTransformasiBudayaMasyarakatAccordion() {
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
