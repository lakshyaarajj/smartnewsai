export interface NewsItem {
  id: string;
  title: string;
  category: string;
  summary: string;
  article_link: string;
  image_url: string;
  published_date: string;
}

export const sampleNews: NewsItem[] = [
  {
    id: "1",
    title: "RBI Holds Repo Rate Steady Amid Global Uncertainty",
    category: "economy",
    summary: "The Reserve Bank of India maintained its benchmark rate at 6.5% for the eighth consecutive time, citing persistent inflation risks and global headwinds from trade tensions.",
    article_link: "https://economictimes.indiatimes.com",
    image_url: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
    published_date: "Mar 24, 2026",
  },
  {
    id: "2",
    title: "Sensex Crosses 85,000 Mark for First Time",
    category: "markets",
    summary: "Indian equity benchmark Sensex surged past the 85,000 level driven by strong FII inflows and robust Q4 earnings from banking and IT sectors.",
    article_link: "https://economictimes.indiatimes.com",
    image_url: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&h=400&fit=crop",
    published_date: "Mar 24, 2026",
  },
  {
    id: "3",
    title: "AI Startup Raises $200M to Transform Healthcare Diagnostics",
    category: "startups",
    summary: "A Bengaluru-based AI startup secured $200 million in Series C funding to expand its AI-powered diagnostic tools across Southeast Asia and Africa.",
    article_link: "https://economictimes.indiatimes.com",
    image_url: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
    published_date: "Mar 23, 2026",
  },
  {
    id: "4",
    title: "New Trade Policy Aims to Boost Manufacturing Exports by 25%",
    category: "policy",
    summary: "The government unveiled a revamped trade policy framework targeting a 25% increase in manufacturing exports through PLI scheme expansions and tariff rationalizations.",
    article_link: "https://economictimes.indiatimes.com",
    image_url: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&h=400&fit=crop",
    published_date: "Mar 23, 2026",
  },
  {
    id: "5",
    title: "Global Oil Prices Surge as OPEC Extends Production Cuts",
    category: "global",
    summary: "Brent crude climbed above $90 per barrel after OPEC+ agreed to extend production cuts through Q3, raising concerns about energy costs for emerging economies.",
    article_link: "https://economictimes.indiatimes.com",
    image_url: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop",
    published_date: "Mar 22, 2026",
  },
  {
    id: "6",
    title: "India's 5G Rollout Reaches 80% Urban Coverage Milestone",
    category: "technology",
    summary: "Telecom operators announced 80% 5G coverage across tier-1 cities, with plans to extend to rural regions by year-end, catalyzing IoT and edge computing adoption.",
    article_link: "https://economictimes.indiatimes.com",
    image_url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    published_date: "Mar 22, 2026",
  },
  {
    id: "7",
    title: "Rupee Strengthens to 10-Month High Against Dollar",
    category: "economy",
    summary: "The Indian rupee appreciated to its strongest level in ten months against the US dollar, supported by robust FDI inflows and declining crude oil import bills.",
    article_link: "https://economictimes.indiatimes.com",
    image_url: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&h=400&fit=crop",
    published_date: "Mar 21, 2026",
  },
  {
    id: "8",
    title: "Electric Vehicle Sales in India Up 45% Year-Over-Year",
    category: "markets",
    summary: "EV registrations surged 45% YoY in February, with two-wheelers leading growth. Battery costs continue to decline, making EVs more accessible to consumers.",
    article_link: "https://economictimes.indiatimes.com",
    image_url: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&h=400&fit=crop",
    published_date: "Mar 21, 2026",
  },
];
