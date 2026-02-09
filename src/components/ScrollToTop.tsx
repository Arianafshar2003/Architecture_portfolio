import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // هر بار که مسیر (pathname) عوض شد، اسکرول را ببر بالا
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
