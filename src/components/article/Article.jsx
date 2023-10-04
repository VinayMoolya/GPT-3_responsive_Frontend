import React from "react";

import "./article.css";

const Article = (props) => {
  return (
    <div className="gpt3__article-container">
      <div className="gpt3__article-container-image">
        <img src={props.image} alt="image" />
      </div>
      <div className="gpt3__article-container-content">
        <div>
          <p className="date">{props.date}</p>
          <h4>{props.text}</h4>
        </div>
        <div className="footer">
          <p>Read Full Article</p>
        </div>
      </div>
    </div>
  );
};

export default Article;
