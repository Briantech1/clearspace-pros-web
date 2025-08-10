import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function Services() {
  return (
    <main className="p-8">
      <SEO
        title="Cleaning Services in Maryland | ClearSpace Pros LLC"
        description="Commercial office cleaning, residential cleaning, Airbnb turnover, and move‑in/move‑out services across Maryland."
        canonical="https://your-domain.com/services"
      />
      <h1 className="text-3xl font-bold text-navy">Our Services</h1>
      <p className="mt-4 text-clean-gray">
        Explore our most requested services below.
      </p>

      <ul className="mt-8 grid gap-4 md:grid-cols-2">
        <li className="border rounded-lg p-5 hover:shadow-medium">
          <Link to="/services/residential" className="text-clean-blue font-semibold">Residential Cleaning →</Link>
          <p className="text-clean-gray mt-1">Standard, deep, and move‑in/move‑out.</p>
        </li>
         <li className="border rounded-lg p-5 hover:shadow-medium">
          <Link to="/services/commercial" className="text-clean-blue font-semibold">Commercial Cleaning →</Link>
          <p className="text-clean-gray mt-1">Recurring janitorial for offices & facilities.</p>
        </li>
        <li className="border rounded-lg p-5 hover:shadow-medium">
          <Link to="/services/airbnb" className="text-clean-blue font-semibold">Airbnb Turnover →</Link>
          <p className="text-clean-gray mt-1">Fast, checklist‑driven turnovers.</p>
        </li>
      </ul>
    </main>
  );
}
