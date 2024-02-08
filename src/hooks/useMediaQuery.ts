import { useState, useEffect } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    console.log(media)
    const listener = () => setMatches(media.matches);

    // Initial check
    listener();

    // Attach listener for future changes
    window.addEventListener("resize", listener);

    // Clean up the listener on component unmount
    return () => window.removeEventListener("resize", listener);
  }, [query]);

  return matches;
};

export default useMediaQuery;
