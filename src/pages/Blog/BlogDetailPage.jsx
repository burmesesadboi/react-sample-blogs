import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const BlogDetailPage = () => {
  const { id } = useParams();
  console.log("Blog Detail Id:", id);
  const navigate = useNavigate();

  const [blogDetail, setBlogDetail] = useState([]);
  const [recentBlog, setrecentBlog] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const url = `http://localhost:7070/blogs/${id}`;

    const fetchData = async () => {
      const res = await fetch(url, { signal });
      const data = await res.json();

      setBlogDetail(data);
    };

    fetchData();
    () => {
      controller.abort();
    };
  }, [id]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const url = `http://localhost:7070/blogs?_start=1&_end=4`;

    const fetchDataForRecentBlogs = async () => {
      const response = await fetch(url, { signal });
      const data = await response.json();
      setrecentBlog(data);
    };

    fetchDataForRecentBlogs();

    () => {
      controller.abort();
    };
  }, []);

  const handleExplore = () => navigate("/blog");

  return (
    <div className="grid grid-cols-4 px-20">
      <div></div>
      <div className="h-2/6 mx-auto flex flex-col justify-start border border-solid border-gray-300 rounded-lg shadow-lg text-center">
        <img
          className="mx-auto rounded-md my-8"
          src={blogDetail.imageUrl}
          alt="blogDetailIMG"
          width="50%"
        />

        <p className="text-4xl mb-5 font-bold">Blog {blogDetail.id}</p>
        <p className="text-lg">{blogDetail.desc}</p>

        <div className="my-10 flex justify-center">
          {blogDetail?.tags?.map((tag, index) => (
            <span
              className="tag bg-gray-700 text-white font-bold p-4 rounded-full"
              key={index}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div></div>
      <div className="border border-solid border-gray-700 p-3 ">
        <p className="text-center py-3 border border-solid border-gray-700 text-gray-900 mb-10 font-bold">
          Recent Blog
        </p>
        <div>
          {recentBlog?.map((blog, index) => (
            <Link key={index} to={`/blog/${blog.id}`}>
              <BlogCard
                key={index}
                img={blog.imageUrl}
                id={blog.id}
                desc={blog.desc}
                locId={id}
              />
            </Link>
          ))}
        </div>

        <p
          className="text-center py-3 border border-solid border-gray-700 bg-slate-900 capitalize font-bold text-white cursor-pointer"
          onClick={handleExplore}
        >
          explore
        </p>
      </div>
    </div>
  );
};

const BlogCard = ({ id, locId, img, desc }) => {
  return (
    <div
      className={`border border-solid border-gray-700 mb-5 ${
        +locId === +id && "select"
      }`}
    >
      <img src={img} width="100%" height="200px" />
      <div className="p-5">
        <h4 className="text-gray-900 my-2 font-bold">Blog {id}</h4>
        <p className="text-lg">{desc}</p>
      </div>
    </div>
  );
};

export default BlogDetailPage;
