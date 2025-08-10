import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function Residential() {
  return (
    <main className="px-4">
      <SEO
        title="Residential Cleaning | ClearSpace Pros LLC"
        description="Professional home cleaning in Maryland. One‑time or recurring plans: Standard, Deep, or Move‑In/Move‑Out."
        canonical="https://your-domain.com/services/residential"
      />

      <section className="max-w-6xl mx-auto py-10">
        <h1 className="text-3xl font-bold text-navy mb-2">Residential Cleaning</h1>
        <p className="text-clean-gray mb-8">
          Healthy, comfortable homes cleaned with care and consistency.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <Card
            title="Standard Cleaning"
            to="/services/residential/standard"
            points={[
              "Kitchens, baths, living areas, bedrooms",
              "Dust, wipe, vacuum & mop",
              "Great for maintenance"
            ]}
          />
          <Card
            title="Deep Cleaning"
            to="/services/residential/deep"
            points={[
              "Baseboards, detail dusting, appliance exteriors",
              "Soap scum & grout attention",
              "Best before recurring service"
            ]}
          />
          <Card
            title="Move‑In / Move‑Out"
            to="/services/residential/move-out"
            points={[
              "Inside cabinets, fridge & oven (on request)",
              "Walls/doors spot clean, fixtures, blinds",
              "Make‑ready quality"
            ]}
          />
        </div>

        <CTA />
      </section>
    </main>
  );
}

function Card({ title, to, points }: { title: string; to: string; points: string[] }) {
  return (
    <div className="rounded-xl border border-gray-200 p-6 bg-white">
      <h3 className="text-lg font-semibold mb-2">
        <Link to={to} className="hover:text-clean-blue">
          {title} →
        </Link>
      </h3>
      <ul className="text-sm text-clean-gray space-y-1">
        {points.map((p) => <li key={p}>• {p}</li>)}
      </ul>
    </div>
  );
}

function CTA() {
  return (
    <div className="mt-10 p-6 rounded-xl bg-gradient-to-r from-navy to-clean-blue text-white flex items-center justify-between gap-4 flex-col md:flex-row">
      <div>
        <h4 className="text-xl font-semibold">Ready for a sparkling home?</h4>
        <p className="text-white/90">Fast quotes. Clear pricing. Satisfaction guaranteed.</p>
      </div>
      <a href="/contact" className="bg-white text-clean-blue px-5 py-3 rounded-md font-semibold hover:bg-gray-100">
        Request a Quote
      </a>
    </div>
  );
}
