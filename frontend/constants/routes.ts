// Internal URL paths for STTB website

export const ROUTES = {
  home: "/",

  // Tentang Kami
  tentangKami: {
    sejarah: "/tentang-kami/sejarah",
    visiMisi: "/tentang-kami/visi-misi",
    marsSttb: "/tentang-kami/mars-sttb",
    pengakuanIman: "/tentang-kami/pengakuan-iman",
    dewanDosen: "/tentang-kami/dewan-dosen",
    yayasan: "/tentang-kami/yayasan",
  },

  // Akademik
  akademik: {
    sarjanaTeologi: "/akademik/sarjana-teologi",
    sarjanaPendidikanKristen: "/akademik/sarjana-pendidikan-kristen",
    magisterTeologiPelayananPastoralGerejaUrban:
      "/akademik/magister-teologi-pelayanan-pastoral-gereja-urban",
    magisterTeologiTransformasiBudayaMasyarakat:
      "/akademik/magister-teologi-transformasi-budaya-masyarakat",
    magisterPendidikanKristen: "/akademik/magister-pendidikan-kristen",
    magisterMinistriMarketplace: "/akademik/magister-ministri-marketplace",
    magisterMinistriKepemimpinanPastoral:
      "/akademik/magister-ministri-kepemimpinan-pastoral",
    magisterMinistriTeologiPelayananGerejawi:
      "/akademik/magister-ministri-teologi-pelayanan-gerejawi",
  },

  // Admisi
  admisi: {
    faq: "/admisi/faq",
    infoPersyaratan: "/admisi/info-persyaratan",
    jadwalPendaftaran: "/admisi/jadwal-pendaftaran",
    prosedurAdmisi: "/admisi/prosedur-admisi",
    pendaftaranOnline: "/admisi/pendaftaran-online",
  },

  // Keuangan
  keuangan: {
    beasiswa: "/keuangan/beasiswa",
    biayaStudi: "/keuangan/biaya-studi",
    dukungSttb: "/keuangan/dukung-sttb",
  },

  // Kehidupan Kampus
  kehidupanKampus: {
    fasilitas: "/kehidupan-kampus/fasilitas",
    pembinaan: "/kehidupan-kampus/pembinaan",
    senat: "/kehidupan-kampus/senat",
  },

  // Jelajahi
  jelajahi: {
    kegiatan: {
      list: "/jelajahi/kegiatan",
      detail: (slug: string) => `/jelajahi/kegiatan/${slug}`,
    },
    berita: {
      list: "/jelajahi/berita",
      detail: (slug: string) => `/jelajahi/berita/${slug}`,
    },
    media: {
      list: "/jelajahi/media",
      artikel: (slug: string) => `/jelajahi/media/artikel/${slug}`,
      video: (slug: string) => `/jelajahi/media/video/${slug}`,
    },
    lead: "/jelajahi/lead",
    perpustakaan: {
      list: "/jelajahi/perpustakaan",
      detail: (slug: string) => `/jelajahi/perpustakaan/${slug}`,
    },
  },
} as const;

// API routes (for backend communication)
export const API_ROUTES = {
  berita: {
    list: "/api/Berita/list",
    detail: (slug: string) => `/api/Berita/${slug}`,
  },
  kegiatan: {
    list: "/api/Kegiatan/list",
    detail: (slug: string) => `/api/Kegiatan/${slug}`,
  },
  media: {
    list: "/api/Media/list",
    artikel: (slug: string) => `/api/Media/artikel/${slug}`,
    video: (slug: string) => `/api/Media/video/${slug}`,
  },
  perpustakaan: {
    list: "/api/Perpustakaan/list",
    detail: (slug: string) => `/api/Perpustakaan/${slug}`,
  },
} as const;
