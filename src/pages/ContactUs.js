import React from "react";
//styled
import styled from "styled-components";
import { StyledHide } from "../toolkit/styles/styles";
//animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../toolkit/helpers/animation";

const ContactUs = () => {
  return (
    <StyledContact
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <StyledHide>
        <motion.h1 variants={titleAnimation}>CONTACT US</motion.h1>
      </StyledHide>
      <StyledSocial>
        <StyledHide>
          <motion.div variants={titleAnimation}>
            <div className="circle"></div>
            <a href="/">Send a mail</a>
          </motion.div>
        </StyledHide>
        <StyledHide>
          <motion.div variants={titleAnimation}>
            <div className="circle"></div>
            <a href="/">Send a message</a>
          </motion.div>
        </StyledHide>
        <StyledHide>
          <motion.div variants={titleAnimation}>
            <div className="circle"></div>
            <a href="/">Social media</a>
          </motion.div>
        </StyledHide>
      </StyledSocial>
    </StyledContact>
  );
};

const StyledContact = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 5rem;
  background: white;
  color: black;

  h1 {
    font-size: 3rem;
    margin: 3rem 0;
  }
`;

const StyledSocial = styled(motion.div)`
  display: flex;
  flex-direction: column;

  .circle {
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    background-color:black;
  }

  div {
    display: flex;
    height: 10vh;
    justify-content: space-between;
    align-items: center;

  }
  a {
    color: black;
    font-size: 2rem;
    margin-left: 1rem;
  }
`;

export default ContactUs;
