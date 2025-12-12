import { useDispatch, useSelector } from "react-redux";
import type { Blog } from "../interfaces";
import BlogCard from "../components/BlogCard";
import { setCurrentPage } from "../redux/slice";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

const Home = () => {
  const dispatch = useDispatch();
  const { blogs, currentPage } = useSelector(
    (state: { blogs: { blogs: Array<Blog>; currentPage: number } }) =>
      state?.blogs
  );

  const recentBlog = blogs.slice(blogs.length - 4, blogs.length);

  const totalPages = Math.ceil(blogs.length / 6);

  const indexOfLast = currentPage * 6;
  const indexOfFirst = indexOfLast - 6;
  const currentBlogs = blogs.slice(indexOfFirst, indexOfLast);

  const handlePrev = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

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

      <h2 className="mb-8 font-semibold text-2xl">All blog posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-6">
        {currentBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      <div className="flex text-slate-500 dark:text-slate-300 justify-between">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="flex items-center gap-2 font-semibold cursor-pointer"
        >
          <LuArrowLeft />
          Previous
        </button>

        <div className="flex gap-1">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => dispatch(setCurrentPage(i + 1))}
              className={`p-3 py-1 font-semibold rounded cursor-pointer ${
                currentPage === i + 1 ? "text-violet-700 bg-violet-100" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="flex items-center gap-2 font-semibold cursor-pointer"
        >
          Next
          <LuArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Home;
