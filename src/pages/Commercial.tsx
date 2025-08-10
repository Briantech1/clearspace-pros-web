import SEO from "../components/SEO";
import StickyQuoteBar from "../components/StickyQuoteBar";

export default function Commercial() {
  return (
    <>
      <SEO
        title="Commercial & Janitorial Cleaning | ClearSpace Pros"
        description="Recurring office and facility cleaning with high‑touch disinfection, restrooms, and trash management. Flexible daily/weekly schedules."
        canonical="https://your-domain.com/services/commercial"
      />
      <StickyQuoteBar />
      <main className="p-8">
        <h1 className="text-3xl font-bold text-navy">Commercial Cleaning</h1>
        <p className="mt-4 text-clean-gray">
          Reliable janitorial for offices, suites, and facilities across Maryland.
        </p>
      </main>
    </>
  );
}
