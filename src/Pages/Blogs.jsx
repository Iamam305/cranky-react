import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBlogs } from "../service/BlogServices";


const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  console.log(blogs);
  useEffect(() => {
    getBlogs().then((res) => setBlogs(res));
  }, []);
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                All The Crankiness
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              This is an opinion blog, and despite the name, it’s not a place
              where I whine about how bad airlines are. My industry background
              means I understand why airlines do the things they do (sometimes),
              and I try to explain the rationale. I don’t think the airlines are
              always right (far from it), but if you’re looking for a place
              where so-called consumer advocates complain about how airlines are
              evil and everything sucks… keep looking.
            </p>
          </div>

          <div className="flex flex-wrap -m-4">
            {blogs?.map((blog) => (
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src={blog.jetpack_featured_media_url}
                    alt="content"
                  />

                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    {blog.title.rendered}
                  </h2>
                  <div className="leading-relaxed text-base">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: blog.excerpt.rendered,
                      }}
                      className="blog-content"
                    />
                    {}
                  </div>
                  <Link
                    to={`/blogs/${blog.id}`}
                    className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
