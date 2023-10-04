import React from "react";
import "./blog.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
const Blog = () => {
  return (
    <div className="gpt3__blog-container section__padding">
      <div className="gpt3__blog-heading" id="blog">
        <h2 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h2>
      </div>
      <div className="gpt3__blogs-container">
        <div className="gpt3__blog-container-grpA">
          <Article
            image={blog01}
            date={"Sep 26, 2021"}
            text={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
          />
        </div>
        <div className="gpt3__blog-container-grpB">
          <Article
            image={blog02}
            date={"Sep 26, 2021"}
            text={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
          />
          <Article
            image={blog03}
            date={"Sep 26, 2021"}
            text={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
          />
          <Article
            image={blog04}
            date={"Sep 26, 2021"}
            text={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
          />
          <Article
            image={blog05}
            date={"Sep 26, 2021"}
            text={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
