import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              {/* Use the same logo as the browser tab (favicon) */}
              <img
                src="/favicon.png"
                alt="ClearSpace Pros LLC"
                className="h-10 w-10 rounded-lg"
                width={40}
                height={40}
                loading="lazy"
                decoding="async"
              />
              <div>
                <h3 className="text-xl font-bold">ClearSpace Pros LLC</h3>
                {/* New tagline */}
                <p className="text-sm text-white/80">Signature Cleaning Solutions</p>
              </div>
            </div>

            {/* Updated company blurb (now mentions residential too) */}
            <p className="text-white/80 mb-4">
              ClearSpace Pros LLC is an owner‑operated cleaning company based in Maryland.
              We specialize in recurring janitorial <span className="whitespace-nowrap">and residential</span> services
              with responsive, reliable service and attention to detail.
            </p>
            <div className="text-sm text-white/70">Licensed • Bonded • Insured</div>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-white/85">
              <li><a href="/services/commercial" className="hover:text-clean-blue">Commercial Office Cleaning</a></li>
              <li><a href="/services/residential/standard" className="hover:text-clean-blue">Residential — Standard</a></li>
              <li><a href="/services/residential/deep" className="hover:text-clean-blue">Residential — Deep</a></li>
              <li><a href="/services/residential/move-out" className="hover:text-clean-blue">Move‑In / Move‑Out</a></li>
              <li><a href="/services/airbnb" className="hover:text-clean-blue">Airbnb Turnover</a></li>
              <li><a href="/services" className="hover:text-clean-blue">All Services</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/85">
              <li><a href="/about" className="hover:text-clean-blue">About Us</a></li>
              <li><a href="/why-choose-us" className="hover:text-clean-blue">Why Choose Us</a></li>
              <li><a href="/newsletter" className="hover:text-clean-blue">Newsletter</a></li>
              <li><a href="/contact" className="hover:text-clean-blue">Contact / Request Quote</a></li>
              <li><a href="/faqs" className="hover:text-clean-blue">FAQs</a></li>
              <li><a href="/privacy" className="hover:text-clean-blue">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-clean-blue" />
                <div>
                  <div className="font-medium">(240) 233-4882</div>
                  <div className="text-sm text-white/70">24/7 voicemail — fast callback</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-clean-blue" />
                <div>
                  <div className="font-medium">connect@clearspacepros.com</div>
                  <div className="text-sm text-white/70">~2‑hour response time</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-clean-blue" />
                <div>
                  <div className="font-medium">Baltimore County & Surrounding MD</div>
                  <div className="text-sm text-white/70">Maryland regions</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-clean-blue" />
                <div>
                  <div className="font-medium">Mon–Fri: 7AM–7PM</div>
                  <div className="text-sm text-white/70">Sat: 8AM–5PM</div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="/contact"
                  className="inline-block bg-white text-clean-blue px-4 py-2 rounded-md font-semibold hover:bg-gray-100"
                >
                  Request a Quote
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/70 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} ClearSpace Pros LLC. All rights reserved.
            </div>
            <div className="text-white/70 text-sm">
              Professional commercial & residential cleaning you can trust.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
