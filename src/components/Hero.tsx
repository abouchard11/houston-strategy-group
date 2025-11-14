import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/30 rounded-full px-6 py-2 mb-8">
            <Shield className="h-4 w-4 text-accent" />
            <span className="text-accent font-semibold text-sm">
              Texas SB 6 Specialists | ERCOT/PUC Experts
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-primary-foreground mb-6 leading-tight">
            Your Inside Edge on
            <br />
            <span className="text-accent">Texas' Toughest Permitting</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            20+ years Houston government experience. SB 6 data center permitting experts. 
            $300M+ permitted. Fast-track your commercial projects through ERCOT/PUC navigation and city approvals.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent-light text-accent-foreground font-bold text-lg px-8 py-6 shadow-accent"
            >
              <Link to="/book">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-bold text-lg px-8 py-6"
            >
              <a href="#data-centers">Learn About SB 6</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-2">
              <Award className="h-10 w-10 text-accent mb-2" />
              <div className="text-3xl font-black text-primary-foreground">20+</div>
              <div className="text-primary-foreground/80 font-medium">Years Houston Gov</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Zap className="h-10 w-10 text-accent mb-2" />
              <div className="text-3xl font-black text-primary-foreground">$300M+</div>
              <div className="text-primary-foreground/80 font-medium">Value Permitted</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Shield className="h-10 w-10 text-accent mb-2" />
              <div className="text-3xl font-black text-primary-foreground">SB 6</div>
              <div className="text-primary-foreground/80 font-medium">Data Center Experts</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
