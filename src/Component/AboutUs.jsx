// "use client";
// import React from "react";

// export default function AboutUs() {
//   return (
//     <>
//       <div className="relative flex flex-col items-center justify-center min-h-[123px] bg-white pt-[175px]">
//         <h2 className="text-4xl font-semibold text-gray-500">About TCS</h2>
//       </div>
//       <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white px-10 py-5">
//         <div className="w-full md:w-1/2 px-10">
//           <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
//             We don’t just build technology we shape the
//             future.
//           </h1>
//           <p className="text-gray-600">
//             TOSS Consultancy Services is a dynamic technology company at the forefront of AI innovation, automation, and digital transformation. With expertise in AI-powered tools, web & mobile development, chatbots, and data crawling, we craft intelligent solutions that drive business growth. Our flagship AI tool, TOAi, revolutionizes image generation, while our smart automation services streamline workflows and enhance efficiency. At TOSS, we believe in pushing the boundaries of technology to create a smarter, more connected world.
//             {/* TOSS Consultancy Services is a dynamic technology company at the forefront of AI innovation, automation, and digital transformation. We specialize in cutting-edge solutions that empower businesses to thrive in an ever-evolving digital landscape.

//             With expertise in AI-powered tools, web and mobile development, chatbots, and data crawling, we craft intelligent solutions tailored to meet the unique needs of our clients. Our team of skilled professionals is dedicated to harnessing the power of technology to drive efficiency, productivity, and innovation.

//             At TOSS, we understand that the digital world is constantly evolving. Businesses today need agile and intelligent solutions to stay ahead of the competition. Our mission is to bridge the gap between technology and business needs by providing smart, scalable, and innovative digital solutions.

//             One of our flagship products, TOAi, is a groundbreaking AI tool that revolutionizes image generation. TOAi leverages advanced machine learning algorithms to create stunning, high-quality visuals that cater to various industries, from marketing and design to e-commerce and entertainment.

//             Beyond AI-driven content creation, we specialize in smart automation services designed to streamline workflows and enhance operational efficiency. Our automation solutions help businesses reduce manual efforts, minimize errors, and improve overall performance.

//             TOSS Consultancy Services is committed to pushing the boundaries of artificial intelligence, automation, and data-driven insights. Our expertise extends to building intelligent chatbots that enhance customer engagement, ensuring seamless interactions and personalized user experiences.

//             We also offer advanced web and mobile application development services, creating high-performance, user-friendly applications that cater to diverse business needs. Our team integrates the latest frameworks and technologies to deliver scalable and secure digital solutions.

//             Data crawling and analytics form another key aspect of our services. We empower businesses with deep insights by collecting and processing vast amounts of structured and unstructured data, enabling smarter decision-making and competitive advantage.

//             At TOSS, we believe in the transformative power of technology. Our goal is to help businesses unlock new opportunities by leveraging AI, automation, and digital solutions that create a smarter, more connected world.

//             Partner with TOSS Consultancy Services and embrace the future of technology today. */}
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }




"use client";
import React from "react";

export default function AboutUs() {
  return (
    <>
      {/* Header Section */}
      <div className="relative flex flex-col items-center justify-center min-h-[120px] bg-white pt-[140px] px-5">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-500 text-center">
          About TOSS Consultancy Services
        </h2>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white px-6 md:px-16 py-10 gap-10">
        
        {/* Left Content Section */}
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6 text-center md:text-left">
            We don’t just build technology, <br className="hidden md:inline" /> we shape the future.
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-center md:text-left">
            TOSS Consultancy Services (TCS) is a forward-thinking technology company driving AI innovation, automation, and digital transformation.  
            We specialize in cutting-edge AI solutions, intelligent automation, web & mobile development, chatbots, and data-driven insights** that help businesses scale efficiently.  
            <br /><br />
            Our mission is to bridge the gap between business needs and advanced technology by creating innovative, scalable, and intelligent solutions.  
            With expertise in AI-driven applications and smart automation, we empower businesses to improve productivity, streamline operations, and enhance customer experiences.
          </p>

          {/* Updated Key Services Section with Gradient */}
          <div className="px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-md shadow-md hover:scale-105 transition mt-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 text-center md:text-left">
              Our Key Services
            </h3>
            <ul className="list-disc pl-5 text-lg md:text-xl text-white leading-relaxed space-y-2">
              <li>🚀 AI-driven tools & automation for business efficiency</li>
              <li>📱 Advanced web & mobile application development</li>
              <li>🤖 Smart AI chatbots for enhanced customer engagement</li>
              <li>📊 Data crawling, analytics, and AI-powered insights</li>
              <li>🎨 AI-based image generation with TOAi</li>
            </ul>
          </div>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-6 text-center md:text-left pb-20">
            At <b>TOSS</b>, we believe in leveraging AI, automation, and digital solutions 
            to help businesses unlock new growth opportunities. Our goal is to create a smarter,  
            more connected world where technology drives progress and efficiency.
          </p>
        </div>
      </div>
    </>
  );
}

