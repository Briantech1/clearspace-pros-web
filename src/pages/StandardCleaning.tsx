import SEO from "../components/SEO";
import StickyQuoteBar from "../components/StickyQuoteBar";

export default function StandardCleaning() {
  return (
    <>
      <SEO
        title="Standard Residential Cleaning | ClearSpace Pros"
        description="Routine home cleaning covering kitchens, bathrooms, dusting, vacuuming, and mopping—scheduled to fit your life."
        canonical="https://your-domain.com/services/residential/standard"
      />
      <StickyQuoteBar />
      <main className="p-8">
        <h1 className="text-3xl font-bold text-navy">Standard Cleaning</h1>
        <p className="mt-4 text-clean-gray">
          Recurring maintenance clean to keep your home fresh between deep cleans.
        </p>
      </main>
    </>
  );
}
