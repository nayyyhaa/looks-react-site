import React from "react";
//animations
import { motion } from "framer-motion";
import {pageAnimation} from "../toolkit/helpers/animation";

const ContactUs = () => {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show">
      <h1>contactus</h1>
    </motion.div>
  );
};

export default ContactUs;
