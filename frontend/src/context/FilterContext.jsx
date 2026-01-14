import React, { Children, createContext, useState } from "react";


export const FilterContext=createContext();

export const FilterProvider=({children})=>{
    const [sortOption,setSortOption]=useState("Normal")
    return(
        <FilterContext.Provider value={{sortOption,setSortOption}}>
            {children}
        </FilterContext.Provider>
    )
}

// export const useFilters=()=>{
//     return React.useContext(FilterContext)
// }
