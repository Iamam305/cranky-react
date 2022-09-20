import React from "react";
import About from "../components/LandingPage/About";
import Contact from "../components/LandingPage/Contact";
import Hero from "../components/LandingPage/Hero";
import LatestBlogs from "../components/LandingPage/LatestBlogs";

const Home = () => {
  return (
    <div>
     <Hero/>
     <About/>
     <LatestBlogs/>
     <Contact/>
    </div>
  );
};

export default Home;
