import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Dummy Product Data
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
    },
    {
        id: 2,
        title: "Detectron",
        description:
            "Detectron enhances traditional CCTV systems with AI-driven video analysis and blockchain security. Its AI detects crimes in real-time—such as theft, violence, and unauthorized access—and instantly alerts law enforcement, minimizing false alarms and human effort. Blockchain ensures secure, tamper-proof storage of CCTV data, providing reliable access for authorities. By combining advanced AI with decentralized security, Detectron improves crime detection, accelerates response times, and enhances public safety, making cities smarter and more secure.",
        features: [
            "Real-Time Crime Detection – AI-powered surveillance instantly identifies threats like theft, violence, and unauthorized access.",
            "Minimized False Alarms – Intelligent analysis reduces errors and unnecessary law enforcement interventions.",
            "Tamper-Proof Data Security – Blockchain ensures secure, immutable, and decentralized CCTV footage storage.",
            "Faster Law Enforcement Response – Automated alerts enable quicker crime prevention and investigation.",
            "Scalable & Future-Ready – Designed for smart cities, Detectron adapts to evolving security needs efficiently.",
        ],
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
    },
];

export default function ProductItem() {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const defaultTab = searchParams.get("tab") || products[0].title;

    const [activeTab, setActiveTab] = useState(defaultTab);

    const activeProduct = products.find((product) => product.title === activeTab) || products[0];

    useEffect(() => {
        setSearchParams({ tab: activeTab });
    }, [activeTab, setSearchParams]);

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
        <div className="flex flex-col items-center p-10 min-h-screen bg-gray-50">
            <div className="flex flex-col items-center p-10">
                <div className="flex justify-center gap-10 bg-white p-4 rounded-lg mb-10">
                    {products.map((product) => (
                        <motion.button
                            key={product.id}
                            onClick={() => setActiveTab(product.title)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`relative px-4 py-2 text-lg font-bold tracking-widest uppercase transition-all duration-300 
                            ${
                                activeTab === product.title
                                    ? "text-black border-b-2 border-black"
                                    : "text-gray-800"
                            }
                            hover:text-transparent hover:bg-gradient-to-r from-[rgba(120,45,150,0.8)] via-[rgba(90,30,180,0.8)] via-[rgba(50,20,200,0.8)] via-[rgba(30,40,220,0.8)] to-[rgba(20,60,250,0.8)] bg-clip-text`}
                        >
                            {product.title.split(":")[0]}
                        </motion.button>
                    ))}
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={activeProduct.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="mt-6 p-8 w-full max-w-4xl bg-white rounded-lg shadow-xl"
                >
                    <motion.h1
                        className="text-3xl font-bold text-blue-600 mb-4"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                    >
                        {activeProduct.title}
                    </motion.h1>
                    <motion.p
                        className="text-lg text-gray-700 mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        {activeProduct.description}
                    </motion.p>

                    {activeProduct.additionalText && (
                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-xl font-bold text-blue-500 mt-8 mb-3"
                        >
                            {activeProduct.additionalText}
                        </motion.h2>
                    )}

                    {activeProduct.additionalDescription && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.35 }}
                            className="text-md text-gray-700 mb-6"
                        >
                            {activeProduct.additionalDescription}
                        </motion.p>
                    )}

                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl font-bold text-blue-500 mt-8 mb-3"
                    >
                        Why Choose {activeProduct.title.split(":")[0]}?
                    </motion.h2>

                    <motion.ul
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="pl-4 space-y-3 text-gray-800"
                    >
                        {activeProduct.features.map((feature, index) => (
                            <motion.li
                                key={index}
                                variants={item}
                                className="flex items-start text-md"
                            >
                                <motion.div
                                    className="h-6 w-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5"
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                >
                                    <span className="text-white text-sm">✓</span>
                                </motion.div>
                                <span>{feature}</span>
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}


