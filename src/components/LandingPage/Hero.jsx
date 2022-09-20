import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://i.ibb.co/GPkkdCg/aircraft-g847b1de7b-1280.jpg"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Getting Started With Cranky Flier
            </h1>
            <p className="mb-8 leading-relaxed">
              So you're new to the blog? Welcome, and thanks for stopping by.
              Cranky Flier has been one of the most respected airline industry
              blogs since it started in 2006. That's a lot of posts over a lot
              of years, so I've put this page together to help you find your way
              around.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                <Link to={'/blogs'}>
                  Read More
                </Link>
              </button>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
 