"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  label: string;
  bgSection?: string;
}

export function BackButton({ label, bgSection = "#FFFFFF" }: BackButtonProps) {
  const router = useRouter();

  return (
    <section className="py-8 text-center" style={{ background: bgSection }}>
      <button
        className="inline-flex items-center gap-2 px-8 py-3 rounded-lg transition-all"
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "14px",
          fontWeight: 600,
          color: "#00276B",
          border: "1px solid #00276B",
          background: "transparent",
          cursor: "pointer",
        }}
        onClick={() => router.back()}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#00276B";
          e.currentTarget.style.color = "#FFFFFF";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.color = "#00276B";
        }}
      >
        <ArrowLeft className="w-4 h-4" />
        {label}
      </button>
    </section>
  );
}
