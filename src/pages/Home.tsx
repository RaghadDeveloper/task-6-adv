import { useSelector } from "react-redux";
import type { Blog } from "../interfaces";
import BlogCard from "../components/BlogCard";

const Home = () => {
  const { blogs } = useSelector(
    (state: { blogs: { blogs: Array<Blog> } }) => state?.blogs
  );

  const recentBlog = blogs.slice(0, 4);
  console.log("recentBlog", recentBlog);

  return (
    <div>
      <h1 className="text-7xl sm:text-[160px] md:text-[243px] text-center border-y font-bold py-3 mb-5 sm:mb-7.5">
        THE BLOG
      </h1>

      <h2 className="mb-8 font-semibold text-2xl">Recent blog posts</h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-6">
        {recentBlog.map((blog, index) =>
          index === 0 ? (
            <BlogCard key={blog.id} blog={blog} className="row-span-2" />
          ) : index === 3 ? (
            <BlogCard
              key={blog.id}
              blog={blog}
              className="md:col-span-2 md:flex-row"
            />
          ) : (
            <BlogCard key={blog.id} blog={blog} className="sm:flex-row" />
          )
        )}
      </div>
    </div>
  );
};

export default Home;
