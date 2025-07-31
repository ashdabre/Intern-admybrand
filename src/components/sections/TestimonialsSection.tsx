import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CMO at TechFlow",
    company: "TechFlow",
    rating: 5,
    content: "ADmyBRAND AI Suite transformed our marketing approach completely. We saw a 300% increase in qualified leads within the first month. The AI insights are incredibly accurate.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=80&h=80&fit=crop&crop=face"
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder & CEO",
    company: "InnovateCorp",
    rating: 5,
    content: "The automation capabilities are game-changing. What used to take our team weeks now happens in hours. The ROI has been exceptional - over 400% in our first quarter.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
  },
  {
    name: "Emily Watson",
    role: "Marketing Director",
    company: "LuxeBrand",
    rating: 5,
    content: "The premium feel and advanced analytics give us insights we never had before. Our customers love the personalized campaigns, and our conversion rates have doubled.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
  },
  {
    name: "David Park",
    role: "VP of Marketing",
    company: "ScaleUp Solutions",
    rating: 5,
    content: "Finally, an AI marketing platform that actually delivers. The customer segmentation is spot-on, and the campaign optimization is simply brilliant. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
  },
  {
    name: "Lisa Thompson",
    role: "Brand Manager",
    company: "EcoLiving Co",
    rating: 5,
    content: "ADmyBRAND helped us reach our target audience more effectively than ever. The AI-powered insights revealed opportunities we didn't even know existed.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face"
  },
  {
    name: "Alex Kumar",
    role: "Digital Strategy Lead",
    company: "Futuretech Inc",
    rating: 5,
    content: "The platform's sophistication is remarkable. It feels like having a team of marketing experts working 24/7. Our engagement rates have increased by 250%.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-blue-lightest/20 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(145,174,196,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(202,222,237,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 scroll-animate">
          <div className="inline-flex items-center gap-2 bg-blue-subtle/50 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-blue-light/20">
            <Star className="w-4 h-4 text-primary fill-current" />
            <span className="text-sm font-medium text-primary">Customer Success</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Loved by Marketing
            <span className="block text-gradient bg-gradient-primary bg-clip-text text-transparent">
              Professionals
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who have transformed their marketing 
            with our AI-powered suite. Here's what they have to say.
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="glass-card hover-luxury group border-0 scroll-animate"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-primary opacity-60" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 text-yellow-400 fill-current" 
                    />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-light/20"
                  />
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="scroll-animate">
          <div className="glass-card rounded-3xl p-8">
            <h3 className="text-2xl font-semibold text-center text-foreground mb-8">
              Trusted by industry leaders worldwide
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-gradient bg-gradient-primary bg-clip-text text-transparent mb-2">
                  10,000+
                </div>
                <div className="text-sm text-muted-foreground">
                  Active Users
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient bg-gradient-primary bg-clip-text text-transparent mb-2">
                  99.9%
                </div>
                <div className="text-sm text-muted-foreground">
                  Uptime
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient bg-gradient-primary bg-clip-text text-transparent mb-2">
                  2.5M+
                </div>
                <div className="text-sm text-muted-foreground">
                  Campaigns Created
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient bg-gradient-primary bg-clip-text text-transparent mb-2">
                  4.9/5
                </div>
                <div className="text-sm text-muted-foreground">
                  Customer Rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;