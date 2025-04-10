// // import React from "react";
// // import { motion } from "framer-motion";

// // const features = [
// //   {
// //     id: 1,
// //     // number: "01",
//     // title: "TOAi - AI-driven Image Generation",
// //     description:
// //       "TOAi is an innovative AI-driven image generation tool designed to transform the way businesses create product visuals. Focused on e-commerce, fashion, and grocery industries, TOAi empowers brands to generate high-quality, customizable, and scalable product images instantly. By eliminating the need for traditional photoshoots, TOAi significantly reduces costs and production time, enabling businesses to enhance their product presentation effortlessly.",
// //   },
// //   {
// //     id: 2,
// //     // number: "02",
// //     title: "Utility-Powered Workflow Enhancer",
// //     description:
// //       "Coming Soon: A powerful solution built with neat utility features to elevate your workflows. Stay tuned for more.",
// //   },
// //   {
// //     id: 3,
// //     // number: "03",
// //     title: "AI Chatbot for Customer Engagement",
// //     description:
// //       "Our AI-powered chatbot streamlines customer interactions by answering FAQs, collecting responses, and providing instant quotes. It integrates with CRMs, automates workflows, and supports multi-platform deployment. With secure data handling and customizable plans, businesses can enhance engagement and efficiency. Fast deployment and dedicated support ensure a seamless experience tailored to your needs.",
// //   },
// // ];

// // const FeatureSection = () => {
// //   return (
// //     <div className="min-h-screen bg-white flex items-center justify-center px-10">
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full">
// //         {features.map((feature, index) => (
// //           <motion.div
// //           key={feature.id}
// //           className="relative bg-gradient-to-r from-[rgba(160,130,180,0.4)] via-[rgba(150,120,190,0.4)] via-[rgba(140,130,200,0.4)] via-[rgba(130,140,210,0.4)] to-[rgba(120,150,220,0.4)] p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl border border-black"
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ delay: index * 0.2 }}
// //         >
// //           {/* Optional: subtle white overlay for text readability */}
// //           <div className="absolute inset-0 bg-white/70 rounded-lg pointer-events-none" />
        
// //           <div className="relative z-10">
// //             {/* Large Faded Number in Background */}
// //             <h1 className="absolute top-2 left-5 text-7xl font-bold text-gray-400">
// //               {feature.number}
// //             </h1>
        
// //             {/* Title */}
// //             <h2 className="text-2xl font-bold text-gray-900 mt-10 relative">
// //               {feature.title}
// //             </h2>
        
// //             {/* Description */}
// //             <p className="text-gray-500 mt-3 text-sm">{feature.description}</p>
        
// //             {/* View More Link */}
// //             <a
// //               href="/product"
// //               className="mt-4 inline-block text-blue-600 font-semibold uppercase text-sm tracking-wide hover:underline"
// //             >
// //               View More
// //             </a>
// //           </div>
// //         </motion.div>
        
        
        
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default FeatureSection;






// import React from 'react';

// const features = [
//   {
//     number: '01',
//     title: (
//       <>
//         Manage <br />
//         your data <br />
//         efficiently
//       </>
//     ),
//     description:
//       'Lorem ipsum dolor sit amet ridiculus consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Montes est massa. Cum sociis Theme natoq',
//   },
//   {
//     number: '02',
//     title: (
//       <>
//         Built with <br />
//         neat utility <br />
//         features
//       </>
//     ),
//     description:
//       'Lorem ipsum dolor sit amet ridiculus consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Montes est massa. Cum sociis Theme natoq',
//   },
//   {
//     number: '03',
//     title: (
//       <>
//         Futuristic <br />
//         interactive <br />
//         designs
//       </>
//     ),
//     description:
//       'Lorem ipsum dolor sit amet ridiculus consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Montes est massa. Cum sociis Theme natoq',
//   },
// ];

// const FeatureSection = () => {
//   return (
//     <div className="bg-white py-24 px-6 md:px-12">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
//         {features.map((feature, index) => (
//           <div key={index} className="relative">
//             {/* Faded Number */}
//             <div className="absolute top-0 left-0 text-[180px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-blue-200 leading-none pointer-events-none select-none">
//               {feature.number}
//             </div>

//             {/* Title */}
//             <h3 className="relative font-bold text-[28px] text-black leading-tight pt-24 z-10">
//               {feature.title}
//             </h3>

//             {/* Description */}
//             <p className="text-black-700 text-[15px] font-medium mt-4 leading-relaxed">
//               {feature.description}
//             </p>

//             {/* View More */}
//             <div className="mt-6 flex items-center gap-2 group cursor-pointer">
//               <div className="w-14 h-[1px] bg-blue-200 group-hover:w-16 transition-all duration-300"></div>
//               <span className="text-[13px] font-semibold tracking-widest uppercase text-black group-hover:underline">
//                 View More
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeatureSection;


import React from 'react';

const features = [
  {
    number: '01',
    title: (
      <>
        TOAi-AI <br />
        Driven Image <br />
        Generation
      </>
    ),
    description:
      'TOAi is an innovative AI-driven image generation tool designed to transform the way businesses create product visuals. Focused on e-commerce, fashion, and grocery industries, TOAi empowers brands to generate high-quality, customizable, and scalable product images instantly. By eliminating the need for traditional photoshoots, TOAi significantly reduces costs and production time, enabling businesses to enhance their product presentation effortlessly.',
  },
  {
    number: '02',
    title: (
      <>
        Utility-Powered <br />
        Workflow Enhancer
      </>
    ),
    description:
      "Coming Soon: A powerful solution built with neat utility features designed to streamline your everyday operations and elevate your workflows. From intelligent automation to seamless integration with your favorite tools, this product is crafted to simplify complex tasks and boost productivity. Whether you're managing projects, handling data, or optimizing customer journeys, our upcoming solution offers the flexibility and performance needed to stay ahead. Stay tuned for a game-changing experience tailored to modern business needs."
  },
  {
    number: '03',
    title: (
      <>
        AI Chatbot <br />
        for Customer <br />
        Engagement
      </>
    ),
    description:
      'Our AI-powered chatbot streamlines customer interactions by answering FAQs, collecting responses, and providing instant quotes. It integrates with CRMs, automates workflows, and supports multi-platform deployment. With secure data handling and customizable plans, businesses can enhance engagement and efficiency. Fast deployment and dedicated support ensure a seamless experience tailored to your needs.',
  },
];

const FeatureSection = () => {
  return (
    <div className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        {features.map((feature, index) => (
          <div key={index} className="relative">
            {/* Faded Number */}
            <div className="absolute top-0 left-0 text-[180px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-blue-200 leading-none pointer-events-none select-none">
              {feature.number}
            </div>

            {/* Title */}
            <h3 className="relative font-bold text-[35px] text-black leading-tight pt-24 z-10" 
            style={{fontFamily:"Syne,sans-serif"}}>
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-black text-[19px]  mt-4 leading-relaxed" style={{fontFamily:"Heebo,sans-serif"}}>
              {feature.description}
            </p>

            {/* View More */}
            <div className="mt-6 flex items-center gap-2 group cursor-pointer transition-all duration-300">
              <div className="w-14 h-[1px] bg-blue-200 group-hover:w-16 transition-all duration-300"></div>
              <a
                href="/product"
                className="text-[13px] font-semibold tracking-widest uppercase text-black group-hover:underline"
              >
                View More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
