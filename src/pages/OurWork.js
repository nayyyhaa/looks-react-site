import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MovieState } from "../toolkit/data/movieState";
//styled
import styled from "styled-components";
import { StyledImage } from "../toolkit/styles/styles";
//animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  imageAnimation,
  lineAnimation,
  pageSliderAnimation,
  sliderContainerAnimation
} from "../toolkit/helpers/animation";
import useScroll from "../toolkit/helpers/useScroll";
import ScrollToTop from "../components/ScrollToTop";

const OurWork = () => {
  let [moviesData, setMoviesData] = useState(MovieState);
  let [element, controls] = useScroll();
  let [element1, controls1] = useScroll();
  let [element2, controls2] = useScroll();

  const checkRef = (index) => {
    if (index === 0) return element;
    else if (index === 1) return element1;
    return element2;
  };

  const checkControl = (index) => {
    if (index === 0) return controls;
    else if (index === 1) return controls1;
    return controls2;
  };

  return (
    <StyledWork
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.div variants={sliderContainerAnimation}>
        <StyledFrame1 variants={pageSliderAnimation}></StyledFrame1>
        <StyledFrame2 variants={pageSliderAnimation}></StyledFrame2>
        <StyledFrame3 variants={pageSliderAnimation}></StyledFrame3>
        <StyledFrame4 variants={pageSliderAnimation}></StyledFrame4>
      </motion.div>
      <motion.h1 variants={fade}>Our Work</motion.h1>
      {moviesData.map((movie, index) => {
        return (
          <StyledMovie
            key={movie.title}
            ref={checkRef(index)}
            variants={fade}
            initial="hidden"
            animate={checkControl(index)}
          >
            <motion.h2 variants={fade}>{movie.title}</motion.h2>
            <motion.div variants={lineAnimation} className="line"></motion.div>
            <Link to={movie.url}>
              <StyledImage>
                <motion.img
                  variants={imageAnimation}
                  src={movie.mainImg}
                  alt={movie.title}
                />
              </StyledImage>
            </Link>
          </StyledMovie>
        );
      })}
      <ScrollToTop />
    </StyledWork>
  );
};

const StyledWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 1rem 5rem;
  background: white;
  color: black;

  h1 {
    font-size: 4rem;
    text-align: center;
  }

  h2 {
    padding: 1rem 0rem;
  }

  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
`;

const StyledMovie = styled(motion.div)`
  padding-bottom: 5rem;

  .line {
    height: 0.5rem;
    width: 95%;
    background: #23d997;
    margin-bottom: 3rem;
  }

  img {
    height: 75vh;
    cursor: pointer;
    filter: brightness(30%);
    transition: all 0.3s ease-in;

    &:hover {
      filter: brightness(100%);
    }
  }
`;

//frame animation
const StyledFrame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const StyledFrame2 = styled(StyledFrame1)`
  background: #ff8efb;
`;
const StyledFrame3 = styled(StyledFrame1)`
  background: #8ed2ff;
`;
const StyledFrame4 = styled(StyledFrame1)`
  background: #8effa0;
`;

export default OurWork;
