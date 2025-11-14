const ClientsSection = () => {
  const clients = [
    { name: "Hines", category: "Commercial Development" },
    { name: "Greystar", category: "Multifamily Development" },
    { name: "Stream Data Centers", category: "Data Center Development" },
    { name: "Granite Properties", category: "Commercial Real Estate" },
    { name: "Perry Homes", category: "Residential Construction" },
    { name: "Patrinely Group", category: "Mixed-Use Development" },
    { name: "Midway Companies", category: "Commercial Development" },
    { name: "Transwestern", category: "Commercial Real Estate" },
    { name: "JLL", category: "Commercial Development" },
    { name: "CBRE", category: "Commercial Real Estate" },
    { name: "Skanska USA", category: "General Contracting" },
    { name: "Structure Tone", category: "General Contracting" },
    { name: "Harvey Builders", category: "General Contracting" },
    { name: "Tellepsen", category: "General Contracting" },
    { name: "Bartlett Cocke", category: "General Contracting" },
    { name: "Vaughn Construction", category: "General Contracting" },
  ];

  return (
    <section className="py-24 bg-background">
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

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-6 bg-card border-2 border-border rounded-xl hover:border-accent transition-all hover:shadow-lg"
            >
              <div className="text-center">
                <div className="text-2xl font-black text-foreground mb-2 group-hover:text-accent transition-colors">
                  {client.name}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  {client.category}
                </div>
              </div>
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
