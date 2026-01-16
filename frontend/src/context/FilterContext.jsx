import React, { createContext, useState, useEffect } from "react";
import { getProducts } from "../services/api.js";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [sortOption, setSortOption] = useState("Normal");
  const [categories, setCategories] = useState({
    Electronics: false,
    Fashion: false,
    Beauty: false,
    Sports: false,
  });
  const [maxprice, setMaxPrice] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [products_per_page] = useState(8);

 
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = await getProducts();
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.error("fetching data failed", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <FilterContext.Provider
      value={{
        sortOption,
        setSortOption,
        categories,
        setCategories,
        maxprice,
        setMaxPrice,
        searchQuery,
        setSearchQuery,
        currentPage,
        setCurrentPage,
        products_per_page,
        products,
        setProducts,
        loading,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

