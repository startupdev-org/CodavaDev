import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { smoothScrollToId } from "../lib/smoothScroll";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      if (!smoothScrollToId(id)) {
        const timeoutId = window.setTimeout(() => smoothScrollToId(id), 100);
        return () => window.clearTimeout(timeoutId);
      }
      return;
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
