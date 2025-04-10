
import React from 'react';
import { Link } from 'react-router-dom';
// import "../App.jsx"; 

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen text-#000000 bg-gray-100 px-4"
    style={{ padding: '110px 40px 200px 40px' }}>
      <div className="text-center"style={{ padding: '110px 40px 200px 40px' }}>
      <h1 className="text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text mb-[18px]" style={{ fontSize: '80px',fontFamily: 'Syne, sans-serif',  }}>
  4o4
</h1>

        {/* <h1 className="text-7xl font-bold text-gradient-to-r from-blue-400 to-purple-400">404</h1> */}
        <h1 className="mt-0 mr-0 mb-[29px] ml-0 text-2xl font-semibold text-#000000"
        style={{ fontSize: '30px',fontFamily: 'Syne, sans-serif',  }}>Page Not Found</h1>

        <p className="mt-17 text-#000000" style={{ fontSize: '17px',fontFamily: 'Heebo, sans-serif', margin:0 }}>
          The page you are looking for doesn't exist. It may have been 
          moved or <br></br>removed altogether. Please try searching for some other page, or return<br></br>
         to the website's homepage to find what you're looking for.</p>
        
<Link
          to="/" >
            

<div
  style={{
    background: 'linear-gradient(90deg,rgb(114, 146, 196),rgb(141, 113, 204))', // Tailwind's blue-500 to purple-500
    padding: '1px',
    display: 'inline-block',
    borderRadius: '0px',
    marginTop: '50px'
  }}
>
  <button
    className="bg-white text-black py-3 px-6 rounded-md shadow-md transition duration-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400"
    style={{
      

      fontSize: '12px',
      fontFamily: 'Archivo, sans-serif',
      padding: '17px 48px 15px 50px',
      margin: 0,
      borderRadius: '0px',
      backgroundColor: 'white',
      color: 'black',
      border: 'none',
    }}
  >
    B A C K  T O  H O M E
  </button>
</div>



</Link>

      </div>
    </div>
  );
};

export default NotFound;
