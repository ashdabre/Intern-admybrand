import { Brain, Target, BarChart3, Zap, Shield, Infinity } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description: "Advanced machine learning algorithms analyze your brand data to provide actionable insights and recommendations.",
    gradient: "from-blue-dark to-blue-medium"
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Reach the right audience at the perfect moment with our intelligent customer segmentation and targeting system.",
    gradient: "from-blue-medium to-blue-light"
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Monitor campaign performance, track ROI, and make data-driven decisions with our comprehensive analytics dashboard.",
    gradient: "from-blue-light to-blue-lighter"
  },
  {
    icon: Zap,
    title: "Automated Campaigns",
    description: "Create, launch, and optimize marketing campaigns automatically with our intelligent automation engine.",
    gradient: "from-blue-lighter to-blue-lightest"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with end-to-end encryption, compliance certifications, and secure data handling.",
    gradient: "from-blue-lightest to-blue-subtle"
  },
  {
    icon: Infinity,
    title: "Scalable Infrastructure",
    description: "Built to grow with your business. Handle millions of interactions with our cloud-native architecture.",
    gradient: "from-blue-subtle to-blue-dark"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-blue-subtle/30 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(145,174,196,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(202,222,237,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 scroll-animate">
          <div className="inline-flex items-center gap-2 bg-blue-subtle/50 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-blue-light/20">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Powered by AI</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Revolutionary Features for
            <span className="block text-gradient bg-gradient-primary bg-clip-text text-transparent">
              Modern Marketing
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the future of marketing with our comprehensive AI suite. 
            Every feature is designed to elevate your brand and drive exceptional results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="glass-card hover-luxury group cursor-pointer border-0 scroll-animate"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="mt-6 w-12 h-1 bg-gradient-to-r from-primary to-primary-glow rounded-full group-hover:w-20 transition-all duration-300" />
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16 scroll-animate">
          <div className="glass-card inline-block p-8 rounded-3xl">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Ready to transform your marketing?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of brands already using ADmyBRAND AI Suite
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-primary text-white rounded-xl font-semibold hover:scale-105 transition-transform shadow-luxury hover:shadow-hover">
                Explore All Features
              </button>
              <button className="px-8 py-3 border border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;