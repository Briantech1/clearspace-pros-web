import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./StickyQuoteBar.css";

export default function StickyQuoteBar() {
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  // Don’t show on the Contact page (the form is already there)
  const shouldHide = pathname.startsWith("/contact");

  useEffect(() => {
    if (shouldHide) {
      setShow(false);
      return;
    }
    // small delay before showing
    const t = setTimeout(() => setShow(true), 2500);
    return () => clearTimeout(t);
  }, [shouldHide, pathname]);

  if (shouldHide || dismissed) return null;

  return (
    <div className={`cs-quote-fab ${show ? "show" : ""}`} role="region" aria-label="Request a Quote">
      <button
        className="cs-close"
        aria-label="Dismiss quote button"
        onClick={() => setDismissed(true)}
        type="button"
      >
        ×
      </button>

      <div className="cs-text">
        Need a fast, accurate quote?
      </div>

      <Link
        to="/contact#quote-form"
        className="cs-action"
        aria-label="Go to contact form to request a quote"
      >
        Request a Quote
      </Link>
    </div>
  );
}
