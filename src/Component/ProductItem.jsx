// import { useState, useEffect } from "react";
// import { useSearchParams, useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";

// // Dummy Product Data
// const products = [
//     {
//         id: 1,
//         title: "TOAi Images",
//         description:
//             "TOAi is a cutting-edge AI image generation tool designed to transform the way businesses create product visuals. Built specifically for e-commerce, fashion, and grocery industries, TOAi enables brands to generate high-quality, customizable, and scalable product images in real-time—all while significantly reducing the cost and time of traditional cataloging.",
//         features: [
//             "High-Quality Product Images – Crisp, professional visuals tailored for online platforms.",
//             "Cost & Time Efficiency – Eliminates the need for costly product photography and manual edits.",
//             "Customizable & Scalable – Adaptable to different product categories and brand aesthetics.",
//             "Real-Time Image Generation – AI-powered automation for instant, on-demand visuals.",
//             "Text-to-Image Automation – Simply describe your product, and TOAi brings it to life.",
//         ],
//         additionalText: "Built for E-Commerce Success",
//         additionalDescription:
//             "From fashion catalogs to grocery product listings, TOAi delivers AI-driven image perfection, ensuring your products stand out in a competitive digital marketplace.",
//     },
//     {
//         id: 2,
//         title: "Detectron",
//         description:
//             "Detectron enhances traditional CCTV systems with AI-driven video analysis and blockchain security. Its AI detects crimes in real-time—such as theft, violence, and unauthorized access—and instantly alerts law enforcement, minimizing false alarms and human effort. Blockchain ensures secure, tamper-proof storage of CCTV data, providing reliable access for authorities. By combining advanced AI with decentralized security, Detectron improves crime detection, accelerates response times, and enhances public safety, making cities smarter and more secure.",
//         features: [
//             "Real-Time Crime Detection – AI-powered surveillance instantly identifies threats like theft, violence, and unauthorized access.",
//             "Minimized False Alarms – Intelligent analysis reduces errors and unnecessary law enforcement interventions.",
//             "Tamper-Proof Data Security – Blockchain ensures secure, immutable, and decentralized CCTV footage storage.",
//             "Faster Law Enforcement Response – Automated alerts enable quicker crime prevention and investigation.",
//             "Scalable & Future-Ready – Designed for smart cities, Detectron adapts to evolving security needs efficiently.",
//         ],
//     },
//     {
//         id: 3,
//         title: "TOAi Chat",
//         description:
//             "Our AI-powered chatbot streamlines customer interactions by answering FAQs, collecting responses, and providing instant quotes. It integrates with CRMs, automates workflows, and supports multi-platform deployment. With secure data handling and customizable plans, businesses can enhance engagement and efficiency. Fast deployment and dedicated support ensure a seamless experience tailored to your needs.",
//         features: [
//             "Seamless Automation – Answers FAQs, collects responses, and provides instant quotes effortlessly.",
//             "Multi-Platform Integration – Works across websites, WhatsApp, Messenger, and more.",
//             "Smart AI & CRM Integration – Automates workflows and nurtures leads effectively.",
//             "Secure & Scalable – Ensures data privacy with flexible customization options.",
//             "Reliable Support – Fast deployment with dedicated 24/7 assistance.",
//         ],
//         additionalText: "Why Choose TOAi Chat?",
//     },
// ];

// export default function ProductItem() {
//     const [searchParams, setSearchParams] = useSearchParams();
//     const navigate = useNavigate();
//     const defaultTab = searchParams.get("tab") || products[0].title;

//     const [activeTab, setActiveTab] = useState(defaultTab);

//     const activeProduct = products.find((product) => product.title === activeTab) || products[0];

//     useEffect(() => {
//         setSearchParams({ tab: activeTab });
//     }, [activeTab, setSearchParams]);

//     const container = {
//         hidden: { opacity: 0 },
//         show: {
//             opacity: 1,
//             transition: {
//                 staggerChildren: 0.15,
//             },
//         },
//     };

//     const item = {
//         hidden: { opacity: 0, y: 20 },
//         show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } },
//     };

//     return (
//         <div className="flex flex-col items-center p-10 min-h-screen bg-gray-50">
//             <div className="flex flex-col items-center p-10">
//                 <div className="flex justify-center gap-10 bg-white p-4 rounded-lg mb-10">
//                     {products.map((product) => (
//                         <motion.button
//                             key={product.id}
//                             onClick={() => setActiveTab(product.title)}
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             className={`relative px-4 py-2 text-lg font-bold tracking-widest uppercase transition-all duration-300 
//                             ${
//                                 activeTab === product.title
//                                     ? "text-black border-b-2 border-black"
//                                     : "text-gray-800"
//                             }
//                             hover:text-transparent hover:bg-gradient-to-r from-[rgba(120,45,150,0.8)] via-[rgba(90,30,180,0.8)] via-[rgba(50,20,200,0.8)] via-[rgba(30,40,220,0.8)] to-[rgba(20,60,250,0.8)] bg-clip-text`}
//                         >
//                             {product.title.split(":")[0]}
//                         </motion.button>
//                     ))}
//                 </div>
//             </div>

//             <AnimatePresence mode="wait">
//                 <motion.div
//                     key={activeProduct.title}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -20 }}
//                     transition={{ duration: 0.4 }}
//                     className="mt-6 p-8 w-full max-w-4xl bg-white rounded-lg shadow-xl"
//                 >
//                     <motion.h1
//                         className="text-3xl font-bold text-blue-600 mb-4"
//                         initial={{ opacity: 0, x: -30 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
//                     >
//                         {activeProduct.title}
//                     </motion.h1>
//                     <motion.p
//                         className="text-lg text-gray-700 mb-6"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ delay: 0.2 }}
//                     >
//                         {activeProduct.description}
//                     </motion.p>

//                     {activeProduct.additionalText && (
//                         <motion.h2
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             transition={{ delay: 0.3 }}
//                             className="text-xl font-bold text-blue-500 mt-8 mb-3"
//                         >
//                             {activeProduct.additionalText}
//                         </motion.h2>
//                     )}

//                     {activeProduct.additionalDescription && (
//                         <motion.p
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             transition={{ delay: 0.35 }}
//                             className="text-md text-gray-700 mb-6"
//                         >
//                             {activeProduct.additionalDescription}
//                         </motion.p>
//                     )}

//                     <motion.h2
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ delay: 0.3 }}
//                         className="text-xl font-bold text-blue-500 mt-8 mb-3"
//                     >
//                         Why Choose {activeProduct.title.split(":")[0]}?
//                     </motion.h2>

//                     <motion.ul
//                         variants={container}
//                         initial="hidden"
//                         animate="show"
//                         className="pl-4 space-y-3 text-gray-800"
//                     >
//                         {activeProduct.features.map((feature, index) => (
//                             <motion.li
//                                 key={index}
//                                 variants={item}
//                                 className="flex items-start text-md"
//                             >
//                                 <motion.div
//                                     className="h-6 w-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5"
//                                     whileHover={{ scale: 1.2, rotate: 5 }}
//                                 >
//                                     <span className="text-white text-sm">✓</span>
//                                 </motion.div>
//                                 <span>{feature}</span>
//                             </motion.li>
//                         ))}
//                     </motion.ul>
//                 </motion.div>
//             </AnimatePresence>
//         </div>
//     );
// }



import { useState, useEffect, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  PlayCircle, 
  ArrowRight,
  Youtube,
  ExternalLink,
  Info,
  CheckCircle
} from "lucide-react";


// Enhanced Product Data with media
const products = [
    {
        id: 1,
        title: "TOAi Images",
        description:
            "TOAi is a cutting-edge AI image generation tool designed to transform the way businesses create product visuals. Built specifically for e-commerce, fashion, and grocery industries, TOAi enables brands to generate high-quality, customizable, and scalable product images in real-time—all while significantly reducing the cost and time of traditional cataloging.",
        features: [
            "High-Quality Product Images – Crisp, professional visuals tailored for online platforms.",
            "Cost & Time Efficiency – Eliminates the need for costly product photography and manual edits.",
            "Customizable & Scalable – Adaptable to different product categories and brand aesthetics.",
            "Real-Time Image Generation – AI-powered automation for instant, on-demand visuals.",
            "Text-to-Image Automation – Simply describe your product, and TOAi brings it to life.",
        ],
        additionalText: "Built for E-Commerce Success",
        additionalDescription:
            "From fashion catalogs to grocery product listings, TOAi delivers AI-driven image perfection, ensuring your products stand out in a competitive digital marketplace.",
        image: "/api/placeholder/600/400",
        videoUrl: "/product1-demo.mp4",
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        id: 2,
        title: "TOAi Vision",
        description:
            "TOAi Vision enhances traditional CCTV systems with AI-driven video analysis and blockchain security. Its AI detects crimes in real-time—such as theft, violence, and unauthorized access—and instantly alerts law enforcement, minimizing false alarms and human effort. Blockchain ensures secure, tamper-proof storage of CCTV data, providing reliable access for authorities. By combining advanced AI with decentralized security, Detectron improves crime detection, accelerates response times, and enhances public safety, making cities smarter and more secure.",
        features: [
            "Real-Time Crime Detection – AI-powered surveillance instantly identifies threats like theft, violence, and unauthorized access.",
            "Minimized False Alarms – Intelligent analysis reduces errors and unnecessary law enforcement interventions.",
            "Tamper-Proof Data Security – Blockchain ensures secure, immutable, and decentralized CCTV footage storage.",
            "Faster Law Enforcement Response – Automated alerts enable quicker crime prevention and investigation.",
            "Scalable & Future-Ready – Designed for smart cities, TOAi Vision adapts to evolving security needs efficiently.",
        ],
        additionalText: "Securing Tomorrow's Smart Cities",
        additionalDescription: "TOAi Vision represents the future of urban security, combining powerful AI with immutable blockchain technology to create safer, more efficient environments.",
        image: "/api/placeholder/600/400",
        videoUrl: "product2-demo.mp4",
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        id: 3,
        title: "TOAi Chat",
        description:
            "Our AI-powered chatbot streamlines customer interactions by answering FAQs, collecting responses, and providing instant quotes. It integrates with CRMs, automates workflows, and supports multi-platform deployment. With secure data handling and customizable plans, businesses can enhance engagement and efficiency. Fast deployment and dedicated support ensure a seamless experience tailored to your needs.",
        features: [
            "Seamless Automation – Answers FAQs, collects responses, and provides instant quotes effortlessly.",
            "Multi-Platform Integration – Works across websites, WhatsApp, Messenger, and more.",
            "Smart AI & CRM Integration – Automates workflows and nurtures leads effectively.",
            "Secure & Scalable – Ensures data privacy with flexible customization options.",
            "Reliable Support – Fast deployment with dedicated 24/7 assistance.",
        ],
        additionalText: "Why Choose TOAi Chat?",
        additionalDescription: "Transform your customer engagement with an intelligent, responsive solution that works across all platforms while maintaining the personal touch your customers expect.",
        image: "/api/placeholder/600/400",
        videoUrl: "product3-demo.mp4",
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
];

export default function ProductItem() {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const defaultTab = searchParams.get("tab") || products[0].title;

    const [activeTab, setActiveTab] = useState(defaultTab);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showBookingForm, setShowBookingForm] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        date: "",
        product: defaultTab
    });
    
    const videoRef = useRef(null);

    const activeProduct = products.find((product) => product.title === activeTab) || products[0];

    useEffect(() => {
        setSearchParams({ tab: activeTab });
        setIsPlaying(false);
    }, [activeTab, setSearchParams]);

    const handleNext = () => {
        const currentIndex = products.findIndex(product => product.title === activeTab);
        const nextIndex = (currentIndex + 1) % products.length;
        setActiveTab(products[nextIndex].title);
    };

    const handlePrevious = () => {
        const currentIndex = products.findIndex(product => product.title === activeTab);
        const prevIndex = (currentIndex - 1 + products.length) % products.length;
        setActiveTab(products[prevIndex].title);
    };

    const toggleVideo = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You would typically send this data to your backend
        console.log("Form submitted:", formData);
        // Show success message and reset
        alert("Demo booking request submitted! We'll contact you soon.");
        setShowBookingForm(false);
        setFormData({
            name: "",
            email: "",
            company: "",
            date: "",
            product: activeTab
        });
    };

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } },
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* Product Navigation Tabs */}
            <div className="sticky top-0 z-30 w-full bg-white shadow-md">
                <div className="max-w-6xl mx-auto">
                    <div className="flex justify-center py-4">
                        {products.map((product) => (
                            <motion.button
                                key={product.id}
                                onClick={() => setActiveTab(product.title)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`relative px-6 py-3 mx-2 text-lg font-bold 
                                ${
                                    activeTab === product.title
                                        ? "text-blue-600 border-b-2 border-blue-600"
                                        : "text-gray-600 hover:text-blue-500"
                                }`}
                            >
                                {product.title.split(":")[0]}
                            </motion.button>
                        ))}
                    </div>
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={activeProduct.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col w-full items-center"
                >
                    {/* 1. CENTERED VIDEO SECTION */}
                    <div className="w-full bg-gray-900 py-16">
                        <div className="max-w-4xl mx-auto px-4">
                            <motion.div 
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border-2 border-gray-800"
                            >
                                {isPlaying ? (
                                    <video 
                                        ref={videoRef}
                                        className="w-full h-full object-cover"
                                        src={activeProduct.videoUrl}
                                        controls
                                        onEnded={() => setIsPlaying(false)}
                                        autoPlay
                                    />
                                ) : (
                                    <>
                                        <img 
                                            src={activeProduct.image} 
                                            alt={activeProduct.title} 
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 flex items-center justify-center">
                                            <motion.button 
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                onClick={toggleVideo}
                                                className="bg-blue-600 hover:bg-blue-700 p-8 rounded-full shadow-xl transition-all duration-300 group"
                                            >
                                                <PlayCircle size={64} className="text-white group-hover:scale-110 transition-transform" />
                                            </motion.button>
                                            <div className="absolute bottom-0 inset-x-0 text-white text-center p-6 bg-gradient-to-t from-black to-transparent">
                                                <h1 className="text-4xl font-bold mb-2">{activeProduct.title}</h1>
                                                <p className="text-white/80 text-lg">
                                                    {activeProduct.additionalText}
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                )}
                                
                                {/* Navigation Arrows */}
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={handlePrevious}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 p-3 rounded-full shadow-lg text-white"
                                >
                                    <ChevronLeft size={28} />
                                </motion.button>
                                
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={handleNext}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 p-3 rounded-full shadow-lg text-white"
                                >
                                    <ChevronRight size={28} />
                                </motion.button>
                            </motion.div>
                        </div>
                    </div>
                    
                    {/* 2. YOUTUBE LINK */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="w-full bg-gray-800 text-center py-4"
                    >
                        <a
                            href={activeProduct.youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-white hover:text-red-400 font-medium transition-colors duration-300 group"
                        >
                            <Youtube size={24} className="mr-2 text-red-500" />
                            Watch the full tutorial on YouTube
                            <ExternalLink size={16} className="ml-2 opacity-70 group-hover:opacity-100" />
                        </a>
                    </motion.div>
                    
                    {/* 3. CONTENT SECTION - FULL WIDTH */}
                    <div className="w-full py-16 px-4">
                        <div className="max-w-6xl mx-auto">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                            >
                                <div className="text-center mb-12">
                                    <h2 className="font-['Syne',_sans-serif] text-black text-4xl md:text-[40px] font-bold tracking-tight leading-tight mt-2">
                                        About {activeProduct.title}
                                    </h2>
                                    <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
                                </div>
                                
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                                    {/* Left column - Description */}
                                    <div>
                                        <h3 className="font-['Syne',_sans-serif] text-black text-4xl md:text-[40px] font-bold tracking-tight leading-tight mt-2">
                                            <Info size={24} className="mr-2" />
                                            Overview
                                        </h3>
                                        
                                        <p className="text-[17px] text-black-700 font-sans mt-4 leading-relaxed">
                                            {activeProduct.description}
                                        </p>
                                        
                                        <div className="text-[17px] text-black-700 font-sans mt-4 leading-relaxed">
                                            <h4 className="font-['Syne',_sans-serif] text-black text-xl md:text-[40px] font-bold tracking-tight leading-tight mt-2">
                                                {activeProduct.additionalText}
                                            </h4>
                                            <p className="text-black-800/80">
                                                {activeProduct.additionalDescription}
                                            </p>
                                        </div>
                                    </div>
                                    
                                    {/* Right column - Features */}
                                    <div>
                                        <h3 className="font-['Syne',_sans-serif] text-black text-4xl md:text-[40px] font-bold tracking-tight leading-tight mt-2">
                                            <CheckCircle size={24} className="mr-2" />
                                            Key Features
                                        </h3>
                                        
                                        <motion.ul
                                            variants={container}
                                            initial="hidden"
                                            animate="show"
                                            className="space-y-4"
                                        >
                                            {activeProduct.features.map((feature, index) => (
                                                <motion.li
                                                    key={index}
                                                    variants={item}
                                                    className="flex items-start p-4 border-l-4 border-blue-500  rounded-r-lg transition-all hover:bg-gray-100 text-[17px] text-black-700 font-sans mt-2 leading-relaxed"
                                                >
                                                    <motion.div
                                                        className="h-6 w-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5"
                                                        whileHover={{ scale: 1.2, rotate: 5 }}
                                                    >
                                                        <span className="text-white text-sm">✓</span>
                                                    </motion.div>
                                                    <span className="text-gray-800">{feature}</span>
                                                </motion.li>
                                            ))}
                                        </motion.ul>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    
                    {/* 4. BOOK DEMO SECTION - AT THE BOTTOM */}
                    <div className="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-16 px-4">
                        <div className="max-w-4xl mx-auto text-center text-white">
                            <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="font-['Syne',_sans-serif] text-white text-4xl md:text-[40px] font-bold tracking-tight leading-tight mt-2"
                            >
                                Ready to experience the power of {activeProduct.title}?
                            </motion.h2>
                            
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-[17px] text-black-700 font-sans mt-4 leading-relaxed pb-6"
                            >
                                Schedule a personalized demo with our product specialists and discover how {activeProduct.title} can transform your business.
                            </motion.p>
                            
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="flex flex-wrap gap-4 justify-center mb-8"
                            >
                                <span className="flex items-center bg-white/20 px-4 font-sans py-2 rounded-full">
                                    <CheckCircle size={16} className="mr-2" />
                                    No credit card required
                                </span>
                                <span className="flex items-center bg-white/20 px-4 font-sans py-2 rounded-full">
                                    <CheckCircle size={16} className="mr-2" />
                                    Live product walkthrough
                                </span>
                                <span className="flex items-center bg-white/20 px-4 font-sans py-2 rounded-full">
                                    <CheckCircle size={16} className="mr-2" />
                                    Custom implementation plan
                                </span>
                            </motion.div>
                            
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => {
                                    setFormData(prev => ({...prev, product: activeProduct.title}));
                                    setShowBookingForm(true);
                                }}
                                className="bg-white text-blue-700 py-4 px-8 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl flex items-center justify-center font-bold text-lg mx-auto group"
                            >
                                <Calendar className="mr-3 group-hover:rotate-12 transition-transform" size={24} />
                                Book Your Free Demo Now
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Booking Form Modal */}
            {showBookingForm && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative"
                    >
                        <button 
                            onClick={() => setShowBookingForm(false)}
                            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
                        >
                            ✕
                        </button>
                        
                        <div className="text-center mb-6">
                            <div className="inline-block p-3 rounded-full bg-blue-100 text-blue-700 mb-4">
                                <Calendar size={28} />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">
                                Book a Demo for {formData.product}
                            </h2>
                            <p className="text-gray-600 mt-2">Fill out the form below and our team will get back to you within 24 hours.</p>
                        </div>
                        
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="John Doe"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="john@example.com"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Company
                                </label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Acme Inc."
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Preferred Date
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleInputChange}
                                    required
                                    min={new Date().toISOString().split('T')[0]}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Product
                                </label>
                                <select
                                    name="product"
                                    value={formData.product}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                >
                                    {products.map(product => (
                                        <option key={product.id} value={product.title}>
                                            {product.title}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-4 rounded-xl shadow transition-colors flex items-center justify-center"
                            >
                                Schedule Demo
                                <ArrowRight className="ml-2" size={18} />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            )}
        </div>
    );
}
