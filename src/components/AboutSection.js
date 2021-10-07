import React from "react";
import { Link } from "react-router-dom";
//animations
import { motion } from "framer-motion";
import {
  titleAnimation,
  fade,
  imageAnimation,
} from "../toolkit/helpers/animation";
import Wave from "./Wave";
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
            <motion.h2 variants={titleAnimation}>You dream and</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>
              we make it <span>true</span>.
            </motion.h2>
          </StyledHide>
        </div>
        <motion.p variants={fade}>
          With amazing videograpgy and photography skills our proffessions will
          help you create your dream project come in life.
        </motion.p>
        <motion.button variants={fade}>
          <Link to="contact">Contact Us</Link>
        </motion.button>
      </StyledDescription>
      <StyledImage>
        <motion.img src={steveCam} alt="Steve with camera" variants={imageAnimation} />
      </StyledImage>
      <Wave />
    </StyledAbout>
  );
};

export default AboutSection;
