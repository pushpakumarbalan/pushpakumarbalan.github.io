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
          <ul className="list-disc pl-5">
            <li className="text-sm text-gray-700 dark:text-gray-400 mb-2">
              Reviewer, ICLR Workshop AIWILD — ICLR 2026
            </li>
            <li className="text-sm text-gray-700 dark:text-gray-400 mb-2">
              PC Member & Reviewer,  SAPP (Student Abstract and Poster Program) — AAAI 2026
            </li>
            <li className="text-sm text-gray-700 dark:text-gray-400 mb-2">
               Ethics & Datasets and Benchmarks Track Ethics Review; Workshops: SPIGM, ACA, AI4D3 — NeurIPS 2025
            </li>
          </ul>
        </div>

        {/* Area Chair Roles */}
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Area Chair</h2>
          <ul className="list-disc pl-5">
            <li className="text-sm text-gray-700 dark:text-gray-400 mb-2">
              Area Chair, Machine Learning for Signal Processing [ML] — ICASSP 2026
            </li>
          </ul>
        </div>

        {/* Artifact Evaluation / Committees */}
        <div className="mb-4">
          <h2 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Artifact Evaluation Committee</h2>
          <ul className="list-disc pl-5">
            <li className="text-sm text-gray-700 dark:text-gray-400 mb-2">
              Artifact Evaluation Committee, EuroSys '26 (Fall) — 2025
            </li>
            <li className="text-sm text-gray-700 dark:text-gray-400">
              Artifact Evaluation Committee, FAST '26 (Spring) — 2025
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
