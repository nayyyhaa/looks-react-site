import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const useScroll = () => {
  let [element, view] = useInView({threshold: 0.3});
  let controls = useAnimation();

  if (view) controls.start("show");
  else controls.start("hidden");

  return [element, controls];
};

export default useScroll;
