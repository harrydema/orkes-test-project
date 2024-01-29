import { useCallback, useEffect } from "react";

export const useBottomScrollListener = (callback: () => void) => {
  const handleScroll = useCallback(() => {
    const body: Element = document.scrollingElement || document.documentElement;
    const bottomPosition = Math.round(body.scrollTop + window.innerHeight);
    const scrollPosition = Math.round(body.scrollHeight);

    if (scrollPosition <= bottomPosition) {
      callback();
    }
  }, [callback]);

  useEffect((): (() => void) => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
};
