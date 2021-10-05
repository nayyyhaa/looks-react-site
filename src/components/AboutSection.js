import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import steveCam from "../toolkit/assets/home1.png";
//styled
import {
  StyledAbout,
  StyledDescription,
  StyledImage,
  StyledHide,
} from "../toolkit/styles/styles";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <div className="title">
          <StyledHide>
            <h2>You dream and</h2>
          </StyledHide>
          <StyledHide>
            <h2>
              we make it <span>true</span>.
            </h2>
          </StyledHide>
        </div>
        <p>
          With amazing videograpgy and photography skills our proffessions will
          help you create your dream project come in life.
        </p>
        <button>
          <Link to="contact">Contact Us</Link>
        </button>
      </StyledDescription>
      <StyledImage>
        <img src={steveCam} alt="Steve with camera" />
      </StyledImage>
    </StyledAbout>
  );
};

export default AboutSection;
