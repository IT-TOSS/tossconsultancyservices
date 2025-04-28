



// import React, { useState, useEffect } from "react";
// import { FiX, FiAlignRight } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState(null);
//   const [isVisible, setIsVisible] = useState(true);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isProductHovered, setIsProductHovered] = useState(false);

//   const navigate = useNavigate();

//   useEffect(() => {
//     let lastScrollTop = 0;
//     const handleScroll = () => {
//       const scrollTop = window.scrollY || document.documentElement.scrollTop;

//       if (scrollTop > lastScrollTop) {
//         setIsVisible(false);
//       } else {
//         setIsVisible(true);
//         setIsScrolled(scrollTop > 50);
//       }

//       lastScrollTop = scrollTop;
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleNavClick = (path) => {
//     navigate(path);
//     setActiveLink(path);
//     setIsOpen(false);
//     setIsMobileMenuOpen(false);
//     setIsProductHovered(false);
//   };

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const productItems = [
//     { name: "TOAi Images", path: "/product?tab=TOAi Images" },
//     { name: "TOAi Vision", path: "/product?tab=Detectron" },
//     { name: "TOAi Chat", path: "/product?tab=TOAi Chat" },
//   ];

//   return (
//     <>
//       <header
//         className={`fixed top-0 py-[30px] left-0 w-full flex items-center  justify-between px-6 pt-10 z-50 transition-all duration-300 transform ${
//           isVisible ? "translate-y-0" : "-translate-y-full"
//         } ${isScrolled ? "bg-white text-black shadow-md" : "bg-transparent text-black"}`}
//       >
//         <h1 className="text-lg font-bold transition-all duration-300 pt-8"style={{fontSize: "17px", fontFamily: "Syne, sans-serif"}}>
//           TOSS Consultancy Services
//         </h1>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex space-x-6 gap-8 items-center ml-auto pr-6 pt-8 ">
//           {[
//             { name: "HOME", path: "/" },
//             { name: "ABOUT", path: "/about" },
//             { name: "SERVICES", path: "/services" },
//             { name: " OUR PRODUCT", path: "/product", hasDropdown: true },
//             { name: "CONTACT US", path: "/contact" },
//           ].map((item) => (
//             <div
//               key={item.path}
//               className="relative"
//               onMouseEnter={() => item.hasDropdown && setIsProductHovered(true)}
//               onMouseLeave={() => item.hasDropdown && setIsProductHovered(false)}
//             >
//               <span
//                 onClick={() => handleNavClick(item.path)}
//                 className={`cursor-pointer font-semibold transition duration-300 ${
//                   activeLink === item.path
//                     ? "text-blue-400"
//                     : isScrolled
//                     ? "text-black hover:text-transparent hover:bg-gradient-to-r from-[rgba(120,45,150,0.8)] via-[rgba(90,30,180,0.8)] via-[rgba(50,20,200,0.8)] via-[rgba(30,40,220,0.8)] to-[rgba(20,60,250,0.8)] bg-clip-text"
//                     : "text-black hover:text-transparent hover:bg-gradient-to-r from-[rgba(120,45,150,0.8)] via-[rgba(90,30,180,0.8)] via-[rgba(50,20,200,0.8)] via-[rgba(30,40,220,0.8)] to-[rgba(20,60,250,0.8)] bg-clip-text"
//                 }`}
//                 style={{fontSize: "17px", fontFamily: "Syne, sans-serif"}}
//               >
//                 {item.name}
//               </span>

//               {item.hasDropdown && isProductHovered && (
//                 <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
//                   {productItems.map((product) => (
//                     <span
//                       key={product.path}
//                       onClick={() => handleNavClick(product.path)}
//                       className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-blue-500 transition duration-300 cursor-pointer"
//                     >
//                       {product.name}
//                     </span>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </nav>

//         {/* Mobile Menu Toggle */}
//         <div
//           className="md:hidden cursor-pointer z-50"
//           onClick={toggleMobileMenu}
//         >
//           <div className="w-6 h-0.5 bg-black mb-1"></div>
//           <div className="w-6 h-0.5 bg-black mb-1"></div>
//           <div className="w-6 h-0.5 bg-black"></div>
//         </div>

//         {/* Sidebar Toggle Icon - Only on Desktop */}
//         <div
//           className="cursor-pointer z-50 hidden md:flex items-center justify-center pt-8"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <FiAlignRight className="text-2xl text-black  " />
//         </div>
//       </header>

//       {/* Mobile Dropdown Menu */}
//       <div
//         className={`fixed top-0 left-0 w-full bg-white shadow-lg transform transition-transform duration-300 z-1000 md:hidden ${
//           isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
//         }`}
//       >
//         <div className="p-6 pt-16">
//           {/* Close Button */}
//           <button
//             className="absolute top-4 right-4 text-black text-2xl"
//             onClick={toggleMobileMenu}
//           >
//             <FiX />
//           </button>

//           {/* Mobile Navigation */}
//           <nav className="flex flex-col space-y-4">
//             {[
//               { name: "HOME", path: "/" },
//               { name: "ABOUT", path: "/about" },
//               { name: "SERVICES", path: "/services" },
//               { name: "PRODUCT", path: "/product", hasDropdown: true },
//               { name: "CONTACT US", path: "/contact" },
//             ].map((item) => (
//               <div key={item.path}>
//                 <span
//                   onClick={() => handleNavClick(item.path)}
//                   className={`font-semibold text-lg p-2 block cursor-pointer ${
//                     activeLink === item.path
//                       ? "text-blue-700 bg-gray-100"
//                       : "text-black hover:bg-gray-50"
//                   }`}
//                 >
//                   {item.name}
//                 </span>

//                 {item.hasDropdown && (
//                   <div className="ml-4 mt-2 space-y-2">
//                     {productItems.map((product) => (
//                       <span
//                         key={product.path}
//                         onClick={() => handleNavClick(product.path)}
//                         className={`block px-2 py-1 cursor-pointer text-black hover:bg-gray-100 hover:text-blue-500 ${
//                           activeLink === product.path ? "text-blue-700" : ""
//                         }`}
//                       >
//                         {product.name}
//                       </span>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </nav>
//         </div>
//       </div>

//       {/* Sidebar */}
//       <div
//         className={` pt-8 fixed top-0 right-0 h-full w-[60%] md:w-[40%] lg:w-[30%] bg-white shadow-lg transform transition-transform duration-300 z-50 hidden md:block ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="p-12 flex flex-col h-full relative ">
//           {/* Close Button */}
//           <button className="absolute top-6 right-6 text-3xl " onClick={() => setIsOpen(false)}>
//             <FiX />
//           </button>

//           <div className="text-left pl-3 pt-15">
//             <h2 className="text-4xl font-bold leading-tight ">TOSS Consultancy Services</h2>
//             <p className="text-gray-600 mt-6 text-lg leading-relaxed">
//               TOSS Consultancy Services is a dynamic technology company at the forefront of AI innovation,<br />
//               automation, and digital transformation. With expertise in AI-powered tools, web & mobile development.
//             </p>
//             <a href="mailto:hr@tosssolution.com" className="text-blue-500 mt-6 block text-lg">
//             hr@tosssolution.com
//             </a>

//             <div className="mt-12 space-y-2 text-lg font-semibold ">
//               <a href="https://www.facebook.com/profile.php?id=100069347405899&amp;mibextid=ZbWKwL" className=" block text-blue"> <i className="fab fa-facebook-f mr-3"></i>FACEBOOK</a>
//               <a href="https://www.instagram.com/tosssolutionsindia/" className="block text-blue"> <i class="fab fa-instagram mr-3"></i>INSTAGRAM</a>
//               <a href="https://www.linkedin.com/company/toss-solutions-training-outsourcing-sales-service?_l=en_US" className="block text-blue "><i class="fab fa-linkedin-in mr-3"></i>LINKEDIN</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;




import React, { useState, useEffect } from "react";
import { FiX, FiAlignRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Tcslogo.png"; // Adjust this if the filename differs

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductHovered, setIsProductHovered] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
        setIsScrolled(scrollTop > 50);
      }
      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (path) => {
    navigate(path);
    setActiveLink(path);
    setIsOpen(false);
    setIsMobileMenuOpen(false);
    setIsProductHovered(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const productItems = [
    { name: "TOAi Images", path: "/product?tab=TOAi Images" },
    { name: "TOAi Vision", path: "/product?tab=Detectron" },
    { name: "TOAi Chat", path: "/product?tab=TOAi Chat" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 py-[30px] left-0 w-full flex items-center justify-between px-6 pt-10 z-50 transition-all duration-300 transform ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${isScrolled ? "bg-white text-black shadow-md" : "bg-transparent text-black"}`}
      >
        {/* Logo + Title */}
        <div className="flex items-center gap-3 pt-8">
          {/* <img 
            src={logo} 
            alt="TCS Logo" 
            className="w-20 h-18 object-contain"
          /> */}
          <h1 
            className="text-lg font-bold transition-all duration-300" 
            style={{ fontSize: "17px", fontFamily: "Syne, sans-serif" }}
          >
            TOSS Consultancy Services
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 gap-8 items-center ml-auto pr-6 pt-8">
          {[
            { name: "HOME", path: "/" },
            { name: "ABOUT", path: "/about" },
            { name: "SERVICES", path: "/services" },
            { name: " OUR PRODUCT", path: "/product", hasDropdown: true },
            { name: "CONTACT US", path: "/contact" },
          ].map((item) => (
            <div
              key={item.path}
              className="relative"
              onMouseEnter={() => item.hasDropdown && setIsProductHovered(true)}
              onMouseLeave={() => item.hasDropdown && setIsProductHovered(false)}
            >
              <span
                onClick={() => handleNavClick(item.path)}
                className={`cursor-pointer font-semibold transition duration-300 ${
                  activeLink === item.path
                    ? "text-blue-400"
                    : isScrolled
                    ? "text-black hover:text-transparent hover:bg-gradient-to-r from-[rgba(120,45,150,0.8)] via-[rgba(90,30,180,0.8)] via-[rgba(50,20,200,0.8)] via-[rgba(30,40,220,0.8)] to-[rgba(20,60,250,0.8)] bg-clip-text"
                    : "text-black hover:text-transparent hover:bg-gradient-to-r from-[rgba(120,45,150,0.8)] via-[rgba(90,30,180,0.8)] via-[rgba(50,20,200,0.8)] via-[rgba(30,40,220,0.8)] to-[rgba(20,60,250,0.8)] bg-clip-text"
                }`}
                style={{ fontSize: "17px", fontFamily: "Syne, sans-serif" }}
              >
                {item.name}
              </span>

              {item.hasDropdown && isProductHovered && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                  {productItems.map((product) => (
                    <span
                      key={product.path}
                      onClick={() => handleNavClick(product.path)}
                      className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-blue-500 transition duration-300 cursor-pointer"
                    >
                      {product.name}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden cursor-pointer z-50"
          onClick={toggleMobileMenu}
        >
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </div>

        {/* Sidebar Toggle Icon - Desktop Only */}
        <div
          className="cursor-pointer z-50 hidden md:flex items-center justify-center pt-8"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FiAlignRight className="text-2xl text-black" />
        </div>
      </header>

      {/* Mobile Dropdown */}
      <div
        className={`fixed top-0 left-0 w-full bg-white shadow-lg transform transition-transform duration-300 z-1000 md:hidden ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="p-6 pt-16">
          <button
            className="absolute top-4 right-4 text-black text-2xl"
            onClick={toggleMobileMenu}
          >
            <FiX />
          </button>

          <nav className="flex flex-col space-y-4">
            {[
              { name: "HOME", path: "/" },
              { name: "ABOUT", path: "/about" },
              { name: "SERVICES", path: "/services" },
              { name: "PRODUCT", path: "/product", hasDropdown: true },
              { name: "CONTACT US", path: "/contact" },
            ].map((item) => (
              <div key={item.path}>
                <span
                  onClick={() => handleNavClick(item.path)}
                  className={`font-semibold text-lg p-2 block cursor-pointer ${
                    activeLink === item.path
                      ? "text-blue-700 bg-gray-100"
                      : "text-black hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </span>

                {item.hasDropdown && (
                  <div className="ml-4 mt-2 space-y-2">
                    {productItems.map((product) => (
                      <span
                        key={product.path}
                        onClick={() => handleNavClick(product.path)}
                        className={`block px-2 py-1 cursor-pointer text-black hover:bg-gray-100 hover:text-blue-500 ${
                          activeLink === product.path ? "text-blue-700" : ""
                        }`}
                      >
                        {product.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`pt-8 fixed top-0 right-0 h-full w-[60%] md:w-[40%] lg:w-[30%] bg-white shadow-lg transform transition-transform duration-300 z-50 hidden md:block ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-12 flex flex-col h-full relative">
          <button className="absolute top-6 right-6 text-3xl" onClick={() => setIsOpen(false)}>
            <FiX />
          </button>

          <div className="text-left pl-3 pt-15">
            <h2 className="text-4xl font-bold leading-tight">TOSS Consultancy Services</h2>
            <p className="text-gray-600 mt-6 text-lg leading-relaxed">
              TOSS Consultancy Services is a dynamic technology company at the forefront of AI innovation,
              automation, and digital transformation. With expertise in AI-powered tools, web & mobile development.
            </p>
            <a href="mailto:hr@tosssolution.com" className="text-blue-500 mt-6 block text-lg">
              hr@tosssolution.com
            </a>

            <div className="mt-12 space-y-2 text-lg font-semibold">
              <a href="https://www.facebook.com/profile.php?id=100069347405899&amp;mibextid=ZbWKwL" className="block text-blue">
                <i className="fab fa-facebook-f mr-3"></i>FACEBOOK
              </a>
              <a href="https://www.instagram.com/tosssolutionsindia/" className="block text-blue">
                <i className="fab fa-instagram mr-3"></i>INSTAGRAM
              </a>
              <a href="https://www.linkedin.com/company/toss-solutions-training-outsourcing-sales-service?_l=en_US" className="block text-blue">
                <i className="fab fa-linkedin-in mr-3"></i>LINKEDIN
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
