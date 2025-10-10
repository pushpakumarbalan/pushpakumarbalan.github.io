import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Professional and academic services by Pushpa Kumar Balan",
};

export default function Services() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Service</h1>
      {/* Services Section */}
      <div className="mt-8">
        <h2 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Reviewer</h2>

        {/* Reviewer Roles */}
        <div className="mb-4">
          <ul className="list-disc pl-5">
            <li className="text-sm text-gray-700 dark:text-gray-400">
              ICASSP (International Conference on Acoustics, Speech, and Signal Processing), 2026. 
            </li>
            <li className="text-sm text-gray-700 dark:text-gray-400">
              AAAI-26 SAPP (Student Abstract and Poster Program) — PC Member & Reviewer, 2026
            </li>
            <li className="text-sm text-gray-700 dark:text-gray-400">
              NeurIPS Conference Ethics Review, Datasets and Benchmarks Track Ethics Review; Workshops: SPIGM, ACA, AI4D3 — NeurIPS, 2025
            </li>
          </ul>
        </div>

        {/* Artifact Evaluation / Committees */}
        <div className="mb-4">
          <h2 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Artifact Evaluation Committee</h2>
          <ul className="list-disc pl-5">
            <li className="text-sm text-gray-700 dark:text-gray-400">
              EuroSys '26 Artifact Evaluation Committee (Fall), 2025
            </li>
            <li className="text-sm text-gray-700 dark:text-gray-400">
              FAST '26 Artifact Evaluation Committee (Spring), 2025
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
