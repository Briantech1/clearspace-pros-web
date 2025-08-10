// src/components/Hero.tsx
import React from "react";
import { ShieldCheck, Sparkles, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/public/hero-office.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-office.jpg"      // put hero-office.jpg in /public
          alt="Professional clean office space"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-navy/70" />
      </div>


      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* (Removed the Maryland flag row here to avoid duplication with the header) */}

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Signature Cleaning for
            <span className="block text-clean-blue">Home & Business</span>
            <span className="block">Done Right, Every Time</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
            Whether it’s an office, Airbnb, or your personal space — we deliver spotless
            results that speak for themselves. ClearSpace Pros gets it done right, the first time.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
  href="/contact"
  className="bg-fresh-green hover:bg-fresh-green/90 text-white text-lg px-8 py-4 h-auto rounded-md text-center"
>
  Request a Quote
</a>

            <a
              href="tel:4432142467"
              className="text-white border border-white px-6 py-3 rounded-md text-lg font-medium hover:bg-white/10 transition duration-200 text-center inline-block"
            >
              Call (443) 214-2467
            </a>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-white/90">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-fresh-green" />
              <span>Bonded & Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-clean-blue" />
              <span>Signature Clean Finish</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-300" />
              <span>5‑Star Client Satisfaction</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-blue-300" />
              <span>High‑Quality Service Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
