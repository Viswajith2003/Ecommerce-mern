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

    return(
        <FilterContext.Provider value={{sortOption,setSortOption,categories,setCategories}}>
            {children}
        </FilterContext.Provider>
    )
}


