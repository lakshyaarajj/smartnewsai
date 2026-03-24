import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Replace with your Relay / automation webhook URL
const WEBHOOK_URL = "https://hook.relay.app/api/v1/playbook/cmn4ixyt80sol0rj8azmi2o40/trigger/6ph0pH1TWjhPlx9OayHo4A";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, Zap } from "lucide-react";
import { toast } from "sonner";

const CATEGORIES = [
  { id: "economy", label: "Economy", emoji: "📊" },
  { id: "markets", label: "Markets", emoji: "📈" },
  { id: "startups", label: "Startups", emoji: "🚀" },
  { id: "policy", label: "Policy", emoji: "🏛️" },
  { id: "global", label: "Global", emoji: "🌍" },
  { id: "technology", label: "Technology", emoji: "💻" },
] as const;

type CategoryId = (typeof CATEGORIES)[number]["id"];

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selected, setSelected] = useState<Set<CategoryId>>(new Set());
  const [loading, setLoading] = useState(false);

  const toggleCategory = (id: CategoryId) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      toast.error("Please fill in your name and email.");
      return;
    }
    if (selected.size === 0) {
      toast.error("Please select at least one news category.");
      return;
    }

    setLoading(true);

    const payload = {
      name: name.trim(),
      email: email.trim(),
      economy: selected.has("economy"),
      markets: selected.has("markets"),
      startups: selected.has("startups"),
      policy: selected.has("policy"),
      global: selected.has("global"),
      technology: selected.has("technology"),
    };

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        mode: "no-cors",
      });

      // Also store locally for dashboard access
      localStorage.setItem("smartnews_user", JSON.stringify({
        name: payload.name,
        email: payload.email,
        categories: { economy: payload.economy, markets: payload.markets, startups: payload.startups, policy: payload.policy, global: payload.global, technology: payload.technology },
      }));

      toast.success("Welcome to SmartNews AI!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Webhook error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Zap className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-primary">SmartNews AI</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
            Create Your Feed
          </h1>
          <p className="text-muted-foreground">
            Tell us what you care about and we'll curate your news.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4 p-6 rounded-2xl bg-card border border-border shadow-card">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                Name
              </label>
              <Input
                id="name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border shadow-card">
            <p className="text-sm font-medium text-foreground mb-4">Select your news interests</p>
            <div className="grid grid-cols-2 gap-3">
              {CATEGORIES.map((cat) => (
                <label
                  key={cat.id}
                  className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all duration-200 ${
                    selected.has(cat.id)
                      ? "border-primary bg-primary/5 shadow-sm"
                      : "border-border hover:border-primary/30"
                  }`}
                >
                  <Checkbox
                    checked={selected.has(cat.id)}
                    onCheckedChange={() => toggleCategory(cat.id)}
                  />
                  <span className="text-sm font-medium text-card-foreground">
                    {cat.emoji} {cat.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <Button
            type="submit"
            variant="hero"
            size="lg"
            className="w-full text-base py-6"
            disabled={loading}
          >
            {loading ? "Setting up..." : "Start Reading"}
            <ArrowRight className="w-5 h-5 ml-1" />
          </Button>
        </form>
      </motion.div>
    </div>
  );
};

export default Signup;
