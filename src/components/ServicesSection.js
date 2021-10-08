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
`;

const StyledServiceDescription = styled(StyledDescription)`
  padding: 0 0 0 5rem;
`;

const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
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
`;

export default ServicesSection;
