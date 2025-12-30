import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { NewsCardProps } from "@/types/news";

const NewsCart = ({ item }: NewsCardProps) => {
  return (
    <div className="rounded-md p-1">
      <div className="bg-white/20  dark:bg-gray-800/30 backdrop-blur-md border border-black/30 dark:border-gray-500/30 rounded-md shadow-md overflow-hidden">
        <Link href={`/news/${item._id}`}>
          <Image
            src={item.imageUrl}
            width={400}
            height={300}
            alt="news image"
            className="md:h-56 w-full object-cover rounded mb-4 hover:scale-105 transition-all duration-200"
          />
        </Link>

        <div className="p-4">
          <h2 className="text-xl font-semibold my-3 text-gray-900 dark:text-white">{item.title}</h2>

          <p className="mb-4 text-gray-700 dark:text-gray-200">
            {item.description?.substring(0, 80)}...
          </p>

          <Link href={`/news/${item._id}`}>
            <Button variant="default">বিস্তারিত পড়ুন</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCart;
