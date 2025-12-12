import { useSelector } from "react-redux";
import BlogCard from "../components/BlogCard";
import BlogDetails from "../components/BlogDetails";
import NewsLetterHero from "../components/NewsLetterHero";
import type { Blog } from "../interfaces";

const Blog = () => {
  const { blogs } = useSelector(
    (state: { blogs: { blogs: Array<Blog>; currentPage: number } }) =>
      state?.blogs
  );

  const recentBlog = blogs.slice(blogs.length - 4, blogs.length);

  return (
    <section>
      <div className="flex flex-col-reverse gap-8 md:grid md:grid-cols-2 lg:grid-cols-3 mb-8">
        <div>
          <h2 className="mb-8 font-semibold text-2xl">All blog posts</h2>
          <div className="flex flex-col gap-8">
            {recentBlog.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <BlogDetails />
          <NewsLetterHero className="hidden lg:block" />
        </div>
      </div>

      <NewsLetterHero className="lg:hidden" />
    </section>
  );
};

export default Blog;
