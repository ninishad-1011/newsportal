import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { NewsCardProps } from "@/types/news";

const NewsCart = ({ item }: NewsCardProps) => {
  return (<div className="bg-green-200 dark:bg-gray-800 rounded-md">
    <div className="border p-4 rounded-md shadow-md">
      <Link href={`/news/${item._id}`}>
        <Image
          src={item.imageUrl}
          width={400}
          height={300}
          alt="news image"
          className="md:h-56 rounded mb-4 hover:scale-105 transition-all duration-200"
        />
      </Link>

      <div>
        <h2 className="text-xl font-semibold my-3">{item.title}</h2>

        <p className="mb-4">
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
