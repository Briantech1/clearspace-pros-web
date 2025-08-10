import SEO from "../components/SEO";
import StickyQuoteBar from "../components/StickyQuoteBar";

export default function DeepCleaning() {
  return (
    <>
      <SEO
        title="Deep Cleaning Service | ClearSpace Pros"
        description="Top‑to‑bottom detail clean for a fresh reset, including baseboards, fixtures, and hard‑to‑reach areas."
        canonical="https://your-domain.com/services/residential/deep"
      />
      <StickyQuoteBar />
      <main className="p-8">
        <h1 className="text-3xl font-bold text-navy">Deep Cleaning</h1>
        <p className="mt-4 text-clean-gray">
          A detailed clean that focuses on buildup, edges, and overlooked areas.
        </p>
      </main>
    </>
  );
}
