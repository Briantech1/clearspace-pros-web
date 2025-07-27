import { Card } from "@/components/ui/card";
import { Users, Award, Clock, Shield } from "lucide-react";
import cleaningTeamImage from "@/assets/cleaning-team.jpg";

const About = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Clock, value: "24/7", label: "Availability" },
    { icon: Shield, value: "100%", label: "Insured" },
  ];

  return (
    <section id="about" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Your Trusted
              <span className="text-clean-blue block">Cleaning Partner</span>
            </h2>
            
            <p className="text-lg text-clean-gray mb-6 leading-relaxed">
              ClearSpace Pros LLC is a professional, owner-operated commercial cleaning company 
              based in Maryland. We specialize in recurring janitorial services for offices, 
              clinics, Airbnb properties, and post-construction sites with responsive, 
              reliable service and attention to detail.
            </p>
            
            <p className="text-lg text-clean-gray mb-8 leading-relaxed">
              Our team is committed to helping businesses maintain a consistent, professional 
              clean that reflects their brand. We offer flexible scheduling with daily, weekly, 
              and biweekly plans to meet your specific needs across Baltimore County and surrounding Maryland regions.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="p-4 text-center shadow-soft border-none bg-white">
                  <stat.icon className="w-8 h-8 text-clean-blue mx-auto mb-2" />
                  <div className="text-2xl font-bold text-navy">{stat.value}</div>
                  <div className="text-sm text-clean-gray">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-large">
              <img 
                src={cleaningTeamImage} 
                alt="Professional cleaning team at work" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gradient-accent p-6 rounded-xl shadow-medium">
              <div className="text-white">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm opacity-90">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;