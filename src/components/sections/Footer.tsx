import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "API Documentation", href: "#" },
    { name: "Integrations", href: "#" },
    { name: "Changelog", href: "#" }
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press Kit", href: "#" },
    { name: "Partners", href: "#" },
    { name: "Contact", href: "#" }
  ],
  resources: [
    { name: "Blog", href: "#" },
    { name: "Help Center", href: "#" },
    { name: "Webinars", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Templates", href: "#" }
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Security", href: "#" },
    { name: "GDPR", href: "#" },
    { name: "Cookies", href: "#" }
  ]
};

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" }
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-dark via-blue-medium to-blue-dark text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-white/10">
          <div className="max-w-4xl mx-auto text-center scroll-animate">
            <h3 className="text-3xl font-display font-bold mb-4">
              Stay ahead with AI marketing insights
            </h3>
            <p className="text-blue-lightest/80 mb-8 text-lg">
              Get the latest trends, tips, and exclusive content delivered to your inbox monthly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-blue-lightest/60 focus:outline-none focus:ring-2 focus:ring-blue-lightest/50"
              />
              <Button variant="premium" size="lg" className="group bg-white text-blue-dark hover:bg-blue-lightest">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 scroll-animate">
              <div className="mb-6">
                <h2 className="text-2xl font-display font-bold text-white mb-4">
                  ADmyBRAND AI Suite
                </h2>
                <p className="text-blue-lightest/80 leading-relaxed mb-6">
                  Transform your marketing with the power of artificial intelligence. 
                  Create, optimize, and scale campaigns that deliver exceptional results.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-blue-lightest/80">
                  <Mail className="w-4 h-4" />
                  <span>hello@admybrand.ai</span>
                </div>
                <div className="flex items-center gap-3 text-blue-lightest/80">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-blue-lightest/80">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors group"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 text-blue-lightest group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>
            
            {/* Links Sections */}
            <div className="lg:col-span-4 grid md:grid-cols-4 gap-8">
              <div className="scroll-animate" style={{ animationDelay: '0.1s' }}>
                <h4 className="font-semibold text-white mb-6">Product</h4>
                <ul className="space-y-3">
                  {footerLinks.product.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        className="text-blue-lightest/80 hover:text-white transition-colors hover:underline"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="scroll-animate" style={{ animationDelay: '0.2s' }}>
                <h4 className="font-semibold text-white mb-6">Company</h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        className="text-blue-lightest/80 hover:text-white transition-colors hover:underline"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="scroll-animate" style={{ animationDelay: '0.3s' }}>
                <h4 className="font-semibold text-white mb-6">Resources</h4>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        className="text-blue-lightest/80 hover:text-white transition-colors hover:underline"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="scroll-animate" style={{ animationDelay: '0.4s' }}>
                <h4 className="font-semibold text-white mb-6">Legal</h4>
                <ul className="space-y-3">
                  {footerLinks.legal.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        className="text-blue-lightest/80 hover:text-white transition-colors hover:underline"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-blue-lightest/60">
            <div>
              <p>&copy; 2024 ADmyBRAND AI Suite. All rights reserved.</p>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-sm">Made with ❤️ for marketers</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm">All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;