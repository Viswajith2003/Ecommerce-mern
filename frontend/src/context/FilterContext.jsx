import React, { Children, createContext, useState } from "react";


export const FilterContext=createContext();

export const FilterProvider=({children})=>{
    const [sortOption,setSortOption]=useState("Normal")
    const [categories,setCategories]=useState({
        Electronics:false,
        Fashion:false,
        Beauty:false,
        Sports:false,
    })
    const [maxprice,setMaxPrice]=useState(0)
    const [searchQuery,setSearchQuery]=useState("")

    const [currentPage,setCurrentPage]=useState(1)
    const [products_per_page]=useState(8)

    return(
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
                products_per_page
            }}>
            {children}
        </FilterContext.Provider>
    )
}


