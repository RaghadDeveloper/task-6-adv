import { GoArrowUpRight } from "react-icons/go";
import type { Blog } from "../interfaces";
import { formatDate } from "../utils/helpers";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const colors = [
  "bg-red-100 text-red-700",
  "bg-blue-100 text-blue-700",
  "bg-green-100 text-green-700",
  "bg-yellow-100 text-yellow-700",
  "bg-purple-100 text-purple-700",
  "bg-pink-100 text-pink-700",
  "bg-indigo-100 text-indigo-700",
  "bg-orange-100 text-orange-700",
  "bg-teal-100 text-teal-700",
];

const getRandom = (arr: string[]) =>
  arr[Math.floor(Math.random() * arr.length)];

const BlogCard = ({ blog, className }: { blog: Blog; className?: string }) => {
  const navigate = useNavigate();
  const [showAuthor, setShowAuthor] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    setShowAuthor(mediaQuery.matches);

    const handleResize = (e: MediaQueryListEvent) => setShowAuthor(e.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <div className={`flex flex-col gap-6 h-fit ${className}`}>
      <img
        src={blog.image}
        alt=""
        className={`aspect-video object-cover min-w-1/2 max-h-70`}
      />
      <div className="h-fit">
        <p className="font-semibold text-violet-700 mb-3">
          {showAuthor ? blog.author : formatDate(blog.date).weekday} ,{" "}
          {formatDate(blog.date).date}
        </p>
        <div className="flex justify-between gap-3 mb-3 text-2xl">
          <h3 className="font-semibold">{blog.title}</h3>
          <span
            className="cursor-pointer"
            onClick={() => navigate(`/blog/${blog.id}`)}
          >
            <GoArrowUpRight />
          </span>
        </div>
        <p className="mb-6 text-slate-500 dark:text-slate-300">
          {blog.description.split(" ").slice(0, 18).join(" ")}
        </p>

        <div className="flex gap-2">
          {blog.categories.map((category) => (
            <span
              key={category}
              className={`px-2.5 py-0.5 rounded-2xl ${getRandom(colors)}`}
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
