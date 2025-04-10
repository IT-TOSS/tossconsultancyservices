import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Image from "./../assets/GeerStream.png";
import Image2 from "./../assets/GeerStream2.png";

export default function HomePage({Name}) {
  const [activeSlide, setActiveSlide] = useState(0);
  const navigate = useNavigate();
  console.log(Name)

  const slides = [
    {
      id: 0,
      title: "New Generation of Technology and Design",
      subtitle: "Modern Technologies",
      description: "Explore cutting-edge tech solutions for a smarter future.",
      button1: "Apply Now",
      button2: "View More",
      imageSrc: `${Image}`,
    },
    {
      id: 1,
      title: "Software and Tech Development for Future",
      subtitle: "CUTTING EDGE CREATION",
      description: "Innovating the future with state-of-the-art software solutions.",
      button1: "Apply Now",
      button2: "Explore",
      imageSrc: `${Image2}`,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
   className="relative font-jakarta flex items-center justify-center min-h-screen p-10 pt-[120px] bg-gradient-to-r from-[rgba(160,130,180,0.4)] via-[rgba(150,120,190,0.4)] via-[rgba(140,130,200,0.4)] via-[rgba(130,140,210,0.4)] to-[rgba(120,150,220,0.4)]"
    // style={{
    //   background: "linear-gradient(180deg, rgb(50, 50, 60), rgb(60, 60, 70), rgb(80, 80, 90), rgb(100, 100, 110), rgb(120, 120, 130))",
    // }}
>
  
      <motion.div
        key={slides[activeSlide].id}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="relative flex flex-col md:flex-row items-center w-full max-w-5xl"
      >
        <div className="w-full md:w-1/2 text-left">
          <p className="text-gray-500 uppercase tracking-wide text-sm mb-2 " >
            {slides[activeSlide].subtitle}
          </p>
          <h1 className="text-4xl font-bold text-#000000 leading-tight mb-0 " style={{fontFamily:'Syne, sans-serif',fontSize:'50px'}}>
            {slides[activeSlide].title}
          </h1>
          <p className="text-gray-600">{slides[activeSlide].description}</p>
          <div className="flex space-x-4 mt-6">
            <button
              className="px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-md shadow-md hover:scale-105 transition"
              onClick={() => navigate("/about")}
            >
              {slides[activeSlide].button1}
            </button>
            <button 
              className="px-6 py-3 border border-gray-600 text-gray-900 rounded-md shadow-md hover:scale-105 transition"
              onClick={() => navigate("/about")}
            >
              {slides[activeSlide].button2}
            </button>
          </div>
        </div>
        <div className="w-full md:w-3/4 flex justify-center h-[600px]">
          <img
            src={slides[activeSlide].imageSrc}
            alt="Tech Innovation"
            className="rounded-lg w-full md:w-[76%] h-full"
          />
        </div>
      </motion.div>

      <div className="absolute bottom-5 flex justify-between w-full px-10">
        <p className="text-sm text-gray-700">Keep Scrolling</p>
        <div className="flex space-x-6 text-gray-900">
          <p
            className="cursor-pointer hover:underline"
            onClick={() => setActiveSlide((prev) => (prev > 0 ? prev - 1 : slides.length - 1))}
          >
            Prev
          </p>
          <div className="h-px w-20 bg-gray-500 rotate-0 mt-4 "></div> 
          <p
            className="cursor-pointer hover:underline"
            onClick={() => setActiveSlide((next) => (next < slides.length - 1 ? next + 1 : 0))}
          >
            Next
          </p>
        </div>
      </div>
    </div>
  );
}

