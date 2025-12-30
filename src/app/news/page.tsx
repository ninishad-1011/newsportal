import NewsList from '@/components/news/newslist';
import { News } from '@/types/news';
import news from '@/data/news.json'; // direct import
import React from 'react';

const Page = () => {
  return (
    <div className="py-12">
      <NewsList news={news as News[]} />
    </div>
  );
};

export default Page;
