import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Home, Wrench, FileCheck, Clock, Users } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Building2,
      title: "Commercial Permitting",
      description: "Office buildings, retail spaces, restaurants, hotels. Fast-track approval for complex commercial developments with ADA compliance and code expertise."
    },
    {
      icon: Home,
      title: "Residential Projects",
      description: "Single-family, multi-family, fix-and-flip projects. Streamline residential permits with our deep Houston code knowledge and city relationships."
    },
    {
      icon: Wrench,
      title: "Renovations & Additions",
      description: "Tenant improvements, building additions, structural modifications. Navigate complex change-of-use and historic district requirements."
    },
    {
      icon: FileCheck,
      title: "Expedited Review",
      description: "Leverage our 20+ years of Houston government relationships for priority review and fast-track approval on time-sensitive projects."
    },
    {
      icon: Clock,
      title: "Code Compliance",
      description: "Expert navigation of building codes, zoning regulations, fire safety, and accessibility requirements. Fix violations and ensure compliance."
    },
    {
      icon: Users,
      title: "Multi-Site Coordination",
      description: "Manage permit coordination across multiple project sites. Scale your development portfolio with our proven multi-deal velocity."
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
            Commercial & Residential
            <span className="text-accent"> Permit Experts</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Beyond data centers, we deliver fast-track permitting for all commercial and residential projects 
            across Houston and Texas with $300M+ in permitted value.
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
