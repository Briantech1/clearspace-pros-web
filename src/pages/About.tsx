import SEO from "../components/SEO";

export default function About() {
  return (
    <main className="p-8">
      <SEO
        title="About ClearSpace Pros LLC | Maryland Cleaning Company"
        description="Owner‑operated cleaning company serving Maryland with recurring janitorial and specialty services for offices, facilities, and homes."
        canonical="https://your-domain.com/about"
      />
      <h1 className="text-3xl font-bold text-navy">About Us</h1>
      <p className="mt-4 text-clean-gray">
        We’re ClearSpace Pros—reliable, insured, and detail‑oriented. We provide commercial
        and residential cleaning across Maryland with flexible scheduling and a satisfaction guarantee.
      </p>
    </main>
  );
}
