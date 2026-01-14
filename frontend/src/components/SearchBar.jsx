import React, { useContext, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FilterContext } from "../context/FilterContext";
import sampleProducts from "../datas/ProductDatas.js";

export default function SearchBar({ isMobile = false }) {
  const { searchQuery, setSearchQuery } = useContext(FilterContext);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    setShowSuggestion(true);
  };

  const suggestions = sampleProducts.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSuggestionClick = (title) => {
    setSearchQuery(title);
    setShowSuggestion(false);
  };

  return (
    <div className={`relative ${isMobile ? "w-full" : "flex-1 max-w-2xl mx-8"}`}>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full flex items-center bg-white bg-opacity-95 rounded-full px-5 py-2.5 shadow-lg"
      >
        <AiOutlineSearch className="h-5 w-5 text-gray-400 mr-3" />
        <input
          type="text"
          placeholder="Search products..."
          className="w-full bg-transparent outline-none text-gray-700"
          value={searchQuery}
          onChange={handleChange}
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setTimeout(() => setShowSuggestion(false), 200)}
        />
      </form>

      
      {showSuggestion && searchQuery && (
        <ul className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-lg mt-2 max-h-60 overflow-y-auto z-50">
          {suggestions.length > 0 ? (
            suggestions.slice(0, 5).map((item) => (
              <li
                key={item.id}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSuggestionClick(item.title)}
              >
                {item.title}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-500">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
}
