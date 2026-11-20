// src/components/ScrollProgress.jsx
import React, { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setWidth(scrolled);
    };
    window.addEventListener("scroll", updateWidth);
    return () => window.removeEventListener("scroll", updateWidth);
  }, []);

  return (
    <div id="progress" style={{ width: `${width}%` }} />
  );
};

export default ScrollProgress;
