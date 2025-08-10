// src/pages/Newsletter.tsx
import { useState } from "react";
import SEO from "../components/SEO";

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID; // optional

export default function Newsletter() {
  const [status, setStatus] = useState<"idle"|"ok"|"err">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      email: fd.get("email"),
      firstName: fd.get("firstName"),
      source: "newsletter",
    };

    if (FORMSPREE_ID) {
      try {
        const r = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: "POST",
          headers: { "Accept": "application/json", "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        setStatus(r.ok ? "ok" : "err");
      } catch { setStatus("err"); }
    } else {
      // Fallback: opens email draft
      window.location.href = `mailto:connect@clearspacepros.com?subject=Newsletter signup&body=${encodeURIComponent(JSON.stringify(payload, null, 2))}`;
      setStatus("ok");
    }
  }

  return (
    <main className="px-4 py-10">
      <SEO title="Newsletter | ClearSpace Pros LLC" canonical="https://your-domain.com/newsletter" />
      <section className="max-w-xl mx-auto bg-white border rounded-xl shadow-soft p-6">
        <h1 className="text-3xl font-bold text-navy mb-2">Join our newsletter</h1>
        <p className="text-clean-gray mb-6">Tips, occasional promos, and seasonal cleaning checklists. No spam.</p>

        {status === "ok" ? (
          <div className="p-4 rounded-md bg-green-50 text-green-700">Thanks! You’re on the list.</div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">First name (optional)</label>
              <input name="firstName" className="w-full border rounded-md px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input required type="email" name="email" className="w-full border rounded-md px-3 py-2" />
            </div>
            <button className="bg-clean-blue text-white px-5 py-2 rounded-md">Subscribe</button>
            {status === "err" && <p className="text-sm text-red-600">Couldn’t submit—try again.</p>}
          </form>
        )}
      </section>
    </main>
  );
}
