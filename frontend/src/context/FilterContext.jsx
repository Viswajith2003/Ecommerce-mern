import React, { createContext, useReducer, useEffect } from "react";
import { getProducts } from "../services/api.js";

export const FilterContext = createContext();


const initialState = {
  sortOption: "Normal",
  categories: {
    Electronics: false,
    Fashion: false,
    Beauty: false,
    Sports: false,
  },
  maxprice: 0,
  searchQuery: "",
  currentPage: 1,
  products_per_page: 8,
  products: [],
  loading: true,
};


export const ACTIONS = {
  setSortOption: "setSortOption",
  setCategories: "setCategories",
  toggleCategory: "toggleCategory",
  setMaxPrice: "setMaxPrice",
  setSearchQuery: "setSearchQuery",
  setCurrentPage: "setCurrentPage",
  setProducts: "setProducts",
  setLoading: "setLoading",
  resetFilters: "resetFilters",
};


function filterReducer(state, action) {
  switch (action.type) {
    case ACTIONS.setSortOption:
      return {
        ...state,
        sortOption: action.payload,
      };

    case ACTIONS.setCategories:
      return {
        ...state,
        categories: action.payload,
      };

    case ACTIONS.toggleCategory:
      return {
        ...state,
        categories: {
          ...state.categories,
          [action.payload]: !state.categories[action.payload],
        },
      };

    case ACTIONS.setMaxPrice:
      return {
        ...state,
        maxprice: action.payload,
      };

    case ACTIONS.setSearchQuery:
      return {
        ...state,
        searchQuery: action.payload,
        currentPage: 1, // Auto-reset to page 1 when searching
      };

    case ACTIONS.setCurrentPage:
      return {
        ...state,
        currentPage: action.payload,
      };

    case ACTIONS.setProducts:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };

    case ACTIONS.setLoading:
      return {
        ...state,
        loading: action.payload,
      };

    case ACTIONS.resetFilters:
      return {
        ...state,
        sortOption: "Normal",
        categories: {
          Electronics: false,
          Fashion: false,
          Beauty: false,
          Sports: false,
        },
        maxprice: 0,
        searchQuery: "",
        currentPage: 1,
      };

    default:
      return state;
  }
}


export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);

 
  useEffect(() => {
    const fetchProducts = async () => {
      dispatch({ type: ACTIONS.setLoading, payload: true });
      try {
        const data = await getProducts();
        dispatch({ type: ACTIONS.setProducts, payload: data });
        console.log("Products fetched:", data);
      } catch (error) {
        console.error("Error fetching products:", error);
        dispatch({ type: ACTIONS.setLoading, payload: false });
      }
    };
    fetchProducts();
  }, []);

  return (
    <FilterContext.Provider value={{ state, dispatch, ACTIONS }}>
      {children}
    </FilterContext.Provider>
  );
};
