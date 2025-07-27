import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle, 
  Shield, 
  Clock, 
  Leaf, 
  Users, 
  Award,
  Phone,
  DollarSign
} from "lucide-react";
import beforeAfterImage from "@/assets/before-after.jpg";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Fully Bonded & Insured",
      description: "Complete protection and peace of mind for your business and property."
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Work around your schedule with 24/7 availability and custom timing."
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Products",
      description: "Safe, green cleaning solutions that protect your team and environment."
    },
    {
      icon: Users,
      title: "Trained Professionals",
      description: "Background-checked, uniformed staff with ongoing training and certification."
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee - we'll make it right if you're not happy."
    },
    {
      icon: DollarSign,
      title: "Competitive Pricing",
      description: "Transparent, fair pricing with no hidden fees or surprise charges."
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Why Choose
            <span className="text-clean-blue block">ClearSpace Pros?</span>
          </h2>
          <p className="text-xl text-clean-gray max-w-3xl mx-auto">
            We're not just another cleaning company. We're your partner in creating 
            and maintaining a spotless, professional environment that reflects your standards.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={beforeAfterImage} 
              alt="Before and after cleaning transformation" 
              className="w-full rounded-2xl shadow-large"
            />
          </div>
          
          <div className="grid gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 border-none shadow-soft bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-clean-blue/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-clean-blue/20 transition-colors">
                      <benefit.icon className="w-6 h-6 text-clean-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-navy mb-2">{benefit.title}</h3>
                      <p className="text-clean-gray">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-fresh-green to-clean-blue rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience the Difference?
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied businesses who trust ClearSpace Pros 
            for their commercial cleaning needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-fresh-green font-semibold rounded-lg hover:bg-white/90 transition-colors"
            >
              Get Free Quote
            </a>
            <a 
              href="tel:5551234567" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;