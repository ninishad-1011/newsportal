import { News } from "@/types/news";
import Image from "next/image";
import Link from "next/link";
import posts from "@/data/news.json"; // local JSON import

export const dynamicParams = true;

export function generateStaticParams() {
  return posts.map((post: News) => ({
    id: post._id.toString(),
  }));
}

const NewsDetailsPage = ({ params }: { params: { id: string } }) => {
  // ✅ find single news by id from local JSON
  const post = posts.find((item: News) => item._id === params.id);

  if (!post) {
    return <div className="text-center py-20">News not found</div>;
  }

  return (
    <section className="py-12">
      <article className="max-w-4xl mx-auto p-6">
        {/* Breadcrumb */}
        <div className="mb-4 text-sm text-gray-500">
          <Link href="/" className="hover:underline hover:text-red-600">হোম পেজ</Link> {" // "} 
          <Link href="/news" className="hover:underline hover:text-red-600">সব খবর</Link>
        </div>

        {post.imageUrl && (
          <div className="flex justify-center mb-5">
            <Image
              src={post.imageUrl}
              alt={post.title}
              width={800}
              height={450}
              className="rounded-md object-cover"
            />
          </div>
        )}

        <h2 className="text-3xl font-bold mb-4">{post.title}</h2>

        <div className="flex justify-between text-sm mb-4">
          <p>{new Date(post.published_at).toDateString()}</p>
          <Link href={post.url} target="_blank" className="text-blue-600 hover:underline">
            সংবাদের মূল উৎস
          </Link>
        </div>

        <div className="mb-4">
          {post.categories.map((cat) => (
            <span
              key={cat}
              className="bg-blue-100 text-blue-600 text-xs mr-2 px-2 py-1 rounded"
            >
              {cat}
            </span>
          ))}
        </div>

        <p className="mb-4">{post.snippet}</p>
        <p>{post.description}</p>
      </article>
    </section>
  );
};

export default NewsDetailsPage;
