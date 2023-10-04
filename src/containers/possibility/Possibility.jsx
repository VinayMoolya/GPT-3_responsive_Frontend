import React from "react";
import "./possibility.css";
import possibility from "../../assets/possibility.png";
const Possibility = () => {
  return (
    <div>
      <div className="gpt3__possibility-container" id="possibility">
        <div className="gpt3__possibility-container-image">
          <img src={possibility} alt="possibility img" />
        </div>
        <div className="gpt3__possibility-container-content">
          <p className="mini-head">Request Early Access to Get Started</p>
          <h2 className="heading">
            The possibilities are beyond your imagination
          </h2>
          <p className="description">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <p className="mini-foot">Request Early Access to Get Started</p>
        </div>
      </div>
      <div className="gpt3__possibility-banner-container">
        <div className="text-container">
          <p>Request Early Access to Get Started</p>
          <h3>Register today & start exploring the endless possiblities.</h3>
        </div>
        <div className="banner-btn-container">
          <button type="button">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Possibility;
