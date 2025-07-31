import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import heroImage from "@/assets/hero-ai-dashboard.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-dark/20 via-blue-medium/10 to-blue-light/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-light/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-blue-medium/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-blue-lightest/30 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/20">
              <Sparkles className="w-4 h-4 text-blue-lightest" />
              <span className="text-sm font-medium text-white">AI-Powered Marketing Revolution</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Transform Your
              <span className="block text-gradient bg-gradient-to-r from-blue-lightest via-white to-blue-light bg-clip-text text-transparent">
                Brand with AI
              </span>
            </h1>
            
            <p className="text-xl text-blue-lightest/90 mb-8 leading-relaxed max-w-lg">
              Unlock the power of artificial intelligence for your marketing. Create stunning campaigns, 
              analyze customer behavior, and scale your brand with our luxury AI suite.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="premium" size="xl" className="group">
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="xl" className="group">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-8 text-sm text-blue-lightest/80">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-light rounded-full" />
                <span>No credit card required</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Hero Image */}
          <div className="relative animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="glass-card rounded-3xl p-6 hover-luxury">
              <img 
                src={heroImage} 
                alt="ADmyBRAND AI Dashboard showcasing luxury marketing analytics"
                className="w-full h-auto rounded-2xl shadow-luxury"
              />
              
              {/* Floating Stats Cards */}
              <div className="absolute -top-4 -right-4 glass rounded-2xl p-4 animate-float">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">94%</div>
                  <div className="text-xs text-muted-foreground">ROI Increase</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2.5M+</div>
                  <div className="text-xs text-muted-foreground">Campaigns</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;