// import React, { useEffect, useState } from "react";
// import "./../App.css"; // Import the styles

// const CustomCursor = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const moveCursor = (e) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };

//     document.addEventListener("mousemove", moveCursor);
//     return () => document.removeEventListener("mousemove", moveCursor);
//   }, []);

//   return (
//     <div
//       className="custom-cursor"
//       style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
//     >
//       <div className="outer-circle">
//         <div className="inner-circle"></div>
//       </div>
//     </div>
//   );
// };

// export default CustomCursor;


import React, { useEffect, useState } from "react";
import "./../App.css"; // Import the styles

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile by checking for touch support or screen width
    const checkMobile = () => {
      const isTouchDevice =
        "ontouchstart" in window || navigator.maxTouchPoints > 0;
      setIsMobile(isTouchDevice || window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, [isMobile]);

  // Don't render the cursor on mobile
  if (isMobile) return null;

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
