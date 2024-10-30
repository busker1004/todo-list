import { ReactNode, useState } from "react"

import { FilterContext, filterType } from "@context/FilterContext"

export const FilterProvider: React.FC<{children: ReactNode}> = ({children}) => {
    const [filterMode, setFilterMode] = useState<filterType>('all')

    const changeFilterMode = (mode: filterType) => setFilterMode(mode)

    return (
        <FilterContext.Provider value={{filterMode, changeFilterMode}}>
            {children}
        </FilterContext.Provider>
    )
}
