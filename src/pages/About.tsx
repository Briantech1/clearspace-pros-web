// src/pages/WhyChooseUs.tsx
export default function WhyChooseUs() {
  return (
    <main className="px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-navy">Why Choose Us</h1>
        <ul className="mt-6 grid md:grid-cols-2 gap-6">
          {[
            "Bonded & insured with background‑checked staff",
            "Clear, checklist‑based cleaning every visit",
            "Flexible scheduling and quick communication",
            "Satisfaction guarantee—tell us and we’ll make it right",
          ].map((t, i) => (
            <li key={i} className="border rounded-lg p-5">{t}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
