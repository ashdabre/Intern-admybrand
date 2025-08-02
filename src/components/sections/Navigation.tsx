// src/components/Navigation.tsx
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import { useUser, useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react";

const Navigation = () => {
  const { isLoading } = useSessionContext();
  const user = useUser();
  const supabase = useSupabaseClient();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.href = "/sign-in";
  };

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass backdrop-blur-glass border-b border-white/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-display text-3xl text-white">ADmyBRAND</h1>
              <p className="text-xl text-muted-foreground -mt-1">AI Suite</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors font-medium relative group"
              >
                {link.name}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {!isLoading &&
              (user ? (
                <div className="flex items-center gap-4">
                  <img
                    src={user.user_metadata?.avatar_url}
                    alt="avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="text-white font-medium">
                    {user.user_metadata?.full_name || user.email}
                  </span>
                  <Button variant="ghost" onClick={handleSignOut}>
                    Logout
                  </Button>
                </div>
              ) : (
                <>
                  <Button
                    variant="ghost"
                    className="text-foreground hover:text-primary text-xl"
                    onClick={() => (window.location.href = "/sign-in")}
                  >
                    Sign In
                  </Button>
                  <Button
                    variant="hero"
                    size="lg"
                    onClick={() => (window.location.href = "/sign-up")}
                  >
                    Start Free Trial
                  </Button>
                </>
              ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/20 bg-white/95 backdrop-blur-glass">
            <div className="py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-2 text-foreground hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="px-4 pt-4 space-y-3">
                {!isLoading &&
                  (user ? (
                    <>
                      <div className="flex items-center gap-3">
                        <img
                          src={user.user_metadata?.avatar_url}
                          alt="avatar"
                          className="w-10 h-10 rounded-full"
                        />
                        <span className="font-medium">
                          {user.user_metadata?.full_name || user.email}
                        </span>
                      </div>
                      <Button
                        variant="ghost"
                        className="w-full"
                        onClick={handleSignOut}
                      >
                        Logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        variant="ghost"
                        className="text-foreground hover:text-primary w-full"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          window.location.href = "/sign-in";
                        }}
                      >
                        Sign In
                      </Button>
                      <Button
                        variant="hero"
                        className="w-full"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          window.location.href = "/sign-up";
                        }}
                      >
                        Start Free Trial
                      </Button>
                    </>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
