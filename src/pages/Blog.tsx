import BlogCard from "../components/BlogCard";
import BlogDetails from "../components/BlogDetails";
import NewsLetterHero from "../components/NewsLetterHero";
import { blogs } from "../data/blogs";

const Blog = () => {
  return (
    <section>
      <div className="flex flex-col-reverse gap-8 md:grid md:grid-cols-2 lg:grid-cols-3 mb-8">
        <div>
          <h2 className="mb-8 font-semibold text-2xl">All blog posts</h2>
          <div className="flex flex-col gap-8">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <BlogDetails />
        </div>
      </div>

      <NewsLetterHero />
    </section>
  );
};

export default Blog;
