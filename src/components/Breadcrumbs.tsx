// src/components/Breadcrumbs.tsx
import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useMemo } from "react";

type Crumb = { label: string; href?: string };

const LABELS: Record<string, string> = {
  "about": "About",
  "services": "Services",
  "residential": "Residential",
  "standard": "Standard Cleaning",
  "deep": "Deep Cleaning",
  "move-out": "Move‑In / Move‑Out",
  "commercial": "Commercial Cleaning",
  "airbnb": "Airbnb Cleaning",
  "why-choose-us": "Why Choose Us",
  "contact": "Contact",
  "newsletter": "Newsletter",
};

export default function Breadcrumbs() {
  const { pathname } = useLocation();

  // Hide on Home
  if (pathname === "/") return null;

  const segments = useMemo(() => {
    // split and remove blanks
    return pathname.split("/").filter(Boolean);
  }, [pathname]);

  const crumbs: Crumb[] = useMemo(() => {
    const list: Crumb[] = [{ label: "Home", href: "/" }];

    let running = "";
    segments.forEach((seg, i) => {
      running += `/${seg}`;
      const label = LABELS[seg] ?? seg.replace(/-/g, " ").replace(/\b\w/g, m => m.toUpperCase());
      // link all except the last
      list.push({ label, href: i < segments.length - 1 ? running : undefined });
    });

    return list;
  }, [segments]);

  return (
    <div className="bg-white/95 border-b">
      <nav
        aria-label="Breadcrumb"
        className="container mx-auto px-4 py-3 text-sm text-navy flex flex-wrap items-center gap-1"
      >
        {crumbs.map((c, idx) => (
          <span key={`${c.label}-${idx}`} className="flex items-center">
            {c.href ? (
              <Link to={c.href} className="text-clean-blue hover:underline">
                {c.label}
              </Link>
            ) : (
              <span className="font-medium text-navy">{c.label}</span>
            )}
            {idx < crumbs.length - 1 && (
              <ChevronRight className="w-4 h-4 mx-2 text-clean-gray" aria-hidden="true" />
            )}
          </span>
        ))}
      </nav>
    </div>
  );
}
