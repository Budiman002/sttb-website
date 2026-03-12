import Link from "next/link";
import { SectionLabel } from "./SectionLabel";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  label: string;
  title: string;
  description: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton: {
    text: string;
    href: string;
  };
  className?: string;
}

export function CTASection({
  label,
  title,
  description,
  primaryButton,
  secondaryButton,
  className,
}: CTASectionProps) {
  return (
    <section
      className={cn(
        "w-full bg-sttb-navy-dark py-16 md:py-24",
        className
      )}
    >
      <div className="container mx-auto max-w-4xl px-6 text-center">
        <SectionLabel className="mb-4 text-white/80">{label}</SectionLabel>

        <h2 className="mb-6 font-heading text-3xl text-white md:text-4xl lg:text-5xl">
          {title}
        </h2>

        <p className="mb-8 font-body text-lg text-white/90 md:text-xl">
          {description}
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={primaryButton.href}
            className="inline-flex items-center justify-center rounded-lg bg-sttb-red px-8 py-3 font-body font-semibold text-white transition-colors hover:bg-sttb-red-hover"
          >
            {primaryButton.text}
          </Link>

          <Link
            href={secondaryButton.href}
            className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-3 font-body font-semibold text-white transition-colors hover:bg-white hover:text-sttb-navy-dark"
          >
            {secondaryButton.text}
          </Link>
        </div>
      </div>
    </section>
  );
}
