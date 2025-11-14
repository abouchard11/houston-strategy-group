import { Badge } from "@/components/ui/badge";
import { MapPin, DollarSign, Calendar } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      name: "Enterprise Data Center",
      location: "Houston, TX",
      type: "Data Center",
      value: "$50M+",
      status: "SB 6 Approved",
      description: "75+ MW facility navigated through SB 6 impact study and ERCOT approvals"
    },
    {
      name: "Mixed-Use Development",
      location: "Houston Heights",
      type: "Commercial",
      value: "$35M",
      status: "Permitted",
      description: "Multi-building retail and residential complex with historic district approval"
    },
    {
      name: "Regional Office Campus",
      location: "Sugar Land, TX",
      type: "Commercial Office",
      value: "$28M",
      status: "Fast-Tracked",
      description: "4-building corporate campus expedited through priority review"
    },
    {
      name: "Hotel & Conference Center",
      location: "Downtown Houston",
      type: "Hospitality",
      value: "$42M",
      status: "Completed",
      description: "14-story hotel with complex fire safety and ADA compliance requirements"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block bg-primary/10 text-primary font-bold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
            Featured Projects
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-6">
            $300M+ in Permitted
            <span className="text-accent"> Project Value</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            From data centers to commercial developments, 
            we've delivered fast-track approvals for Texas' most complex projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card border-2 border-border hover:border-accent rounded-xl p-6 transition-all hover:shadow-accent"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span>{project.location}</span>
                  </div>
                </div>
                <Badge className="bg-accent text-accent-foreground font-semibold">
                  {project.status}
                </Badge>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-accent" />
                  <span className="font-semibold text-foreground">{project.value}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-accent" />
                  <span className="font-semibold text-foreground">{project.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map Callout */}
        <div className="bg-gradient-hero rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-black text-primary-foreground mb-4">
            Statewide Texas Coverage
          </h3>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            From Houston to Austin, Dallas to San Antonio—we bring deep ERCOT/utility relationships 
            and permit expertise across all major Texas metros.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
