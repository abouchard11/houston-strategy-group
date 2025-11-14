import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calendar, Clock, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const BookAppointment = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Consultation Request Received",
      description: "We'll contact you within 24 hours to schedule your free consultation.",
    });
    setFormData({ name: "", email: "", phone: "", projectType: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Book Consultation | Houston Strategy Group - Free Permit Consultation</title>
        <meta 
          name="description" 
          content="Schedule a free consultation with Houston Strategy Group. Get expert guidance on SB 6 data center permitting, commercial construction permits, and ERCOT/PUC navigation. 20+ years experience." 
        />
        <meta 
          name="keywords" 
          content="book permit consultation, schedule permit meeting, data center consultation Houston, SB 6 expert consultation" 
        />
      </Helmet>
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-primary-foreground mb-4">
            Schedule Your Free Consultation
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Get expert guidance on your SB 6 data center or commercial permitting project. 
            20+ years of Houston government experience at your service.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="border-2 border-accent/30 shadow-accent">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Book Your Consultation</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll contact you within 24 hours to schedule your free consultation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="projectType">Project Type *</Label>
                    <Input
                      id="projectType"
                      value={formData.projectType}
                      onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                      placeholder="e.g., SB 6 Data Center, Commercial Building, Residential"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                      rows={5}
                      className="mt-2"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent hover:bg-accent-light text-accent-foreground font-bold"
                  >
                    Request Consultation
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Benefits */}
            <div className="space-y-6">
              {/* Direct Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Contact Us Directly</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <div className="font-semibold">Phone</div>
                      <a href="tel:+15551234567" className="text-muted-foreground hover:text-accent">
                        (555) 123-4567
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <a href="mailto:info@houstonstrategy.net" className="text-muted-foreground hover:text-accent">
                        info@houstonstrategy.net
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <div className="font-semibold">Location</div>
                      <div className="text-muted-foreground">Houston, Texas</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* What to Expect */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">What to Expect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Free Consultation</div>
                      <div className="text-muted-foreground text-sm">
                        30-minute assessment of your project scope and permitting requirements
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Fast Response</div>
                      <div className="text-muted-foreground text-sm">
                        We'll contact you within 24 hours to schedule your consultation
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Trust Badge */}
              <Card className="bg-gradient-accent border-0">
                <CardContent className="pt-6 text-center">
                  <div className="text-accent-foreground font-black text-3xl mb-2">20+ Years</div>
                  <div className="text-accent-foreground/90 font-semibold">
                    Houston Government Experience
                  </div>
                  <div className="text-accent-foreground/80 text-sm mt-2">
                    Former city officials with deep relationships at City Hall, ERCOT, and PUC
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookAppointment;
