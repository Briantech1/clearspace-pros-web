import ServiceLayout from "../components/ServiceLayout";
import SEO from "../components/SEO";

export default function DeepCleaning() {
  return (
    <>
      <SEO
        title="Deep Cleaning Services | ClearSpace Pros"
        description="Detailed deep cleaning services in Maryland. Perfect for seasonal refreshes, pre-event prep, or post-construction cleanups."
        keywords="deep cleaning, detailed cleaning, Maryland cleaning service, seasonal cleaning"
      />
      <ServiceLayout
        kicker="Residential"
        title="Deep Cleaning"
        intro="Go beyond the basics with a meticulous, top-to-bottom clean that tackles dirt and grime in every corner."
        benefits={[
          "Thorough cleaning of all areas",
          "High-touch surface sanitation",
          "Attention to overlooked spaces"
        ]}
        sections={[
          {
            title: "Popular reasons to book",
            points: [
              "Seasonal refresh",
              "Before hosting events",
              "Post-construction dust removal"
            ]
          },
          {
            title: "Areas of focus",
            points: [
              "Baseboards & trim",
              "Behind appliances",
              "Ceiling fans & vents",
              "Detailed bathroom scrubbing"
            ]
          }
        ]}
        faqs={[
          {
            q: "How long does a deep clean take?",
            a: "Typically 4–8 hours depending on the size and condition of the property."
          }
        ]}
      />
    </>
  );
}
