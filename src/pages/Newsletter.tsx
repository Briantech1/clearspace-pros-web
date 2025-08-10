import SEO from "../components/SEO";

export default function Newsletter() {
  return (
    <main className="p-8">
      <SEO
        title="Newsletter | ClearSpace Pros"
        description="Tips, specials, and updates from our Maryland cleaning team—straight to your inbox."
        canonical="https://your-domain.com/newsletter"
      />
      <h1 className="text-3xl font-bold text-navy">Newsletter</h1>
      <p className="mt-4 text-clean-gray">
        Subscribe to receive updates and seasonal offers.
      </p>
    </main>
  );
}
