import React from 'react'

const Footer = () => {
  return (
    <div>
<footer className="bg-black text-gray-300 py-10">
  <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

    {/* About */}
    <div>
      <h3 className="text-white text-lg font-semibold mb-4">ShopEase</h3>
      <p className="text-gray-400 text-sm">
        Your one-stop shop for all your needs. Quality products, fast shipping, and great deals.
      </p>
    </div>

    {/* Customer Service */}
    <div>
      <h4 className="text-white font-semibold mb-4">Customer Service</h4>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:text-indigo-400">Help Center</a></li>
        <li><a href="#" className="hover:text-indigo-400">Returns & Refunds</a></li>
        <li><a href="#" className="hover:text-indigo-400">Shipping Info</a></li>
        <li><a href="#" className="hover:text-indigo-400">Track Order</a></li>
      </ul>
    </div>

    {/* About Us */}
    <div>
      <h4 className="text-white font-semibold mb-4">About Us</h4>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:text-indigo-400">Our Story</a></li>
        <li><a href="#" className="hover:text-indigo-400">Careers</a></li>
        <li><a href="#" className="hover:text-indigo-400">Press</a></li>
        <li><a href="#" className="hover:text-indigo-400">Blog</a></li>
      </ul>
    </div>

    {/* Connect */}
    <div>
      <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
      <div className="flex space-x-4 text-gray-400">
        <a href="#" aria-label="Facebook" className="hover:text-indigo-400">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12a10 10 0 008 9.8v-7h-2v-3h2v-2c0-2 1.3-3 3.1-3 .9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.7h2.3l-.4 3h-1.9v7A10 10 0 0022 12z" /></svg>
        </a>
        <a href="#" aria-label="Twitter" className="hover:text-indigo-400">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M22 5.7a8.2 8.2 0 01-2.3.63 4.02 4.02 0 001.7-2.2 8.23 8.23 0 01-2.6 1 4.1 4.1 0 00-7 3.7 11.62 11.62 0 01-8.5-4.3 4.07 4.07 0 001.3 5.5 4.04 4.04 0 01-1.9-.5v.05a4.1 4.1 0 003.3 4 4.14 4.14 0 01-1.9.07 4.1 4.1 0 003.8 2.8 8.23 8.23 0 01-5 1.7A8.4 8.4 0 012 18.4a11.6 11.6 0 006.3 1.8c7.5 0 11.6-6.2 11.6-11.5 0-.2 0-.4 0-.6A8.2 8.2 0 0022 5.7z" /></svg>
        </a>
        <a href="#" aria-label="Instagram" className="hover:text-indigo-400">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2a1 1 0 110 2 1 1 0 010-2zm-5 2a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z"/></svg>
        </a>
      </div>
      <p className="text-xs mt-4 text-gray-500">Subscribe to our newsletter</p>
      <form className="mt-2 flex">
        <input
          type="email"
          placeholder="Your email"
          className="w-full px-3 py-2 rounded-l-md focus:outline-none text-gray-900"
        />
        <button
          type="submit"
          className="bg-indigo-600 px-4 py-2 rounded-r-md hover:bg-indigo-700 transition"
        >
          Subscribe
        </button>
      </form>
    </div>
  </div>

  <div className="mt-10 text-center text-gray-600 text-sm">
    &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
  </div>
</footer>



    </div>
  )
}

export default Footer