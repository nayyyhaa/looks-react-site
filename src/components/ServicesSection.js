import React from "react";
import servicesData from "../toolkit/data/servicesData";
import home2 from "../toolkit/assets/home2.png";

const ServicesSection = () => {
  return (
    <div className="services-section">
      <div className="description">
        <h2>
          High <span>quality</span> services.
        </h2>
        <div className="cards">
          {servicesData.map((service) => {
            return (
              <div key={service.name} className="card">
                <div className="icon">
                  <img alt={service.name} src={service.img} />
                  <h3>{service.name}</h3>
                </div>
                <p>{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="image">
        <img src={home2} alt="services" />
      </div>
    </div>
  );
};

export default ServicesSection;
