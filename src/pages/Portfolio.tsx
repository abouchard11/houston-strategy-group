import { Helmet } from "react-helmet";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, Clock, DollarSign, MapPin, Calendar, CheckCircle2 } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  value: string;
  timeline: string;
  permitDuration: string;
  completionDate: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  highlights: string[];
  stats: {
    squareFeet: string;
    permits: string;
    savings: string;
  };
}

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: "1",
      title: "Downtown Office Tower Renovation",
      category: "Commercial",
      location: "Downtown Houston, TX",
      value: "$45M",
      timeline: "18 months",
      permitDuration: "6 weeks",
      completionDate: "March 2024",
      description: "Complete renovation of 12-story office building including structural upgrades, new MEP systems, elevator modernization, and facade restoration. Navigated complex historic district requirements and ADA compliance updates.",
      beforeImage: "/placeholder.svg",
      afterImage: "/placeholder.svg",
      highlights: [
        "Fast-tracked structural engineering approvals",
        "Coordinated 15+ trade permits simultaneously",
        "Secured variance for rooftop HVAC installation",
        "Zero permit delays despite complex scope"
      ],
      stats: {
        squareFeet: "180,000 SF",
        permits: "23 permits",
        savings: "$200K in expedite fees"
      }
    },
    {
      id: "2",
      title: "Medical Office Complex",
      category: "Healthcare",
      location: "Memorial City, Houston",
      value: "$28M",
      timeline: "14 months",
      permitDuration: "5 weeks",
      completionDate: "January 2024",
      description: "Ground-up construction of 3-building medical campus with surgery centers, imaging facilities, and specialty clinics. Managed complex health department approvals and medical gas system permits.",
      beforeImage: "/placeholder.svg",
      afterImage: "/placeholder.svg",
      highlights: [
        "Expedited health department plan reviews",
        "Coordinated fire marshal inspections for surgery centers",
        "Fast-tracked medical gas and oxygen system permits",
        "On-time delivery for tenant move-ins"
      ],
      stats: {
        squareFeet: "95,000 SF",
        permits: "31 permits",
        savings: "$150K timeline acceleration"
      }
    },
    {
      id: "3",
      title: "Retail Shopping Center Development",
      category: "Retail",
      location: "The Woodlands, TX",
      value: "$32M",
      timeline: "16 months",
      permitDuration: "7 weeks",
      completionDate: "November 2023",
      description: "New construction of 250,000 SF retail center with anchor tenants and multiple pad sites. Complex site development with detention ponds, traffic studies, and multi-jurisdiction coordination.",
      beforeImage: "/placeholder.svg",
      afterImage: "/placeholder.svg",
      highlights: [
        "Managed permits across 3 jurisdictions",
        "Expedited traffic impact studies and TxDOT approvals",
        "Coordinated 8 tenant improvement permits simultaneously",
        "Resolved drainage and detention requirements efficiently"
      ],
      stats: {
        squareFeet: "250,000 SF",
        permits: "42 permits",
        savings: "$300K in delays avoided"
      }
    },
    {
      id: "4",
      title: "Industrial Warehouse & Distribution",
      category: "Industrial",
      location: "Port Houston Area",
      value: "$22M",
      timeline: "10 months",
      permitDuration: "4 weeks",
      completionDate: "September 2023",
      description: "New 300,000 SF warehouse with dock-high loading, climate-controlled sections, and heavy electrical service for automated systems. Fast-tracked utility service upgrades and fire suppression systems.",
      beforeImage: "/placeholder.svg",
      afterImage: "/placeholder.svg",
      highlights: [
        "Expedited 2000A electrical service connection",
        "Fast-tracked fire sprinkler system approvals",
        "Coordinated utility company upgrades",
        "Early occupancy permit for phased operations"
      ],
      stats: {
        squareFeet: "300,000 SF",
        permits: "18 permits",
        savings: "$175K expedited delivery"
      }
    },
    {
      id: "5",
      title: "Luxury Hotel Construction",
      category: "Hospitality",
      location: "Galleria Area, Houston",
      value: "$65M",
      timeline: "24 months",
      permitDuration: "8 weeks",
      completionDate: "June 2023",
      description: "15-story boutique hotel with 200 rooms, rooftop bar, restaurant, spa, and conference facilities. Complex coordination of hospitality permits, liquor licenses, and multiple occupancy classifications.",
      beforeImage: "/placeholder.svg",
      afterImage: "/placeholder.svg",
      highlights: [
        "Coordinated hotel occupancy permits",
        "Fast-tracked restaurant and bar permits",
        "Managed complex fire safety system approvals",
        "Secured early TCO for soft opening"
      ],
      stats: {
        squareFeet: "220,000 SF",
        permits: "37 permits",
        savings: "$400K early opening revenue"
      }
    },
    {
      id: "6",
      title: "Multi-Family Apartment Complex",
      category: "Residential",
      location: "Midtown Houston",
      value: "$38M",
      timeline: "20 months",
      permitDuration: "6 weeks",
      completionDate: "April 2023",
      description: "275-unit luxury apartment complex with amenity building, pool, fitness center, and structured parking. Navigated high-density zoning and extensive utility coordination.",
      beforeImage: "/placeholder.svg",
      afterImage: "/placeholder.svg",
      highlights: [
        "Fast-tracked foundation permits for early start",
        "Managed 275 individual unit inspections efficiently",
        "Coordinated pool and amenity permits",
        "Secured phased COs for revenue acceleration"
      ],
      stats: {
        squareFeet: "325,000 SF",
        permits: "28 permits",
        savings: "$250K phased occupancy"
      }
    }
  ];

  const categories = ["All", "Commercial", "Healthcare", "Retail", "Industrial", "Hospitality", "Residential"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Construction Portfolio | Houston Strategy Group - Completed Projects</title>
        <meta 
          name="description" 
          content="View Houston Strategy Group's portfolio of $300M+ in permitted commercial construction projects. See completed office buildings, retail centers, hotels, warehouses, and more with detailed permit timelines." 
        />
        <meta 
          name="keywords" 
          content="commercial construction portfolio Houston, permitted projects, construction case studies, office building permits, retail construction" 
        />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-accent/20 text-accent-foreground border-accent mb-6">
              $300M+ Permitted Value
            </Badge>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-primary-foreground mb-6">
              Construction Portfolio
            </h1>
            <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-8">
              Proven results across commercial, industrial, retail, and residential projects. 
              See how we accelerate permits and deliver results for Houston's largest developments.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="All" className="w-full" onValueChange={setActiveCategory}>
            <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto">
              {categories.map((cat) => (
                <TabsTrigger 
                  key={cat} 
                  value={cat}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:gap-12">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden border-2 hover:border-accent transition-all hover:shadow-accent">
                <div className="grid lg:grid-cols-2 gap-6 p-6">
                  {/* Project Images */}
                  <div className="space-y-4">
                    <div className="relative">
                      <Badge className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground">
                        {project.category}
                      </Badge>
                      <img 
                        src={project.beforeImage} 
                        alt={`${project.title} - Before`}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      <div className="absolute bottom-4 left-4 bg-background/90 px-3 py-1 rounded text-sm font-semibold">
                        Before
                      </div>
                    </div>
                    <div className="relative">
                      <img 
                        src={project.afterImage} 
                        alt={`${project.title} - After`}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      <div className="absolute bottom-4 left-4 bg-accent/90 text-accent-foreground px-3 py-1 rounded text-sm font-semibold">
                        After
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="flex flex-col">
                    <div className="flex-1">
                      <h3 className="text-3xl font-black text-foreground mb-4">
                        {project.title}
                      </h3>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{project.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <DollarSign className="h-4 w-4" />
                          <span className="text-sm font-semibold">{project.value}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span className="text-sm">{project.timeline}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{project.completionDate}</span>
                        </div>
                      </div>

                      <p className="text-foreground/80 mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-muted/50 rounded-lg">
                        <div>
                          <div className="text-2xl font-black text-primary">{project.stats.squareFeet}</div>
                          <div className="text-xs text-muted-foreground">Square Feet</div>
                        </div>
                        <div>
                          <div className="text-2xl font-black text-primary">{project.stats.permits}</div>
                          <div className="text-xs text-muted-foreground">Total Permits</div>
                        </div>
                        <div>
                          <div className="text-2xl font-black text-accent">{project.permitDuration}</div>
                          <div className="text-xs text-muted-foreground">Permit Timeline</div>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-2">
                        <h4 className="font-bold text-foreground mb-3">Project Highlights</h4>
                        {project.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-foreground/80">{highlight}</span>
                          </div>
                        ))}
                      </div>

                      {/* Value Delivered */}
                      <div className="mt-6 p-4 bg-accent/10 border border-accent/30 rounded-lg">
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-5 w-5 text-accent" />
                          <span className="font-bold text-foreground">Value Delivered:</span>
                          <span className="text-accent font-black">{project.stats.savings}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-primary-foreground mb-6">
            Ready to Add Your Project to Our Portfolio?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can fast-track your commercial construction permits and 
            keep your project on schedule.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-accent hover:bg-accent-light text-accent-foreground font-bold text-lg px-8 py-6"
          >
            <a href="/book">Schedule Free Consultation</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
