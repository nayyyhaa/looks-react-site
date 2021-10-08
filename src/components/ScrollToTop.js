import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  let location = useLocation();

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [location.pathname]);

  return null;
};

export default ScrollToTop;
