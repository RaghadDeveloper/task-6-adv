import { useSelector } from "react-redux";
import NewsLetterHero from "../components/NewsLetterHero";
import type { Blog } from "../interfaces";
import BlogCard from "../components/BlogCard";

const NewsLetter = () => {
  const { blogs } = useSelector(
    (state: { blogs: { blogs: Array<Blog> } }) => state?.blogs
  );

  return (
    <div>
      <NewsLetterHero />

      <h2 className="mb-8 font-semibold text-2xl">All blog posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-6">
        {blogs
          .slice(0, 3)
          .map((blog, index) =>
            index === 2 ? (
              <BlogCard
                key={blog.id}
                blog={blog}
                className="sm:col-span-2 lg:col-span-1"
              />
            ) : (
              <BlogCard key={blog.id} blog={blog} />
            )
          )}
      </div>
    </div>
  );
};

export default NewsLetter;
