// import { useState } from "react";
// // import image1 from "./../../assets/services1.png";
// import image1 from "../../assets/services1.png";
// import ATCHAT from "../../assets/ATCHAT2.png";
// import image3 from "../../assets/scraping.png";
// import image2 from "../../assets/services3.jpg";
// import web from "../../assets/Web2.png";



// const sections = [
//   {
//     title: "Web & App Development",
//     category: "Technology",
//     description:
//       "From concept to launch, we design and develop custom websites and mobile applications that align with your business goals. Our solutions prioritize user experience, performance, and scalability to drive growth.Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi ut aliquip ex ea commodo. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
//     points: ["User-Centric Design", "Scalable & High-Performance Solutions","Cross-Platform Compatibility","Secure & SEO-Optimized Development"],
//     image: `${web}`,
//     // tabs: ["Design", "Marketing", "Devs"],
//   },
//   {
//     title: "Chatbots & Virtual Assistants",
//     category: "Technology",
//     description:
//       "Enhance customer engagement with our AI-powered chatbots and virtual assistants. Designed for customer service, lead generation, and automation, our bots provide 24/7 support, personalized interactions, and seamless user experiences",
//     points: ["24/7 Customer Support", "Personalized & Context-Aware Conversations","Automation for Lead Generation & Sales ","Seamless Integration with Multiple Platforms "],
//     image:`${ATCHAT}`,
//     // tabs: ["AI", "Cloud", "Cybersecurity"],
//   },
//   {
//     title: "Data Crawling & Web Scraping",
//     category: "Technology",
//     description:
//       "Gain a competitive edge with accurate and efficient data extraction. Our web crawling and scraping services help businesses with market analysis, price tracking, competitor research, and business intelligence, ensuring data-driven decision-making.",
//     points: ["Market & Competitor Analysis", "Automated Price Tracking & Monitoring","Lead Generation & Customer Insights ","Scalable & Custom Data Extraction Solutions "],
//     image: `${image3}`,
//     // tabs: ["Growth", "Strategy", "Networking"],
//   },
//   {
//     title: "Custom Software Development",
//     category: "Technology",
//     description:
//       "We build tailor-made tech solutions to meet unique business challenges. Whether you need a bespoke enterprise application, automation tools, or AI-driven platforms, we deliver scalable, high-performance software that drives results.",
//     points: ["Custom Enterprise Applications", "Advanced Automation Tools","AI-Driven Business Platforms","Scalable & Future-Ready Solutions"],
//     image: `${image1}`,
//     // tabs: ["Design", "Marketing", "Devs"],
//   },
// ];

// export default function TrustedByMany1() {
//   return (
//     <div className="flex flex-col">
//       {sections.map((section, index) => (
//         <SectionComponent key={index} section={section} reverse={index % 2 !== 0} />
//       ))}
//     </div>
//   );
// }

// function SectionComponent({ section, reverse }) {
//   // const [activeTab, setActiveTab] = useState(section.tabs[0]);

//   return (
//     <section
//       className={`flex flex-col md:flex-row items-center justify-center ${
//         reverse ? "md:flex-row-reverse" : ""
//       }`}
//     >
//       {/* Image */}
//       <div className="w-full md:w-1/2 flex justify-center">
//         <img
//           src={section.image}
//           alt={section.title}
//           className="rounded-lg w-full  h-auto"
//         />
//       </div>

//       <div className="w-full md:w-1/2 px-5 py-5">
//         <h5 className="text-gray-400 tracking-wide uppercase">{section.category}</h5>
//         <h2 className="text-3xl md:text-4xl font-bold mt-2">{section.title}</h2>


//         <p className="text-gray-600 mt-4">{section.description}</p>

//         <ul className="mt-4 text-gray-700">
//           {section.points.map((point, i) => (
//             <li key={i}>• {point}</li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// }


// src/Component/services/TrustedByMany2.jsx

// import { useState } from "react";
// import image1 from "../../assets/services1.png";
// import ATCHAT from "../../assets/ATCHAT2.png";
// import image3 from "../../assets/scraping.png";
// import image2 from "../../assets/services3.jpg";
// import web from "../../assets/Web2.png";

// const sections = [
//   {
//     title: "Web & App Development",
//     category: "Technology",
//     description:
//       "From concept to launch, we design and develop custom websites and mobile applications that align with your business goals. Our solutions prioritize user experience, performance, and scalability to drive growth.",
//     points: [
//       "User-Centric Design",
//       "Scalable & High-Performance Solutions",
//       "Cross-Platform Compatibility",
//       "Secure & SEO-Optimized Development",
//     ],
//     image: web,
//   },
//   {
//     title: "Chatbots & Virtual Assistants",
//     category: "Technology",
//     description:
//       "Enhance customer engagement with our AI-powered chatbots and virtual assistants. Designed for customer service, lead generation, and automation, our bots provide 24/7 support, personalized interactions, and seamless user experiences.",
//     points: [
//       "24/7 Customer Support",
//       "Personalized & Context-Aware Conversations",
//       "Automation for Lead Generation & Sales",
//       "Seamless Integration with Multiple Platforms",
//     ],
//     image: ATCHAT,
//   },
//   {
//     title: "Data Crawling & Web Scraping",
//     category: "Technology",
//     description:
//       "Gain a competitive edge with accurate and efficient data extraction. Our web crawling and scraping services help businesses with market analysis, price tracking, competitor research, and business intelligence, ensuring data-driven decision-making.",
//     points: [
//       "Market & Competitor Analysis",
//       "Automated Price Tracking & Monitoring",
//       "Lead Generation & Customer Insights",
//       "Scalable & Custom Data Extraction Solutions",
//     ],
//     image: image3,
//   },
//   {
//     title: "Custom Software Development",
//     category: "Technology",
//     description:
//       "We build tailor-made tech solutions to meet unique business challenges. Whether you need a bespoke enterprise application, automation tools, or AI-driven platforms, we deliver scalable, high-performance software that drives results.",
//     points: [
//       "Custom Enterprise Applications",
//       "Advanced Automation Tools",
//       "AI-Driven Business Platforms",
//       "Scalable & Future-Ready Solutions",
//     ],
//     image: image1,
//   },
// ];

// export default function TrustedByMany2() {
//   return (
//     <div className="flex flex-col">
//       {sections.map((section, index) => (
//         <SectionComponent
//           key={index}
//           section={section}
//           reverse={index % 2 !== 0}
//         />
//       ))}
//     </div>
//   );
// }

// function SectionComponent({ section, reverse }) {
//   return (
//     <section
//       className={`flex flex-col md:flex-row items-center justify-center ${
//         reverse ? "md:flex-row-reverse" : ""
//       }`}
//     >
//       <div className="w-full md:w-1/2 flex justify-center p-5">
//         <img
//           src={section.image}
//           alt={section.title}
//           className="rounded-lg w-full h-auto"
//         />
//       </div>

//       <div className="w-full md:w-1/2 px-5 py-5">
//         <h5 className="text-gray-400 tracking-wide uppercase">{section.category}</h5>
//         <h2 className="text-3xl md:text-4xl font-bold mt-2">{section.title}</h2>
//         <p className="text-gray-600 mt-4">{section.description}</p>
//         <ul className="mt-4 text-gray-700 list-disc pl-5">
//           {section.points.map((point, i) => (
//             <li key={i}>{point}</li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// }




import { useState } from "react";
import image1 from "../../assets/services1.png";
import ATCHAT from "../../assets/ATCHAT2.png";
import image3 from "../../assets/scraping.png";
import image2 from "../../assets/services3.jpg";
import web from "../../assets/Web2.png";

const sections = [
  {
    title: "Web & App Development",
    category: "Technology",
    description:
      "From concept to launch, we design and develop custom websites and mobile applications that align with your business goals. Our solutions prioritize user experience, performance, and scalability to drive growth.",
    points: [
      "User-Centric Design",
      "Scalable & High-Performance Solutions",
      "Cross-Platform Compatibility",
      "Secure & SEO-Optimized Development",
    ],
    image: web,
  },
  {
    title: "Chatbots & Virtual Assistants",
    category: "Technology",
    description:
      "Enhance customer engagement with our AI-powered chatbots and virtual assistants. Designed for customer service, lead generation, and automation, our bots provide 24/7 support, personalized interactions, and seamless user experiences.",
    points: [
      "24/7 Customer Support",
      "Personalized & Context-Aware Conversations",
      "Automation for Lead Generation & Sales",
      "Seamless Integration with Multiple Platforms",
    ],
    image: ATCHAT,
  },
  {
    title: "Data Crawling & Web Scraping",
    category: "Technology",
    description:
      "Gain a competitive edge with accurate and efficient data extraction. Our web crawling and scraping services help businesses with market analysis, price tracking, competitor research, and business intelligence, ensuring data-driven decision-making.",
    points: [
      "Market & Competitor Analysis",
      "Automated Price Tracking & Monitoring",
      "Lead Generation & Customer Insights",
      "Scalable & Custom Data Extraction Solutions",
    ],
    image: image3,
  },
  {
    title: "Custom Software Development",
    category: "Technology",
    description:
      "We build tailor-made tech solutions to meet unique business challenges. Whether you need a bespoke enterprise application, automation tools, or AI-driven platforms, we deliver scalable, high-performance software that drives results.",
    points: [
      "Custom Enterprise Applications",
      "Advanced Automation Tools",
      "AI-Driven Business Platforms",
      "Scalable & Future-Ready Solutions",
    ],
    image: image1,
  },
];

export default function TrustedByMany1() {
  return (
    <div className="flex flex-col">
      {sections.map((section, index) => (
        <SectionComponent
          key={index}
          section={section}
          reverse={index % 2 !== 0}
        />
      ))}
    </div>
  );
}

function SectionComponent({ section, reverse }) {
  return (
    <section
      className={`flex flex-col md:flex-row items-center justify-center ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="w-full md:w-1/2 flex justify-center p-5">
        <img
          src={section.image}
          alt={section.title}
          className="rounded-lg w-full h-auto"
        />
      </div>
      <div className="w-full md:w-1/2 px-5 py-5">
        <h5 className="text-black-400 tracking-wide uppercase font-sans text-sm font-medium">
          {section.category}
        </h5>
        <h3 className="font-['Syne',_sans-serif] text-black text-4xl md:text-[40px] font-bold tracking-tight leading-tight mt-2">
          {section.title}
        </h3>
        <p className="text-[17px] text-black-700 font-sans mt-4 leading-relaxed font-semibold ">
          {section.description}
        </p>
        <ul className="mt-4 space-y-2 font-semibold">
          {section.points.map((point, i) => (
            <li key={i} className="flex items-start">
              <span className="text-black mr-2 mt-1">•</span>
              <span className="text-black-700 font-sans text-[16px]">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}