import React from 'react'
import TrustedByMany1 from '../Component/services/TrustedByMany1'
import TrustedByMany2 from '../Component/services/TrustedByMany2'

const Services = () => {
    return (
        <>
            <div className="relative flex flex-col items-center justify-center min-h-[250px] bg-white text-center px-6 md:px-12 py-12 pt-[177px]">
                {/* Section Title */}
                <h1 className="text-3xl font-semibold text-gray  mb-4"style={{fontFamily:"Syne,sans-serif", fontSize:"45px"}}>
                    Our Services
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-#000000 max-w-3xl leading-relaxed py-9 "style={{fontFamily:"Heebo,sans-serif", fontSize:"19px"}}>
                    At <span className="font-semibold text-gray-800">TOSS Consultancy Services</span>, we bring cutting-edge
                    <span className="text-blue-500 font-medium" style={{fontFamily:"Heebo,sans-serif", fontSize:"19px"}}> AI, automation,</span> and
                    <span className="text-blue-500 font-medium"style={{fontFamily:"Heebo,sans-serif", fontSize:"19px"}}> software development</span> to businesses looking for smart,
                    scalable, and efficient solutions. Our expertise spans across multiple domains, ensuring you stay ahead in
                    the digital revolution.
                </p>
            </div>
            <TrustedByMany1 />
            {/* <TrustedByMany2/> */}

            <div className="relative flex flex-col items-center justify-center min-h-[250px] bg-white text-center px-6 md:px-12 py-12">
                <h1 className="text-lg md:text-xl text-#000000 max-w-3xl leading-relaxed py-9 font-bold" >Innovate. Automate. Elevate." – Partner with TOSS Consultancy
                Services for the future of tech.</h1>
            </div>

        </>
    )
}

export default Services;