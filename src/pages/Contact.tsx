import React from "react";
import Contact from "../components/Contact";

const ContactPage = () => {
  return (
    <div className="px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-clean-blue">
        Request a Quote
      </h1>
      <Contact />
    </div>
  );
};

export default ContactPage;
