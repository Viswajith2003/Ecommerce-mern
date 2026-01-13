import React, { useState } from "react";
import { AiOutlineFilter, AiOutlineDollar } from "react-icons/ai";

export default function Sidebar({ onChange } = {}) {
  const [price, setPrice] = useState(100);
  const [categories, setCategories] = useState({
    Electronics: false,
    Fashion: false,
    Beauty: false,
    Sports: false,
  });
  const [sort, setSort] = useState("Normal");

  function toggleCategory(name) {
    const next = { ...categories, [name]: !categories[name] };
    setCategories(next);
    onChange?.({ price, categories: next, sort });
  }

  function handlePrice(e) {
    const val = Number(e.target.value);
    setPrice(val);
    onChange?.({ price: val, categories, sort });
  }

  function handleSort(e) {
    const val = e.target.value;
    setSort(val);
    onChange?.({ price, categories, sort: val });
  }

  return (
    <aside className="w-full lg:w-72 bg-white rounded-2xl shadow-xl p-6 m-4 lg:sticky lg:top-24 lg:h-fit border border-gray-100">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
        <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg">
          <AiOutlineFilter className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-xl font-bold text-gray-800">Filters</h2>
      </div>

      {/* Price Range Section */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <AiOutlineDollar className="w-5 h-5 text-indigo-600" />
          <h3 className="text-sm font-semibold text-gray-800">Price Range</h3>
        </div>
        
        <div className="space-y-4">
          <div className="relative">
            <input
              type="range"
              min="0"
              max="1000"
              value={price}
              onChange={handlePrice}
              className="w-full h-2 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, #6366f1 0%, #a855f7 ${(price / 1000) * 100}%, #e0e7ff ${(price / 1000) * 100}%, #f3e8ff 100%)`
              }}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 bg-gradient-to-br from-indigo-50 to-purple-50 px-4 py-2 rounded-lg border border-indigo-200">
              <span className="text-xs text-gray-600">$0</span>
              <span className="text-gray-400">-</span>
              <span className="text-sm font-bold text-indigo-600">${price}</span>
            </div>
            <button
              onClick={() => onChange?.({ price, categories, sort })}
              className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Apply
            </button>
          </div>
        </div>
      </div>

      {/* Category Section */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-gray-800 mb-4">Category</h3>
        <div className="space-y-3">
          {Object.keys(categories).map((cat) => (
            <label
              key={cat}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 cursor-pointer transition-all duration-300 group"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  checked={categories[cat]}
                  onChange={() => toggleCategory(cat)}
                  className="peer sr-only"
                />
                <div className="w-5 h-5 border-2 border-gray-300 rounded-md peer-checked:bg-gradient-to-br peer-checked:from-indigo-600 peer-checked:to-purple-600 peer-checked:border-transparent transition-all duration-300 flex items-center justify-center">
                  {categories[cat] && (
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </div>
              <span className="text-sm text-gray-700 group-hover:text-indigo-600 transition-colors duration-300 font-medium">
                {cat}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Sort Section */}
      <div>
        <h3 className="text-sm font-semibold text-gray-800 mb-4">Sort By</h3>
        <div className="relative">
          <select
            value={sort}
            onChange={handleSort}
            className="w-full appearance-none bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 rounded-lg px-4 py-3 pr-10 text-sm font-medium text-gray-700 cursor-pointer hover:border-indigo-300 focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all duration-300"
          >
            <option value="Normal">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Clear Filters Button */}
      <button
        onClick={() => {
          setPrice(100);
          setCategories({
            Beauty: false,
            Electronics: false,
            Dress: false,
            Shoes: false,
          });
          setSort("Normal");
          onChange?.({ price: 100, categories: {}, sort: "Normal" });
        }}
        className="w-full mt-6 py-3 text-sm font-semibold text-gray-600 hover:text-red-600 border-2 border-gray-200 hover:border-red-300 rounded-lg hover:bg-red-50 transition-all duration-300"
      >
        Clear All Filters
      </button>
    </aside>
  );
}
