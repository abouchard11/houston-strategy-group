import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is Texas SB 6 and how does it affect my data center project?",
      answer: "Texas SB 6, effective January 1, 2026, requires data centers consuming over 75 MW to complete an ERCOT impact study with fees exceeding $100,000, plus new behind-the-meter and backup power mandates. We specialize in navigating these requirements, minimizing costs, and accelerating approvals through our ERCOT/PUC relationships."
    },
    {
      question: "Why choose Houston Strategy over other permit expeditors?",
      answer: "We bring 20+ years of Houston government experience with deep relationships at City Hall, ERCOT, PUC, and major utilities. We're not just permit runners—we're former government officials who know how to fast-track complex projects like data centers and large commercial developments. Our $300M+ track record speaks for itself."
    },
    {
      question: "How long does the permitting process typically take?",
      answer: "Timeline varies by project complexity and jurisdiction. Standard commercial permits take 6-12 weeks, but we often accelerate this through priority review relationships. SB 6 data center projects require additional ERCOT coordination (12-24+ weeks), but our expertise significantly reduces delays and costs."
    },
    {
      question: "Do you handle permits outside of Houston?",
      answer: "Yes. While our deepest relationships are in Houston, we handle permits across Texas including Austin, Dallas, San Antonio, and other major metros. Our statewide ERCOT/PUC expertise is especially valuable for multi-site data center developers."
    },
    {
      question: "What's included in your permit expediting services?",
      answer: "Complete end-to-end service: document preparation, code compliance review, city submissions, ERCOT/utility coordination (for data centers), review follow-ups, approval tracking, and ongoing support through inspections and certificate of occupancy."
    },
    {
      question: "How do your government relationships give us an advantage?",
      answer: "Our team includes former Houston building and planning officers with direct relationships at every level—from permit technicians to department heads. This means faster responses, priority review when available, and insider knowledge on how to structure submissions for quick approval."
    },
    {
      question: "What types of commercial projects do you handle?",
      answer: "We handle all commercial permitting: office buildings, retail centers, restaurants, hotels, medical facilities, industrial warehouses, tenant improvements, and renovations. Our expertise extends to complex ADA compliance, historic district approvals, and multi-building developments."
    },
    {
      question: "Can you help with projects already stuck in review?",
      answer: "Absolutely. We specialize in rescuing stalled permits by identifying bottlenecks, leveraging our relationships for priority follow-up, and restructuring submissions to meet reviewer requirements. Many clients come to us after months of delays elsewhere."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block bg-accent/10 text-accent font-bold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
            FAQ
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-6">
            Common Questions About
            <span className="text-accent"> SB 6 & Permitting</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Get answers to the most common questions about Texas data center permitting, 
            SB 6 requirements, and our expediting services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 border-border rounded-lg px-6 hover:border-accent transition-colors"
              >
                <AccordionTrigger className="text-left font-bold text-lg hover:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
