import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Awards",
  description: "Honors and awards received by Pushpa Kumar Balan",
};

export default function Awards() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Awards</h1>
      {/* Awards Section */}
      <div className="mt-8">
        <h2 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Honors & Awards</h2>

        {/* Awards List */}
        <div className="mb-4">
          <ul className="list-disc pl-5">
            <li className="text-sm text-gray-700 dark:text-gray-400 mb-2">
              <strong>Graduate Student Scholarly Research Fund</strong> · UCM Graduate Studies · Dec 2025
            </li>
            <li className="text-sm text-gray-700 dark:text-gray-400 mb-2">
              <strong>Graduate Student Scholarly Travel Fund</strong> · UCM Graduate Studies · Nov 2025
            </li>
            <li className="text-sm text-gray-700 dark:text-gray-400 mb-2">
              <strong>Cohere Labs Catalyst Grant</strong> · Cohere · Sep 2025
            </li>
            <li className="text-sm text-gray-700 dark:text-gray-400 mb-2">
              <strong>Graduate Assistantship Scholarship</strong> · University of Central Missouri · Aug 2025
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}