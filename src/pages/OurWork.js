import React, {useState} from "react";
import { Link } from "react-router-dom";
import { MovieState } from "../toolkit/data/movieState";
//styled
import styled from "styled-components";
//animations
import { motion } from "framer-motion";
import {pageAnimation} from "../toolkit/helpers/animation";

const OurWork = () => {
  let [moviesData, setMoviesData] = useState(MovieState);
  return (
    <StyledWork
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h1>Our Work</h1>
      {moviesData.map((movie) => {
        return (
          <StyledMovie key={movie.title}>
            <h2>{movie.title}</h2>
            <div className="line"></div>
            <Link to={movie.url}>
              <img src={movie.mainImg} alt={movie.title} />
            </Link>
          </StyledMovie>
        );
      })}
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
`;

const StyledMovie = styled.div`
  padding-bottom: 5rem;

  .line {
    height: 0.5rem;
    width: 95%;
    background: #23d997;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 75vh;
    object-fit: cover;
    cursor: pointer;
    filter: brightness(30%);
    transition: all 0.3s ease-in;

    &:hover {
      filter: brightness(100%);
    }
  }
`;

export default OurWork;
