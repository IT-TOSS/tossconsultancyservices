import React from "react";
import VideoLab from "./../assets/VideoLab.png"
import { motion } from "framer-motion";
import logo1 from "./../assets/VideoLab.png"
import logo2 from "./../assets/Cminor.png"
import logo3 from "./../assets/VaTeam.png"
import logo4 from "./../assets/Roaster.png"
import logo5 from "./../assets/Unfold.png"
import logo6 from "./../assets/Generation.png"

const partners = [
  { id: 1, name: "Video Labs", logo:`${logo1}` },
  { id: 2, name: "Company C", logo: `${logo2}` },
  { id: 3, name: "Company X", logo: `${logo3}` },
  { id: 4, name: "Company F", logo: `${logo4}` },
  { id: 5, name: "Company A", logo: `${logo5}` },
  { id: 6, name: "New/Gen", logo:   `${logo6}` },
];

const PartnersSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-10">
      <div className="grid md:grid-cols-2 gap-10 max-w-8xl w-full">
        {/* Left Side */}
        <motion.div 
          className="flex flex-col justify-center space-y-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h4 className="text-#000000 uppercase tracking-wide text-sm">Partners</h4>
          <h2 className="text-4xl font-bold text-#000000 leading-tight">
            Trusted and <br /> Supported by Many
          </h2>
          <p className="text-#000000" style={{fontSize:"19px"}}>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi ut aliquip ex.
          </p>
          {/* <motion.a 
            href="#" 
            className="mt-4 px-6 py-2 border-2 border-purple-400 rounded-lg uppercase text-sm tracking-wide font-semibold text-gray-900 transition hover:bg-purple-100"
            whileHover={{ scale: 1.05 }}
          >
            View More
          </motion.a> */}
        </motion.div>

        {/* Right Side - Logos */}
        <motion.div 
          className="grid grid-cols-3 gap-6 items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {partners.map((partner) => (
            <motion.div 
              key={partner.id} 
              className="p-4 bg-gray-100 rounded-lg shadow-md flex items-center justify-center transition hover:scale-105"
              whileHover={{ scale: 1.1 }}
            >
              <img src={partner.logo} alt={partner.name} className="w-24" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PartnersSection;
