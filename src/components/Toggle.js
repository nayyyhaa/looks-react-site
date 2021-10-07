import React, { useState } from "react";
//animations
import { motion } from "framer-motion";
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Toggle = ({ children, title }) => {
  let [isOpen, setOpen] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setOpen(!isOpen)}
      className="question-container"
    >
      <motion.div layout className="question">
        <motion.h4>{title}</motion.h4>
        <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} />
      </motion.div>
      {isOpen ? children : ""}
    </motion.div>
  );
};

export default Toggle;
