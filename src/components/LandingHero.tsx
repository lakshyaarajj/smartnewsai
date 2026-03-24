import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const LandingHero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-foreground/60" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-8">
            <Zap className="w-4 h-4 text-electric" />
            <span className="text-sm font-medium text-primary-foreground/90">AI-Powered News Intelligence</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-black text-primary-foreground leading-tight mb-6 text-balance">
            SmartNews AI
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-xl mx-auto mb-10 font-body leading-relaxed">
            Get the most important economic and business news in 5 minutes every morning.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="hero"
              size="lg"
              className="text-base px-8 py-6"
              onClick={() => navigate("/signup")}
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LandingHero;
