import Hero from "../components/Hero";
import SEO from "../components/SEO";


export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CleaningService",
    "name": "ClearSpace Pros LLC",
    "image": "https://your-domain.com/og-image.jpg",
    "url": "https://your-domain.com/",
    "telephone": "+1-443-214-2467",
    "email": "connect@clearspacepros.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "14 Steeplejack Ct",
      "addressLocality": "Owings Mills",
      "addressRegion": "MD",
      "postalCode": "21117",
      "addressCountry": "US"
    },
    "areaServed": "Maryland",
    "priceRange": "$$",
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "07:00", "closes": "19:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "08:00", "closes": "17:00" }
    ],
    "sameAs": [
      "https://www.instagram.com/ClearSpacePros"
    ],
    "serviceType": ["Commercial Cleaning","Residential Cleaning","Airbnb Turnover","Move-In/Move-Out Cleaning"]
  };

  return (
    <main>
      <SEO
        title="ClearSpace Pros LLC | Commercial & Residential Cleaning in Maryland"
        description="Maryland’s owner-operated cleaning company for offices, facilities, Airbnb turnovers, and residential homes. Reliable, insured, satisfaction guaranteed."
        canonical="https://your-domain.com/"
        jsonLd={jsonLd}
      />
      <Hero />

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Your Space, Our Expertise</h2>
        <p className="text-lg text-gray-600">
          At ClearSpace Pros LLC, we specialize in delivering spotless results for Maryland’s homes, offices, and rental properties. 
          Our team is insured, background-checked, and committed to 100% satisfaction.
        </p>
      </section>

      {/* Services Overview */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-semibold mb-2">Commercial Cleaning</h3>
            <p>From offices to industrial spaces, keep your workplace safe, clean, and client-ready.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-semibold mb-2">Residential Cleaning</h3>
            <p>Standard, deep, or move-in/move-out cleaning for a healthy and welcoming home.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-semibold mb-2">Airbnb Turnovers</h3>
            <p>Fast, detailed turnovers that impress guests and earn you 5-star reviews.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose ClearSpace Pros?</h2>
        <ul className="grid md:grid-cols-2 gap-6 text-gray-700">
          <li>✔ Fully insured & background-checked team</li>
          <li>✔ Eco-friendly cleaning products available</li>
          <li>✔ Flexible scheduling — one-time or recurring</li>
          <li>✔ Satisfaction guaranteed — or we re-clean free</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="bg-clean-blue text-white py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Get Your Free Quote Today</h2>
        <p className="mb-6">Let’s make your space shine. Fast response, clear pricing, no hidden fees.</p>
        <a
          href="/contact"
          className="bg-white text-clean-blue font-semibold px-6 py-3 rounded-lg hover:bg-gray-100"
        >
          Request a Quote
        </a>
      </section>
    </main>
  );
}
