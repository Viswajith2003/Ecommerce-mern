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

    return(
        <FilterContext.Provider value={{sortOption,setSortOption,categories,setCategories,maxprice,setMaxPrice}}>
            {children}
        </FilterContext.Provider>
    )
}


