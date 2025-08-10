import SEO from "../components/SEO";
import StickyQuoteBar from "../components/StickyQuoteBar";

export default function Residential() {
  return (
    <>
      <SEO
        title="Residential Cleaning in Maryland | ClearSpace Pros LLC"
        description="Standard, deep, and move‑in/move‑out home cleaning with reliable scheduling and a satisfaction guarantee."
        canonical="https://your-domain.com/services/residential"
      />
      <StickyQuoteBar />
      <main className="p-8">
        <h1 className="text-3xl font-bold text-navy">Residential Cleaning</h1>
        <p className="mt-4 text-clean-gray">
          Choose the level of clean that fits your home and schedule.
        </p>
      </main>
    </>
  );
}
