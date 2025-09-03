import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Professional and academic services by Pushpa Kumar Balan",
};

export default function Services() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Services</h1>
      {/* Services Section */}
      <div className="mt-8">
        <h2 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Reviewer</h2>

        {/* Reviewer Roles */}
        <div className="mb-4">
          <p className="text-sm text-gray-700 dark:text-gray-400">
            <li>NeurIPS Conference Ethics Review, Datasets and Benchmarks Track Ethics Review; Workshops: SPIGM, AI4Science, ACA, AI4D3 — NeurIPS, 2025</li>
          </p>
        </div>

        {/* Artifact Evaluation / Committees */}
        <div className="mb-4">
          <h2 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Artifact Evaluation Committee</h2>
          <p className="text-sm text-gray-700 dark:text-gray-400">
            <li>EuroSys ’26 Artifact Evaluation Committee (Fall), 2025</li>
            <li>FAST ’26 Artifact Evaluation Committee (Spring), 2025</li>
          </p>
        </div>
      </div>
    </section>
  );
}
