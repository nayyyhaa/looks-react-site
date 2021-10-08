import React from "react";
//styled
import styled from "styled-components";
import {
  StyledAbout,
  StyledDescription,
  StyledImage,
} from "../toolkit/styles/styles";
import servicesData from "../toolkit/data/servicesData";
import home2 from "../toolkit/assets/home2.png";
import { scrollRevealAnimation } from "../toolkit/helpers/animation";
import useScroll from "../toolkit/helpers/useScroll";

const ServicesSection = () => {
  let [element, controls] = useScroll();

  return (
    <StyledService
      ref={element}
      variants={scrollRevealAnimation}
      initial="hidden"
      animate={controls}
    >
      <StyledImage>
        <img src={home2} alt="services" />
      </StyledImage>
      <StyledServiceDescription>
        <h2>
          High <span>quality</span> services.
        </h2>
        <StyledCards>
          {servicesData.map((service) => {
            return (
              <StyledCard key={service.name}>
                <div className="icon">
                  <img alt={service.name} src={service.img} />
                  <h3>{service.name}</h3>
                </div>
                <p>{service.description}</p>
              </StyledCard>
            );
          })}
        </StyledCards>
      </StyledServiceDescription>
    </StyledService>
  );
};

const StyledService = styled(StyledAbout)`
  min-height: 100vh;
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }

  @media screen and (max-width: 750px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const StyledServiceDescription = styled(StyledDescription)`
  padding: 0 0 0 5rem;

  h2 {
    text-align: center;
  }
  
  @media screen and (max-width: 750px) {
    padding: 0;
  }

`;

const StyledCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (max-width: 750px) {
    justify-content: center;
  }
`;

const StyledCard = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }

  @media screen and (max-width: 1140px) {
    flex-basis: 15rem;
    .icon img {
      width: 10%;
    }
    p {
      font-size: 1rem;
      width: 100%;
      padding: 1rem 0rem 2rem;
    }
  }
`;

export default ServicesSection;
