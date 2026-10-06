import Image from "next/image";
import { about } from "@/data/site";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="page-container grid gap-10 md:grid-cols-[minmax(0,1fr)_16rem] md:gap-16 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="md:self-center">
          <SectionHeading eyebrow="About" title={about.title} />
          <div className="mt-8 max-w-prose space-y-5">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="order-first flex justify-center md:order-last md:block md:self-center">
          <Image
            src={about.photo.src}
            alt={about.photo.alt}
            width={640}
            height={640}
            sizes="(min-width: 1024px) 288px, (min-width: 768px) 256px, (min-width: 640px) 192px, 160px"
            className="aspect-square w-40 rounded-full object-cover object-[50%_25%] ring-2 ring-turq ring-offset-4 ring-offset-paper sm:w-48 md:w-64 lg:w-72"
          />
        </div>
      </div>
    </section>
  );
}