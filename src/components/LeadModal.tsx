// src/components/LeadModal.tsx
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

type Status = "idle" | "sending" | "done" | "error";
const KEY = "cs_lead_modal_seen_at";

export default function LeadModal() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [err, setErr] = useState<string | null>(null);
  const location = useLocation();

  // Only show on HOME, first-time visitors (30‑day cooldown), after cookies accepted
  useEffect(() => {
    if (location.pathname !== "/") return; // home only

    const cookiePrefs = localStorage.getItem("cs_cookie_prefs");
    // if you want to require cookie acceptance, uncomment next line:
    // if (!cookiePrefs) return;

    const last = localStorage.getItem(KEY);
    const THIRTY_DAYS = 1000 * 60 * 60 * 24 * 30;
    if (!last || Date.now() - Number(last) > THIRTY_DAYS) {
      const t = setTimeout(() => setOpen(true), 900);
      return () => clearTimeout(t);
    }
  }, [location.pathname]);

  const close = () => setOpen(false);
  const markSeen = () => localStorage.setItem(KEY, String(Date.now()));

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr(null);
    setStatus("sending");

    const fd = new FormData(e.currentTarget);
    const payload = {
      token: import.meta.env.VITE_LEADS_TOKEN, // must exist
      email: String(fd.get("email") || ""),
      bedrooms: String(fd.get("beds") || ""),
      bathrooms: String(fd.get("baths") || ""),
      notes: String(fd.get("notes") || ""),
      source: "lead-modal",
      page: window.location.href,
      utm: Object.fromEntries(new URLSearchParams(window.location.search)),
    };

    if (!payload.token) {
      setStatus("error");
      setErr("Missing VITE_LEADS_TOKEN");
      return;
    }
    try {
      const res = await fetch(import.meta.env.VITE_LEADS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("done");
      markSeen(); // don’t re‑show for 30 days
    } catch (e) {
      console.error(e);
      setStatus("error");
      setErr("Something went wrong. Please try again in a moment.");
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[600] bg-black/50 flex items-center justify-center p-4"
      onClick={() => {
        markSeen();
        close();
      }}
    >
      <div
        className="bg-white rounded-xl shadow-large max-w-lg w-full p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
          onClick={() => {
            markSeen();
            close();
          }}
          aria-label="Close"
        >
          ✕
        </button>

        {status !== "done" ? (
          <>
            <h3 className="text-2xl font-bold text-navy">
              Get 10% Off Your First One‑Time Cleaning
            </h3>
            <p className="text-clean-gray mt-2">
              Quick estimate—no redirect. New clients only.
            </p>

            <form className="mt-4 grid gap-3" onSubmit={onSubmit}>
              <input
                required
                type="email"
                name="email"
                placeholder="Email address"
                className="border rounded-md px-3 py-2"
              />
              <div className="grid grid-cols-2 gap-3">
                <select name="beds" className="border rounded-md px-3 py-2" defaultValue="">
                  <option value="" disabled>
                    Beds
                  </option>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
                <select name="baths" className="border rounded-md px-3 py-2" defaultValue="">
                  <option value="" disabled>
                    Baths
                  </option>
                  {[1, 2, 3, 4].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>

              <textarea
                name="notes"
                placeholder="Anything else? (optional)"
                className="border rounded-md px-3 py-2 min-h-[70px]"
              />

              <button
                disabled={status === "sending"}
                className="bg-fresh-green text-white rounded-md px-4 py-2"
              >
                {status === "sending" ? "Sending…" : "Get estimate"}
              </button>

              {err && <p className="text-red-600 text-sm">{err}</p>}

              <p className="text-xs text-gray-500">
                By continuing you agree to our{" "}
                <Link to="/privacy" className="underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </form>
          </>
        ) : (
          <div className="text-center py-6">
            <h3 className="text-2xl font-bold text-navy">Thanks! 🎉</h3>
            <p className="text-clean-gray mt-2">
              We got your info and emailed a confirmation. We’ll follow up with next steps shortly.
            </p>
            <button className="mt-6 bg-navy text-white rounded-md px-4 py-2" onClick={close}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
