import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-primary-foreground mb-6">
            Ready to Fast-Track Your Permits?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-12 leading-relaxed">
            Whether you're navigating SB 6 for a data center or expediting commercial permits, 
            our 20+ years of Houston government experience is your inside edge. 
            Schedule a free consultation today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-primary-foreground/90">
            <a
              href="tel:+15551234567"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span className="font-semibold">(555) 123-4567</span>
            </a>
            <a
              href="mailto:info@houstonstrategy.net"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="font-semibold">info@houstonstrategy.net</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
