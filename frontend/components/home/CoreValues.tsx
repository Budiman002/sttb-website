"use client";

import { Cross, BookOpen, Building2, TrendingUp } from "lucide-react";

export function CoreValues() {
  const values = [
    {
      icon: Cross,
      label: "Christ Centered",
      title: "Kristus sebagai Pusat",
      description:
        "Menempatkan kesetiaan Alkitab dan ajaran Kristus sebagai fondasi dalam setiap pengajaran, penelitian, dan pelayanan kami.",
    },
    {
      icon: BookOpen,
      label: "Excellence",
      title: "Teks-Konteks",
      description:
        "STTB teguh tidak hanya dalam kebenaran Alkitab (teks) tetapi juga responsif terhadap konteks pelayanan Indonesia yang dinamis.",
    },
    {
      icon: Building2,
      label: "Urban",
      title: "Pelayanan Urban",
      description:
        "Dedikasi terhadap penginjilan dan pelayanan yang berdampak bagi masyarakat urban yang kompleks dan multikultural.",
    },
    {
      icon: TrendingUp,
      label: "Transformative",
      title: "Transformatif",
      description:
        "Menghasilkan pemimpin transformatif yang membawa perubahan nyata dalam gereja, masyarakat, dan bangsa Indonesia.",
    },
  ];

  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "var(--gray-50)" }}
    >
      {/* Decorative Background */}
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "var(--blue-pale)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "var(--red-pale)" }}
      />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header - Asymmetric */}
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5 animate-in fade-in slide-in-from-left-12 duration-700">
            <div>
              <div
                className="inline-block px-4 py-1.5 rounded-full mb-4 text-white"
                style={{
                  background: "var(--red-main)",
                }}
              >
                <span
                  className="text-xs tracking-widest uppercase font-body font-semibold"
                  style={{
                    letterSpacing: "0.1em",
                  }}
                >
                  Core Values
                </span>
              </div>

              <h2
                className="mb-6 font-heading font-semibold"
                style={{
                  fontSize: "clamp(32px, 5vw, 48px)",
                  color: "var(--gray-900)",
                  lineHeight: 1.2,
                }}
              >
                Nilai-Nilai yang
                <br />
                <span className="italic">Membentuk</span> Kami
              </h2>
            </div>
          </div>

          <div className="lg:col-span-7 flex items-end animate-in fade-in slide-in-from-right-12 duration-700 delay-200">
            <p
              className="text-lg leading-relaxed font-body"
              style={{
                color: "var(--gray-500)",
                maxWidth: "600px",
                lineHeight: 1.7,
              }}
            >
              Empat pilar fundamental yang menjadi landasan setiap program,
              keputusan, dan pelayanan di STTB — dari ruang kelas hingga
              komunitas.
            </p>
          </div>
        </div>

        {/* Values Grid - Asymmetric */}
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            const isLarge = index === 0 || index === 3;

            return (
              <div
                key={value.label}
                className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 animate-in fade-in zoom-in-95 duration-700"
                style={{
                  padding: isLarge ? "48px" : "40px",
                  boxShadow: "0 4px 16px rgba(0, 39, 107, 0.08)",
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Accent Line */}
                <div
                  className="absolute top-0 left-0 h-1.5 w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: "var(--red-main)" }}
                />

                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${index % 2 === 0 ? "var(--blue-main)" : "var(--red-main)"} 0%, ${index % 2 === 0 ? "var(--blue-light)" : "var(--red-light)"} 100%)`,
                  }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Label */}
                <div
                  className="text-xs tracking-widest uppercase mb-3 font-body font-semibold"
                  style={{
                    color: "var(--gray-400)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {value.label}
                </div>

                {/* Title */}
                <h3
                  className="mb-4 font-heading font-semibold"
                  style={{
                    fontSize: isLarge ? "28px" : "24px",
                    color: "var(--gray-900)",
                  }}
                >
                  {value.title}
                </h3>

                {/* Description */}
                <p
                  className="font-body"
                  style={{
                    fontSize: "15px",
                    color: "var(--gray-500)",
                    lineHeight: 1.7,
                  }}
                >
                  {value.description}
                </p>

                {/* Decorative Element */}
                <div
                  className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      index % 2 === 0 ? "var(--blue-main)" : "var(--red-main)",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
