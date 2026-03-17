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
    category: "Mata Kuliah Dasar Umum",
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
          "Mata kuliah ini memperlengkapi mahasiswa dengan keterampilan membaca, mencakup pengenalan ide pokok (<em>finding main idea</em>), <em>skimming</em>, <em>scanning</em>, <em>summarizing</em>, dan pada akhirnya mahasiswa diharapkan untuk dapat memahami isi sebuah teks (<em>reading comprehension</em>).",
      },
      {
        id: "umum-3",
        title: "Bahasa Inggris Teologi (3 SKS)",
        content:
          "Mata kuliah ini mempelajari tata bahasa Inggris dasar serta penerapannya pada bacaan dan kosa kata teologis yang sederhana, melalui penguatan empat keterampilan dasar bahasa, yaitu mendengar, berbicara, membaca dan menulis.",
      },
      {
        id: "umum-4",
        title: "Psikologi Perkembangan Masa Hidup (2 SKS)",
        content:
          "Mata kuliah ini mempelajari konsep-konsep dasar psikologi perkembangan, termasuk di dalamnya pengertian psikologi perkembangan, pembagian rentang masa hidup dan tugas perkembangan, pengenalan teori psikologi perkembangan, kontribusi psikologi perkembangan bagi pelayanan (baik dalam konteks gereja maupun non-gereja).",
      },
      {
        id: "umum-5",
        title: "Metode Penelitian dan Penulisan (3 SKS)",
        content:
          "Mata kuliah ini memberikan dasar-dasar pemahaman dan keterampilan praktis untuk melakukan penelitian khususnya penelitian literatur. Pembelajaran akan difokuskan pada beberapa hal dasar termasuk bagaimana merumuskan masalah penelitian, menggali sumber-sumber pustaka, dan melakukan kajian pustaka dalam menyusun proposal.",
      },
    ],
  },
  {
    category: "Studi Biblika",
    courses: [
      {
        id: "biblika-1",
        title: "Studi Perjanjian Lama 1: Kitab Taurat (3 SKS)",
        content:
          "Studi komprehensif terhadap kitab Kejadian sampai Ulangan. Penekanan secara khusus diberikan pada aspek historis, teologis, hermeneutis, eksegesis dan aplikasi praktis dari studi ini dalam kehidupan rohani dan pelayanan.",
      },
      {
        id: "biblika-2",
        title: "Studi Perjanjian Lama 2: Kitab Sejarah (3 SKS)",
        content:
          "Studi komprehensif terhadap kitab Hakim-Hakim sampai Ester. Penekanan secara khusus diberikan pada aspek historis, teologis, hermeneutis, eksegesis dan aplikasi praktis dari studi ini dalam kehidupan rohani dan pelayanan.",
      },
      {
        id: "biblika-3",
        title: "Studi Perjanjian Lama 3: Kitab Sastra (3 SKS)",
        content:
          "Studi komprehensif terhadap kitab Ayub, Mazmur, Amsal, Pengkhotbah, Kidung Agung. Penekanan secara khusus diberikan pada aspek historis, teologis, hermeneutis, eksegesis dan aplikasi praktis dari studi ini dalam kehidupan rohani dan pelayanan.",
      },
      {
        id: "biblika-4",
        title: "Studi Perjanjian Lama 4: Kitab Nabi-Nabi (3 SKS)",
        content:
          "Studi komprehensif terhadap kitab Nabi Besar dan Nabi Kecil. Penekanan secara khusus diberikan pada aspek historis, teologis, hermeneutis, eksegesis dan aplikasi praktis dari studi ini dalam kehidupan rohani dan pelayanan.",
      },
      {
        id: "biblika-5",
        title: "Studi Perjanjian Baru 1: Kitab Injil (3 SKS)",
        content:
          "Studi komprehensif terhadap Kitab-Kitab Injil. Penekanan diberikan pada aspek historis, teologis, eksegesis, keunikan masing-masing kitab, dan aplikasi praktis bagi kehidupan rohani dan pelayanan.",
      },
      {
        id: "biblika-6",
        title:
          "Studi Perjanjian Baru 2: Kisah Para Rasul dan Surat Paulus (3 SKS)",
        content:
          "Studi komprehensif terhadap Kitab Kisah Para Rasul dan Surat-Surat Paulus. Penekanan diberikan pada aspek historis, teologis, eksegesis, keunikan masing-masing kitab, dan aplikasi praktis bagi kehidupan rohani dan pelayanan.",
      },
      {
        id: "biblika-7",
        title: "Studi Perjanjian Baru 3: Surat Umum dan Wahyu (3 SKS)",
        content:
          "Studi komprehensif terhadap Surat-Surat Umum dan Kitab Wahyu. Penekanan diberikan pada aspek historis, teologis, eksegesis, keunikan masing-masing kitab, dan aplikasi praktis bagi kehidupan rohani dan pelayanan.",
      },
      {
        id: "biblika-8",
        title: "Bahasa Ibrani (3 SKS)",
        content:
          "Mata kuliah yang mempelajari elemen bahasa Ibrani Alkitab Perjanjian Lama dari segi pengenalan huruf, perbendaharaan kata, tata bahasa, penerjemahan dan latihan membaca, serta penekanan khusus kepada kemampuan untuk dapat menerjemahkan kitab Perjanjian Lama dalam bahasa Ibrani untuk persiapan menafsir teks Perjanjian Lama.",
      },
      {
        id: "biblika-9",
        title: "Bahasa Yunani (2 SKS)",
        content:
          "Mata kuliah yang mempelajari elemen bahasa Yunani Alkitab Perjanjian Baru dari segi pengenalan huruf, perbendaharaan kata, tata bahasa, penerjemahan dan latihan membaca.",
      },
      {
        id: "biblika-10",
        title: "Hermeneutika Biblika (3 SKS)",
        content:
          "Mata kuliah yang memperlengkapi mahasiswa dengan ilmu penafsiran Alkitab yang mencakup definisi, sejarah, prinsip, metode dan langkah-langkah dalam menafsirkan Alkitab, serta latihan menerapkan metode yang tepat dengan menggunakan bagian tertentu dari Alkitab. Interaksi dan kritik terhadap metode historis-kritis juga diberikan.",
      },
    ],
  },
  {
    category: "Studi Teologi",
    courses: [
      {
        id: "teologi-1",
        title: "Prolegomena dan Doktrin Alkitab (3 SKS)",
        content:
          "Studi sistematis yang mempelajari pengantar teologi yang membahas mengenai pengertian teologi, metode teologi, dogmatika, penyataan Allah, dan sistem-sistem teologi, serta prinsip-prinsip Alkitab sebagai Firman Allah (bibliologi) yang mencakup doktrin-doktrin: revelasi, inspirasi, kanonisasi, translasi, interpretasi dan komunikasi termasuk isu ineransi Alkitab dari perspektif Injili <em>Reformed</em>.",
      },
      {
        id: "teologi-2",
        title: "Doktrin Allah, Penciptaan dan Manusia (3 SKS)",
        content:
          "Studi sistematis yang mempelajari tentang pribadi, atribut, serta karya-karya Allah, konsep-konsep ketritunggalan, providensi, keputusan (predestinasi), doktrin penciptaan, asal usul kehidupan dan alam semesta, natur manusia sebagai peta dan teladan Allah. Termasuk argumen keberadaan Allah serta membandingkan konsep tentang Allah dari agama-agama lain dan hal-hal lain yang relevan untuk diaplikasikan dalam kehidupan rohani dan pelayanan.",
      },
      {
        id: "teologi-3",
        title: "Doktrin Kristus, Dosa dan Keselamatan (3 SKS)",
        content:
          "Studi sistematis yang mempelajari pribadi, natur dan karya Kristus, dan tentang doktrin keselamatan dalam perspektif Reformed, permasalahan kontemporer tentang kristologi dan soteriologi, makna dosa serta natur manusia akibat kejatuhan untuk diaplikasikan dalam kehidupan rohani dan pelayanan.",
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
          "Studi sistematis yang mempelajari tentang esensi dan natur gereja, misi dan pelayanan gereja, sistem dan organisasi gereja menurut Alkitab, serta studi tentang isu-isu kontemporer gereja urban (gereja digital, sakramen virtual, misi integral gereja, dll).",
      },
      {
        id: "teologi-6",
        title: "Apologetika (3 SKS)",
        content:
          "Mata kuliah yang memperlengkapi mahasiswa untuk mengerti dan menjawab sebagian pertanyaan-pertanyaan kritis yang sering ditanyakan perihal keabsahaan iman Kristen, serta menolong mahasiswa memiliki pola pikir dan pembawaan yang tepat untuk menanggapi orang yang belum percaya ketika melakukan penginjilan.",
      },
      {
        id: "teologi-7",
        title: "Etika Kristen (2 SKS)",
        content:
          "Mata kuliah yang mempelajari prinsip-prinsip dan nilai-nilai Alkitab Perjanjian Lama dan Baru sebagai dasar pemikiran dan tindakan dalam tiap aspek kehidupan manusia modern, serta memberikan solusi-solusi teologis.",
      },
    ],
  },
  {
    category: "Studi Sejarah & Budaya",
    courses: [
      {
        id: "sejarah-1",
        title: "Sejarah dan Filosofi Pendidikan Kristen (3 SKS)",
        content:
          "Mata kuliah ini mempelajari perkembangan sejarah Pendidikan Kristen dari masa ke masa beserta keyakinan, nilai-nilai, praktik iman Kristen, serta tren sosial, budaya, dan pendidikan yang lebih luas yang melatarbelakanginya — yang memainkan peran penting dalam memupuk iman, mendorong pertumbuhan intelektual dari masa ke masa.",
      },
    ],
  },
  {
    category: "Studi Pendidikan & Praktika",
    courses: [
      {
        id: "pendidikan-1",
        title: "Teologi Asuhan Kristen (2 SKS)",
        content:
          "Mata kuliah ini mempelajari tentang masa, pola dan proses asuhan Kristiani dalam konteks keluarga Kristen untuk menghasilkan anak-anak yang mengasihi Tuhan dengan segenap hidupnya.",
      },
      {
        id: "pendidikan-2",
        title: "Formasi Spiritualitas (2 SKS)",
        content:
          "Mata kuliah ini mempelajari dasar-dasar dari persahabatan dengan Allah, diri sendiri dan sesama dalam proses menjadi semakin seperti Kristus agar dapat hidup untuk Kristus bagi kepentingan orang lain.",
      },
      {
        id: "pendidikan-3",
        title: "Pelayanan Ibadah dan Musik (3 SKS)",
        content:
          "Mata kuliah yang menjelaskan tentang sejarah puji-pujian jemaat sejak masa Perjanjian Lama hingga kini. Tekanan diletakkan pada penelitian teologi dari teks pujian serta estetika musik dari himne-himne yang berbeda periodenya, dengan tujuan agar sebagian himne tersebut dapat dipergunakan untuk ibadah masa kini.",
      },
      {
        id: "pendidikan-4",
        title: "Homiletika 1 (3 SKS)",
        content:
          "Mata kuliah yang memperlengkapi mahasiswa untuk memahami teori dasar penyusunan khotbah ekspositori dengan mengintegrasikan prinsip-prinsip hermeneutika dan homiletika. Penekanan diberikan pada praktik berkhotbah yang kreatif, komunikatif, efektif dan menghasilkan transformasi bagi pendengar dan pengkhotbah ekspositori itu sendiri.",
      },
      {
        id: "pendidikan-5",
        title: "Homiletika 2 (3 SKS)",
        content:
          "Mata kuliah yang memperlengkapi mahasiswa memahami isu-isu kontemporer, tantangan dan tekhnik penyampaian khotbah dalam pelayanan konteks urban. Mahasiswa dilatih untuk mempersiapkan khotbah ekspositori dengan menggunakan perangkat teknologi sehingga menghasilkan khotbah yang inovatif dan transformatif.",
      },
      {
        id: "pendidikan-6",
        title: "Konseling Pastoral 1 – Dasar Konseling (2 SKS)",
        content:
          "Mata kuliah ini mempelajari tentang definisi, manfaat dan metode pelayanan konseling pastoral yang tepat untuk menangani persoalan jemaat untuk penyelesaian Amanat Agung Kristus. Melalui mata kuliah ini, mahasiswa dibekali keterampilan dasar dalam melakukan konseling pastoral diawali dari mengenal diri dan menumbuhkan kehidupan diri sendiri yang sehat secara emosi dan spiritual. Selain itu, mata kuliah ini juga mempelajari etika konseling dan tanda-tanda konseling pastoral yang tidak efektif, mengenali keterbatasan dirinya, dan mengetahui kapan harus merujuk jemaat kepada konselor atau psikiater profesional.",
      },
      {
        id: "pendidikan-7",
        title: "Konseling Pastoral 2 – Praktik Konseling Sekolah (3 SKS)",
        content:
          "Mata kuliah ini mempelajari tentang teknik dasar konseling siswa mulai dari jenjang PAUD, SD, SMP, dan SMA.",
      },
      {
        id: "pendidikan-8",
        title: "Pemuridan Transformatif (3 SKS)",
        content:
          "Mata kuliah yang memperlengkapi mahasiswa dengan fondasi Alkitab pelayanan pemuridan intensional, strategi dan dan prinsip pembimbingan pemuridan melalui kelompok kecil.",
      },
      {
        id: "pendidikan-9",
        title: "Pelayanan Anak Transformatif (3 SKS)",
        content:
          "Mata kuliah ini mempelajari tentang beragam gaya belajar dan latar belakang anak-anak urban, juga mempelajari cara menggunakan metode pengajaran yang efektif dan interaktif, termasuk menggunakan teknologi dan multimedia dalam aktivitas langsung serta penyampaian cerita yang menarik untuk mengkomunikasikan Alkitab kepada anak-anak. Kelas ini juga akan mempelajari perkembangan anak secara holistik yang mencakup perkembangan sosial, emosional, kognitif dan spiritual.",
      },
      {
        id: "pendidikan-10",
        title: "Pelayanan Kaum Muda Transformatif (3 SKS)",
        content:
          "Mata kuliah yang memperlengkapi mahasiswa dengan prinsip, strategi dan aspek pembangunan spiritualitas untuk penjangkauan kaum muda agar mereka terlibat dalam panggilan Kerajaan Allah untuk mentransformasi dunia ini.",
      },
      {
        id: "pendidikan-11",
        title: "Pelayanan Orang Tua Transformatif (3 SKS)",
        content:
          "Mata kuliah ini mempelajari tentang praktik pengasuhan anak yang sehat (<em>parenting styles</em>) dan melihat berbagai program, lokakarya, layanan konseling, dan materi pendidikan yang disesuaikan untuk menghadapi tantangan dan kebutuhan unik keluarga dan orang tua urban masa kini, khususnya dalam mengembangkan spiritualitas anak. Pelayanan orang tua dan keluarga akan berfokus pada pemberian dukungan, sumber daya, dan bimbingan kepada keluarga dan orang tua dalam konteks gereja dan sekolah.",
      },
      {
        id: "pendidikan-12",
        title: "Introduksi Pendidikan Kristen (2 SKS)",
        content:
          "Mata kuliah ini mempelajari tentang cakupan makro dari Pendidikan Kristen yang berfungsi sebagai introduksi yang mengulas sepintas setiap pokok bahasan mulai dari natur Pendidikan Kristen, proses belajar mengajar, target peserta didik menurut jenjang usianya, beragam strategi dalam khususnya dalam konteks sekolah, tetapi juga menyinggung irisan Pendidikan Kristen dalam konteks keluarga dan gereja.",
      },
      {
        id: "pendidikan-13",
        title: "Psikologi Pendidikan Kristen (3 SKS)",
        content:
          "Mata kuliah ini mempelajari: Konsep-konsep dasar psikologi pendidikan: pengertian psikologi pendidikan, pengenalan teori psikologi pendidikan, kontribusi psikologi pendidikan bagi teori dan praktik pendidikan. Kaitan antara psikologi pendidikan dengan prinsip-prinsip kekristenan dan penerapan konsep psikologi Pendidikan Kristen di dalam proses pembelajaran.",
      },
      {
        id: "pendidikan-14",
        title: "Teologi Pendidikan Kristen (2 SKS)",
        content:
          "Mata kuliah ini memaparkan relevansi dan integrasi antara teologi dengan Pendidikan Kristen yang terikat secara mutual dan saling melengkapi untuk Kerajaan Allah, sehingga mengarahkan dan menolong mahasiswa untuk memiliki cara pandang teologi yang benar yang dapat diaplikasikan secara komprehensif dan holistik dalam lingkup Pendidikan Kristen.",
      },
      {
        id: "pendidikan-15",
        title: "Pendidikan Karakter (2 SKS)",
        content:
          "Kelas ini mempelajari konsep dan problematika pendidikan karakter secara khusus di era digital. Kelas ini juga akan mempelajari beragam model pendidikan karakter baik secara umum maupun dalam konsep kekristenan serta mempraktikkan nilai-nilai karakter sebagai murid Kristus di tengah pluralitas nilai kebangsaaan Indonesia.",
      },
      {
        id: "pendidikan-16",
        title: "Integrasi Iman dan Ilmu (3 SKS)",
        content:
          'Mata kuliah ini mempelajari landasan teori dan implementasi dari integrasi <em>worldview</em> Kristen dengan berbagai bidang ilmu dan atau pekerjaan mengingat "segala kebenaran adalah kebenaran Allah". Dalam mata kuliah ini mahasiswa akan mengeksplorasi fondasi historis, teologi, biblika, serta etika dari integrasi iman Kristen dan ilmu serta aplikasinya dengan beberapa contoh bidang ilmu/atau pekerjaan.',
      },
      {
        id: "pendidikan-17",
        title: "Integrasi Teologi dan Spiritualitas Anak dan Remaja (3 SKS)",
        content:
          "Kelas ini membantu mahasiswa untuk mendapatkan posisi teologi mereka tentang pelayanan anak (0–18 tahun). Modul-modul dalam kelas ini akan membantu mahasiswa untuk merefleksikan apa tujuan awal Allah menciptakan anak-anak sehingga mereka mampu menciptakan/mempersiapkan pelayanan anak yang lebih holistik. Kelas ini juga membantu mahasiswa untuk membantu anak-anak dalam perkembangan kehidupan mereka, khususnya perkembangan spiritualitas mereka, kehidupan kekristenan dan kehidupan berkomunitas (di gereja/sekolah/rumah) melalui perencanaan kegiatan, aktifitas atau pengajaran yang lebih tepat dan menjawab kebutuhan anak-anak Kristen zaman sekarang.",
      },
      {
        id: "pendidikan-18",
        title: "Kurikulum Pendidikan Kristen (3 SKS)",
        content:
          "Mata kuliah ini mempelajari pemahaman tentang konsep dasar kurikulum, tujuan pembelajaran yang akan menentukan kualitas sebuah kurikulum, langkah-langkah dalam merancang sebuah kurikulum sederhana yang didasarkan pada pemahaman yang utuh tentang konsep dasar kurikulum dan karakteristik nara didik, serta mengevaluasi kurikulum PAK melalui pengamatan/analisa yang cermat.",
      },
      {
        id: "pendidikan-19",
        title: "Perencanaan dan Evaluasi Pembelajaran (3 SKS)",
        content:
          "Mata kuliah ini mempelajari konsep dasar perencanaan pembelajaran termasuk di dalamnya definisi, prinsip, dan komponen perencanaan pembelajaran. Termasuk di dalamnya langkah-langkah dalam membuat perencanaan pembelajaran yang didasarkan pada pemahaman yang utuh tentang konsep dasar kurikulum dan karakteristik nara didik, langkah-langkah dalam mengevaluasi dan mengadaptasi perencanaan pembelajaran PAK.",
      },
      {
        id: "pendidikan-20",
        title: "Strategi Pembelajaran (3 SKS)",
        content:
          "Mata kuliah ini akan mempelajari signifikansi metodologi mengajar untuk mencapai tujuan pembelajaran, pengenalan, pemilihan, dan penerapan berbagai metode mengajar yang aktif, kreatif, efektif serta menyenangkan yang didasarkan pada pemahaman tentang berbagai ragam pengajaran yang diurapi oleh Roh Kudus.",
      },
      {
        id: "pendidikan-21",
        title: "Media dan Teknologi Pembelajaran (2 SKS)",
        content:
          "Mata kuliah ini mempelajari tentang media secara umum dan media instruksional secara spesifik dalam hal definisi, jenis dan fungsi, kriteria seleksi dan penggunaannya dalam rangka pengembangan bahan ajar yang kreatif, interaktif, proaktif, relevan dan menyenangkan. Fokus mata kuliah ini adalah pemakaian media instruksional dan penambahan bahan ajar yang diterapkan dengan cara mendesain strategi pembelajaran yang efektif, yaitu yang tertuju pada tujuan utama membawa transformasi hidup murid Kristus yang mengemban Amanat Agung-Nya.",
      },
      {
        id: "pendidikan-22",
        title: "Manajemen / Administrasi Pendidikan (3 SKS)",
        content:
          "Mata kuliah ini mempelajari hakikat dan pengertian manajemen dan administrasi pendidikan, factor-faktor yang memengaruhi manajemen dan administrasi pendidikan, dan fungsi dan proses yang ada dalam manajemen dan administrasi pendidikan.",
      },
      {
        id: "pendidikan-23",
        title: "Micro Teaching 1 (2 SKS)",
        content:
          "Mata kuliah ini memberikan kesempatan bagi mahasiswa untuk berlatih mengajar dalam lingkup terbatas (mikro) untuk mengembangkan keterampilan dasar mengajar (<em>basic teaching skill</em>) yang dilaksanakan secara terisolasi dan dalam situasi yang disederhanakan atau dikecilkan. Penyajian materi ajar dan proses pembelajaran didasarkan pada pemahaman yang utuh tentang strategi pembelajaran dan karakteristik nara didik (psikologi perkembangan dan gaya belajar). Mahasiswa juga akan diajak untuk mengalami proses observasi proses pembelajaran di mana pengamatan dan analisan yang cermat diaplikasikan.",
      },
      {
        id: "pendidikan-24",
        title: "Micro Teaching 2 (4 SKS)",
        content:
          "Mata kuliah ini memberikan kesempatan bagi mahasiswa untuk melakukan observasi kelas secara langsung dan berlatih menyajikan materi ajar di hadapan siswa dengan supervisi guru dan/ dosen pengampu. Penyajian materi ajar dan proses pembelajaran didasarkan pada pemahaman yang utuh tentang strategi pembelajaran dan karakteristik nara didik (psikologi perkembangan dan gaya belajar).",
      },
    ],
  },
  {
    category: "Praktik Lapangan",
    courses: [
      {
        id: "praktik-1",
        title: "Praktik Pelayanan Media 1 (0 SKS)",
        content:
          "Mata kuliah yang memperlengkapi mahasiswa untuk memiliki sikap hati melayani dan memperlengkapi orang-orang untuk bertumbuh dalam mengenal, mengasihi, dan melayani Tuhan.",
      },
      {
        id: "praktik-2",
        title: "Praktik Pelayanan Media 2 (0 SKS)",
        content:
          "Mata kuliah yang memperlengkapi mahasiswa untuk memiliki sikap hati melayani dan memperlengkapi orang-orang untuk bertumbuh dalam mengenal, mengasihi, dan melayani Tuhan.",
      },
      {
        id: "praktik-3",
        title: "Praktik Pelayanan Akhir Pekan 1, 2, 3, 4, & 5 (0 SKS)",
        content:
          "Mata kuliah yang memperlengkapi mahasiswa untuk memiliki sikap hati melayani dan memperlengkapi orang-orang untuk bertumbuh dalam mengenal, mengasihi, dan melayani Tuhan.",
      },
      {
        id: "praktik-4",
        title: "Praktik Pelayanan Misi (1 SKS)",
        content:
          "Mata kuliah yang memperlengkapi mahasiswa untuk memiliki relasi dengan masyarakat dengan menerapkan pemikiran logis, kritis dan inovatif dalam rangka penyampaian kabar baik di konteks urban.",
      },
      {
        id: "praktik-5",
        title: "Praktik Pelayanan 1 Tahun (8 SKS)",
        content:
          "Mata kuliah yang memperlengkapi mahasiswa untuk menerapkan bidang ilmu yang dimilikinya dalam pelayanan di sekolah dan lembaga pendidikan di konteks urban.",
      },
    ],
  },
  {
    category: "Tugas Akhir",
    courses: [
      {
        id: "tugas-1",
        title: "Artikel Jurnal (3 SKS)",
        content:
          "Mata kuliah yang memperlengkapi mahasiswa untuk menghasilkan penelitian dan memberikan formulasi solusi berdasarkan data yang akurat terhadap permasalahan dalam konteks pelayanan pendidikan di konteks urban.",
      },
      {
        id: "tugas-2",
        title: "Proyek: Merancang Program Pembinaan (4 SKS)",
        content:
          "Mata kuliah yang memperlengkapi mahasiswa menerapkan teori maupun praktis dalam desain kurikulum yang holistik, sehingga menghasilkan sebuah program pembinaan yang sesuai dengan kebutuhan formasi pembinaan iman sekolah atau lembaga pendidikan di konteks urban.",
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

export function SarjanaPendidikanKristenAccordion() {
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
