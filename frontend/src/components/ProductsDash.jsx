import React, { useContext, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Pagination } from "./Pagination.jsx";
import { FilterContext, ACTIONS } from "../context/FilterContext.jsx";

export default function ProductsDash() {
  const { state, dispatch } = useContext(FilterContext);
  
  const {
    sortOption,
    categories,
    maxprice,
    searchQuery,
    currentPage,
    products_per_page,
    products,
    loading,
  } = state;

  const sortedProducts = [...products];

  switch (sortOption) {
    case "price-asc":
      sortedProducts.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      sortedProducts.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      sortedProducts.sort((a, b) => b.rating - a.rating);
      break;
    default:
      break;
  }

  const selectedCategories = Object.keys(categories).filter(
    (cat) => categories[cat]
  );
  let filteredProducts = sortedProducts;
  if (selectedCategories.length > 0) {
    filteredProducts = sortedProducts.filter((product) =>
      selectedCategories.includes(product.category)
    );
  }

  if (maxprice > 0) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price <= maxprice
    );
  }

  if (searchQuery) {
    filteredProducts = filteredProducts.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  //Pagination.
  const totalPages = Math.ceil(filteredProducts.length / products_per_page);
  const lastIndex = currentPage * products_per_page;
  const firstIndex = (currentPage - 1) * products_per_page;
  const currentProducts = filteredProducts.slice(firstIndex, lastIndex);

  useEffect(() => {
    dispatch({ type: ACTIONS.setCurrentPage, payload: 1 }); // Reset to page 1 when filters change
  }, [sortOption, categories, maxprice, searchQuery, dispatch]);

  return (
    <>
      {loading ? (
        <div className="flex-1 flex items-center justify-center min-h-screen">
          <p className="text-xl text-gray-600">Loading products...</p>
        </div>
      ) : (
        <div className="flex-1 min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 p-4 lg:p-8">
          <div className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Discover Amazing Products
            </h1>
            <p className="text-gray-600">
              Explore our curated collection of premium products
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Pagination
              totalPage={totalPages}
              activePage={currentPage}
              setActivePage={(page) => dispatch({ type: ACTIONS.setCurrentPage, payload: page })}
            />
          </div>
        </div>
      )}
    </>
  );
}
