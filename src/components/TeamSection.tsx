import { Card, CardContent } from "@/components/ui/card";
import { Award, Briefcase, MapPin } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Your Houston Insider",
      role: "Permit Specialist & Government Liaison",
      credentials: "20+ Years Houston City Government",
      expertise: [
        "Former Houston Building & Planning Officer",
        "Deep City Hall & Utility Relationships",
        "$300M+ in Permitted Projects",
        "SB 6 & ERCOT/PUC Navigation Expert"
      ]
    }
  ];

  return (
    <section id="team" className="py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block bg-primary/10 text-primary font-bold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
            Our Team
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-6">
            Experience That
            <span className="text-accent"> Opens Doors</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Our founding team brings decades of Houston government service, 
            giving you an unmatched inside track on permitting approvals.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-2 border-accent/30 shadow-accent">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  {/* Avatar Placeholder */}
                  <div className="h-24 w-24 rounded-full bg-gradient-accent flex items-center justify-center flex-shrink-0 shadow-accent">
                    <Briefcase className="h-12 w-12 text-accent-foreground" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-black text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-accent font-semibold mb-4">{member.role}</p>
                    
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <Award className="h-4 w-4 text-accent" />
                      <span className="font-medium">{member.credentials}</span>
                    </div>

                    <div className="space-y-2">
                      {member.expertise.map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                          <span className="text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-lg text-muted-foreground italic">
            "Our relationships with Houston city officials, ERCOT representatives, 
            and utility partners are your competitive advantage. We know who to call 
            and how to get results—fast."
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
