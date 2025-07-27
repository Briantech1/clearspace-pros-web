import { Card, CardContent } from "@/components/ui/card";
import { 
  Building2, 
  Store, 
  Hospital, 
  GraduationCap, 
  Warehouse, 
  Home,
  Sparkles,
  RotateCcw,
  Droplets
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Commercial Office Cleaning",
      description: "Professional janitorial services for offices and business centers with flexible daily, weekly, or biweekly schedules."
    },
    {
      icon: Home,
      title: "Post-Construction Cleanup",
      description: "Detailed cleanup after construction, renovation, or remodeling projects to get your space move-in ready."
    },
    {
      icon: Store,
      title: "Airbnb Turnover Cleaning",
      description: "Quick, thorough turnovers for short-term rental properties to ensure 5-star guest experiences."
    },
    {
      icon: Droplets,
      title: "High-Touch Disinfection",
      description: "Specialized sanitization for restrooms, kitchens, and high-traffic areas for health and safety."
    },
    {
      icon: Warehouse,
      title: "Trash Removal & Debris Pickup",
      description: "Comprehensive waste management and debris removal services for clean, organized spaces."
    },
    {
      icon: RotateCcw,
      title: "Flexible Scheduling",
      description: "Customizable cleaning plans with daily, weekly, and biweekly options to fit your business needs."
    }
  ];

  const specialServices = [
    {
      icon: Hospital,
      title: "Licensed & Insured",
      description: "Fully licensed and insured with comprehensive coverage for your peace of mind."
    },
    {
      icon: GraduationCap,
      title: "MBE Certification",
      description: "Maryland Minority Business Enterprise certification pending - supporting local diversity."
    },
    {
      icon: Sparkles,
      title: "eMMA Vendor Ready",
      description: "Registered eMMA vendor (SUP1080473) and DUNS certified (139885992) for government contracts."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Comprehensive
            <span className="text-clean-blue block">Cleaning Services</span>
          </h2>
          <p className="text-xl text-clean-gray max-w-3xl mx-auto">
            We provide professional cleaning solutions tailored to your industry and specific needs. 
            No job is too big or too small for our experienced team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 border-none shadow-soft bg-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-clean-blue/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-clean-blue/20 transition-colors">
                  <service.icon className="w-6 h-6 text-clean-blue" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">{service.title}</h3>
                <p className="text-clean-gray leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-navy to-clean-blue rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Certifications & Credentials
            </h3>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              ClearSpace Pros LLC maintains all necessary certifications and credentials 
              to serve commercial clients with confidence and compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {specialServices.map((service, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">{service.title}</h4>
                <p className="text-white/90">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;