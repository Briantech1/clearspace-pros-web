import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
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
                <h3 className="text-xl font-bold">ClearSpace Pros</h3>
                <p className="text-sm text-white/70">Professional Cleaning</p>
              </div>
            </div>
            <p className="text-white/80 mb-4">
              Your trusted partner for professional commercial cleaning services. 
              We keep your business spotless and your team productive.
            </p>
            <div className="text-sm text-white/60">
              Licensed • Bonded • Insured
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#services" className="hover:text-clean-blue transition-colors">Office Cleaning</a></li>
              <li><a href="#services" className="hover:text-clean-blue transition-colors">Retail Spaces</a></li>
              <li><a href="#services" className="hover:text-clean-blue transition-colors">Medical Facilities</a></li>
              <li><a href="#services" className="hover:text-clean-blue transition-colors">Educational Centers</a></li>
              <li><a href="#services" className="hover:text-clean-blue transition-colors">Industrial Cleaning</a></li>
              <li><a href="#services" className="hover:text-clean-blue transition-colors">Post-Construction</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#about" className="hover:text-clean-blue transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-clean-blue transition-colors">Services</a></li>
              <li><a href="#why-us" className="hover:text-clean-blue transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-clean-blue transition-colors">Get Quote</a></li>
              <li><a href="#contact" className="hover:text-clean-blue transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-clean-blue transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-clean-blue" />
                <div>
                  <div className="font-medium">(555) 123-4567</div>
                  <div className="text-sm text-white/60">24/7 Emergency Service</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-clean-blue" />
                <div>
                  <div className="font-medium">info@clearspacepros.com</div>
                  <div className="text-sm text-white/60">2-hour response time</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-clean-blue" />
                <div>
                  <div className="font-medium">Greater Metro Area</div>
                  <div className="text-sm text-white/60">50-mile service radius</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-clean-blue" />
                <div>
                  <div className="font-medium">Mon-Fri: 7AM-7PM</div>
                  <div className="text-sm text-white/60">Sat: 8AM-5PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              © 2024 ClearSpace Pros. All rights reserved.
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