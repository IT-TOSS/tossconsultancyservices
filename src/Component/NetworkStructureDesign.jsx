// import React, { useEffect, useState } from "react";
// import myimage from "./../assets/Networkd.png";
// import { motion } from "framer-motion";

// const NetworkStructureDesign = () => {
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 bg-gray-50 min-h-screen">
//       {/* Left Section - Text Content */}
//       <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
//         <h4 className="text-gray-500 uppercase tracking-wide text-sm md:text-base">Who We Are</h4>
//         <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
//           Network <br /> Structure <br /> Design
//         </h1>
//         <p className="text-gray-600 text-base md:text-lg">
//           Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus sapien nulla ut metus varius laoreet.
//           Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
//         </p>
//         <p className="text-gray-600 text-base md:text-lg">
//           Curabitur ullamcorper ultricies nisi. Nam eget dui. Maecenas nec odio et ante tincidunt tempus vitae.
//         </p>
//       </div>

//       {/* Right Section - Phone Image */}
//       <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
//         <motion.div
//           className="relative w-full max-w-xs md:max-w-md h-auto"
//           animate={{ y: (scrollY % 40) - 20 }}
//           transition={{ type: "tween", duration: 0.3 }}
//         >
//           <img
//             src={myimage}
//             alt="Network Design"
//             className="rounded-xl  w-full object-cover"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default NetworkStructureDesign




// import React, { useEffect, useState } from "react";
// import myimage from "./../assets/Networkd.png";
// import { motion } from "framer-motion";

// const NetworkStructureDesign = () => {
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 bg-gray-50 min-h-screen">
//       {/* Left Section - Text Content */}
//       <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left px-4 md:px-6 mx-auto">
//         <h4 className="text-gray-500 uppercase tracking-wide text-sm md:text-base">Who We Are</h4>
//         <h1 className="text-4xl md:text-5xl font-bold leading-tight text-#000000"style={{ fontSize: '41px',fontFamily: 'Syne, sans-serif' }}>
//           Network <br /> Structure <br /> Design
//         </h1>
//         <p className="text-#000000 text-base md:text-lg"style={{ fontSize: '17px', fontFamily:'Heebo,sans-serif' }}>
//           Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus sapien nulla ut metus varius laoreet.
//           Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
//         </p>
//         <p className="text-#000000 text-base md:text-lg"style={{ fontSize: '17px', fontFamily:'Heebo,sans-serif' }}>
//           Curabitur ullamcorper ultricies nisi. Nam eget dui. Maecenas nec odio et ante tincidunt tempus vitae.
//         </p>
//       </div>

import React, { useEffect, useState } from "react";
import myimage from "./../assets/Networkd.png";
import { motion } from "framer-motion";

const NetworkStructureDesign = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 bg-gray-50 min-h-screen">
      {/* Left Section - Text Content */}
      <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left px-4 md:px-6 mx-auto">
        <h4 className="text-gray-500 uppercase tracking-wide text-sm md:text-base">Who We Are</h4>
        <h1 className="font-['Syne',_sans-serif] text-black text-4xl md:text-[40px] font-bold tracking-tight leading-tight mt-2">
          Toss <br /> Consultancy <br />Services
        </h1>
        <p className="text-[20px] text-black-700 font-sans mt-4 leading-relaxed" 
        style={{fontFamily:"Heebo,sans-serif"}}>
        TOSS Consultancy Services is a tech-forward company specializing in AI innovation, automation, web & mobile development, and intelligent chatbots. We empower businesses with scalable, data-driven solutions that enhance efficiency and customer engagement.
        </p>
        <p className="text-[20px] text-black-700 font-sans mt-4 leading-relaxed"
         style={{fontFamily:"Heebo,sans-serif"}}>
        Driven by smart technology, our mission is to help businesses grow faster and smarter.
        </p>
      </div>



      {/* Right Section - Phone Image */}
      {/* <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
        <motion.div
          className="relative w-full max-w-xs md:max-w-md h-auto"
          animate={{ y: (scrollY % 40) - 20 }}
          transition={{ type: "tween", duration: 0.3 }}
        >
          <img
            src={myimage}
            alt="Network Design"
            className="rounded-xl  w-full object-cover"
          />
        </motion.div>
      </div> */}



      {/* Right Section - Phone Image */}
      {/* <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
  <motion.div
    className="relative w-full max-w-xs md:max-w-md h-auto"
    animate={{ y: (scrollY % 40) - 20 }}
    transition={{ type: "tween", duration: 0.3 }}
  >
    <img
      src={myimage}
      alt="Network Design"
      className="rounded-xl w-full object-cover"
      style={{
        width: '100%', // Ensure it scales across all screens
        maxWidth: '290px', // Maximum width for the phone image
        height: '680px', // Set specific height for the phone
        objectFit: 'cover', // Ensure the image covers the space without stretching
      }}
    />
  </motion.div>
</div>
 */}


      {/* Right Section - Phone Image */}
      {/* <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
        <motion.div
          className="relative w-full max-w-xs md:max-w-md h-auto"
          animate={{ y: (scrollY % 40) - 20 }}
          transition={{ type: "tween", duration: 0.3 }}
        >
          <img
            src={myimage}
            alt="Network Design"
            className="rounded-xl w-full object-cover"
            style={{
              width: '100%', // Ensure it scales across all screens
              maxWidth: '250px', // Maximum width for the phone image
              height: '550px', // Set specific height for the phone
              objectFit: 'cover', // Ensure the image covers the space without stretching
              marginLeft: 'auto',  // Horizontally centers the image
              marginRight: 'auto', // Horizontally centers the image
            }}
          />
        </motion.div>
      </div>


    </section>
  );
};

export default NetworkStructureDesign */}
 <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
        <motion.div
          className="relative w-full max-w-xs md:max-w-md h-auto"
          animate={{ y: (scrollY % 40) - 20 }}
          transition={{ type: "tween", duration: 0.3 }}
        >
          <img
            src={myimage}
            alt="Network Design"
            className="rounded-xl w-full object-cover"
            style={{
              width: '100%', // Ensure it scales across all screens
              maxWidth: '250px', // Maximum width for the phone image
              height: '550px', // Set specific height for the phone
              objectFit: 'cover', // Ensure the image covers the space without stretching
              marginLeft: 'auto',  // Horizontally centers the image
              marginRight: 'auto', // Horizontally centers the image
            }}
          />
        </motion.div>
      </div>


    </section>
  );
};

export default NetworkStructureDesign