

export interface News {
  _id: string; // changed from id to match object
  title: string;
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



