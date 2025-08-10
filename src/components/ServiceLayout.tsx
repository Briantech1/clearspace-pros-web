// src/components/ServiceLayout.tsx
import { Link } from "react-router-dom";
import { CheckCircle, Phone, HelpCircle } from "lucide-react";

type Section = { title: string; points?: string[]; body?: string };
type FAQ = { q: string; a: string };

export default function ServiceLayout({
  title,
  kicker = "",
  intro,
  sections = [],
  benefits = [],
  faqs = [],
  children,
}: {
  title: string;
  kicker?: string;
  intro: string;
  sections?: Section[];
  benefits?: string[];
  faqs?: FAQ[];
  children?: React.ReactNode;
}) {
  return (
    <main className="bg-white">
      {/* Header */}
      <section className="px-4 py-10 md:py-12 border-b bg-secondary/40">
        <div className="max-w-6xl mx-auto">
          {kicker && <p className="text-clean-blue font-semibold mb-2">{kicker}</p>}
          <h1 className="text-3xl md:text-4xl font-bold text-navy">{title}</h1>
          <p className="mt-3 text-clean-gray max-w-3xl">{intro}</p>

          {/* CTA row */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/contact#quote-form"
              className="bg-fresh-green text-white px-6 py-3 rounded-md hover:bg-fresh-green/90"
            >
              Request a Quote
            </Link>
            <a
              href="tel:4432142467"
              className="px-6 py-3 rounded-md border text-navy hover:bg-navy/5 inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4" /> (443) 214‑2467
            </a>
          </div>
        </div>
      </section>

      {/* Body grid */}
      <section className="px-4 py-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="md:col-span-2 space-y-8">
            {sections.map((s, i) => (
              <div key={i}>
                <h2 className="text-xl font-semibold text-navy">{s.title}</h2>
                {s.body && <p className="mt-2 text-clean-gray">{s.body}</p>}
                {!!s.points?.length && (
                  <ul className="mt-3 space-y-2">
                    {s.points.map((p, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-clean-blue mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {children /* for page-specific extras */}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {!!benefits.length && (
              <div className="border rounded-lg p-5">
                <h3 className="font-semibold text-navy">Why Choose Us</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  {benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-fresh-green mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {!!faqs.length && (
              <div className="border rounded-lg p-5">
                <h3 className="font-semibold text-navy flex items-center gap-2">
                  <HelpCircle className="w-4 h-4" /> FAQs
                </h3>
                <div className="mt-3 space-y-3 text-sm">
                  {faqs.map((f, i) => (
                    <details key={i} className="group">
                      <summary className="cursor-pointer font-medium text-navy/90">
                        {f.q}
                      </summary>
                      <p className="mt-2 text-clean-gray">{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>
    </main>
  );
}
