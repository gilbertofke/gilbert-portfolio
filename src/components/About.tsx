import Image from "next/image";
import { about } from "@/data/site";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="page-container grid gap-10 md:grid-cols-[minmax(0,1fr)_18rem] md:gap-16 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div>
          <SectionHeading eyebrow="About" title={about.title} />
          <div className="mt-8 max-w-prose space-y-5">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="order-first md:order-last">
          <Image
            src={about.photo.src}
            alt={about.photo.alt}
            width={640}
            height={640}
            sizes="(min-width: 1024px) 320px, (min-width: 768px) 288px, 176px"
            className="aspect-square w-44 rounded-xl border border-line object-cover md:w-full"
          />
        </div>
      </div>
    </section>
  );
}