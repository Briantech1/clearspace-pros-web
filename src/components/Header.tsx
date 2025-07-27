import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">CS</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-navy">ClearSpace Pros LLC</h1>
            <p className="text-xs text-clean-gray">Professional Cleaning</p>
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
          <Button className="bg-gradient-accent hover:opacity-90 transition-opacity">
            Request a Quote
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;