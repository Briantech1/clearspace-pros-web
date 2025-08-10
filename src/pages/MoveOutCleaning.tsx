// src/pages/MoveOutCleaning.tsx
import ServiceLayout from "../components/ServiceLayout";
import SEO from "../components/SEO"; // assuming you have the SEO component

export default function MoveOutCleaning() {
  return (
    <>
      <SEO
        title="Move-In / Move-Out Cleaning Services | ClearSpace Pros"
        description="Professional move-in and move-out cleaning in Maryland. Ideal for landlords, tenants, and sellers who need a spotless, inspection-ready space."
        keywords="move out cleaning, move in cleaning, Maryland cleaning service, landlord cleaning, tenant move out clean"
      />
      <ServiceLayout
        kicker="Residential"
        title="Move-In / Move-Out Cleaning"
        intro="Make your handoff easy with a thorough vacant-home clean, ideal for landlords, tenants, and sellers."
        benefits={[
          "Vacant-home specialists",
          "Checklist for landlords",
          "Fast turnarounds available"
        ]}
        sections={[
          {
            title: "What we handle",
            points: [
              "Inside cabinets & drawers",
              "Inside fridge & oven",
              "Bathrooms detailed",
              "Floors vacuumed & mopped"
            ]
          },
          {
            title: "Recommendations",
            points: [
              "Schedule after movers are done",
              "Power & water should be on",
              "Let us know any inspection checklist"
            ]
          }
        ]}
        faqs={[
          {
            q: "Can you provide an invoice for landlords?",
            a: "Absolutely—itemized invoices and photos available by request."
          }
        ]}
      />
    </>
  );
}
