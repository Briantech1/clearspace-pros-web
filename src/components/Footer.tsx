// src/components/Footer.tsx
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">CS</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">ClearSpace Pros LLC</h3>
                <p className="text-sm text-white/70">Professional Cleaning</p>
              </div>
            </div>
            <p className="text-white/80 mb-4">
              ClearSpace Pros LLC is an owner‑operated commercial cleaning company based in Maryland.
              We specialize in recurring janitorial services with responsive, reliable service and attention to detail.
            </p>
            <div className="text-sm text-white/60">
              Licensed • Bonded • Insured
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-white/80">
              <li><Link to="/services/commercial" className="hover:text-clean-blue transition-colors">Commercial Office Cleaning</Link></li>
              <li><Link to="/services/residential/standard" className="hover:text-clean-blue transition-colors">Residential — Standard</Link></li>
              <li><Link to="/services/residential/deep" className="hover:text-clean-blue transition-colors">Residential — Deep</Link></li>
              <li><Link to="/services/residential/move-out" className="hover:text-clean-blue transition-colors">Move‑In / Move‑Out</Link></li>
              <li><Link to="/services/airbnb" className="hover:text-clean-blue transition-colors">Airbnb Turnover</Link></li>
              <li><Link to="/services" className="hover:text-clean-blue transition-colors">All Services</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li><Link to="/about" className="hover:text-clean-blue transition-colors">About Us</Link></li>
              <li><Link to="/why-choose-us" className="hover:text-clean-blue transition-colors">Why Choose Us</Link></li>
              <li><Link to="/newsletter" className="hover:text-clean-blue transition-colors">Newsletter</Link></li>
              {/* Merge Contact + Get Quote into one canonical CTA */}
              <li>
                <Link to="/contact#quote-form" className="hover:text-clean-blue transition-colors">
                  Contact / Request Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-clean-blue" />
                <div>
                  <a href="tel:14432142467" className="font-medium hover:underline">(443) 214‑2467</a>
                  <div className="text-sm text-white/60">24/7 voicemail — fast callback</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-clean-blue" />
                <div>
                  <a href="mailto:connect@clearspacepros.com" className="font-medium hover:underline">
                    connect@clearspacepros.com
                  </a>
                  <div className="text-sm text-white/60">~2‑hour response time</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-clean-blue" />
                <div>
                  <div className="font-medium">Baltimore County & Surrounding MD</div>
                  <div className="text-sm text-white/60">Maryland regions</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-clean-blue" />
                <div>
                  <div className="font-medium">Mon–Fri: 7AM–7PM</div>
                  <div className="text-sm text-white/60">Sat: 8AM–5PM</div>
                </div>
              </div>

              {/* Primary footer CTA */}
              <div className="pt-2">
                <Link
                  to="/contact#quote-form"
                  className="inline-block mt-3 bg-clean-blue text-white px-5 py-2 rounded-md font-semibold hover:opacity-90 transition"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <div className="text-white/60 text-sm">
              © {year} ClearSpace Pros LLC. All rights reserved.
            </div>
            <div className="text-white/60 text-sm">
              Professional commercial cleaning services you can trust.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
