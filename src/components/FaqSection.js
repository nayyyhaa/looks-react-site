import React from "react";
//styled
import styled from "styled-components";
import { StyledAbout } from "../toolkit/styles/styles";
//animations
import { AnimateSharedLayout } from "framer-motion";
//data store
import faqData from "../toolkit/data/faqData";
//reusable component
import Toggle from "./Toggle";
import { scrollRevealAnimation } from "../toolkit/helpers/animation";
import useScroll from "../toolkit/helpers/useScroll";

const FaqSection = () => {
  let [element, controls] = useScroll();

  return (
    <StyledFaq
      ref={element}
      variants={scrollRevealAnimation}
      initial="hidden"
      animate={controls}
    >
      <div className="description">
        <h2>
          <span>FAQ</span>
        </h2>
        {faqData.map((faq) => {
          return (
            <AnimateSharedLayout key={faq.question}>
              <Toggle title={faq.question}>
                <div className="answer">
                  <p>{faq.small_answer}</p>
                  <p>{faq.full_answer}</p>
                </div>
              </Toggle>
              <div className="faq-line"></div>
            </AnimateSharedLayout>
          );
        })}
      </div>
    </StyledFaq>
  );
};

const StyledFaq = styled(StyledAbout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question-container {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .question {
    display: flex;
    justify-content: space-between;

    h4 {
      text-align: start;

      @media (max-width: 1500px) {
        font-size: 1.5rem;
      }

      @media (max-width: 750px) {
        font-size: 1rem;
      }
    }
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;
export default FaqSection;
