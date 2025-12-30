const news = {
  _id: "28a127d68f944fa58bf74b77826f80bd",
  title: "What To Expect From United Natural Foods Inc (UNFI) Q4 2024 Earnings",
  description: "United Natural Foods Inc (UNFI) will release its Q4 2024 earnings on October 1, 2024. Analysts forecast a revenue estimate of $7,944.47 million for this quarter.",
  snippet: "UNFI is set to release its Q4 2024 earnings report on October 1. The projected revenue for Q4 2024 is $7,944.47 million.",
  url: "https://www.gurufocus.com/news/2537521/what-to-expect-from-united-natural-foods-inc-unfi-q4-2024-earnings",
  imageUrl: "https://images.unsplash.com/photo-1665686308827-eb62e4f6604d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  language: "en",
  published_at: "2024-09-30T13:00:45.000000Z",
  source: "gurufocus.com",
  categories: ["business"],
  relevance_score: null
};

export interface News {
  _id: string; // changed from id to match object
  title: string;
  body: string;
  description: string;
  snippet: string;
  url: string;
  imageUrl: string;
  language: string;
  published_at: string;
  source: string;
  categories: string[];
  relevance_score: number | null;
}

export interface NewsCardProps {
  item: News;
}



