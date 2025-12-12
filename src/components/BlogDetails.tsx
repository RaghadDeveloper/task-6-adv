import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";
import { formatDate } from "../utils/helpers";

const BlogDetails = () => {
  const { id } = useParams();

  const blog = blogs.find((blog) => blog.id === Number(id));

  if (!blog) return <p>Blog not found</p>;

  return (
    <div>
      <p className="font-semibold text-violet-700 mb-8">
        {formatDate(blog.date).weekday} , {formatDate(blog.date).date}
      </p>

      <h1 className="text-4xl font-bold mb-8">{blog?.title}</h1>

      <img src={blog?.image} alt="" className="mb-8 aspect-video object-top" />

      <div className="flex flex-col gap-3">
        {blog?.sections.map((section, index) => (
          <div className="flex flex-col gap-3" key={index}>
            {section.title && (
              <h3 className="text-slate-500 dark:text-slate-300 font-bold text-lg">
                {section.title}
              </h3>
            )}

            {section?.description?.length &&
              section?.description?.map((desc) => (
                <p className="text-slate-500 dark:text-slate-300" key={desc.p}>
                  {desc?.subTitle && (
                    <span className="font-bold">{desc.subTitle}</span>
                  )}{" "}
                  {desc.p}
                </p>
              ))}

            {section.img && (
              <div>
                <img src={section.img.src} alt="" className="mb-3 w-full" />
                <p className="text-slate-500 dark:text-slate-300 text-center">
                  {section.img.desc}
                </p>
              </div>
            )}

            {section.secs?.length &&
              section.secs.map((sec, index) => (
                <div key={index} className="flex flex-col gap-3">
                  {sec.subTitle && (
                    <h4 className="text-slate-500 dark:text-slate-300 font-bold">
                      {sec.subTitle}
                    </h4>
                  )}
                  {sec.description.length &&
                    sec.description.map((desc, index) => (
                      <p
                        className="text-slate-500 dark:text-slate-300"
                        key={index}
                      >
                        {desc.p}
                      </p>
                    ))}

                  {sec.ul?.length && (
                    <ul className="text-slate-500 dark:text-slate-300">
                      {sec.ul.map((item, index) => (
                        <li key={index} className="list-disc ml-7">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {sec.img && (
                    <div>
                      <img src={sec.img.src} alt="" className="mb-3" />
                      <p className="text-slate-500 dark:text-slate-300 text-center">
                        {sec.img.desc}
                      </p>
                    </div>
                  )}
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
