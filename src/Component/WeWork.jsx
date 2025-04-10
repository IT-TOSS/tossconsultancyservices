// import React from "react";
// // import graphImage from "./image.png"; // Uncomment and use if needed

// const roadmapData = [
//     {
//         title: "Understanding Your Needs",
//         description:
//             "We begin by analyzing your business requirements, goals, and challenges. Our team collaborates closely with you to define a clear roadmap for the solution.",
//     },
//     {
//         title: "Research & Strategy",
//         description:
//             "Our experts conduct in-depth research and market analysis to develop a strategy tailored to your industry. Whether it’s AI-powered tools, automation, or data-driven solutions, we ensure our approach aligns with your objectives.",
//     },
//     {
//         title: "Designing & Prototyping",
//         description:
//             "We create wireframes, mockups, and prototypes to visualize the end product. This ensures clarity and alignment before moving to development.",
//     },
//     {
//         title: "Development & Implementation",
//         description:
//             "Our team of AI specialists, developers, and engineers bring the concept to life with robust coding, AI integration, and seamless functionality. We use agile development for flexibility and efficiency.",
//     },
//     {
//         title: "Testing & Quality Assurance",
//         description:
//             "Before deployment, we run extensive testing to ensure flawless performance, security, and scalability. Our QA team ensures the final product meets the highest industry standards.",
//     },
//     {
//         title: "Deployment & Optimization",
//         description:
//             "Once tested and approved, we deploy the solution and monitor its performance. Our team provides support and continuous improvements to enhance functionality and user experience.",
//     },
//     {
//         title: "Support & Future Enhancements",
//         description:
//             "We believe in long-term partnerships. Our ongoing support, updates, and optimizations keep your tech solutions up to date with industry trends and business growth.",
//     },
// ];

// const WeWork = () => {
//     return (
//         <div className="p-6 md:p-12 max-w-6xl mx-auto">
//             <div className="text-center mb-10">
//                 <h2 className="text-5xl font-extrabold text-blue-600 mb-4">
//                     How We Work
//                 </h2>
//                 <p className="text-lg text-gray-500">
//                     Our process visualized for clarity and confidence.
//                 </p>
//                 <p className="text-lg text-gray-500">
//                     At TOSS Consultancy Services, we follow a structured yet flexible approach to ensure seamless execution of projects. Our process is designed to innovate, automate, and elevate businesses through cutting-edge technology.
//                 </p>
//             </div>

//             <div className="space-y-10">
//                 {roadmapData.map((step, index) => (
//                     <div
//                         key={index}
//                         className="bg-gradient-to-r from-[rgba(160,130,180,0.4)] via-[rgba(150,120,190,0.4)] via-[rgba(140,130,200,0.4)] via-[rgba(130,140,210,0.4)] to-[rgba(120,150,220,0.4)] rounded-2xl shadow-md p-6 border-l-4 border-blue-400 transform transition duration-300 ease-in-out hover:-translate-y-[3px] hover:shadow-lg"
//                     >
//                         <h3 className="text-2xl font-semibold text-gray-800 mb-2">
//                             {index + 1 < 10 ? `0${index + 1}` : index + 1}. {step.title}
//                         </h3>
//                         <p className="text-gray-600 text-base leading-relaxed">
//                             {step.description}
//                         </p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default WeWork;




// import React from "react";

// const WeWork = () => {
//   // Using your provided content
//   const roadmapData = [
//     {
//       title: "Understanding Your Needs",
//       description:
//         "We begin by analyzing your business requirements, goals, and challenges. Our team collaborates closely with you to define a clear roadmap for the solution.",
//     },
//     {
//       title: "Research & Strategy",
//       description:
//         "Our experts conduct in-depth research and market analysis to develop a strategy tailored to your industry. Whether it's AI-powered tools, automation, or data-driven solutions, we ensure our approach aligns with your objectives.",
//     },
//     {
//       title: "Designing & Prototyping",
//       description:
//         "We create wireframes, mockups, and prototypes to visualize the end product. This ensures clarity and alignment before moving to development.",
//     },
//     {
//       title: "Development & Implementation",
//       description:
//         "Our team of AI specialists, developers, and engineers bring the concept to life with robust coding, AI integration, and seamless functionality. We use agile development for flexibility and efficiency.",
//     },
//     {
//       title: "Testing & Quality Assurance",
//       description:
//         "Before deployment, we run extensive testing to ensure flawless performance, security, and scalability. Our QA team ensures the final product meets the highest industry standards.",
//     },
//     {
//       title: "Deployment & Optimization",
//       description:
//         "Once tested and approved, we deploy the solution and monitor its performance. Our team provides support and continuous improvements to enhance functionality and user experience.",
//     },
//     {
//       title: "Support & Future Enhancements",
//       description:
//         "We believe in long-term partnerships. Our ongoing support, updates, and optimizations keep your tech solutions up to date with industry trends and business growth.",
//     },
//   ];
  
//   // Icons that represent each step (you can replace these with your own)
//   const icons = ["📋", "🔍", "💻", "🛠️", "🔒", "🚀", "♻️"];

//   return (
//     <div className="bg-white p-8 rounded-3xl max-w-6xl mx-auto border-2 border-gray-200">
//       {/* Title section */}
//       <div className="mb-12">
//         <h1 className="text-4xl font-black">HOW WE<br />WORK?</h1>
//       </div>
      
//       <div className="relative">
//         {/* First row with 4 items */}
//         <div className="grid grid-cols-4 gap-4 mb-8">
//           {roadmapData.slice(0, 4).map((step, index) => (
//             <div key={index} className="flex flex-col items-center">
//               <div className="relative">
//                 <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
//                   <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-300 via-indigo-300 to-blue-300 flex items-center justify-center text-white">
//                     <span className="text-2xl">{icons[index]}</span>
//                   </div>
//                 </div>
//                 <div className="absolute -top-3 -right-3 bg-white px-2 py-1 rounded-full font-bold text-sm">
//                   {`0${index + 1}`}
//                 </div>
//               </div>
//               <div className="text-center mt-2 w-44">
//                 <h3 className="font-bold text-sm">{step.title}</h3>
//                 <p className="text-xs text-gray-500 mt-1">{step.description.substring(0, 80)}...</p>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         {/* Connectors */}
//         <div className="flex justify-between px-12 -mt-4 mb-4">
//           <div className="h-16 border-r-2 border-dashed border-gray-300"></div>
//           <div className="h-16 border-r-2 border-dashed border-gray-300"></div>
//           <div className="h-16 border-r-2 border-dashed border-gray-300"></div>
//         </div>
        
//         {/* Second row with remaining 3 items */}
//         <div className="grid grid-cols-3 gap-4">
//           {roadmapData.slice(4, 7).map((step, index) => (
//             <div key={index + 4} className="flex flex-col items-center">
//               <div className="relative">
//                 <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
//                   <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-300 via-indigo-300 to-blue-300 flex items-center justify-center text-white">
//                     <span className="text-2xl">{icons[index + 4]}</span>
//                   </div>
//                 </div>
//                 <div className="absolute -top-3 -right-3 bg-white px-2 py-1 rounded-full font-bold text-sm">
//                   {`0${index + 5}`}
//                 </div>
//               </div>
//               <div className="text-center mt-2 w-44">
//                 <h3 className="font-bold text-sm">{step.title}</h3>
//                 <p className="text-xs text-gray-500 mt-1">{step.description.substring(0, 80)}...</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WeWork;


import React from "react";

const WeWork = () => {
  // Using your provided content
  const roadmapData = [
    {
      title: "Understanding Your Needs",
      description:
        "We begin by analyzing your business requirements, goals, and challenges. Our team collaborates closely with you to define a clear roadmap for the solution.",
    },
    {
      title: "Designing & Prototyping",
      description:
        "We create wireframes, mockups, and prototypes to visualize the end product. This ensures clarity and alignment before moving to development.",
    },
    {
      title: "Testing & Quality Assurance",
      description:
        "Before deployment, we run extensive testing to ensure flawless performance, security, and scalability. Our QA team ensures the final product meets the highest industry standards.",
    },{
      title: "Support & Future Enhancements",
      description:
        "We believe in long-term partnerships. Our ongoing support, updates, and optimizations keep your tech solutions up to date with industry trends and business growth.",
    },
    {
      title: "Research & Strategy",
      description:
        "Our experts conduct in-depth research and market analysis to develop a strategy tailored to your industry. Whether it's AI-powered tools, automation, or data-driven solutions, we ensure our approach aligns with your objectives.",
    },
    {
      title: "Development & Implementation",
      description:
        "Our team of AI specialists, developers, and engineers bring the concept to life with robust coding, AI integration, and seamless functionality. We use agile development for flexibility and efficiency.",
    },
    {
      title: "Deployment & Optimization",
      description:
        "Once tested and approved, we deploy the solution and monitor its performance. Our team provides support and continuous improvements to enhance functionality and user experience.",
    },
  ];
  
  // Icons that represent each step (you can replace these with your own)
  const icons = ["📋", "🔍", "💻", "🛠️", "🔒", "🚀", "♻️"];

  // Helper function to create arrow SVG
  const ArrowRight = () => (
    <div className="flex items-center justify-center w-12">
      <svg width="50" height="20" viewBox="0 0 50 20">
        <path 
          d="M0 10 H40 M35 5 L45 10 L35 15" 
          stroke="#aaa" 
          strokeWidth="2" 
          fill="none" 
          strokeDasharray="4 2"
        />
      </svg>
    </div>
  );

  const ArrowDown = () => (
    <div className="flex items-center justify-center h-16">
      <svg width="20" height="50" viewBox="0 0 20 50">
        <path 
          d="M10 0 V40 M5 35 L10 45 L15 35" 
          stroke="#aaa" 
          strokeWidth="2" 
          fill="none" 
          strokeDasharray="4 2"
        />
      </svg>
    </div>
  );

  return (
    <div className="bg-white pt-16 px-8 pb-24 rounded-3xl max-w-6xl mx-auto">
      {/* Title section */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-black">HOW WE WORK?</h1>
      </div>
      
      <div className="relative">
        {/* First row with 4 items */}
        <div className="flex justify-center space-x-2 mb-8">
          {roadmapData.slice(0, 4).map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-300 via-indigo-300 to-blue-300 flex items-center justify-center text-white">
                      <span className="text-2xl">{icons[index]}</span>
                    </div>
                  </div>
                  <div className="absolute -top-3 -right-3 bg-white px-2 py-1 rounded-full font-bold text-sm">
                    {`0${index + 1}`}
                  </div>
                </div>
                <div className="text-center mt-2 w-44">
                  <h3 className="font-bold text-sm">{step.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">{step.description.substring(0, 80)}...</p>
                </div>
              </div>
              
              {/* Add arrow after each item except the last one */}
              {index < 3 && <ArrowRight />}
            </React.Fragment>
          ))}
        </div>
        
        {/* Right to left arrow connection */}
        <div className="flex flex-col items-center mb-6">
          <div className="flex w-full justify-end pr-36 mb-4">
            <ArrowDown />
          </div>
          <div className="w-3/4 border-b-2 border-dashed border-gray-300 mb-4"></div>
          <div className="flex w-full justify-start pl-36">
            <ArrowDown />
          </div>
        </div>
        
        {/* Second row with remaining 3 items */}
        <div className="flex justify-center space-x-2">
          {roadmapData.slice(4, 7).map((step, index) => (
            <React.Fragment key={index + 4}>
              {/* Add right arrow before each item except the first one */}
              {index > 0 && <ArrowRight />}
              
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-300 via-indigo-300 to-blue-300 flex items-center justify-center text-white">
                      <span className="text-2xl">{icons[index + 4]}</span>
                    </div>
                  </div>
                  <div className="absolute -top-3 -right-3 bg-white px-2 py-1 rounded-full font-bold text-sm">
                    {`0${index + 5}`}
                  </div>
                </div>
                <div className="text-center mt-2 w-44">
                  <h3 className="font-bold text-sm">{step.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">{step.description.substring(0, 80)}...</p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeWork;