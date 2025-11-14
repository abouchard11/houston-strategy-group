import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Home, Wrench, FileCheck, Clock, Users, HardHat, Hammer, Building } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Building2,
      title: "Commercial Construction",
      description: "Full-service permitting for office buildings, retail centers, warehouses, hotels, and restaurants. From ground-up construction to major renovations, we handle site plans, MEP systems, structural engineering approvals, and ADA compliance with proven speed."
    },
    {
      icon: HardHat,
      title: "General Contracting Support",
      description: "Partner with general contractors on large-scale commercial builds. We coordinate all trades permits, manage inspection schedules, handle change orders, and keep your construction timeline on track with proactive city coordination."
    },
    {
      icon: Building,
      title: "Tenant Improvement & Build-Outs",
      description: "Expedite permits for commercial tenant improvements, retail fit-outs, restaurant conversions, and office space reconfigurations. Navigate complex change-of-use, fire code upgrades, and landlord coordination requirements."
    },
    {
      icon: Home,
      title: "Residential Projects",
      description: "Single-family custom homes, multi-family developments, townhomes, and fix-and-flip projects. Streamline residential permits with our deep Houston code knowledge and city relationships for faster starts."
    },
    {
      icon: Hammer,
      title: "Structural & MEP Systems",
      description: "Complex structural modifications, HVAC systems, electrical service upgrades, plumbing systems, fire sprinklers, and life safety systems. We coordinate engineering reviews and ensure compliance with all current codes."
    },
    {
      icon: Wrench,
      title: "Renovations & Additions",
      description: "Building additions, structural modifications, historic renovations, and facade improvements. Expert handling of existing building assessments, variance applications, and historic district requirements."
    },
    {
      icon: FileCheck,
      title: "Expedited Review",
      description: "Leverage our 20+ years of Houston government relationships for priority review and fast-track approval on time-sensitive projects. We know exactly who to call to move your permits forward."
    },
    {
      icon: Clock,
      title: "Code Compliance & Violations",
      description: "Expert navigation of building codes, zoning regulations, fire safety, and accessibility requirements. Resolve existing violations, secure certificates of occupancy, and ensure full compliance before sale or lease."
    },
    {
      icon: Users,
      title: "Multi-Site Portfolio Management",
      description: "Manage permit coordination across multiple construction sites and jurisdictions. Scale your development portfolio with our proven multi-deal velocity and centralized project tracking."
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block bg-primary/10 text-primary font-bold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
            Our Services
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-6">
            Commercial Construction &
            <span className="text-accent"> General Contracting Permits</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Beyond data centers, we're Houston's premier commercial construction permitting partner. From ground-up 
            builds to complex renovations, we've permitted $300M+ in commercial construction projects with unmatched 
            speed and expertise. We work alongside general contractors, developers, and property owners to navigate 
            every phase of construction permitting.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
