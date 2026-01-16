import { useMemo } from "react";

export default function useProductSort(products, sortOption) {
  return useMemo(() => {
    const sorted = [...products];

    switch (sortOption) {
      case "price-asc":
        return sorted.sort((a, b) => a.price - b.price);
      case "price-desc":
        return sorted.sort((a, b) => b.price - a.price);
      case "rating":
        return sorted.sort((a, b) => b.rating - a.rating);
      default:
        return sorted;
    }
  }, [products, sortOption]);
}