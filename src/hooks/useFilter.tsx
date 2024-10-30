import { useContext } from "react"

import { FilterContext, FilterContextInterface } from "@/context/FilterContext"

export const useFilter = (): FilterContextInterface => {
    const context = useContext(FilterContext)

    if(!context) throw Error('useFilter must be used within an FilterProvider')

    return context
}