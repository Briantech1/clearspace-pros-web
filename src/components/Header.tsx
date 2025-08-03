import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
  src="/favicon.png"
  alt="ClearSpace Pros Logo"
  className="w-10 h-10 rounded"
/>

          <div>
            <h1 className="text-xl font-bold text-navy">ClearSpace Pros LLC</h1>
            <p className="text-xs text-clean-gray">Signature Cleaning Solutions</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
          <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
          <a href="#why-us" className="text-foreground hover:text-primary transition-colors">Why Choose Us</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1 text-navy">
              <Phone className="w-4 h-4" />
              <span>(443) 214-2467</span>
            </div>
            <div className="flex items-center space-x-1 text-navy">
              <Mail className="w-4 h-4" />
              <span>connect@clearspacepros.com</span>
            </div>
          </div>
          <a
  href="https://clienthub.getjobber.com/client_hubs/8b08d54f-b0f8-4a55-9aef-5bb6b4a24c11/public/work_request/new?source=social_media"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-fresh-green hover:bg-fresh-green/90 text-white font-semibold px-4 py-2 rounded-md transition-colors"
>
  Request a Quote
</a>


        </div>
      </div>
    </header>
  );
};

export default Header;