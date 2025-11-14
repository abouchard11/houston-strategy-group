import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DataCenterSection from "@/components/DataCenterSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import ProjectsSection from "@/components/ProjectsSection";
import TeamSection from "@/components/TeamSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <DataCenterSection />
      <ServicesSection />
      <ProcessSection />
      <ProjectsSection />
      <TeamSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
