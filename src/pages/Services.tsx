import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function Services() {
  return (
    <main className="px-4">
      <SEO
        title="Our Services | ClearSpace Pros LLC"
        description="Commercial janitorial, residential cleaning, and Airbnb turnovers across Maryland. Standard, Deep, and Move‑In/Move‑Out options."
        canonical="https://your-domain.com/services"
      />

      <section className="max-w-6xl mx-auto py-10">
        <h1 className="text-3xl font-bold text-navy mb-2">Our Services</h1>
        <p className="text-clean-gray mb-8">
          Explore our most requested services below.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Residential */}
          <div className="rounded-xl border border-gray-200 p-6 bg-white">
            <h2 className="text-xl font-semibold mb-2">
              <Link to="/services/residential" className="hover:text-clean-blue">
                Residential Cleaning →
              </Link>
            </h2>
            <p className="text-clean-gray mb-4">Standard, Deep, and Move‑In/Move‑Out.</p>
            <ul className="space-y-2 text-sm">
              <li><Link className="text-clean-blue hover:underline" to="/services/residential/standard">• Standard Cleaning</Link></li>
              <li><Link className="text-clean-blue hover:underline" to="/services/residential/deep">• Deep Cleaning</Link></li>
              <li><Link className="text-clean-blue hover:underline" to="/services/residential/move-out">• Move‑In / Move‑Out</Link></li>
            </ul>
          </div>

          {/* Commercial */}
          <div className="rounded-xl border border-gray-200 p-6 bg-white">
            <h2 className="text-xl font-semibold mb-2">
              <Link to="/services/commercial" className="hover:text-clean-blue">
                Commercial Cleaning →
              </Link>
            </h2>
            <p className="text-clean-gray">
              Recurring janitorial for offices & facilities.
            </p>
          </div>

          {/* Airbnb */}
          <div className="rounded-xl border border-gray-200 p-6 bg-white">
            <h2 className="text-xl font-semibold mb-2">
              <Link to="/services/airbnb" className="hover:text-clean-blue">
                Airbnb Turnover →
              </Link>
            </h2>
            <p className="text-clean-gray">
              Fast, checklist‑driven turnovers for 5‑star stays.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
