import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import SingleBlog from "./Pages/SingleBlog";
import Blogs from "./Pages/Blogs";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs  />} />
          <Route path="blogs/:id" element={<SingleBlog />} />
        </Route>
      </Routes>
    </BrowserRouter>
    ,
  </React.StrictMode>
);
