import { motion } from "framer-motion";
import { Newspaper, Brain, Mail } from "lucide-react";

const features = [
  {
    icon: Newspaper,
    title: "Personalized News Feed",
    description: "Curated articles based on your interests — economy, markets, startups, and more.",
  },
  {
    icon: Brain,
    title: "AI Summarized News",
    description: "Complex stories distilled into clear, actionable 2–3 line summaries by AI.",
  },
  {
    icon: Mail,
    title: "Daily Email Digest",
    description: "Your personalized morning briefing delivered to your inbox every day.",
  },
];

const LandingFeatures = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Your News, Reimagined
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Everything you need to stay ahead of the markets and economy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3 font-body">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingFeatures;
