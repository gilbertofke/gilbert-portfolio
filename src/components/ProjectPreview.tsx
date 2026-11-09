import Image from "next/image";
import type { Project } from "@/lib/types";

type ProjectPreviewProps = {
  preview: Project["preview"];
  title: string;
};

export default function ProjectPreview({
  preview,
  title,
}: ProjectPreviewProps) {
  if (!preview) {
    return (
      <div className="flex aspect-video w-full items-center justify-center border-b border-dashed border-navy/25 bg-white px-6 text-center text-sm text-muted">
        <p>
          Preview coming soon
          <span className="sr-only"> for {title}</span>
        </p>
      </div>
    );
  }

  if (preview.type === "video") {
    return (
      <div className="aspect-video w-full overflow-hidden border-b border-line bg-white">
        <video
          src={preview.src}
          aria-label={preview.alt}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    );
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden border-b border-line bg-white">
      <Image
        src={preview.src}
        alt={preview.alt}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover"
      />
    </div>
  );
}
