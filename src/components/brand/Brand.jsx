import React from "react";

import { google, atlassian, dropbox, shopify, slack } from "./imports";
import "./brand.css";
const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div className="gpt3__brand-image_container">
        <div>
          <img src={google} alt="google" />
        </div>
        <div>
          <img src={atlassian} alt="atlassian" />
        </div>
        <div>
          <img src={dropbox} alt="dropbox" />
        </div>
        <div>
          <img src={shopify} alt="shopify" />
        </div>
        <div>
          <img src={slack} alt="slack" />
        </div>
      </div>
    </div>
  );
};

export default Brand;
