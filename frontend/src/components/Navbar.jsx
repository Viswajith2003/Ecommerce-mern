import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from "react-icons/ai";
import SearchBar from "./SearchBar";

export default function Navbar({ companyName = "Ecommerce", logoSrc }) {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main navbar row */}
        <div className="flex items-center justify-between py-4">
          {/* Logo and brand */}
          <Link to="/" className="flex items-center gap-3 group cursor-pointer">
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
          </Link>

          {/* Desktop search - centered */}
          <div className="hidden md:flex flex-1">
            <SearchBar />
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Add Product button */}
            <Link
              to="/addProduct"
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all duration-300 font-semibold"
            >
              <span className="text-lg">+</span>
              <span>Add Product</span>
            </Link>

            {/* Wishlist button */}
            <button
              type="button"
              aria-label="Wishlist"
              className="sm:flex items-center gap-2 p-2 text-white hover:bg-white/20 rounded-lg transition-all duration-300 group"
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
          </div>
        </div>

        {/* Mobile search row - second row */}
        <div className="md:hidden">
          <SearchBar isMobile={true} />
        </div>
      </div>
    </header>
  );
}
