import React, { useState } from "react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export function Pagination() {
  const [active, setActive] = useState(1);
  const totalPages = 5;

  const getItemProps = (index) => ({
    onClick: () => setActive(index),
    className: `w-10 h-10 rounded-full font-semibold transition-all duration-300 ${
      active === index
        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-110"
        : "border-2 border-gray-300 text-gray-700 hover:border-indigo-500 hover:bg-indigo-50"
    }`,
  });

  const next = () => {
    if (active === totalPages) return;
    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
  };

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={prev}
        disabled={active === 1}
        className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-gray-300 text-gray-700 hover:border-indigo-500 hover:bg-indigo-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
        <span className="hidden sm:inline">Previous</span>
      </button>

      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button key={page} {...getItemProps(page)}>
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={next}
        disabled={active === totalPages}
        className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-gray-300 text-gray-700 hover:border-indigo-500 hover:bg-indigo-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
      >
        <span className="hidden sm:inline">Next</span>
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </button>
    </div>
  );
}