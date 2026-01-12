import React, { useState } from "react";
import { 
  AiOutlinePlus, 
  AiOutlineSearch, 
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineMenu
} from "react-icons/ai";

export default function Navbar({ companyName = "Ecommerce", logoSrc }) {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main navbar row */}
        <div className="flex items-center justify-between py-4">
          {/* Logo and brand */}
          <div className="flex items-center gap-3 group cursor-pointer">
            {logoSrc ? (
              <img
                src={logoSrc}
                alt={`${companyName} logo`}
                className="w-10 h-10 object-contain rounded-lg transition-transform duration-300 group-hover:scale-110"
              />
            ) : (
              <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm text-white font-bold flex items-center justify-center shadow-lg transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
                {companyName.charAt(0).toUpperCase()}
              </div>
            )}
            <span className="font-bold text-xl text-white hidden sm:block transition-all duration-300 group-hover:text-yellow-200">
              {companyName}
            </span>
          </div>

          {/* Desktop search - centered */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <form
              onSubmit={(e) => e.preventDefault()}
              className={`w-full flex items-center bg-white/95 backdrop-blur-sm rounded-full px-5 py-2.5 shadow-lg transition-all duration-300 ${
                searchFocused ? 'ring-4 ring-white/50 scale-105' : 'hover:shadow-xl'
              }`}
            >
              <AiOutlineSearch className="h-5 w-5 text-gray-400 mr-3" />
              <input
                type="search"
                placeholder="Search for products, brands and more..."
                className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
                aria-label="Search"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
            </form>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Mobile menu button */}
            <button
              type="button"
              aria-label="Menu"
              className="md:hidden p-2 text-white hover:bg-white/20 rounded-lg transition-all duration-300"
            >
              <AiOutlineMenu className="w-6 h-6" />
            </button>

            {/* Wishlist button */}
            <button
              type="button"
              aria-label="Wishlist"
              className="hidden sm:flex items-center gap-2 p-2 text-white hover:bg-white/20 rounded-lg transition-all duration-300 group"
            >
              <AiOutlineHeart className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>

            {/* Cart button */}
            <button
              type="button"
              aria-label="Shopping cart"
              className="relative p-2 text-white hover:bg-white/20 rounded-lg transition-all duration-300 group"
            >
              <AiOutlineShoppingCart className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="absolute -top-1 -right-1 bg-yellow-400 text-purple-900 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-lg">
                3
              </span>
            </button>

            {/* Add product button */}
            <button
              type="button"
              aria-label="Add product"
              className="hidden sm:inline-flex items-center gap-2 bg-white text-purple-600 px-4 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <AiOutlinePlus className="w-4 h-4" />
              <span className="hidden lg:inline">Add Product</span>
            </button>

            {/* User profile */}
            <button
              type="button"
              aria-label="User profile"
              className="p-2 text-white hover:bg-white/20 rounded-lg transition-all duration-300 group"
            >
              <AiOutlineUser className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        {/* Mobile search row */}
        <div className="md:hidden pb-4">
          <form
            onSubmit={(e) => e.preventDefault()}
            className={`w-full flex items-center bg-white/95 backdrop-blur-sm rounded-full px-4 py-2.5 shadow-lg transition-all duration-300 ${
              searchFocused ? 'ring-4 ring-white/50' : ''
            }`}
          >
            <AiOutlineSearch className="h-5 w-5 text-gray-400 mr-3" />
            <input
              type="search"
              placeholder="Search products..."
              className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
              aria-label="Search"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
          </form>
        </div>
      </div>
    </header>
  );
}
