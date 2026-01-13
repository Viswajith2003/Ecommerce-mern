import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar({ isMobile = false }) {
  const [searchFocused, setSearchFocused] = useState(false);
  
  if (isMobile) {
    // Mobile search bar
    return (
      <div className="w-full pb-4">
        <form
          onSubmit={(e) => e.preventDefault()}
          className={`w-full flex items-center bg-white bg-opacity-95 rounded-full px-4 py-2.5 shadow-lg transition-all duration-300 ${
            searchFocused ? "ring-4 ring-white/50" : ""
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
    );
  }
  
  // Desktop search bar
  return (
    <div className="flex-1 max-w-2xl mx-8">
      <form
        onSubmit={(e) => e.preventDefault()}
        className={`w-full flex items-center bg-white bg-opacity-95 rounded-full px-5 py-2.5 shadow-lg transition-all duration-300 ${
          searchFocused
            ? "ring-4 ring-white/50 scale-105"
            : "hover:shadow-xl"
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
  );
}
