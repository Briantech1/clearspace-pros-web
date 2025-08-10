import ServiceLayout from "../components/ServiceLayout";
import SEO from "../components/SEO";

export default function StandardCleaning() {
  return (
    <>
      <SEO
        title="Standard Cleaning Services | ClearSpace Pros"
        description="Regular upkeep for your home in Maryland. Keep your space fresh and inviting with our standard cleaning packages."
        keywords="standard cleaning, regular cleaning, Maryland cleaning service, home cleaning"
      />
      <ServiceLayout
        kicker="Residential"
        title="Standard Cleaning"
        intro="Maintain a consistently clean home with our reliable standard cleaning service."
        benefits={[
          "Flexible scheduling",
          "Consistent quality",
          "Friendly, trusted staff"
        ]}
        sections={[
          {
            title: "What’s included",
            points: [
              "Dusting all surfaces",
              "Vacuuming & mopping",
              "Bathroom sanitation",
              "Kitchen wipe-downs"
            ]
          },
          {
            title: "Great for",
            points: [
              "Weekly or bi-weekly maintenance",
              "Busy households",
              "Pet owners"
            ]
          }
        ]}
        faqs={[
          {
            q: "Can I combine with deep cleaning?",
            a: "Yes, you can schedule an occasional deep clean alongside your regular service."
          }
        ]}
      />
    </>
  );
}
