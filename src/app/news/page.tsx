import NewsList from '@/components/news/newslist';
import { News } from '@/types/news';
import React from 'react';

interface NewsListProps {
  news: News[];
}

const Page = async () => {
  // fetch the news
  const res = await fetch('http://localhost:3000/data/news.json');
  const news: News[] = await res.json();

  return (
    <div className="py-12">
      <NewsList news={news} />
    </div>
  );
};

export default Page;
