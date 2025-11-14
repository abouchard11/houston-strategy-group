import hinesLogo from "@/assets/clients/hines-logo.png";
import greystarLogo from "@/assets/clients/greystar-logo.png";
import streamLogo from "@/assets/clients/stream-logo.png";
import graniteLogo from "@/assets/clients/granite-logo.png";
import perryLogo from "@/assets/clients/perry-logo.png";
import patrinelyLogo from "@/assets/clients/patrinely-logo.png";
import midwayLogo from "@/assets/clients/midway-logo.png";
import transwesternLogo from "@/assets/clients/transwestern-logo.png";
import jllLogo from "@/assets/clients/jll-logo.png";
import cbreLogo from "@/assets/clients/cbre-logo.png";
import skanskaLogo from "@/assets/clients/skanska-logo.png";
import structureToneLogo from "@/assets/clients/structure-tone-logo.png";
import harveyLogo from "@/assets/clients/harvey-logo.png";
import tellepsenLogo from "@/assets/clients/tellepsen-logo.png";
import bartlettLogo from "@/assets/clients/bartlett-logo.png";
import vaughnLogo from "@/assets/clients/vaughn-logo.png";

const ClientsSection = () => {
  const clients = [
    { name: "Hines", logo: hinesLogo, category: "Commercial Development" },
    { name: "Greystar", logo: greystarLogo, category: "Multifamily Development" },
    { name: "Stream Data Centers", logo: streamLogo, category: "Data Center Development" },
    { name: "Granite Properties", logo: graniteLogo, category: "Commercial Real Estate" },
    { name: "Perry Homes", logo: perryLogo, category: "Residential Construction" },
    { name: "Patrinely Group", logo: patrinelyLogo, category: "Mixed-Use Development" },
    { name: "Midway Companies", logo: midwayLogo, category: "Commercial Development" },
    { name: "Transwestern", logo: transwesternLogo, category: "Commercial Real Estate" },
    { name: "JLL", logo: jllLogo, category: "Commercial Development" },
    { name: "CBRE", logo: cbreLogo, category: "Commercial Real Estate" },
    { name: "Skanska USA", logo: skanskaLogo, category: "General Contracting" },
    { name: "Structure Tone", logo: structureToneLogo, category: "General Contracting" },
    { name: "Harvey Builders", logo: harveyLogo, category: "General Contracting" },
    { name: "Tellepsen", logo: tellepsenLogo, category: "General Contracting" },
    { name: "Bartlett Cocke", logo: bartlettLogo, category: "General Contracting" },
    { name: "Vaughn Construction", logo: vaughnLogo, category: "General Contracting" },
  ];

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block bg-primary/10 text-primary font-bold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
            Our Clients
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-6">
            Companies We've
            <span className="text-accent"> Worked With</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            We're proud to have helped these leading construction firms and commercial developers 
            navigate complex permitting processes.
          </p>
        </div>

        {/* Animated Logo Marquee */}
        <div className="mb-20 relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee">
              {clients.map((client, index) => (
                <div
                  key={`marquee-1-${index}`}
                  className="flex-shrink-0 mx-8 flex items-center justify-center w-48 h-24"
                >
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-w-full max-h-full object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
            <div className="flex animate-marquee" aria-hidden="true">
              {clients.map((client, index) => (
                <div
                  key={`marquee-2-${index}`}
                  className="flex-shrink-0 mx-8 flex items-center justify-center w-48 h-24"
                >
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-w-full max-h-full object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Clients Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group relative flex items-center justify-center p-8 bg-card border border-border rounded-xl hover:border-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="w-full h-auto max-h-16 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <div className="bg-muted/50 rounded-2xl p-8 border-2 border-border">
            <p className="text-lg text-foreground/80 leading-relaxed">
              <span className="font-bold text-primary">Trusted by Fortune 500 companies</span> and local contractors alike. 
              Our deep Houston government relationships and proven track record make us the go-to partner 
              for data center developers, commercial builders, and general contractors across Texas.
            </p>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-black text-accent mb-2">150+</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">
              Active Client Relationships
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-accent mb-2">95%</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">
              Client Retention Rate
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-accent mb-2">$300M+</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">
              Total Project Value Permitted
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
