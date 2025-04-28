

import React, { useState } from 'react';

const Gallery = () => {
    const [hoveredItem, setHoveredItem] = useState(null);
    
    const products = [
        {
            id: 1,
            image: "/api/placeholder/400/320",
            // title: "Fitness App",
            // description: "Running tracking application with progress indicators",
        },
        {
            id: 2,
            image: "/api/placeholder/400/320",
            // title: "Mobile Device",
            // description: "Smartphone with wireless earbuds",
        },
        {
            id: 3,
            image: "/api/placeholder/400/320",
            // title: "Smartwatch",
            // description: "Health monitoring wearable device",
        },
        {
            id: 4,
            image: "/api/placeholder/400/320",
            // title: "Tablet Interface",
            // description: "Digital drawing and art dashboard",
        },
        {
            id: 5,
            image: "/api/placeholder/400/320",
            // title: "Payment Card",
            // description: "Modern banking solution with smart features",
        },
        {
            id: 6,
            image: "/api/placeholder/400/320",
            // title: "GeerStream Document",
            // description: "Digital documentation with gradient design",
        },
    ];

    return (
        <>
            {/* Added padding to the container - pt-16 for top padding and pb-16 for bottom padding */}
            <div className="max-w-5xl mx-auto p-4 pt-40 pb-20">
                {/* First row with 3 images */}
                <div className="grid grid-cols-3 gap-6 mb-10">
                    {products.slice(0, 3).map((product) => (
                        <div 
                            key={product.id} 
                            className="relative overflow-hidden rounded-lg shadow-md transition-all duration-300 ease-in-out"
                            onMouseEnter={() => setHoveredItem(product.id)}
                            onMouseLeave={() => setHoveredItem(null)}
                            style={{ 
                                transform: hoveredItem === product.id ? 'scale(1.03)' : 'scale(1)',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <img 
                                src={product.image} 
                                alt={product.title} 
                                className="w-full h-64 object-cover"
                            />
                            
                            {/* Hover overlay */}
                            <div 
                                className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end transition-opacity duration-300 ${
                                    hoveredItem === product.id ? 'opacity-100' : 'opacity-0'
                                }`}
                            >
                                <h3 className="text-white text-xl font-semibold">{product.title}</h3>
                                <p className="text-gray-200 text-sm mt-1">{product.description}</p>
                            </div>
                            
                            {/* Action buttons that appear on hover */}
                            {/* <div 
                                className={`absolute top-3 right-3 flex space-x-2 transition-opacity duration-300 ${
                                    hoveredItem === product.id ? 'opacity-100' : 'opacity-0'
                                }`}
                            >
                                <button className="bg-red-500 text-white text-xs font-bold py-1 px-2 rounded flex items-center">
                                    <span className="mr-1">●</span> RELATED
                                </button>
                                {product.id === 3 && (
                                    <button className="bg-white text-black text-xs font-bold py-1 px-2 rounded flex items-center">
                                        <span className="mr-1">🛒</span> BUY NOW
                                    </button>
                                )}
                            </div> */}
                        </div>
                    ))}
                </div>

                {/* Second row with 3 images */}
                <div className="grid grid-cols-3 gap-6">
                    {products.slice(3, 6).map((product) => (
                        <div 
                            key={product.id} 
                            className="relative overflow-hidden rounded-lg shadow-md transition-all duration-300 ease-in-out"
                            onMouseEnter={() => setHoveredItem(product.id)}
                            onMouseLeave={() => setHoveredItem(null)}
                            style={{ 
                                transform: hoveredItem === product.id ? 'scale(1.03)' : 'scale(1)',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <img 
                                src={product.image} 
                                alt={product.title} 
                                className="w-full h-64 object-cover"
                            />
                            
                            {/* Hover overlay */}
                            <div 
                                className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end transition-opacity duration-300 ${
                                    hoveredItem === product.id ? 'opacity-100' : 'opacity-0'
                                }`}
                            >
                                <h3 className="text-white text-xl font-semibold">{product.title}</h3>
                                <p className="text-gray-200 text-sm mt-1">{product.description}</p>
                            </div>
                            
                            {/* Action buttons that appear on hover */}
                            <div 
                                className={`absolute top-3 right-3 flex space-x-2 transition-opacity duration-300 ${
                                    hoveredItem === product.id ? 'opacity-100' : 'opacity-0'
                                }`}
                            >
                                {/* <button className="bg-red-500 text-white text-xs font-bold py-1 px-2 rounded flex items-center">
                                    <span className="mr-1">●</span> RELATED
                                </button> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Gallery;
