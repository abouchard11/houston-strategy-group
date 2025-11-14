import { CheckCircle2 } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "Free consultation to assess your project scope, timeline, and SB 6 requirements if applicable."
    },
    {
      number: "02",
      title: "Document Preparation",
      description: "We prepare all permit applications, site plans, and required documentation with precision and code expertise."
    },
    {
      number: "03",
      title: "City Submission & Review",
      description: "Leverage our Houston government relationships for priority review and faster processing timelines."
    },
    {
      number: "04",
      title: "Coordination & Approvals",
      description: "Navigate ERCOT, PUC, utilities, and city departments. We handle all coordination and follow-ups."
    },
    {
      number: "05",
      title: "Final Permit Delivery",
      description: "Receive your approved permits and ongoing support through inspections and certificate of occupancy."
    }
  ];

  return (
    <section id="process" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block bg-accent/10 text-accent font-bold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
            How It Works
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-6">
            Fast-Track Process
            <span className="text-accent"> Built on Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Our proven 5-step process leverages 20+ years of Houston relationships 
            to accelerate your permits from submission to approval.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30" />

            {/* Steps */}
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  {/* Number Circle */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="h-16 w-16 rounded-full bg-gradient-accent flex items-center justify-center shadow-accent">
                      <span className="text-2xl font-black text-accent-foreground">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-bold text-foreground mb-3 flex items-center gap-3">
                      {step.title}
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
