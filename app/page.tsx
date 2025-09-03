import Image from "next/image";
import { socialLinks } from "./lib/config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-lg bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-8 sm:mb-8"
          unoptimized
          width={280}
          height={320}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium">Pushpa Kumar Balan</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p> I’m a Master's student in Computer Science at the University of Central Missouri, advising by <a
        href="https://scholar.google.com/citations?user=mrnoXWYAAAAJ&hl"
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: 'none', color: 'inherit' }}
>
  Prof. Aijing Feng
</a>, currently  working on Bioinformatics + genai. My research interests are Multimodal models (e.g. vision, language, speech), RL agents,  Gen AI and improving their inference and optimization and expanding their application in cross-disciplinary areas.         </p>
        <p>
          I’m open to research collaborations and happy to discuss potential projects. Feel free to reach out.
        </p>

      </div>
      
    </section>
  );
}
