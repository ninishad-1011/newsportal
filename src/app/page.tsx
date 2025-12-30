import Image from "next/image";
import Banner from "@/components/shared/banner";
import NewsCard from "@/components/shared/newsCart";
import { News } from "@/types/news";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const news = await data.json();

  return (
    <div className="py-12">
      <Banner />

      <div className="my-12">
        <h2 className="text-2xl mb-8 font-bold">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.slice(0,9).map((item: News) => (
            <NewsCard key={item._id} item={item} />
          ))}
        </div>
        <Link href="/news" className="flex justify-center mt-8">
          <Button variant="default">View All News</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
