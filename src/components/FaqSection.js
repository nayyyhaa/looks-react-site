import React from "react";
//styled
import styled from "styled-components";
import {
  StyledAbout
} from "../toolkit/styles/styles";
import faqData from "../toolkit/data/faqData";

const ServicesSection = () => {
  return (
    <StyledFaq>
      <div className="description">
        <h2>
          <span>FAQ</span>
        </h2>
        <div className="animateSharedLayout">
          {faqData.map((faq) => {
            return (
              <div key={faq.question} className="question">
                <h4>{faq.question}</h4>
                <div className="answer">
                  <p>{faq.small_answer}</p>
                  <p>{faq.full_answer}</p>
                </div>
                <div className="faq-line"></div>
              </div>
            );
          })}
        </div>
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
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;
export default ServicesSection;
