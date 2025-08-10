import ServiceLayout from "../components/ServiceLayout";
import SEO from "../components/SEO";

export default function Airbnb() {
  return (
    <>
      <SEO
        title="Airbnb Turnover Cleaning | ClearSpace Pros"
        description="Fast, reliable Airbnb turnover cleaning in Maryland. Impress guests with spotless spaces, fresh linens, and attention to every detail."
        keywords="Airbnb cleaning, short-term rental cleaning, Maryland cleaning service, turnover service"
      />
      <ServiceLayout
        kicker="Specialty"
        title="Airbnb Turnover Cleaning"
        intro="Deliver a 5-star stay with our prompt, thorough turnover service tailored to short-term rentals."
        benefits={[
          "Fast turnaround between guests",
          "Hotel-style presentation",
          "Linen change and refresh"
        ]}
        sections={[
          {
            title: "Includes",
            points: [
              "Full surface clean",
              "Fresh linens & towels",
              "Restock essentials",
              "Trash removal"
            ]
          },
          {
            title: "Why choose us",
            points: [
              "Discreet, reliable cleaners",
              "Familiarity with platform standards",
              "Flexible scheduling"
            ]
          }
        ]}
        faqs={[
          {
            q: "Do you handle laundry?",
            a: "Yes, we can wash and replace linens onsite or offsite depending on your needs."
          }
        ]}
      />
    </>
  );
}
