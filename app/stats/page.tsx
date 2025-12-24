import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stats",
  description: "Visitor statistics and analytics",
};

export default function Stats() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Visitor Statistics</h1>
      
      {/* Map My Visitors Widget */}
      <div className="mt-8">
        <a href="https://mapmyvisitors.com/web/1c1g4" title="Visit tracker">
          <img src="https://mapmyvisitors.com/map.png?d=EF5MZid2UwkVrhzQRhE7xuxQ9og-Bs5FWMKfJLAsakY&cl=ffffff" alt="Visitor map" />
        </a>
      </div>
    </section>
  );
}
