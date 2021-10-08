import React from "react";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
//animations
import { motion } from "framer-motion";
import { pageAnimation } from "../toolkit/helpers/animation";
import ScrollToTop from "../components/ScrollToTop";

const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
      <ScrollToTop />
    </motion.div>
  );
};

export default AboutUs;
