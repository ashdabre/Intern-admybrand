import { Check, Crown, Zap, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const pricingPlans = [
  {
    name: "Starter",
    price: "49",
    period: "month",
    description: "Perfect for small businesses and startups",
    icon: Zap,
    popular: false,
    features: [
      "Up to 1,000 AI-generated campaigns",
      "Basic analytics dashboard",
      "Email support",
      "Social media integration",
      "Campaign templates",
      "Basic audience insights"
    ],
    gradient: "from-blue-light to-blue-medium",
    buttonVariant: "outline" as const
  },
  {
    name: "Professional",
    price: "149",
    period: "month",
    description: "Advanced features for growing businesses",
    icon: Crown,
    popular: true,
    features: [
      "Unlimited AI campaigns",
      "Advanced analytics & reporting",
      "Priority support 24/7",
      "Multi-platform integration",
      "Custom AI training",
      "Advanced targeting",
      "A/B testing suite",
      "Team collaboration tools"
    ],
    gradient: "from-blue-dark to-blue-medium",
    buttonVariant: "premium" as const
  },
  {
    name: "Enterprise",
    price: "449",
    period: "month",
    description: "Complete solution for large organizations",
    icon: Building,
    popular: false,
    features: [
      "Everything in Professional",
      "Dedicated account manager",
      "Custom integrations",
      "White-label solutions",
      "Advanced security features",
      "SLA guarantees",
      "Custom reporting",
      "On-premise deployment"
    ],
    gradient: "from-blue-medium to-blue-light",
    buttonVariant: "glow" as const
  }
];

const PricingSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-subtle/20 via-background to-blue-lightest/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(25,69,105,0.05),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 scroll-animate">
          <div className="inline-flex items-center gap-2 bg-blue-subtle/50 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-blue-light/20">
            <Crown className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Transparent Pricing</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Choose Your
            <span className="block text-gradient bg-gradient-primary bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Scale your marketing efforts with our flexible pricing plans. 
            Each tier is designed to grow with your business needs.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative glass-card hover-luxury group border-0 ${
                plan.popular 
                  ? 'ring-2 ring-primary ring-offset-4 ring-offset-background scale-105' 
                  : ''
              } scroll-animate`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-white px-6 py-2 rounded-full text-sm font-semibold shadow-luxury">
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center p-8 pb-4">
                <div className="mb-4">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${plan.gradient} p-4 group-hover:scale-110 transition-transform duration-300`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  {plan.name}
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  {plan.description}
                </p>
                
                <div className="mb-6">
                  <span className="text-5xl font-bold text-foreground">${plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
              </CardHeader>
              
              <CardContent className="p-8 pt-0">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.buttonVariant} 
                  size="lg" 
                  className="w-full group"
                >
                  Get Started
                  {plan.popular && (
                    <Crown className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="text-center mt-16 scroll-animate">
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              All plans include
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>99.9% uptime SLA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;