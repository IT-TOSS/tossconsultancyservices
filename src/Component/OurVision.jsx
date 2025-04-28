
// import React from "react";
// import { motion } from "framer-motion";
// import myImage1 from "./../assets/Vision.png";

// const OurVision = () => {
//   return (
//     <section className="flex flex-col items-center justify-center p-6 md:p-12 bg-gray-100 min-h-screen">
//       {/* Heading */}
//       <motion.h1
//         className="text-3xl md:text-5xl font-bold text-gray-800 mb-8 text-center"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         Our Vision & Mission
//       </motion.h1>

//       {/* Vision & Mission Container */}
//       <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full max-w-7xl">
//         {/* Left Side - Image */}
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           className="w-full md:w-1/2 flex justify-center"
//         >
//           <img
//             src={myImage1}
//             alt="Vision & Mission"
//             className="w-full h-auto max-h-[550px] object-cover rounded-xl shadow-lg"
//           />
//         </motion.div>

//         {/* Right Side - Content */}
//         <motion.div
//           initial={{ opacity: 0, x: 20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           className="w-full md:w-1/2 flex flex-col gap-8"
//         >
//           {/* Mission */}
//           <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-xl transition">
//             <h2 className="text-3xl font-semibold text-gray-700 mb-4">Our Mission</h2>
//             <p className="text-lg text-gray-600 leading-relaxed">
//               To develop cutting-edge AI tools like TOAi for seamless image generation and creativity enhancement. 
//               To build innovative web and mobile applications that enhance user engagement and business efficiency. 
//               To create intelligent chatbots and crawlers that optimize data accessibility and customer interaction. 
//               To continuously push the boundaries of technology by integrating AI, automation, and smart solutions across industries.
//             </p>
//           </div>

//           {/* Vision */}
//           <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-xl transition">
//             <h2 className="text-3xl font-semibold text-gray-700 mb-4">Our Vision</h2>
//             <p className="text-lg text-gray-600 leading-relaxed">
//               To revolutionize the tech industry by leveraging AI-driven solutions, enhancing digital experiences, 
//               and creating intelligent automation tools that empower businesses worldwide.
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default OurVision;

import React from "react";
import { motion } from "framer-motion";
import myImage1 from "./../assets/Vision.png"; // Ensure this image has enough transparent space

const OurVision = () => {
  return (
    <section className="flex flex-col items-center justify-center p-6 md:p-12 bg-gray-100 min-h-screen">
      {/* Heading */}
      {/* <motion.h1
        className="text-3xl md:text-5xl font-bold text-#000000 mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Vision & Mission
      </motion.h1> */}

<motion.h1
  className="relative font-bold text-[45px] text-black leading-tight pt-24 z-10 mb-10 text-center"
  style={{ fontFamily: 'Syne, sans-serif' }}
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Our Vision & Mission
</motion.h1>

      
      {/* Vision & Mission Container */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full max-w-6xl">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src={myImage1}
            alt="Vision & Mission"
            className="w-full h-auto object-contain rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 flex flex-col gap-8"
        >
          {/* Mission */}
          <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-xl transition">
            <h2 className="text-3xl font-semibold text-#000000 mb-4"style={{fontFamily:"Syne,sans-serif", fontSize:"35px"}}>Our Mission</h2>
            <p className="text-lg text-#000000 leading-relaxed"style={{fontFamily:"Heebo,sans-serif", fontSize:"17px"}}>
              To develop cutting-edge AI tools like TOAi for seamless image generation and creativity enhancement.
              To build innovative web and mobile applications that enhance user engagement and business efficiency.
              To create intelligent chatbots and crawlers that optimize data accessibility and customer interaction.
              To continuously push the boundaries of technology by integrating AI, automation, and smart solutions across industries.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-xl transition">
            <h2 className="text-3xl font-semibold text-#000000 mb-4"style={{fontFamily:"Syne,sans-serif", fontSize:"35px"}}>
              Our Vision</h2>
            <p className="text-lg text-#0000000 leading-relaxed"style={{fontFamily:"Heebo,sans-serif", fontSize:"17px"}}>
              To revolutionize the tech industry by leveraging AI-driven solutions, enhancing digital experiences,
              and creating intelligent automation tools that empower businesses worldwide.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurVision;
