import React from "react";
import faqData from "../toolkit/data/faqData";

const ServicesSection = () => {
  return (
    <div className="faq-section">
      <div className="description">
        <h2>
          <span>FAQ</span>.
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
