import { useDispatch, useSelector } from "react-redux";
import type { Blog } from "../interfaces";
import { setCurrentPage } from "../redux/slice";
import BlogCard from "./BlogCard";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

const AllPostSection = () => {
  const dispatch = useDispatch();
  const { blogs, currentPage } = useSelector(
    (state: { blogs: { blogs: Array<Blog>; currentPage: number } }) =>
      state?.blogs
  );
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
      <h2 className="mb-8 font-semibold text-2xl">All blog posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-6">
        {currentBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      <div className="flex text-slate-500 dark:text-slate-300 justify-between py-5 border-y border-slate-300 flex-col items-center gap-5 sm:flex-row sm:border-b-0">
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

export default AllPostSection;
