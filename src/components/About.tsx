import Image from "next/image";
import { about } from "@/data/site";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="pb-10 pt-8 md:pb-12 md:pt-10">
      <div className="page-container grid gap-8 md:grid-cols-[minmax(0,1fr)_13rem] md:gap-12 lg:grid-cols-[minmax(0,1fr)_15rem]">
        <div className="md:self-center">
          <SectionHeading eyebrow="About" title={about.title} />
          <div className="mt-5 max-w-3xl space-y-3">
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
            sizes="(min-width: 1024px) 240px, (min-width: 768px) 208px, (min-width: 640px) 192px, 160px"
            className="aspect-square w-40 rounded-full object-cover object-[50%_25%] ring-2 ring-turq ring-offset-4 ring-offset-paper sm:w-48 md:w-52 lg:w-60"
          />
        </div>
      </div>
    </section>
  );
}