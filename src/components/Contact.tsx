import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageSquare,
  Calendar
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
          Get Your
            <span className="text-clean-blue block">Cleaning Quote</span>
          </h2>
          <p className="text-xl text-clean-gray max-w-3xl mx-auto">
            Ready to transform your workspace? Contact us today for a 
            no-obligation quote tailored to your specific needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-soft border-none bg-white">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-clean-blue/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-clean-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">Call Us</h3>
                    <p className="text-clean-gray">For immediate assistance</p>
                  </div>
                </div>
                <p className="text-lg font-semibold text-navy">(443) 214-2467</p>
                <p className="text-sm text-clean-gray">Available 24/7 for emergencies</p>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-none bg-white">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-fresh-green/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-fresh-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">Email Us</h3>
                    <p className="text-clean-gray">For quotes and inquiries</p>
                  </div>
                </div>
                <p className="text-lg font-semibold text-navy">connect@clearspacepros.com</p>
                <p className="text-sm text-clean-gray">We'll respond within 2 hours</p>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-none bg-white">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">Service Area</h3>
                    <p className="text-clean-gray">Metro area coverage</p>
                  </div>
                </div>
                <p className="text-lg font-semibold text-navy">Baltimore County & Surrounding MD</p>
                <p className="text-sm text-clean-gray">Maryland regions</p>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-none bg-white">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-clean-blue/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-clean-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">Business Hours</h3>
                    <p className="text-clean-gray">Regular office hours</p>
                  </div>
                </div>
                <div className="space-y-1 text-sm">
                  <p className="text-navy"><span className="font-medium">Mon-Fri:</span> 7:00 AM - 7:00 PM</p>
                  <p className="text-navy"><span className="font-medium">Sat:</span> 8:00 AM - 5:00 PM</p>
                  <p className="text-navy"><span className="font-medium">Sun:</span> Emergency only</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-medium border-none bg-white">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <MessageSquare className="w-8 h-8 text-clean-blue" />
                  <h3 className="text-2xl font-bold text-navy">Request Your Quote</h3>
                </div>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">
                        Full Name *
                      </label>
                      <Input 
                        placeholder="Your full name"
                        className="border-border focus:border-clean-blue focus:ring-clean-blue"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">
                        Company Name
                      </label>
                      <Input 
                        placeholder="Your company name"
                        className="border-border focus:border-clean-blue focus:ring-clean-blue"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">
                        Email Address *
                      </label>
                      <Input 
                        type="email"
                        placeholder="your.email@company.com"
                        className="border-border focus:border-clean-blue focus:ring-clean-blue"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">
                        Phone Number *
                      </label>
                      <Input 
                        type="tel"
                        placeholder="(443) 214-2467"
                        className="border-border focus:border-clean-blue focus:ring-clean-blue"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      Type of Service Needed
                    </label>
                    <select className="w-full px-3 py-2 border border-border rounded-md focus:border-clean-blue focus:ring-clean-blue">
                      <option>Select service type</option>
                      <option>Commercial Office Cleaning</option>
                      <option>Post-Construction Cleanup</option>
                      <option>Airbnb Turnover Cleaning</option>
                      <option>High-Touch Disinfection</option>
                      <option>Trash Removal & Debris Pickup</option>
                      <option>Daily/Weekly/Biweekly Plans</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      Additional Details
                    </label>
                    <Textarea 
                      placeholder="Tell us about your space, cleaning frequency needed, special requirements, or any questions you have..."
                      rows={4}
                      className="border-border focus:border-clean-blue focus:ring-clean-blue"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit" 
                      className="bg-gradient-accent hover:opacity-90 transition-opacity flex-1"
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Request a Quote
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      className="border-clean-blue text-clean-blue hover:bg-clean-blue/5"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;