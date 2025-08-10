import ServiceLayout from "../components/ServiceLayout";
import SEO from "../components/SEO";

export default function Commercial() {
  return (
    <>
      <SEO
        title="Commercial Cleaning Services | ClearSpace Pros"
        description="Professional commercial cleaning for offices, warehouses, and retail spaces in Maryland. Flexible schedules and customized plans."
        keywords="commercial cleaning, office cleaning, warehouse cleaning, Maryland cleaning service"
      />
      <ServiceLayout
        kicker="Commercial"
        title="Commercial Cleaning"
        intro="Keep your workspace spotless and welcoming with our tailored commercial cleaning solutions."
        benefits={[
          "Custom cleaning schedules",
          "Eco-friendly products",
          "Professional, vetted staff"
        ]}
        sections={[
          {
            title: "Industries we serve",
            points: [
              "Office buildings",
              "Warehouses",
              "Retail stores",
              "Medical clinics"
            ]
          },
          {
            title: "What’s included",
            points: [
              "Trash & recycling",
              "Vacuuming & mopping",
              "Restroom sanitation",
              "Breakroom cleaning"
            ]
          }
        ]}
        faqs={[
          {
            q: "Do you offer after-hours service?",
            a: "Yes, we can clean during evenings or weekends to avoid disrupting your operations."
          }
        ]}
      />
    </>
  );
}
