import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { MovieState } from "../toolkit/data/movieState";
//styled
import styled from "styled-components";
//animations
import { motion } from "framer-motion";
import {pageAnimation} from "../toolkit/helpers/animation";

const MovieDetails = () => {
  let [moviesData, setMoviesData] = useState(MovieState);
  let [movie, setMovie] = useState(null);
  let history = useHistory();
  const url = history.location.pathname;

  useEffect(() => {
    let specificMovie = moviesData.filter(
      (stateMovie) => stateMovie.url === url
    );
    setMovie(specificMovie[0]);
  }, [moviesData, url]);
  return (
    <>
      {movie && (
        <StyledDetails variants={pageAnimation} initial="hidden" animate="show">
          <StyledHeading>
            <h2>{movie.title}</h2>
            <div className="line"></div>
            <img src={movie.mainImg} alt={movie.title} />
          </StyledHeading>
          <StyledAwards>
            {movie.awards.map((award) => (
              <Award award={award} key={award.title} />
            ))}
          </StyledAwards>
          <StyledImageDisplay>
            <img src={movie.secondaryImg} alt="movie" />
          </StyledImageDisplay>
        </StyledDetails>
      )}
    </>
  );
};

const StyledDetails = styled(motion.div)`
  min-height: 100vh;
`;

const StyledHeading = styled.div`
  min-height: 90vh;
  position: relative;

  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
    z-index: 1;
    font-weight: 700;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    object-position: bottom;
    filter: brightness(80%);
  }
`;

const StyledAwards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 1rem 5rem;
  align-items: center;
  justify-content: space-around;
`;

const StyledAward = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;

const StyledImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;


//component
const Award = ({ award }) => {
  return (
    <StyledAward>
      <h3> {award.title}</h3>
      <div className="line"></div>
      <p> {award.description} </p>
    </StyledAward>
  );
};

export default MovieDetails;
