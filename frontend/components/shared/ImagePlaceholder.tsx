import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  aspectRatio?: string;
  caption?: string;
  className?: string;
}

export function ImagePlaceholder({
  aspectRatio = "16/9",
  caption,
  className,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg bg-sttb-navy",
        className
      )}
      style={{ aspectRatio }}
    >
      <img
        src="/images/sttb-logo.svg"
        alt="STTB"
        className="absolute inset-0 m-auto w-1/3 opacity-30 brightness-0 invert"
      />
      {caption && (
        <p className="absolute bottom-3 left-0 right-0 text-center font-body text-sm text-white/60">
          {caption}
        </p>
      )}
    </div>
  );
}
