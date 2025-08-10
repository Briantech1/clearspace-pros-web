// src/pages/Contact.tsx
import SEO from "../components/SEO";
import Contact from "../components/Contact";
import DeferredMount from "../components/DeferredMount";

const ContactPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Request a Quote | ClearSpace Pros LLC",
    "url": "https://your-domain.com/contact",
    "about": {
      "@type": "CleaningService",
      "name": "ClearSpace Pros LLC",
      "areaServed": "Maryland",
      "telephone": "+1-443-214-2467"
    }
  };

  return (
    <section className="bg-white py-12 px-4">
      <SEO
        title="Request a Quote | ClearSpace Pros LLC (Maryland)"
        description="Tell us about your space and get a fast, accurate cleaning quote. Commercial, residential, Airbnb, and move-in/move-out service across Maryland."
        canonical="https://your-domain.com/contact"
        jsonLd={jsonLd}
      />

      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-clean-blue mb-12">
          Request a Quote
        </h1>

        <div className="flex flex-col md:flex-row gap-10">
          {/* RIGHT: Request Form */}
          <div
            id="quote-form"
            className="md:w-2/3 w-full bg-white border border-gray-200 rounded-xl shadow-md p-6"
          >
            <DeferredMount>
              <Contact />
            </DeferredMount>
          </div>

          {/* LEFT: Get in Touch box */}
          <div className="md:w-1/3 w-full h-fit bg-white border border-gray-200 rounded-xl shadow-md p-6 text-sm space-y-4">
            <h3 className="text-xl font-semibold text-navy">Get in Touch</h3>

            <div>
              <p className="font-semibold">ClearSpace Pros LLC</p>
              <p><em>Based in Maryland — available by appointment only</em></p>
            </div>
            <p><strong>Email:</strong> connect@clearspacepros.com</p>
            <p><strong>Phone:</strong> (443) 214-2467</p>
            <p>
              <strong>Hours:</strong><br />
              Mon–Fri: 7am–7pm<br />
              Sat: 8am–5pm<br />
              Sun: Closed
            </p>

            <div className="border-t pt-4 mt-4 space-y-3">
              <h4 className="font-semibold text-base">Why Clients Choose Us</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Insured & owner-operated</li>
                <li>Reliable scheduling</li>
                <li>Trusted by property managers</li>
                <li>100% Satisfaction Guarantee</li>
              </ul>

              <div className="grid grid-cols-2 gap-3 pt-4">
                <div className="flex items-center space-x-2">
                  <img src="/badges/next.svg" alt="Insured by Next" className="h-6" />
                  <span>Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <img src="/badges/google.svg" alt="Google Rated" className="h-6" />
                  <span>Google Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </section>
  );
};

export default ContactPage;
