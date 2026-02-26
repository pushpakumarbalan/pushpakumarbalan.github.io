import Image from "next/image";
import { socialLinks } from "./lib/config";

export default function Page() {
  return (
    <section>
      <Image
        src="/profile.png"
        alt="Profile photo"
        className="rounded-lg bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-8 sm:mb-8"
        unoptimized
        width={280}
        height={320}
        priority
      />
      <h1 className="mb-8 text-2xl font-medium">Pushpa Kumar Balan</h1>
      <div className="prose prose-neutral dark:prose-invert">
          <p>
            I’m a second year master's student in Computer Science at the University of Central Missouri.
            
            {/* , advised by{' '}
            <a
              href="https://scholar.google.com/citations?user=mrnoXWYAAAAJ&hl"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Prof. Aijing Feng,
            </a> currently working on Bioinformatics + Gen AI. */}
          </p>

          <p>
            My research interests include multimodal models (e.g., vision, language, and speech), RL agents, and Gen AI,
            with a focus on improving inference, optimization, and scalability. I am interested in extending these models to
            cross-disciplinary domains.
          </p>

          <p>
            I’m also keen on challenges in representation learning, causal reasoning, and developing trustworthy, efficient,
            and interpretable AI systems.
          </p>



      </div>
      
    </section>
  );
}
