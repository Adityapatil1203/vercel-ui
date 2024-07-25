import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <div className="text-xl font-bold">
        <svg
                                    width="60"
                                   height="20"
                              viewBox="0 0 76 65"
                  fill="none" xmlns="http://www.w3.org/2000/svg"><path
            d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#ffffff"/>
            </svg>
             
        </div>
        Vercel
        <div className="hidden md:flex space-x-4">
          <a href="#" className="hover:underline">Products</a>
          <a href="#" className="hover:underline">Solutions</a>
          <a href="#" className="hover:underline">Resources</a>
          <a href="#" className="hover:underline">Enterprise</a>
          <a href="#" className="hover:underline">Docs</a>
          <a href="#" className="hover:underline">Pricing</a>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <a href="#" className="hover:underline">Contact</a>
        <button className="bg-gray-800 px-4 py-2 rounded">Dashboard</button>
        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-blue-500"></div>
      </div>
    </nav>
  );
};

export default Navbar;
