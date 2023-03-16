import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const url = `http://localhost:7070/blogs`;

    fetch(url, { signal })
      .then((res) => res.json())
      .then((data) => setBlogs(data));

    () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="container mx-auto max-w-5xl">
      <h1 className="text-3xl text-blue-500 font-bold text-center">BLOGS</h1>

      <div className=" my-5 grid grid-cols-3 gap-5">
        {blogs &&
          blogs.map((blog) => (
            <Link to={`/blog/${blog.id}`} key={blog.id}>
              <BlogCard
                img={blog.imageUrl}
                tags={blog.tags}
                title={blog.title}
                desc={blog.desc}
                id={blog.id}
              />
            </Link>
          ))}
      </div>
    </div>
  );
};

const BlogCard = ({ img, tags, id, desc }) => {
  return (
    <div className="w-80 border border-solid border-gray-300 bg-white rounded-lg hover:shadow-lg hover:transform hover:scale-105 transition-all">
      <img src={img} className="w-full rounded-t-sm" alt="blogIMG" />

      <div className="p-4">
        <div className="my-2">
          {tags.map((tag, index) => (
            <span
              className="tag bg-gray-700 rounded-md text-white p-2 text-sm font-bold"
              key={index}
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-base pt-4 mb-4 text-gray-800 font-medium">
          Blog {id}
        </p>
        <p className=" text-sm text-gray-600">{desc} ....</p>
      </div>
      <div className="flex justify-start items-center p-5 text-orange-400">
        <p className="font-sm font-bold">See more</p>
        <FiChevronRight size="15" />
      </div>
    </div>
  );
};

export default BlogPage;
