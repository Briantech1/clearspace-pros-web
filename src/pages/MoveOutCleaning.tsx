import SEO from "../components/SEO";
import StickyQuoteBar from "../components/StickyQuoteBar";

export default function MoveOutCleaning() {
  return (
    <>
      <SEO
        title="Move‑In/Move‑Out Cleaning | ClearSpace Pros"
        description="Make‑ready cleaning for property turns and new tenants, including inside cabinets and appliances by request."
        canonical="https://your-domain.com/services/residential/move-out"
      />
      <StickyQuoteBar />
      <main className="p-8">
        <h1 className="text-3xl font-bold text-navy">Move‑In / Move‑Out Cleaning</h1>
        <p className="mt-4 text-clean-gray">
          Leave it spotless for the next hand‑off—or arrive to a space that feels brand new.
        </p>
      </main>
    </>
  );
}
