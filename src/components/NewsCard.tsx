import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface NewsCardProps {
  title: string;
  category: string;
  summary: string;
  articleLink: string;
  imageUrl: string;
  publishedDate: string;
  index?: number;
}

const categoryColors: Record<string, string> = {
  economy: "bg-primary/10 text-primary border-primary/20",
  markets: "bg-success/10 text-success border-success/20",
  startups: "bg-warning/10 text-warning border-warning/20",
  policy: "bg-destructive/10 text-destructive border-destructive/20",
  global: "bg-electric/10 text-electric border-electric/20",
  technology: "bg-accent/20 text-accent-foreground border-accent/30",
};

const NewsCard = ({ title, category, summary, articleLink, imageUrl, publishedDate, index = 0 }: NewsCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group bg-card rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden"
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <Badge variant="outline" className={`text-xs font-medium capitalize ${categoryColors[category] || ""}`}>
            {category}
          </Badge>
          <span className="text-xs text-muted-foreground">{publishedDate}</span>
        </div>
        <h3 className="text-lg font-semibold text-card-foreground mb-2 leading-snug line-clamp-2 font-body group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">{summary}</p>
        <a
          href={articleLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-electric-glow transition-colors"
        >
          Read full article
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.article>
  );
};

export default NewsCard;
