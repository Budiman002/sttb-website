"use client";

import Image from "next/image";
import { Play, Pause } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const lyrics = [
  {
    type: "verse",
    lines: [
      "Mahasiswa STT Bandung sadarlah betapa besar",
      "Kehormatan dan tanggung jawab yang Tuhan Yesus brikan padamu",
    ],
  },
  {
    type: "verse",
    lines: [
      "'tuk Indonesia tanah airmu, ladang yang luas untuk digarap",
      "oleh pekerja yang sudah siap untuk diutus oleh Tuhanmu",
    ],
  },
  {
    type: "chorus",
    lines: [
      "Yang Maha Kuasa; Yang Maha Mulia;",
      "Yang Maha Kudus; Yang slalu setia!",
    ],
  },
  {
    type: "verse",
    lines: [
      "STT Bandung, kamu dipanggil, kamu diutus;",
      "jawablah \u2018Ya Tuhan\u2019",
    ],
  },
  {
    type: "verse",
    lines: ["Ya kami rela, kami bersedia dalam anugrahMu", "\u2018tuk diutus"],
  },
  {
    type: "ending",
    lines: ["U - tus ka - mi Tu - han!"],
  },
];

export default function MarsSttbPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleMetadata = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    if (audio.readyState >= 1) {
      handleMetadata();
    }

    audio.addEventListener("loadedmetadata", handleMetadata);
    audio.addEventListener("durationchange", handleMetadata);

    return () => {
      audio.removeEventListener("loadedmetadata", handleMetadata);
      audio.removeEventListener("durationchange", handleMetadata);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    audio.currentTime = percent * audio.duration;
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen font-sans">
      <main>
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-[#00276B] to-[#003F8A]">
          <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
            <div className="text-center">
              <p className="text-[#C41E3A] text-sm font-bold tracking-[0.2em] uppercase mb-4">
                TENTANG KAMI
              </p>
              <h1
                className="text-7xl lg:text-8xl font-bold text-white mb-6 leading-[0.95]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Mars STTB
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
                Himne yang menggambarkan semangat, panggilan, dan visi Sekolah
                Tinggi Teologi Bandung
              </p>
              <p
                className="text-lg text-white/70 italic mb-12"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Do=F, 4 ketuk &mdash; Dorothy I. Marx
              </p>

              {/* Audio Player */}
              <div className="max-w-2xl mx-auto">
                <div className="bg-[#00276B] rounded-2xl p-8 shadow-2xl border border-white/10">
                  <audio
                    ref={audioRef}
                    src="/MarsSTTB/Mars STTB  Sekolah Tinggi Teologi Bandung.mp4"
                    preload="metadata"
                    onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
                    onEnded={() => setIsPlaying(false)}
                  />

                  {/* Play/Pause Button */}
                  <div className="flex items-center justify-center mb-6">
                    <button
                      onClick={togglePlay}
                      className="w-20 h-20 rounded-full bg-[#C41E3A] hover:bg-[#E63950] transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105"
                      aria-label={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? (
                        <Pause className="w-8 h-8 text-white" fill="white" />
                      ) : (
                        <Play
                          className="w-8 h-8 text-white ml-1"
                          fill="white"
                        />
                      )}
                    </button>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div
                      onClick={handleProgressClick}
                      className="relative w-full h-2 bg-white/20 rounded-full cursor-pointer"
                    >
                      <div
                        className="h-full bg-[#C41E3A] rounded-full transition-all duration-100"
                        style={{
                          width: duration > 0 ? `${(currentTime / duration) * 100}%` : "0%",
                        }}
                      />
                    </div>
                  </div>

                  {/* Time Display */}
                  <div className="flex justify-between text-sm text-white/70">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lyrics Section */}
        <section className="py-32 bg-white">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-20">
              <div className="w-24 h-1 bg-[#C41E3A] mx-auto mb-6" />
              <h2
                className="text-5xl lg:text-6xl font-bold text-[#00276B]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Lirik
              </h2>
            </div>

            <div className="space-y-16 max-w-4xl mx-auto">
              {lyrics.map((section, index) => (
                <div
                  key={index}
                  className={`${
                    section.type === "chorus"
                      ? "text-center py-8 border-t border-b border-[#C41E3A]/20"
                      : section.type === "ending"
                        ? "text-center"
                        : ""
                  }`}
                >
                  {section.lines.map((line, lineIndex) => (
                    <p
                      key={lineIndex}
                      className={`leading-relaxed ${
                        section.type === "chorus"
                          ? "text-4xl lg:text-5xl font-bold text-[#C41E3A] mb-4"
                          : section.type === "ending"
                            ? "text-5xl lg:text-6xl font-bold text-[#00276B] tracking-wide"
                            : "text-2xl lg:text-3xl text-gray-800 mb-3"
                      }`}
                      style={{
                        fontFamily:
                          section.type === "chorus" || section.type === "ending"
                            ? "var(--font-display)"
                            : "var(--font-serif)",
                      }}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sheet Music Section */}
        <section className="py-32 bg-gray-50">
          <div className="max-w-[900px] mx-auto px-6 lg:px-12">
            <div className="mb-12 text-center">
              <div className="w-16 h-1 bg-[#C41E3A] mx-auto mb-4" />
              <h3
                className="text-3xl font-bold text-[#00276B]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Partitur Asli
              </h3>
            </div>

            <div className="relative">
              <div
                className="bg-white p-8 rounded-lg shadow-2xl -rotate-1 hover:rotate-0 transition-transform duration-500"
                style={{
                  boxShadow:
                    "0 20px 60px rgba(0, 0, 0, 0.15), 0 8px 20px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Image
                  src="/images/notMusic2.png"
                  alt="Mars STTB Sheet Music"
                  width={1200}
                  height={900}
                  className="w-full h-auto rounded"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#C41E3A] rounded-full opacity-20" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#003F8A] rounded-full opacity-20" />
            </div>
          </div>
        </section>

        {/* Composer Section */}
        <section className="py-24 bg-white">
          <div className="max-w-[800px] mx-auto px-6 lg:px-12 text-center">
            <div className="w-24 h-1 bg-[#C41E3A] mx-auto mb-8" />
            <p
              className="text-2xl lg:text-3xl leading-relaxed text-gray-700"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Diciptakan oleh{" "}
              <span className="font-bold text-[#00276B]">Dorothy I. Marx</span>{" "}
              &mdash; salah satu pendiri STTB
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
