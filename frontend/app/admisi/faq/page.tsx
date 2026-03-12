import type { Metadata } from "next";
import { FAQContent } from "./FAQContent";

export const metadata: Metadata = {
  title: "FAQ Admisi — STTB Bandung",
  description:
    "Temukan jawaban atas pertanyaan yang paling sering diajukan seputar admisi dan pemilihan program studi di STTB Bandung.",
};

export default function AdmisiFaqPage() {
  return <FAQContent />;
}
