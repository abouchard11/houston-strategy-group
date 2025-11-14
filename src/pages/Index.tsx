import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DataCenterSection from "@/components/DataCenterSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import ProjectsSection from "@/components/ProjectsSection";
import ClientsSection from "@/components/ClientsSection";
import TeamSection from "@/components/TeamSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Houston Strategy Group | SB 6 Data Center & Commercial Construction Permits</title>
        <meta 
          name="description" 
          content="Texas SB 6 data center permitting specialists. 20+ years Houston government experience. $300M+ in commercial construction permitted. ERCOT/PUC navigation, general contracting support, fast-track approvals." 
        />
        <meta 
          name="keywords" 
          content="Texas SB 6 permitting, data center permits Houston, ERCOT PUC navigation, commercial permit expediter, Houston building permits" 
        />
      </Helmet>
      <Navbar />
      <Hero />
      <DataCenterSection />
      <ServicesSection />
      <ProcessSection />
      <ProjectsSection />
      <ClientsSection />
      <TeamSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
