import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Michael Rodriguez",
      title: "Data Center Developer",
      company: "Texas Tech Infrastructure",
      image: "/placeholder.svg",
      rating: 5,
      text: "Houston Strategy navigated our 150 MW data center through the SB 6 process flawlessly. Their ERCOT relationships saved us over $2M in study fees and cut our timeline by 8 months. They're the only firm I trust with Texas data center permitting.",
    },
    {
      name: "Sarah Chen",
      title: "VP of Development",
      company: "Apex Commercial Properties",
      image: "/placeholder.svg",
      rating: 5,
      text: "We've permitted over $300M in commercial projects with Houston Strategy. Their 20+ years of Houston government experience shows in every interaction. They know exactly who to call and how to fast-track even the most complex projects.",
    },
    {
      name: "James Peterson",
      title: "Managing Partner",
      company: "Gulf Coast Developers",
      image: "/placeholder.svg",
      rating: 5,
      text: "The team's expertise in both traditional permitting and the new SB 6 data center requirements is unmatched. They handled our mixed-use development and adjacent data center simultaneously, coordinating everything perfectly.",
    },
    {
      name: "Linda Washington",
      title: "Project Director",
      company: "Metro Housing Solutions",
      image: "/placeholder.svg",
      rating: 5,
      text: "From fix-and-flip to large multifamily, Houston Strategy delivers. Their code compliance knowledge and city relationships mean our projects move faster than competitors. They're an invaluable partner for any Houston development.",
    },
    {
      name: "David Kumar",
      title: "CEO",
      company: "HyperScale Data Centers",
      image: "/placeholder.svg",
      rating: 5,
      text: "SB 6 compliance could have killed our project timeline. Houston Strategy's deep understanding of ERCOT/PUC requirements and their ability to negotiate utility agreements saved our Q1 deadline. Worth every penny.",
    },
    {
      name: "Robert Martinez",
      title: "Principal",
      company: "Lone Star Construction Group",
      image: "/placeholder.svg",
      rating: 5,
      text: "After struggling with permits for months, Houston Strategy came in and had everything approved in 6 weeks. Their insider knowledge of Houston's permitting process is phenomenal. Now they're our go-to for all projects.",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by leading developers, contractors, and data center operators across Texas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                
                <Quote className="h-8 w-8 text-accent mb-4 opacity-50" />
                
                <p className="text-foreground/90 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-accent font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.title}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
