import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How does the AI-powered marketing actually work?",
    answer: "Our AI analyzes your brand data, customer behavior, and market trends to automatically generate and optimize marketing campaigns. It uses machine learning to continuously improve performance, adjusting targeting, messaging, and timing for maximum ROI."
  },
  {
    question: "Can I integrate ADmyBRAND with my existing marketing tools?",
    answer: "Absolutely! We offer seamless integrations with over 100+ popular marketing tools including HubSpot, Salesforce, Google Analytics, Facebook Ads, Shopify, and many more. Our API also allows for custom integrations."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We provide 24/7 customer support via chat, email, and phone. Professional and Enterprise plans include priority support and dedicated account managers. We also offer comprehensive documentation, video tutorials, and regular webinars."
  },
  {
    question: "Is my data secure with ADmyBRAND?",
    answer: "Security is our top priority. We use bank-level encryption, comply with GDPR and CCPA regulations, and maintain SOC 2 Type II certification. Your data is stored in secure cloud infrastructure with regular security audits and monitoring."
  },
  {
    question: "How quickly can I see results from the AI campaigns?",
    answer: "Most customers see initial improvements within the first week, with significant results typically appearing within 2-4 weeks. The AI learns and optimizes continuously, so performance improves over time as it gathers more data about your audience."
  },
  {
    question: "Can I try ADmyBRAND before committing to a paid plan?",
    answer: "Yes! We offer a 14-day free trial with full access to our Professional plan features. No credit card required to start. You can explore all features and see how our AI can transform your marketing before making any commitment."
  },
  {
    question: "What happens if I want to cancel my subscription?",
    answer: "You can cancel your subscription at any time with no cancellation fees. Your account will remain active until the end of your current billing period. We also offer data export options so you can take your campaign data with you if needed."
  },
  {
    question: "Do you offer custom solutions for enterprise clients?",
    answer: "Yes, our Enterprise plan includes custom integrations, white-label solutions, dedicated infrastructure, and personalized onboarding. We work closely with enterprise clients to tailor the platform to their specific needs and compliance requirements."
  }
];

const FAQSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-subtle/10 via-background to-blue-lightest/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(25,69,105,0.03),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 scroll-animate">
          <div className="inline-flex items-center gap-2 bg-blue-subtle/50 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-blue-light/20">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">FAQ</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Frequently Asked
            <span className="block text-gradient bg-gradient-primary bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Got questions? We've got answers. Find everything you need to know 
            about ADmyBRAND AI Suite and how it can transform your marketing.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto scroll-animate">
          <div className="glass-card rounded-3xl p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-blue-light/20 rounded-2xl px-6 bg-gradient-card hover:bg-white/50 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary text-lg py-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        
        {/* Contact CTA */}
        <div className="text-center mt-16 scroll-animate">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our team is here to help. Get in touch and we'll answer any questions you have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-primary text-white rounded-xl font-semibold hover:scale-105 transition-transform shadow-luxury hover:shadow-hover">
                Contact Support
              </button>
              <button className="px-8 py-3 border border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition-colors">
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;