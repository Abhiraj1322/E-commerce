import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
   
          <div className="flex-shrink-0 text-2xl font-bold text-black">
            MyShop
          </div>

          <div className="hidden md:flex space-x-7">
            <a href="/" className="text-gray-700 hover:text-indigo-600">Home</a>
            <a href="/shop" className="text-gray-700 hover:text-indigo-600">Shop</a>
            <a href="/about" className="text-gray-700 hover:text-indigo-600">About</a>
            <a href="/contact" className="text-gray-700 hover:text-indigo-600">Contact</a>
          </div>


          <div className="flex items-center space-x-4">
 
            <button aria-label="Cart" className="relative">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-700 hover:text-indigo-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                  
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>


      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a href="/" className="block text-gray-700 hover:text-indigo-600">Home</a>
          <a href="/shop" className="block text-gray-700 hover:text-indigo-600">Shop</a>
          <a href="/about" className="block text-gray-700 hover:text-indigo-600">About</a>
          <a href="/contact" className="block text-gray-700 hover:text-indigo-600">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
