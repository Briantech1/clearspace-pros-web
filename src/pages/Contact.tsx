import Contact from "../components/Contact";

const ContactPage = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-clean-blue mb-12">
          Request a Quote
        </h1>

        <div className="flex flex-col md:flex-row gap-10">
          {/* RIGHT: Request Form (keep wide and plain for now) */}
          <div className="md:w-2/3 w-full bg-white border border-gray-200 rounded-xl shadow-md p-6">
  <Contact />
</div>


          {/* LEFT: Sticky, styled "Get in Touch" info box */}
          <div className="md:w-1/3 w-full h-fit bg-white border border-gray-200 rounded-xl shadow-md p-6 text-sm space-y-4">
  <h3 className="text-xl font-semibold text-navy">Get in Touch</h3>
  
  <div>
    <p className="font-semibold">ClearSpace Pros LLC</p>
    <p>14 Steeplejack Ct<br />Owings Mills, MD 21117</p>
  </div>
  <p><strong>Email:</strong> connect@clearspacepros.com</p>
  <p><strong>Phone:</strong> (443) 214-2467</p>
  <p>
    <strong>Hours:</strong><br />
    Mon–Fri: 7am – 7pm<br />
    Sat: 9am – 5pm<br />
    Sun: Closed
  </p>

  <div className="border-t pt-4 mt-4 space-y-3">
    <h4 className="font-semibold text-base">Why Clients Choose Us</h4>
    <ul className="list-disc list-inside space-y-1">
      <li>Insured by Next Insurance</li>
      <li>Locally Owned & Operated</li>
      <li>Trusted by Property Managers</li>
      <li>100% Satisfaction Guarantee</li>
    </ul>

    <div className="grid grid-cols-2 gap-3 pt-4">
      <div className="flex items-center space-x-2">
        <img src="/badges/next.svg" alt="Insured by Next" className="h-6" />
        <span>Insured</span>
      </div>
      <div className="flex items-center space-x-2">
        <img src="/badges/google.svg" alt="Google Rated" className="h-6" />
        <span>5.0 Google Reviews</span>

        
        
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
