// src/components/Header.tsx

import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";
import Logo from "../assets/header-logo.png.jpg";
import MarylandFlag from "../assets/maryland-flag.png.jpg";



const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Tier 1: Utility Bar */}
      <div className="flex justify-between items-center px-4 py-2 bg-clean-blue text-white text-sm">
  <div className="flex items-center space-x-2">
    <img
      src={MarylandFlag}
      alt="Maryland Flag"
      className="w-10 h-6 object-cover rounded"
    />
    <span className="text-white/90 text-sm md:text-base">
      Proudly Serving Maryland
    </span>
  </div>
  <div className="flex space-x-4 items-center">
    <a href="https://www.instagram.com/ClearSpacePros" target="_blank" rel="noopener noreferrer">
      <Instagram className="w-4 h-4" />
    </a>
    <a href="#">
      <Facebook className="w-4 h-4" />
    </a>
    <a href="#">
      <Twitter className="w-4 h-4" />
    </a>
    <Link to="/blog">Blog</Link>
    <Link to="/newsletter">Newsletter</Link>
  </div>
</div>


      {/* Tier 2: Main Header */}
      <div className="flex flex-col items-center justify-center py-4 bg-white border-b">
        <Link to="/" className="block">
          <img
            src={Logo}
            alt="ClearSpace Pros Logo"
            className="h-24 md:h-20 w-auto"
          />
        </Link>
        <p className="text-clean-blue text-sm mt-2">
          <a href="tel:4432142467" className="hover:underline">
            CALL FOR MORE INFO: (443) 214-2467
          </a>
        </p>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex justify-center space-x-6 py-3 bg-white">
        <Link to="/about" className="text-navy hover:text-clean-blue">About</Link>
        <Link to="/services" className="text-navy hover:text-clean-blue">Services</Link>
        <Link to="/why-choose-us" className="text-navy hover:text-clean-blue">Why Choose Us</Link>
        <Link to="/contact" className="text-navy hover:text-clean-blue">Contact</Link>
        <a href="#" className="text-navy hover:text-clean-blue">Blog</a>
        <Link to="/newsletter" className="text-navy hover:text-clean-blue">Newsletter</Link>

      </nav>

      {/* Mobile Menu Stack */}
      <div className="md:hidden flex justify-end px-4 py-2 bg-white">
        <details className="relative">
          <summary className="cursor-pointer text-navy font-semibold">☰</summary>
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg py-2">
            <Link to="/about" className="block px-4 py-2 text-navy hover:bg-clean-blue/10">About</Link>
            <Link to="/services" className="block px-4 py-2 text-navy hover:bg-clean-blue/10">Services</Link>
            <Link to="/why-choose-us" className="block px-4 py-2 text-navy hover:bg-clean-blue/10">Why Choose Us</Link>
            <Link to="/contact" className="block px-4 py-2 text-navy hover:bg-clean-blue/10">Contact</Link>
            <a href="#" className="block px-4 py-2 text-navy hover:bg-clean-blue/10">Blog</a>
            <a href="#" className="block px-4 py-2 text-navy hover:bg-clean-blue/10">Newsletter</a>
          </div>
        </details>
      </div>
    </header>
  );
};

export default Header;
