import React, { useEffect, useState } from "react";
import "./../App.css"; // Import the styles

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    >
      <div className="outer-circle">
        <div className="inner-circle"></div>
      </div>
    </div>
  );
};

export default CustomCursor;
