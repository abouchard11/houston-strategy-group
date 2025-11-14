import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Testimonials = () => {
  return (
    <div>
      <Helmet>
        <title>Client Testimonials | Houston Strategy Group - Texas Permit Expediting</title>
        <meta 
          name="description" 
          content="Read testimonials from data center developers, commercial builders, and contractors who trust Houston Strategy Group for SB 6 compliance and permit expediting across Texas."
        />
        <meta 
          name="keywords" 
          content="permit expediter testimonials, Houston permitting reviews, SB 6 data center clients, Texas permit success stories" 
        />
      </Helmet>
      <Navbar />
      <div className="pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-black text-center text-primary-foreground mb-4">
            Client Success Stories
          </h1>
          <p className="text-xl text-center text-primary-foreground/90 max-w-3xl mx-auto">
            See why leading developers, contractors, and data center operators choose Houston Strategy Group for their most critical permitting needs.
          </p>
        </div>
      </div>
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Testimonials;
