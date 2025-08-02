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

  // Smooth anchor scroll
  useEffect(() => {
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target?.href?.includes("#")) {
        const id = target.href.split("#")[1];
        const element = document.getElementById(id);
        if (element) {
          e.preventDefault();
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

  // Supabase auth session + user info
  useEffect(() => {
    const fetchAuthData = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (session) {
          if (window.location.hostname === "localhost") {
            console.log("Local session:", session);
          }
        }

        const {
          data: { user },
          error,
        } = await supabase.auth.getUser();

        if (error) {
          console.error("User fetch error:", error.message);
        } else if (user) {
          if (window.location.hostname === "localhost") {
            console.log("User info:", user);
          }
        }
      } catch (err) {
        console.error("Auth handling error:", err);
      }
    };

    fetchAuthData();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (window.location.hostname === "localhost") {
        console.log("Auth state changed:", session);
      }
    });

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
