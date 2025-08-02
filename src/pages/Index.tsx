import { useEffect } from "react";
import Navigation from "@/components/sections/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import PricingSection from "@/components/sections/PricingSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/sections/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { supabase } from "@/lib/supabaseClient";

const Index = () => {
  useScrollAnimation();

  // Handle anchor link smooth scrolling
  useEffect(() => {
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target?.href?.includes("#")) {
        e.preventDefault();
        const id = target.href.split("#")[1];
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  // Supabase auth session & listener
  useEffect(() => {
    // Check if user already has a session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        console.log("User already signed in:", session);
        // You can store in state, context, or redirect
      }
    });

    // Optional: Get user info (especially useful after redirect)
    supabase.auth.getUser().then(({ data: { user }, error }) => {
      if (user) {
        console.log("User info:", user);
      }
      if (error) {
        console.error("User fetch error:", error);
      }
    });

    // Listen for auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log("Auth state changed:", session);
      // Save session if needed
    });

    // Cleanup on unmount
    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        <HeroSection />

        <section id="features">
          <FeaturesSection />
        </section>

        <section id="pricing">
          <PricingSection />
        </section>

        <section id="testimonials">
          <TestimonialsSection />
        </section>

        <section id="faq">
          <FAQSection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
