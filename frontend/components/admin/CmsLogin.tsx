"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Mail } from "lucide-react";
import { loginAdmin } from "@/lib/api";

export function CmsLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const data = await loginAdmin(email, password);
      localStorage.setItem("sttb_admin_token", data.token);
      router.push("/admin/dashboard");
    } catch {
      setError("Email atau password salah");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex font-body relative">
      {/* LEFT SIDE — Navy background */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center relative overflow-hidden bg-sttb-navy">
        {/* Subtle background circles */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-white" />
          <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-white" />
        </div>

        <div className="relative z-10 text-center px-12">
          <div className="mb-8">
            <h1 className="font-heading text-7xl font-bold text-white mb-4 tracking-wide">
              STTB
            </h1>
            <div className="w-24 h-1 mx-auto mb-6 bg-sttb-red" />
            <p className="font-body text-lg text-white/90 tracking-widest">
              Sekolah Tinggi Teologi Bandung
            </p>
          </div>

          <div className="mt-12">
            <p className="font-display italic text-[22px] text-white/85 leading-relaxed">
              Content Management System
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE — Login form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-8 py-12 bg-white">
        <div className="w-full max-w-md">
          {/* Mobile logo (hidden on desktop) */}
          <div className="lg:hidden text-center mb-12">
            <h1 className="font-heading text-5xl font-bold text-sttb-navy mb-2">
              STTB
            </h1>
            <p className="font-body text-sm text-[#6B7A99]">
              Content Management System
            </p>
          </div>

          {/* Header */}
          <div className="mb-10">
            <h2 className="font-heading text-4xl font-bold text-sttb-navy-dark mb-3">
              Masuk ke CMS
            </h2>
            <p className="font-body text-base text-[#6B7A99] leading-relaxed">
              Silakan masukkan kredensial Anda untuk mengakses sistem manajemen
              konten
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 font-body text-sm font-semibold text-[#1A2340]"
              >
                Email
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <Mail className="w-5 h-5 text-[#9AA3B5]" />
                </div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nama@sttb.ac.id"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-[#E8ECF2] font-body text-[15px] text-[#1A2340] transition-colors focus:outline-none focus:border-sttb-navy"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block mb-2 font-body text-sm font-semibold text-[#1A2340]"
              >
                Kata Sandi
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <Lock className="w-5 h-5 text-[#9AA3B5]" />
                </div>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-[#E8ECF2] font-body text-[15px] text-[#1A2340] transition-colors focus:outline-none focus:border-sttb-navy"
                />
              </div>
            </div>

            {/* Error message */}
            {error && (
              <p className="text-sm font-semibold text-sttb-red">{error}</p>
            )}

            {/* Remember me & Forgot password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded cursor-pointer accent-[#003F8A]"
                />
                <span className="font-body text-sm text-[#6B7A99]">
                  Ingat saya
                </span>
              </label>
              <a
                href="#"
                className="font-body text-sm font-semibold text-sttb-navy hover:text-sttb-navy-dark transition-colors"
              >
                Lupa kata sandi?
              </a>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-4 rounded-lg font-body font-bold text-base text-white transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed ${
                isLoading
                  ? "bg-[#6B7A99]"
                  : "bg-sttb-navy hover:bg-sttb-navy-dark"
              }`}
            >
              {isLoading ? "Memproses..." : "Masuk"}
            </button>
          </form>

          {/* Footer note */}
          <div className="mt-8 pt-8 border-t border-[#E8ECF2]">
            <p className="text-center font-body text-[13px] text-[#9AA3B5] leading-relaxed">
              Hanya untuk staf dan administrator STTB yang berwenang.
              <br />
              Akses tidak sah akan dicatat dan dilaporkan.
            </p>
          </div>
        </div>
      </div>

      {/* Absolute footer */}
      <div className="absolute bottom-0 left-0 right-0 py-6 px-8 text-center">
        <p className="font-body text-[13px] text-[#9AA3B5]">
          STTB Content Management System © 2026
        </p>
      </div>
    </div>
  );
}
