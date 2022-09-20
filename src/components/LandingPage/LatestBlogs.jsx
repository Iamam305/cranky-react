import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getLatestBlogs } from "../../service/BlogServices";

const LatestBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  console.log(blogs);
  useEffect(() => {
    getLatestBlogs().then((res) => setBlogs(res));
  }, []);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
        <h2 className="text-4xl py-8">Our Latest Blogs -</h2>
          <div className="flex flex-wrap -m-4">
            {blogs.map((blog) => (
              <div className="p-4 md:w-1/3"> 
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={blog.jetpack_featured_media_url}
                    alt="blog"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      CATEGORY
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {blog.title.rendered}
                    </h1>

                    <div className="leading-relaxed mb-3">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: blog.excerpt.rendered,
                        }}
                      />
                    </div>
                    <div className="flex items-center flex-wrap ">
                      <Link to={`/blog/${blogs.id}`} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </Link>
                     
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LatestBlogs;
