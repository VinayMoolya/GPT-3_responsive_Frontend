import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="gpt3__footer-container">
      <div className="footer-banner-content">
        <h2>Do you want to step in to the future before others</h2>
        <button type="button">Request Early Access</button>
      </div>
      <div className="footer-main-secondary-container">
        <div className="gpt3__footer-main">
          <h2>GPT-3</h2>
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-rest">
          <div>
            <p className="head">Links</p>
          </div>
          <div className="content-p">
            <p>Overons</p>
          </div>
          <div className="content-p">
            <p>Social Media</p>
          </div>
          <div className="content-p">
            <p>Counters</p>
          </div>
          <div className="content-p">
            <p>Contact</p>
          </div>
        </div>
        <div className="gpt3__footer-rest">
          <div>
            <p className="head">Company</p>
          </div>
          <div className="content-p">
            <p>Terms & Conditions</p>
          </div>
          <div className="content-p">
            <p>Privacy Policy</p>
          </div>
          <div className="content-p">
            <p>Contact</p>
          </div>
        </div>
        <div className="gpt3__footer-rest">
          <div>
            <p className="head">Get in touch</p>
          </div>
          <div className="content-p">
            <p>Crechterwoord K12 182 DK Alknjkcb</p>
          </div>
          <div className="content-p">
            <p>085-132567</p>
          </div>
          <div className="content-p">
            <p>info@payme.net</p>
          </div>
        </div>
      </div>
      <footer>
        <p>© 2021 GPT-3. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
