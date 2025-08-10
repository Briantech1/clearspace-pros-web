import { useEffect } from "react";

type SEOProps = {
  title?: string;
  description?: string;
  canonical?: string;
  noIndex?: boolean;
  jsonLd?: Record<string, any> | Record<string, any>[]; // optional structured data
};

export default function SEO({ title, description, canonical, noIndex, jsonLd }: SEOProps) {
  useEffect(() => {
    // <title>
    if (title) document.title = title;

    // <meta name="description">
    let descTag = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!descTag) {
      descTag = document.createElement("meta");
      descTag.setAttribute("name", "description");
      document.head.appendChild(descTag);
    }
    if (description) descTag.setAttribute("content", description);

    // canonical
    let linkTag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!linkTag) {
      linkTag = document.createElement("link");
      linkTag.setAttribute("rel", "canonical");
      document.head.appendChild(linkTag);
    }
    if (canonical) {
      linkTag.setAttribute("href", canonical);
    } else {
      // default to current URL
      linkTag.setAttribute("href", window.location.href);
    }

    // robots noindex
    let robots = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (!robots) {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      document.head.appendChild(robots);
    }
    robots.setAttribute("content", noIndex ? "noindex, nofollow" : "index, follow");

    // JSON-LD
    const existing = document.getElementById("page-jsonld");
    if (existing) existing.remove();
    if (jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "page-jsonld";
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [title, description, canonical, noIndex, jsonLd]);

  return null;
}
