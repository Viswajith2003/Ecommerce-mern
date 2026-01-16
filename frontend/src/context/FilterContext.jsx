import React, { createContext, useReducer, useEffect } from "react";
import { getProducts } from "../services/api.js";

export const FilterContext = createContext();

// Initial State
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

// Action Types
export const ACTIONS = {
  SET_SORT_OPTION: "SET_SORT_OPTION",
  SET_CATEGORIES: "SET_CATEGORIES",
  TOGGLE_CATEGORY: "TOGGLE_CATEGORY",
  SET_MAX_PRICE: "SET_MAX_PRICE",
  SET_SEARCH_QUERY: "SET_SEARCH_QUERY",
  SET_CURRENT_PAGE: "SET_CURRENT_PAGE",
  SET_PRODUCTS: "SET_PRODUCTS",
  SET_LOADING: "SET_LOADING",
  RESET_FILTERS: "RESET_FILTERS",
};

// Reducer Function
function filterReducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_SORT_OPTION:
      return {
        ...state,
        sortOption: action.payload,
      };

    case ACTIONS.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    case ACTIONS.TOGGLE_CATEGORY:
      return {
        ...state,
        categories: {
          ...state.categories,
          [action.payload]: !state.categories[action.payload],
        },
      };

    case ACTIONS.SET_MAX_PRICE:
      return {
        ...state,
        maxprice: action.payload,
      };

    case ACTIONS.SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
        currentPage: 1, // Auto-reset to page 1 when searching
      };

    case ACTIONS.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    case ACTIONS.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };

    case ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case ACTIONS.RESET_FILTERS:
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

// Provider Component
export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  // Fetch products on mount
  useEffect(() => {
    const fetchProducts = async () => {
      dispatch({ type: ACTIONS.SET_LOADING, payload: true });
      try {
        const data = await getProducts();
        dispatch({ type: ACTIONS.SET_PRODUCTS, payload: data });
        console.log("Products fetched:", data);
      } catch (error) {
        console.error("Error fetching products:", error);
        dispatch({ type: ACTIONS.SET_LOADING, payload: false });
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
