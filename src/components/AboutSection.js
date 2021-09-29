import React from "react";
import steveCam from "../toolkit/assets/home1.png";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>You dream and</h2>
          </div>
          <div className="hide">
            <h2>
              we make it <span>true</span>.
            </h2>
          </div>
        </div>
        <p>
          With amazing videograpgy and photography skills our proffessions will
          help you create your dream project come in life.
        </p>
        <button>Contact Us</button>
      </div>
      <div className="image">
        <img src={steveCam} alt="Steve with camera" />
      </div>
    </div>
  );
};

export default AboutSection;
