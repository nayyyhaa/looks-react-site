import styled from "styled-components";
import { motion } from "framer-motion";

//Styles
export const StyledAbout = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 5rem;

  @media screen and (max-width:750px) {
    display: block;
    text-align: center;
    padding: 1rem 2rem;
  }
`;

export const StyledDescription = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;

  h2 {
    font-weight: lighter;
  }

  @media screen and (max-width: 1140px) {
    padding: 0;

    h2 {
      text-align: center;
    }

    button {
      margin-bottom: 3rem;
    }
  }
`;

export const StyledImage = styled.div`
  z-index: 2;
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
    background-size: cover;
  }
`;

export const StyledHide = styled.div`
  overflow: hidden;
`;
