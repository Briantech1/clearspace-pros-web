// src/pages/FAQ.tsx
import SEO from "../components/SEO";

export default function FAQ() {
  return (
    <main className="px-4 py-10">
      <SEO
        title="Frequently Asked Questions | ClearSpace Pros LLC"
        description="Answers to common questions about our Maryland cleaning services."
        canonical="https://your-domain.com/faqs"
      />
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-navy mb-6">FAQs</h1>

        <div className="space-y-6 text-clean-gray">
          <div>
            <h2 className="text-lg font-semibold text-navy">What areas do you serve?</h2>
            <p>Maryland (Baltimore County and surrounding areas). Ask if you’re nearby.</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-navy">How do I get a quote?</h2>
            <p>Use our Request a Quote form on the Contact page. We’ll follow up quickly.</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-navy">What payments do you take?</h2>
            <p>Major cards via Stripe and payments through Jobber invoices.</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-navy">Are you insured?</h2>
            <p>Yes—bonded & insured. Documents available on request.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
