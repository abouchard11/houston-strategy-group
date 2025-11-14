import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, Zap, FileText, TrendingUp, Shield, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const DataCenterSection = () => {
  const sb6Services = [
    {
      icon: FileText,
      title: "SB 6 Impact Study Navigation",
      description: "Texas SB 6 effective 1/1/2026 requires data centers >75 MW to clear $100,000+ study fees. We minimize costs and accelerate approval."
    },
    {
      icon: Zap,
      title: "ERCOT/PUC Negotiation",
      description: "Expert navigation of ERCOT grid connection requirements, PUC compliance, and utility coordination for fast-track data center approval."
    },
    {
      icon: Shield,
      title: "Behind-the-Meter & Backup",
      description: "Strategic consulting on behind-the-meter power generation, backup power mandates, and load management to meet SB 6 requirements."
    },
    {
      icon: DollarSign,
      title: "Grid Cost Minimization",
      description: "Leverage our deep utility relationships and ERCOT expertise to reduce grid connection costs and accelerate timeline."
    },
    {
      icon: TrendingUp,
      title: "Multi-Site Development",
      description: "Scale your Texas data center portfolio efficiently with our proven multi-deal velocity and statewide permit coordination."
    },
    {
      icon: Database,
      title: "Full Permit Package",
      description: "Complete data center permitting from site plan approval to electrical, mechanical, fire systems, and final occupancy."
    }
  ];

  return (
    <section id="data-centers" className="py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-block bg-accent/10 text-accent font-bold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
            SB 6 Data Center Permitting
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-6">
            Navigate Texas SB 6 with
            <span className="text-accent"> Proven Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Texas SB 6 reshapes data center development starting January 2026. 
            As specialized SB 6 permit expeditors, we bring 20+ years of Houston government relationships 
            and deep ERCOT/PUC expertise to fast-track your project through the new regulatory landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sb6Services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border-2 hover:border-accent transition-all hover:shadow-accent">
                <CardHeader>
                  <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-accent" />
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

        {/* CTA Section */}
        <div className="bg-gradient-hero rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-black text-primary-foreground mb-4">
            Ready to Navigate SB 6?
          </h3>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Don't let new regulations slow your data center project. 
            Let our SB 6 specialists guide you through ERCOT/PUC requirements and city approvals.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent-light text-accent-foreground font-bold text-lg px-8 py-6 shadow-accent"
          >
            <Link to="/book">Get SB 6 Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DataCenterSection;
