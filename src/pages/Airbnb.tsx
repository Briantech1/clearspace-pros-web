import SEO from "../components/SEO";
import StickyQuoteBar from "../components/StickyQuoteBar";

export default function Airbnb() {
  return (
    <>
      <SEO
        title="Airbnb / Short‑Term Rental Turnover | ClearSpace Pros"
        description="Fast, checklist‑driven turnovers with restock, linen change, and photo verification to keep your ratings high."
        canonical="https://your-domain.com/services/airbnb"
      />
      <StickyQuoteBar />
      <main className="p-8">
        <h1 className="text-3xl font-bold text-navy">Airbnb / STR Turnover</h1>
        <p className="mt-4 text-clean-gray">
          Quick, dependable turnovers between guests with consistent quality.
        </p>
      </main>
    </>
  );
}
