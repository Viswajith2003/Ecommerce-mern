import React from "react";

export function Pagination({ totalPage, activePage, setActivePage }) {
  const totalPages = totalPage;

  const getItemProps = (index) => ({
    onClick: () => setActivePage(index),
    className: `w-10 h-10 rounded-full font-medium text-sm transition-all duration-200 flex items-center justify-center ${
      activePage === index
        ? "bg-gray-900 text-white shadow-md"
        : "bg-gray-50 text-gray-700 hover:bg-gray-100 active:bg-gray-200"
    }`,
  });

  const next = () => {
    if (activePage === totalPages) return;
    setActivePage(activePage + 1);
  };

  const prev = () => {
    if (activePage === 1) return;
    setActivePage(activePage - 1);
  };

  return (
    <div className="flex items-center gap-4">
      {/* Previous Button */}
      <button
        onClick={prev}
        disabled={activePage === 1}
        className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent transition-all"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Previous
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button key={page} {...getItemProps(page)}>
            {page}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={next}
        disabled={activePage === totalPages}
        className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent transition-all"
      >
        Next
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}