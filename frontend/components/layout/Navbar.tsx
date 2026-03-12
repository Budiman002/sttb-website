"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/utils";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

const NAV_ITEMS: NavItem[] = [
  {
    label: "Tentang Kami",
    dropdown: [
      { label: "Sejarah", href: ROUTES.tentangKami.sejarah },
      { label: "Visi & Misi", href: ROUTES.tentangKami.visiMisi },
      { label: "Mars STTB", href: ROUTES.tentangKami.marsSttb },
      { label: "Pengakuan Iman", href: ROUTES.tentangKami.pengakuanIman },
      { label: "Dewan Dosen", href: ROUTES.tentangKami.dewanDosen },
      { label: "Yayasan", href: ROUTES.tentangKami.yayasan },
    ],
  },
  {
    label: "Akademik",
    dropdown: [
      { label: "Sarjana Teologi", href: ROUTES.akademik.sarjanaTeologi },
      {
        label: "Sarjana Pendidikan Kristen",
        href: ROUTES.akademik.sarjanaPendidikanKristen,
      },
      {
        label: "Magister Teologi Pelayanan Pastoral Gereja Urban",
        href: ROUTES.akademik.magisterTeologiPelayananPastoralGerejaUrban,
      },
      {
        label: "Magister Teologi Transformasi Budaya & Masyarakat",
        href: ROUTES.akademik.magisterTeologiTransformasiBudayaMasyarakat,
      },
      {
        label: "Magister Pendidikan Kristen",
        href: ROUTES.akademik.magisterPendidikanKristen,
      },
      {
        label: "Magister Ministri Marketplace",
        href: ROUTES.akademik.magisterMinistriMarketplace,
      },
      {
        label: "Magister Ministri Kepemimpinan Pastoral",
        href: ROUTES.akademik.magisterMinistriKepemimpinanPastoral,
      },
      {
        label: "Magister Ministri Teologi Pelayanan Gerejawi",
        href: ROUTES.akademik.magisterMinistriTeologiPelayananGerejawi,
      },
    ],
  },
  {
    label: "Admisi",
    dropdown: [
      { label: "FAQ", href: ROUTES.admisi.faq },
      { label: "Info Persyaratan", href: ROUTES.admisi.infoPersyaratan },
      {
        label: "Jadwal Pendaftaran",
        href: ROUTES.admisi.jadwalPendaftaran,
      },
      { label: "Prosedur Admisi", href: ROUTES.admisi.prosedurAdmisi },
      { label: "Pendaftaran Online", href: ROUTES.admisi.pendaftaranOnline },
    ],
  },
  {
    label: "Keuangan",
    dropdown: [
      { label: "Beasiswa", href: ROUTES.keuangan.beasiswa },
      { label: "Biaya Studi", href: ROUTES.keuangan.biayaStudi },
      { label: "Dukung STTB", href: ROUTES.keuangan.dukungSttb },
    ],
  },
  {
    label: "Kehidupan Kampus",
    dropdown: [
      { label: "Fasilitas", href: ROUTES.kehidupanKampus.fasilitas },
      { label: "Pembinaan", href: ROUTES.kehidupanKampus.pembinaan },
      { label: "Senat", href: ROUTES.kehidupanKampus.senat },
    ],
  },
  {
    label: "Jelajahi",
    dropdown: [
      { label: "Kegiatan", href: ROUTES.jelajahi.kegiatan.list },
      { label: "Berita", href: ROUTES.jelajahi.berita.list },
      { label: "Media", href: ROUTES.jelajahi.media.list },
      { label: "LEAD", href: ROUTES.jelajahi.lead },
      { label: "Perpustakaan", href: ROUTES.jelajahi.perpustakaan.list },
    ],
  },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"ID" | "EN">("ID");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ID" ? "EN" : "ID"));
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#00276B]">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href={ROUTES.home} className="flex items-center gap-3">
            <img
              src="/images/sttb-logo.svg"
              alt="STTB Bandung"
              className="h-16 w-16"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="group relative">
                {item.dropdown ? (
                  <>
                    <button className="flex items-center gap-1 font-body text-sm font-medium text-white transition-colors hover:text-sttb-red">
                      {item.label}
                      <ChevronDown className="h-4 w-4" />
                    </button>

                    {/* Dropdown Menu */}
                    <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                      <div className="min-w-[200px] rounded-lg bg-white py-2 shadow-lg ring-1 ring-black/5">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-4 py-2 font-body text-sm text-sttb-navy transition-colors hover:bg-sttb-offwhite hover:text-sttb-red"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href!}
                    className="font-body text-sm font-medium text-white transition-colors hover:text-sttb-red"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right Section - Buttons */}
          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href={ROUTES.admisi.infoPersyaratan}
              className="rounded-lg bg-sttb-red px-6 py-2.5 font-body text-sm font-semibold text-white transition-colors hover:bg-sttb-red-hover"
            >
              Daftar Sekarang
            </Link>

            <button
              onClick={toggleLanguage}
              className="font-body text-sm font-medium text-white transition-colors hover:text-sttb-red"
              aria-label="Toggle language"
            >
              <span className={cn(language === "EN" && "font-bold")}>EN</span>
              {" | "}
              <span className={cn(language === "ID" && "font-bold")}>ID</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-white/20 bg-[#00276B] lg:hidden">
          <div className="container mx-auto max-w-7xl px-6 py-4">
            <div className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <details className="group">
                      <summary className="flex cursor-pointer items-center justify-between py-2 font-body text-sm font-medium text-white">
                        {item.label}
                        <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                      </summary>
                      <div className="ml-4 mt-2 space-y-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-2 font-body text-sm text-white/80 hover:text-sttb-red"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <Link
                      href={item.href!}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 font-body text-sm font-medium text-white hover:text-sttb-red"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Buttons */}
              <div className="space-y-3 border-t border-white/20 pt-4">
                <Link
                  href={ROUTES.admisi.infoPersyaratan}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full rounded-lg bg-sttb-red py-2.5 text-center font-body text-sm font-semibold text-white"
                >
                  Daftar Sekarang
                </Link>

                <button
                  onClick={toggleLanguage}
                  className="w-full font-body text-sm font-medium text-white"
                >
                  <span className={cn(language === "EN" && "font-bold")}>
                    EN
                  </span>
                  {" | "}
                  <span className={cn(language === "ID" && "font-bold")}>
                    ID
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
