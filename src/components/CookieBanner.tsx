// src/components/CookieBanner.tsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CookieBanner() {
  const [show, setShow] = useState(false);
  const [prefs, setPrefs] = useState<{necessary:boolean; analytics:boolean; marketing:boolean} | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("cs_cookie_prefs");
    if (!saved) setShow(true);
    else setPrefs(JSON.parse(saved));
  }, []);

  const save = (p: typeof prefs) => {
    if (!p) return;
    localStorage.setItem("cs_cookie_prefs", JSON.stringify(p));
    setPrefs(p);
    setShow(false);
    // Example: initialize analytics only if opted in
    if (p.analytics) {
      // initAnalytics();
    }
  };

  if (!show || prefs) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[500]">
      <div className="mx-auto max-w-5xl m-4 rounded-xl bg-white shadow-lg border p-4 md:p-5">
        <p className="text-sm text-gray-700">
          We use cookies to run the site (required), and—only if you allow—to analyze traffic and
          show relevant offers. Read our <Link to="/privacy" className="text-clean-blue underline">Privacy Policy</Link>.
        </p>

        <div className="mt-3 flex flex-col md:flex-row gap-2 md:items-center justify-between">
          <div className="text-sm space-x-3">
            <label className="inline-flex items-center gap-1">
              <input type="checkbox" checked disabled />
              <span>Necessary</span>
            </label>
            <label className="inline-flex items-center gap-1">
              <input id="ck-analytics" type="checkbox" />
              <span>Analytics</span>
            </label>
            <label className="inline-flex items-center gap-1">
              <input id="ck-marketing" type="checkbox" />
              <span>Marketing</span>
            </label>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() =>
                save({ necessary: true, analytics: false, marketing: false })
              }
              className="px-4 py-2 rounded-md border"
            >
              Reject non‑essential
            </button>
            <button
              onClick={() => {
                const a = (document.getElementById("ck-analytics") as HTMLInputElement)?.checked;
                const m = (document.getElementById("ck-marketing") as HTMLInputElement)?.checked;
                save({ necessary: true, analytics: !!a, marketing: !!m });
              }}
              className="px-4 py-2 rounded-md bg-clean-blue text-white"
            >
              Save choices
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
