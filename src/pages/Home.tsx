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
        description="Maryland’s owner‑operated cleaning company for offices, facilities, Airbnb turnovers, and residential homes. Reliable, insured, satisfaction guaranteed."
        canonical="https://your-domain.com/"
        jsonLd={jsonLd}
      />
      <Hero />
    </main>
  );
}
