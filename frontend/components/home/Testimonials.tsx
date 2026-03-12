"use client";

import Image from "next/image";
import { useState } from "react";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Desi Vivianti",
      role: "S.Th, 2016",
      quote:
        "Saya bersyukur karena selama di STT Bandung saya mempunyai kesempatan dan waktu yang lebih banyak untuk bisa belajar, mengerti, dan mendalami pengajaran dan doktrin saya belajar untuk menjalankan pelayanan.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    },
    {
      name: "Teguh Juliawan",
      role: "M.Pd, 2018",
      quote:
        "Program Magister Pendidikan Kristen di STT Bandung sungguh berbeda. Pertama, dari materi pendidikan yang telah dipersiapkan dengan kualitas terbaik yang sesuai dengan konteks kebutuhan pendidik masa kini.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    },
    {
      name: "Viviane Y. Montung",
      role: "S.Pd, 2018",
      quote:
        "Keunikan STT Bandung COURAGEOUS to make a Changes, INNOVATIVE to see the Changes, FAST to respond to the Changes. STT Bandung menurut saya belajar merendahkan hati dan saat yang sama mampu melakukan tugas pikirnya.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    },
  ];

  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "var(--gray-900)" }}
    >
      {/* Decorative Element */}
      <div
        className="absolute top-0 left-0 w-full h-1 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, var(--red-main), var(--red-light))",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Section Label */}
        <div className="mb-12 animate-in fade-in slide-in-from-top-12 duration-700">
          <div
            className="text-xs tracking-widest uppercase text-white/60 mb-2 font-body font-semibold"
            style={{
              letterSpacing: "0.1em",
            }}
          >
            Kesaksian
          </div>
          <h2
            className="text-white font-display font-bold"
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
            }}
          >
            Dari Para{" "}
            <span className="italic" style={{ color: "var(--red-light)" }}>
              Alumni
            </span>
          </h2>
        </div>

        {/* Main Testimonial Display */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Quote Section */}
          <div
            key={activeIndex}
            className="lg:col-span-8 animate-in fade-in slide-in-from-left-12 duration-500"
          >
            <div className="relative">
              {/* Large Quote Mark */}
              <div
                className="absolute -top-6 -left-2 text-9xl opacity-10 font-display"
                style={{
                  color: "var(--red-main)",
                }}
              >
                "
              </div>

              {/* Quote Text */}
              <blockquote
                className="relative text-white/95 mb-8 leading-relaxed italic font-display"
                style={{
                  fontSize: "clamp(24px, 3.5vw, 36px)",
                  lineHeight: 1.5,
                }}
              >
                {testimonials[activeIndex].quote}
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div
                  className="w-1 h-16"
                  style={{ background: "var(--red-main)" }}
                />
                <div>
                  <div
                    className="text-white mb-1 font-body font-semibold"
                    style={{
                      fontSize: "20px",
                    }}
                  >
                    {testimonials[activeIndex].name}
                  </div>
                  <div
                    className="text-white/60 font-body"
                    style={{
                      fontSize: "14px",
                    }}
                  >
                    {testimonials[activeIndex].role}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnail Selector */}
          <div className="lg:col-span-4 animate-in fade-in slide-in-from-right-12 duration-700 delay-200">
            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all ${
                    activeIndex === index
                      ? "bg-white/10 border-2"
                      : "bg-transparent border-2 border-transparent hover:bg-white/5"
                  }`}
                  style={{
                    borderColor:
                      activeIndex === index ? "var(--red-main)" : "transparent",
                  }}
                >
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-white/20 relative">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <div
                      className="text-white truncate font-body font-semibold"
                      style={{
                        fontSize: "15px",
                      }}
                    >
                      {testimonial.name}
                    </div>
                    <div className="text-white/60 text-sm font-body">
                      {testimonial.role}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-12 animate-in fade-in duration-700 delay-300">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="transition-all"
              style={{
                width: activeIndex === index ? "32px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background:
                  activeIndex === index
                    ? "var(--red-main)"
                    : "rgba(255,255,255,0.3)",
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
