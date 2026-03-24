import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Zap, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import NewsCard from "@/components/NewsCard";
import { sampleNews } from "@/data/sampleNews";
import { Button } from "@/components/ui/button";

const CATEGORIES = ["all", "economy", "markets", "startups", "policy", "global", "technology"];

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all");

  const user = useMemo(() => {
    try {
      const data = localStorage.getItem("smartnews_user");
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  }, []);

  const filteredNews = useMemo(() => {
    if (activeCategory === "all") return sampleNews;
    return sampleNews.filter((n) => n.category === activeCategory);
  }, [activeCategory]);

  const handleLogout = () => {
    localStorage.removeItem("smartnews_user");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-lg font-bold font-body text-foreground">SmartNews AI</span>
          </div>
          <div className="flex items-center gap-4">
            {user && (
              <span className="text-sm text-muted-foreground hidden sm:inline">
                Hey, {user.name}
              </span>
            )}
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-1" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-1">
            Your News Feed
          </h1>
          <p className="text-muted-foreground">Stay ahead with today's top stories.</p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium capitalize whitespace-nowrap transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((news, i) => (
            <NewsCard
              key={news.id}
              title={news.title}
              category={news.category}
              summary={news.summary}
              articleLink={news.article_link}
              imageUrl={news.image_url}
              publishedDate={news.published_date}
              index={i}
            />
          ))}
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No news found in this category yet.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
