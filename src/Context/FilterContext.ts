import { createContext, ReactNode, useState } from "react";


export type filterType = 'all' | 'active' | 'done';

interface FilterContextInterface {
    filterMode: filterType
    changeFilterMode: (mode: filterType) => void
};

export const FilterContext = createContext<FilterContextInterface | undefined>(undefined);