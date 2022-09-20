import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleBlog } from "../service/BlogServices";

const SingleBlog = () => {
  const [blog, setBlog] = useState("");
  const { id } = useParams();

  useEffect(() => {
    getSingleBlog(id).then((res) => {
      setBlog(res);
    });
  }, []);
  return (
    <div>
      <section className="text-gray-600 body-font">
        
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="md:w-5/6 mx-auto">
            <div className="rounded-lg  overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src={blog.jetpack_featured_media_url}
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className=" sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <h2 className="text-3xl font-bold text-gray-500 pb-4"> {blog.title?.rendered}</h2>
                <div className="leading-relaxed text-lg mb-4">
                <span
              dangerouslySetInnerHTML={{
                __html: blog.content?.rendered,
              }}
              className="blog-content"
            />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleBlog;
